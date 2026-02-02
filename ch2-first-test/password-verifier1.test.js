// password-verifier1.test.js
import { describe, it, expect } from "vitest";
import { PasswordVerifier1 } from "./password-verifier1";

describe("Password Verifier", () => {
  // 以 USE 原則為測試命名
  describe("with a failing rule", () => {
    it("has an error message based on the rule.reason", () => {
      // 設定測試的輸入
      const verifier = new PasswordVerifier1();
      const fakeRule = (input) => ({ passed: false, reason: "fake reason" });
      // 用輸入來呼叫進入點
      verifier.addRule(fakeRule);
      const errors = verifier.verify("any value");
      // 檢查退出點
      expect(errors[0]).toMatch("fake reason");
    });
  });
});
