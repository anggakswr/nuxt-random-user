import { shallowMount, config } from '@vue/test-utils'
import Vue from 'vue'
import axios from 'axios'
import index from '@/pages/index.vue'

config.mocks.$t = (msg) => msg

const mockUsers = {
  data: {
    results: [],
  },
}

// Following lines tell Jest to mock any call to `axios.get`
// and to return `mockUsers` instead
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve(mockUsers)),
}))

// stubs child components
const stubs = {
  IndexTitleBox: true,
  IndexUserSkeleton: true,
  IndexUser: true,
}

describe('index page', () => {
  test('GET users', async () => {
    const wrapper = shallowMount(index, {
      mocks: {
        $axios: axios,
      },
      stubs,
    })

    expect(axios.get).toHaveBeenCalledTimes(1)

    // wait for the DOM changes
    await Vue.nextTick()

    // loading placeholder appear
    const skeletons = wrapper.findAll('indexuserskeleton-stub')
    expect(skeletons.length).toBe(4)

    // wait for the DOM changes
    await Vue.nextTick()

    // loading placeholder gone
    const skeletons2 = wrapper.findAll('indexuserskeleton-stub')
    expect(skeletons2.length).toBe(0)

    // wait for the DOM changes
    await Vue.nextTick()

    // search result should exist
    const users = wrapper.findAll('indexuser-stub')
    expect(users.length).toBe(0)

    // not found msg should not exist
    const notFoundDesc = wrapper.find('[data-testid="nodata-desc"]')
    expect(notFoundDesc.exists()).toBe(true)

    // // err msg should not exist
    // const errDesc = wrapper.find('indexerror-stub')
    // expect(errDesc.exists()).toBe(false)
  })
})
