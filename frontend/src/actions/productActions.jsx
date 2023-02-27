import axios from 'axios';
import { ALL_PRODUCT_REQUEST,ALL_PRODUCT_SUCCESS,ALL_PRODUCT_FAIL } from '../constants/productConstants';

export const getProducts = async (dispatch)=>{
    try {
        dispatch({type:ALL_PRODUCT_REQUEST});
        const {data} = await axios.get('api/v1/products');
        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload:data,
        });
          
    } catch (error) {
        dispatch({
            type:ALL_PRODUCT_FAIL,
            paylaod: error.reponse.data.message
        })
        
    }

}