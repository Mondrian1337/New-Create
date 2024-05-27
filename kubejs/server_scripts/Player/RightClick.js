BlockEvents.rightClicked(e => {
	const { player, block, item } = e
	
	// 原木堆生火
	rightClickCrafting('new_create:log_pile', 'minecraft:fire')

	// 篝火
	rightClickCrafting('minecraft:campfire', 'minecraft:campfire', { lit: true })

	// Fire !!!!!!!!!!!!!😡
	function rightClickCrafting(BlockId, BlockSetId) {
		if (player.offHandItem == 'minecraft:stick' &&
			player.mainHandItem == 'minecraft:flint' &&
			block.id == BlockId) {
			block.set(BlockSetId)
			item.count--
			player.offhandItem.item--
		}

		if (player.offHandItem == 'minecraft:stick' &&
			player.mainHandItem == 'minecraft:flint' &&
			block.id == BlockId) {
			block.set(BlockSetId)
			item.count--
			player.offhandItem.item--
		}

	}
})