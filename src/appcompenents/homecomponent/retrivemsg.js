import { db } from "../../firebase/firebase_config";
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";

const Retrievemsg = (user_id) => {
  return new Promise((resolve, reject) => {
    const messages = [];
    const q = query(
      collection(db, "Messages"),
      where("sender_id", "==", user_id),
      orderBy("sended_time", "desc")
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      messages.length = 0; // Clear the messages array
      querySnapshot.forEach((doc) => {
        const msg_data = { id: doc.id, ...doc.data() };
        messages.push(msg_data);
      });
      resolve(messages);
    }, (error) => {
      reject(error);
    });
  });
};

export default Retrievemsg;
