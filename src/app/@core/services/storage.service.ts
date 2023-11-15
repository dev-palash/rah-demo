import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  setStorage(key_name, value) {
    localStorage.setItem(key_name, value)
  }
  getStorage(key_name) {
    return localStorage.getItem(key_name)
  }
  removeStorage(key_name) {
    localStorage.removeItem(key_name)
  }
  clearStorage() {
    localStorage.clear();
  }
}
