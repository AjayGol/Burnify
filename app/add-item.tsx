import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import TitleView from '@/components/Title';
import { useState } from 'react';

export default function AddItemScreen() {
  const navigation = useNavigation();
  const [arrPhoto, setArrPhoto] = useState(['', '', '', '']);

  const onPressGoBack = () => {
    navigation.goBack();
  };

  const renderCamera = () => {
    const boxWidth = Dimensions.get('window').width - 110;

    return (
        <View style={styles.boxContainer}>
          <TitleView text={'Photos'} />

          <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
            {arrPhoto.map((res: any, index: number) => {
              return (
                  <View
                      style={[
                        styles.photos,
                        {
                          width: boxWidth / 3,
                          height: (boxWidth / 3) * 1.2,
                          marginRight: (index + 1) % 3 === 0 ? 0 : 25,
                        },
                      ]}>
                    <Image
                        source={require('@/assets/images/icon-add.png')}
                        style={styles.plusImage}
                    />
                  </View>
              );
            })}
          </View>
        </View>
    );
  };

  return (
      <>
        <View style={{ flex: 1, backgroundColor: '#F3F3F3' }}>
          <View style={styles.headerContainer}>
            <View style={styles.headerListTitle}>
              <Text style={{ fontSize: 25, fontWeight: '500' }}>
                {'List an Item'}
              </Text>
            </View>
            <TouchableOpacity onPress={onPressGoBack}>
              <Ionicons size={50} name={'close'} color={'#46C0EF'} />
            </TouchableOpacity>
          </View>

          {renderCamera()}
        </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  boxContainer: {
    margin: 10,
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,
  },
  headerContainer: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#FFF',
  },
  photos: {
    backgroundColor: '#EBF9FF',
    marginTop: 20,
    borderRadius: 10,
    borderStyle: 'dotted',
    borderWidth: 3,
    borderColor: '#A3E6FF',
  },
  plusImage: {
    position: 'absolute',
    bottom: -8,
    right: -8,
    height: 22,
    width: 22,
  },
  headerListTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
