StartupEvents.registry('item', e => {
	let Item = (
		Name, // Item id
		Maxstacksize, // 最大堆叠数
		Rarity,// 稀有度
		Glow // 是否发光
	) => {
		e.create(Name)
			.maxStackSize(Maxstacksize)
			.rarity(Rarity)
			.glow(Glow)
	}
	// 小燧石
	Item('flint_knapp', 64, 'uncommon', false)
	// 彩虹锭
	Item('rainbow_ingot', 64, 'epic', false)
	// 彩虹月币
	Item('rainbow_mooncoin', 16, 'epic', false)
	// 月币
	Item('mooncoin', 16, 'rare', false)
	// 安山混合物
	Item('andesite_compound', 64, 'common', false)
	// 草绳
	Item('grass_string', 64, 'common', false)
	// 杂草
	Item('grass_fiber', 64, 'common', false)
	// 0 coin
	Item('0', 64, 'uncommon', false)
	// 1 coin
	Item('1', 64, 'uncommon', false)
	// 2 coin
	Item('2', 64, 'uncommon', false)
	// 3 coin
	Item('3', 64, 'uncommon', false)
	// 4 coin
	Item('4', 64, 'uncommon', false)
	// 5 coin
	Item('5', 64, 'uncommon', false)
	// 6 coin
	Item('6', 64, 'uncommon', false)
	// 7 coin
	Item('7', 64, 'uncommon', false)
	// 8 coin
	Item('8', 64, 'uncommon', false)
	// 9 coin
	Item('9', 64, 'uncommon', false)
	//未完成的小齿轮
	Item('in_cogwheel', 64, 'common', false)
	//未完成的大齿轮
	Item('in_large_cogwheel', 64, 'common', false)
	// 铸铁锭
	Item('cast_iron_ingot', 64, 'common', false)
	// 轴承
	Item('primary_bearing', 64, 'common', false)
	// 铸铁板
	Item('cast_iron_sheet', 64, 'common', false)
	// 碳板
	Item('carbon_plate', 64, 'common', false)
	// 碳棒
	Item('carbon_rod', 64, 'common', false)
	// 焦煤棒
	Item('coking_coal_rod', 64, 'common', false)
	// abstruse_mechanism
	Item('abstruse_mechanism', 64, 'common', false)
	// calculation_mechanism
	Item('calculation_mechanism', 64, 'common', false)
	// computer_mechanism
	Item('computer_mechanism', 64, 'common', false)
	// inductive_mechanism
	Item('inductive_mechanism', 64, 'common', false)
	// infernal_mechanism
	Item('infernal_mechanism', 64, 'common', false)
	// kinetic_mechanism
	Item('kinetic_mechanism', 64, 'common', false)
	// sealed_mechanism
	Item('sealed_mechanism', 64, 'common', false)
	// sturdy_mechanism
	Item('sturdy_mechanism', 64, 'common', false)
	// 锌电子管
	Item('zinc_electron_tube', 64, 'common', false)
	// 铸铁电子管
	Item('cast_electron_tube', 64, 'common', false)
	// 电镀锌
	Item('plating_zinc_ingot', 64, 'common', false)
	// 烈焰人的头
	Item('blaze_head', 64, 'uncommon', false)
	//冲压磨具-块
	Item('mold_block', 1, 'common', false)
	// 半成品注册
	let In_Item = (Name) => { e.create(Name, 'create:sequenced_assembly') }
	In_Item('in_abstruse_mechanism')
	In_Item('in_calculation_mechanism')
	In_Item('in_inductive_mechanism')
	In_Item('in_infernal_mechanism')
	In_Item('in_kinetic_mechanism')
	In_Item('in_sealed_mechanism')
	In_Item('in_sturdy_mechanism')
})