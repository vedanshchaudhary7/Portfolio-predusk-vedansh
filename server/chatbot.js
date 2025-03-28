// // // const API_KEY = "AIzaSyAsAeZEL1M_GeFD1gD6q0ZcO7_H3Hxhmlw";  // Replace with your actual Gemini key

// // // // Function to handle message sending
// // // // async function sendMessage() {
// // // //     const inputField = document.getElementById('chat-input');
// // // //     const message = inputField.value.trim();

// // // //     if (message === '') return;  // Don't send empty messages

// // // //     const chatBox = document.getElementById('chat-box');

// // // //     // Display user message
// // // //     const userMessage = document.createElement('div');
// // // //     userMessage.classList.add('message', 'user');
// // // //     userMessage.textContent = message;
// // // //     chatBox.appendChild(userMessage);

// // // //     inputField.value = '';  // Clear input field

// // // //     // API call to Gemini
// // // //     try {
// // // //         const response = await fetch(`https://generativelanguage.googleapis.com/v1beta2/models/gemini-pro:generateText?key=${API_KEY}`, {
// // // //             method: "POST",
// // // //             headers: {
// // // //                 "Content-Type": "application/json"
// // // //             },
// // // //             body: JSON.stringify({
// // // //                 prompt: { text: message }
// // // //             })
// // // //         });

// // // //         if (!response.ok) {
// // // //             throw new Error(`API Error: ${response.status}`);
// // // //         }

// // // //         const data = await response.json();
        
// // // //         // Display bot message
// // // //         const botMessage = document.createElement('div');
// // // //         botMessage.classList.add('message', 'bot');
        
// // // //         if (data && data.candidates && data.candidates[0].output) {
// // // //             botMessage.textContent = data.candidates[0].output;
// // // //         } else {
// // // //             botMessage.textContent = "No response from Gemini 😔";
// // // //         }
        
// // // //         chatBox.appendChild(botMessage);
// // // //         chatBox.scrollTop = chatBox.scrollHeight;  // Auto-scroll

// // // //     } catch (error) {
// // // //         console.error("Error:", error);
        
// // // //         const errorMessage = document.createElement('div');
// // // //         errorMessage.classList.add('message', 'bot');
// // // //         errorMessage.textContent = `Error: ${error.message}`;
// // // //         chatBox.appendChild(errorMessage);
// // // //     }
// // // // }
// // // async function sendMessage() {
// // //     const inputField = document.getElementById('chat-input');
// // //     const message = inputField.value.trim();

// // //     if (message === '') return;  // Don't send empty messages

// // //     const chatBox = document.getElementById('chat-box');

// // //     // Display user message
// // //     const userMessage = document.createElement('div');
// // //     userMessage.classList.add('message', 'user');
// // //     userMessage.textContent = message;
// // //     chatBox.appendChild(userMessage);

// // //     inputField.value = '';  // Clear input field

// // //     // Display "typing..." animation
// // //     const typingMessage = document.createElement('div');
// // //     typingMessage.classList.add('message', 'bot');
// // //     typingMessage.textContent = "Gemini is typing...";
// // //     chatBox.appendChild(typingMessage);
// // //     chatBox.scrollTop = chatBox.scrollHeight;  // Auto-scroll

// // //     // API call to Gemini
// // //     try {
// // //         const response = await fetch(`https://generativelanguage.googleapis.com/v1beta2/models/gemini-pro:generateText?key=${API_KEY}`, {
// // //             method: "POST",
// // //             headers: {
// // //                 "Content-Type": "application/json"
// // //             },
// // //             body: JSON.stringify({
// // //                 prompt: { text: message }
// // //             })
// // //         });

// // //         // Remove "typing..." animation
// // //         chatBox.removeChild(typingMessage);

// // //         if (!response.ok) {
// // //             throw new Error(`API Error: ${response.status}`);
// // //         }

// // //         const data = await response.json();

// // //         // Display bot message
// // //         const botMessage = document.createElement('div');
// // //         botMessage.classList.add('message', 'bot');

// // //         // Improved response handling
// // //         if (data && data.candidates && data.candidates.length > 0) {
// // //             const botResponse = data.candidates[0].output || "No valid response received.";
// // //             botMessage.textContent = botResponse;
// // //         } else {
// // //             botMessage.textContent = "No response from Gemini 😔";
// // //         }

// // //         chatBox.appendChild(botMessage);
// // //         chatBox.scrollTop = chatBox.scrollHeight;

// // //     } catch (error) {
// // //         console.error("Error:", error);

// // //         // Remove "typing..." animation in case of error
// // //         chatBox.removeChild(typingMessage);

// // //         const errorMessage = document.createElement('div');
// // //         errorMessage.classList.add('message', 'bot');
// // //         errorMessage.textContent = `Error: ${error.message}`;
// // //         chatBox.appendChild(errorMessage);
// // //     }
// // // }
// // const axios = require('axios');

// // const API_KEY = "AIzaSyAsAeZEL1M_GeFD1gD6q0ZcO7_H3Hxhmlw";  // Replace with your actual Gemini API key

// // // Function to send a message to Gemini API
// // async function getResponse(message) {
// //     try {
// //         const response = await axios.post(
// //             `https://generativelanguage.googleapis.com/v1beta2/models/gemini-pro:generateText?key=${API_KEY}`,
// //             {
// //                 prompt: { text: message }
// //             }
// //         );

// //         if (response.data && response.data.candidates && response.data.candidates.length > 0) {
// //             return response.data.candidates[0].output || "No valid response received.";
// //         } else {
// //             return "No response from Gemini 😔";
// //         }
// //     } catch (error) {
// //         console.error("Error calling Gemini API:", error);
// //         throw new Error("Failed to get response from Gemini API");
// //     }
// // }

// // // ✅ Correctly export the function
// // module.exports = { getResponse };

// const axios = require('axios');

// const API_KEY = "AIzaSyAsAeZEL1M_GeFD1gD6q0ZcO7_H3Hxhmlw";  // Replace with your actual Gemini API key

// // Function to send a message to Gemini API
// async function getResponse(message) {
//     try {
//         const response = await axios.post(
//             `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`,
//             {
//                 contents: [{ parts: [{ text: message }] }]  // ✅ Updated request format
//             }
//         );

//         if (response.data && response.data.candidates && response.data.candidates.length > 0) {
//             return response.data.candidates[0].content.parts[0].text || "No valid response received.";
//         } else {
//             return "No response from Gemini 😔";
//         }
//     } catch (error) {
//         console.error("Error calling Gemini API:", error.response ? error.response.data : error.message);
//         throw new Error("Failed to get response from Gemini API");
//     }
// }

// // ✅ Export the function
// module.exports = { getResponse };
const axios = require('axios');

const API_KEY = "AIzaSyAsAeZEL1M_GeFD1gD6q0ZcO7_H3Hxhmlw";  // Replace with your valid Gemini API key

// Function to send a message to Gemini API
async function getResponse(message) {
    try {
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro-latest:generateContent?key=${API_KEY}`,  // ✅ Updated model name
            {
                contents: [{ parts: [{ text: message }] }]
            }
        );

        if (response.data && response.data.candidates && response.data.candidates.length > 0) {
            return response.data.candidates[0].content.parts[0].text || "No valid response received.";
        } else {
            return "No response from Gemini 😔";
        }
    } catch (error) {
        console.error("Error calling Gemini API:", error.response ? error.response.data : error.message);
        throw new Error("Failed to get response from Gemini API");
    }
}

module.exports = { getResponse };
