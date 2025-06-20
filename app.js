const express = require('express');
const path = require('path');
const app = express();
const PORT = 8001;

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname)));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Portfolio is running at http://0.0.0.0:${PORT}`);
});
