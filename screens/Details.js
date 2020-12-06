import React from 'react';
import Details from './../components/Details';

function DetailScreen({ route }) {
  return <Details id={route.params.id} />;
}
export default DetailScreen;
