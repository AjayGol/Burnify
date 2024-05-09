import React, { useState } from 'react';
import { View, StyleSheet, Text, Switch, TouchableOpacity } from 'react-native';
import TitleView from '@/components/Title';

const Search = () => {
    const allTabs = ['New', 'Used', 'Not Specified'];

    const [selectedValue, setSelectedValue] = useState('Not Specified');

    const [switches] = useState([
        { title: 'Allow Local Pickup', enabled: true },
        { title: 'Allow On All Categories', enabled: true },
    ]);

    return (
        <View style={styles.boxView}>
            <TitleView text={'Searchability'} icon={null} />

            <View style={{ marginTop: 15 }}>
                {switches?.map((item, index) => {
                    return (
                        <View style={styles.switchBox} key={index}>
                            <Text style={styles.switchText}>{'Allow Local Pickup'}</Text>
                            <Switch
                                trackColor={{ true: '#9DDAF0' }}
                                thumbColor={item.enabled ? '#3FBFEF' : '#fff'}
                                ios_backgroundColor="#3e3e3e"
                                value={item.enabled}
                            />
                        </View>
                    );
                })}

                <View style={[styles.switchBox, { marginTop: 10 }]}>
                    <Text style={styles.switchText}>{'Maximum Distance'}</Text>
                    <Text style={styles.totalText}>{'20mi.'}</Text>
                </View>

                <View style={styles.sliderView}>
                    <View style={styles.SliderLineMain} />
                    <View style={styles.sliderLine} />
                    <View style={styles.sliderDot} />
                </View>

                <View style={{ marginTop: 10 }}>
                    <Text style={styles.switchText}>{'Condition'}</Text>

                    <View style={styles.tabsContainer}>
                        {allTabs?.map(tab => {
                            return (
                                <TouchableOpacity
                                    style={[
                                        styles.tab,
                                        {
                                            backgroundColor:
                                                tab === selectedValue ? '#26BCF2' : '#DBDBDB',
                                        },
                                    ]}
                                    key={tab}
                                    onPress={() => {
                                        setSelectedValue(tab);
                                    }}
                                    activeOpacity={0.5}>
                                    <Text style={styles.tabText}>{tab}</Text>
                                </TouchableOpacity>
                            );
                        })}
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
    sliderLine: {
        backgroundColor: '#E8E8E8',
        height: 3,
        position: 'absolute',
        left: '30%',
        right: 0,
        bottom: 0,
        top: 0,
    },
    SliderLineMain: {
        backgroundColor: '#3FBFEF',
        height: 3,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    },
});

export default Search;
