// mapReducer, called when store created or updated

const mapReducerDefaultState = {
  zoom: 5
};

export default (state = mapReducerDefaultState, action) => {
  switch (action.type) {
    case "zoomValue":
      return {
        ...state,
        zoom: action.zoom
      };
    default:
      return state;
  }
};
