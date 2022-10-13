let _6g = 0
input.onButtonPressed(Button.A, function () {
    _6g = randint(0, 2)
    if (_6g == 0) {
        basic.showNumber(_6g)
        basic.pause(100)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        if (_6g == 2) {
            basic.showNumber(_6g)
            basic.pause(100)
            basic.showIcon(IconNames.Scissors)
        } else {
            if (_6g == 3) {
                basic.showNumber(_6g)
                basic.pause(100)
                basic.showIcon(IconNames.SmallSquare)
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
