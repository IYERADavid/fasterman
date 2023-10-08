import { db } from "../../firebase/firebase_config"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

const Add_msg = async (msg_data, user_id) => {
    const sender_id = user_id;
    const status = "PENDING";
    const sended_time = serverTimestamp();
    const all_data = { ...msg_data, sender_id, status, sended_time }
    const docRef = await addDoc(collection(db,"Messages"),
    all_data);
    console.log("Document written with ID: ", docRef.id);
    return docRef;
}

export default Add_msg;
