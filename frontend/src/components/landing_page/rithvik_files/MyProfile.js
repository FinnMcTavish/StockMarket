import React from "react";
import NavBar from "./NavBar";
import "./MyProfile.css";
import ProfileCard from "./ProfileCard";
function MyProfile() {
  return (
    <section className="prof">
      <NavBar />
      <ProfileCard />
    </section>
  );
}

export default MyProfile;
