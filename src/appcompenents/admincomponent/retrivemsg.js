import { db } from "../../firebase/firebase_config";
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";

const Retrievemsg = () => {
  return new Promise((resolve, reject) => {
    const messages = [];
    const q = query(
      collection(db, "Messages"),
      orderBy("sended_time", "desc"),
      limit(30)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      messages.length = 0;
      querySnapshot.forEach((doc) => {
        let msg_data = { id: doc.id, ...doc.data() };
        messages.push(msg_data);
      });

      resolve(messages);
    }, (error) => {
      reject(error);
    });
  });
};

export default Retrievemsg;
