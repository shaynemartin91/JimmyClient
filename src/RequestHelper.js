const request = require('request').defaults({
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'api-key': 'A6750DD1-2F04-463E-8D64-6828AFB6143D',
    },
    jar: true 
});

const baseUri = 'https://online.jimmyjohns.com/api';

class RequestHelper {
    static get(path) {
        return new Promise((resolve, reject) => {
            request.get(
                RequestHelper.url(path), 
                RequestHelper.defaultHandler.bind(undefined, resolve, reject)
            );
        });
    }
    
    static post(path, body) {
        return new Promise((resolve, reject) => {
            request.post(
                RequestHelper.url(path), 
                {body: JSON.stringify(body)},
                RequestHelper.defaultHandler.bind(undefined, resolve, reject) 
            );
        });
    }
    
    static put(path, body) {
        return new Promise((resolve, reject) => {
            request.put(
                RequestHelper.url(path), 
                {body: JSON.stringify(body)}, 
                RequestHelper.defaultHandler.bind(undefined, resolve, reject)
            );
        });
    }
    
    static url(path) {
        return baseUri + path;
    }
    
    static defaultHandler(resolve, reject, error, response, body) {
        if(error)
            reject(error);
        else
            resolve(JSON.parse(body));
    }
}

module.exports = RequestHelper;