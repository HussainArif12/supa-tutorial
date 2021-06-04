import { Auth, Button } from "@supabase/ui";
import supabaseClient from "../utils/supabaseClient";
import Container from "../components/Container";
import { useEffect } from "react";
import signIn from "../utils/signIn";

export default function Home() {
  useEffect(() => {
    const { data: authListener } = supabaseClient.auth.onAuthStateChange(
      (event, session) => {
        fetch("/api/auth", {
          method: "POST",
          headers: new Headers({ "Content-Type": "application/json" }),
          credentials: "same-origin",
          body: JSON.stringify({ event, session }),
        }).then((res) => res.json());
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  return (
    <div>
      <Auth.UserContextProvider supabaseClient={supabaseClient}>
        <Container supabaseClient={supabaseClient}>
          <Button onClick={() => signIn(supabaseClient)}>Log in</Button>
        </Container>
      </Auth.UserContextProvider>
    </div>
  );
}
