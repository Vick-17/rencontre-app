import InteractiveMap from "./InteractiveMap";
import MainAccueilStyle from "../../Style/AccueilStyle/MainAccueil.module.css";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";

const MainAccueil = () => {
    return (
      <div className={MainAccueilStyle.container}>
        <div className={MainAccueilStyle.map}>
          <InteractiveMap />
        </div>
        <div className={MainAccueilStyle.searchCox}>
          <div>
            <EmojiNatureIcon style={{ fontSize: "200px", color: "#fff" }} />
          </div>
          <span>Chercher une cox</span>
        </div>
      </div>
    );
};

export default MainAccueil;