// src/screens/SplashScreen.jsx
import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('UserSelection');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Background overlay */}
      <View style={styles.overlay} />
      
      {/* Background restaurant image */}
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1200&q=60',
        }}
        style={styles.bg}
        resizeMode="cover"
        blurRadius={3}
      />

      {/* Logo container */}
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=60',
          }}
          style={styles.logo}
          resizeMode="cover"
        />
      </View>

      {/* App name */}
      <Text style={styles.appName}>FoodieHub</Text>
      
      {/* Tagline */}
      <Text style={styles.tagline}>Fresh • Fast • Delicious</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0271CB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.15,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#0271CB',
    opacity: 0.8,
  },
  logoContainer: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#FFFFFF',
    padding: 12,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 68,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
    letterSpacing: 0.5,
    opacity: 0.9,
  },
});

export default SplashScreen;
