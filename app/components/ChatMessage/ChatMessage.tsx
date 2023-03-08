import type { Database } from "~/types/db";

export function ChatMessage({
  content,
  created_at,
  id,
}: Database["public"]["Tables"]["messages"]["Row"]) {
  const isOwn = Math.random() > 0.5;
  const ownerShipClassName = isOwn
    ? "chat_message_own"
    : "chat_message_foreign";

  return (
    <div className={`chat_message ${ownerShipClassName}`}>
      <p className="chat_message__content">{content}</p>
      <time className="chat_message__date">{created_at}</time>
    </div>
  );
}
