import { db } from "../../firebase/firebase_config"
import { doc, setDoc, serverTimestamp } from "firebase/firestore"

const update_status = async (id, status_value, reply_value) => {
    const status = status_value;
    const sended_time = serverTimestamp();
    const updates = { status, sended_time }
    if (reply_value !== ""){
        updates.reply_msg = reply_value
    }
    const docRef = doc(db,"Messages",id)
    const upd_doc = await setDoc(docRef, updates, {merge:true});
    return upd_doc;
}

export default update_status;