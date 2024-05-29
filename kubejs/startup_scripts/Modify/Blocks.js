BlockEvents.modification(e => {
	// Fix
	e.modify('melter:melter', modify => {
		modify.destroySpeed = 1
	})
})
BlockEvents.modification(e => {
	let woodsNameSpace = [
		'dark_oak', 'oak', 'acacia', 'birch', 'jungle',
		'spruce', 'mangrove', 'cherry', 'coconut', 'walnut',
		'azalea', 'flowering_azalea', 'glacian', 'crimson', 'warped',
		'rubberwood', 'rose', 'smoked', 'spirit', 'rubber',
		'walnut', 'fig', 'wolfberry'
	]

	let additionalWoods = [
		'crimson_stem', 'stripped_crimson_stem', 'crimson_hyphae', 'stripped_crimson_hyphae',
		'warped_stem', 'stripped_warped_stem', 'warped_hyphae', 'stripped_warped_hyphae'
	]

	function modifyLogs(names) {
		names.forEach(name => {
			e.modify(`minecraft:${name}`, modify => {
				modify.requiresTool = true;
			})
		})
	}

	let logNames = woodsNameSpace.flatMap(type => [
		`${type}_log`,
		`${type}_wood`,
		`stripped_${type}_log`,
		`stripped_${type}_wood`
	])

	modifyLogs(logNames)
	modifyLogs(additionalWoods)
})
