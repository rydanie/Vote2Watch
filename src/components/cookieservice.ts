import Cookie from 'universal-cookie'

// Creates a new Cookie
const cookie = new Cookie(["user"]);

class CookieService {

    // Gets the information in the cookie at the key
    get(key: string) {
        return cookie.get(key);
    }

    // Sets information in the cookie at index 'key' to have the data variables 'value' an 'options'. Currently using 'value' to store the roomId
    set(key: any, value: any, options: any) {
        cookie.set(key, value, options);
    }

    // Removes the cookies at the key
    remove(key: string) {
        cookie.remove(key);
    }
}

export default new CookieService();