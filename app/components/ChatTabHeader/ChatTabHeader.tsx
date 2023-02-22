export function ChatTabHeader() {
  return (
    <header className="chat_tab_header">
      <div className="chat_tab_header__contact">
        <img
          className="chat_tab_header__contact__img"
          src="/svg/circle-arrow.svg"
          alt="{contact name}"
        />
        <span className="chat_tab_header__contact__name">Contact name</span>
      </div>
    </header>
  );
}
