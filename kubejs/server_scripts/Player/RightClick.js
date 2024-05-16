BlockEvents.rightClicked(e => {
	const { player, block, item } = e

	// 煤炭块生火
	if (player.offHandItem == 'minecraft:stick' &&
		player.mainHandItem == 'minecraft:flint' &&
		block.id == 'minecraft:coal_block') {
		block.set('minecraft:fire')
		item.count--
		player.runCommandSilent('item replace entity @s weapon.offhand with air')
	}

	// 篝火
	if (player.offHandItem == 'minecraft:stick' &&
		player.mainHandItem == 'minecraft:flint' &&
		block.id == 'minecraft:campfire') {
		block.set('minecraft:campfire', { lit: true })
		item.count--
		player.runCommandSilent('item replace entity @s weapon.offhand with air')
	}
})