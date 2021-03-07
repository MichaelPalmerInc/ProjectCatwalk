import React from 'react'
import axios from 'axios';

axios.defaults.baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hratx/';
axios.defaults.headers.common['Authorization'] = '1ecd87d2cf6d1d435550d70ed33fb55886382412';
// const getProductsFromServer = () => {
//   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products', {authorization: '1ecd87d2cf6d1d435550d70ed33fb55886382412'})
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log('ERROR ', err);
//   });
// }
const Overview = ()  => {
  return (

    <div>Hey</div>
  )
}

export default Overview;