psp.controller = (function () {
    var initModule, Controller;
    
    Controller = function (model) {
        this._model = model;
    }
    
    Controller.prototype.addDoctor = function (newId, newFirstName, newLastName, newOffice, newFees) {
        var theModel = this._model;
        theModel.addDoctor(newId, newFirstName, newLastName, newOffice, newFees);
    };
    
    initModule = function (model) {
        return new Controller(model);
    }
    
    return {initModule: initModule};
}())