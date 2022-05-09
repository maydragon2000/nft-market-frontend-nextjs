import NftFilter from "./NftFilter/NftFilter";
import NftList from "./NftList/NftList";
const NftContent = () => {
    return (
        <>
            <div className="flex mt-10 border-solid border">
                <NftFilter />
                <NftList />
            </div>
        </>
    )
}
export default NftContent;