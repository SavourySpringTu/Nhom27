import { useState } from "react";

const Self = () => {
    const [ten, setTen] = useState(null);
    const [diachi, setDiaChi] = useState(null);
    const [lienlac, setLienLac] = useState(null);
    const [hocvan, setHocVan] = useState(null);
    const [tuoi, setTuoi] = useState(null);
    const [gioithieu, setGioiThieu] = useState(null);
    const [congviec, setCongViec] = useState(null);
    const [tieusu, setTieuSu] = useState(null);
    return(
        <div style={{position:"relative", display: "grid", justifyContent: "normal"}}>
            <form action="" style={{background:"gray",position:"relative",margin:"5%", fontSize:"30px"}}>
            <div style={{display:"flex", justifyContent:"flex-start"}}>
                <div style={{padding:"30px",width:"180px"}}>ảnh</div>
                <div>
                    <table>
                        <tr>
                            <th>Tên</th>
                            <th>{ten}</th>
                        </tr>
                        <tr>
                            <td><div>Địa chỉ</div></td>
                            <td><div><input type="text" value={diachi} onChange={(e) =>setDiaChi(e.target.value)}/></div></td>
                        </tr>
                        <tr>
                            <td><div>Liên lạc</div></td>
                            <td><div><input type="number" value={lienlac} onChange={(e) =>setLienLac(e.target.value)}/></div></td>
                        </tr>
                        <tr>
                            <td><div>Học vấn</div></td>
                            <td><div><input type="text" value={hocvan} onChange={(e) =>setHocVan(e.target.value)}/></div></td>
                        </tr>
                        <tr>
                            <td><div>Tuổi</div></td>
                            <td><div><input type="number" value={tuoi} onChange={(e) =>setTuoi(e.target.value)}/></div></td>
                        </tr>
                        <tr>
                            <td><div>Giới thiệu</div></td>
                            <td><div><input type="text" value={gioithieu} onChange={(e) =>setGioiThieu(e.target.value)}/></div></td>
                        </tr>
                        <tr>
                            <td><div>Công việc</div></td>
                            <td><div><input type="text" value={congviec} onChange={(e) =>setCongViec(e.target.value)}/></div></td>
                        </tr>
                        <tr>
                            <td><div>Tiểu sử</div></td>
                            <td><div><input type="text" value={tieusu} onChange={(e) =>setTieuSu(e.target.value)}/></div></td>
                        </tr>
                    </table>
            
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"flex-end", margin:"10px"}}><button>Lưu</button></div>
            </form>
        </div>
    )
}
export default Self