input.onButtonPressed(Button.A, function () {
    playerX += -1
})
input.onButtonPressed(Button.B, function () {
    playerX += 1
})
let playerX = 2
basic.forever(function () {
    basic.clearScreen()
    led.plot(2, 2)
})
