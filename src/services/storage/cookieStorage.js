const cookieStorageService = (function() {
    let _service;

    function _getService() {
        if(!_service) {
            _service = this;
            return _service;
        }
    }

    function _setToken(tokenObj) {
        setBrowserCookie('access_token', tokenObj.access_token, {});
        setBrowserCookie('refresh_token', tokenObj.refresh_token, {});
    }

    // TODO use typescript with user object.
    function _setUser(userDetails) {
        setBrowserCookie('cur_user', JSON.stringify(userDetails), {});
    }

    function _getUser() {
        const cur_user = getBrowserCookie('cur_user') || "{}";
        return JSON.parse(cur_user);
    }

    function _logoutUser() {
        deleteCookie('cur_user');
        _clearToken();
    }

    function _getAccessToken() {
        return getBrowserCookie('access_token');
    }

    function _getRefreshToken() {
        return getBrowserCookie('refresh_token');
    }

    function _clearToken() {
        deleteCookie('access_token');
        deleteCookie('refresh_token');
    }

    /**
     * Set the cookie name and value, as well as optional parameters
     * @param  {String} name  The name of the cookie
     * @param  {String} value The value of the cookie
     * @param  {Object} opts  Option parameters for the cookie, {end,domain,path,secure}
     * @return {Boolean}       True if cookie is set successfully, False otherwise
     */
    function setBrowserCookie(name, value, opts) {
        if (!name) {
            new Error("Cookie name not provided");
            return false;
        }
        if (typeof value === "undefined" || value === null) {
            new Error("Cookie value not passed or is null");
            return false;
        }
      
        const options = {...{
            end: 0,
            domain: "",
            path: "/",
            secure: true
        }, ...opts};
      
        let expires = "";
      
        if (options.end && isNaN(options.end) === false) {
            const castedEnd = Number(options.end);
            expires = (castedEnd === Infinity) ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + castedEnd;
        }
      
        let cookieStr = '';
      
        cookieStr += encodeURIComponent(name) + '=' + encodeURIComponent(value);
        cookieStr += expires;
        cookieStr += "; domain=" + options.domain;
        cookieStr += "; path=" + options.path;
      
        /* this ternary conditional is needed because `secure` is a flag that is appended based on a Boolean condition */
        cookieStr += (options.secure) ? "; secure" : "";
      
        window.document.cookie = cookieStr;
      
        return true;
    }


    /**
     * Grabs the cookie with the given name.
     * Returns undefined if the cookie is not there.
     * @param  {String} name The cookie name.
     * @return {String}      Either the cookie value as a string or undefined.
     */
    function getBrowserCookie(name) {
        try {
            const nameEQ = name + "=";
            const ca = document.cookie.split(';');
        
            for(let i=0; i < ca.length; i+=1) {
                let c = ca[i];
                while (c.charAt(0)===' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length,c.length));
            }
        } catch (error) {
            // empty
        }
        return undefined;
    }

    /**
     * Removes a cookie
     */
    function deleteCookie(name) {
        if(getBrowserCookie(name)) {
            setBrowserCookie(name, '', {});
        }
    }

    return {
        getService : _getService,
        setToken : _setToken,
        setUser : _setUser,
        getUser : _getUser,
        logoutUser : _logoutUser,
        getAccessToken : _getAccessToken,
        getRefreshToken : _getRefreshToken,
        clearToken : _clearToken
    }    
}) ();

export default cookieStorageService;