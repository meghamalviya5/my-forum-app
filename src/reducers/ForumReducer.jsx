export const forumreducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FORUM_DATA":
      return { ...state, allForumData: action.payload };

    case "INCREMENT_VOTE":
      const data = state.allForumData.map((user) => {
        if (user.postId === action.payload) {
          user.upvotes = user.upvotes + 1;
        }
        return user;
      });
      return { ...state, allForumData: data };

    case "DECREMENT_VOTE":
      const userData = state.allForumData.map((user) => {
        if (user.postId === action.payload) {
          user.upvotes = user.upvotes - 1;
        }
        return user;
      });

      return { ...state, allForumData: userData };
    default:
      return { state };
  }
};
