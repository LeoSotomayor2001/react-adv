import { ProductButtons, ProductCar, ProductImage, ProductTitle } from "../components"

const product={
    id:'1',
    title:'Coffee Mug - Card',
    img:'./coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
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

            <ProductCar product={product}>
              
              <ProductImage />
              <ProductTitle title={'Hello'}/>
              <ProductButtons />
            </ProductCar>
            

        </div>
    </div>
  )
}
