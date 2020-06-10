### 初始化
在 `new Vue()` 之后。Vue 会调用进行初始化，包括生命周期，事件，props，methods，data，computed，watch 等。其中最重要的是通过 Object.defineProperty 设置 `setter` 和 `getter`，用来实现 `响应式` 以及 `依赖收集`

