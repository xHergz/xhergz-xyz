import React, { useState } from "react";
import { NextPage } from "next";

import PageWrapper from "../../src/components/PageWrapper/PageWrapper";
import { isEmpty, isNil } from "lodash";
import { generateV1Password, sha256 } from "../../src/utils/password.utils";
import Checkbox from "../../src/components/Checkbox/Checkbox";

const PasswordGenerator: NextPage = () => {
  const [password, setPassword] = useState<string>("");
  const [service, setService] = useState<string>("");
  const [salt, setSalt] = useState<string>("");
  const [generated, setGenerated] = useState<string>();
  const [copied, setCopied] = useState<boolean>(false);
  const [legacy, setLegacy] = useState<boolean>(false);

  const generatePassword = async (): Promise<void> => {
    if (legacy) {
      const hash = await sha256(`${password}+${service.toLowerCase()}`);
      setGenerated(hash.slice(0, 16));
    } else {
      const hash = await generateV1Password(password, service, salt);
      setGenerated(hash);
    }
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
        <label className="text-lg">Password</label>
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
        <label>Salt (optional)</label>
        <input
          value={salt}
          onChange={(event) => setSalt(event.currentTarget.value)}
        />
        <div className="flex space-x-4">
          <label>Legacy</label>
          <Checkbox checked={legacy} onChange={setLegacy} />
        </div>
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
