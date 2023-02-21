import { ChatList } from "../ChatList/ChatList";

type Props = {
  chatList: {
    id: string;
    title: string;
    chats: { last_message_date: string }[];
  }[];
};

export function Aside({ chatList }: Props) {
  return (
    <aside className="main_aside">
      <nav>
        <ChatList chatList={chatList} />
      </nav>
    </aside>
  );
}
