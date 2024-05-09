import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import TitleView from '@/components/Title';

const Description = () => {
    return (
        <>
            <View style={styles.boxView}>
                <TitleView text={'Description'} icon={'pen'} />
                <TextInput
                    style={styles.input}
                    placeholder={'Tap here to add a description'}
                    placeholderTextColor={'#8D8D8D'}
                    verticalAlign={'top'}
                    multiline={true}
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
        height: 100,
    },
});

export default Description;
