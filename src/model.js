psp.model = (function () {
var initModule, Hospital, Person, Doctor, Patient;
    
    Hospital = function () {
        this.allMyDoctors = [];
    };
    
    Person = function (newId, newFirstName, newLastName) {
        var prot = {};
        prot.Id = newId;
        prot.firstName = newFirstName;
        prot.lastName = newLastName;
    };
    
    Doctor.prototype = Object.create(Person.prototype);
    Doctor.prototype.constructor = Doctor; 
    
    Patient.prototype = Object.create(Person.prototype);
    Patient.prototype.constructor = Patient; 
    
    Hospital.prototype.addDoctor = function (newId, newFirstName, newLastName, newOffice, newFees) {
        var doctor = new Doctor (newId, newFirstName, newLastName, newOffice, newFees, this);
        this.allMyDoctors.push(doctor);
    };
    
    Doctor.prototype.addPatient = function (newId, newFirstName, newLastName, newFeesOwing) {
        var patient = new Patient (newId, newFirstName, newLastName, newFeesOwing, this);
        this.getMyPatients().push(patient);
    }
    
    
    
    Doctor = function (newId, newFirstName, newLastName, newOffice, newFees, theHospital) {
    var prot = {};
        Person.call(this, newId, newFirstName, newLastName);
        prot.office = newOffice;
        prot.fees = newFees;
        prot.allMyPatients = [];
        prot.myHospital = theHospital;
        this.getMyPatients = function () {
            return prot.allMyPatients;
        };
    };
    
    Patient = function (newId, newFirstName, newLastName, newFeesOwing, theDoctor) {
        var prot = {};
        Person.call(this, newId, newFirstName, newLastName);
        prot.feesOwing = newFeesOwing
        prot.myDoctor = theDoctor;
        this.getDoctor = function () {
            return prot.myDoctor;
        };
    }
    initModule = function (){
    return new Hospital;
    }
    return {initModule : initModule}
}());