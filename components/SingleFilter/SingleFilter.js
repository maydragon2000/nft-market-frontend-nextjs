import { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import SinlgeCheck from "../SingleCheck/SinlgeCheck";
const SingleFilter = ({ sidewidth, data, head, open }) => {
    const [collapseOpen, setCollapseOpen] = useState(open);
    const [searchVal, setSearchVal] = useState("");
    const [filterData, setFilterData] = useState([]);
    const onClickCollapse = () => {
        if (collapseOpen === true)
            setCollapseOpen(false);
        else setCollapseOpen(true);
    }
    const search = (e) => {
        setSearchVal(e.target.value);
    }
    useEffect(() => {
        setFilterData(data.filter(checkValue));
    }, [searchVal])
    const checkValue = (item) => {
        if (item.value.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1)
            return true;
        else return false;
    }
    return (
        <>
            <li className="relative overflow-y-hidden " id="sidenavEx2" style={{ display: sidewidth === "350px" ? "list-item" : "none" }}>
                <a onClick={onClickCollapse} className="flex items-center justify-between text-lg py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx2" aria-expanded="false" aria-controls="collapseSidenavEx2">
                    <span className='font-semibold'>{head}</span>
                    <img className='plus-image' src='plus.jpg' style={{ display: collapseOpen ? "none" : "block" }} />
                    <img className='minus-image' src='minus.png' style={{ display: collapseOpen ? "block" : "none" }} />
                </a>
                <Collapse isOpened={collapseOpen} >
                    <ul className="relative accordion-collapse " id="collapseSidenavEx2" aria-labelledby="sidenavEx2" data-bs-parent="#sidenavExample">
                        <li className="relative">
                            <div className="flex items-center h-14 text-lg  py-4 pl-6 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                                <input
                                    type="text"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Filters"
                                    value={searchVal}
                                    onChange={search}
                                />
                            </div>
                        </li>
                        <div className="max-h-36 overflow-y-scroll SingleFilter">
                            {
                                searchVal === "" ? data.map((item, index) => <SinlgeCheck data={item} key={index} />) : filterData.map((item, index) => <SinlgeCheck data={item} key={index} />)
                            }
                        </div>
                    </ul>
                </Collapse>
            </li>
        </>
    )
}
export default SingleFilter;