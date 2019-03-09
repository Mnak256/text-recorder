console.log('text-recorder started')
;(() => {
    let textArr = []

    const recordTextDom = document.getElementById('record-text')
    let startingTime = null
    recordTextDom.addEventListener('keyup', event => {
        if (!startingTime) {
            startingTime = Date.now()
        }
        if (event.which > 47 || event.which === 32 || event.which === 13) {
            textArr.push({key:event.key, timeStamp:Date.now() - startingTime})
        }
    })

    const playBthDom = document.getElementById('play-btn')
    const playTextDom = document.getElementById('play-text')

    playBthDom.addEventListener('click', event => {
        textArr.forEach(item => {
            setTimeout(() => {
                playTextDom.append(item.key === 'Enter' ? '\n' : item.key)
            }, item.timeStamp)
        })
    })
})()
