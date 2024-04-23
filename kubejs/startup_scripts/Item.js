StartupEvents.registry('item', e => {
	const ModID = 'new_create:'
	let Item = [
		// 燧石碎片
		['flint_knapp', 64, 'common', false],
		// 彩虹锭
		['rainbow_ingot', 64, 'epic', false],
		// 塑料板
		['plastic_sheet', 64, 'common', false],
		// 冲压模具-块
		['mold_block', 1, 'common', false],
		// 电镀锌
		['plating_zinc_ingot', 64, 'common', false],
		// 铸铁电子管
		['cast_electron_tube', 64, 'common', false],
		// 锌电子管
		['zinc_electron_tube', 64, 'common', false],
		// 坚固构件
		['sturdy_mechanism', 64, 'common', false],
		// 密封构件
		['sealed_mechanism', 64, 'common', false],
		// 动力构件
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
		// 合成轴承
		['primary_bearing', 64, 'common', false],
		// 铸铁板
		['cast_iron_sheet', 64, 'common', false],
		// 碳板
		['carbon_plate', 64, 'common', false],
		// 碳棒
		['carbon_rod', 64, 'common', false],
		// 焦煤棒
		['coking_coal_rod', 64, 'common', false],
		// 纯净石英
		['pure_quartz', 64, 'uncommon', false],
		// 幽静构件
		['abstruse_mechanism', 64, 'common', false],
		// 计算构件
		['calculation_mechanism', 64, 'common', false],
		// 电脑构件
		['computer_mechanism', 64, 'common', false],
		// 电磁构件
		['inductive_mechanism', 64, 'common', false],
		// 下界构件
		['infernal_mechanism', 64, 'common', false],
	]
	Item.forEach(([Name, Maxstacksize, Rarity, Glow]) => {
		e.create(ModID + Name)
			.maxStackSize(Maxstacksize)
			.rarity(Rarity)
			.glow(Glow)
			.tag(ModID + 'items')
	})
	// 半成品注册
	let In_Item = [
		// 幽静构件(未完成)
		['in_abstruse_mechanism'],
		// 计算构件(未完成)
		['in_calculation_mechanism'],
		// 电磁构件(未完成)
		['in_inductive_mechanism'],
		// 下届构件(未完成)
		['in_infernal_mechanism'],
		// 动力构件(未完成)
		['in_kinetic_mechanism'],
		// 密封构件(未完成)
		['in_sealed_mechanism'],
		//坚固构件(未完成)
		['in_sturdy_mechanism']
	]
	In_Item.forEach(([Name]) => {
		e.create(ModID + Name, 'create:sequenced_assembly')
			.tag(ModID + 'items')
	})
})