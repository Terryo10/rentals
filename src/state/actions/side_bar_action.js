export const openUp = () => {
  console.log("opening");
  return (dispatch) => {
    dispatch({ type: "CONTROL_SIDE_BAR" });
  };
};
