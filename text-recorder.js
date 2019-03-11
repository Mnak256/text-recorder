console.log('text-recorder started')
;(() => {
    textArr = []

    const recordTextDom = document.getElementById('record-text')
    let startingTime = null
    recordTextDom.addEventListener('keydown', event => {
        if (!startingTime) {
            startingTime = Date.now()
        }
        if (event.which > 47 || event.which === 32 || event.which === 13 || event.which === 8) {
            textArr.push({key:event.key, timeStamp:Date.now() - startingTime})
        }
    })

    const playBthDom = document.getElementById('play-btn')
    playTextDom = document.getElementById('play-text')

    playBthDom.addEventListener('click', event => {
        playTextDom.innerText = ''
        // startingTime = null
        textArr.forEach(item => {
            setTimeout(() => {
                if (item.key === 'Enter') {
                    playTextDom.append('\n')
                } else if (item.key === 'Backspace') {
                    playTextDom.innerText = playTextDom.innerText.substring(0, playTextDom.innerText.length - 1)
                } else {
                    playTextDom.append(item.key)
                }
            }, item.timeStamp)
        })
        console.log(checkSorted(textArr, 'timeStamp'))
    })

    function checkSorted(arr, key) {
        let i = arr[0][key]
        for (let index = 1; index < arr.length; index++) {
            if (i > arr[index][key]) {
                console.log(`${i} > ${arr[index][key]} (index: ${index})`)
                return false
            }
            i = arr[index][key]
        }
        return true
    }
})()
