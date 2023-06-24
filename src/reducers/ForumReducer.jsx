export const forumreducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FORUM_DATA":
      return { ...state, allForumData: action.payload };

    case "INCREMENT_VOTE":
      const user = state.allForumData.find((user) => user.postId === postId);
      if (user) {
        user.upvotes = user.upvotes + 1;
      }
      return { ...state, allForumData: action.payload };

    case "DECREMENT_VOTE":
      const userD = state.allForumData.find((user) => user.postId === postId);
      if (user) {
        user.upvotes = user.upvotes - 1;
      }
      return { ...state, allForumData: action.payload };
    default:
      return { state };
  }
};
