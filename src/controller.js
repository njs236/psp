psp.controller = (function () {
    var initModule, Controller;
    
    Controller = function (model, view) {
        this._model = model;
        this._view  = view;
    }
    
    Controller.prototype.addDoctor = function (newId, newFirstName, newLastName, newOffice, newFees) {
        var theModel = this._model;
        theModel.addDoctor(newId, newFirstName, newLastName, newOffice, newFees);
    };
    
    Controller.prototype.addPatient = function (newId, newFirstName, newLastName, newFeesOwing, theDoctorId) {
        var theModel = this._model,
            doctor = theModel.findDoctor(theDoctorId);
        doctor.addPatient(newId, newFirstName, newLastName, newFeesOwing);
        
    }
    
    Controller.prototype.loadTestData = function () {
        this.addDoctor(11, 'Jian', 'Xu', 'N400', 50);
        this.addDoctor(13, 'Emily', 'John', 'W7', 25);
        this.addDoctor(12, 'Santosh', 'Kumar', 'A22', 40);
        
        this.addPatient(200, 'Shelley', 'Fisher', 0, 11);
        this.addPatient(400, 'Kimi', 'Koirala', 25, 12);
        this.addPatient(300, 'Liang', 'Chen', 40, 12);
        this.addPatient(500, 'Riyaz', 'Ahmed', 0, 13);
        this.addPatient(100, 'Jude', 'Knightly', 30, 11);
    };
    
    Controller.prototype.displayDoctors = function () {
        var theModel = this._model,
            theView = this._view;
        theView.displayDoctors(theModel.displayDoctors());
    };
    
    Controller.prototype.displayBillablePatients = function () {
        var theModel = this._model,
            theView = this._view;
        theView.displayBillablePatients(theModel.displayBillablePatients());
    }
    
    initModule = function (model, view) {
        return new Controller(model, view);
    }
    
    return {initModule: initModule};
}())