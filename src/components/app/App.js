import {useEffect, useState} from 'react'
import {productsAPI} from '../../api/products'
import Loader from './../loader/Loader'
import ErrorMessage from './../errorMessage/ErrorMessage'
import Product from './../product/Product'
import './App.css'

function App() {
  const [productsData, setProductsData] = useState({
    products: [],
    loading: true,
    error: null
  })
  
  useEffect(() => {
    try {
      productsAPI.getProducts()
      .then(data => {
        setProductsData({products: data.products, loading: false, error: null})
      })
      .catch(error => {
        setProductsData({products: [], loading: false, error})
      })
    } catch (error) {
      setProductsData({products: [], loading: false, error})
    }
  }, [])

  return <div className='app'>
    <h1>Products</h1>
    
    <div className='products'>
      { 
        productsData.loading ? <Loader /> : 
        productsData.error ? <ErrorMessage message='Oops, sorry, smth went wrong'/> : 
        productsData.products.length ? productsData.products.map((product, i) => <Product productData={product} key={product + i}/>) : 
        'Products list is empty'
      }
    </div>
  </div>
}

export default App
