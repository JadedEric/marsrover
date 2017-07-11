/// <reference path="typings/jquery.d.ts" />
var mars;
(function (mars) {
    var rover;
    (function (rover) {
        "use strict";
        var deploy = (function () {
            /**
             * constructs a new instance of the rover deployment
             * @param location
             * @param grid
             */
            function deploy() {
                var _this = this;
                this.directions = ["N", "E", "S", "W"];
                jQuery(document).on("click", "#deploy-rover", function (e) {
                    var user_location_x = Number(jQuery("#location-x").val()), user_location_y = Number(jQuery("#location-y").val()), user_grid_x = Number(jQuery("#grid-x").val()), user_grid_y = Number(jQuery("#grid-y").val()), user_location = jQuery("[name=rover-direction]:checked").val(), user_commands = jQuery("#commands-text").val().split(""), location = { x: user_location_x || 1, y: user_location_y || 2 }, grid = { x: user_grid_x || 8, y: user_grid_y || 8 }, direction = user_location || "E", commands = user_commands || ["M", "M", "L", "M", "R", "M", "M", "R", "R", "M", "M", "L"], deploy;
                    debugger;
                    deploy = _this.init(location, grid, direction).set(commands);
                    deploy.start();
                    jQuery("#output").html("<strong>Rover landed at: </strong>" + deploy.getLocation().x + " " + deploy.getLocation().y + " " + deploy.getDirection());
                });
            }
            deploy.prototype.init = function (location, grid, direction) {
                if (location === void 0) { location = { x: 0, y: 0 }; }
                if (grid === void 0) { grid = { x: 0, y: 0 }; }
                if (direction === void 0) { direction = "N"; }
                this.location = location;
                this.grid = grid;
                this.direction = direction;
                return this;
            };
            /**
             * sets a string array of commands
             * @param commands
             */
            deploy.prototype.set = function (commands) {
                if (commands === void 0) { commands = ["M"]; }
                this.commands = commands;
                return this;
            };
            /**
             * starts the deploy remotely
             */
            deploy.prototype.start = function () {
                if (this.commands === undefined) {
                    return this;
                }
                else {
                    for (var i = 0; i < this.commands.length; i++) {
                        var command = this.commands[i].toLowerCase();
                        if (command === "m") {
                            this.move();
                        }
                        else if (command === "l" || command === "r") {
                            this.turn(command);
                        }
                    }
                    this.reset();
                }
            };
            deploy.prototype.getLocation = function () {
                return this.location;
            };
            deploy.prototype.getDirection = function () {
                return this.direction;
            };
            deploy.prototype.reset = function () {
                this.location = {
                    x: (this.location.x + this.grid.x) % this.grid.x,
                    y: (this.location.y + this.grid.y) % this.grid.y
                };
            };
            deploy.prototype.move = function () {
                var x = 0, y = 0, direction = this.direction.toLowerCase();
                switch (direction) {
                    case "n": {
                        y = 1;
                        break;
                    }
                    case "e": {
                        x = 1;
                        break;
                    }
                    case "w": {
                        x = -1;
                        break;
                    }
                    case "s": {
                        y = -1;
                        break;
                    }
                    default: {
                        break;
                    }
                }
                this.location = {
                    x: this.location.x + x,
                    y: this.location.y + y
                };
            };
            deploy.prototype.turn = function (command) {
                var direction = this.toNumber(this.direction);
                if (command === "l") {
                    direction = (direction + 4 - 1) % 4;
                }
                else {
                    direction = (direction + 1) % 4;
                }
                var setdirection = this.directions[direction];
                this.direction = setdirection;
            };
            deploy.prototype.toNumber = function (direction) {
                for (var i = 0; i < this.directions.length; i++) {
                    var dir = this.directions[i];
                    if (this.directions[i] === direction) {
                        return i;
                    }
                }
            };
            return deploy;
        }());
        rover.deploy = deploy;
    })(rover = mars.rover || (mars.rover = {}));
})(mars || (mars = {}));
//# sourceMappingURL=rover.js.map