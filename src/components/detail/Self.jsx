const Self = () => {
    return(
        <div style={{position:"relative", display: "grid", justifyContent: "normal"}}>
            <form action="" style={{background:"gray",position:"relative",margin:"5%", fontSize:"30px"}}>
            <div style={{display:"flex", justifyContent:"flex-start"}}>
                <div style={{padding:"30px",width:"180px"}}>ảnh</div>
                <div>
                    <table>
                        <tr>
                            <th>Tên</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td><div>Địa chỉ</div></td>
                            <td><div><input type="text" /></div></td>
                        </tr>
                        <tr>
                            <td><div>Liên lạc</div></td>
                            <td><div><input type="number" /></div></td>
                        </tr>
                        <tr>
                            <td><div>Học vấn</div></td>
                            <td><div><input type="text" /></div></td>
                        </tr>
                        <tr>
                            <td><div>Tuổi</div></td>
                            <td><div><input type="number" /></div></td>
                        </tr>
                        <tr>
                            <td><div>Giới thiệu</div></td>
                            <td><div><input type="text" /></div></td>
                        </tr>
                        <tr>
                            <td><div>Công việc</div></td>
                            <td><div><input type="text" /></div></td>
                        </tr>
                        <tr>
                            <td><div>Tiểu sử</div></td>
                            <td><div><input type="text" /></div></td>
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