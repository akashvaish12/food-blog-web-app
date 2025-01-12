import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_FOODS_REQUEST, fetchFoodsSuccess, fetchFoodsFailure } from '../actions/actions';

function* fetchFoods() {
  try {
    const response = yield call(axios.get, 'http://localhost:5000/foods');
    yield put(fetchFoodsSuccess(response.data));
  } catch (error) {
    yield put(fetchFoodsFailure(error.message));
  }
}

function* rootSaga() {
  yield takeEvery(FETCH_FOODS_REQUEST, fetchFoods);
}

export default rootSaga;