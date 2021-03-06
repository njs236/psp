"use strict";
var psp = {};
psp = (function () {
    var initModule;
    initModule = function () {
        var model = psp.model.initModule();
        var view = psp.view.initModule({Doctors:document.getElementById('hospitalDoctors'), 
                                        Patients:document.getElementById('hospitalPatients')});
        var controller = psp.controller.initModule(model, view);
        controller.loadTestData();
        
        controller.displayDoctors();
        controller.displayBillablePatients();
    }
    
    return {initModule: initModule};
}())

