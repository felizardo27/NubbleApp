import React, {useState} from 'react';
import {Dimensions, Image} from 'react-native';

import {useToastService} from '@services';

import {Button, Screen, Text, TextInput} from '@components';
import {usePostCreate} from '@domain';
import {AppScreenProps} from '@routes';

const IMAGE_WIDTH = Dimensions.get('screen').width / 2;

export function PublishPostScreen({
  route,
  navigation,
}: AppScreenProps<'PublishPostScreen'>) {
  const imageUri = route.params.imageUri;
  const [description, setDescription] = useState('');

  const {showToast} = useToastService();

  const {createPost, isLoading} = usePostCreate({
    onSuccess: () => {
      navigation.navigate('AppTabNavigator', {screen: 'HomeScreen'});
      showToast({message: 'Foto publicada!', type: 'success'});
    },
  });

  function publishPost() {
    createPost({description, imageUri});
  }

  return (
    <Screen scrollable canGoBack title="Novo Post">
      <Image
        source={{
          uri: imageUri,
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: IMAGE_WIDTH,
          height: IMAGE_WIDTH,
          alignSelf: 'center',
          marginTop: 33,
        }}
      />
      <Text preset="headingSmall" bold mt="s32" mb="s10">
        Escreva uma legenda
      </Text>
      <TextInput
        placeholder="Digite aqui..."
        value={description}
        onChangeText={setDescription}
        containerProps={{
          borderWidth: 0,
        }}
      />
      <Button
        mt="s56"
        title="Publicar post"
        onPress={publishPost}
        loading={isLoading}
        disabled={description.length < 1}
      />
    </Screen>
  );
}
