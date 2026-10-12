import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { urlConfig } from '../../config';

function DetailsPage() {
    const { productId } = useParams();
    const [giftDetails, setGiftDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchGiftDetails = async () => {
            try {
                const url = `${urlConfig.backendUrl}/api/gifts/${productId}`;
                const response = await fetch(url);
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const data = await response.json();
                setGiftDetails(data);
            } catch (e) { setError(e.message); }
            finally { setLoading(false); }
        };
        fetchGiftDetails();
        window.scrollTo(0,0);
    }, [productId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!giftDetails) return <div>Gift not found</div>;

    return (
        <div className="container mt-5">
            <h2>{giftDetails.name}</h2>
            <img src={giftDetails.image} alt={giftDetails.name} style={{maxWidth:'400px'}} />
            <p>{giftDetails.description}</p>
            <p>Condition: {giftDetails.condition}</p>
            <p>Category: {giftDetails.category}</p>
        </div>
    );
}
export default DetailsPage;
