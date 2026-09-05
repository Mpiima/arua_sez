import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    siteName: 'Arua Special Economic Zone',
    siteShort: 'Arua SEZ',
    adminUser: {
      name: 'Zone Administrator',
      email: 'admin@aruasez.go.ug',
      role: 'Super Admin'
    }
  }),
  getters: {},
  actions: {}
})
