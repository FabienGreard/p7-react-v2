import React from "react";
import { ProfileContent } from "../../components/";

const Profile = (props) => {
  return (
    <>
      <ProfileContent currentUser={props.currentUser}></ProfileContent>
    </>
  );
};

export default Profile;
