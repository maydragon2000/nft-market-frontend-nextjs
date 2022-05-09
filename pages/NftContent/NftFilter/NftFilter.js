import { useState } from 'react'
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { Collapse } from 'react-collapse';
import jsonFilterData from "./bored-ape-yacht-club-traits.json"
import SingleFilter from '../../../components/SingleFilter/SingleFilter';
import SingleToggle from '../../../components/SingleToggle/SingleToggle';

const NftFilter = () => {
    const [sidewidth, setSidewidth] = useState("350px");
    const [priceingCollapse, setPricingCollapse] = useState(true);
    const onClickPriceing = () => {
        if (priceingCollapse === true)
            setPricingCollapse(false);
        else setPricingCollapse(true);
    }
    const sideShow = () => {
        console.log("here");
        if (sidewidth === "350px") {
            setSidewidth("50px");
        }
        else {
            setSidewidth("350px");
        }
    }

    return (
        <>
            <div className=" h-screen shadow-md bg-white px-1 overflow-y-auto" id="sidenavExample" style={{ minWidth: sidewidth }}>
                <ul className="relative">
                    <li className='relative'>
                        <a onClick={sideShow} className='flex items-center justify-between text-sm h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer'>
                            <span className='ml-5 text-2xl font-bold' style={{ display: sidewidth === "350px" ? "block" : "none" }}>Filters</span>
                            <div className='arrow-image-wrap'>
                                <img src='right.png' className='arrow-image ml-2' style={{ display: sidewidth === "350px" ? "none" : "block" }} />
                                <img src="left.png" className='arrow-image mr-2' style={{ display: sidewidth === "350px" ? "block" : "none" }} />
                            </div>
                        </a>
                    </li>
                    <li className="relative" id="sidenavEx1" style={{ display: sidewidth === "350px" ? "list-item" : "none" }}>
                        <a onClick={onClickPriceing} className="flex items-center justify-between text-lg py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="true" aria-controls="collapseSidenavEx1">
                            <span className='font-semibold'>Priceing</span>
                            <img className='plus-image' src='plus.jpg' style={{ display: priceingCollapse ? "none" : "block" }} />
                            <img className='minus-image' src='minus.png' style={{ display: priceingCollapse ? "block" : "none" }} />
                        </a>
                        <Collapse isOpened={priceingCollapse}>
                            <ul className="relative accordion-collapse collapse" id="collapseSidenavEx1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                                <li className="relative">
                                    <div className="flex items-center  justify-between text-lg py-4 pl-6 pr-6 h-15 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                                        <span className='font-semibold'>Buy Now</span>
                                        <SingleToggle check={true} />
                                    </div>

                                </li>
                                <li className="relative">
                                    <div className="flex items-center  justify-between text-lg py-4 pl-6 pr-6 h-15 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                                        <span className='font-semibold'>Claimed $APE</span>
                                        <SingleToggle check={false} />
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center  justify-between text-lg py-4 pl-6 pr-6 h-15 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                                        <div className='w-1/2'>
                                            <p className='font-semibold'>Min Price</p>
                                            <input
                                                type="text"
                                                className="w-4/5 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Min"
                                            />
                                            {/* <p className='font-semibold opacity-50'>69 Ether</p> */}
                                        </div>
                                        <div className='w-1/2'>
                                            <p className='font-semibold'>Max Price</p>
                                            {/* <p className='font-semibold opacity-50'>420 ETHER</p> */}
                                            <input
                                                type="text"
                                                className="w-4/5 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Max"
                                            />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </Collapse>
                    </li>
                    <SingleFilter sidewidth={sidewidth} open={true} data={jsonFilterData.TraitCount} head="Trait Count" />
                    <SingleFilter sidewidth={sidewidth} open={false} data={jsonFilterData.Background} head="Background" />
                    <SingleFilter sidewidth={sidewidth} open={false} data={jsonFilterData.Clothes} head="Clothes" />
                    <SingleFilter sidewidth={sidewidth} open={false} data={jsonFilterData.Earring} head="Earring" />
                    <SingleFilter sidewidth={sidewidth} open={false} data={jsonFilterData.Eyes} head="Eyes" />
                    <SingleFilter sidewidth={sidewidth} open={false} data={jsonFilterData.Fur} head="Fur" />
                    <SingleFilter sidewidth={sidewidth} open={false} data={jsonFilterData.Hat} head="Hat" />
                    <SingleFilter sidewidth={sidewidth} open={false} data={jsonFilterData.Mouth} head="Mouth" />
                </ul>
            </div>
        </>
    )
}
export default NftFilter;