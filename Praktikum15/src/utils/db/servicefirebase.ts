import { 
  getFirestore, 
  collection, 
  getDocs,
  Firestore,
  getDoc, 
  doc,
  query,
  addDoc,
  where, 
} from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
  return data;
}

export async function retrieveDataByID(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function signUp(
  UserData: {
    email: string;
    fullName: string;
    password: string;
  },
  callback: Function,
){
  try {
    const q = query(
      collection(db, "users"),
      where("email", "==", UserData.email),
    );
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    
    if (data.length > 0) {
      // User already exists
      callback({
        status: "error",
        message: "User already exists",
      });
    } else {
      // User doesn't exist, add to database
      await addDoc(collection(db, "users"), {
        email: UserData.email,
        fullName: UserData.fullName,
        password: UserData.password,
        createdAt: new Date(),
      });
      callback({
        status: "success",
        message: "User registered successfully",
      });
    }
  } catch (error) {
    callback({
      status: "error",
      message: "An error occurred during registration",
    });
  }
}