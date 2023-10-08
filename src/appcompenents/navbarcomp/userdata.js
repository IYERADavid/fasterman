import { db } from "../../firebase/firebase_config"
import { doc, getDoc } from "firebase/firestore";

const  Userdata = async(user_id)=> {
    const docRef = doc(db, "Users", user_id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
    return docSnap.data();
    } else {
    return null;
    }
}

export default Userdata;
