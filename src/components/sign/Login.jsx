import { Link } from "react-router-dom";
import "../../css/style.css"
const Login = () => {
    return(
        <div style={{width:"100%", height:"100%"}}>
            <img className="bg" src={process.env.PUBLIC_URL+"/images/background.jpg"} alt=""></img>
            <div style={{position:"absolute", top:"25%", left:"25%"}}>
                <h1 className="text">TT</h1>
                <form action="">
                    <input className="inputlog" type="text" /><br/>
                    <input className="inputlog" type="password" /><br/>
                    <Link 
                        to="#" 
                        style={{right:"30px"}} className="loglink"
                        >Quên mk
                    </Link>
                    <Link
                        to="/Register" 
                        style={{left:"30px"}} className="loglink"
                        >Đăng ký
                    </Link>
                    <br/>
                    <button className="btnlog">Đăng nhập</button>
                </form>
            </div>
            <div className="linedown"></div>
            <div className="intro">
                <h1 className="text">Title</h1>
                <p className="text">xin chao</p>
            </div>
        </div>
        
    )
}
export default Login