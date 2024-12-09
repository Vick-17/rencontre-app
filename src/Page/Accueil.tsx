import Header from "../Components/Header/Header";
import MainAccueil from "../Components/Accueil/MainAccueil";

const Accueil = () => {
    return (
      <>
        <Header />
        <div className="accueil_container">
          <MainAccueil />
        </div>
      </>
    );
};

export default Accueil;