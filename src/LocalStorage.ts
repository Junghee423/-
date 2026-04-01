
class _LocalStorage {
    get(key: string) {
        const item = window.localStorage.getItem(key);
        if (item) {
            return JSON.parse(item);
        }

        return null;
    }

    set(key: string, value: any) {
        window.localStorage.setItem(key, JSON.stringify(value));
    }
}

const LocalStorage = new _LocalStorage();