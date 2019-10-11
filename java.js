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


// for ajax component 
const jokeURI = 'https://api.icndb.com/jokes/random?limitTo=[nerdy]'

// fetch information
const getJoke = async () => {
  try {
    const response = await fetch(jokeURI)
    const obj = await response.json()
    console.log(`FETCHED. Response JSON ${obj}`)
    const joke = obj.value.joke || 'No joke for you.'
    return joke
  } catch (error) { console.error(error) }
}

// interact with DOM
const updateWithJoke = async (event) => {
  try {
    document.querySelector('#result').innerHTML = ''
    const answer = await getJoke()
    document.querySelector('#result').innerHTML = answer
  } catch (error) { console.error(error) }
}


document.addEventListener('click', event => {
    if (event.target && event.target.id === 'fetching') { updateWithJoke(event) }
})
  

