bluetooth.startTemperatureService()
bluetooth.startButtonService()
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    for (let num = 0; num <= 9; num++) {
        basic.showNumber(num)
        basic.pause(1000)
    }
})
