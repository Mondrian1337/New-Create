BlockEvents.rightClicked(e => {
	const { player, block, item, server } = e
	if (player.offHandItem == 'minecraft:stick' &&
		player.mainHandItem == 'minecraft:flint' &&
		block.id == 'minecraft:coal_block') {
		block.set('minecraft:fire')
		item.count--
		player.runCommandSilent('item replace entity @s weapon.offhand with air')
	}
})

ItemEvents.rightClicked(e => {
	const { hand, item, player, server } = e
	if (player.mainHandItem == 'minecraft:air') return;
	const ItemID = item.id
	if (player.shiftKeyDown) {
		if (player.mainHandItem.id == ItemID) {
			player.runCommandSilent('kubejs hand')
		}
	}

	if (player.mainHandItem == 'minecraft:air') return;
	if (player.mainHandItem == 'minecraft:diamond') {
		server.runCommandSilent('tellraw @a "正在重新加载ing...q(≧▽≦q)"')
		player.runCommandSilent('reload')

	}
})

PlayerEvents.loggedIn(e => {
	const { server } = e
	server.runCommandSilent(`tellraw @a "欢迎${e.player.username}来到New Create !!!"`)
})
