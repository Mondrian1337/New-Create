ItemEvents.rightClicked(e => {
    if (e.player.mainHandItem == 'minecraft:stick' && e.player.mainHandItem != 'minecraft:air') {
        let BlockID = []
        Ingredient.of('#minecraft:logs').getItemIds().forEach(id => {
            BlockID.push(id)
            console.log(BlockID)
        })
        BlockID.forEach(block => {
            console.log(block)
        })
    }
})