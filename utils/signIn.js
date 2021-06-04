export default async function signIn(supabaseClient) {
  const { error } = await supabaseClient.auth.signIn({ provider: "google" });
  if (error) console.log(error);
}
