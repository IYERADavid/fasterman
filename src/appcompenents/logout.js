import { Navigate } from "react-router-dom";

function Logout(){
    const logout = ()=>{
        localStorage.removeItem("user_id");
    }

    return(
        <>
            {logout()}
            <Navigate to="/login" replace />
        </>
    )
}

export default Logout;