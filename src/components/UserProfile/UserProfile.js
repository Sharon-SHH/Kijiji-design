import React, { useState } from "react";
import { FaCheckCircle, FaStar, FaHeart } from "react-icons/fa";
import defaultProfilePic1 from "../../assets/images/michelle_lo_linkedin.JPG";
import defaultProfilePic4 from "../../assets/images/img_9343_facetune_22-05-2022-21-12-35_720.png";
import defaultProfilePic3 from "../../assets/images/img_8548_720.jpg";
import defaultProfilePic2 from "../../assets/images/sharon_720.jpg";
import "./UserProfile.scss";

export default function UserProfile() {
  const [usersInfo, setUsersInfo] = useState([
    {
      userId: "1",
      username: "Michelle L",
      profilePic: defaultProfilePic1,
      memberSince: "2022-01-01",
      avgReplyTime: "within 24 hours",
      replyRate: "95%",
      bio: "Modern home decor enthusiast seeking minimalist and stylish items.",
      verified: true,
      superSeller: false,
      communityFavorite: true,
    },
    {
      userId: "2",
      username: "Sharon S",
      profilePic: defaultProfilePic2,
      memberSince: "2008-03-16",
      avgReplyTime: "within 1 hour",
      replyRate: "93%",
      bio: "Your source for the latest tech gadgets and smart devices.",
      verified: true,
      superSeller: true,
      communityFavorite: true,
    },
    {
      userId: "3",
      username: "Pamela P",
      profilePic: defaultProfilePic3,
      memberSince: "2022-01-01",
      avgReplyTime: "within 8 hours",
      replyRate: "92%",
      bio: "Into health and wellness, looking for natural and organic products.",
      verified: true,
      superSeller: false,
      communityFavorite: true,
    },
    {
      userId: "4",
      username: "Elza Y",
      profilePic: defaultProfilePic4,
      memberSince: "2023-11-12",
      avgReplyTime: "within 6 hours",
      replyRate: "99%",
      bio: "Passionate about sustainable living and eco-friendly products, I bring to the marketplace a curated selection of handmade goods that are not only beautiful but also kind to the planet. Every item tells a story of craftsmanship and care.",
      verified: true,
      superSeller: true,
      communityFavorite: true,
    },
  ]);

  const getUserById = (userId) =>
    usersInfo.find((user) => user.userId === userId);

  const renderVerificationBadge = (user) => (
    <>
      {user.verified && (
        <FaCheckCircle title="Verified User" className="icon" />
      )}
      {user.superSeller && <FaStar title="Super Seller" className="icon" />}
      {user.communityFavorite && (
        <FaHeart title="Community Favorite" className="icon" />
      )}
    </>
  );

  const userIdToShow = "3";
  const userToShow = getUserById(userIdToShow);

  return (
    <div className="profile">
      {usersInfo.map((user) => (
        <div className="profile__card">
          <div className="profile__picturebox">
            {" "}
            <img
              src={user.profilePic}
              alt={`${user.username}'s profile`}
              className="profile__picture"
            />
          </div>

          <div className="profile__info">
            <h2 className="profile__title">
              {user.username}
              {renderVerificationBadge(user)}
            </h2>
            <p className="profile__description">
              <strong>About:</strong> {user.bio}
            </p>
            <p className="profile__description">
              <strong>Member Since:</strong>{" "}
              {new Date(user.memberSince).toLocaleDateString()}
            </p>
            <p className="profile__description">
              <strong>Average Reply Time:</strong> {user.avgReplyTime}
            </p>
            <p className="profile__description">
              <strong>Reply Rate:</strong> {user.replyRate}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
