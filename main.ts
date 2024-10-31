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
input.onButtonPressed(Button.AB, function () {
    numero_enviar = randint(1, 6)
    radio.sendNumber(numero_enviar)
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
let numero_enviar = 0
let numero = 0
radio.setGroup(10)
