

// ajax 
(function () {
    function ajax(options){
        let settings = {
            url: "",
            method: "GET",
            async: true,
            data:{}
        };
        Object.assign(settings,options);
    
        settings.method = settings.method.toLowerCase();
        settings.url = settings.url.toLowerCase();
        
        if (settings.method === 'get') {
            let dataStr = ''; //数据拼接字符串
    
            Object.keys(settings.data).forEach(key => {
                dataStr += key + '=' + settings.data[key] + '&';
            })
    
            if (dataStr !== '') {
                dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
                settings.url = settings.url + '?' + dataStr;
            }
        } else {
            Object.defineProperty(settings, 'data', {
                value: JSON.stringify(settings.data)
            })
        }
    
       
      
        return new Promise((resolve,reject) => {
            let requestObj;
            if (window.XMLHttpRequest) {
                requestObj = new XMLHttpRequest();
            } else {
               requestObj = new ActiveXObject('Microsoft.XMLHTTP');
            }
    
            
            requestObj.open(settings.method, settings.url, settings.async);
            requestObj.onreadystatechange = function () {
                if(this.readyState == 4 && this.status == 200) {
                    try {
                        let response = JSON.parse ( this.responseText );
                        resolve(response);
                    }catch (e) {
                        reject(e);
                    }
                    
                }
            }
    
            requestObj.onerror = function () {
                reject(requestObj)
            }
    
            if (settings.method === 'get') {
                requestObj.send(null);
            } else {
                requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                requestObj.send(settings.data);
            }
    
        })
    
        
    }
    if (typeof module == 'object' && typeof module.exports == 'object') {
        module.exports = ajax;
    } else {
        window.ajax = ajax;
    }
})()



