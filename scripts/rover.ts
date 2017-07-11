/// <reference path="typings/jquery.d.ts" />

namespace mars.rover {
    "use strict";

    export interface ilocation {
        x: number;
        y: number;
    }

    export interface igrid {
        x: number;
        y: number;
    }

    export class deploy {

        private location: ilocation;
        private grid: igrid;
        private direction: string;

        private directions: string[] = ["N", "E", "S", "W"];

        private commands: string[];

        /**
         * constructs a new instance of the rover deployment
         * @param location 
         * @param grid
         */
        constructor() {

            jQuery(document).on("click", "#deploy-rover", (e) => {

                let user_location_x: number = Number(jQuery("#location-x").val()),
                    user_location_y: number = Number(jQuery("#location-y").val()),
                    user_grid_x: number = Number(jQuery("#grid-x").val()),
                    user_grid_y: number = Number(jQuery("#grid-y").val()),
                    user_location: string = jQuery("[name=rover-direction]:checked").val(),
                    user_commands: string[] = jQuery("#commands-text").val().split(""),
                    location: ilocation = { x: user_location_x || 1, y: user_location_y || 2 },
                    grid: igrid = { x: user_grid_x || 8, y: user_grid_y || 8 },
                    direction: string = user_location || "E",
                    commands: string[] = user_commands || ["M", "M", "L", "M", "R", "M", "M", "R", "R", "M", "M", "L"],
                    deploy: mars.rover.deploy;

                debugger;

                deploy = this.init(location, grid, direction).set(commands);
                deploy.start();

                jQuery("#output").html("<strong>Rover landed at: </strong>" + deploy.getLocation().x + " " + deploy.getLocation().y + " " + deploy.getDirection());

            });
        }

        public init(location: ilocation = { x: 0, y: 0 }, grid: igrid = { x: 0, y: 0 }, direction: string = "N"): mars.rover.deploy {
            this.location = location;
            this.grid = grid;
            this.direction = direction;

            return this;
        }

        /**
         * sets a string array of commands
         * @param commands
         */
        public set(commands: string[] = ["M"]): mars.rover.deploy {
            this.commands = commands;
            
            return this;
        }

        /**
         * starts the deploy remotely
         */
        public start() {
            
            if (this.commands === undefined) {
                return this;
            }
            else {
                for (let i: number = 0; i < this.commands.length; i++) {
                    let command = this.commands[i].toLowerCase();

                    if (command === "m") {
                        this.move();
                    }
                    else if (command === "l" || command === "r") {
                        this.turn(command)
                    }
                }

                this.reset();
            }
        }

        public getLocation(): ilocation {
            return this.location;
        }

        public getDirection(): string {
            return this.direction;
        }

        private reset() {
            this.location = {
                x: (this.location.x + this.grid.x) % this.grid.x,
                y: (this.location.y + this.grid.y) % this.grid.y
            };
        }

        private move() {
            var x: number = 0,
                y: number = 0,
                direction: string = this.direction.toLowerCase();

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
        }

        private turn(command: string) {
            var direction: number = this.toNumber(this.direction);

            if (command === "l") {
                direction = (direction + 4 - 1) % 4;
            }
            else {
                direction = (direction + 1) % 4;
            }

            let setdirection: string = this.directions[direction];

            this.direction = setdirection;
        }

        private toNumber(direction: string): number {
            for (let i: number = 0; i < this.directions.length; i++) {
                let dir: string = this.directions[i];
                
                if (this.directions[i] === direction) {
                    return i;
                }
            }
        }
    }
}