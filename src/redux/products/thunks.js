import {
  getProductsPending,
  getProductsSuccess,
  getProductsError,
  getByIdProductsPending,
  getByIdProductsSuccess,
  getByIdProductsError,
  deleteProductsPending,
  deleteProductsSuccess,
  deleteProductsError,
  postProductsPending,
  postProductsSuccess,
  postProductsError,
  editProductsPending,
  editProductsSuccess,
  editProductsError
} from './actions';

export const getProducts = () => {
  return async (dispatch) => {
    dispatch(getProductsPending());
    try {
      const response = await fetch('https://mcga-2022-backend-tm.vercel.app/api/products');
      const json = await response.json();
      if(response.status !== 200 ){
        dispatch(getProductsError(json.toString()))
      }else {
        dispatch(getProductsSuccess(json));
      }
    } catch (error) {
      dispatch(getProductsError(error.toString()));
    }
  };
};

export const getByIdProducts = (id) => {
  return async (dispatch) => {
    dispatch(getByIdProductsPending());
    try {
      const response = await fetch(`https://mcga-2022-backend-tm.vercel.app/api/products/${id}`);
      const json = await response.json();
      if(response.status !== 200 ){
        dispatch(getByIdProductsError(json.toString()))
      }else {
        dispatch(getByIdProductsSuccess(json));
      }
    } catch (error) {
      dispatch(getByIdProductsError(error.toString()));
    }
  };
};

export const deleteProducts = (id) => {
  return async (dispatch) => {
    dispatch(deleteProductsPending());
    try {
      const response = await fetch(`https://mcga-2022-backend-tm.vercel.app/api/products/${id}`, {
        method: 'DELETE'
      });
      const json = await response.json();
      if(response.status !== 200 ){
        dispatch(deleteProductsError(json.toString()));
      }else {
        dispatch(deleteProductsSuccess(json));
      }
    } catch (error) {
      dispatch(deleteProductsError(error.toString()));
    }
  };
};

export const postProducts = (name,description,price,stock,category) => {
  return async (dispatch) => {
    dispatch(postProductsPending());
    try {
      const response = await fetch(`https://mcga-2022-backend-tm.vercel.app/api/products/add`,{
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            description: description,
            price: price,
            stock: stock,
            category: category
          })
        });
        const json = await response.json();
        if (response.status === 201) {
          dispatch(postProductsSuccess(json));
          console.log('Product added');
        } else {
          dispatch(postProductsError(json));
          console.log('Product could not be Added.');
        }
      } catch (error) {
        dispatch(postProductsError(error.toString()));
        console.log('Product could not be Added.');
      }
  };
};

export const editProducts = (id,name,description,price,stock,category) => {
  return async (dispatch) => {
    dispatch(editProductsPending());
    try {
      const response = await fetch(`https://mcga-2022-backend-tm.vercel.app/api/products/${id}`,{
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            description: description,
            price: price,
            stock: stock,
            category: category
          })
        });
        const json = await response.json();
        if (response.status === 200) {
          dispatch(editProductsSuccess(json));
          console.log('Product Added.');
        } else {
          dispatch(editProductsError(json));
          console.log('Product could not be Added.');
        }
      } catch (error) {
        dispatch(editProductsError(error.toString()));
        console.log('Product could not be Added.');
      }
  };
};
