import React, { useState } from "react";
import { NextPage } from "next";

import Card from "../../src/components/common/Card";
import PageWrapper from "../../src/components/PageWrapper/PageWrapper";
import Input from "../../src/components/common/Input";
import Button from "../../src/components/common/Button";
import Link from "next/link";
import { PATHS } from "../../src/constants/routes.constants";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const SignUp: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmedPassword, setConfirmedPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const supabase = createClientComponentClient();

  const signUp = () => {
    if (password !== confirmedPassword) {
      setError("Passwords do not match");
      return;
    } else if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}${PATHS.SIGN_IN}`,
      },
    });
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setError("");
  };

  const handleConfirmedPasswordChange = (value: string) => {
    setConfirmedPassword(value);
    setError("");
  };

  return (
    <PageWrapper>
      <Card className="mx-auto mt-16">
        <form className="mb-4">
          <label>Email:</label>
          <Input value={email} onChange={setEmail} type="email" />
          <label>Password:</label>
          <Input
            value={password}
            onChange={handlePasswordChange}
            type="password"
          />
          <label>Confirm Password:</label>
          <Input
            value={confirmedPassword}
            onChange={handleConfirmedPasswordChange}
            type="password"
          />
          <span className="text-sm text-red-500">{error}</span>
        </form>
        <Button onClick={signUp} disabled={error.length > 0}>
          Sign Up
        </Button>
        <span className="text-md">
          Already have an account?{" "}
          <Link className="underline" href={PATHS.SIGN_IN}>
            Sign In
          </Link>
        </span>
      </Card>
    </PageWrapper>
  );
};

export default SignUp;
