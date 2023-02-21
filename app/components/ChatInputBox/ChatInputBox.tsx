export function ChatInputBox() {
  return (
    <div className="chat_input_box">
      <input
        required
        placeholder="your message"
        className="chat_input_box__input"
      />

      <img
        className="chat_input_box__submit_icon"
        src="/svg/circle-arrow.svg"
        alt="send message"
      />
    </div>
  );
}
