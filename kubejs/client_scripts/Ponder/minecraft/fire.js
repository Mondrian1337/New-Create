Ponder.registry(e => {
	e.create('minecraft:flint')
		.scene(
			'minecraft:stick',
			'生火',
			'new_create:fire',
			(scene, until) => {
				scene.showBasePlate()
				scene.idle(20)
				scene.world.showSection([1, 1, 1], Direction.down)
				scene.addKeyframe()
				scene.idle(10)
				scene.text(30, '§e左手手持木棍,右手手持燧石', [1, 2, 1])
				scene.idle(20)
				scene.addKeyframe()
				scene.idle(20)
				scene.showControls(
					30,
					until.grid.at(1, 1, 1),
					'left'
				)
					.rightClick()
					.withItem('minecraft:stick')
				scene.showControls(
					30,
					until.grid.at(1, 1, 1),
					'right'
				)
					.rightClick()
					.withItem('minecraft:flint')
				scene.idle(20)
				scene.world.setBlock([1, 1, 1], "minecraft:fire", true)
			}
		)
})