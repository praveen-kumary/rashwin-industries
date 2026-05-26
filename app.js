import fs from 'fs';

const serverPath = fs.existsSync('./server/server.js') 
    ? './server/server.js' 
    : './dist/server/server.js';

import(serverPath).catch(console.error);
