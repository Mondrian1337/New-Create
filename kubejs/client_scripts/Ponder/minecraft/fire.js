Ponder.registry(e => {
	e.create(['new_create:log_pile', 'minecraft:flint', 'minecraft:stick'])
		.scene('minecraft:stick', '生火', (scene, until) => {
			scene.showBasePlate()
			scene.idle(20)
			scene.world.setBlocks([2, 1, 2], 'new_create:log_pile')
			scene.world.showSection([2, 1, 2], Direction.DOWN)
			scene.addKeyframe()
			scene.idle(10)
			scene.text(30, '§e左手手持木棍\n§e右手手持燧石', [2, 2, 2])
			scene.idle(20)
			scene.addKeyframe()
			scene.idle(20)
			scene.showControls(
				30,
				until.grid.at(2, 1, 2),
				'left'
			).rightClick().withItem('minecraft:stick')
			scene.showControls(
				30,
				until.grid.at(2, 1, 2),
				'right'
			).rightClick().withItem('minecraft:flint')
			scene.idle(20)
			scene.world.setBlocks([2, 1, 2], 'minecraft:fire')
			scene.idle(20)
		})
})