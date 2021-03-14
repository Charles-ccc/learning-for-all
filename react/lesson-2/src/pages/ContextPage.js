import React, { Component } from 'react'
import ContentTypePage from './ContextTypePage'
import MultipleContextPage from './MultipleContextPage'
import { ThemeProvider } from '../ThemeContext'
import { UserProvider } from '../UserContext'
import ConsumerPage from './ConsumerPage'

/**
 * 使用context步骤
 * 1. 创建 - createContext
 * 2. provider接收value，以保证有传下去的数据
 * 3. 接收 - Consumer 或者 class.contextType
 */
export default class ContextPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: {
        themeColor: 'red'
      },
      user: {
        name: 'hap'
      }
    }
  }
  render() {
    const {theme, user} = this.state
    return (
      <div>
        <ThemeProvider value={theme}>
          <ContentTypePage />
          <ConsumerPage />
          <UserProvider value={user}>
            <MultipleContextPage />
          </UserProvider>
        </ThemeProvider>
      </div>
    )
  }
}
