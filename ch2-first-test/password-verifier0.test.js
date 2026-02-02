import { describe, it, expect } from "vitest";
import { verifyPassword } from "./password-verifier0";

describe("Password Verifier", () => {
    it("Badly named test", () => {
        // 設定測試的輸入
        const fakeRule = (input) => ({ passed: false, reason: "fake reason" });
        // 用輸入來呼叫進入點
        const errors = verifyPassword("any input", [fakeRule]);
        // 檢查退出點
        expect(errors[0]).toMatch("fake reason")
    })
});