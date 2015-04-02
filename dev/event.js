var callbacks = [];

function JSEvent(event, callback) {
    callbacks.push({event: event, callback: callback});
}

function JSEvent(event) {}

JSEvent.prototype.emit = function() {
    callbacks.forEach(function(e) {
        if (JSEvent.prototype.event == e.event) {
            e.callback(e);
        }
    });
}

JSEvent.on = function(event, callback) {
    callbacks.push({event: event, callback: callback});
}

JSEvent.emit = function(event) {
    callbacks.forEach(function(e) {
        if (event == e.event) {
            e.callback(e);
        }
    });
}