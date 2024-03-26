StartupEvents.registry('item', e => {
	let Tool = [
		// 燧石剑
		['flint_sword', 'sword', 1, 100, 2, 0],
		// 燧石镐
		['flint_pickaxe', 'pickaxe', -2, 100, 2, 0],
		// 燧石斧
		['flint_axe', 'axe', 1.5, 100, 2, 0],
		// 燧石短柄斧
		['flint_handaxe', 'axe', -1, 40, 2, 0],
		// 燧石锹
		['flint_shovel', 'shovel', -2, 80, 2, 0],
		// 石锤
		['stone_hammer', 'pickaxe', 5, 400, 2, 1],
		// 铁锤
		['iron_hammer', 'pickaxe', 5, 800, 1.0, 2],
		// 钻石锤
		['diamond_hammer', 'pickaxe', 5, 1600, 1.0, 3],
		// 燧石锯子
		['flint_saw', 'axe', 5, 200, 1.0, 0],
		// 铁锯子
		['iron_saw', 'axe', 5, 400, 1.0, 2],
		// 钻石锯子
		['diamond_saw', 'axe', 5, 1200, 1.0, 3],
		// 青铜镐
		['bronze_pickaxe', 'pickaxe', 1, 650, 1.0, 2]

	]
	Tool.forEach(([
		Name, // Item id
		Type, // 工具类型
		Damage, // 基础伤害(所填数值+3=游戏内面板)
		Use, // 耐久
		Speed, // 挖掘速度
		Setlevel // 工具等级
	]) => {
		e.create(Name, Type)
			.attackDamageBaseline(Damage)
			.unstackable()
			.modifyTier(tier => {
				tier.uses = Use
				tier.speed = Speed
				tier.setLevel(Setlevel)
			})
	})
})