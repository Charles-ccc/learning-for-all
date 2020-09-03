
#### jest 运行时
当运行 `npm run jest` 时， `jest` 内部集成了 `babel-jest`，会检测当前环境下是否安装了 `babel-core`，如果安装了，则会去拿 `.babelrc` 的配置，然后在运行测试之前，先结合 `babel` 把代码做一次转化，最后就运行转化过的测试用例代码