import { ProductButtons, ProductCar, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";

export const ShoppingPage = () => {

  const {onProductCountChange,shoppingCart}= useShoppingCart();

  return (
    <div >
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap'
        }}>

          {
            products.map(product=>(
              <ProductCar 
              product={product}
              className="bg-dark"
              key={product.id}
              onChange={onProductCountChange}
              value={shoppingCart[product.id]?.count || 0}
              >
              
                <ProductImage className='custom-image'/>
                <ProductTitle title={'Hello'} className='text-white'/>
                <ProductButtons className='custom-buttons'/>
              </ProductCar>
            ))
          }
    
        </div>

        <div className="shopping-cart">

              {
                Object.entries(shoppingCart).map(([key,product])=>(
                
                  <ProductCar 
                  key={key}
                  product={product}
                  className="bg-dark"
                  style={{width:'100px'}}
                  onChange={onProductCountChange}
                  value={product.count}
                  >
                  
                    <ProductImage className='custom-image'/>
                    <ProductButtons 
                      className='custom-buttons'
                      style={{
                        display:'flex',
                        justifyContent:'center'
                      }}
                    />
                  </ProductCar>
                ))
              }


        </div>

    </div>
  )
}
