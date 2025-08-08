import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

const { width, height } = Dimensions.get('window');

// Sample data (reusing Tiffins images for all categories)
const menuItems = {
  Tiffins: [
    { id: 'idly', name: 'Idly', price: 59, img: require('../../assets/tiffins/idly.png') },
    { id: 'dosa', name: 'Dosa', price: 69, img: require('../../assets/tiffins/dosa.png') },
    { id: 'bonda', name: 'Bonda', price: 49, img: require('../../assets/tiffins/bonda.png') },
    { id: 'poori', name: 'Poori', price: 65, img: require('../../assets/tiffins/poori.png') },
  ],
  Starters: [
    { id: 'idly', name: 'Paneer Tikka', price: 129, img: require('../../assets/tiffins/idly.png') },
    { id: 'dosa', name: 'Chicken 65', price: 149, img: require('../../assets/tiffins/dosa.png') },
    { id: 'bonda', name: 'Veg Pakoda', price: 99, img: require('../../assets/tiffins/bonda.png') },
    { id: 'poori', name: 'Fish Fry', price: 139, img: require('../../assets/tiffins/poori.png') },
  ],
  Desserts: [
    { id: 'idly', name: 'Gulab Jamun', price: 79, img: require('../../assets/tiffins/idly.png') },
    { id: 'dosa', name: 'Rasmalai', price: 89, img: require('../../assets/tiffins/dosa.png') },
    { id: 'bonda', name: 'Jalebi', price: 69, img: require('../../assets/tiffins/bonda.png') },
    { id: 'poori', name: 'Kheer', price: 75, img: require('../../assets/tiffins/poori.png') },
  ],
  'Main Course': [
    { id: 'idly', name: 'Butter Chicken', price: 199, img: require('../../assets/tiffins/idly.png') },
    { id: 'dosa', name: 'Paneer Masala', price: 179, img: require('../../assets/tiffins/dosa.png') },
    { id: 'bonda', name: 'Dal Tadka', price: 149, img: require('../../assets/tiffins/bonda.png') },
    { id: 'poori', name: 'Biryani', price: 219, img: require('../../assets/tiffins/poori.png') },
  ],
};

const MenuScreen = () => {
  const [selectedMenu, setSelectedMenu] = useState('Tiffins'); // Default to Tiffins
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState({});

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setItems(menuItems[selectedMenu]);
      setLoading(false);
    }, 1000); // Simulate loading delay
  }, [selectedMenu]);

  const handleQuantityChange = (id, change) => {
    setCart(prev => {
      const currentQty = prev[id] || 0;
      const newQty = Math.max(0, currentQty + change);
      if (newQty === 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: newQty };
    });
  };

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        {/* Sidebar (30% width) */}
        <View style={styles.sidebar}>
          {Object.keys(menuItems).map(menu => (
            <TouchableOpacity
              key={menu}
              style={[
                styles.menuItem,
                selectedMenu === menu && styles.selectedMenuItem,
              ]}
              onPress={() => setSelectedMenu(menu)}
            >
              <Text style={styles.menuText}>{menu}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Item Display */}
        <View style={styles.itemContainer}>
          {loading ? (
            <ActivityIndicator size="large" color="#0671ca" />
          ) : (
            items.map(item => (
              <View key={item.id} style={styles.itemCard}>
                <Image source={item.img} style={styles.itemImage} />
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>₹{item.price}</Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => handleQuantityChange(item.id, -1)}
                  >
                    <Text style={styles.quantityText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{cart[item.id] || 0}</Text>
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
        </View>
      </View>

      {/* Floating Cart Footer */}
      <View style={styles.cartFooter}>
        <Text style={styles.cartText}>{totalItems} Items</Text>
        <TouchableOpacity style={styles.viewCartButton}>
          <Text style={styles.viewCartText}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c3155', // Brand dark blue
  },
  mainContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  sidebar: {
    width: '30%', // 30% width as requested
    backgroundColor: '#1E2A44', // Dark sidebar background similar to image
    paddingVertical: 20,
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2D4062',
  },
  selectedMenuItem: {
    backgroundColor: '#2D4062', // Highlighted selection
  },
  menuText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF', // White text for contrast
  },
  itemContainer: {
    width: '70%', // Remaining 70% for items
    padding: 20,
    backgroundColor: '#F9FAFB', // Light background for item area
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  itemCard: {
    width: '45%', // Two-column grid
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
    marginVertical: 6,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
    marginBottom: 6,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  quantityButton: {
    backgroundColor: '#0671ca', // Brand primary blue
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
  },
  quantityText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  quantity: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginHorizontal: 10,
  },
  cartFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 10,
  },
  cartText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  viewCartButton: {
    backgroundColor: '#0671ca', // Brand primary blue
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  viewCartText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default MenuScreen;