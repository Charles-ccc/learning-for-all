import React, { Component } from 'react'
import {RouterContext} from './RouterContext'
import matchPath from './matchPath'

export default class Route extends Component {
  render() {
    return <RouterContext.Consumer>
      {
        context => {
          const { children, component, render, computedMatch, path} = this.props
          // const match = context.location.pathname === path
          const location = this.props.location || context.location
          const match = computedMatch 
            ? computedMatch 
            : path
              ? matchPath(location.pathname, this.props)
              : context.path
          const props = {
            ...context,
            location,
            match
          }
          // children, component, render 可以接受{history, location, match}
          // return match ? React.createElement(component, this.props) : null
          return (
            // match 渲染 children, component, render (function || ReactNode)
            // 不match 渲染 children(funtion) 或者 null
            <RouterContext.Provider value={props}>
              {match
                ? children
                  ? typeof children === 'function'
                    ? children(props)
                    : children
                  : component
                    ? React.createElement(component, props)
                    : render
                      ? render(props)
                      : null
                : typeof children === 'function' 
                  ? children(props)
                  : null
              }
            </RouterContext.Provider>
          )
        }
      }
    </RouterContext.Consumer>
  }
}
