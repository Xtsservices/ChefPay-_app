// Sample data with real image URLs for realistic menus (10+ items each)
const menuItems = {
  Tiffins: [
    { id: 'idly', name: 'Idly', price: 59, img: 'https://miro.medium.com/v2/resize:fit:900/1*nfbDiVFxBQGys61H7X7B1A.jpeg' },
    { id: 'dosa', name: 'Dosa', price: 69, img: 'https://delishglobe.com/wp-content/uploads/2024/09/Masala-dosa-1.png' },
    { id: 'bonda', name: 'Bonda', price: 49, img: 'https://www.awesomecuisine.com/wp-content/uploads/2015/08/mangalore-bonda.jpg' },
    { id: 'poori', name: 'Poori', price: 65, img: 'https://www.awesomecuisine.com/wp-content/uploads/2020/03/poori-masala-kizhangu.jpg' },
    { id: 'upma', name: 'Upma', price: 55, img: 'https://source.unsplash.com/200x200/?upma' },
    { id: 'pongal', name: 'Pongal', price: 60, img: 'https://source.unsplash.com/200x200/?pongal' },
    { id: 'vada', name: 'Vada', price: 50, img: 'https://source.unsplash.com/200x200/?vada' },
    { id: 'uttapam', name: 'Uttapam', price: 70, img: 'https://source.unsplash.com/200x200/?uttapam' },
    { id: 'pesarattu', name: 'Pesarattu', price: 75, img: 'https://source.unsplash.com/200x200/?pesarattu' },
    { id: 'appam', name: 'Appam', price: 65, img: 'https://source.unsplash.com/200x200/?appam' },
    { id: 'adhirasam', name: 'Adhirasam', price: 45, img: 'https://source.unsplash.com/200x200/?adhirasam' },
  ],
  Starters: [
    { id: 'paneer-tikka', name: 'Paneer Tikka', price: 129, img: 'https://sharethespice.com/wp-content/uploads/2024/02/Paneer-Tikka-Featured.jpg' },
    { id: 'chicken-65', name: 'Chicken 65', price: 149, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaULrDzejMQMqWTNqOPk1SmuBZ2Q_8C9jmAw&s' },
    { id: 'veg-pakoda', name: 'Veg Pakoda', price: 99, img: 'https://sukhis.com/app/uploads/2013/03/image1.jpg' },
    { id: 'fish-fry', name: 'Fish Fry', price: 139, img: 'https://www.kannammacooks.com/wp-content/uploads/masala-fish-fry-recipe-ayala-meen-Mackerel-fry-8.jpg' },
    { id: 'mushroom-fry', name: 'Mushroom Fry', price: 115, img: 'https://source.unsplash.com/200x200/?mushroom-fry' },
    { id: 'chilli-chicken', name: 'Chilli Chicken', price: 145, img: 'https://source.unsplash.com/200x200/?chilli-chicken' },
    { id: 'gobi-manchurian', name: 'Gobi Manchurian', price: 110, img: 'https://source.unsplash.com/200x200/?gobi-manchurian' },
    { id: 'prawn-fry', name: 'Prawn Fry', price: 159, img: 'https://source.unsplash.com/200x200/?prawn-fry' },
    { id: 'soya-chaap', name: 'Soya Chaap', price: 105, img: 'https://source.unsplash.com/200x200/?soya-chaap' },
    { id: 'kebab', name: 'Seekh Kebab', price: 135, img: 'https://source.unsplash.com/200x200/?kebab' },
    { id: 'corn-fritters', name: 'Corn Fritters', price: 95, img: 'https://source.unsplash.com/200x200/?corn-fritters' },
  ],
  Desserts: [
    { id: 'gulab-jamun', name: 'Gulab Jamun', price: 79, img: 'https://source.unsplash.com/200x200/?gulab-jamun' },
    { id: 'rasmalai', name: 'Rasmalai', price: 89, img: 'https://source.unsplash.com/200x200/?rasmalai' },
    { id: 'jalebi', name: 'Jalebi', price: 69, img: 'https://source.unsplash.com/200x200/?jalebi' },
    { id: 'kheer', name: 'Kheer', price: 75, img: 'https://source.unsplash.com/200x200/?kheer' },
    { id: 'halwa', name: 'Gajar Halwa', price: 85, img: 'https://source.unsplash.com/200x200/?gajar-halwa' },
    { id: 'ladoo', name: 'Besan Ladoo', price: 70, img: 'https://source.unsplash.com/200x200/?besan-ladoo' },
    { id: 'barfi', name: 'Kaju Barfi', price: 90, img: 'https://source.unsplash.com/200x200/?kaju-barfi' },
    { id: 'rasgulla', name: 'Rasgulla', price: 65, img: 'https://source.unsplash.com/200x200/?rasgulla' },
    { id: 'shrikhand', name: 'Shrikhand', price: 80, img: 'https://source.unsplash.com/200x200/?shrikhand' },
    { id: 'modak', name: 'Modak', price: 75, img: 'https://source.unsplash.com/200x200/?modak' },
    { id: 'payasam', name: 'Pal Payasam', price: 70, img: 'https://source.unsplash.com/200x200/?pal-payasam' },
  ],
  'Main Course': [
    { id: 'butter-chicken', name: 'Butter Chicken', price: 199, img: 'https://source.unsplash.com/200x200/?butter-chicken' },
    { id: 'paneer-masala', name: 'Paneer Masala', price: 179, img: 'https://source.unsplash.com/200x200/?paneer-masala' },
    { id: 'dal-tadka', name: 'Dal Tadka', price: 149, img: 'https://source.unsplash.com/200x200/?dal-tadka' },
    { id: 'biryani', name: 'Biryani', price: 219, img: 'https://source.unsplash.com/200x200/?biryani' },
    { id: 'rogan-josh', name: 'Rogan Josh', price: 189, img: 'https://source.unsplash.com/200x200/?rogan-josh' },
    { id: 'palak-paneer', name: 'Palak Paneer', price: 175, img: 'https://source.unsplash.com/200x200/?palak-paneer' },
    { id: 'chole', name: 'Chole', price: 159, img: 'https://source.unsplash.com/200x200/?chole' },
    { id: 'fish-curry', name: 'Fish Curry', price: 195, img: 'https://source.unsplash.com/200x200/?fish-curry' },
    { id: 'mutton-korma', name: 'Mutton Korma', price: 209, img: 'https://source.unsplash.com/200x200/?mutton-korma' },
    { id: 'veg-biryani', name: 'Veg Biryani', price: 169, img: 'https://source.unsplash.com/200x200/?veg-biryani' },
    { id: 'rajma', name: 'Rajma', price: 155, img: 'https://source.unsplash.com/200x200/?rajma' },
  ],
  Beverages: [
    { id: 'masala-tea', name: 'Masala Tea', price: 29, img: 'https://source.unsplash.com/200x200/?masala-tea' },
    { id: 'coffee', name: 'Coffee', price: 35, img: 'https://source.unsplash.com/200x200/?coffee' },
    { id: 'juice', name: 'Fruit Juice', price: 45, img: 'https://source.unsplash.com/200x200/?fruit-juice' },
    { id: 'lassi', name: 'Lassi', price: 39, img: 'https://source.unsplash.com/200x200/?lassi' },
    { id: 'milkshake', name: 'Milkshake', price: 50, img: 'https://source.unsplash.com/200x200/?milkshake' },
    { id: 'lemonade', name: 'Lemonade', price: 35, img: 'https://source.unsplash.com/200x200/?lemonade' },
    { id: 'buttermilk', name: 'Buttermilk', price: 30, img: 'https://source.unsplash.com/200x200/?buttermilk' },
    { id: 'iced-tea', name: 'Iced Tea', price: 40, img: 'https://source.unsplash.com/200x200/?iced-tea' },
    { id: 'hot-chocolate', name: 'Hot Chocolate', price: 55, img: 'https://source.unsplash.com/200x200/?hot-chocolate' },
    { id: 'soda', name: 'Soda', price: 45, img: 'https://source.unsplash.com/200x200/?soda' },
    { id: 'green-tea', name: 'Green Tea', price: 35, img: 'https://source.unsplash.com/200x200/?green-tea' },
  ],
  Snacks: [
    { id: 'samosa', name: 'Samosa', price: 55, img: 'https://source.unsplash.com/200x200/?samosa' },
    { id: 'vada', name: 'Vada', price: 50, img: 'https://source.unsplash.com/200x200/?vada' },
    { id: 'pani-puri', name: 'Pani Puri', price: 60, img: 'https://source.unsplash.com/200x200/?pani-puri' },
    { id: 'pakora', name: 'Pakora', price: 45, img: 'https://source.unsplash.com/200x200/?pakora' },
    { id: 'bhaji', name: 'Bhaji', price: 50, img: 'https://source.unsplash.com/200x200/?bhaji' },
    { id: 'kachori', name: 'Kachori', price: 55, img: 'https://source.unsplash.com/200x200/?kachori' },
    { id: 'dhokla', name: 'Dhokla', price: 60, img: 'https://source.unsplash.com/200x200/?dhokla' },
    { id: 'bhel-puri', name: 'Bhel Puri', price: 45, img: 'https://source.unsplash.com/200x200/?bhel-puri' },
    { id: 'aloo-tikki', name: 'Aloo Tikki', price: 50, img: 'https://source.unsplash.com/200x200/?aloo-tikki' },
    { id: 'papdi-chaat', name: 'Papdi Chaat', price: 65, img: 'https://source.unsplash.com/200x200/?papdi-chaat' },
    { id: 'sev-puri', name: 'Sev Puri', price: 60, img: 'https://source.unsplash.com/200x200/?sev-puri' },
  ],
  
};



import { useNavigation } from '@react-navigation/native';
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
  ScrollView,
} from 'react-native';

