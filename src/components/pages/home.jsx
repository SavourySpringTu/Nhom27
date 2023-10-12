import { Link, useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    const goto = (e) => {
        navigate('/RecuitDetail');
    }
    return(
        <div style={{position:"absolute", left:"10%",top:"15%"}}>
            <div style={{display:"flex",paddingTop:"10px",paddingBottom:"5%"}}>
                <input type="text" className="search"/>
                <button className="text" style={{borderRadius:"10px",border:"none",fontWeight:"bold"}}>Tìm kiếm</button>
            </div>
            <div className="gridContainer">
                <div onClick={goto}>
                    <div style={{display: "flex", justifyContent: "flex-start"}}>
                        <div className="miniicon">
                            <img className="icon-fit"src={process.env.PUBLIC_URL+"/company.jpeg"} alt="" />
                        </div>
                        <div className="leftinvite">
                            <div className="titleinvite">Castle</div>
                            <div style={{float:"left"}}>DMT</div>
                        </div>
                        
                    </div>
                    <div className="itemline"></div>
                    <div className="salaryplace">
                        <div className="graywarp">15-20tr</div>
                        <div className="graywarp">TP.HCM</div>
                    </div>
                </div>
                <div>item 2</div>
                <div>item 3</div>
                <div>item 4</div>
                <div>item 5</div>
                <div>item 6</div>
                <div>item 7</div>
                <div>item 8</div>
                <div>item 9</div>
            </div>
        </div>
    )
}
export default Home