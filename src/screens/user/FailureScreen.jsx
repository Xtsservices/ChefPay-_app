import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Animated, Easing, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const FailureScreen = () => {
  const navigation = useNavigation();
  const scaleValue = useRef(new Animated.Value(0)).current;
  const fadeValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // X icon animation
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 4,
      tension: 50,
      useNativeDriver: true,
    }).start();

    // Fade animation for redirect text
    Animated.timing(fadeValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();

    // Redirect timer
    const timer = setTimeout(() => {
      navigation.navigate('UserSelection');
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  // Responsive font sizes
  const getFontSize = () => {
    if (width < 480) return { title: 24, message: 16, redirect: 14 };
    if (width < 768) return { title: 28, message: 18, redirect: 16 };
    return { title: 32, message: 20, redirect: 18 };
  };

  const { title, message, redirect } = getFontSize();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Animated X Icon */}
        <Animated.View
          style={[
            styles.iconContainer,
            {
              transform: [{ scale: scaleValue }],
            },
          ]}
        >
          <Text style={styles.icon}>✗</Text>
        </Animated.View>

        <Text style={[styles.title, { fontSize: title }]}>
          Payment Failed
        </Text>
        <Text style={[styles.message, { fontSize: message }]}>
          We're sorry, your payment could not be processed. Please try again.
        </Text>
        <Animated.Text
          style={[
            styles.redirectText,
            { fontSize: redirect, opacity: fadeValue },
          ]}
        >
          Redirecting to home in 3 seconds...
        </Animated.Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginHorizontal: 20,
    paddingVertical: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#EF4444',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#EF4444',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    fontSize: 40,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  title: {
    fontWeight: '700',
    color: '#EF4444',
    marginBottom: 12,
    textAlign: 'center',
  },
  message: {
    color: '#1F2937',
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 24,
    marginBottom: 16,
  },
  redirectText: {
    color: '#6B7280',
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default FailureScreen;
