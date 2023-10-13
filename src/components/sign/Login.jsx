import { Link } from "react-router-dom";
import "../../css/style.css"
import { useEffect, useState } from "react";
const Login = () => {
    const [data, setData] = useState(null);
    const [taikhoan, setTaiKhoan] = useState(null);
    const [matkhau, setMatKhau] = useState(null);
    useEffect(()=> {
        fetch("http://localhost:3001/test/userapi")
        .then(res =>res.json())
        .then(data => {setData(data.message)
        console.log(data.message)
        })
    },[])

    return(
        <div style={{width:"100%", height:"100%"}}>
            <img className="bg" src={process.env.PUBLIC_URL+"/images/background.jpg"} alt=""></img>
            <div style={{position:"absolute", top:"25%", left:"25%"}}>
                <h1 className="text">TT</h1>
                <form action="">
                    <input className="inputlog" type="text" value={taikhoan} onChange={(e) =>setTaiKhoan(e.target.value)}/><br/>
                    <input className="inputlog" type="password" value={matkhau} onChange={(e) =>setMatKhau(e.target.value)}/><br/>
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
                <p className="text">{data}</p>
            </div>
        </div>
        
    )
}
export default Login