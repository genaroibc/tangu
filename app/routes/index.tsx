import type { LinksFunction } from "@remix-run/node";
import globalStyles from "~/styles/global.css";

export const links: LinksFunction = () => [
  { href: globalStyles, rel: "stylesheet" }
];

export default function Index() {
  return (
    <main style={{ fontFamily: "Syne, Raleway", lineHeight: "1.4" }}>
      <h1>Tangu Chat</h1>
    </main>
  );
}
