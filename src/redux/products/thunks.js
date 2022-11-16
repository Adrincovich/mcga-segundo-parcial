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
        dispatch(getProductsError(json))
      }else {
        dispatch(getProductsSuccess(json));
      }
    } catch (error) {
      dispatch(getProductsError(error));
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
        dispatch(getByIdProductsError(json))
      }else {
        dispatch(getByIdProductsSuccess(json));
      }
    } catch (error) {
      dispatch(getByIdProductsError(error));
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
      if(response.status !== 200 ) throw new Error(json)
        dispatch(deleteProductsSuccess(json));
        dispatch(getProducts());

     } catch (error) {
       dispatch(deleteProductsError());
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
          dispatch(getProducts());
          console.log('Product added');
        } else {
          dispatch(postProductsError(json));
        }
      } catch (error) {
        dispatch(postProductsError(error));
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
        } else {
          dispatch(editProductsError(json));
        }
      } catch (error) {
        dispatch(editProductsError(error));
      }
  };
};
