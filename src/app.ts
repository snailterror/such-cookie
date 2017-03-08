/**
 * such-cookie is just 2 simple functions, take on https://www.w3schools.com/js/js_cookies.asp
 **/

/**
 * Set cookies
 * @param name
 * @param value
 * @param expiration
 */
export function setCookie(name: string, value: string, expiration: number = 4) {
    const d = new Date();
    d.setTime(d.getTime() + (expiration * 24 * 60 * 60 * 1000));
    const  expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

/**
 * Get cookie by name
 * @param cname
 * @returns {any}
 */
export function getCookie(cname: string) {
    const name = cname + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }

    return undefined;
}