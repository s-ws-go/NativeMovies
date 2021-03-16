export const Trimtext = (text, limit) =>
  text.length > limit ? `${text.slice(0, limit)}...` : text;

export const formatdate = (date) => {
  const theDate = new Date(date);
  return theDate.toLocaleDateString("ko", {
    day: "long",
    month: "long",
    year: "long",
  });
};
