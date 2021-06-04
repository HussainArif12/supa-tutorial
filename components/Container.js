import { Auth } from "@supabase/ui";
import Link from "next/link";
import { Button } from "@supabase/ui";

export default function Container(props) {
  const { user } = Auth.useUser();

  if (user)
    return (
      <>
        <h1>Hello {user.user_metadata.full_name}!</h1>
        <Link href="/protected">Go to protected page</Link>
        <Button onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </>
    );
  return props.children;
}
