```
React.Children.map(props.children, radio => {
  // 要修改虚拟dom 只能克隆它
  // 参数1 是克隆对象
  // 参数2 是设置的属性
  return React.CloneElement(radio, {name: props.name})
})
```