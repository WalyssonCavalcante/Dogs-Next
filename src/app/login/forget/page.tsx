import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perdeu a senha | Dogs",
  description: "Recupere sua senha no site Dogs.",
};

export default async function ForgetPage() {
  return (
    <main>
      <h1>Esqueceu a senha</h1>
    </main>
  );
}
