import Vue from 'vue'
import App from '../../src/App.vue'

describe('App', () => {
    it('has a humanizeURL method', () => {
        expect(typeof App.methods.humanizeURL).toBe('function')
    })
})
