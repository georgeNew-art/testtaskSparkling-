import React from 'react';
import {Alert, Button, Text, View} from 'react-native';
import {observer} from 'mobx-react-lite';

import {styles} from './styles';
import {useStores} from '../../../hooks/useStores';
import ImagePicker from 'react-native-image-crop-picker';
import ListImage from '../../../components/ListImage/ListImage';
import ButtonSubmit from '../../../components/UI/ButtonSubmit/ButtonSubmit';
import {IPicture} from '../../../store/MainCameraStore';
import navigationService from '../../../navigator/navigationService';
import {Screens} from '../../../navigator/consts/Screens';

const MainScreen = observer(() => {
  const {mainCameraStore} = useStores();

  const pickMultiple = (id: number) => {
    ImagePicker.openPicker({
      waitAnimationEnd: false,
      sortOrder: 'desc',
      includeExif: true,
      forceJpg: true,
    }).then((images: any) => {
      mainCameraStore.addImageToArray(images, id);
    });
  };

  const removePicture = (id: number) => {
    mainCameraStore.removeImageFromPictures(id);
  };

  const goToDetailInfo = (item: IPicture) => {
    if (item.selected) {
      navigationService.navigate(Screens.CAMERA_DETAIL_SCREEN, {item});
    } else {
      Alert.alert('Ошибка', 'Пожалуйста саначала выберите изображение');
    }
  };

  return (
    <View style={styles.wrapperContainer}>
      <View>
        <ListImage
          images={mainCameraStore.pictures}
          pickMultiple={pickMultiple}
          removePicture={removePicture}
          goToDetailInfo={goToDetailInfo}
        />
      </View>

      <ButtonSubmit
        text="Сохранить"
        submitFunction={mainCameraStore.sendAllPictures}
        isDisabled={mainCameraStore.isAllImageSelected}
      />
    </View>
  );
});

export default MainScreen;
