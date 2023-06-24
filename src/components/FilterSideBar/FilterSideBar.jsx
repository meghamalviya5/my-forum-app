import React, { useContext, useEffect } from "react";
import { ForumContext } from "../../contexts/ForumContext";

const FilterSideBar = () => {
  console.log("in filter");
  useEffect(() => sortByLatest(), []);
  const { sortByMostVoted, sortByLatest } = useContext(ForumContext);
  return (
    <div>
      <div>Sort By</div>
      <select
        onChange={(e) =>
          e.target.value === "Most Voted" ? sortByMostVoted() : sortByLatest()
        }
      >
        {/* <option value="Select">Select</option> */}
        <option value="Latest Posts">Latest Posts</option>
        <option value="Most Voted">Most Voted</option>
      </select>
    </div>
  );
};

export default FilterSideBar;
