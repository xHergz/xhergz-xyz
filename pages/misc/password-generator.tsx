import React, { useState } from "react";
import { NextPage } from "next";

import PageWrapper from "../../src/components/PageWrapper/PageWrapper";
import { isEmpty, isNil } from "lodash";
import { sha256 } from "../../src/utils/password.utils";

const PasswordGenerator: NextPage = () => {
  const [password, setPassword] = useState<string>("");
  const [service, setService] = useState<string>("");
  const [generated, setGenerated] = useState<string>();
  const [copied, setCopied] = useState<boolean>(false);

  const generatePassword = async (): Promise<void> => {
    const hash = await sha256(`${password}+${service.toLowerCase()}`);
    setGenerated(hash.slice(0, 16));
  };

  const copyPassword = (): void => {
    if (isNil(generated)) return;
    navigator.clipboard.writeText(generated);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <PageWrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label>Password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          type="password"
        />
        <label>Service</label>
        <input
          value={service}
          onChange={(event) => setService(event.currentTarget.value)}
        />

        <button
          color="blue"
          onClick={generatePassword}
          disabled={isEmpty(password) || isEmpty(service)}
        >
          Generate
        </button>
        {!isNil(generated) ? (
          <>
            <label>Generated</label>
            <input value={generated} disabled type="password" />
            <button
              style={{
                backgroundColor: copied ? "teal" : "blue",
                color: "white",
              }}
              onClick={copyPassword}
            >
              {copied ? "Copied password" : "Copy password"}
            </button>
          </>
        ) : null}
      </div>
    </PageWrapper>
  );
};

export default PasswordGenerator;
