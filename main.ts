input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.compassHeading())
    if (input.compassHeading() > 0 && input.compassHeading() < 45) {
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
        basic.showString("" + (input.compassHeading()))
        if (input.compassHeading() > 45 && input.compassHeading() < 90) {
            music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.UntilDone)
            basic.showString("" + (input.compassHeading()))
        }
        if (input.compassHeading() > 90 && input.compassHeading() < 135) {
            music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
            basic.showString("" + (input.compassHeading()))
        }
        if (input.compassHeading() > 135 && input.compassHeading() < 180) {
            music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
            basic.showString("" + (input.compassHeading()))
        }
        if (input.compassHeading() > 180 && input.compassHeading() < 225) {
            music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
            basic.showString("" + (input.compassHeading()))
        }
        if (input.compassHeading() > 225 && input.compassHeading() < 270) {
            music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
            basic.showString("" + (input.compassHeading()))
        }
        if (input.compassHeading() > 270 && input.compassHeading() < 315) {
            music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.UntilDone)
            basic.showString("" + (input.compassHeading()))
        }
        if (input.compassHeading() > 315 && input.compassHeading() < 0) {
            music.play(music.stringPlayable("B A G A G F A C5 ", 120), music.PlaybackMode.UntilDone)
            basic.showString("" + (input.compassHeading()))
        }
    }
})
