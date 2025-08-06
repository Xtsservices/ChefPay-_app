import React, { useEffect, useRef } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, SafeAreaView, 
  Dimensions, ScrollView, Platform, Animated
} from 'react-native';
import AutoScrollAds from '../../components/AutoScrollAds';

const { height, width } = Dimensions.get('window');

const UserSelectionScreen = ({ navigation }) => {
  const go = (t) => navigation.navigate(t === 'employee' ? 'EmployeeLogin' : 'Menu');

  // Animation refs for food items
  const pizza1Anim = useRef(new Animated.Value(0)).current;
  const pizza2Anim = useRef(new Animated.Value(0)).current;
  const burger1Anim = useRef(new Animated.Value(0)).current;
  const burger2Anim = useRef(new Animated.Value(0)).current;
  const coffee1Anim = useRef(new Animated.Value(0)).current;
  const coffee2Anim = useRef(new Animated.Value(0)).current;
  const donut1Anim = useRef(new Animated.Value(0)).current;
  const donut2Anim = useRef(new Animated.Value(0)).current;

  // Floating animation for food items
  const createFloatingAnimation = (animValue, duration = 3000) => {
    return Animated.loop(
      Animated.sequence([
        Animated.timing(animValue, {
          toValue: 1,
          duration: duration,
          useNativeDriver: true,
        }),
        Animated.timing(animValue, {
          toValue: 0,
          duration: duration,
          useNativeDriver: true,
        }),
      ])
    );
  };

  // Rotation animation for food items
  const createRotationAnimation = (animValue, duration = 4000) => {
    return Animated.loop(
      Animated.timing(animValue, {
        toValue: 1,
        duration: duration,
        useNativeDriver: true,
      })
    );
  };

  useEffect(() => {
    // Start all animations with different delays for natural movement
    setTimeout(() => createFloatingAnimation(pizza1Anim, 3000).start(), 0);
    setTimeout(() => createFloatingAnimation(pizza2Anim, 3500).start(), 500);
    setTimeout(() => createFloatingAnimation(burger1Anim, 2800).start(), 1000);
    setTimeout(() => createFloatingAnimation(burger2Anim, 3200).start(), 1500);
    setTimeout(() => createRotationAnimation(coffee1Anim, 4000).start(), 0);
    setTimeout(() => createRotationAnimation(coffee2Anim, 4500).start(), 800);
    setTimeout(() => createFloatingAnimation(donut1Anim, 2500).start(), 2000);
    setTimeout(() => createFloatingAnimation(donut2Anim, 3800).start(), 2500);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Decorative Background Elements */}
      <View style={styles.backgroundDecor}>
        <View style={[styles.decorCircle, styles.decorCircle1]} />
        <View style={[styles.decorCircle, styles.decorCircle2]} />
        <View style={[styles.decorCircle, styles.decorCircle3]} />
        <View style={[styles.decorDot, styles.decorDot1]} />
        <View style={[styles.decorDot, styles.decorDot2]} />
      </View>

      {/* Animated Food Items */}
      <View style={styles.foodAnimations}>
        {/* Pizza animations */}
        <Animated.View
          style={[
            styles.foodItem,
            styles.pizza1,
            {
              transform: [
                {
                  translateY: pizza1Anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -20],
                  }),
                },
                {
                  rotate: pizza1Anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '10deg'],
                  }),
                },
              ],
            },
          ]}
        >
          <Text style={styles.foodEmoji}>🍕</Text>
        </Animated.View>

        <Animated.View
          style={[
            styles.foodItem,
            styles.pizza2,
            {
              transform: [
                {
                  translateY: pizza2Anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 25],
                  }),
                },
                {
                  rotate: pizza2Anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '-15deg'],
                  }),
                },
              ],
            },
          ]}
        >
          <Text style={styles.foodEmoji}>🍕</Text>
        </Animated.View>

        {/* Burger animations */}
        <Animated.View
          style={[
            styles.foodItem,
            styles.burger1,
            {
              transform: [
                {
                  translateY: burger1Anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -30],
                  }),
                },
                {
                  scale: burger1Anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 1.1],
                  }),
                },
              ],
            },
          ]}
        >
          <Text style={styles.foodEmoji}>🍔</Text>
        </Animated.View>

        <Animated.View
          style={[
            styles.foodItem,
            styles.burger2,
            {
              transform: [
                {
                  translateY: burger2Anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 20],
                  }),
                },
                {
                  rotate: burger2Anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '8deg'],
                  }),
                },
              ],
            },
          ]}
        >
          <Text style={styles.foodEmoji}>🍔</Text>
        </Animated.View>

        {/* Coffee animations */}
        <Animated.View
          style={[
            styles.foodItem,
            styles.coffee1,
            {
              transform: [
                {
                  rotate: coffee1Anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            },
          ]}
        >
          <Text style={styles.foodEmoji}>☕</Text>
        </Animated.View>

        <Animated.View
          style={[
            styles.foodItem,
            styles.coffee2,
            {
              transform: [
                {
                  rotate: coffee2Anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '-360deg'],
                  }),
                },
              ],
            },
          ]}
        >
          <Text style={styles.foodEmoji}>☕</Text>
        </Animated.View>

        {/* Donut animations */}
        <Animated.View
          style={[
            styles.foodItem,
            styles.donut1,
            {
              transform: [
                {
                  translateY: donut1Anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -15],
                  }),
                },
                {
                  scale: donut1Anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 1.2],
                  }),
                },
              ],
            },
          ]}
        >
          <Text style={styles.foodEmoji}>🍩</Text>
        </Animated.View>

        <Animated.View
          style={[
            styles.foodItem,
            styles.donut2,
            {
              transform: [
                {
                  translateY: donut2Anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 18],
                  }),
                },
                {
                  rotate: donut2Anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '20deg'],
                  }),
                },
              ],
            },
          ]}
        >
          <Text style={styles.foodEmoji}>🍩</Text>
        </Animated.View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Main Card */}
        <View style={styles.cardBox}>
          {/* Header Section */}
          <View style={styles.header}>
            <Text style={styles.h1}>Are You ?</Text>
          </View>

          {/* Options Row */}
          <View style={styles.row}>
            {/* Staff Access Option */}
            <TouchableOpacity 
              style={styles.cell} 
              onPress={() => go('employee')}
              activeOpacity={0.7}
            >
              <View style={[styles.optCard, styles.primaryCard]}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardTitle}>STAFF</Text>
                </View>
                <View style={styles.iconContainer}>
                  <View style={[styles.iconWrap, styles.primaryIconWrap]}>
                    <Text style={styles.icon}>👨‍💼</Text>
                  </View>
                  <View style={styles.iconGlow} />
                </View>
                <View style={styles.cardFooter}>
                  <Text style={styles.cardLabel}>Access Portal</Text>
                  <View style={styles.arrow}>
                    <Text style={styles.arrowText}>→</Text>
                  </View>
                </View>
              </View>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Staff Access</Text>
                <Text style={styles.sublabel}>Employee Dashboard</Text>
              </View>
            </TouchableOpacity>

            {/* Place Order Option */}
            <TouchableOpacity 
              style={styles.cell} 
              onPress={() => go('customer')}
              activeOpacity={0.7}
            >
              <View style={[styles.optCard, styles.secondaryCard]}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardTitle}>ORDER</Text>
                </View>
                <View style={styles.iconContainer}>
                  <View style={[styles.iconWrap, styles.secondaryIconWrap]}>
                    <Text style={styles.icon}>🍽️</Text>
                  </View>
                  <View style={[styles.iconGlow, styles.secondaryGlow]} />
                </View>
                <View style={styles.cardFooter}>
                  <Text style={styles.cardLabel}>Start Ordering</Text>
                  <View style={styles.arrow}>
                    <Text style={styles.arrowText}>→</Text>
                  </View>
                </View>
              </View>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Place Order</Text>
                <Text style={styles.sublabel}>Customer Portal</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Enhanced Footer */}
          <View style={styles.footer}>
            <View style={styles.brandContainer}>
              <Text style={styles.powered}>Powered by Worldtek</Text>
            </View>
          </View>
        </View>

        {/* Ads Container */}
        <View style={styles.adsContainer}>
          <AutoScrollAds />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a2744',
  },

  backgroundDecor: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  decorCircle: {
    position: 'absolute',
    borderRadius: 1000,
    opacity: 0.08,
  },
  decorCircle1: {
    width: 280,
    height: 280,
    backgroundColor: '#ffffff',
    top: -140,
    right: -140,
  },
  decorCircle2: {
    width: 180,
    height: 180,
    backgroundColor: '#0671ca',
    bottom: 80,
    left: -90,
  },
  decorCircle3: {
    width: 120,
    height: 120,
    backgroundColor: '#10b981',
    top: height * 0.25,
    right: -60,
  },
  decorDot: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    opacity: 0.15,
  },
  decorDot1: {
    top: height * 0.15,
    left: width * 0.1,
  },
  decorDot2: {
    bottom: height * 0.2,
    right: width * 0.15,
  },

  // Food Animation Styles
  foodAnimations: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0.5,
  },
  foodItem: {
    position: 'absolute',
    opacity: 0.6,
  },
  foodEmoji: {
    fontSize: 24,
  },
  pizza1: {
    top: height * 0.15,
    left: width * 0.05,
  },
  pizza2: {
    bottom: height * 0.25,
    right: width * 0.08,
  },
  burger1: {
    top: height * 0.35,
    right: width * 0.02,
  },
  burger2: {
    bottom: height * 0.15,
    left: width * 0.02,
  },
  coffee1: {
    top: height * 0.08,
    right: width * 0.25,
  },
  coffee2: {
    bottom: height * 0.35,
    left: width * 0.15,
  },
  donut1: {
    top: height * 0.25,
    left: width * 0.08,
  },
  donut2: {
    bottom: height * 0.08,
    right: width * 0.15,
  },

  scrollContent: {
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.03,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: height,
    zIndex: 1,
  },

  cardBox: {
    height: height * 0.68,
    width: Math.min(width * 0.9, 650),
    backgroundColor: 'rgba(255,255,255,0)', // Transparent background
    borderRadius: 28,
    paddingVertical: height * 0.04,
    paddingHorizontal: width * 0.06,
    marginBottom: height * 0.03,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 16 },
        shadowOpacity: 0.15,
        shadowRadius: 24,
      },
      android: {
        elevation: 12,
      },
    }),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)', // Adjusted border for visibility
  },

  header: {
    alignItems: 'center',
    marginBottom: height * 0.02,
  },

  h1: {
    fontSize: Math.min(width * 0.075, 36),
    fontWeight: '800',
    color: '#ffffff', // Changed to white for visibility on transparent background
    letterSpacing: -0.5,
    textAlign: 'center',
    marginBottom: 12,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  optCard: {
    width: Math.min(width * 0.32, 160),
    height: Math.min(width * 0.4, 200),
    borderRadius: 20,
    marginBottom: 16,
    padding: 16,
    justifyContent: 'space-between',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  primaryCard: {
    backgroundColor: '#0671ca',
  },
  secondaryCard: {
    backgroundColor: '#10b981',
  },

  cardHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.9)',
    letterSpacing: 1,
  },

  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative',
  },

  iconWrap: {
    width: Math.min(width * 0.14, 60),
    height: Math.min(width * 0.14, 60),
    borderRadius: Math.min(width * 0.07, 30),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    zIndex: 2,
  },
  primaryIconWrap: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: 'rgba(255,255,255,0.4)',
  },
  secondaryIconWrap: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: 'rgba(255,255,255,0.4)',
  },

  iconGlow: {
    position: 'absolute',
    width: Math.min(width * 0.18, 80),
    height: Math.min(width * 0.18, 80),
    borderRadius: Math.min(width * 0.09, 40),
    backgroundColor: 'rgba(255,255,255,0.1)',
    zIndex: 1,
  },
  secondaryGlow: {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },

  icon: {
    fontSize: Math.min(width * 0.07, 28),
  },

  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.9)',
    flex: 1,
  },
  arrow: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '600',
  },

  labelContainer: {
    alignItems: 'center',
  },
  label: {
    fontSize: Math.min(width * 0.042, 19),
    fontWeight: '700',
    color: '#ffffff', // Changed to white for visibility
    textAlign: 'center',
    marginBottom: 4,
  },
  sublabel: {
    fontSize: Math.min(width * 0.032, 14),
    fontWeight: '500',
    color: '#9ca3af', // Lighter gray for contrast
    textAlign: 'center',
  },

  footer: {
    marginTop: 16,
  },
  brandContainer: {
    alignItems: 'center',
  },
  powered: {
    fontSize: Math.min(width * 0.035, 16),
    color: '#9ca3af', // Lighter gray for contrast
    fontWeight: '600',
    letterSpacing: 0.5,
    marginBottom: 4,
  },

  adsContainer: {
    width: Math.min(width * 0.9, 650),
    marginBottom: height * 0.03,
  },
});

export default UserSelectionScreen;