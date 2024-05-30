BlockEvents.leftClicked(e => {
	const { player, block, item, server } = e
	let Timeout = false

	if (Timeout) {
		server.tell(Text.translatable('info.nc.flint'))
		return
	}
	Ingredient.of('#forge:stone').getItemIds().forEach(stoneId => {
		if (player.mainHandItem.id === 'minecraft:flint' && block.id === stoneId) {
			var Entity = block.createEntity('item')

			let Random = Math.floor(Math.random() * 4) + 1

			Timeout = true
			setTimeout(() => {
				item.count--
				Entity.item = `${Random}x new_create:flint_knapp`
				Entity.x += 0.5
				Entity.y += 1
				Entity.z += 0.5
				Entity.spawn()
				Timeout = false
			}, 2000)
		}
	})
})