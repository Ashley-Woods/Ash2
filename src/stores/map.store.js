// src/stores/map.store.js

import { makeAutoObservable } from "mobx";

class mapStore {
  zoomLevel = 15;

  constructor(rootStore) {
    //    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setZoomLevel = (zoomLevel) => {
    this.zoomLevel = zoomLevel;
  };
}

export default mapStore;
