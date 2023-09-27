/**
 * @jest-environment node
 */

type SymbolData = {
  index: number;
  symbol: string;
};

export async function sha256(message: string) {
  // encode as UTF-8
  const msgBuffer = new TextEncoder().encode(message);

  // hash the message
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);

  // convert ArrayBuffer to Array
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // convert bytes to hex string
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

export const replaceAt = (
  source: string,
  index: number,
  replacement: string
): string => {
  return (
    source.substring(0, index) +
    replacement +
    source.substring(index + replacement.length)
  );
};

export const getSymbol = (index: number): string => {
  switch (index) {
    case 0:
      return ")";
    case 1:
      return "!";
    case 2:
      return "@";
    case 3:
      return "#";
    case 4:
      return "$";
    case 5:
      return "%";
    case 6:
      return "^";
    case 7:
      return "&";
    case 8:
      return "*";
    case 9:
      return "(";
    default:
      return "~";
  }
};

export const stringToSymbol = (str: string): SymbolData => {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }
  const symbolIndex = sum % 10;
  return {
    index: symbolIndex,
    symbol: getSymbol(symbolIndex),
  };
};

export const charToCasing = (
  char: string,
  casing: "upper" | "lower"
): string => {
  const charNum = Number(char);
  let result = "";
  if (!isNaN(charNum)) {
    result = String.fromCharCode(97 + charNum);
  } else {
    result = char;
  }
  return casing === "lower" ? result.toLowerCase() : result.toUpperCase();
};

export const generateLegacyPassword = async (
  password: string,
  service: string
): Promise<string> => {
  const hash = await sha256(`${password}+${service.toLowerCase()}`);
  return hash.slice(0, 16);
};

export const generateV1Password = async (
  password: string,
  service: string
): Promise<string> => {
  // Normalize service name
  const serviceData = service.toLowerCase();

  // Get Legacy password
  const hash = await generateLegacyPassword(password, service);

  // Add symbol to string
  const symbolData = stringToSymbol(serviceData);
  let generated = replaceAt(hash, symbolData.index, symbolData.symbol);

  // Guarantee the 11th char is a number
  generated = replaceAt(generated, 10, `${generated.charCodeAt(10) % 10}`);
  // Guarantee the 12th and 16th chars are uppercase letters
  generated = replaceAt(generated, 11, charToCasing(generated[11], "upper"));
  generated = replaceAt(generated, 15, charToCasing(generated[15], "upper"));
  // Guarantee the 14th char is a lower case letter
  generated = replaceAt(generated, 13, charToCasing(generated[13], "lower"));

  return generated;
};
