import { Form } from "@remix-run/react";

export function ChatInputBox() {
  return (
    <div className="chat_input_box">
      <Form method="post" className="chat_input_box__form">
        <input
          name="message"
          id="message"
          required
          placeholder="your message"
          className="chat_input_box__form__input"
        />

        <button className="chat_input_box__form__submit_button">
          <img
            className="chat_input_box__form__submit_button__icon"
            src="/svg/circle-arrow.svg"
            alt="send message"
          />
        </button>
      </Form>
    </div>
  );
}
