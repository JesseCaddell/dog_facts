import express from 'express';
import fetch from 'node-fetch';
const app = express();
const PORT = 3000;

const dogFacts = [
    "A group of pugs is called a grumble.",
    "Dalmations are born without any spots.",
    "Golden Retrievers are excellent swimmers.",
    "Speaking of sleeping … all dogs dream, but puppies and senior dogs dream more frequently than adult dogs.",
    "Seventy percent of people sign their dog’s name on their holiday cards.",
    "Dogs’ noses can sense heat and thermal radiation, which explains why blind or deaf dogs can still hunt.",
    "The Dandie Dinmont Terrier is the only breed named for a fictional person, a character in the novel “Guy Mannering” by Sir Walter Scott."
];

// GET /facts
app.get('/facts', (req, res) => {
    const { number } = req.query;

    if (number) {
        const count = parseInt(number);
        if (isNaN(count) || count <= 0) {
            return res.status(400).json({ success: false, message: 'Invalid number param'})
        }
        const selectedFacts = dogFacts.slice(0, count);
        return res.json({ facts: selectedFacts, success: true });
    } else {
        return res.json({ facts: dogFacts, success: true });
    }
});


//Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});