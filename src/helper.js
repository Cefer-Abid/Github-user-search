export const getUserDate = function (userJoinedDate) {
  // prettier-ignore
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const date = new Date(userJoinedDate);
  // prettier-ignore
  return `Joined ${date.getDate()} ${month[date.getMonth()].slice(0,3)} ${date.getFullYear()}`;
};
