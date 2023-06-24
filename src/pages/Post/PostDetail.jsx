import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faShare,
  faBookmark as faBookmarkSolid,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles.css";
import {
  faBookmark as faBookmarkLight,
  faSquarePlus,
  faMinusSquare,
} from "@fortawesome/free-regular-svg-icons";
import { ForumContext } from "../../contexts/ForumContext";
import { Link } from "react-router-dom";

const PostDetail = () => {
  const { postId } = useParams();
  const { state, setBookmark, dispatch } = useContext(ForumContext);
  console.log(state, "/// in home");
  const date = new Date();
  const currentTime = date.toISOString();

  const user = state.allForumData.find((user) => user.postId === postId);

  return (
    <main className="mt-xl">
      <div className="white-bg mr-xxl p-xs mt-s">
        <div className="flex flex-row nowrap p-xs">
          <div>
            <FontAwesomeIcon
              icon={faSquarePlus}
              onClick={() =>
                dispatch({ type: "INCREMENT_VOTE", payload: user.postId })
              }
            />
            {user.upvotes - user.downvotes}
            <FontAwesomeIcon
              icon={faMinusSquare}
              onClick={() =>
                dispatch({ type: "DECREMENT_VOTE", payload: user.postId })
              }
            />
          </div>
          <div
            className="grey-bg br-full width-xl height-xl p-xs mr-xs"
            style={{ aspectRatio: 1 }}
          ></div>
          <div>
            <div className="flex flex-row flex-align-center flex-space-between">
              <div className="flex flex-row">
                <p className="fw-semibold">{user.name}</p>
                <p className="grey-color pl-xs">
                  <span className="pl-xs">•</span>
                  <span className="pl-xs">
                    {Math.floor(
                      (new Date(currentTime).getTime() -
                        new Date(user.createdAt).getTime()) /
                        (1000 * 60 * 60)
                    )}{" "}
                    hrs ago
                  </span>
                </p>
              </div>
            </div>
            <p className="pr-s pt-xs">{user.postDescription}</p>
            <div className="flex flex-row nowrap flex-space-between pb-xs pt-m pr-s flex-align-center">
              <Link to={`/post-details/${user.postId}`}>
                <FontAwesomeIcon
                  icon={faComment}
                  // onClick={() => setBookmark(user.postId)}
                />
              </Link>
              <FontAwesomeIcon icon={faShare} />
              {user.isBookmarked ? (
                <FontAwesomeIcon
                  icon={faBookmarkSolid}
                  onClick={() => setBookmark(user.postId)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBookmarkLight}
                  onClick={() => setBookmark(user.postId)}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {user.comments.map((userComment) => (
        <div>
          <p>{userComment.name}</p>
          <p>{userComment.comment}</p>
        </div>
      ))}
    </main>
  );
};

export default PostDetail;
