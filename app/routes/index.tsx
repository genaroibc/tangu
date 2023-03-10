import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Aside } from "~/components/Aside/Aside";
import { ChatTab } from "~/components/ChatTab/ChatTab";
import { Login } from "~/components/Login/Login";
import { createSupabaseServerClient } from "~/lib/supabase.server";

export const loader = async ({ request }: LoaderArgs) => {
  const response = new Response();

  const supabase = createSupabaseServerClient(request, response);

  const { data } = await supabase.from("messages").select();

  return json({ messages: data ?? [] }, { headers: response.headers });
};

export default function Index() {
  const { messages } = useLoaderData<typeof loader>();

  return (
    <>
      <h1>Tangu Chat</h1>

      <nav>
        <Login />
      </nav>

      <main className="main_container">
        <ChatTab messages={messages} />
        <Aside chatList={[]} />
      </main>
    </>
  );
}
