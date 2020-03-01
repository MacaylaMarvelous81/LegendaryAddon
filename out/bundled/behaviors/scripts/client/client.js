(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var clientSystem = client.registerSystem(0, 0);
var player;

// Setup which events to listen for
clientSystem.initialize = function () {
  // set up your listenToEvents and register client-side components here.
  this.listenForEvent("minecraft:client_enter_world", eventData => {
    player = eventData.data.player.id;
  });
  this.listenForEvent("legendaryaddon:open_ui", eventData => {
    if (true) {
      let loadUiEventData = this.createEventData("minecraft:load_ui");
      loadUiEventData.data.path = eventData.data.ui;
      this.broadcastEvent("minecraft:load_ui", loadUiEventData);
    }
  });
};

// per-tick updates
clientSystem.update = function () {
  // Any logic that needs to happen every tick on the client.
};

},{}]},{},[1]);
