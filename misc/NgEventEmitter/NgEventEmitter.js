'use strict';
var NgEventEmitterService = (function () {
  function NgEventEmitterService($rootScope) {
    this.$rootScope = $rootScope;
    this.onetimeEvents = [];
    this.events = [];
  }
  NgEventEmitterService.prototype.On = function (eventName, fn, isOnetime) {
    var deregFn = this.$rootScope.$on(eventName, fn);
    if (isOnetime) {
      this.onetimeEvents.push({ eventName: eventName, deregFn: deregFn });
      console.info("Subscribed once on event \"" + eventName + "\"");
    }
    else {
      this.events.push({ eventName: eventName, fn: fn, deregFn: deregFn });
      console.info("Subscribed on event \"" + eventName + "\"");
    }
    return deregFn;
  };
  NgEventEmitterService.prototype.Off = function (eventName, fn, isOnetime) {
    var event = this.events.filter(function (e) { return e.eventName === eventName && e.fn === fn; });
    return event.length ? this.off(event[0], isOnetime ? this.onetimeEvents : this.events) : false;
  };
  NgEventEmitterService.prototype.off = function (event, store) {
    try {
      event.deregFn();
      store.splice(store.indexOf(event), 1);
      console.info("Unsubscribed on event \"" + event.eventName + "\"");
      return true;
    }
    catch (err) {
      throw new Error("Unsubscribe on event \"" + event.eventName + "\" is failed");
    }
  };
  NgEventEmitterService.prototype.Once = function (eventName, fn) {
    this.On(eventName, fn, true);
  };
  NgEventEmitterService.prototype.Emit = function (eventName, data) {
    this.$rootScope.$emit(eventName, data);
    var onetimeEvent = this.onetimeEvents.filter(function (e) { return e.eventName === eventName; });
    onetimeEvent.length && this.off(onetimeEvent[0], this.onetimeEvents);
  };
  return NgEventEmitterService;
}());
