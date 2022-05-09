import { useState } from "react";
const SingleToggle = ({check}) => {
    const [toggle, setToggle] = useState(check);
    const toggleclassName = ' transform translate-x-5';

    return (
        <>
            <div
                className={`md:w-14 md:h-7 w-12 h-6 flex items-center  rounded-full p-1 cursor-pointer ${(!toggle ? "bg-gray-300" : "bg-indigo-500")}`}
                onClick={() => {
                    setToggle(!toggle);
                }}
            >
                <div className={"bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform" + (!toggle ? "" : toggleclassName)}></div>
            </div>
        </>
    )
}
export default SingleToggle;