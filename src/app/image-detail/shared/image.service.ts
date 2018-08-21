import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  visibleImages = [];

  getImages() {
    return this.visibleImages = IMAGES.slice(0);
  }


  getImage(id: number) {
    return IMAGES.slice(0).find(image => image.id === id);
  }

  constructor() {
  }
}

const IMAGES = [
  {'id': 1, 'category': 'boats', 'caption': 'View from a boat', 'url': 'assets/img/boat_01.jpeg'},
  {'id': 2, 'category': 'boats', 'caption': 'View from a boat', 'url': 'assets/img/boat_02.jpeg'},
  {'id': 3, 'category': 'boats', 'caption': 'View from a boat', 'url': 'assets/img/boat_03.jpeg'},
  {'id': 4, 'category': 'camping', 'caption': 'View from a camping', 'url': 'assets/img/camping_01.jpeg'},
  {'id': 5, 'category': 'camping', 'caption': 'View from a camping', 'url': 'assets/img/camping_02.jpeg'},
  {'id': 6, 'category': 'camping', 'caption': 'View from a camping', 'url': 'assets/img/camping_03.jpeg'},
  {'id': 7, 'category': 'camping', 'caption': 'View from a camping', 'url': 'assets/img/camping_05.jpeg'},
  {'id': 8, 'category': 'library', 'caption': 'View from a library', 'url': 'assets/img/library_01.jpeg'},
  {'id': 9, 'category': 'library', 'caption': 'View from a library', 'url': 'assets/img/library_02.jpeg'},
  {'id': 10, 'category': 'library', 'caption': 'View from a library', 'url': 'assets/img/library_03.jpeg'},

];
