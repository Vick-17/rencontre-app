import TopHeader from "./TopHeader";
import SearchBar from "./searchbar";
import HeaderStyle from "../../Style/HeaderStyle/HeaderStyle.module.css"

function Header() {
    return (
      <div className={HeaderStyle.container}>
        <TopHeader />
        <SearchBar />
      </div>
    );
};

export default Header;