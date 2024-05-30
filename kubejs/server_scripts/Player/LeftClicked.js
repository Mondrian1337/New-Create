let Timeout = false
BlockEvents.leftClicked(e => {
	const { player, block, item, server } = e

	if (Timeout) {
		server.tell('正在敲碎燧石~')
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
				server.tell(`你敲碎了燧石，获得了${Random}个燧石碎片`)
				Timeout = false
			}, 2000);
		}
	})
})