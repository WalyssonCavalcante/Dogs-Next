import LoginCreate from "@/components/login/login-create-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crie sua Conta",
  description: "Crie sua conta no site Dogs.",
};

export default async function CreatePage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <LoginCreate />
    </div>
  );
}
