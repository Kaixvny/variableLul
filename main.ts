let timer = 0
let sensor_dist = 0
input.onButtonPressed(Button.A, function () {
    turn("wefwefwe", 1)
})
function turn (dir: string, speed: number) {
    if (dir == "left") {
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, speed)
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CW, 0 - speed)
    } else if (dir == "right") {
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CW, speed)
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, 0 - speed)
    } else {
    	
    }
}
input.onButtonPressed(Button.B, function () {
	
})
function thing1 () {
    timer = 100
    while (timer > 0) {
        turn("left", 60)
    }
}
basic.forever(function () {
    if (timer > 0) {
        timer += -1
    }
})
basic.forever(function () {
    sensor_dist = maqueen.Ultrasonic()
    if (sensor_dist < 25) {
        thing1()
    } else {
        Maqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CW, 100)
    }
})
