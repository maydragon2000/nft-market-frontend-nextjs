const SingleToken = () => {
    return (
        <>
            <div className="flex-column text-md font-semibold mr-2 ml-2 mb-10">
                <img className="w-60 h-60 rounded-lg " src="token.png" />
                <p >Token Id: #7495</p>
                <p>Price:not for sale</p>
                <p>Rank: #1</p>
                <p>Owned by: Presps to the props...</p>
                <p>ApeCoin Claimed: True</p>
                <button type="button" className="token-list-btn w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Make Offer</button>
            </div>
        </>
    )
}
export default SingleToken