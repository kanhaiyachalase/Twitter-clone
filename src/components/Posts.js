import React from "react";
import { GoVerified } from "react-icons/go";
import { FaComment, FaHeart } from "react-icons/fa";
import { FiRepeat, FiDownload } from "react-icons/fi";

const Posts = () => {
  return (
    <div className="postss">
      <div className="posts__first">
        <div className="posts__first__img">
          <img src="/images/profile.jpg" alt="profile img" />
        </div>
        <div className="posts__first__name">
          <strong>Kanhaiya chalase</strong>
          <GoVerified className="verify" />
        </div>
        <div className="posts__first__username">
          @kanha_400<span>6min</span>
        </div>
      </div>
      <div className="postss__details">
        <div className="postss__details__msg">
          Facebook's Mark Zuckerberg skewered with damaging internal emails
          during antitrust hearing. The House Judiciary Committee's antitrust
          panel appeared to draw on a rich trove of Facebook company emails,
          releasing numerous screenshots of correspondence from Zuckerberg and
          other Facebook executives
        </div>
        <div className="postss__details__img">
          <img src="/images/post.jpg" alt="post" />
        </div>
        <div className="reactions">
          <span>
            <FaComment className="re" />
            45
          </span>
          <span>
            <FiRepeat className="re" />4
          </span>
          <span>
            <FaHeart className="re" />
            541
          </span>
          <span>
            <FiDownload className="re" />
            234
          </span>
        </div>
      </div>
    </div>
  );
};

export default Posts;
