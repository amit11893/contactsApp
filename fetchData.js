import {
  fetchDataPending,
  fetchDataSuccess,
  fetchDataError,
} from './actionCreators';

function fetchData() {
  return (dispatch) => {
    dispatch(fetchDataPending());
    fetch('http://www.mocky.io/v2/5c41920e0f0000543fe7b889')
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchDataSuccess(res.dataList));
        return res.dataList;
      })
      .catch((err) => dispatch(fetchDataError(err)));
  };
}

export default fetchData;
