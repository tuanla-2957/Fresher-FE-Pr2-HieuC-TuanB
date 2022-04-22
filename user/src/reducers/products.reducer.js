import {
  GET_PRODUCT_HOT_REQUEST,
  GET_PRODUCT_HOT_FAILURE,
  GET_PRODUCT_HOT_SUCCESS,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_BY_ID_REQUEST,
  GET_PRODUCT_BY_ID_FAILURE,
  GET_PRODUCT_BY_ID_SUCCESS,
  CHANGE_FILTER_PRODUCT,
  SELECT_PRODUCT_TAG,
  GET_RELATED_PRODUCTS_REQUEST,
  GET_RELATED_PRODUCTS_SUCCESS,
  GET_RELATED_PRODUCTS_FAILURE,
} from "../actions/constant";
const initialState = {
  products: [],
  product: null,
  hotProducts: [],
  query: {
    page: 1,
    perPage: 6,
    name: null,
    minPrice: 0,
    maxPrice: 30000,
  },
  selectTags: [],
  pagination: {},
  loading: true,
  error: null
};
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_HOT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case GET_PRODUCT_HOT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    case GET_PRODUCT_HOT_SUCCESS:
      state = {
        ...state,
        hotProducts: action.payload.products,
        loading: false,
      };
      break;
    case GET_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true,
        query: action.payload,
      };
      break;
    case GET_PRODUCT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    case GET_PRODUCT_SUCCESS:
      state = {
        ...state,
        products: action.payload.products,
        pagination: action.payload.pagination,
        loading: false,
      };
      break;
    case GET_PRODUCT_BY_ID_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case GET_PRODUCT_BY_ID_SUCCESS:
      state = {
        ...state,
        product: action.payload,
        relatedTags: action.payload.tags,
        loading: false,
      };
      break;
    case GET_PRODUCT_BY_ID_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    case CHANGE_FILTER_PRODUCT:
      state = {
        ...state,
        query: { ...state.query, ...action.payload },
      };
      break;
    case SELECT_PRODUCT_TAG:
      state = {
        ...state,
        selectTags: action.payload,
      };
      break;
    case GET_RELATED_PRODUCTS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case GET_RELATED_PRODUCTS_SUCCESS:
      state = {
        ...state,
        relatedProducts: action.payload.relatedProducts,
        loading: false,
      };
      break;
    case GET_RELATED_PRODUCTS_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    default:
      return state;
  }
  return state;
};

export default productsReducer;
