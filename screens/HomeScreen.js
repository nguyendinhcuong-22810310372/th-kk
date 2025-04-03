import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Lấy kích thước màn hình
const windowWidth = Dimensions.get('window').width;

// Import hình ảnh
import avatarImg from '../assets/Avatar.png';
import bannerImg from '../assets/BurgerSale.png';
import burgerImg from '../assets/Burger.png';
import pizzaImg from '../assets/Pizza.png';

const categories = [
  { name: 'PIZZA', icon: 'pizza' },
  { name: 'BURGER', icon: 'hamburger' },
  { name: 'DRINK', icon: 'cup-water' },
  { name: 'RICE', icon: 'rice' },
];

const bannerData = [
  {
    id: '1',
    title: 'BURGER',
    subtitle: "Today's Hot offer",
    rating: '4.9 (3k+ Rating)',
    discount: '10% OFF',
    image: bannerImg,
  },
  // Có thể thêm banner khác nếu cần
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={avatarImg} style={styles.avatar} />
          <View style={styles.locationWrapper}>
            <Text style={styles.locationLabel}>Your Location</Text>
            <Text style={styles.location}>Savar, Dhaka</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationIcon}>
          <Icon name="notifications-outline" size={28} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Search Bar với nền màu tím */}
            <View style={styles.searchContainer}>
              <View style={styles.searchInputWrapper}>
                <Icon name="search" size={24} color="#fff" style={{ marginRight: 10 }} />
                <TextInput placeholder="Search your food" placeholderTextColor="#fff" style={styles.searchInput} />
                <View style={styles.filterIconContainer}>
                  <MaterialCommunityIcons name="tune-vertical" size={24} color="#fff" />
                </View>
              </View>
            </View>

      {/* Categories: cuộn ngang nếu có nhiều mục */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        {categories.map((item, index) => (
          <TouchableOpacity key={index} style={styles.categoryBtn}>
            <MaterialCommunityIcons name={item.icon} size={28} color="#333" />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Banner: dạng cuộn ngang, mỗi banner chia thành 2 phần */}
      <FlatList
        data={bannerData}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.bannerList}
        renderItem={({ item }) => (
          <View style={styles.bannerItem}>
            <View style={styles.bannerTextContainer}>
              <Text style={styles.bannerTitle}>{item.title}</Text>
              <Text style={styles.bannerSubtitle}>{item.subtitle}</Text>
              <View style={styles.ratingRow}>
                <Icon name="star" size={18} color="#fbbf24" />
                <Text style={styles.ratingText}>{item.rating}</Text>
              </View>
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>{item.discount}</Text>
              </View>
            </View>
            <Image source={item.image} style={styles.bannerImage} />
          </View>
        )}
      />

      {/* Popular Items (ví dụ hiển thị 2 item mỗi hàng, cuộn dọc) */}
      <View style={styles.popularHeader}>
        <Text style={styles.popularTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={[{ id: '1', name: 'BURGER', image: burgerImg }, { id: '2', name: 'PIZZA', image: pizzaImg }]}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.popularList}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => (
          <View style={styles.popularItem}>
            <Image source={item.image} style={styles.popularImage} />
            <Text style={styles.popularName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  locationWrapper: {
    marginLeft: 15
  },
  locationLabel: {
    fontSize: 16,
    color: '#888'
  },
  location: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  notificationIcon: {
    padding: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 25
  },

  searchContainer: {
    marginBottom: 30
  },
  searchInputWrapper: {
    backgroundColor: '#5C4DB1',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 60,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    color: '#fff'
  },

  categoryScroll: {
    marginBottom: 30,
  },
  categoryBtn: {
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginRight: 15,
  },
  categoryText: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: '600'
  },

  // Banner: hiển thị dạng cuộn ngang, nền đen hơi tối
  bannerList: {
    marginBottom: 30,
  },
  bannerItem: {
    flexDirection: 'row',
    backgroundColor: '#333',
    borderRadius: 15,
    overflow: 'hidden',
    marginRight: 15,
    height: 180,
    width: windowWidth - 60, // thu nhỏ lại banner một chút so với full width
  },
  bannerTextContainer: {
    width: '55%',
    padding: 20,
    justifyContent: 'center',
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  bannerSubtitle: {
    color: '#fff',
    fontSize: 20,
    marginTop: 6
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8
  },
  ratingText: {
    marginLeft: 8,
    color: '#fff',
    fontSize: 18
  },
  discountBadge: {
    marginTop: 10,
    backgroundColor: '#5C4DB1',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 18,
    alignSelf: 'flex-start',
  },
  discountText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  bannerImage: {
    width: '45%',
    height: '100%',
    resizeMode: 'cover',
  },

  // Popular Items: dạng lưới 2 item/1 hàng
  popularHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  popularTitle: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  viewAll: {
    color: '#5C4DB1',
    fontSize: 16
  },
  popularList: {
    paddingBottom: 30,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  popularItem: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  popularImage: {
    width: (windowWidth - 60) / 2,
    height: ((windowWidth - 60) / 2) * 0.75,
    borderRadius: 15,
    resizeMode: 'cover'
  },
  popularName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '600'
  },
});
