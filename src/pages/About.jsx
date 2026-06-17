import "../style/About.css";
import Header from "../components/home/Header";
import hero from "../assets/hero.png";
import { useState } from "react";

function About() {
  const [user, setUser] = useState("Prosper");
  const [phoneNumber, setPhoneNumber] = useState("08012344678");
  const [age, setAge] = useState(18);
  const [picture, setPicture] = useState(hero);
  const [showProfile, setShowProfile] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: "Prosper",
    phoneNumber: "08012344678",
    age: 18,
  });

  const [userArray, setUserArray] = useState([
    { name: "Prosper", phoneNumber: "08012344678", age: 18 },
    { name: "Ifeanyi", phoneNumber: "08098765432", age: 25 },
    { name: "John", phoneNumber: "08055555555", age: 30 },
  ]);
  const changeName = () => {
    setUser("Ifeanyi");
    setPhoneNumber("08098765432");
    setAge(25);
    setPicture(
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
    );
  };

  const changeProfile = () => {
    setUserProfile({
      ...userProfile,
      name: "John",
      phoneNumber: "08098765432",
    });
  };

  const changeUserArray = () => {
    setUserArray([
      ...userArray,
      { name: "Jane", phoneNumber: "08011111111", age: 22 },
    ]);
  };
  return (
    <>
      <Header title="ABOUT US" image={picture} />
      <p>My name is {user}</p>
      <p>My phone number is {phoneNumber}</p>
      <p>My age is {age}</p>
      <button onClick={changeName}>Change Name</button>


      {showProfile && (
      <div>
        <p>Name:{userProfile.name}</p>
        <p>Phone Number:{userProfile.phoneNumber}</p>
        <p>Age:{userProfile.age}</p>
        <button onClick={changeProfile}>Change Profile</button>
      </div>)}

      <button onClick={() => setShowProfile(!showProfile)}>{showProfile ? "Hide Profile" : "Show Profile"}</button>
    </>
  );
}

export default About;
