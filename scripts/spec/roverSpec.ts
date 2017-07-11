/// <reference path="../typings/jasmine.d.ts" />
/// <reference path="../typings/jquery.d.ts" />

describe("rover", () => {

    let deploy: mars.rover.deploy;

    beforeEach(() => {
        deploy = new mars.rover.deploy();
    });

    it("should have an instance of deploy define", () => {
        expect(deploy).toBeDefined();
    });

    describe("deploy", () => {

        it("should have an x location defined", () => {
            deploy.init({
                x: 2,
                y: 2
            });

            expect(deploy.getLocation().x).toBe(2);
        });

        it("should have a y location defined", () => {
            deploy.init({
                x: 2,
                y: 3
            });

            expect(deploy.getLocation().y).toBe(3);
        });

        it("should default to 0 if no initialization has been defined", () => {
            deploy.init();

            let result: mars.rover.ilocation = {
                x: 0,
                y: 0
            };

            expect(deploy.getLocation()).toEqual(result);
        });

    });

    describe("kata outcomes", () => {

        it("should match kata output 3 3 S based on kata input", () => {

            let location: mars.rover.ilocation = {
                x: 1,
                y: 2
            };

            let grid: mars.rover.igrid = {
                x: 8,
                y: 8
            };

            let direction: string = "E";
            let commands: string[] = ["M", "M", "L", "M", "R", "M", "M", "R", "R", "M", "M", "L"];

            deploy.init(location, grid, direction).set(commands);
            deploy.start();

            let expected: string = deploy.getLocation().x + " " + deploy.getLocation().y + " " + deploy.getDirection();

            expect(expected).toEqual("3 3 S");

        });

    });

});