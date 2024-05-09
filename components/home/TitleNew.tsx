import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import TitleView from '@/components/Title';

const TitleNew = () => {
    return (
        <>
            <View style={styles.boxView}>
                <TitleView text={'Title'} icon={'pen'} />
                <TextInput
                    style={styles.input}
                    placeholder={'Tap here to add a title'}
                    placeholderTextColor={'#8D8D8D'}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    boxView: {
        margin: 10,
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 15,
    },
    input: {
        fontSize: 17,
        marginTop: 5,
    },
});

export default TitleNew;
