import type { MetaFunction } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import globalStyles from "~/styles/global.css";

export const links: LinksFunction = () => [
  { href: globalStyles, rel: "stylesheet" }
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Tangu Chat",
  viewport: "width=device-width,initial-scale=1"
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
