import { Routes, Route } from 'react-router-dom';
import "../../css/style.css";
import Header from "./header";
import CandidateDetail from "../detail/CandidateDetail";
import CompanyDetail from "../detail/CompanyDetail";
import Home from "../pages/home";
import Self from "../detail/Self";
import Recuitment from "../detail/Recuitment";
const MainPage = () => {
    return (
        <div style={{height:"100%"}}>
            <img className="bg" src={process.env.PUBLIC_URL+"/images/background.jpg"} alt=""></img>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Candidate' element={<CandidateDetail />} />
                <Route path='/Company' element={<CompanyDetail />} />
                <Route path='/User' element={<Self />} />
                <Route path='/RecuitDetail' element={<Recuitment />} />
            </Routes>
        </div>
    );
}
export default MainPage