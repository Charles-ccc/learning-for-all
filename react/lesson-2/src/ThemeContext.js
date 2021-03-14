import React from 'react'

// 创建context ，农民种菜。
export const ThemeContext = React.createContext({themeColor: 'pink'})
// 接受者，批发商批发菜
export const ThemeProvider = ThemeContext.Provider
// 消费者，买来吃菜
export const ThemeConsumer = ThemeContext.Consumer