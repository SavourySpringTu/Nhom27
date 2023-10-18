import { Link } from "react-router-dom";
import "../../css/style.css"
const Header = () => {
    return(
        <div className='topbar'>
            <div className="Leftside" style={{padding:"15px"}}>
                <Link to="/" className="loglink topbarelement text">TT</Link>
                <Link to="#" className="loglink topbarelement text">Việc làm</Link>
                <Link to="#" className="loglink topbarelement text">Công ty</Link>
            </div>
            <div className="Rightside">
                <button className="topbarelement topbarbtn">
                <Link to="/User" className="loglink">Cá nhân</Link>    
                </button>
                <button className="topbarelement topbarbtn">
                <Link to="/Login" className="loglink">Đăng nhập</Link>
                </button>
            </div>
        </div>
    )
}
export default Header