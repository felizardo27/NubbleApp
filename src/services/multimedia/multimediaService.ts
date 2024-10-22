import {ImageForUpload} from './multimediaType';

function prepareImageForUpload(imageUri: string): ImageForUpload {
  return {
    uri: imageUri,
    name: 'name',
    type: 'image/png',
  };
}

export const multimediaService = {prepareImageForUpload};
