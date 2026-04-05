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
import bcrypt from "bcrypt";
import { use } from "react";

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

export async function signIn(
  email: string) {
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    if (data) {
      return data[0];
    } else {
      return null;
    }
  }


export async function signUp(
  UserData: {
    email: string;
    fullName: string;
    password: string;
    role?: string;
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
      const hashedPassword = await bcrypt.hash(UserData.password, 10);
      await addDoc(collection(db, "users"), {
        email: UserData.email,
        fullName: UserData.fullName,
        password: hashedPassword,
        role: "user",
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