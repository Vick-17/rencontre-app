import searchBarStyle from "../../Style/HeaderStyle/searchbarStyle.module.css"
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const searchbar = () => {
    return (
      <div className={searchBarStyle.container}>
        <EmojiNatureIcon style={{ fontSize: "100px" }} />
        <input
          className={searchBarStyle.searchbar}
          type="text"
          placeholder="Search.."
        ></input>
        <button className={searchBarStyle.btnSearchBar} type="button">
          Filtre +
        </button>
        <button className={searchBarStyle.btnSearchBar} type="button">
          Déposer une annonce
        </button>
        <span className={searchBarStyle.myAccount}>
          Mon compte <AccountCircleIcon style={{ fontSize: "40px" }} />
        </span>
      </div>
    );
};

export default searchbar;