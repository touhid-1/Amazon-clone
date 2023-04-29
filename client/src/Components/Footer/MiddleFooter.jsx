import React from 'react'

const MiddleFooter = () => {
    return (
        <div className="bg-amazonLight px-6">
            <div className="max-w-4xl flex justify-center mx-auto py-6">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:grid-cols-4 mt-8">
                    <div className="">
                        <div className="text-white font-bold text-lg">Get to Know Us</div>
                        <ul className='text-lightText pt-3'>
                            <li className="hover:underline text-base cursor-pointer">Careers</li>
                            <li className="hover:underline text-base cursor-pointer">Blog</li>
                            <li className="hover:underline text-base cursor-pointer">About Amazon</li>
                            <li className="hover:underline text-base cursor-pointer">Investor Relations</li>
                            <li className="hover:underline text-base cursor-pointer">Amazon Devices</li>
                            <li className="hover:underline text-base cursor-pointer">Amazon Science</li>
                        </ul>
                    </div>
                    <div className="">
                        <div className="text-white font-bold text-lg">Make Money with Us</div>
                        <ul className='text-lightText pt-3'>
                            <li className="hover:underline text-base cursor-pointer">Sell products on Amazon</li>
                            <li className="hover:underline text-base cursor-pointer">Sell on Amazon Business</li>
                            <li className="hover:underline text-base cursor-pointer">Sell apps on Amazon</li>
                            <li className="hover:underline text-base cursor-pointer">Become an Affiliate</li>
                            <li className="hover:underline text-base cursor-pointer">Advertise Your Products</li>
                            <li className="hover:underline text-base cursor-pointer">Sell Product with Us</li>
                            <li className="hover:underline text-base cursor-pointer">Host an Amazon Hub</li>
                            <li className="hover:underline text-base cursor-pointer">See More Make Money with Us</li>
                        </ul>
                    </div>
                    <div className="">
                        <div className="text-white font-bold text-lg">Amazon Payment Products</div>
                        <ul className='text-lightText pt-3'>
                            <li className="hover:underline text-base cursor-pointer">Amazon Business Card</li>
                            <li className="hover:underline text-base cursor-pointer">Shop with Points</li>
                            <li className="hover:underline text-base cursor-pointer">Reload Your Balance</li>
                            <li className="hover:underline text-base cursor-pointer">Amazon Currency Converter</li>
                        </ul>
                    </div>
                    <div className="">
                        <div className="text-white font-bold text-lg">Let Us Help You</div>
                        <ul className='text-lightText pt-3'>
                            <li className="hover:underline text-base cursor-pointer">Amazon and COVID-19</li>
                            <li className="hover:underline text-base cursor-pointer">Your Account</li>
                            <li className="hover:underline text-base cursor-pointer">Your Orders</li>
                            <li className="hover:underline text-base cursor-pointer">Shipping Rates & Policies</li>
                            <li className="hover:underline text-base cursor-pointer">Returns & Replacements</li>
                            <li className="hover:underline text-base cursor-pointer">Manage Your Content and Devices</li>
                            <li className="hover:underline text-base cursor-pointer">Amazon Assistant</li>
                            <li className="hover:underline text-base cursor-pointer">FAQ & Help</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiddleFooter;