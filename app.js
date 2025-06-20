const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`🚀 Portfolio is running at http://localhost:${PORT}`);
});
