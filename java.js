const per = (x, y, z) => { return 4 * (x + y + z) }

const peri = new Vue({
    el: '#peri',
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
            return `${per(i, j, k)}.`
        }
    }
}) 