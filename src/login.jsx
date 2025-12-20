import "./App.css";
import logoUTH from "./assets/logoUTH.png";
function Login({setUser}){
    let email="";
    let password="";
    function handleLogin(event){
        event.preventDefault();
        if(!email||!password){
            console.log("please enter full information");
        }
        if(email==="odcgroup@gmail.com" && password==="12345678"){
            console.log("login successful");
        } else {
            console.log("invalid email or password");
        }
    }
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


