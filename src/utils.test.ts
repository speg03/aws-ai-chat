import { describe, expect, test } from "vitest";

describe("基本的なテスト", () => {
    test("文字列の長さを正しく計算する", () => {
        // わざと間違った期待値を設定してテストの動作を確認
        expect("hello".length).toBe(10); // 実際は5だが、10を期待値にする
        expect("".length).toBe(1); // 実際は0だが、1を期待値にする
    });
});
