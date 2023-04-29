import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { deleteItem, increment, decrement } from '../store/amazonSlice';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";

const Cart = () => {
  const products = useSelector((state) => state.amazonReducer.products);
  const dispatch = useDispatch()

  const [totalPrice, setTotalPrice] = useState('')
  const user = useSelector((state) => state.amazonReducer.user)
  const loggedEmail = user?._delegate?.currentUser?.email;

  useEffect(() => {
    let Total = 0;
    products.map((item) => {
      Total += item.price * item.quantity;
      return setTotalPrice(Total)
    })
  }, [products])

  const payment = async(token) => {
    await axios.post("http://localhost:8000/pay", {
      amount: totalPrice,
      token
    })
  }

  return (
    <div class="w-full p-5 bg-gray-100">
      {
        products.length > 0 ? (
          <div class="h-max grid grid-cols-5 gap-3">
            <div class="p-3 text-center bg-white col-span-4">
              <div className=" flex justify-between items-center">
                <h3 className="text-lg font-bold">Your Cart</h3>
                <h3 className="text-lg font-bold">Subtotal</h3>
              </div>
              <div className="border mt-2"></div>

              <div class="p-5 text-center bg-white ">
                {products.map((item, id) => (
                  <div key={id}>
                    <div className="grid grid-cols-12 mr-4">
                      <div className="col-span-10 grid grid-cols-8 divide-y divide-gray-400 my-3">
                        <div className="col-span-2">
                          <img
                            className="p-4 m-auto"
                            src={item.image}
                            alt="product"
                          />
                        </div>

                        <div className="col-span-6">
                          <div className="text-left my-2">

                            <div className="mb-1">
                              <div className="text-xl xl:text-2xl font-medium mb-1">
                                {item.title}
                              </div>
                              <div className="text-xs xl:text-sm  mb-1">
                                {item.description}
                              </div>
                            </div>
                          </div>


                          <div className="flex justify-start" >
                            <button
                              className="text-sm xl:text-base font-semibold rounded bg-red-500 text-white mt-2 mb-1 px-3 py-1 cursor-pointer"
                              onClick={() => dispatch(deleteItem(item.id))}
                            >
                              Delete
                            </button>
                          </div>
                          <div className="grid grid-cols-3 w-20 text-center">
                            <div
                              className="text-xl  flex justify-center items-center xl:text-2xl bg-gray-400 rounded cursor-pointer"
                              onClick={() =>
                                dispatch(decrement(item.id))
                              }
                            >
                              <RemoveOutlinedIcon />
                            </div>
                            <div className="text-lg xl:text-xl bg-gray-200">
                              {item.quantity}
                            </div>
                            <div
                              className="text-xl flex justify-center items-center xl:text-2xl bg-gray-400 rounded cursor-pointer"
                              onClick={() =>
                                dispatch(increment(item.id))
                              }
                            >
                              <AddOutlinedIcon />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-2">
                        <div className="flex justify-center items-center h-full text-lg xl:text-xl mt-2 mr-4 font-semibold">
                          {item.price}
                        </div>
                      </div>
                    </div>
                  </div>

                ))}
              </div>

            </div>

            <div className="p-3 h-max text-center bg-white col-span-1">
              <div>
                <p className="text-sm"><span><CheckCircleOutlinedIcon /></span>Your order is eligible for FREE Delivery. Select this option at checkout. Details</p>

                <div className="font-bold">Total: {totalPrice > 0 ? totalPrice : 0} Rs</div>

                <StripeCheckout
                className=" my-2 bg-gradient-to-b from-[#f0c14b] to-[#f2d488] bg-[length:80%_100%] w-full py-1 rounded font-semibold"
                  stripeKey="pk_test_51N1opmSA4RHaflmjhJ5YiRSvN9r3DkTlx7AxmhXbn7w6m4LmV0Lpp822gsfo7gcqlWjvw1jmw5nJyaDtTA1tsjV300ShwWuVsM"
                  name="Amazon"
                  amount={totalPrice * 100}
                  label= {'Proceed to checkout'}
                  description={`Your Payment amount is $${totalPrice}`}
                  email={loggedEmail}
                  token={payment}
                />

              </div>
            </div>

          </div>
        ) : (
          <div className="bg-white flex flex-col justify-center items-center w-full h-[16rem]">
            <p className="text-2xl font-semibold py-3">Seems Empty :)</p>
            <Link to="/">
              <button className=" bg-gradient-to-b from-[#f0c14b] to-[#f2d488] bg-[length:80%_100%] w-[16rem] py-1 rounded font-semibold">Continue Shopping</button>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default Cart