const { width, height } = Dimensions.get('window');

// Import menu images from local assets
const tiffens = require('../../assets/menu/tiffens.png');
const starters = require('../../assets/menu/starters.png');
const desserts = require('../../assets/menu/desserts.png');
const mainCourse = require('../../assets/menu/maincourse.png');
const beverages = require('../../assets/menu/beverages.png');
const bread = require('../../assets/menu/breads.png');
const snacks = require('../../assets/menu/fastfoods.png');

// (menuItems object stays exactly same — omitted here for brevity)

const MenuScreen = () => {
  const navigation = useNavigation();
  const [selectedMenu, setSelectedMenu] = useState('Tiffins');
  const [items, setItems] = useState(menuItems.Tiffins);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState({});

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setItems(menuItems[selectedMenu] || []);
      setLoading(false);
    }, 1000);
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
      <View style={styles.content}>
        <View style={styles.mainContainer}>
          {/* Sidebar (30%) */}
          <View style={styles.sidebar}>
            <ScrollView style={{ flex: 1 }}>
              {Object.keys(menuItems).map(menu => (
                <TouchableOpacity
                  key={menu}
                  style={[
                    styles.menuItem,
                    selectedMenu === menu && styles.selectedMenuItem,
                  ]}
                  onPress={() => setSelectedMenu(menu)}
                >
                  <Image source={menu === 'Tiffins' ? tiffens : menu === 'Starters' ? starters : menu === 'Desserts' ? desserts : menu === 'Main Course' ? mainCourse : menu === 'Beverages' ? beverages : menu === 'Snacks' ? snacks : bread} style={styles.menuImage} />
                  <Text style={styles.menuText}>{menu}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Item Display (70%) */}
          <View style={styles.itemContainer}>
            {loading ? (
              <ActivityIndicator size="large" color="#0671ca" />
            ) : (
              <ScrollView style={{ flex: 1 }}>
                {items.map(item => {
                  const quantity = cart[item.id] || 0;
                  const imageUri = typeof item.img === 'string' ? item.img : item.img.toString();
                  return (
                    <View key={item.id} style={styles.itemCard}>
                      <Image source={{ uri: imageUri }} style={styles.itemImage} onError={(e) => console.log('Image load error:', e.nativeEvent.error)} />
                      <Text style={styles.itemName}>{item.name}</Text>
                      <Text style={styles.itemPrice}>₹{item.price}</Text>
                      {quantity === 0 ? (
                        <TouchableOpacity style={styles.addButton} onPress={() => handleQuantityChange(item.id, 1)}>
                          <Text style={styles.addText}>Add</Text>
                        </TouchableOpacity>
                      ) : (
                        <View style={styles.quantityContainer}>
                          <TouchableOpacity style={styles.quantityButton} onPress={() => handleQuantityChange(item.id, -1)}>
                            <Text style={styles.quantityText}>-</Text>
                          </TouchableOpacity>
                          <Text style={styles.quantity}>{quantity}</Text>
                          <TouchableOpacity style={styles.quantityButton} onPress={() => handleQuantityChange(item.id, 1)}>
                            <Text style={styles.quantityText}>+</Text>
                          </TouchableOpacity>
                        </View>
                      )}
                    </View>
                  );
                })}
              </ScrollView>
            )}
          </View>
        </View>

        {/* Floating Cart Footer */}
        {totalItems > 0 && (
          <View style={styles.cartFooter}>
            <Text style={styles.cartText}>{totalItems} Items</Text>
            <TouchableOpacity style={styles.viewCartButton} onPress={() => navigation.navigate('CartScreen', { cart, setCart, menuItems })}>
              <Text style={styles.viewCartText}>View Cart</Text>
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
  content: {
    flex: 1,
    paddingTop: height * 0.06,
  },
  mainContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  // NOW FLEX BASED WIDTHS
  sidebar: {
    flex: 3, // ~30%
    backgroundColor: '#1E2A44',
  },
  itemContainer: {
    flex: 7, // ~70%
    padding: 10,
    backgroundColor: '#F9FAFB',
  },

  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#2D4062',
    flexDirection: 'column',
    alignItems: 'center',
  },
  selectedMenuItem: {
    backgroundColor: '#2D4062',
  },
  menuImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  menuText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  itemCard: {
    width: Math.min(160, width / Math.max(2, Math.floor(width / 160))),
    height: 250,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  itemImage: {
    width: '100%',
    height: 125,
    resizeMode: 'cover',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
    marginVertical: 3,
  },
  itemPrice: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6B7280',
    marginBottom: 3,
  },
  addButton: {
    backgroundColor: '#0671ca',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 5,
  },
  addText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantityButton: {
    backgroundColor: '#0671ca',
    width: 25,
    height: 25,
    borderRadius: 12.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
  },
  quantityText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  quantity: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1F2937',
    marginHorizontal: 6,
  },
  cartFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 10,
  },
  cartText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  viewCartButton: {
    backgroundColor: '#0671ca',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  viewCartText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default MenuScreen;
