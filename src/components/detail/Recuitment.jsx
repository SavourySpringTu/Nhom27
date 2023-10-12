import { Link } from "react-router-dom"

const Recuitment = () => {
    return(
        <div style={{position:"absolute", display: "flex", justifyContent: "flex-start", left:"25%"}}>
            <div>
                <div style={{display: "flex", justifyContent: "flex-start"}}>
                    <div>Ăn xin</div>
                    <div><button>Nộp cv</button></div>
                </div>
                <div>Giới thiệu</div>
                <div className="gridContainerRecuit">
                    <div>Lương
                        <div></div>
                    </div>
                    <div>Cấp bậc
                        <div></div>
                    </div>
                    <div>Loại công việc
                        <div></div>
                    </div>
                    <div>Kinh nghiệm
                        <div></div>
                    </div>
                    <div>Học vấn
                        <div></div>
                    </div>
                    <div>Số lượng
                        <div></div>
                    </div>
                </div>
                <div>Hạn nộp hồ sơ</div>
                <div></div>
                <div>Khu vực</div>
                <div style={{display: "flex", justifyContent: "flex-start"}}>
                    <div>Atlantic</div>
                    <div>Địa phủ</div>
                </div>
            </div>
            <div>
                <div style={{display: "flex", justifyContent: "flex-start"}}>
                    <div>ảnh</div>
                    <div>tên</div>
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