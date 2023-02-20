import { useEffect } from 'react'

/**
 * 滚动到底部触发事件的hook
 * @param listDomRef 绑定滚动事件的dom节点的ref
 * @param callback 滚动到底部时执行的callback
 * @param reactionDistance 距离底部的触发距离，默认为0
 */
export const useScrollToBottomHook = (
  listDomRef: any,
  callback: () => void,
  reactionDistance = 0,
) => {
  useEffect(() => {
    if (!listDomRef) return
    const currentDom = listDomRef.current
    currentDom.addEventListener('scroll', handleScroll)
    return () => {
      // 组件销毁时清除绑定事件
      currentDom.removeEventListener('scroll', handleScroll)
    }
  }, [callback, reactionDistance, listDomRef])

  const handleScroll = (e: any) => {
    if (
      e.target.scrollHeight - e.target.scrollTop - e.target.offsetHeight
      <= reactionDistance
    ) {
      callback()
    }
  }
}
