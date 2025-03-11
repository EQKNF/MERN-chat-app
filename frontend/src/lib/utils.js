export function formatMessageTime(date) {
  const messageDate = new Date(date);
  const currentYear = new Date().getFullYear();

  const options = {
    month: "short", // "Jan", "Feb", etc.
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    ...(messageDate.getFullYear() !== currentYear && { year: "numeric" }), // Include year only if different
  };

  return messageDate.toLocaleString("en-US", options);
}
