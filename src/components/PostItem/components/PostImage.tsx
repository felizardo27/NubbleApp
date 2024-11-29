import React from 'react';
import {Dimensions, Image, ImageStyle, StyleProp} from 'react-native';

import {Post} from '@domain';

const WIDTH = Dimensions.get('screen').width;

type Props = Pick<Post, 'imageURL'>;

export function PostImage({imageURL}: Props) {
  return <Image source={{uri: imageURL}} style={$postImage} />;
}

const $postImage: StyleProp<ImageStyle> = {
  marginHorizontal: -24,
  width: WIDTH,
  height: WIDTH,
  resizeMode: 'cover',
};
