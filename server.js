const express = require('express');
const path = require('path');

const app = express();

// Log every request to the static files
app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    const homePath = path.join(__dirname, 'uploads', 'home.html');
    console.log(`Sending file: ${homePath}`);
    res.sendFile(homePath, (err) => {
        if (err) {
            console.error('Error sending file:', err);
            res.status(500).send('File not found or error in sending the file.');
        }
    });
});

app.listen(3000, () => {
    console.log('Listening on port 3000...');
});
