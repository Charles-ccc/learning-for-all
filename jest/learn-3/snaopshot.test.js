import { generateConfig, generateConfig2 } from "./snapshot";

// test('测试 generateConfig', () => {
//   expect(generateConfig()).toMatchSnapshot()
// })

// test('测试 generateConfig2', () => {
//   expect(generateConfig2()).toMatchSnapshot({
//     time: expect.any(Date)
//   })
// })

test("测试 generateConfig2", () => {
  // toMatchInlineSnapshot 将快照放在测试用例里面
  expect(generateConfig2()).toMatchInlineSnapshot(
    {
      time: expect.any(Date)
    },
    `
    Object {
      "port": "8080",
      "server": "http://192.168.0",
      "time": Any<Date>,
    }
  `
  );
});
