BlockEvents.rightClicked(e => {
	const { player, block, item, entity, hand, server } = e

	rightClickEvents('new_create:log_pile', 'minecraft:fire')
	rightClickEvents('minecraft:campfire', 'minecraft:campfire', { lit: true })

	//Fire!!!!!😡😡😡😡
	function rightClickEvents(blockId, blockSetId) {
		// 原木堆
		if (player.mainHandItem == 'new_create:tinder' &&
			block.id == blockId) {
			block.set(blockSetId)
			item.damageValue += 1
		}

		// 篝火
		if (player.mainHandItem == 'new_create:tinder' &&
			block.id == blockId) {
			block.set(blockSetId)
			item.damageValue += 1
		}
	}
})