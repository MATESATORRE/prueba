let A = 0
let B = 0
let C = 0
input.onButtonPressed(Button.A, function () {
    A = randint(-20, 20)
    if (A != 0) {
        basic.showString("El coeficiente de X cuadrado es " + A)
    } else {
        A = randint(-20, 20)
        basic.showString("El coeficiente de X cuadrado es " + A)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("ECUACION: " + A + "X^2 + " + B + "X + " + C + " = 0")
    if (B * B - 4 * (A * C) < 0) {
        basic.showString("NO TIENE SOLUCION" + " Discriminante negativo")
    } else {
        basic.pause(1000)
        basic.showString("PRIMERA SOLUCION: " + (0 - B + Math.sqrt(B * B - 4 * (A * C))) / (2 * A))
        basic.showString("SEGUNDA SOLUCION: " + (0 - B - Math.sqrt(B * B - 4 * (A * C))) / (2 * A))
    }
})
input.onButtonPressed(Button.AB, function () {
    C = randint(-20, 20)
    basic.showString("El termino independiente es  " + C)
})
input.onButtonPressed(Button.B, function () {
    B = randint(-20, 20)
    basic.showString("El coeficiente de X es " + B)
})
