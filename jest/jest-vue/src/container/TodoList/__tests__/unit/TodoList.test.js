import { shallowMount } from '@vue/test-utils'
import TodoList from '../../TodoList'
import Header from '../../components/Header'

it('TodoList 初始化时，undoList 应该为空', () => {
  const wrapper = shallowMount(TodoList)
  const undoList = wrapper.vm.$data.undoList
  expect(undoList).toEqual([])
})

it('TodoList 监听到 Header 执行 add 时，增加一个内容', () => {
  const content = '小蚵仔'
  const wrapper = shallowMount(TodoList)
  const header = wrapper.findComponent(Header)
  header.vm.$emit('add', content)
  const undoList = wrapper.vm.$data.undoList
  expect(undoList).toEqual([content])
})
