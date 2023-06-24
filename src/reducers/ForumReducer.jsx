export const forumreducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FORUM_DATA":
      return { ...state, allForumData: action.payload };
    default:
      return { state };
  }
};
