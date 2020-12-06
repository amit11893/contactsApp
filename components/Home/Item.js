import React from 'react';
import { Image, StyleSheet, Text, View, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Item = ({ item, index }) => {
  console.log(index);
  const navigation = useNavigation();

  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={styles.left}
        onPress={() =>
          navigation.navigate('Details', {
            id: index,
          })
        }
      >
        <View style={styles.col1}>
          <Text style={styles.letter}>{item.name.charAt(0).toUpperCase()}</Text>
        </View>
        <View style={styles.col2}>
          <Text>{`${item.name},${item.categoryName}`}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.right}
        onPress={() => Linking.openURL(`tel:${item.phoneNumber}`)}
      >
        <Image
          style={styles.phone}
          source={require('./../../assets/phone.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  col1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter: {
    width: 40,
    height: 40,
    borderRadius: 40,
    fontSize: 25,
    backgroundColor: 'orange',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  col2: {
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    textAlignVertical: 'center',
  },
  right: {
    height: 40,
    width: 40,
    justifyContent: 'center',
  },
  phone: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default Item;
