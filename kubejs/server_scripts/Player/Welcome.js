PlayerEvents.loggedIn(e => {
	const { server, player } = e
	server.runCommandSilent(`tellraw @a "Welcome ${player.username} to the New Create!"`)
})