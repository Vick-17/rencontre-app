import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import CoxNop from "../assets/CoxNop.gif";
import StopStyle from "../Style/StopStyle/StopStyle.module.css";
import { useNavigate } from "react-router-dom";

const Stop = () => {
const navigate = useNavigate();

    return (
      <>
        <Header />
        <div className={StopStyle.container}>
          <div className={StopStyle.imgContainer}>
            <img
              className={StopStyle.img}
              src={CoxNop}
              alt="Courteney cox qui dit non car tu na pas 18 ans"
            />
            <h2>NON ! Tu n'es pas majeur !</h2>
            <button
              className={StopStyle.btn}
              type="button"
              onClick={() => {
                navigate("/infoCox");
              }}
            >
              Retour à l'accueil
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
};

export default Stop;