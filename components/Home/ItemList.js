import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchDataAction from '../../fetchData';

import Item from './Item';

const _ItemList = function ({ fetchData, data, error, pending }) {
  useEffect(() => {
    fetchData();
  }, []);
  const renderItem = ({ item, index }) => {
    return <Item item={item} index={index} />;
  };
  return (
    <SafeAreaView>
      {pending && <Text>DATA LOADING...</Text>}
      {error && <Text>{error}</Text>}
      {!pending && !error && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.enqId.toString()}
          extraData={data}
        />
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  error: state.error,
  data: state.data,
  pending: state.pending,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchData: fetchDataAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(_ItemList);
