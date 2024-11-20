input.onButtonPressed(Button.A, function () {
    turn("", 0)
})
function turn (dir: string, speed: number) {
    if (dir == "left") {
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, speed)
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CW, 0 - 0)
    } else if (dir == "right") {
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CW, speed)
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, 0 - 0)
    } else {
    	
    }
}
input.onButtonPressed(Button.B, function () {
    turn("", 0)
})
basic.forever(function () {
	
})
