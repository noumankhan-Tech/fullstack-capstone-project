import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { urlConfig } from '../../config';

function SearchPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();
    const handleSearch = async () => {
        const url = `${urlConfig.backendUrl}/api/search?name=${searchQuery}`;
        const response = await fetch(url);
        const data = await response.json();
        setSearchResults(data);
    };
    const goToDetailsPage = (productId) => { navigate(`/app/product/${productId}`); };

    return (
        <div className="container mt-5">
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search gifts" className="form-control" />
            <button onClick={handleSearch} className="btn btn-primary mt-2">Search</button>
            <div className="row mt-3">
                {searchResults.map(gift => (
                    <div key={gift.id} className="col-md-4">
                        <div className="card">
                            <img src={gift.image} alt={gift.name} className="card-img-top" />
                            <div className="card-body">
                                <h5>{gift.name}</h5>
                                <button onClick={() => goToDetailsPage(gift.id)} className="btn btn-primary">View</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default SearchPage;
