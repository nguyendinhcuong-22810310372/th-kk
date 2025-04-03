import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import avatarImg from '../assets/Avatar.png';

export default function ProfileScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const iconColor = darkMode ? '#fff' : '#000';

  // Một component helper cho các mục menu có arrow (V nằm ngang)
  const MenuItem = ({ iconName, title, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.leftGroup}>
        <Ionicons name={iconName} size={24} color={iconColor} style={styles.icon} />
        <Text style={[styles.menuText, darkMode && { color: '#fff' }]}>{title}</Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={24} color={iconColor} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container, darkMode && styles.darkContainer]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Phần nền trên với thông tin người dùng */}
        <View style={styles.topBackground}>
          <View style={styles.profileInfo}>
            <Image source={avatarImg} style={styles.avatar} />
            <Text style={[styles.name, darkMode && { color: '#fff' }]}>
              Rakibul Hasan
            </Text>
            <Text style={[styles.email, darkMode && { color: '#ccc' }]}>
              rakibhbrand@gmail.com
            </Text>
          </View>
        </View>

        {/* Nội dung các mục menu */}
        <View style={styles.content}>
          <MenuItem iconName="home-outline" title="Home" />
          <MenuItem iconName="card-outline" title="My Card" />

          {/* Dark Mode có switch, không có mũi tên */}
          <View style={styles.menuItem}>
            <View style={styles.leftGroup}>
              <Ionicons name="moon-outline" size={24} color={iconColor} style={styles.icon} />
              <Text style={[styles.menuText, darkMode && { color: '#fff' }]}>
                Dark Mode
              </Text>
            </View>
            <Switch
              value={darkMode}
              onValueChange={(val) => setDarkMode(val)}
            />
          </View>

          <MenuItem iconName="car-sport-outline" title="Track Your Order" />
          <MenuItem iconName="settings-outline" title="Settings" />
          <MenuItem iconName="help-circle-outline" title="Help Center" />

          {/* Log Out với icon nằm bên phải */}
          <TouchableOpacity style={styles.logoutBtn}>
            <Text style={styles.logoutText}>Log Out</Text>
            <Ionicons name="log-out-outline" size={24} color="#fff" style={styles.iconLogout} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollContent: {
    flexGrow: 1,
  },
  topBackground: {
    backgroundColor: '#FFEAB8',
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    paddingBottom: 40,
    alignItems: 'center',
  },
  profileInfo: {
    marginTop: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#888',
  },
  content: {
    marginTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  menuText: {
    fontSize: 18,
    color: '#000',
  },
  logoutBtn: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#4F46E5',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  iconLogout: {
    // Sửa lỗi: sử dụng 'center' dưới dạng chuỗi nếu cần
    alignSelf: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
