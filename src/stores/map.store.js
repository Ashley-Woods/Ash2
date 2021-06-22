// src/stores/map.store.js

import { makeAutoObservable } from "mobx";

class mapStore {
  zoom = 15;

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setZoom = (zoom) => {
    this.zoom = zoom;
  };
}

export default mapStore;
