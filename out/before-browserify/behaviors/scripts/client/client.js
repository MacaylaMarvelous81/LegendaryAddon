var clientSystem = client.registerSystem(0, 0);
var player

// Setup which events to listen for
clientSystem.initialize = function () {
	// set up your listenToEvents and register client-side components here.
	this.listenForEvent("minecraft:client_enter_world", (eventData) => {
		player = eventData.data.player.id
	})
	this.listenForEvent("legendaryaddon:open_ui", (eventData) => {
		if(true) {
			let loadUiEventData = this.createEventData("minecraft:load_ui")
			loadUiEventData.data.path = eventData.data.ui
			this.broadcastEvent("minecraft:load_ui", loadUiEventData)
		}
	})
}

// per-tick updates
clientSystem.update = function () {
	// Any logic that needs to happen every tick on the client.
}
