const {replaceEnvFile} = require('./replaceEnvFile');

replaceEnvFile('.env.production', '.env');

// eslint-disable-next-line no-console
console.log('_______Replace Production ENV Success!!!_______');
console.log('===============================================')
