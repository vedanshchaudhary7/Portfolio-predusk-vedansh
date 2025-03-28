// const express = require('express');
// const cors = require('cors');
// const chatbot = require('./chatbot');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());
// app.use(express.static('public'));

// // Chatbot Route
// app.post('/chat', async (req, res) => {
//     const { message } = req.body;

//     if (!message) {
//         return res.status(400).json({ error: 'Message is required' });
//     }

//     try {
//         const reply = await chatbot.getResponse(message);
//         res.json({ reply });
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).json({ error: 'Failed to get chatbot response' });
//     }
// });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require('express');
const cors = require('cors');
const { getResponse } = require('./chatbot');  // ✅ Destructure the function correctly

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Chatbot Route
app.post('/chat', async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        const reply = await getResponse(message);  // ✅ Use the imported function directly
        res.json({ reply });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to get chatbot response' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
