ItemEvents.tooltip(tooltip => {
	const { translate } = Text
	// 草绳
	tooltip.add('new_create:grass_string', [
		translate('tooltip.new_create.grass_string')
	])

	// 杂草
	tooltip.add('new_create:grass_fiber', [
		translate('tooltip.new_create.grass_fiber')
	])

	// 纯净石英
	tooltip.add('new_create:pure_quartz', [
		translate('tooltip.new_create.pure_quartz')
	])

	// 手枪
	tooltip.add('immersiveengineering:toolupgrade_revolver_electro', [
		translate('tooltip.ie.toolupgrade_revolver_electro')
	])

	// 木棍
	tooltip.add('minecraft:stick', [
		translate('tooltip.mc.stick')
	])

	// 熔化锅
	tooltip.add('melter:melter', [
		translate('tooltip.mt.melter')
	])

	// 燧石工具
	const flintTools = ['sword', 'pickaxe', 'axe', 'handaxe', 'shovel']

	flintTools.forEach(tools => {
		tooltip.add(`new_create:flint_${tools}`, [
			translate('tooltip.new_create.flint_tools')
		])
	})
})