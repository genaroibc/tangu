import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import globalStyles from "~/styles/global.css";

export const links: LinksFunction = () => [
  { href: globalStyles, rel: "stylesheet" },
];

export const meta: MetaFunction = () => ({
  charSet: "utf-8",
  title: "Tangu Chat",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = () => {
  const env = {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  };

  return {
    env,
  };
};

export default function App() {
  const { env } = useLoaderData<typeof loader>();
  const [supabaseClient] = useState(() =>
    createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY)
  );

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet context={{ supabaseClient }} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
