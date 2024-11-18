//play piano
picobricks.touchInit()
basic.forever(function () {
    picobricks.playPiano(PicoBricksVolumeStatus.Passive, PicoBricksToneStatus.Passive)
})