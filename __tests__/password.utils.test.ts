import {
  charToCasing,
  generateV1Password,
  stringToSymbol,
} from "../src/utils/password.utils";

describe("[FUNC] stringToSymbol", () => {
  it("should return 4 and $ for a value normalized to 4", () => {
    const result = stringToSymbol("abc"); // Sum: 294
    expect(result.index).toBe(4);
    expect(result.symbol).toBe("$");
  });

  it("should return 0 and ) for a value normalized to 0", () => {
    const result = stringToSymbol("ag"); // Sum: 294
    expect(result.index).toBe(0);
    expect(result.symbol).toBe(")");
  });
});

describe("[FUNC] charToCasing", () => {
  it("should return the correct capital letter for a numeric value with upper", () => {
    expect(charToCasing("1", "upper")).toBe("B");
    expect(charToCasing("5", "upper")).toBe("F");
    expect(charToCasing("0", "upper")).toBe("A");
  });

  it("should return the correct lowercase letter for a numeric value with upper", () => {
    expect(charToCasing("2", "lower")).toBe("c");
    expect(charToCasing("6", "lower")).toBe("g");
    expect(charToCasing("9", "lower")).toBe("j");
  });

  it("should return the correctly inverted casing for letters", () => {
    expect(charToCasing("v", "upper")).toBe("V");
    expect(charToCasing("r", "upper")).toBe("R");
    expect(charToCasing("o", "upper")).toBe("O");
    expect(charToCasing("K", "lower")).toBe("k");
    expect(charToCasing("M", "lower")).toBe("m");
    expect(charToCasing("P", "lower")).toBe("p");
  });

  it("should do nothing when the case is already what is specified", () => {
    expect(charToCasing("V", "upper")).toBe("V");
    expect(charToCasing("R", "upper")).toBe("R");
    expect(charToCasing("O", "upper")).toBe("O");
    expect(charToCasing("k", "lower")).toBe("k");
    expect(charToCasing("m", "lower")).toBe("m");
    expect(charToCasing("p", "lower")).toBe("p");
  });
});

describe("[FUNC] generateV1Password", () => {
  it("should always return a string that is 16 characters long", async () => {
    const data = await generateV1Password("some_password", "Some Service");
    expect(data.length).toBe(16);
  });

  it("should always return a string with a symbol", async () => {
    const data = await generateV1Password("some_password", "Some Service");
    const regex = new RegExp(/[!@#$%^&*()]/);
    expect(regex.test(data)).toBe(true);
  });

  it("should always return a string with a number as the 11th character", async () => {
    const data = await generateV1Password(
      "another_password",
      "Another Service"
    );
    const regex = new RegExp(/[0-9]/);
    expect(regex.test(data[10])).toBe(true);
  });

  it("should always return a string with a uppercase letter as the 12th and 16th characters", async () => {
    const data = await generateV1Password(
      "one_more_password",
      "One More Service"
    );
    const regex = new RegExp(/[A-Z]/);
    expect(regex.test(data[11])).toBe(true);
    expect(regex.test(data[15])).toBe(true);
  });

  it("should always return a string with a lowercase letter as the 14th character", async () => {
    const data = await generateV1Password("final_password", "Final Service");
    const regex = new RegExp(/[a-z]/);
    expect(regex.test(data[13])).toBe(true);
  });
});
