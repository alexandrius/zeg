import { API_URL } from 'react-native-dotenv';
import { showErrorToast } from 'utils';
import { Defaults } from 'utils';
import axios from 'axios';

class Ajax {

    headers() {
        return {
            'Authorization': `Bearer ${Defaults.token}`,
            'Content-Type': 'application/json'
        };
    }

    get(uri) {
        return this._fetch(uri, null, 'get');
    }

    post(uri, payload) {
        return this._fetch(uri, payload, 'post');
    }

    delete(uri, payload) {
        return this._fetch(uri, payload, 'delete');
    }

    patch(uri, payload) {
        return this._fetch(uri, payload, 'patch');
    }

    put(uri, payload) {
        return this._fetch(uri, payload, 'put');
    }

    _fetch(uri, data, method) {
        const promise = new Promise((resolve, reject) => {
            const headers = this.headers();
            const url = API_URL + uri;
            this.logRequest(method, url, headers, data);
            axios({ method, url, headers, data }).then(response => {
                if (response.error) {
                    showErrorToast(response.message ? response.message : response.error);
                }
                this.logResponse(method, url, headers, data, JSON.stringify(response.data), response.status);
                resolve(response.data);
            }).catch(error => {
                showErrorToast(`Server Error: ${status}`);
                this.logResponse(method, url, headers, data, error, status);
                reject(error);
            });
        });
        return promise;
    }


    static getParams(payload, request) {
        return payload ? '\n' + (request ? '>>>>>' : '<<<<<') + ' Body Param: ' + JSON.stringify(payload) : '';
    }

    logRequest(method, url, headers, payload = '') {
        console.log('>>>>>>>>>>>>>>>>\n' +
            '>>>>> Headers: ' + JSON.stringify(headers) + '\n' +
            '>>>>> ' + method + ' ' + url +
            Ajax.getParams(payload, true) + '\n' +
            '>>>>>>>>>>>>>>>>');
    }

    logResponse(method, url, headers, payload = '', response, status) {
        console.log(
            '<<<<<<<<<<<<<<<<\n' +
            '<<<<< Headers: ' + JSON.stringify(headers) + '\n' +
            '<<<<< ' + method + ' ' + url + '\n' +
            '<<<<< Status Code: ' + status +
            Ajax.getParams(payload, false) + '\n' +
            '<<<<< ' + response + '\n' +
            '<<<<<<<<<<<<<<<<');
    }
}

export default new Ajax();
