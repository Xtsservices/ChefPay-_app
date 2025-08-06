import React, { useRef, useEffect } from 'react';
import { View, Image, Animated, Easing, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

/* Default promotional images (change / add as you like) */
const DEFAULT_ADS = [
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=800&q=60',
];

/**
 * AutoScrollAds
 * ------------------------------------------------------------------
 * Self-contained infinite carousel for kiosk / promo banners.
 *
 * Props (all optional):
 *  ─ height   : number    -> slider height   (default 120)
 *  ─ duration : number ms -> full-loop time  (default 20_000)
 *  ─ style    : object    -> extra wrapper styling (e.g. position)
 */
const AutoScrollAds = ({ height = 150, duration = 20_000, style }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const frameWidth = width - 60;            // 30 px padding on each side
  const total = frameWidth * DEFAULT_ADS.length;

  /* endless linear animation */
  useEffect(() => {
    const anim = Animated.loop(
      Animated.timing(scrollX, {
        toValue: -total,
        duration,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );
    anim.start();
    return () => anim.stop();
  }, [scrollX, total, duration]);

  /* duplicate list so the track never shows a gap */
  const imgs = [...DEFAULT_ADS, ...DEFAULT_ADS];

  return (
    <View style={[styles.wrapper, { height }, style]}>
      <Animated.View style={[styles.track, { transform: [{ translateX: scrollX }] }]}>
        {imgs.map((uri, i) => (
          <Image
            key={`ad-${i}`}
            source={{ uri }}
            style={[styles.img, { width: frameWidth, height }]}
            resizeMode="cover"
          />
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { overflow: 'hidden', borderRadius: 12 },
  track:   { flexDirection: 'row' },
  img:     { marginRight: 15, borderRadius: 12, backgroundColor: '#FFF' },
});

export default AutoScrollAds;
