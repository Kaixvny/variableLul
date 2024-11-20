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
basic.forever(function () {
    sensor_dist = maqueen.Ultrasonic()
    if (sensor_dist < 25) {
        turn("left", 60)
    } else {
        Maqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CW, 100)
    }
})
