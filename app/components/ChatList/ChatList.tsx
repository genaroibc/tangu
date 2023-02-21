type Props = {
  chatList: {
    id: string;
    title: string;
    chats: { last_message_date: string }[];
  }[];
};

export function ChatList({ chatList }: Props) {
  return (
    <ol className="chat_list">
      {chatList.map(chat => (
        <li className="chat_list__item" key={chat.id}>
          <div className="chat_list__item__contact_info">
            <img
              className="chat_list__item__contact_avatar"
              src="/svg/circle-arrow.svg"
              alt={chat.title}
            />
            <span className="chat_list__item__contact_name">{chat.title}</span>
          </div>

          <time className="chat_list__item__last_msg_date">
            {chat.chats.at(-1)?.last_message_date}
          </time>
        </li>
      ))}
    </ol>
  );
}
