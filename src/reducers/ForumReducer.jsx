export const forumreducer = (state, action) => {
  console.log("in reducer");
  switch (action.type) {
    case "UPDATE_FORUM_DATA":
      return { ...state, allForumData: action.payload };

    case "INCREMENT_VOTE":
      const data = state.allForumData.map((user) => {
        const modifyUser = { ...user };
        if (modifyUser.postId === action.payload) {
          modifyUser.upvotes = modifyUser.upvotes + 1;
          return modifyUser;
        }
        return user;
      });
      return { ...state, allForumData: data };

    case "DECREMENT_VOTE":
      const userData = state.allForumData.map((user) => {
        const modifyUser = { ...user };
        if (modifyUser.postId === action.payload) {
          modifyUser.downvotes = modifyUser.downvotes + 1;
          return modifyUser;
        }
        return user;
      });

      return { ...state, allForumData: userData };
    default:
      return { state };
  }
};
