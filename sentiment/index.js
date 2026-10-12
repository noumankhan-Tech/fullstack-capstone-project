const natural = require('natural');
const Analyzer = natural.SentimentAnalyzer;
const stemmer = natural.PorterStemmer;
const analyzer = new Analyzer("English", stemmer, "afinn");
function getSentiment(text) {
  const score = analyzer.getSentiment(text.split(' '));
  if (score > 0.2) return "positive";
  if (score < -0.2) return "negative";
  return "neutral";
}
module.exports = { getSentiment };
