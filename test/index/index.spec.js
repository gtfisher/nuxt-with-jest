import { shallowMount } from '@vue/test-utils'
import index from '../../pages/index'

describe('index', () => {
  test('mounts properly', () => {
    const wrapper = shallowMount(index, {
      stubs: ['Logo', 'NuxtLink'],
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test('renders properly', () => {
    const wrapper = shallowMount(index, {
      stubs: ['Logo', 'NuxtLink'],
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
