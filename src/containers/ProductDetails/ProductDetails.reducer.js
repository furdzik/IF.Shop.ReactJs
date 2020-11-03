import products from '@data/products.json';

const actionTypes = {
  GET_PRODUCTS_DETAILS_INIT: 'PRODUCT_DETAILS/GET_PRODUCTS_DETAILS_INIT',
  GET_PRODUCTS_DETAILS: 'PRODUCT_DETAILS/GET_PRODUCTS_DETAILS'
};

const initialState = {
  loading: false,
  name: '',
  price: 0,
  availableColors: [],
  description: '',
  images: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_DETAILS: {
      const data = action.payload;

      return {
        ...state,
        loading: false,
        name: data.name,
        price: data.price,
        availableColors: data.availableColors,
        description: data.description,
        images: data.images
      };
    }

    case actionTypes.GET_PRODUCTS_DETAILS_INIT: {
      return {
        ...state,
        loading: true
      };
    }

    default:
      return state;
  }
}

const getProductDetailsInit = () => ({
  type: actionTypes.GET_PRODUCTS_DETAILS_INIT
});

const getProductDetails = (list) => ({
  type: actionTypes.GET_PRODUCTS_DETAILS,
  payload: list
});

export const getDetails = (id) => (dispatch) => {
  dispatch(getProductDetailsInit());

  products.forEach((el) => {
    if (el.id === Number(id)) {
      dispatch(getProductDetails(el));
    }
  });
};
