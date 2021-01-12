import './Product.css'

export default function Product({productData}) {
  const {img, asin: id, price, bsr_category: category, link, name} = productData

  return <div className='product'>
    <img src={img} alt='product'/>
    <div>
      id: <span>{id}</span> 
    </div> 
    <div>
      name: <span>{name}</span> 
    </div>
    <div>
      price: <span>{price}</span> 
    </div>
    <div>
      category: <span>{category}</span> 
    </div>
    <div>
      Product on amazon: <a href={link}>Product link</a> 
    </div>
  </div>
} 