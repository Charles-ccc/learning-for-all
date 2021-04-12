import React, {Component} from 'react'
import {RouterContext} from './RouterContext'
import matchPath from './matchPath'

export default class Switch extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {
          context => {
            const location = this.props.location || context.location
            // 找出渲染的第一个符合匹配的元素存到element
            let element
            let match = null
            const {children}= this.props
            React.Children.forEach(children, child => {
              if (match === null && React.isValidElement(child)) {
                element = child
                const path = child.props.path
                match = path ? matchPath(location.pathname, {...child.props, path}) : context.match
              }
              console.log('match', match, context.match)
            })
            return match ? React.cloneElement(element, {
              location,
              computedMatch: match
            }) : null
          }
        }
      </RouterContext.Consumer>
    )
  }
}
