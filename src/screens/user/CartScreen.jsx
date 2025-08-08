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
  FlatList,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const CartScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { cart: initialCart, setCart: parentSetCart, menuItems } = route.params;
  const [cart, setLocalCart] = useState(initialCart);

  // Calculate responsive dimensions
  const getResponsiveDimensions = () => {
    let itemHeight, imageSize, fontSize, spacing;
    
    if (width < 480) {
      // Small phones
      itemHeight = 100;
      imageSize = 70;
      fontSize = { name: 14, price: 12, total: 16, proceed: 14 };
      spacing = { padding: 12, margin: 8 };
    } else if (width < 768) {
      // Large phones
      itemHeight = 110;
      imageSize = 80;
      fontSize = { name: 16, price: 14, total: 18, proceed: 16 };
      spacing = { padding: 15, margin: 10 };
    } else {
      // Tablets
      itemHeight = 120;
      imageSize = 90;
      fontSize = { name: 18, price: 16, total: 20, proceed: 18 };
      spacing = { padding: 18, margin: 12 };
    }
    
    return { itemHeight, imageSize, fontSize, spacing };
  };

  const { itemHeight, imageSize, fontSize, spacing } = getResponsiveDimensions();

  // Sync local cart changes back to parent
  useEffect(() => {
    return () => {
      parentSetCart(cart);
    };
  }, [cart, parentSetCart]);

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

  const handleRemoveItem = (id) => {
    setLocalCart(prev => {
      const { [id]: _, ...rest } = prev;
      return rest;
    });
  };

  // Flatten all menu items to find details by id
  const allItems = Object.values(menuItems).flat();

  // Get cart items with details
  const cartItems = Object.entries(cart).map(([id, quantity]) => {
    const item = allItems.find(i => i.id === id);
    return { ...item, quantity };
  });

  // Calculate totals
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const renderCartItem = ({ item }) => (
    <View style={[styles.itemCard, { 
      height: itemHeight,
      padding: spacing.padding,
      marginBottom: spacing.margin,
    }]}>
      <Image 
        source={{ uri: item.img }} 
        style={[styles.itemImage, { 
          width: imageSize, 
          height: imageSize 
        }]} 
      />
      
      <View style={styles.itemDetails}>
        <View style={styles.itemInfo}>
          <Text 
            style={[styles.itemName, { fontSize: fontSize.name }]} 
            numberOfLines={2}
          >
            {item.name}
          </Text>
          <Text style={[styles.itemPrice, { fontSize: fontSize.price }]}>
            ₹{item.price} each
          </Text>
          <Text style={[styles.itemTotal, { fontSize: fontSize.price + 1 }]}>
            Total: ₹{item.price * item.quantity}
          </Text>
        </View>
      </View>

      <View style={styles.quantitySection}>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => handleRemoveItem(item.id)}
        >
          <Text style={[styles.removeText, { 
            fontSize: width < 480 ? 14 : width < 768 ? 16 : 18 
          }]}>×</Text>
        </TouchableOpacity>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={[styles.quantityButton, {
              width: width < 480 ? 28 : width < 768 ? 32 : 36,
              height: width < 480 ? 28 : width < 768 ? 32 : 36,
            }]}
            onPress={() => handleQuantityChange(item.id, -1)}
          >
            <Text style={[styles.quantityText, { 
              fontSize: width < 480 ? 14 : width < 768 ? 16 : 18 
            }]}>-</Text>
          </TouchableOpacity>
          
          <Text style={[styles.quantity, { 
            fontSize: width < 480 ? 16 : width < 768 ? 18 : 20 
          }]}>{item.quantity}</Text>
          
          <TouchableOpacity
            style={[styles.quantityButton, {
              width: width < 480 ? 28 : width < 768 ? 32 : 36,
              height: width < 480 ? 28 : width < 768 ? 32 : 36,
            }]}
            onPress={() => handleQuantityChange(item.id, 1)}
          >
            <Text style={[styles.quantityText, { 
              fontSize: width < 480 ? 14 : width < 768 ? 16 : 18 
            }]}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const EmptyCart = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>🛒</Text>
      <Text style={[styles.emptyTitle, { fontSize: fontSize.name + 2 }]}>
        Your cart is empty
      </Text>
      <Text style={[styles.emptySubtitle, { fontSize: fontSize.price }]}>
        Add some delicious items to get started
      </Text>
      <TouchableOpacity 
        style={styles.shopButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.shopButtonText}>Continue Shopping</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { marginTop: 10 }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { fontSize: fontSize.name + 4 }]}>
          Your Cart
        </Text>
        {cartItems.length > 0 && (
          <Text style={[styles.itemCount, { fontSize: fontSize.price }]}>
            {totalItems} items
          </Text>
        )}
      </View>

      <View style={styles.content}>
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <FlatList
            data={cartItems}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
          />
        )}

        {/* Floating Footer with Total and Proceed Button */}
        {cartItems.length > 0 && (
          <View style={[styles.footer, { 
            paddingHorizontal: spacing.padding,
            paddingVertical: spacing.padding,
          }]}>
            <View style={styles.totalSection}>
              <Text style={[styles.totalLabel, { fontSize: fontSize.price }]}>
                Total Amount
              </Text>
              <Text style={[styles.totalText, { fontSize: fontSize.total }]}>
                ₹{totalAmount}
              </Text>
            </View>
            <TouchableOpacity 
              style={[styles.proceedButton, {
                paddingVertical: width < 480 ? 12 : width < 768 ? 14 : 16,
                paddingHorizontal: width < 480 ? 20 : width < 768 ? 24 : 28,
              }]}
              onPress={() => navigation.navigate('PaymentScreen', { totalAmount })}
            >
              <Text style={[styles.proceedText, { fontSize: fontSize.proceed }]}>
                Proceed to Pay
              </Text>
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
    backgroundColor: '#0c3155',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'rgba(30, 42, 68, 0.9)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(45, 64, 98, 0.3)',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100%',
  },
  backText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  headerTitle: {
    fontWeight: '700',
    color: '#FFFFFF',
    flex: 1,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  itemCount: {
    color: '#0671ca',
    fontWeight: '600',
    backgroundColor: 'rgba(6, 113, 202, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  content: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  flatListContent: {
    padding: 16,
    paddingBottom: 100, // Space for footer
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyText: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyTitle: {
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptySubtitle: {
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  shopButton: {
    backgroundColor: '#0671ca',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#0671ca',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  shopButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  itemCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  itemImage: {
    borderRadius: 12,
    resizeMode: 'cover',
  },
  itemDetails: {
    flex: 1,
    marginLeft: 16,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
    lineHeight: 20,
  },
  itemPrice: {
    color: '#6B7280',
    fontWeight: '500',
    marginBottom: 4,
  },
  itemTotal: {
    color: '#0671ca',
    fontWeight: '700',
    minWidth: 100, // Ensure minimum width for total
    maxWidth: '90%', // Prevent overflow beyond card
    flexShrink: 1, // Allow text to shrink if needed
  },
  quantitySection: {
    alignItems: 'flex-end',
    marginLeft: 12,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(243, 244, 246, 0.8)',
    borderRadius: 20,
    padding: 4,
    marginTop: 8,
  },
  quantityButton: {
    backgroundColor: '#0671ca',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#0671ca',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  quantityText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  quantity: {
    fontWeight: '700',
    color: '#1F2937',
    marginHorizontal: 16,
    minWidth: 24,
    textAlign: 'center',
  },
  removeButton: {
    backgroundColor: 'white',
    borderRadius: 18,
    width: width < 480 ? 28 : width < 768 ? 32 : 36,
    height: width < 480 ? 28 : width < 768 ? 32 : 36,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#EF4444',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  removeText: {
    color: 'black',
    fontWeight: '700',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(229, 231, 235, 0.8)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  totalSection: {
    flex: 1,
  },
  totalLabel: {
    color: '#6B7280',
    fontWeight: '500',
    marginBottom: 2,
  },
  totalText: {
    fontWeight: '700',
    color: '#1F2937',
  },
  proceedButton: {
    backgroundColor: '#0671ca',
    borderRadius: 25,
    elevation: 4,
    shadowColor: '#0671ca',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  proceedText: {
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default CartScreen;