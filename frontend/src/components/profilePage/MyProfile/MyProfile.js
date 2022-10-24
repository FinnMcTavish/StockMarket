import React from "react";

import ProfileCard from "../ProfileCard/ProfileCard";
function MyProfile() {
  // alert(sessionStorage.getItem("username"));
  return (
    <section className="prof" style={{ backgroundColor: "#0a507c" }}>
      {/* <NavBar /> */}
      <ProfileCard />
    </section>
  );
}

export default MyProfile;
