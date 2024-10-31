radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber < numero) {
        basic.showIcon(IconNames.Happy)
    } else if (receivedNumber == numero) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Hello")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    numero += 1
    if (numero <= 6) {
        basic.showNumber(numero)
    } else {
        numero = 0
    }
})
let numero = 0
radio.setGroup(10)
