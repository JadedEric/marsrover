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
            function deploy(location, grid, direction) {
                if (location === void 0) { location = { x: 0, y: 0 }; }
                if (grid === void 0) { grid = { x: 0, y: 0 }; }
                if (direction === void 0) { direction = "N"; }
                this.directions = ["N", "E", "S", "W"];
                this.location = location;
                this.grid = grid;
                this.direction = direction;
            }
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