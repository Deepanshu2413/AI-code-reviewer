require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 3000; // default to 3000 if not set

console.log('PORT from .env:', PORT);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});