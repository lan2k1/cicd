const {replaceEnvFile} = require('./replaceEnvFile');

replaceEnvFile('.env.staging', '.env');

// eslint-disable-next-line no-console
console.log('_______Replace Staging ENV Success!!!_______');
console.log('============================================')
