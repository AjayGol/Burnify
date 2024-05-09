import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import TitleView from "@/components/Title";
import {useState} from "react";

export default function AddItemScreen() {
  const navigation = useNavigation();
  const [arrPhoto, setArrPhoto] = useState(['','','',''])

  const onPressGoBack = () => {
    navigation.goBack();
  };

  const renderCamera = () => {
    const boxWidth = Dimensions.get('window').width - 110;

    return(
   <View style={styles.boxContainer}>
     <TitleView text={"Photos"}/>

     <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
       {arrPhoto.map((res: any, index: number) => {
         return <View style={[styles.photos , {width: boxWidth/3, height: (boxWidth/3) * 1.2,  marginRight: (index + 1) % 3 === 0 ? 0 : 25}]}/>
       })}

     </View>

   </View>
    )
  }

  return (
    <>
     <View style={{flex: 1, backgroundColor: '#F3F3F3'}}>
       <View style={{padding: 10, flexDirection: 'row', backgroundColor: '#FFF'}}>
         <View style={{position: 'absolute', left: 0, right:0, top:0, bottom: 0, alignItems: 'center', justifyContent: 'center'}}>
           <Text style={{fontSize: 25, fontWeight: '500'}}>{'List an Item'}</Text>
         </View>
         <TouchableOpacity  onPress={onPressGoBack}>
       <Ionicons size={50}  name={'close'} color={'#46C0EF'}/>
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
    borderRadius: 15
  },
  photos: {
    backgroundColor: '#A3E6FF', marginTop: 20, borderRadius: 10,
  }
});
