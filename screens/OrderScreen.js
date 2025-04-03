import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

// Thay các đường dẫn này bằng đường dẫn thực tế trong thư mục assets của bạn
import burgerMain from '../assets/Burger.png';
import burger1 from '../assets/burgerlist1.png';
import burger2 from '../assets/BurgerList.png';
import burger3 from '../assets/BurgerList.png';

export default function OrderScreen({ navigation }) {
  const [quantity, setQuantity] = useState(2);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient
        colors={['#fff9e6', '#fff2b8']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.header}
      >
        <TouchableOpacity style={styles.headerIcon} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Shopping Cart</Text>
        <TouchableOpacity style={styles.headerIcon} onPress={() => {}}>
          <Ionicons name="trash" size={28} color="black" />
        </TouchableOpacity>
      </LinearGradient>

      {/* Vùng Banner + 3 ảnh nhỏ */}
      <View style={styles.bannerContainer}>
        <Image source={burgerMain} style={styles.bannerImage} />
        <Text style={styles.discount}>10% OFF</Text>
        <View style={styles.thumbnailContainer}>
          <Image source={burger1} style={styles.thumbnail} />
          <Image source={burger2} style={styles.thumbnail} />
          <Image source={burger3} style={styles.thumbnail} />
        </View>
      </View>

      {/* Thông tin sản phẩm */}
      <View style={styles.infoContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>BURGER</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
              <Ionicons name="remove" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
              <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.price}>${quantity * 14}</Text>
        <Text style={styles.rating}>4.9 (3k+ Rating)</Text>
        <View style={styles.deliveryInfo}>
          <Text style={{ fontWeight: 'bold' }}>Delivery Address</Text>
          <Text>Dhaka, Bangladesh</Text>
        </View>
        <View style={styles.paymentMethod}>
          <Text style={{ fontWeight: 'bold' }}>Payment Method</Text>
          <TouchableOpacity style={styles.changeBtn}>
            <Text style={{ color: '#4F46E5' }}>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.summary}>
          <Text>Subtotal ({quantity}): ${quantity * 28}</Text>
          <Text>Delivery Fee: $6.20</Text>
          <Text style={{ fontWeight: 'bold', marginTop: 5 }}>Payable Total: ${quantity * 28 + 6.2}</Text>
        </View>
      </View>

      {/* Nút xác nhận */}
      <TouchableOpacity style={styles.confirmBtn}>
        <Text style={styles.confirmText}>Confirm Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  headerIcon: {
    width: 50,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  bannerContainer: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  bannerImage: {
    width: '95%',
    height: 200,
    borderRadius: 10,
  },
  discount: {
    position: 'absolute',
    top: 15,
    left: 20,
    backgroundColor: 'red',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },
  thumbnailContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  thumbnail: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: '#fff',
  },
  infoContainer: {
    paddingHorizontal: 25,
    marginTop: 20,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#4F46E5',
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantity: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4F46E5',
  },
  price: {
    fontSize: 24,
    color: '#4F46E5',
    marginVertical: 5
  },
  rating: {
    fontSize: 18,
    color: '#666'
  },
  confirmBtn: {
    backgroundColor: '#4F46E5',
    padding: 18,
    borderRadius: 12,
    alignSelf: 'center',
    width: '90%',
    marginTop: 20,
    marginBottom: 20,
  },
  confirmText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
});