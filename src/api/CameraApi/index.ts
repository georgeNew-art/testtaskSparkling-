import axios from 'axios';

export class CameraApi {
  sendAllImages(postData: any) {
    return axios({
      method: 'POST',
      data: postData,
      headers: {'Content-Type': 'multipart/form-data'},
    });
  }
}
