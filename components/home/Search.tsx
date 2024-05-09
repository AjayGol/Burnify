import React from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';
import TitleView from '@/components/Title';

const Search = () => {
    return (
        <View style={styles.boxView}>
            <TitleView text={'Searchability'} icon={null} />

            <View style={{ marginTop: 15 }}>
                <View style={styles.switchBox}>
                    <Text style={styles.switchText}>{'Allow Local Pickup'}</Text>
                    <Switch
                        trackColor={{ true: '#9DDAF0' }}
                        thumbColor={'#3FBFEF'}
                        ios_backgroundColor="#3e3e3e"
                        value={true}
                    />
                </View>

                <View style={styles.switchBox}>
                    <Text style={styles.switchText}>{'Allow On All Categories'}</Text>
                    <Switch
                        trackColor={{ true: '#9DDAF0' }}
                        thumbColor={'#3FBFEF'}
                        ios_backgroundColor="#3e3e3e"
                        value={true}
                    />
                </View>

                <View style={[styles.switchBox, { marginTop: 10 }]}>
                    <Text style={styles.switchText}>{'Maximum Distance'}</Text>
                    <Text style={styles.totalText}>{'20mi.'}</Text>
                </View>

                <View style={styles.sliderView}>
                    <View
                        style={{
                            backgroundColor: '#3FBFEF',
                            height: 3,
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            bottom: 0,
                            top: 0,
                        }}
                    />
                    <View
                        style={{
                            backgroundColor: '#E8E8E8',
                            height: 3,
                            position: 'absolute',
                            left: '30%',
                            right: 0,
                            bottom: 0,
                            top: 0,
                        }}
                    />
                    <View style={styles.sliderDot} />
                </View>

                <View style={{ marginTop: 10 }}>
                    <Text style={styles.switchText}>{'Condition'}</Text>

                    <View style={styles.tabsContainer}>
                        <View style={styles.tab}>
                            <Text style={styles.tabText}>{'New'}</Text>
                        </View>

                        <View style={styles.tab}>
                            <Text style={styles.tabText}>{'Used'}</Text>
                        </View>

                        <View style={[styles.tab, { backgroundColor: '#26BCF2' }]}>
                            <Text style={styles.tabText}>{'Not Specified'}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    boxView: {
        margin: 10,
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 15,
    },
    switchBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
    switchText: {
        color: '#42C1F0',
        fontSize: 19,
    },
    totalText: {
        color: '#949494',
        fontSize: 18,
    },
    sliderView: { marginVertical: 20, position: 'relative' },
    sliderDot: {
        position: 'absolute',
        top: -11,
        bottom: 0,
        left: '30%',
        right: 0,
        height: 22,
        width: 22,
        backgroundColor: '#3FBFEF',
        borderRadius: 11,
    },

    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    tab: {
        backgroundColor: '#DBDBDB',
        borderRadius: 20,
    },
    tabText: {
        color: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 18,
    },
});

export default Search;
