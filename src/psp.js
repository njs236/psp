"use strict";
var psp = {};
psp = (function () {
    var initModule;
    initModule = function () {
        var model = psp.model.initModule();
        var controller = psp.controller.initModule(model);
    }
    
    return {initModule: initModule};
}())

