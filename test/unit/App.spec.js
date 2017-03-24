import Vue from 'vue'
import App from 'App.vue'

describe('App', () => {
    it('has a humanizeURL method', () => {
        expect(typeof App.methods.humanizeURL).toBe('function');
    })

    it('can remove http from urls', () => {
        expect(App.methods.humanizeURL('http://google.com')).toBe('google.com');
    })

    it('can remove https from urls', () => {
        expect(App.methods.humanizeURL('https://google.com')).toBe('google.com');
    })

    it('can remove trailing slash from urls', () => {
        expect(App.methods.humanizeURL('google.com/')).toBe('google.com');
    })
})
