(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var serverSystem = server.registerSystem(0, 0);

// Setup which events to listen for
serverSystem.initialize = function () {
  // set up your listenToEvents and register server-side components here.
  this.registerEventData("legendaryaddon:open_ui", {
    ui: "error.html",
    player: null });

  this.listenForEvent("minecraft:entity_use_item", eventData => {
    if (eventData.data.entity.__identifier__ === "minecraft:player") {
      if (eventData.data.item_stack.item === "legendaryaddon:ui_opener") {
        let openUiEventData = this.createEventData("legendaryaddon:open_ui");
        /*
                                                                              openUiEventData.data = {
                                                                              	ui: "myfirstui.html",
                                                                              	player: eventData.entity.id
                                                                              }
                                                                              */
        openUiEventData.data.ui = "myfirstui.html";
        openUiEventData.data.player = eventData.entity.id;
        this.broadcastEvent("legendaryaddon:open_ui", openUiEventData);
      }
    }
  });
};

// per-tick updates
serverSystem.update = function () {
  // Any logic that needs to happen every tick on the server.
};

},{}]},{},[1]);
