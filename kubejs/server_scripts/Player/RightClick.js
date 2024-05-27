BlockEvents.rightClicked(e => {
	const { player, block, item, entity, hand, server } = e

	// 原木堆
	if (player.mainHandItem == 'new_create:tinder' &&
		block.id == 'new_create:log_pile') {
		block.set('minecraft:fire')
		item.damageValue += 1
	}

	// 篝火
	if (player.mainHandItem == 'new_create:tinder' &&
		block.id == 'minecraft:campfire') {
		block.set('minecraft:campfire', { lit: true })
		item.damageValue += 1
	}
})