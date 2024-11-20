input.onButtonPressed(Button.A, function () {
    turn(0, 60)
})
function turn (dir: number, speed: number) {
    if (dir == 0) {
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, speed)
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CW, 0 - speed)
    } else if (dir == 1) {
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CW, speed)
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, 0 - speed)
    } else {
    	
    }
}
input.onButtonPressed(Button.B, function () {
    turn(1, 60)
})
basic.forever(function () {
	
})
