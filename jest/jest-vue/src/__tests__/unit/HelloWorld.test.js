// import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    // const root = document.createElement('div')
    // root.className = 'root'
    // document.body.appendChild(root)
    // new Vue({
    //   render: h => h(HelloWorld, {
    //     props: {
    //       msg: '小蚵仔'
    //     }
    //   })
    // }).$mount('.root')
    // expect(document.getElementsByClassName('hello').length).toBe(1)

    // shallowMount 浅渲染，只渲染helloworld这一层组件，适用于单元测试
    // mount 深渲染 适用于集成测试
    const msg = '小蚵仔'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
