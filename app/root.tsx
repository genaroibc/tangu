import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRevalidator,
} from "@remix-run/react";
import { createBrowserClient } from "@supabase/auth-helpers-remix";
import { useEffect, useState } from "react";
import globalStyles from "~/styles/global.css";
import { createSupabaseServerClient } from "./lib/supabase.server";

export const links: LinksFunction = () => [
  { href: globalStyles, rel: "stylesheet" },
];

export const meta: MetaFunction = () => ({
  charSet: "utf-8",
  title: "Tangu Chat",
  viewport: "width=device-width,initial-scale=1",
});

export const loader = async ({ request }: LoaderArgs) => {
  const env = {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  };

  Object.entries(env).forEach(([envVarName, envVarValue]) => {
    if (envVarValue === undefined) {
      throw new Error(`'${envVarName}' env variable is not defined`);
    }
  });

  const response = new Response();
  const supabase = createSupabaseServerClient(request, response);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return json(
    {
      env,
      session,
    },
    { headers: response.headers }
  );
};

export default function App() {
  const { env, session: serverSession } = useLoaderData<typeof loader>();
  const { revalidate } = useRevalidator();

  const [supabaseClient] = useState(() =>
    createBrowserClient(env.SUPABASE_URL!, env.SUPABASE_ANON_KEY!)
  );

  useEffect(() => {
    const { data } = supabaseClient.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== serverSession?.access_token) {
        revalidate();
      }
    });

    return () => {
      data.subscription.unsubscribe();
    };
  });

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
