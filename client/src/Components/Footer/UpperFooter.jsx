import React from 'react'
import { Link } from 'react-router-dom';

const UpperFooter = () => {
    return (
        <>
            <div className="w-full h-max bg-white pt-6 pb-4 ">
                <div className="border border-slate-200 rounded-md h-[8rem]  flex flex-col justify-center items-center">
                    <h5 className="text-base">See personalized recommendations</h5>
                    <button className=" bg-gradient-to-b from-[#f0c14b] to-[#f2d488] bg-[length:80%_100%] w-[16rem] py-1 rounded font-semibold">Sign in</button>
                    <h6 className="text-sm">
                        New customer?
                        <Link >
                            <span className="text-blue-500"> Start here.</span>
                        </Link>
                    </h6>
                </div>
            </div>
            <div className="w-full h-[4rem] bg-[#425369] hover:opacity-90 text-white text-sm flex justify-center items-center">
                <Link to="/home">Back to top</Link>
            </div>
        </>
    )
}

export default UpperFooter;