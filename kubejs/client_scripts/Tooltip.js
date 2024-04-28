ItemEvents.tooltip(tooltip => {
	let Tooltip = [
		// 草绳
		['new_create:grass_string', 'tooltip.nc.grass_string'],
		// 杂草
		['new_create:grass_fiber', 'tooltip.nc.grass_fiber'],
		// 纯净石英
		['new_create:pure_quartz', 'tooltip.nc.pure_quartz'],
		// 手枪
		['immersiveengineering:toolupgrade_revolver_electro', 'tooltip.ie.toolupgrade_revolver_electro'],
		// 木棍
		['minecraft:stick', 'tooltip.mc.stick'],
		// 熔化锅
		['melter:melter', 'tooltip.mt.melter']
	]
	Tooltip.forEach(([Name, Key]) => {
		tooltip.add(Name, [Text.translate(Key)])
	})

	// 燧石工具
	const flintTools = ['sword', 'pickaxe', 'axe', 'handaxe', 'shovel']

	flintTools.forEach(tools => {
		tooltip.add(`new_create:flint_${tools}`, [
			Text.translate('tooltip.nc.flint_tools')
		])
	})
})