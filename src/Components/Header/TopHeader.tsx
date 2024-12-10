import EmailIcon from "@mui/icons-material/Email";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TopHeaderStyle from "../../Style/HeaderStyle/TopHeaderStyle.module.css"

function TopHeader() {
  return (
    <div className={TopHeaderStyle.container}>
      <h1>AdopteUneCox.com</h1>
      <ul className={TopHeaderStyle.navbar}>
        <li><EmailIcon /></li>
        <li><RemoveRedEyeIcon /></li>
        <li><NotificationsIcon /></li>
        <li><ShoppingCartIcon /></li>
      </ul>
    </div>
  );
}

export default TopHeader;
