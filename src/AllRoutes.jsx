import {Routes,Route} from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import PrivateRoute from "./component/PrivateRoute";
// import Trial from "./component/Trial";

export default function AllRoutes(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </div>
    )
}