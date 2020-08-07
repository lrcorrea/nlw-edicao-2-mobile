import React from 'react';
import  { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';

function Favorites(){
    // const navigation = useNavigation();

    // function handleNavigateToGiveClassesPage(){
    //     navigation.navigate('GiveClasses')
    // }

    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys favoritos" />
        </View>
    )
}

export default Favorites;