```
React.Children.map(props.children, radio => {
  // 要修改虚拟dom 只能克隆它
  // 参数1 是克隆对象
  // 参数2 是设置的属性
  return React.CloneElement(radio, {name: props.name})
})
```


#### ReactDOM.render
1. 创建 ReactRoot
2. 创建 FiberRoot 和 RootFiber
3. 创建更新，进入调度

ReactDOM.render(<App />, document.getElementById('root'))
实际上是`ReactDOM`对象里的`render`方法

```
render(
  element: React$Element<any>,
  container: DOMContainer,
  callback: ?Function  // 渲染结束之后调用
) {
  return legacyRenderSubtreeIntoContainer(
    null,
    element,
    container,
    false,
    callback
  )
}
```
