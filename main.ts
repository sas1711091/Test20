music.setVolume(255)
basic.forever(function () {
    serial.writeLine("" + (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )))
    basic.showNumber(sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ))
})
basic.forever(function () {
    music.playTone(659, music.beat(BeatFraction.Half))
    basic.pause(200)
    music.playTone(622, music.beat(BeatFraction.Half))
    basic.pause(200)
    music.playTone(659, music.beat(BeatFraction.Half))
    basic.pause(200)
    music.playTone(622, music.beat(BeatFraction.Half))
    basic.pause(200)
    music.playTone(659, music.beat(BeatFraction.Half))
    basic.pause(200)
    music.playTone(494, music.beat(BeatFraction.Half))
    basic.pause(200)
    music.playTone(587, music.beat(BeatFraction.Half))
    basic.pause(200)
    music.playTone(523, music.beat(BeatFraction.Half))
    basic.pause(200)
    music.playTone(440, music.beat(BeatFraction.Whole))
    basic.pause(200)
})
