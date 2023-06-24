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
      let date1 = new Date(b.createdAt).getTime();
      let date2 = new Date(a.createdAt).getTime();
      console.log(
        "new Date(b.createdAt).getTime()====",
        new Date(b.createdAt).getTime()
      );
      console.log(
        "new Date(a.createdAt).getTime()====",
        new Date(a.createdAt).getTime()
      );
      console.log("date1 - date2==========", date1 - date2);
      return date1 - date2;
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
      value={{ sortByMostVoted, sortByLatest, setBookmark, state, dispatch }}
    >
      {children}
    </ForumContext.Provider>
  );
};

export default ForumProvider;
