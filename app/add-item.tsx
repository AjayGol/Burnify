import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import EntypoIcons from '@expo/vector-icons/Entypo';
import TitleView from '@/components/Title';
import { useState } from 'react';
import { Price } from '@/components/home/Price';
import ConfirmItem from '@/components/home/ConfirmItem';

export default function AddItemScreen() {
  const navigation = useNavigation();
  const [arrPhoto, setArrPhoto] = useState(['', '', '', '']);
  const [priceChange, setPriceChange] = useState('');

  const onPressGoBack = () => {
    navigation.goBack();
  };

  const onPressListItem = () => {
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
                      key={index}
                      style={[
                        styles.photos,
                        {
                          width: boxWidth / 3,
                          height: (boxWidth / 3) * 1.2,
                          marginRight: (index + 1) % 3 === 0 ? 0 : 25,
                        },
                      ]}>
                    <EntypoIcons
                        size={25}
                        name={'circle-with-plus'}
                        color={'#46C0EF'}
                        style={styles.plusImage}
                    />
                  </View>
              );
            })}
          </View>
        </View>
    );
  };

  const renderCategory = () => {
    return (
        <View style={styles.boxContainer}>
          <TitleView text={'Category'} />

          <View style={styles.textInput}>
            <TextInput
                style={{ flex: 1 }}
                placeholder={'Search category filters'}
                onChangeText={setPriceChange}
            />
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
          {renderCategory()}
          <Price />
          <ConfirmItem onPressListItem={onPressListItem} />
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
  flexDirectionRow: { flexDirection: 'row' },
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
    bottom: -2,
    right: -2,
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
  textInput: {
    width: '100%',
    height: 36,
    backgroundColor: '#F2F2F7',
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 15,
  },
});
