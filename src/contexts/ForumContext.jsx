import { createContext, useReducer } from "react";
import { forumData } from "../db/forumData";
import { forumreducer } from "../reducers/ForumReducer";

export const ForumContext = createContext();

const ForumProvider = ({ children }) => {
  const initialState = { allForumData: forumData.posts };

  const [state, dispatch] = useReducer(forumreducer, initialState);
  console.log(state, "/// in context");

  const sortByMostVoted = () => {
    const updatedData = state.allForumData.sort((a, b) => {
      let totalVotesForA = a.upvotes - a.downvotes;
      let totalVotesForB = b.upvotes - b.downvotes;
      return totalVotesForB - totalVotesForA;
    });
    dispatch({ type: "UPDATE_FORUM_DATA", payload: updatedData });
  };

  const sortByLatest = () => {
    const updatedDataRec = state.allForumData.sort((a, b) => {
      return a.createdAt - b.createdAt;
    });
    dispatch({ type: "UPDATE_FORUM_DATA", payload: updatedDataRec });
  };

  const setBookmark = (postId) => {
    const updatedRecords = state.allForumData.map((data) => {
      if (data.postId === postId) {
        data.isBookmarked = !data.isBookmarked;
      }
      return data;
    });
    dispatch({ type: "UPDATE_FORUM_DATA", payload: updatedRecords });
  };

  return (
    <ForumContext.Provider
      value={{ sortByMostVoted, sortByLatest, setBookmark, state }}
    >
      {children}
    </ForumContext.Provider>
  );
};

export default ForumProvider;
