import React, { PureComponent } from 'react'

class TreeNode extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  get isFolder() {
    return this.props.model.children && this.props.model.children.length
  }

  toggle = () => {
    if (this.isFolder) {
      this.setState({
        open: !this.state.open,
      })
    }
  }

  render() {
    const { model } = this.props

    return (
      <ul>
        <li>
          <div onClick={this.toggle}>
            {model.title}
            {this.isFolder ? <span>{this.state.open ? '-' : '+'}</span> : null}
          </div>
          {/* 可能存在子级 */}
          {this.isFolder ? (
            <div style={{ display: this.state.open ? 'block' : 'none' }}>
              {model.children.map((model) => (
                <TreeNode key={model.title} model={model} />
              ))}
            </div>
          ) : null}
        </li>
      </ul>
    )
  }
}

class Tree extends PureComponent {
  treeData = {
    title: 'Web全栈架构师',
    children: [
      {
        title: 'Java架构师',
      },
      {
        title: 'JS高级',
        children: [
          {
            title: 'ES6',
          },
          {
            title: '动效',
          },
        ],
      },
      {
        title: 'Web全栈',
        children: [
          {
            title: 'Vue训练营',
            expand: true,
            children: [
              {
                title: '组件化',
              },
              {
                title: '源码',
              },
              {
                title: 'docker部署',
              },
            ],
          },
          {
            title: 'React',
            children: [
              {
                title: 'JSX',
              },
              {
                title: '虚拟DOM',
              },
            ],
          },
          {
            title: 'Node',
          },
        ],
      },
    ],
  }

  render() {
    return (
      <div>
        <TreeNode model={this.treeData} />
      </div>
    )
  }
}
export default Tree