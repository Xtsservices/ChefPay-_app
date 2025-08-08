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
  FlatList,
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

const MenuScreen = () => {
  const navigation = useNavigation();
  const [selectedMenu, setSelectedMenu] = useState('Tiffins');
  const [items, setItems] = useState(menuItems.Tiffins);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState({});

  // Calculate responsive dimensions based on screen width
  const getResponsiveDimensions = () => {
    let sidebarWidth, itemContainerWidth, numColumns, minCardWidth, maxCardWidth;
    
    if (width < 480) {
      // Small phones
      sidebarWidth = width * 0.25;
      itemContainerWidth = width * 0.75;
      numColumns = 2;
      minCardWidth = 140;
      maxCardWidth = 170;
    } else if (width < 768) {
      // Large phones / small tablets
      sidebarWidth = width * 0.28;
      itemContainerWidth = width * 0.72;
      numColumns = 3;
      minCardWidth = 150;
      maxCardWidth = 180;
    } else if (width < 1024) {
      // Tablets
      sidebarWidth = width * 0.25;
      itemContainerWidth = width * 0.75;
      numColumns = 4;
      minCardWidth = 160;
      maxCardWidth = 190;
    } else {
      // Large tablets / desktops
      sidebarWidth = width * 0.22;
      itemContainerWidth = width * 0.78;
      numColumns = 5;
      minCardWidth = 170;
      maxCardWidth = 200;
    }
    
    return { sidebarWidth, itemContainerWidth, numColumns, minCardWidth, maxCardWidth };
  };

  const { 
    sidebarWidth, 
    itemContainerWidth, 
    numColumns, 
    minCardWidth, 
    maxCardWidth 
  } = getResponsiveDimensions();
  
  const cardPadding = 10;
  const cardGap = width < 480 ? 8 : width < 768 ? 10 : 12; // Responsive gap
  
  // Calculate actual card width with better distribution
  const availableWidth = itemContainerWidth - (cardPadding * 2);
  const totalGapWidth = (numColumns - 1) * cardGap;
  const calculatedCardWidth = (availableWidth - totalGapWidth) / numColumns;
  const cardWidth = Math.min(maxCardWidth, Math.max(minCardWidth, calculatedCardWidth));

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setItems(menuItems[selectedMenu] || []);
      setLoading(false);
    }, 300); // Reduced loading time for better UX
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

  const getMenuImage = (menu) => {
    const imageMap = {
      'Tiffins': tiffens,
      'Starters': starters,
      'Desserts': desserts,
      'Main Course': mainCourse,
      'Beverages': beverages,
      'Snacks': snacks,
    };
    return imageMap[menu] || bread;
  };

  const renderItem = ({ item, index }) => {
    const quantity = cart[item.id] || 0;
    const imageUri = typeof item.img === 'string' ? item.img : item.img.toString();
    
    // Increased card height based on screen size to prevent overlapping
    const cardHeight = width < 480 ? 250 : width < 768 ? 270 : 290;
    const imageHeight = width < 480 ? 110 : width < 768 ? 120 : 130;
    
    return (
      <View style={[styles.itemCard, { 
        width: cardWidth,
        height: cardHeight,
        marginRight: (index + 1) % numColumns === 0 ? 0 : cardGap,
        marginLeft: index % numColumns === 0 ? 0 : 0,
      }]}>
        <Image 
          source={{ uri: imageUri }} 
          style={[styles.itemImage, { height: imageHeight }]} 
          onError={(e) => console.log('Image load error:', e.nativeEvent.error)} 
        />
        <View style={styles.itemContent}>
          <View style={styles.itemInfo}>
            <Text style={styles.itemName} numberOfLines={2}>{item.name}</Text>
            <Text style={styles.itemPrice}>₹{item.price}</Text>
          </View>
          <View style={styles.buttonContainer}>
            {quantity === 0 ? (
              <TouchableOpacity 
                style={styles.addButton} 
                onPress={() => handleQuantityChange(item.id, 1)}
              >
                <Text style={styles.addText}>Add</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.quantityContainer}>
                <TouchableOpacity 
                  style={styles.quantityButton} 
                  onPress={() => handleQuantityChange(item.id, -1)}
                >
                  <Text style={styles.quantityText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity 
                  style={styles.quantityButton} 
                  onPress={() => handleQuantityChange(item.id, 1)}
                >
                  <Text style={styles.quantityText}>+</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.mainContainer}>
          {/* Sidebar */}
          <View style={[styles.sidebar, { width: sidebarWidth }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {Object.keys(menuItems).map(menu => (
                <TouchableOpacity
                  key={menu}
                  style={[
                    styles.menuItem,
                    selectedMenu === menu && styles.selectedMenuItem,
                  ]}
                  onPress={() => setSelectedMenu(menu)}
                >
                  <Image 
                    source={getMenuImage(menu)} 
                    style={styles.menuImage} 
                  />
                  <Text style={styles.menuText} numberOfLines={2}>{menu}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Item Display */}
          <View style={[styles.itemContainer, { width: itemContainerWidth }]}>
            {loading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0671ca" />
                <Text style={styles.loadingText}>Loading {selectedMenu}...</Text>
              </View>
            ) : (
              <FlatList
                data={items}
                renderItem={renderItem}
                numColumns={numColumns}
                key={`${numColumns}-${selectedMenu}-${width}`} // Force re-render when screen rotates
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[styles.flatListContent, { paddingHorizontal: cardPadding }]}
                ItemSeparatorComponent={() => <View style={{ height: cardGap }} />}
                ListHeaderComponent={() => (
                  <Text style={[styles.categoryTitle, { 
                    fontSize: width < 480 ? 20 : width < 768 ? 22 : 24 
                  }]}>{selectedMenu}</Text>
                )}
                columnWrapperStyle={numColumns > 1 ? { 
                  justifyContent: 'flex-start',
                  paddingHorizontal: 0,
                } : null}
              />
            )}
          </View>
        </View>

        {/* Floating Cart Footer */}
        {totalItems > 0 && (
          <View style={styles.cartFooter}>
            <View style={styles.cartInfo}>
              <Text style={styles.cartText}>{totalItems} Items</Text>
              <Text style={styles.cartSubText}>in your cart</Text>
            </View>
            <TouchableOpacity 
              style={styles.viewCartButton} 
              onPress={() => navigation.navigate('CartScreen', { cart, setCart, menuItems })}
            >
              <Text style={styles.viewCartText}>View Cart →</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

// Move cardGap here so it can be used in StyleSheet
const cardGap = width < 480 ? 8 : width < 768 ? 10 : 12;

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
  sidebar: {
    backgroundColor: '#1E2A44',
    borderRightWidth: 1,
    borderRightColor: '#2D4062',
  },
  itemContainer: {
    backgroundColor: '#F9FAFB',
  },
  menuItem: {
    paddingVertical: width < 480 ? 8 : 12,
    paddingHorizontal: width < 480 ? 6 : 8,
    borderBottomWidth: 1,
    borderBottomColor: '#2D4062',
    alignItems: 'center',
    minHeight: width < 480 ? 70 : 80,
  },
  selectedMenuItem: {
    backgroundColor: '#2D4062',
    borderLeftWidth: 3,
    borderLeftColor: '#0671ca',
  },
  menuImage: {
    width: width < 480 ? 28 : width < 768 ? 32 : 35,
    height: width < 480 ? 28 : width < 768 ? 32 : 35,
    resizeMode: 'contain',
    marginBottom: 6,
  },
  menuText: {
    fontSize: width < 480 ? 10 : width < 768 ? 11 : 12,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: width < 480 ? 12 : 14,
  },
  flatListContent: {
    padding: 10,
    paddingBottom: 20,
  },
  categoryTitle: {
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 16,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '500',
  },
  itemCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: width < 480 ? 10 : 12,
    marginBottom: cardGap,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  itemImage: {
    width: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: width < 480 ? 10 : 12,
    borderTopRightRadius: width < 480 ? 10 : 12,
  },
  itemContent: {
    flex: 1,
    padding: width < 480 ? 10 : width < 768 ? 12 : 14,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  itemName: {
    fontSize: width < 480 ? 12 : width < 768 ? 13 : 14,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 6,
    lineHeight: width < 480 ? 16 : 18,
    minHeight: width < 480 ? 32 : 36, // Ensure consistent height for name area
  },
  itemPrice: {
    fontSize: width < 480 ? 15 : width < 768 ? 16 : 17,
    fontWeight: '700',
    color: '#0671ca',
    marginBottom: 8,
    textAlign: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 40, // Ensure consistent button area height
    width: '100%',
  },
  addButton: {
    backgroundColor: '#0671ca',
    paddingVertical: width < 480 ? 8 : 10,
    paddingHorizontal: width < 480 ? 16 : 20,
    borderRadius: 20,
    minWidth: width < 480 ? 60 : 70,
    elevation: 2,
    shadowColor: '#0671ca',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  addText: {
    fontSize: width < 480 ? 13 : 14,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    paddingHorizontal: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  quantityButton: {
    backgroundColor: '#0671ca',
    width: width < 480 ? 26 : 28,
    height: width < 480 ? 26 : 28,
    borderRadius: width < 480 ? 13 : 14,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  quantityText: {
    fontSize: width < 480 ? 14 : 16,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  quantity: {
    fontSize: width < 480 ? 14 : 16,
    fontWeight: '600',
    color: '#1F2937',
    marginHorizontal: width < 480 ? 10 : 12,
    minWidth: 20,
    textAlign: 'center',
  },
  cartFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cartInfo: {
    flex: 1,
  },
  cartText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
  },
  cartSubText: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  viewCartButton: {
    backgroundColor: '#0671ca',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    shadowColor: '#0671ca',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  viewCartText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default MenuScreen;