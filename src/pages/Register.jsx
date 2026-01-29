import { useState } from "react";
import QRCode from "react-qr-code";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [qrLink, setQrLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone || !city) return;

    try {
      // Save user data to Firestore
      const docRef = await addDoc(collection(db, "users"), {
        name,
        phone,
        city,
      });
const link = `/profile/${docRef.id}`;  
setQrLink(link);


      setQrLink(link);
    } catch (err) {
      console.error("Error saving data:", err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Lost & Found QR – Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br/><br/>
        <input
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        /><br/><br/>
        <input
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        /><br/><br/>
        <button type="submit">Generate QR</button>
      </form>

      {/* Show QR code only after generating */}
      {qrLink && (
        <div style={{ marginTop: 20 }}>
          <p>Scan this QR to see owner details:</p>
          <QRCode value={qrLink} />
          <p style={{ wordBreak: "break-all" }}>{qrLink}</p>
        </div>
      )}
    </div>
  );
}
