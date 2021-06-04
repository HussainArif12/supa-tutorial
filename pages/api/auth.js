import supabaseClient from "../../utils/supabaseClient";

export default function handler(req, res) {
  console.log(req.body);
  supabaseClient.auth.api.setAuthCookie(req, res);
}
