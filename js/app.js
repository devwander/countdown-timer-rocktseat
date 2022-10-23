const daysText = document.querySelector("#days")
const hoursText = document.querySelector("#hours")
const minutesText = document.querySelector("#minutes")
const secondsText = document.querySelector("#seconds")

const newYearDate = new Date(2023, 0, 1)

setInterval(() => {
    renderCountdown(processCountdownValue())
}, 1000)

function addPadStart(value) {
    return value < 10? `0${value}` : value
}

function processCountdownValue() {
    const currentDate = new Date()
    const totalSeconds = (newYearDate - currentDate) / 1000

    let days = Math.floor((totalSeconds / 3600) / 24)
    let hours = Math.floor((totalSeconds / 3600) % 24)
    let minutes = Math.floor((totalSeconds / 60) % 60)
    let seconds = Math.floor(totalSeconds % 60)

    return {days, hours, minutes, seconds}
}

function renderCountdown ({days, hours, minutes, seconds}) {
    daysText.innerText = addPadStart(days)
    hoursText.innerText = addPadStart(hours)
    minutesText.innerText = addPadStart(minutes)
    secondsText.innerText = addPadStart(seconds)
}