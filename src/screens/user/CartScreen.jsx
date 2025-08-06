// Updated file: CartScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; // For navigation and route params

const { width } = Dimensions.get('window');

const CartScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { cart: initialCart, setCart: parentSetCart, menuItems } = route.params; // Receive cart, setter, and menuItems
  const [cart, setLocalCart] = useState(initialCart); // Local state for cart

  // Sync local cart changes back to parent if needed (but since it's a separate screen, we update locally and can sync on unmount if desired)
  useEffect(() => {
    return () => {
      parentSetCart(cart); // Sync back to MenuScreen on unmount (optional, depending on app flow)
    };
  }, [cart,parentSetCart]);

  const handleQuantityChange = (id, change) => {
    setLocalCart(prev => {
      const currentQty = prev[id] || 0;
      const newQty = Math.max(0, currentQty + change);
      if (newQty === 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: newQty };
    });
  };

  // Flatten all menu items to find details by id
  const allItems = Object.values(menuItems).flat();

  // Get cart items with details
  const cartItems = Object.entries(cart).map(([id, quantity]) => {
    const item = allItems.find(i => i.id === id);
    return { ...item, quantity };
  });

  // Calculate total amount
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ScrollView style={styles.scrollView}>
          {cartItems.length === 0 ? (
            <Text style={styles.emptyText}>Your cart is empty</Text>
          ) : (
            cartItems.map(item => (
              <View key={item.id} style={styles.itemCard}>
                <Image source={{ uri: item.img }} style={styles.itemImage} />
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}</Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => handleQuantityChange(item.id, -1)}
                  >
                    <Text style={styles.quantityText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{item.quantity}</Text>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => handleQuantityChange(item.id, 1)}
                  >
                    <Text style={styles.quantityText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          )}
        </ScrollView>

        {/* Floating Footer with Total and Proceed Button */}
        {cartItems.length > 0 && (
          <View style={styles.footer}>
            <Text style={styles.totalText}>Total: ₹{totalAmount}</Text>
            <TouchableOpacity 
              style={styles.proceedButton}
              onPress={() => navigation.navigate('PaymentScreen', { totalAmount })}
            >
              <Text style={styles.proceedText}>Proceed to Pay</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c3155', // Brand dark blue for main background
  },
  content: {
    flex: 1,
    paddingTop: 40, // Added top padding to avoid overlapping status bar/charging icons
    backgroundColor: '#0c3155', // Consistent with container
  },
  scrollView: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff', // Dark background for scroll area
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#FFFFFF', // Light text for dark background
  },
  itemCard: {
    flexDirection: 'row',
    backgroundColor: '#1E2A44', // Slightly lighter dark shade for cards (matching sidebar in MenuScreen)
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF', // Light text for dark background
    flex: 1,
  },
  itemPrice: {
    fontSize: 14,
    color: '#FFFFFF', // Light text
    marginBottom: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#0671ca', // Brand primary blue
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  quantity: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF', // Light text
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1E2A44', // Dark footer matching brand
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#2D4062', // Subtle border
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF', // Light text
  },
  proceedButton: {
    backgroundColor: '#0671ca', // Brand primary blue
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  proceedText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default CartScreen;
