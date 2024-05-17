Ponder.registry(e => {
	e.create('#caupona:stew_pot')
		.scene('caupona:stew_pot', '煮沸', 'new_create:stew_pot', scene => {
			scene.showBasePlate()
			scene.idle(20)
			scene.world.showSection([1, 1, 1], Direction.down)
			scene.idle(5)
			scene.world.showSection([1, 2, 1], Direction.down)
			scene.idle(5)
			scene.overlay.showOutline('red', {}, [1, 2, 1], 20)
			scene.idle(20)
			scene.addKeyframe()
			scene.overlay.showOutline('blue', {}, [1, 1, 1], 20)
			scene.text(15, '§b向内部添加燃料', [1, 2, 1])
			scene.idle(20)
		})
})