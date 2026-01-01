import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PortfolioScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Portfolio</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },
    title: {
        fontSize: 24,
        fontWeight: '600'
    },
})


export default PortfolioScreen;
