BlockEvents.rightClicked(e => {
	const { player, block, item } = e

	// 煤炭块生火
	if (player.offHandItem == 'minecraft:stick' &&
		player.mainHandItem == 'minecraft:flint' &&
		block.id == 'minecraft:coal_block') {
		block.set('minecraft:fire')
		item.count--
		player.offhandItem.item--
	}

	// 篝火
	if (player.offHandItem == 'minecraft:stick' &&
		player.mainHandItem == 'minecraft:flint' &&
		block.id == 'minecraft:campfire') {
		block.set('minecraft:campfire', { lit: true })
		item.count--
		player.offhandItem.item--
	}
})