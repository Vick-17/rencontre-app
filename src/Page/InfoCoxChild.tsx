import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import StopStyle from "../Style/StopStyle/StopStyle.module.css";

const InfoCoxChild = () => {
  return (
    <>
      <Header />
      <div className={StopStyle.container}>
        <div className={StopStyle.imgContainer}>
          <iframe
            width="660"
            height="415"
            src="https://www.youtube.com/embed/OSJBEdDYLBU?si=iCsvBKCOhFEXdRzJ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InfoCoxChild;
