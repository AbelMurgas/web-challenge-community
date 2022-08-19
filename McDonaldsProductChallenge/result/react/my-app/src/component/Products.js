import Product from "./Product";
import ProductsData from './ProductsData'

export default function Products(){
 const productsElement = ProductsData.map(data =>{
  return <Product key={data.id}
    {...data}
  />
 })
 return (
  <div className="container mt-4">
   <div className="row row-flex gx-5 gy-5">
    {productsElement}
   </div>
  </div>
 );
}