import { useEffect } from 'react'
import CartDashboard from './CartDashboard'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { setProducts } from '../redux/Products/actions'
import Product from '../components/Product'
import products from '../data/data'



const Home = () => {
  const dispatch = useDispatch();
  const { productItems } = useSelector(state => state.product)


  useEffect(() => {
    dispatch(setProducts(products));
  }, [dispatch])

  console.log(productItems)

  return (
    <div className="cart">

      <div className="bg-gray-50 h-full md:h-screen">
        <div className="grid place-items-center">
          <h1
            className="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4"
          >
            Shopping Cart
          </h1>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div
            className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8"
          >
            {productItems.map(product => (

              <div key={product.id} >
                <Product product={product} />
              </div>
            ))}
          </div>
          <CartDashboard />
        </div>
      </div>
    </div>
  )
}

export default Home