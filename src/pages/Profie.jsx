import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function Profile() {
  const { id } = useParams(); // grab docId from URL
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUser(docSnap.data());
        } else {
          setUser({ name: "Not found", phone: "-", city: "-" });
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchUser();
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Owner Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>City:</strong> {user.city}</p>
    </div>
  );
}
