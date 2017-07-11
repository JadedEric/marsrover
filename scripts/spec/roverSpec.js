/// <reference path="../typings/jasmine.d.ts" />
/// <reference path="../typings/jquery.d.ts" />
describe("rover", function () {
    var deploy;
    beforeEach(function () {
        deploy = new mars.rover.deploy();
    });
    it("should have an instance of deploy define", function () {
        expect(deploy).toBeDefined();
    });
    describe("deploy", function () {
        it("should have an x location defined", function () {
            deploy.init({
                x: 2,
                y: 2
            });
            expect(deploy.getLocation().x).toBe(2);
        });
        it("should have a y location defined", function () {
            deploy.init({
                x: 2,
                y: 3
            });
            expect(deploy.getLocation().y).toBe(3);
        });
        it("should default to 0 if no initialization has been defined", function () {
            deploy.init();
            var result = {
                x: 0,
                y: 0
            };
            expect(deploy.getLocation()).toEqual(result);
        });
    });
    describe("kata outcomes", function () {
        it("should match kata output 3 3 S based on kata input", function () {
            var location = {
                x: 1,
                y: 2
            };
            var grid = {
                x: 8,
                y: 8
            };
            var direction = "E";
            var commands = ["M", "M", "L", "M", "R", "M", "M", "R", "R", "M", "M", "L"];
            deploy.init(location, grid, direction).set(commands);
            deploy.start();
            var expected = deploy.getLocation().x + " " + deploy.getLocation().y + " " + deploy.getDirection();
            expect(expected).toEqual("3 3 S");
        });
    });
});
//# sourceMappingURL=roverSpec.js.map