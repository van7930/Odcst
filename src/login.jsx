import "./App.css";
import logoUTH from "./assets/logoUTH.png";
function Login({setUser}){
    let email="";
    let password="";
    let showPasswor=false;
    let remember=false;
    function handleLogin(event){
        console.log("login attemp:", {email,password,remember});
        };
    return(     
        <div class="lg">
            <img src={logoUTH} class="logoUTH"/>
            <h2>
                LabOdc
            </h2>
            <input
            type="text"
            placeholder="email"/>
            <input
            type="password"
            placeholder="password"/>
            <button class="submit">
                Login
            </button>
        </div>
    );
}
export default Login;


