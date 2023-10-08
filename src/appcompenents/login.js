import SignInSide from "./logincomponents/signinside";


function Login({setCurrentuser}){

    return(
        <>
            <SignInSide  setCurrentuser={setCurrentuser}/>
        </>
    )
}

export default Login;