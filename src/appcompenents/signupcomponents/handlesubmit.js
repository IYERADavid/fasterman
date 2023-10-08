import { db } from "../../firebase/firebase_config"
import { collection, addDoc } from "firebase/firestore"

const Add_user = async (user_data) => {
    const docRef = await addDoc(collection(db,"Users"),
    user_data);
    console.log("Document written with ID: ", docRef.id);
    return docRef;
}

export default Add_user;