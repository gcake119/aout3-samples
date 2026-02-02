// password-verifier0.test.js
import { describe, it, expect } from "vitest";
import { verifyPassword } from "./password-verifier0";

describe("Password Verifier", () => {
    // 以 USE 原則為測試命名
    it("Given a failing rule, returns errors", () => {
        // 設定測試的輸入
        const fakeRule = (input) => ({ passed: false, reason: "fake reason" });
        // 用輸入來呼叫進入點
        const errors = verifyPassword("any input", [fakeRule]);
        // 檢查退出點
        expect(errors[0]).toMatch("fake reason")
    })
});