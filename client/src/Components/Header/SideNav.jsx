import React from 'react'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const SideNav = ({title, firstList, secondList, thirdList}) => {
    return (
        <div className="border border-b pb-2">
            <h3 className="font-semibold px-5 pt-4 pb-2 text-xl">{title}</h3>
            <ul>
                <li className="flex justify-between items-center cursor-pointer text-lg hover:bg-zinc-200 py-2 px-5">{firstList}<span><ChevronRightOutlinedIcon /></span>
                </li>
                <li className="flex justify-between items-center cursor-pointer text-lg hover:bg-zinc-200 py-2 px-5">{secondList}<span><ChevronRightOutlinedIcon /></span>
                </li>
                <li className="flex justify-between items-center cursor-pointer text-lg hover:bg-zinc-200 py-2 px-5">{thirdList}<span><ChevronRightOutlinedIcon /></span>
                </li>
            </ul>
        </div>
    )
}

export default SideNav