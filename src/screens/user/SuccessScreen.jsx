// New file: SuccessScreen.js
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const SuccessScreen = () => {
      const navigation = useNavigation();
    
    useEffect(() => {
       const timer = setTimeout(() => {
         navigation.navigate('UserSelection');
       }, 3000); // 3 seconds
   
       return () => clearTimeout(timer);
     }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Payment Successful!</Text>
      <Text style={styles.message}>Thank you for your order. Your payment has been processed.</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0671ca',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#1F2937',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default SuccessScreen;
