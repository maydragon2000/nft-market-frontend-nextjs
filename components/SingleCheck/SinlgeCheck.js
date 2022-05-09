const SinlgeCheck = ({ data }) => {
    const percent = (data.count / 100).toFixed(0);
    return (
        <>
            <li className="relative  flex items-center justify-between hover:bg-gray-100 transition duration-300 ease-in-out">
                <div className="flex items-center text-xs py-4 pl-6 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                    <input
                        type="checkbox"
                        name="remember"
                        className="w-5 h-5 border border-gray-300 rounded-sm outline-none cursor-pointer"
                    />
                    <label className="ml-2 text-sm" htmlFor="email">{data.value}</label>
                </div>
                <span className='mr-5'>{data.count}({percent}%)</span>
            </li>
        </>
    )
}
export default SinlgeCheck;