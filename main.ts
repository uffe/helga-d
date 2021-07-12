input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . # # # .
            # # # # #
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.showLeds(`
            . # # # .
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    basic.clearScreen()
})
basic.forever(function () {
	
})
