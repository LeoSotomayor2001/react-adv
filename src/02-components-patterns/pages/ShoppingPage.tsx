import { ProductButtons, ProductCar, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'
import { products } from "../data/products";

const product=products[0];

export const ShoppingPage = () => {

  return (
    <div >
        <h1>Shopping Store</h1>
        <hr />
        

            <ProductCar 
            product={product}
            className="bg-dark text-white"
            key={product.id}
            initialValues={{
              count:4,
              maxCount:10
            }}
            >
              {
                ({reset,count,increaseBy,isMaxCountReached})=>(
                  <>
                    <ProductImage className='custom-image'/>
                    <ProductTitle title={'Hello'} className='text-white'/>
                    <ProductButtons className='custom-buttons'/>

                    <button onClick={reset}>Reset</button>
                    <button onClick={()=>increaseBy(-2)}>-2</button>
                    {
                      (!isMaxCountReached && <button onClick={()=>increaseBy(2)}>+2</button>)
                    }
                    
                    <span>{count}</span>
                  </>
                )
              }       
             
            </ProductCar>
 
        

    </div>
  )
}
