import React, { useState } from "react";
import { NextPage } from "next";

import PageWrapper from "../../src/components/PageWrapper/PageWrapper";
import { Button, CopyButton, TextInput } from "@mantine/core";
import { isEmpty, isNil } from "lodash";
import { sha256 } from "../../src/utils/password.utils";

const PasswordGenerator: NextPage = () => {
  const [password, setPassword] = useState<string>("");
  const [service, setService] = useState<string>("");
  const [generated, setGenerated] = useState<string>();

  const generatePassword = async (): Promise<void> => {
    const hash = await sha256(`${password}+${service.toLowerCase()}`);
    setGenerated(hash.slice(0, 16));
  };

  return (
    <PageWrapper>
      <div>
        <TextInput
          label="Password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
        />
        <TextInput
          label="Service"
          value={service}
          onChange={(event) => setService(event.currentTarget.value)}
        />
        <Button
          color="blue"
          onClick={generatePassword}
          disabled={isEmpty(password) || isEmpty(service)}
        >
          Generate
        </Button>
        {!isNil(generated) ? (
          <>
            <TextInput label="Generated" value={generated} disabled />
            <CopyButton value={generated}>
              {({ copied, copy }) => (
                <Button color={copied ? "teal" : "blue"} onClick={copy}>
                  {copied ? "Copied password" : "Copy password"}
                </Button>
              )}
            </CopyButton>
          </>
        ) : null}
      </div>
    </PageWrapper>
  );
};

export default PasswordGenerator;
