// mapReducer, called when store created or updated

// BELOW OLD JUST REMINDER

const optionsReducerDefaultState = {
  sortBy: "alpha",
  sortOrder: "ascending"
};

export default (state = optionsReducerDefaultState, action) => {
  switch (action.type) {
    case "SORT_BY_ALPHA":
      return {
        ...state,
        sortBy: "alpha"
      };
    case "SORT_BY_LENGTH":
      return {
        ...state,
        sortBy: "length"
      };
    case "SORT_ASCENDING":
      return {
        ...state,
        sortOrder: "ascending"
      };
    case "SORT_DESCENDING":
      return {
        ...state,
        sortOrder: "descending"
      };
    default:
      return state;
  }
};
