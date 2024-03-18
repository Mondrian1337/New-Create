StartupEvents.registry('item', e => {
	let Item = [
		// 燧石碎片
		['flint_knapp', 64, 'uncommon', false],
		// 彩虹锭
		['rainbow_ingot', 64, 'epic', false],
		// 塑料板
		['plastic_sheet', 64, 'common', false],
		// 冲压模具-块
		['mold_block', 1, 'common', false],
		// 烈焰人的头
		['blaze_head', 64, 'uncommon', false],
		// 电镀锌
		['plating_zinc_ingot', 64, 'common', false],
		// 铸铁电子管
		['cast_electron_tube', 64, 'common', false],
		// 锌电子管
		['zinc_electron_tube', 64, 'common', false],
		// 
		['sturdy_mechanism', 64, 'common', false],
		//
		['sealed_mechanism', 64, 'common', false],
		//
		['kinetic_mechanism', 64, 'common', false],
		// 彩虹月币
		['rainbow_mooncoin', 16, 'epic', false],
		// 月币
		['mooncoin', 16, 'rare', false],
		// 安山混合物
		['andesite_compound', 64, 'common', false],
		// 草绳
		['grass_string', 64, 'common', false],
		// 杂草
		['grass_fiber', 64, 'common', false],
		['0', 64, 'uncommon', false],
		['2', 64, 'uncommon', false],
		['3', 64, 'uncommon', false],
		['4', 64, 'uncommon', false],
		['5', 64, 'uncommon', false],
		['6', 64, 'uncommon', false],
		['7', 64, 'uncommon', false],
		['8', 64, 'uncommon', false],
		['9', 64, 'uncommon', false],
		// 齿轮(未完成)
		['in_cogwheel', 64, 'common', false],
		// 大齿轮(未完成)
		['in_large_cogwheel', 64, 'common', false],
		// 铸铁锭
		['cast_iron_ingot', 64, 'common', false],
		// 
		['primary_bearing', 64, 'common', false],
		// 铸铁板
		['cast_iron_sheet', 64, 'common', false],
		// 碳板
		['carbon_plate', 64, 'common', false],
		// 碳棒
		['carbon_rod', 64, 'common', false],
		// 
		['coking_coal_rod', 64, 'common', false],
		// 
		['abstruse_mechanism', 64, 'common', false],
		//
		['calculation_mechanism', 64, 'common', false],
		//
		['computer_mechanism', 64, 'common', false],
		//
		['inductive_mechanism', 64, 'common', false],
		//
		['infernal_mechanism', 64, 'common', false]
	]
	Item.forEach(([
		Name,
		Maxstacksize,
		Rarity,
		Glow
	]) => {
		e.create(Name)
			.maxStackSize(Maxstacksize)
			.rarity(Rarity)
			.glow(Glow)
	})
	// 半成品注册
	let In_Item = [
		['in_abstruse_mechanism'],
		['in_calculation_mechanism'],
		['in_inductive_mechanism'],
		['in_infernal_mechanism'],
		['in_kinetic_mechanism'],
		['in_sealed_mechanism'],
		['in_sturdy_mechanism']
	]
	In_Item.forEach((Name) => { e.create(Name, 'create:sequenced_assembly') })
})