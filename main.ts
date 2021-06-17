input.onButtonPressed(Button.A, function () {
    radio.sendString("Z")
})
GHBit.onKey(GHBit.enButton.B3, function () {
    radio.sendString("G")
})
GHBit.onKey(GHBit.enButton.B1, function () {
    radio.sendString("E")
})
GHBit.onKey(GHBit.enButton.B4, function () {
    radio.sendString("H")
})
GHBit.onKey(GHBit.enButton.B2, function () {
    radio.sendString("F")
})
basic.showIcon(IconNames.Heart)
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Up)) {
        radio.sendString("stick_up")
        basic.showArrow(ArrowNames.North)
    } else if (GHBit.Rocker(GHBit.enRocker.Down)) {
        radio.sendString("stick_down")
        basic.showArrow(ArrowNames.South)
    } else if (GHBit.Rocker(GHBit.enRocker.Left)) {
        radio.sendString("stick_left")
        basic.showArrow(ArrowNames.West)
    } else if (GHBit.Rocker(GHBit.enRocker.Right)) {
        radio.sendString("stick_right")
        basic.showArrow(ArrowNames.East)
    } else if (GHBit.Rocker(GHBit.enRocker.Press)) {
        radio.sendString("stick_press")
        basic.showIcon(IconNames.No)
    } else if (GHBit.Rocker(GHBit.enRocker.Nostate)) {
        radio.sendString("stick_middle")
        basic.showIcon(IconNames.No)
    }
})