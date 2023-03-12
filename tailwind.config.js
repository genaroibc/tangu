/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "tertiary-color": "var(--tertiary-color)",
        "complement-color": "var(--complement-color)",

        "chat-bg-color": "var(--chat-bg-color)",
        "chat-message-own-bg-color": "var(--chat-message-own-bg-color)",
        "chat-message-foreign-bg-color": "var(--chat-message-foreign-bg-color)",
        "chat-list-item-bg-color": "var(--chat-list-item-bg-color)",
      },
    },
  },
  plugins: [],
};
