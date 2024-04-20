BlockEvents.rightClicked(e => {
	const { player, block, item } = e
	if (player.offHandItem == 'minecraft:stick' &&
		player.mainHandItem == 'minecraft:flint' &&
		block.id == 'minecraft:coal_block') {
		block.set('minecraft:fire')
		item.count--
		player.runCommandSilent('item replace entity @s weapon.offhand with air')
	}
})