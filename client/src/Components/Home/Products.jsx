import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/amazonSlice';

const Products = () => {
    const dispatch = useDispatch();
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        async function GetProducts() {
            let data = await axios.get('https://fakestoreapi.com/products');
            console.log(data)
            setProductData(data.data)
        }
        GetProducts();

    }, [])


    return (
        <div className="w-full flex justify-center items-center h-max bg-[#f2f4f4]">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:grid-cols-4 mt-8">
                {
                    productData.map((item, id) => (
                        <div className="max-w-sm rounded relative overflow-hidden shadow-lg h-[420px] bg-white z-9 m-3" key={id}>
                            <div className="h-[200px] m-4">
                                <img className="w-full h-full object-contain" src={item.image} alt="Product Image" />
                            </div>

                            <p className="absolute top-0 right-2 text-gray-600 font-semibold text-sm capitalize italic">{item.category}</p>

                            <div className="px-6 py-4 flex flex-col justify-between">
                                <div className="font-bold flex justify-between items-center text-base mb-2">{item.title.substring(0, 17)}
                                    <p className="text-gray-700 text-base font-bold">
                                        {item.price} Rs
                                    </p>
                                </div>
                                <p className="text-gray-700 text-sm">
                                    {item.description.substring(0, 70) + '...'}
                                </p>

                                <p className=" text-sm">Rating: {item.rating.rate}/5</p>

                                <button
                                    onClick={() => dispatch(addToCart({
                                        id:item.id,
                                        title:item.title,
                                        description:item.description,
                                        price:item.price,
                                        category:item.category,
                                        image:item.image,
                                        quantity:1,
                                    }))}
                                    className=" bg-gradient-to-b from-[#f0c14b] to-[#f2d488] bg-[length:80%_100%] w-[85%] absolute bottom-5 py-1 rounded font-semibold">
                                    Add to Cart
                                </button>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default Products