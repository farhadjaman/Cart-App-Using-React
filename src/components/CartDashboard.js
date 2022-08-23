import React from 'react'
import DashboardItems from './DashboardItem'
import { useSelector } from 'react-redux'

const CartDashboard = () => {
  const cart = useSelector(state => state.cart)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.count, 0)
  const totalItem = cart.reduce((sum, item) => sum + item.count, 0)
  return (
    <div
      className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4"
    >

      <div
        className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
      >


        <DashboardItems />
        <div
          className="flex justify-center items-center text-center"
        >
          <div className="text-xl font-semibold">
            <p>Total Item</p>
            <p className="text-5xl">{totalItem}</p>
          </div>
        </div>
      </div>
      <div
        className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
      >
        <div
          className="flex justify-center items-center text-center"
        >
          <div className="text-xl font-semibold">
            <p>Total Price</p>
            <p className="text-5xl">{totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartDashboard