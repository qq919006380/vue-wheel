import Toast from './toast';
let Constructor
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, toastOptons) {
            if (Constructor) {
                Constructor.close()
            }
            Constructor = createToast({ Vue, message, propsData: toastOptons })
        }

    }
};

function createToast({ Vue, message, propsData }) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData
    })
    toast.$slots.default = [message]
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}