const {replaceEnvFile} = require('./replaceEnvFile');

replaceEnvFile('.env.dev', '.env');
// eslint-disable-next-line no-console
console.log('_______Replace Dev ENV Success :)_______');
console.log('========================================')
