// 欢迎
PlayerEvents.loggedIn(e => {
	const { server } = e
	server.runCommandSilent(`tellraw @a "Welcome ${e.player.username} to the New Create!!!"`)
	server.runCommandSilent(`tellraw "感谢${e.player.username}游玩本整合包!!!"`)
})