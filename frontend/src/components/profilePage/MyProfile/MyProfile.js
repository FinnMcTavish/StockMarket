import React from "react";
import NavBar from "../NavBar/NavBar";
import "./MyProfile.css";
import ProfileCard from "../ProfileCard/ProfileCard";
function MyProfile() {
  // alert(sessionStorage.getItem("username"));
  return (
    <section className="prof">
      <NavBar />
      <ProfileCard />
    </section>
  );
}

export default MyProfile;
