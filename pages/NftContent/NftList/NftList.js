import { useState } from "react";
import SingleToken from "../../../components/SingleToken/SingleToken";
const NftList = () => {
    const [nftData, setNftDAta] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);
    return (
        <>
            <div className="w-full h-20">
                <div className="flex p-3 border border-solid">
                    <a className="h-14 w-14 p-4 cursor-pointer">
                        <img src="reload.png" />
                    </a>
                    <div>
                        <p className="text-lg font-semibold">10000 results</p>
                        <p className="text-md opacity-50">17 seconds ago</p>
                    </div>
                    <div className="absolute right-16 h-16">
                        <select defaultValue={1} className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                            <option value="1">Rank: Low ot High</option>
                            <option value="2">Rank: High ot Low</option>
                        </select>
                    </div>
                </div>
                <div className="flex p-3 flex-wrap justify-center">
                    {
                        nftData.map((item, index) => <SingleToken key={index} />)
                    }
                </div>
            </div>
        </>
    )
}
export default NftList;