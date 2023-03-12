import { Form } from "@remix-run/react";

export function ChatInputBox() {
  return (
    <div className="sticky bottom-0">
      <Form
        method="post"
        className="w-full flex justify-center items-stretch gap-2 p-4 bg-transparent"
      >
        <input
          name="message"
          id="message"
          required
          placeholder="your message"
          className="p-4 rounded-3xl text-white bg-secondary-color shadow-2xl"
        />

        <button className="rounded h-full flex justify-center items-center bg-transparent">
          <img
            className="h-10 w-10 max-w-full"
            src="/svg/circle-arrow.svg"
            alt="send message"
          />
        </button>
      </Form>
    </div>
  );
}
