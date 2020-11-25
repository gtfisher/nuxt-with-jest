import { shallowMount } from '@vue/test-utils'
import about from '../../pages/about/index'

describe('index', () => {
  test('mounts properly', () => {
    const wrapper = shallowMount(about, {
      stubs: ['Logo', 'NuxtLink'],
    })
    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.text()).toContain('About')
  })

  test('renders properly', () => {
    const wrapper = shallowMount(about, {
      stubs: ['Logo', 'NuxtLink'],
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
