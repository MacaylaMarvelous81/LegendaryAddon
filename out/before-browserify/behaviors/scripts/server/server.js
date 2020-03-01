var serverSystem = server.registerSystem(0, 0);

// Setup which events to listen for
serverSystem.initialize = function () {
	// set up your listenToEvents and register server-side components here.
	this.registerEventData("legendaryaddon:open_ui", {
		ui: "error.html",
		player: null
	})
	this.listenForEvent("minecraft:entity_use_item", (eventData) => {
		if(eventData.data.entity.__identifier__ === "minecraft:player") {
			if(eventData.data.item_stack.item === "legendaryaddon:ui_opener") {
				let openUiEventData = this.createEventData("legendaryaddon:open_ui")
				/*
				openUiEventData.data = {
					ui: "myfirstui.html",
					player: eventData.entity.id
				}
				*/
				openUiEventData.data.ui = "myfirstui.html"
				openUiEventData.data.player = eventData.entity.id
				this.broadcastEvent("legendaryaddon:open_ui", openUiEventData)
			}
		}
	})
}

// per-tick updates
serverSystem.update = function () {
	// Any logic that needs to happen every tick on the server.
}
