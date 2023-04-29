import React, { useState } from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Link } from "react-router-dom";
import SideNav from './SideNav';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [sideBar, setSideBar] = useState(false);
    const products = useSelector((state) => state.amazonReducer.products);
    const user = useSelector((state) => state.amazonReducer.user)
    const loggedEmail = user?._delegate?.currentUser?.email;

    return (
        <header className="sticky top-0 z-10">
            <div className="flex bg-amazonBlue text-white h-[4rem]">

                <div className="flex items-center m-4">
                    <button onClick={() => setSideBar(true)} className='font-bold lg:hidden mb-3'><span className=""><MenuOutlinedIcon /></span></button>
                    <Link to="/">
                        <img
                            className="h-[35px] w-[100px] m-2"
                            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                            alt="Amazon logo"
                        />
                    </Link>
                    <div className="hidden lg:flex justify-center  items-end pl-4">
                        <LocationOnOutlinedIcon />
                        <div className="pr-4 ">
                            <div className="text-xs xl:text-sm">Deliver to</div>
                            <div className="text-sm xl:text-base font-bold">India</div>
                        </div>
                    </div>

                </div>

                <div className="hidden lg:flex grow relative items-center">
                    <div className="w-[100%]">
                        <div className="flex items-center h-10 bg-amazonYellow rounded">
                            <select
                                // onChange={(e) => setCategory(e.target.value)}
                                className="p-2 bg-light-text text-black border text-xs xl:text-sm">
                                <option>All</option>
                                <option>Deals</option>
                                <option>Amazon</option>
                                <option>Fashion</option>
                                <option>Computers</option>
                                <option>Home</option>
                                <option>Mobiles</option>
                            </select>
                            <input
                                className="flex grow items-center h-[100%] rounded-l text-black"
                                type="text"
                            // value={searchTerm}
                            // onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="w-[45px]">
                                <SearchOutlinedIcon className="h-[27px] m-auto text-amazonBlue" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center m-4">
                    <Link to="/login" className="hidden lg:block">
                        <div className="pr-4 pl-4">
                            <div className="text-xs xl:text-sm">Hello, {user ? loggedEmail : 'sign In'}</div>
                            <div className="text-sm xl:text-base font-bold">
                                Accounts & Lists
                            </div>
                        </div>
                    </Link>
                    <div className="pr-4 pl-4">
                        <div className="text-xs xl:text-sm">Returns</div>
                        <div className="text-sm xl:text-base font-bold">& Orders</div>
                    </div>
                    <Link to="/cart">
                        <div className="flex pr-3 pl-3">
                            <ShoppingBasketOutlinedIcon className="h-[48px]" />
                            <div className="relative">
                                <div className="absolute ml-1 font-bold text-orange-400">
                                    {products.length > 0 ? products.length : 0}
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="flex bg-amazonLight overflow-x-scroll scrollbar-hide font-semibold text-white space-x-3  text-xs xl:text-base p-2 pl-6">
                <button onClick={() => setSideBar(true)} className='font-bold hidden lg:block'><span className="pb-5"><MenuOutlinedIcon /></span>All</button>
                <div className='cursor-pointer  '>Today's Deals</div>
                <div className='cursor-pointer  '>Customer Service</div>
                <div className='cursor-pointer  '>Registry</div>
                <div className='cursor-pointer  '>Gift Cards</div>
                <div className='cursor-pointer  '>Sell</div>
            </div>

            {
                sideBar && (
                    <div onClick={() => setSideBar(false)} className="w-full h-screen text-black fixed top-0 left-0 bg-amazonBlue bg-opacity-50 z-50">
                        <div className="w-[70%] md:w-full h-full relative">
                            <div className="w-[350px] h-full bg-white border border-black overflow-y-scroll scrollbar-hide">
                                <div className="w-[350px] h-[50px] bg-amazonLight text-white py-2 px-5 fixed top-0 flex items-center">
                                    <AccountCircleOutlinedIcon fontSize="large" />
                                    <h3 className="text-xl font-bold pl-2">Hello, SignIn</h3>
                                </div>
                                <SideNav
                                    title="Digital Content & Devices"
                                    firstList="Amazon Music"
                                    secondList="Kindle E-readers & Books"
                                    thirdList="Amazon Appstore" F
                                />
                                <SideNav
                                    title="Shop By Department"
                                    firstList="Electronics"
                                    secondList="Computers"
                                    thirdList="Smart Home"
                                />
                                <SideNav
                                    title="Programs & Features"
                                    firstList="Gift Cards"
                                    secondList="Amazon live"
                                    thirdList="International Shopping"
                                />
                                <SideNav
                                    title="Help & Settings"
                                    firstList="Your Account"
                                    secondList="Customer Service"
                                    thirdList="Log out"
                                />
                                <button onClick={() => setSideBar(false)} className="absolute left-[360px] top-2 bg-white w-10 h-10 flex justify-center items-center border">
                                    <CloseOutlinedIcon />
                                </button>

                            </div>
                        </div>
                    </div>
                )
            }

        </header>

    )
}

export default Navbar