export const FETCH_FOODS_REQUEST = 'FETCH_FOODS_REQUEST';
export const FETCH_FOODS_SUCCESS = 'FETCH_FOODS_SUCCESS';
export const FETCH_FOODS_FAILURE = 'FETCH_FOODS_FAILURE';

export const fetchFoodsRequest = () => ({
  type: FETCH_FOODS_REQUEST,
});

export const fetchFoodsSuccess = (foods) => ({
  type: FETCH_FOODS_SUCCESS,
  payload: foods,
});

export const fetchFoodsFailure = (error) => ({
  type: FETCH_FOODS_FAILURE,
  payload: error,
});