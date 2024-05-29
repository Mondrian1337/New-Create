BlockEvents.leftClicked(e => {
    const { player, block, item } = e
    
    Ingredient.of('#forge:stone').getItemIds().forEach(stoneId => {
        if (player.mainHandItem.id === 'minecraft:flint' && block.id === stoneId) {
            const createEntity = block.createEntity('item')
            item.count--
            
            const random = Math.random();
            let count = 1

            if (random < 0.10) {
                count = 4
            } else if (random < 0.30) {
                count = 3
            } else if (random < 0.60) {
                count = 2
            }

            createEntity.item = `${count}x new_create:flint_knapp`
            createEntity.x += 0.5
            createEntity.y += 1
            createEntity.z += 0.5
            createEntity.spawn()
        }
    })
})
