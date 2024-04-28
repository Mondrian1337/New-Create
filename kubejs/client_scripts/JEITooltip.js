JEIEvents.information(info => {
	let Info = [
		['melter:melter', 'info.jei.mt.melter']
	]
	Info.forEach(([Name, Key]) => {
		info.addItem(Name, Text.translate(Key))
	})
})