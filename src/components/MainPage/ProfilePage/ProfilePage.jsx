import React from "react";
import Options from "../../Others/Options/Options";
import "./ProfilePage.scss";

const ProfilePage = () => {
  return (
    <div key="ProfilePage" className="main">
      <div className="profile__details flex__row">
        <div className="profile__details_picture">
          <img src="" alt="" />
        </div>
        <div className="profile__details_name">
          <h2 className="username">Sahil Rathee</h2>
          <p className="gmail">sahilrathee.55@gmail.com</p>
        </div>
        <div
          className="three_dot_option"
          onClick={(e) => {
            // console.log(e.target.className);
            e.target.className.includes("three_dot_option") &&
              e.target.classList.toggle("active");
          }}
        >
          <Options
            list={[
              {
                option: "Switch",
                href: "/users/choose",
              },
              {
                option: "Logout",
                href: "/users/logout",
              },
            ]}
          />
        </div>
      </div>
      <div className="profile__created_playlists"></div>
      <div className="profile__saved_playlists"></div>
    </div>
  );
};

export default ProfilePage;
