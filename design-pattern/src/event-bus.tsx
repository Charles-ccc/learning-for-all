/**
 * 处理事件
 */
const events: Record<string, Function> = {};
/** 广播事件 */
const broadcastEvents: Record<string, Function[]> = {};

export const EVENT_BUS = {
  /**
   * 监听事件
   * @param eventName 事件名称
   * @param callback 回调函数
   */
  on(eventName: string, callback: Function) {
    if (events[eventName]) {
      console.warn(`event ${eventName} has been registered`);
    }
    events[eventName] = callback;
  },
  /**
   * 触发事件
   * @param eventName 事件名称
   * @param payload 事件参数
   * @return 返回事件回调的结果, 需使用 promise 方式获取
   */
  async emit(eventName: string, ...params: unknown[]) {
    if (!events[eventName]) {
      // console.warn(`event ${eventName} is not registered`);
      return;
    }
    return events[eventName](...params);
  },
  /**
   * 移除事件, 支持批量移除
   * @param eventName 事件名称
   **/
  off(eventName: string | string[]) {
    Array.isArray(eventName)
      ? eventName.forEach(name => delete events[name])
      : delete events[eventName];
  },

  /**
   * 监听广播事件
   * @param eventName 事件名称
   * @param callback 回调函数
   */
  listen(eventName: string, callback: Function) {
    if (!broadcastEvents[eventName]) {
      broadcastEvents[eventName] = [];
    }
    if (broadcastEvents[eventName].includes(callback)) return;
    broadcastEvents[eventName].push(callback);
  },
  /**
   * 广播事件
   */
  broadcast(eventName: string, ...args: any[]) {
    const cbs = broadcastEvents[eventName];
    if (!cbs || cbs.length === 0) return;
    cbs.forEach((cb) => {
      try {
        cb(...args);
      } catch (error) {}
    });
  },
  /**
   * 不再监听广播事件
   * @param eventName 事件名称
   * @param callback 回调函数
   */
  quit(eventName: string, callback: Function) {
    const cbs = broadcastEvents[eventName];
    if (!cbs || cbs.length === 0) return;
    const index = cbs.indexOf(callback);
    if (index > -1) {
      cbs.splice(index, 1);
    }
  },
};