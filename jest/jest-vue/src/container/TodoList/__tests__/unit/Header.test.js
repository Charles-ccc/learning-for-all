import { shallowMount } from '@vue/test-utils'
import Header from '../../components/Header.vue'

it('Header 包含 input 框', () => {
  const wrapper = shallowMount(Header)
  const input = wrapper.find('[data-test="input"]')
  expect(input.exists()).toBe(true)
})

it('Header 中 input 框初始内容为空', () => {
  const wrapper = shallowMount(Header)
  const inputValue = wrapper.vm.$data.inputValue
  expect(inputValue).toBe('')
})

it('Header 中 input 框值发生变化，数据应该跟着变', () => {
  const wrapper = shallowMount(Header)
  const input = wrapper.find('[data-test="input"]')
  input.setValue('小蚵仔')
  const inputValue = wrapper.vm.$data.inputValue
  expect(inputValue).toBe('小蚵仔')
})

it('Header 中 input 框无值时，回车无反应', () => {
  const wrapper = shallowMount(Header)
  const input = wrapper.find('[data-test="input"]')
  input.setValue('')
  input.trigger('keyup.enter')
  expect(wrapper.emitted().add).toBeFalsy()
})

it('Header 中 input 框有值时，回车向外触发事件， 同时清空 input', () => {
  const wrapper = shallowMount(Header)
  const input = wrapper.find('[data-test="input"]')
  input.setValue('小蚵仔')
  input.trigger('keyup.enter')
  expect(wrapper.emitted().add).toBeTruthy()
  expect(wrapper.vm.$data.inputValue).toBe('')
})