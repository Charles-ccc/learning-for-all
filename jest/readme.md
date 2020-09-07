
#### jest 运行时
当运行 `npm run jest` 时， `jest` 内部集成了 `babel-jest`，会检测当前环境下是否安装了 `babel-core`，如果安装了，则会去拿 `.babelrc` 的配置，然后在运行测试之前，先结合 `babel` 把代码做一次转化，最后就运行转化过的测试用例代码

#### 运行模式
'jest --watch' 就处在 o 模式
'jest --watchAll' 就处在 a 模式
运行时按 w 打开模式列表
按 a 执行所有的测试用例
按 f 仅执行之前未通过的测试用例
按 o 仅执行当前改动过的文件的测试用例（需结合git）
按 p 根据文件名过滤需要执行的测试用例
按 t 根据测试用例的名字来过滤需要执行的测试用例
按 u 更新未通过测试的快照
按 i 通过交互式来提供选择更新快照
按 q 退出 watch 观察模式

#### 钩子函数和作用域
把准备型的代码放在钩子函数内部，否则在describe内的代码会优先在钩子函数之前执行
describe()
beforeAll()
beforeEach()
afterAll()
afterEach()

#### mock
1. 捕获函数的调用和返回结果，以及this和调用顺序
2. 自由的设置返回结果
3. 改变函数的内部实现

通过 jest.fn() 会生成一个函数，拥有 mock 属性，里面有
 calls（被调用次数以及调用时传递的参数）
 results（被调用次数以及每次返回的结果）
 instances（被调用次数以及每次调用时this的指向）
 invocationCallOrder（函数有可能被多次传入相同/不同的方法中，表示它执行顺序）
