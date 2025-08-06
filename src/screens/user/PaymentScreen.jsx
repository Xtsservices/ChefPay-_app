// Updated file: PaymentScreen.js (using image URL instead of generated QR code)
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const PaymentScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { totalAmount } = route.params;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SuccessScreen');
    }, 5000); // 3 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Scan to Pay ₹{totalAmount}</Text>
        <View style={styles.qrContainer}>
          <Image
            source={{ uri: 'https://pvccardprinting.in/wp-content/uploads/2024/07/phone-pe-qr-code-print.webp' }}
            style={styles.qrImage}
          />
        </View>
        <Text style={styles.info}>Redirecting to success in 3 seconds...</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c3155', // Brand dark blue for consistency
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40, // Added top padding to avoid overlapping status bar/charging icons
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    color: '#FFFFFF', // Light text for dark background
  },
  qrContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  qrImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  info: {
    fontSize: 16,
    color: '#FFFFFF', // Light text for dark background
    marginTop: 20,
  },
});

export default PaymentScreen;
