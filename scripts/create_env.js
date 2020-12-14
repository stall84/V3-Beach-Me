const fs = require('fs');

fs.writeFileSync('./.env', `GOOGLE_API_KEY=${process.env.GOOGLE_API_KEY}\n`);