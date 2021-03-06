const cont = require("./getService.ts");

describe("get service", function () {

    let createControllerInst = () => {
        return cont.default;
    }

    const methods = ["errorServiceInstance", "chatGroupServiceInstance", "userServiceInstance", "socketioInstance", "loggerInstance", "notificationServiceInstance", "sharedDataServiceInstance", "domManipInstance", "utilsInstance", "apiServiceInstance", "cacheChatInstance"];
    var contInst;

    beforeEach(() => {
        contInst = createControllerInst();
    });

    it("should be defined", function () {
        expect(contInst).toBeDefined();
    });


    it("should have " + methods.join(', ') + " function", function () {
        for (const method of methods) {
            expect(contInst[method]).toBeDefined();
        }
    });

    it("should call " + methods.join(', ') + " function", function () {
        let controller = createControllerInst();
        var cont = jasmine.createSpyObj(contInst, methods);
        for (const method of methods) {
            cont[method]();
            expect(cont[method]).toHaveBeenCalled();
        }
    });
});