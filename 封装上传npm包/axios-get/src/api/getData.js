let axios = require("axios");



exports.getInfo = ( url ) => {
    return axios.get(url);
}

