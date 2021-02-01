import {makeAutoObservable} from 'mobx';
import Api from '../api/Api';

export interface IPicture {
  id: number;
  uri?: string;
  width?: number;
  height?: number;
  mime?: string;
  selected?: boolean;
}

export class MainCameraStore {
  pictures: IPicture[] = [
    {
      id: 0,
      selected: false,
    },
    {
      id: 1,
      selected: false,
    },
    {
      id: 2,
      selected: false,
    },
    {
      id: 3,
      selected: false,
    },
    {
      id: 4,
      selected: false,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  sendAllPictures = async () => {
    let postData = new FormData();
    this.pictures.forEach((item) => {
      postData.append('photos[]', {
        uri: item.uri,
        name: `photo${item.id}.jpg`,
        type: 'image/jpg',
      });
    });

    Api.cameraApi.sendAllImages(postData);
  };

  addImageToArray = (images: any, id: number) => {
    this.pictures = this.pictures.map((item) => {
      if (item.id === id) {
        item.uri = images.path;
        item.width = images.width;
        item.height = images.height;
        item.mime = images.mime;
        item.selected = true;
      }
      return item;
    });
  };

  removeImageFromPictures = (id: number) => {
    this.pictures = this.pictures.map((item) => {
      if (item.id === id) {
        item.uri = '';
        item.width = 0;
        item.height = 0;
        item.mime = '';
        item.selected = false;
      }
      return item;
    });
  };

  get isAllImageSelected(): boolean {
    const isSelected = this.pictures.some((item) => item.selected === false);
    if (isSelected) {
      return false;
    }
    return true;
  }
}
