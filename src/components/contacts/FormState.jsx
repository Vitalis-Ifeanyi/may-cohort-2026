
import { useState } from "react";

function FormState() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showData, setShowData] = useState(false);

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setProfileData({
      name: name,
      email: email,
      phone: phone,
      message: message,
    });

    alert("Form submitted Successfully!");

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setShowData(true);
  };
  return (
    <div>
      <h1>Contact Form</h1>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="name"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Name:
          </label>
          <input
            type="text"
            value={name}
            name="name"
            style={{ width: "100%", padding: "5px" }}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Email:
          </label>
          <input
            type="email"
            value={email}
            name="email"
            style={{ width: "100%", padding: "5px" }}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="phone"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Phone:
          </label>
          <input
            type="tel"
            value={phone}
            name="phone"
            style={{ width: "100%", padding: "5px" }}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="message"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Message:
          </label>
          <textarea
            value={message}
            name="message"
            style={{ width: "100%", padding: "5px" }}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "white",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
      {showData && (
      <div
        style={{
          maxWidth: "400px",
          margin: "20px auto",
          padding: "10px",
          border: "1px solid #ccc",
        }}
      >
        <h2 style={{ margin: "0 0 10px 0" }}>Form Data:</h2>
        <p>Name: {profileData.name}</p>
        <p>Email: {profileData.email}</p>
        <p>Phone: {profileData.phone}</p>
        <p>Message: {profileData.message}</p>
      </div>)}
    </div>
  );
}

export default FormState;
