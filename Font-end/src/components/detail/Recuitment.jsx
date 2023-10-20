import { useEffect, useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom"

const Recuitment = () => {
    const {Id} = useParams();
    const [luong, setLuong] = useState(null);
    const [company, setCompany] = useState(null);
    const [job, setJob] = useState(null);
    const [salary, setSalary] = useState(null);
    const [require, setRequire] = useState(null);
    const [benefits, setBenefits] = useState(null);
    const [address, setAddress] = useState(null);
    const [number, setNumber] = useState(null);
    const [exp, setExp] = useState(null);
    const [dateterm, setDateTerm] = useState(null);
    useEffect(()=> {
        fetch(`http://localhost:3001/jobfinder/postdetail/${Id}`)
        .then(res =>res.json())
        .then(data => {
            console.log(data[0])
            setAddress(data[0].Address)
            setLuong(data[0].Salary)
            setJob(data[0].Job)
            setAddress(data[0].Address)
            setBenefits(data[0].benefits)
            setRequire(data[0].JobRequire)
            setNumber(data[0].Number)
            setExp(data[0].Experience)
            setDateTerm(data[0].DateTerm)
            setCompany(data[0].Company)
        })
        console.log(Id)
    },[])
    return(
        <div style={{position:"absolute", display: "flex", justifyContent: "flex-start", left:"20%",margin:"20px"}}>
            <div>
                <div style={{background:"gainsboro", padding:"20px",borderRadius:"7px"}}>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div className="text" style={{fontWeight:"500",fontSize:"35px"}}>{job}</div>
                        <div><button style={{padding:"5px",borderRadius:"7px"}}>Nộp cv</button></div>
                    </div>
                    <div><h3>Giới thiệu công việc</h3></div>
                    <div className="gridContainerRecuit">
                        <div><h3 className="text">Lương</h3>
                            <div>{luong} triệu</div>
                        </div>
                        
                        <div><h3 className="text">Công việc</h3>
                            <div>{job}</div>
                        </div>
                        <div><h3 className="text">Kinh nghiệm</h3>
                            <div>{exp?exp:'Không'}</div>
                        </div>
                        
                        <div><h3 className="text">Số lượng</h3>
                            <div>{number}</div>
                        </div>
                    </div>
                    
                    <div style={{background:"black",height:"1px",width:"90%",left:"5%",position:"relative"}}></div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div>Hạn nộp hồ sơ: {dateterm.split("T")[0]}</div>
                        <div style={{paddingLeft:"50px"}}>Khu vực: {address}</div>
                    </div>
                </div>
                <div style={{background:"gainsboro",marginTop:"20px",borderRadius:"10px"}}><h2> Mô tả/Yêu cầu công việc </h2>
                    <div>{require?require:'Không có yêu cầu thêm'}</div>
                    <div>{benefits?'Quyền lợi:'+benefits:""}</div>
                </div>
            </div>
            <div style={{margin:"0px 20px",background:"gainsboro",height:"45%", width:"175px",borderRadius:"10px",padding:"10px"}}>
                <div style={{display: "flex", justifyContent: "flex-start"}}>
                    <div style={{width:"40px",height:"40px",padding:"5px"}}><img className="icon-fit"src={process.env.PUBLIC_URL+"/company.jpeg"} alt="" /></div>
                    <div>{company}</div>
                </div>
                <div>
                    <div>Điện thoại</div>
                    <div>Địa chỉ</div>
                    <div><Link to="">Xem chi tiết</Link></div>
                </div>
            </div>
            
        </div>
    )
}
export default Recuitment