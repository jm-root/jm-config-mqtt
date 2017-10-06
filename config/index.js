var config = {
    development: {
        port:3000,
      mqtt: 'mqtt://root:123@api.h5.jamma.cn',
        modules: {
            'config': {
                module: 'jm-config'
            },
            'jm-config-mqtt': {
                module: process.cwd() + '/lib'
            }
        }
    },
    production: {
        port: 3000,
        modules: {
            'config': {
                module: 'jm-config'
            },
            'jm-config-mqtt': {
                module: process.cwd() + '/lib'
            }
        }
    }
};

var env = process.env.NODE_ENV||'development';
config = config[env]||config['development'];
config.env = env;

module.exports = config;
