import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'

const ValueContext = React.createContext()

export const connect = (
  mapStateToProps=state => state, 
  mapDispatchToProps
) => WrappedComponent => {
  return class extends Component {
    static contextType = ValueContext
    constructor(props) {
      super(props)
      this.state = {
        props: {}
      }
    }
    componentDidMount() {
      const {subscribe} = this.context
      this.update()
      subscribe(() => {
        this.update()
      })
    }

    update () {
      const {getState, dispatch} = this.context
      let stateProps = mapStateToProps(getState())
      let dispatchProps = {dispatch}
      if (typeof mapDispatchToProps === 'object') {
        dispatchProps = bindActionCreators(mapDispatchToProps, dispatch)
      } else if (typeof mapDispatchToProps === 'function') {
        dispatchProps = mapDispatchToProps(dispatch)
      } else {
        dispatchProps = { dispatch }
      }
      this.setState({
        props: {
          ...stateProps,
          ...dispatchProps
        }
      })
    }

    render () {
      return <WrappedComponent {...this.state.props}/>
    }
  }
}

export default class Provider extends Component {
  render() {
    const {store, children} = this.props
    return <ValueContext.Provider value={store}>
      {children}
    </ValueContext.Provider>
  }
}

function bindActionCreator (creator, dispatch) {
  return (...args) => dispatch(creator(...args))
}
export function bindActionCreators(creators, dispatch) {
  const obj = {}
  for(let ket in creators) {
    obj[key] = bindActionCreator(creators[key], dispatch)
  }
  return obj
}