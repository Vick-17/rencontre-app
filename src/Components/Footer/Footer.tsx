import FooterStyle from "../../Style/Footer/FooterStyle.module.css";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";


const Footer = () => {
    return (
        <div className={FooterStyle.container}>
            <AlternateEmailIcon style={{fontSize: "2.5rem"}} />
            <FacebookIcon style={{fontSize: "2.5rem"}} />
            <InstagramIcon style={{fontSize: "2.5rem"}} />
            <SmartphoneIcon style={{fontSize: "2.5rem"}} />
            <TwitterIcon style={{fontSize: "2.5rem"}} />
            <EmailIcon style={{fontSize: "2.5rem"}} />
        </div>
    );
};

export default Footer;