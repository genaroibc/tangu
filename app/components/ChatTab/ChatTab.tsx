import type { Database } from "~/types/db";
import { ChatInputBox } from "~/components/ChatInputBox/ChatInputBox";
import { ChatMessage } from "~/components/ChatMessage/ChatMessage";

type Props = {
  messages: Array<Database["public"]["Tables"]["messages"]["Row"]>;
};

export function ChatTab({ messages }: Props) {
  return (
    <article className="chat_tab">
      {messages.map(msg => (
        <ChatMessage key={msg.id} {...msg} />
      ))}
      <ChatInputBox />
    </article>
  );
}
