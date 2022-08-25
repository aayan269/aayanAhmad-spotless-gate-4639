import { useContext } from "react";
import {Navigate} from "react-router-dom";
import {  AuthContext } from "../context/AppContext";
function PrivateRoute({children}){
    const auth=useContext(AuthContext)
    console.log(auth)
    if(!auth.isAuth){
        return <Navigate to="/login" />
    }
    return children;
}
export default PrivateRoute;