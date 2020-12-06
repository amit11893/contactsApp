import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

const Details = ({ data, id }) => {
  const obj = data[id];
  return (
    <SafeAreaView>
      <FlatList
        data={Object.keys(obj)}
        renderItem={({ item }) => {
          //   console.log(at, obj[attr]);
          return (
            <View style={styles.row}>
              <Text style={styles.col1}>{item}</Text>
              <Text>{obj[item].toString()}</Text>
            </View>
          );
        }}
        keyExtractor={(attr) => attr.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  col1: {
    color: 'magenta',
  },
  col2: {
    color: '#555F61',
  },
});

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, null)(Details);
