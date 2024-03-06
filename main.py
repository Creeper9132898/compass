def on_button_pressed_ab():
    basic.show_number(input.compass_heading())
    if input.compass_heading() > 0 and input.compass_heading() < 45:
        music.play(music.string_playable("C5 B A G F E D C ", 120),
            music.PlaybackMode.UNTIL_DONE)
    if input.compass_heading() > 45 and input.compass_heading() < 90:
        music.play(music.string_playable("C5 A B G A F G E ", 120),
            music.PlaybackMode.UNTIL_DONE)
    if input.compass_heading() > 90 and input.compass_heading() < 135:
        music.play(music.string_playable("C D E F G A B C5 ", 120),
            music.PlaybackMode.UNTIL_DONE)
    if input.compass_heading() > 135 and input.compass_heading() < 180:
        music.play(music.string_playable("G B A G C5 B A B ", 120),
            music.PlaybackMode.UNTIL_DONE)
    if input.compass_heading() > 180 and input.compass_heading() < 225:
        music.play(music.string_playable("E B C5 A B G A F ", 120),
            music.PlaybackMode.UNTIL_DONE)
    if input.compass_heading() > 225 and input.compass_heading() < 270:
        music.play(music.string_playable("G B A G C5 B A B ", 120),
            music.PlaybackMode.UNTIL_DONE)
    if input.compass_heading() > 270 and input.compass_heading() < 315:
        music.play(music.string_playable("A F E F D G E F ", 120),
            music.PlaybackMode.UNTIL_DONE)
    if input.compass_heading() > 315 and input.compass_heading() < 0:
        music.play(music.string_playable("B A G A G F A C5 ", 120),
            music.PlaybackMode.UNTIL_DONE)
input.on_button_pressed(Button.AB, on_button_pressed_ab)
