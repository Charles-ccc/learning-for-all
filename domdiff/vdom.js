const vnodeType = {
  HTML: 'HTML',
  TEXT: 'TEXT',
  COMPONENT: 'COMPONENT',
  CLASS_COMPONENT: 'CLASS_COMPONENT'
}

const childType = {
  EMPTY: 'EMPTY',
  SINGLE: 'SINGLE',
  MULTIPLE: 'MULTIPLE'
}

// 新建虚拟dom
// 标签名，属性，子元素
function createElement (tag, data, children = null) {
  // 定义tag类型
  let flag
  if (typeof tag === 'string') {
    flag = vnodeType.HTML
  } else if (typeof tag === 'function') {
    flag = vnodeType.COMPONENT
  } else {
    flag = vnodeType.TEXT
  }

  // 定义children类型，分为 没有子元素，单个子元素，多个子元素
  let childrenFlag
  if (children === null) {
    childrenFlag = childType.EMPTY
  } else if (Array.isArray(children)) {
    let length = children.length
    if (length === 0) {
      childrenFlag = childType.EMPTY
    } else {
      childrenFlag = childType.MULTIPLE
    }
  } else {
    // 其他情况认为是文本
    childrenFlag = childType.SINGLE
    children = createTextVnode(children + '')
  }

  // 返回vnode
  return {
    flag, // vnode类型
    tag, // 标签或者文本；组件则是函数
    data, // 属性
    children, // 子元素
    childrenFlag, // 子元素类型
    el: null // 虚拟节点
  }
}

// 新建文本类型的vnode
function createTextVnode (text) {
  return {
    flag: vnodeType.TEXT,
    tag: null,
    data: null,
    children: text,
    childrenFlag: childType.EMPTY
  }
}

// 渲染
// 渲染的虚拟dom，挂载的容器
function render (vnode, container) {
  // 区分首次渲染和再次渲染
  if (container.vnode) {
    // 更新
    patch(container.vnode, vnode, container)
  } else {
    mount(vnode, container)
  }
  container.vnode = vnode
}

// 旧值，新值，容器
function patch(prev, next, container) {
  const prevFlag = prev.flag
  const nextFlag = next.flag
  // 同diff算法，节点类型不一样就直接替换
  if (prevFlag !== nextFlag) {
    replaceVnode(prev, next, container)
  } else if (nextFlag === vnodeType.HTML) {
    patchElement(prev, next, container)
  } else if (nextFlag === vnodeType.TEXT) {
    patchText(prev, next)
  }
}

function replaceVnode (prev, next, container) {
  container.removeChild(prev.el)
  mount(next, container)
}

function patchElement (prev, next, container) {
  if (prev.tag !== next.tag) {
    replaceVnode(prev, next, container)
    return
  }

  // 更新data属性
  const el = (next.el = prev.el)
  const prevData = prev.data
  const nextData = next.data
  // 更新
  if (nextData) {
    for (let key in nextData) {
      const prevVal = prevData[key]
      const nextVal = nextData[key]
      patchData(el, key, prevVal, nextVal)
    }
  }
  // 删除，旧值里有但新值没有
  if (prevData) {
    for (let key in prevData) {
      const prevVal = prevData[key]
      if (prevVal && !nextData.hasOwnProperty(key)) {
        patchData(el, key, prevVal, null)
      }
    }
  }
  // data属性更新完毕， 更新子元素
  patchChildren (
    prev.childrenFlag,
    next.childrenFlag,
    prev.children,
    next.children,
    el
  )
}

// 更新子元素, diff
function patchChildren (
  prevChildFlag,
  nextChildFlag,
  prevChildren,
  nextChildren,
  container,
) {
  // 旧值分为 空值，单个，多个
  // 新值分为 空值，单个，多个
  // 共九种情况进行处理
  switch(prevChildFlag) {
    case childType.SINGLE:
      switch(nextChildFlag){
        case childType.SINGLE:
          patch(prevChildren, nextChildren, container)
          break
        case childType.EMPTY:
          container.removeChild(prevChildren.el)
          break
        case childType.MULTIPLE:
          container.removeChild(prevChildren.el)
          for(let i=0; i<nextChildren.length; i++) {
            mount(nextChildren[i], container)
          }
          break
      }
      break
    case childType.EMPTY:
      switch(nextChildFlag){
        case childType.SINGLE:
          mount(nextChildren, container)
          break
        case childType.EMPTY:
          break
        case childType.MULTIPLE:
          for(let i=0; i<nextChildren.length; i++) {
            mount(nextChildren[i], container)
          }
          break
      }
      break
    case childType.MULTIPLE:
      switch(nextChildFlag){
        case childType.SINGLE:
          for(let i=0; i<prevChildren.length; i++) {
            container.removeChild(prevChildren[i].el)
          }
          mount(nextChildren, container)
          break
        case childType.EMPTY:
          for(let i=0; i<prevChildren.length; i++) {
            container.removeChild(prevChildren[i].el)
          }
          break
        case childType.MULTIPLE:
          // 旧值和新值均为数组
          break
      }
      break
  }
}

function patchText(prev, next) {
  const el = (next.el = prev.el)
  if (next.children !== prev.children) {
    // 设置节点新值
    el.nodeValue = next.children
  }
}

// 首次挂载元素
function mount (vnode, container) {
  const {flag} = vnode
  if (flag === vnodeType.HTML) {
    mountElement(vnode, container)
  } else if (flag === vnodeType.TEXT) {
    mountText(vnode, container)
  }
}

function mountElement (vnode, container) {
  const dom = document.createElement(vnode.tag)
  vnode.el = dom // 将真实dom存到虚拟dom中
  let {data, children, childrenFlag} = vnode
  // 挂载data属性
  if (data) {
    for(let key in data) {
      // 节点，属性名，旧值，新值
      patchData(dom, key, null, data[key])
    }
  }

  if (childrenFlag !== childType.EMPTY) {
    if (childrenFlag === childType.SINGLE) {
      // 相对于子节点来说，container就是dom
      mount(children, dom)
    } else if (childrenFlag === childType.MULTIPLE) {
      // 挂载多个子元素
      for(let i=0; i<children.length; i++) {
        mount(children[i], dom)
      }
    }
  }
  // console.log(dom)
  // 挂载节点
  container.appendChild(dom)
}

function mountText (vnode, container) {
  let dom = document.createTextNode(vnode.children)
  vnode.el = dom
  container.appendChild(dom)
}

// 挂载属性
function patchData (el, key, prev, next) {
  switch(key) {
    case 'style':
      for(let k in next) {
        el.style[k] = next[k]
      }
      for(let k in prev) {
        if (!next.hasOwnProperty(k)) {
          el.style[k] = ''
        }
      }
      break;
    case 'class':
      el.className = next
      break;
    default:
      if (key[0] === '@') {
        if (prev) {
          el.removeListerner(key.slice(1), prev)
        }
        if (next) {
          el.addEventListener(key.slice(1), next)
        }
      } else {
        el.setAttribute(key, next)
      }
      break;
  }
}