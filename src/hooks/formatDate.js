const formatDate = (dateString) => {
  if (!dateString) return "N/A"; // Handle missing dates

  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export default formatDate;
