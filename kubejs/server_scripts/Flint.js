BlockEvents.rightClicked(e => {
    const { player, block} = e
    const c = player.mainHandItem
    if (c == 'minecraft:air') return
    if (c == 'minecraft:flint' && block.getId == 'minecraft:stone') {
        let createEntity = block.createEntity('item')
        createEntity.item = 'new_create:flint_knapp'
        createEntity.x += 0.5
        createEntity.y += 1
        createEntity.z += 0.5
        createEntity.spawn()
        c.item--
    }
})