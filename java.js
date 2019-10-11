const vol = (x, y, z) => { return x * y * z }

const volu = new Vue({
    el: '#volu',
    data: {
        length1: 6,
        height1: 2,
        width1: 3
    },
    computed: {
        result: function () {
            const i = parseInt(this.length1)
            const j = parseInt(this.height1)
            const k = parseInt(this.width1)
            return `${vol(i, j, k)}.`
        }
    }
}) 