import { ProductButtons, ProductCar, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'
const product={
    id:'1',
    title:'Coffee Mug - Card',
    img:'./coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div >
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap'
        }}>
            {/* <ProductCar product={product}>
              
              <ProductCar.Image />
              <ProductCar.Title title={''}/>
              <ProductCar.Buttons />
            </ProductCar> */}

            <ProductCar 
              product={product}
              className="bg-dark"
            >
              
              <ProductImage className='custom-image'/>
              <ProductTitle title={'Hello'} className='text-white'/>
              <ProductButtons className='custom-buttons'/>
            </ProductCar>

            <ProductCar 
              product={product}
              className="bg-dark"
              style={{
                backgroundColor:'#70D1F4'
              }}
            >
              
              <ProductImage style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}}/>
              <ProductTitle title={'Hello'} style={{fontWeight:'bold'}}/>
              <ProductButtons style={{
                  display:'flex',
                  justifyContent:'end'
              }}/>
            </ProductCar>
            

        </div>
    </div>
  )
}
