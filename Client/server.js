const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname, 'dist', 'client')));

// Catch-all route to serve the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'client', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
