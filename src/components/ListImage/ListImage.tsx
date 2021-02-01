import React from 'react';
import {FlatList, Text} from 'react-native';

import {observer} from 'mobx-react-lite';
import {IPicture} from '../../store/MainCameraStore';
import ItemImage from '../ItemImage/ItemImage';
import {styles} from './styles';

interface Props {
  images: IPicture[];
  pickMultiple: (id: number) => void;
  removePicture: (id: number) => void;
  goToDetailInfo: (item: IPicture) => void;
}

const ListImage = observer(
  ({images, pickMultiple, removePicture, goToDetailInfo}: Props) => {
    return (
      <FlatList
        data={images}
        contentContainerStyle={styles.wrapperList}
        horizontal={true}
        renderItem={({item}) => (
          <ItemImage
            image={item}
            pickMultiple={pickMultiple}
            removePicture={removePicture}
            goToDetailInfo={goToDetailInfo}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  },
);

export default ListImage;
