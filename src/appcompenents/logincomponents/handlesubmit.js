import { db } from "../../firebase/firebase_config"
import { collection, query, where, getDocs } from "firebase/firestore";

const Login_user = async(email,password) =>{
    let user_id;
    const q = query(collection(db, "Users"), 
    where("email", "==", email), where("password", "==", password));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        user_id = doc.id;
      });
    console.log("heyy dixo");
    return user_id;
}

export default Login_user;