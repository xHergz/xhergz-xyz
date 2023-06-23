import React, { useState } from "react";
import { NextPage } from "next";

import Card from "../../src/components/common/Card";
import PageWrapper from "../../src/components/PageWrapper/PageWrapper";
import Input from "../../src/components/common/Input";
import Button from "../../src/components/common/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PATHS } from "../../src/constants/routes.constants";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const SignIn: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const signIn = async () => {
    const res = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (res.error) {
      setError("Login failed");
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      router.push(PATHS.HOME);
    }
  };

  return (
    <PageWrapper>
      <Card className="mx-auto mt-16">
        <form className="mb-4">
          <label>Email:</label>
          <Input value={email} onChange={setEmail} type="email" />
          <label>Password:</label>
          <Input value={password} onChange={setPassword} type="password" />
          <span className="text-sm text-red-500">{error}</span>
        </form>
        <Button onClick={signIn}>Sign In</Button>
        <span className="text-md">
          {"Don't have an account? "}
          <Link className="underline" href={PATHS.SIGN_UP}>
            Sign Up
          </Link>
        </span>
      </Card>
    </PageWrapper>
  );
};

export default SignIn;
