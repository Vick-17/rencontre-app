import Header from "../Components/Header/Header";
import MainAccueil from "../Components/Accueil/MainAccueil";
import Footer from "../Components/Footer/Footer";
const Accueil = () => {
    return (
      <>
        <Header />
        <div className="accueil_container">
          <MainAccueil />
        </div>
        <Footer />
      </>
    );
};

export default Accueil;