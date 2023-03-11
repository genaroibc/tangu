import type { LoaderArgs } from "@remix-run/node";
import { json, type ActionFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Aside } from "~/components/Aside/Aside";
import { ChatTab } from "~/components/ChatTab/ChatTab";
import { Login } from "~/components/Login/Login";
import { useSupabaseClient } from "~/hooks/useSupabaseClient";
import { createSupabaseServerClient } from "~/lib/supabase.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const { message } = Object.fromEntries(formData);
  if (!message) return;

  const messageContent = String(message).trim();

  if (!messageContent) return;

  const response = new Response();
  const supabaseClient = createSupabaseServerClient(request, response);

  await supabaseClient.from("messages").insert({ content: messageContent });

  return json({});
};

export const loader = async ({ request }: LoaderArgs) => {
  const response = new Response();

  const supabase = createSupabaseServerClient(request, response);

  const { data } = await supabase.from("messages").select();

  return json({ messages: data ?? [] }, { headers: response.headers });
};

export default function Index() {
  const [userID, setUserID] = useState<string | null>(null);

  const supabaseClient = useSupabaseClient();
  useEffect(() => {
    supabaseClient.auth.getSession().then(s => {
      setUserID(s.data.session?.user.id ?? null);
    });
  }, [supabaseClient]);

  const { messages } = useLoaderData<typeof loader>();

  return (
    <>
      <h1>Tangu Chat</h1>

      <nav>
        <Login />
      </nav>

      <main className="main_container">
        {userID && <ChatTab userID={userID} initialMessages={messages} />}
        <Aside chatList={[]} />
      </main>
    </>
  );
}
