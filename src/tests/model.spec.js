import Vue from 'vue'
import VueModel from '../index'

import VueRequests from 'vue-requests'
import User from '../demo/user'
import tenant_data from './tenant_data'
import tests from './tests'

const { Model } = VueModel

Vue.use(VueRequests)
Vue.use(VueModel)

fetch.mockResponse(JSON.stringify(tenant_data), {
  status: 200
})

tests(Vue, Model, User)
