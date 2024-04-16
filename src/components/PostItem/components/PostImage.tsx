import React from 'react';
import {Dimensions, Image, ImageStyle, StyleProp} from 'react-native';

import {Post} from '@domain';

type Props = Pick<Post, 'imageURL'>;

export function PostImage({imageURL}: Props) {
  return <Image source={{uri: imageURL}} style={$postImage} />;
}

const $postImage: StyleProp<ImageStyle> = {
  marginHorizontal: -24,
  width: Dimensions.get('screen').width,
  height: 300,
  resizeMode: 'cover',
};
