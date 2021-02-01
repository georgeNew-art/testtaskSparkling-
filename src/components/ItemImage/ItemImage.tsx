import React from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import {IPicture} from '../../store/MainCameraStore';
import PlusIconSvg from '../../assets/svg/PlusIconSvg';
import MinusIconSvg from '../../assets/svg/MinusIconSvg';

interface Props {
  image: IPicture;
  pickMultiple: (id: number) => void;
  removePicture: (id: number) => void;
  goToDetailInfo: (item: IPicture) => void;
}

const ItemImage = ({
  image,
  pickMultiple,
  removePicture,
  goToDetailInfo,
}: Props) => {
  return (
    <TouchableOpacity
      style={styles.itemWrapper}
      onPress={() => goToDetailInfo(image)}>
      <ImageBackground
        style={styles.itemImage}
        source={{
          uri: image?.uri
            ? image?.uri
            : 'https://pilot23.ru/storage/photo/stub/resized/pilot23_575x445/nophoto_3f71bc90.jpg',
        }}>
        <View style={styles.itemAdder}>
          {!image.selected ? (
            <TouchableOpacity onPress={() => pickMultiple(image.id)}>
              <PlusIconSvg />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => removePicture(image.id)}>
              <MinusIconSvg />
            </TouchableOpacity>
          )}
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ItemImage;
