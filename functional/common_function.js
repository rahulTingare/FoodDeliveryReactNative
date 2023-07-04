import axios from 'axios'


function _sendAPIRequest(data, url, action, headers = {}) {
    if (action === 'post') {

        return axios
            .post(url, data, {
                headers:headers
            })
            .then(response => {
                return response;
            })
            .catch(error => {
                return error.response;
            })
    } else if (action === 'get') {
        // let config = {
        //     headers: headers,
        //     params: data,
        // };
        return axios
            .get(url)
            .then(response => {
                return response;
            })
            .catch(error => {
                return error.response;
            })
    } else {
        return axios
            .delete(url,{
                headers:headers
            })
            .then(response => {
                return response;
            })
            .catch(error => {
                return error.response;
            })
    }
}

function _sendAPIRequestForGet(url, action, headers = {}) {
    if (action === 'post') {

        return axios
            .post(url, {
                headers:headers
            })
            .then(response => {
                return response;
            })
            .catch(error => {
                return error.response;
            })
    } else if (action === 'get') {
        // let config = {
        //     headers: headers,
        //     params: data,
        // };
        return axios
            .get(url)
            .then(response => {
                return response;
            })
            .catch(error => {
                return error.response;
            })
    } else {
        return axios
            .delete(url,{
                headers:headers
            })
            .then(response => {
                return response;
            })
            .catch(error => {
                return error.response;
            })
    }
}



export default {
    _sendAPIRequest,
    _sendAPIRequestForGet
}
