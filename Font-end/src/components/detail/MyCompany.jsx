import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate, useParams } from "react-router-dom";
const MyCompany = () => {
    // const {Id} = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState([[],[]]);
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);
    const [showAddNew,setshowAddNew]=useState(true);
    const [salarya, setSalarya] = useState(null);
    const [salaryb, setSalaryb] = useState(null);
    const [job, setJob] = useState(null);
    const [require, setRequire] = useState(null);
    const [benefit, setBenefit] = useState(null);
    const [address, setAddress] = useState(null);
    const [number, setNumber] = useState(null);
    const [exp, setExp] = useState(null);
    const [date, setDate] = useState(null);
    const onSubmit = async (e) => {
        e.preventDefault();
        var dataa = {Job: job,Address: address,JobRequire: require,Number:number, Benefit: benefit, Exp: exp, Date: date,Salary: salarya+"-"+salaryb}
        let result = await fetch(
            `http://localhost:3001/company/newPost/${cookies.user}`,
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
            console.log(data)
            if(data){
                alert('Tạo bài tuyển dụng thành công')
                showAdd();
            }
            else {alert('Lưu thất bại');
            }})
    }
    const showAdd = () => {
        setshowAddNew(!showAddNew) ;
    }
    async function goto(id) {
        console.log(id)
        navigate(`/Post/${id}`);
    }
    useEffect(()=> {
        fetch(`http://localhost:3001/company/myCompany/${cookies.user}`)
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            setData(data);
        })
        // fetch(`http://localhost:3001/company/getAllAppliThisPost/${Id}`)
        // .then(res =>res.json())
        // .then(data => {
        //     console.log(data)
        //     setAppli(data);
        // })
    },[])
    return(
        <div style={{position:"relative", left:"15%",width:"70%",margin:"20px"}}>
            {!showAddNew ? ( <>
                <div style={{position: "fixed",background: "#C4BEBE",width: "70%", zIndex:"1", padding:"10px",borderRadius:"10px",left:"14%"}}>
                <div className='chatbox'>
                <form action="/" onSubmit={onSubmit}>
                <div>
                    <table>
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td><div>Công việc</div></td>
                            <td><div><input type="text" value={job} onChange={(e) =>setJob(e.target.value)}/></div></td>
                        </tr>
                        <tr>
                            <td><div>Lương</div></td>
                            <td><div><input style={{width: "200px"}} type="number" value={salarya} onChange={(e) =>setSalarya(e.target.value)}/>
                            -<input style={{width: "200px",margin:"0px 10px"}} type="number" value={salaryb} onChange={(e) =>setSalaryb(e.target.value)}/> tr   
                            </div></td>
                        </tr>
                        <tr>
                            <td><div>Kinh nghiệm</div></td>
                            <td><div><input type="text" value={exp} onChange={(e) =>setExp(e.target.value)}/></div></td>
                        </tr>
                        <tr>
                            <td><div>Số lượng</div></td>
                            <td><div><input type="number" value={number} onChange={(e) =>setNumber(e.target.value)}/></div></td>
                        </tr>
                        <tr>
                            <td><div>Yêu cầu công việc</div></td>
                            <td><div><input type="text" value={require} onChange={(e) =>setRequire(e.target.value)}/></div></td>
                        </tr>
                        <tr>
                            <td><div>Lợi ích</div></td>
                            <td><div><input type="text" value={benefit} onChange={(e) =>setBenefit(e.target.value)}/></div></td>
                        </tr>
                        <tr>
                            <td><div>Địa chỉ</div></td>
                            <td><div><input type="text" value={address} onChange={(e) =>setAddress(e.target.value)}/></div></td>
                        </tr>
                        <tr>
                            <td><div>Hạn</div></td>
                            <td><div><input type="date" value={date} onChange={(e) =>setDate(e.target.value)}/></div></td>
                        </tr>
                    </table>
            
                </div>
                <div style={{display:"flex", justifyContent:"flex-end", margin:"10px"}}><button type="submit">Lưu</button></div>
                </form>
                    <button style={{position: "inherit",left: "92%",background: "#ff474780",top:"8px"}} 
                            onClick={showAdd}>
                        Thoát
                    </button>
                </div>
                </div>  
            </>):
            <div></div>
            }
            <div>
            {data[0].map(dataa => (
                <div style={{background:"gainsboro", padding:"20px",borderRadius:"7px"}}>
                
                    <div style={{display: "flex", justifyContent: "flex-start"}}>
                        <div style={{width:"60px",height:"60px",margin:"5px"}}><img className="icon-fit"src={process.env.PUBLIC_URL+"/company.jpeg"} alt="" /></div>
                        <div className="text" style={{fontWeight:"500",fontSize:"35px"}}>{dataa.Name}</div>
                    </div>
                    <div style={{display:"table",lineHeight:'0px'}}>
                        <div style={{display:'flex'}}><h3 className="text">Giới thiệu: {dataa.Description?dataa.Description:"Chưa có giới thiệu"}</h3></div>
                        <br />
                        <div style={{display:'flex'}}><h3 className="text">Liên lạc: {dataa.Contact?dataa.Contact:"Chưa có liên lạc"}</h3></div>
                        <br />
                        <div style={{display:'flex'}}><h3 className="text">Trụ sở: {dataa.Address?dataa.Address:"Chưa có địa chỉ"}</h3></div>
                        <div style={{width:"350%"}}><button style={{float:"right"}}>Cập nhật thông tin</button></div>
                    </div>
                </div>
            ))}
                <div style={{background:"gainsboro",marginTop:"20px",borderRadius:"10px",padding:"10px"}}>
                <div style={{justifyContent: "space-between",display: "flex",margin: "0px 110px"}}>
                    <h2> Danh sách các bài đăng </h2> 
                    <div onClick={showAdd}>+ Thêm bài đăng</div>
                </div>
                {data[1].map(post => (
                    <div className="listjob" onClick={()=>goto(post.Id)} key={post.Id}>
                        <div style={{display:"flex"}}>Công việc: {post.Job}</div>
                        <br />
                        <div style={{display:"flex"}}>Lương: {post.Salary}tr</div>
                        <br />
                        <div style={{display:"flex"}}>Địa chỉ: {post.Address}</div>
                    </div>
                ))} 
                </div>
            </div>
            
        </div>
    )
}
export default MyCompany