ServerEvents.recipes(event => {
	const logIDs = Ingredient.of('#minecraft:logs').getItemIds()
	const Recipes = logIDs.map(logID => {
		const [namespace, item] = logID.split(':')
		const strippedLogID = `${namespace}:stripped_${item}`
		return {
			type: "farmersdelight:cutting",
			ingredients: [{ item: logID }],
			result: [
				{ item: strippedLogID },
				{ item: "farmersdelight:tree_bark" }
			],
			tool: {
				type: "farmersdelight:tool_action",
				action: "pickaxe_dig"
			}
		}
	})
	Recipes.forEach(recipe => event.custom(recipe))
})