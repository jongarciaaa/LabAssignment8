import { isNgTemplate } from '@angular/compiler';


export class LocalStorageService<T> {
  getItemsFromLocalStorage: any;

    constructor(private key: string) {

    }

    saveItemsToLocalStorage(items: Array<T> | T) {
        const savedItems = localStorage.setItem(this.key, JSON.stringify(items));
        return savedItems;
    }

    getItemsToLocalStorage(key: string) {
       let savedItems;
        if (key != null) {
            savedItems = JSON.parse(localStorage.getItem(key));
        } else {
            savedItems = JSON.parse(localStorage.getItem(this.key));
        }
        return savedItems;
    }

    clearItemFromLocalStorage(key?: string) {
        if (key != null) {
            const items = null;
            localStorage.setItem(key, JSON.stringify(items));
        } else {
            localStorage.clear();
        }
    }
}
