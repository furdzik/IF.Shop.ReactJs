import products from '@data/products.json';

const actionTypes = {
  GET_PRODUCTS_LIST_INIT: 'PRODUCT_LIST/GET_PRODUCTS_LIST_INIT',
  GET_PRODUCTS_LIST: 'PRODUCT_LIST/GET_PRODUCTS_LIST'
};

const initialState = {
  loading: false,
  list: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_LIST: {
      return {
        ...state,
        loading: false,
        list: action.payload
      };
    }

    case actionTypes.GET_PRODUCTS_LIST_INIT: {
      return {
        ...state,
        loading: true
      };
    }

    default:
      return state;
  }
}

const getProductListInit = () => ({
  type: actionTypes.GET_PRODUCTS_LIST_INIT
});

const getProductList = (list) => ({
  type: actionTypes.GET_PRODUCTS_LIST,
  payload: list
});

export const getList = () => (dispatch) => {
  dispatch(getProductListInit());
  dispatch(getProductList(products));
};
