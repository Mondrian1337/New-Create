BlockEvents.leftClicked(e => {
	const { player, block, item, server } = e

	Ingredient.of('#forge:stone').getItemIds().forEach(stoneId => {
		if (player.mainHandItem.id === 'minecraft:flint' && block.id === stoneId) {
			const createEntity = block.createEntity('item')
			item.count--

			let Random = Math.floor(Math.random() * 4) + 1

			createEntity.item = `${Random}x new_create:flint_knapp`
			createEntity.x += 0.5
			createEntity.y += 1
			createEntity.z += 0.5
			createEntity.spawn()
			server.tell(`你敲碎了燧石，获得了${Random}个燧石碎片`)
		}
	})
})