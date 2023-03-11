import type { Database } from "~/types/db";
import { ChatInputBox } from "~/components/ChatInputBox/ChatInputBox";
import { ChatMessage } from "~/components/ChatMessage/ChatMessage";
import { ChatTabHeader } from "~/components/ChatTabHeader/ChatTabHeader";
import { useSupabaseClient } from "~/hooks/useSupabaseClient";
import { useEffect, useState } from "react";

type DBMessage = Database["public"]["Tables"]["messages"]["Row"];

type Props = {
  initialMessages: DBMessage[];
  userID: string;
};

export function ChatTab({ initialMessages, userID }: Props) {
  const [messages, setMessages] = useState<DBMessage[]>(initialMessages);

  const supabaseClient = useSupabaseClient();

  useEffect(() => {
    supabaseClient
      .channel("messages")
      .on(
        "postgres_changes",
        {
          schema: "public",
          event: "INSERT",
          table: "messages",
        },
        payload => {
          const message = payload.new as DBMessage;
          setMessages(currentMessages => [...currentMessages, message]);
        }
      )
      .subscribe();
  }, [supabaseClient]);

  return (
    <article className="chat_tab">
      <ChatTabHeader />

      {messages.map(msg => (
        <ChatMessage is_own={userID === msg.user_id} key={msg.id} {...msg} />
      ))}

      <ChatInputBox />
    </article>
  );
}
