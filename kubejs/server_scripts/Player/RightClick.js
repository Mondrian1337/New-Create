BlockEvents.rightClicked(e => {
	const { player, block, item } = e

	// Fire!!!!!😡😡😡😡
	let RightClickEvents = (BlockId, BlockSetId) => {
		if (player.mainHandItem == 'new_create:tinder' &&
			block.id == BlockId) {
			block.set(BlockSetId)
			item.damageValue += 1
		}
	}
	RightClickEvents('new_create:log_pile', 'minecraft:fire')
	RightClickEvents('minecraft:campfire', 'minecraft:campfire', { lit: true })
})