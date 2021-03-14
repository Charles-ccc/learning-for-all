import React from 'react'

// 创建context ，农民种菜。
export const UserContext = React.createContext({name: 'ham'})
// 接受者，批发商批发菜
export const UserProvider = UserContext.Provider
// 消费者，买来吃菜
export const UserConsumer = UserContext.Consumer