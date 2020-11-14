import Cookie from 'universal-cookie'

const cookie = new Cookie();

class CookieService {
    get(key: string) {
        return cookie.get(key);
    }

    set(key, value, options) {
        cookie.set(key, value, options);
    }

    remmove(key: string) {
        cookie.remove(key);
    }
}

export default new CookieService();