const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {

    it('存在.', () => {
        expect(Input).to.be.ok
    })

    describe('props', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('接收value', () => {
            vm = new Constructor({
                propsData: {
                    value: '123456'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('123456')

        })
        it('接收disabled', () => {

            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)

        })
        it('接收readonly', () => {

            vm = new Constructor({
                propsData: {
                    readonly: 'true'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)

        })
        it('接收error', () => {

            vm = new Constructor({
                propsData: {
                    error: '你出错啦'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const eroorElement = vm.$el.querySelector('.errorMessage')
            expect(eroorElement.innerText).to.equal('你出错啦')

        })
    })
    describe('事件', () => {
        const Constructor=Vue.extend(Input)
        let vm
        afterEach(()=>{
            vm.$destroy()
        })
        it('支持 change事件',()=>{
            vm=new Constructor({}).$mount()
            const callback=sinon.fake()
            vm.$on('change',callback)
            // 触发input的change事件
            let event =new Event('change')
            let inputElement =vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).to.have.been.calledWith(event)
        })
    })

})