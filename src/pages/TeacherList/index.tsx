import React from 'react';
import  { View, Image, Text, TouchableOpacity } from 'react-native';

import PageHeader from '../../components/PageHeader'

import styles from './styles';

function TeacherList(){
    // const navigation = useNavigation();

    // function handleNavigateToGiveClassesPage(){
    //     navigation.navigate('GiveClasses')
    // }

    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis" />
        </View>
    )
}

export default TeacherList;