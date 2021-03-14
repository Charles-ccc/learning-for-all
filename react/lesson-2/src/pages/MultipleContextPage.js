import React, { Component } from 'react'
import { ThemeConsumer } from '../ThemeContext'
import { UserConsumer } from '../UserContext'

export default class MultipleContextPage extends Component {
  render() {
    return (
      <div>
        <ThemeConsumer>
          {
            theme => (
              <UserConsumer>
                {user => <div className={theme.themeColor}>user.name - {user.name}</div>}
              </UserConsumer>
            )
          }
        </ThemeConsumer>
      </div>
    )
  }
}
