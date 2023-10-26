import { Link, useNavigate } from "react-router-dom";
import "../../css/style.css"
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { toast } from 'react-toastify';

const Login = () => {
    const [data, setData] = useState(null);
    const [taikhoan, setTaiKhoan] = useState('');
    const [matkhau, setMatKhau] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const [role, setRole] = useCookies(["role"]);
    const navigate = useNavigate();
    useEffect(()=> {
        // fetch("http://localhost:3001/test/userapi")
        // .then(res =>res.json())
        // .then(data => {setData(data.message)
        // })
    },[])
    async function checkinput (){
        if (taikhoan.trim().length == 0) 
        alert("Ban chua nhap tai khoan")
        
        else if (matkhau.trim().length == 0) 
        alert("Ban chua nhap mat khau")
        
        else return true
        return false
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        if(checkinput()){
        var dataa = {Username: taikhoan,Password: matkhau}
        //console.log(JSON.stringify(dataa));
        let result = await fetch(
            'http://localhost:3001/jobfinder/login',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                },
              body: JSON.stringify(dataa),
            },
        ).then(res =>res.json())
        .then(data => {
            if(data.result[0]){
                toast.success('Success Notification !', {
                    position: toast.POSITION.TOP_RIGHT
                });
                setCookie("user", data.result[1], { path: "/" });
                console.log(data.result[2])
                setRole("role",data.result[2])
                if(data.result[2]==1)
                navigate("/admin");
                else
                navigate("/");
            }
            else {toast.error('Đăng nhập thất bại, tài khoản hoặc mật khẩu nhập sai',{
                position: toast.POSITION.TOP_RIGHT
            }); 
            removeCookie('user')
        }
        })
        //console.log(data[1])
        }

    }
    return(
        <div style={{width:"100%", height:"100%"}}>
            <img className="bg" src={process.env.PUBLIC_URL+"/images/background.jpg"} alt=""></img>
            <div style={{position:"absolute", top:"25%", left:"25%"}}>
                <h1 className="text">TT</h1>
                <form onSubmit={onSubmit}>
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
                    <button type="submit" className="btnlog">Đăng nhập</button>
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