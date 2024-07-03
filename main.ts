input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
let player: game.LedSprite = null
game.setScore(0)
game.setLife(3)
player = game.createSprite(2, 4)
basic.forever(function () {
	
})
