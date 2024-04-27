Ponder.registry(e => {
	e.create('melter:melter')
		.scene('melter:melter', '熔化', (scene, utils) => {
			scene.showBasePlate()
			scene.idle(20)
			scene.world.setBlocks([2, 2, 2], 'melter:melter')
			scene.world.showSection([2, 2, 2], Direction.DOWN)
			scene.idle(20)
			scene.text(40, '§b熔化锅可以将内部的物品\n§b融化成特定液体', [2, 3, 2])
			scene.idle(40)

			scene.text(20, '§b只需要将物品从\n§b上方投入融化炉...')
			let sand = scene.world.createItemEntity([2, 5, 2], Direction.DOWN, 'minecraft:sand')
			scene.idle(9)
			scene.world.removeEntity(sand)

			scene.idleSeconds(1)
			scene.world.setBlocks([2, 1, 2], 'minecraft:torch')
			scene.world.showSection([2, 1, 2], Direction.UP)
			scene.text(20, '§b别忘了添加热量', [2, 2, 2])

			scene.idleSeconds(1)
			scene.text(40, '§b等待...')
			scene.idle(20)

			scene.showControls(
				30,
				utils.grid.at(2, 2, 2),
				'down'
			).withItem('new_create:glass_bucket')
		})
})