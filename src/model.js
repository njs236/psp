psp.model = (function () {
var initModule, Hospital, Person, Doctor, Patient, Therapy;
    
    
    /* Constructor Functions */
    Hospital = function () {
        this.allMyDoctors = [];
        this.allMyPeople = [];
        this.allMyTherapy = [];
    };
    
    Person = function (newId, newFirstName, newLastName) {
        var prot = {};
        prot.Id = newId;
        prot.firstName = newFirstName;
        prot.lastName = newLastName;
        this.getId = function () {
            return prot.Id;
        }
        this.getName = function () {
            return prot.lastName + " " + prot.firstName;
        }
    };
    
    Doctor = function (newId, newFirstName, newLastName, newOffice, newFees, theHospital) {
    var prot = {};
        Person.call(this, newId, newFirstName, newLastName);
        prot.office = newOffice;
        prot.fees = newFees;
        prot.allMyPatients = [];
        prot.myHospital = theHospital;
        this.getHospital = function () {
            return prot.myHospital;
        }
        this.getMyPatients = function () {
            return prot.allMyPatients;
        };
        this.get = function () {
            return this.getId() + " - " + this.getName() + ".";
        }
    };
    
    Patient = function (newId, newFirstName, newLastName, newFeesOwing, theDoctor) {
        var prot = {};
        Person.call(this, newId, newFirstName, newLastName);
        prot.feesOwing = newFeesOwing
        prot.myDoctor = theDoctor;
        this.getDoctor = function () {
            return prot.myDoctor;
        };
        this.getPaidStatus = function () {
            return prot.feesOwing === 0;
        }
        this.get = function () {
            return this.getName();
        }
    };
    
    Therapy = function (newName, newCost, theHospital) {
        var prot = {};
        prot.name = newName;
        prot.cost = newCost;
        prot.allMyPatients = [];
        prot.myHospital = theHospital;
        this.getMyPatients = function () {
            return prot.allMyPatients;
        }
        this.getHospital = function () {
            return prot.myHospital;
        }
        this.getName = function () {
            return prot.name;
        }
    };
    
    Therapy.prototype = addPatientTherapy = function (id) {
        var patient = this.getHospital.findPatient(id);
        this.getMyPatients.push(patient);
    }
    
    Doctor.prototype = Object.create(Person.prototype);
    Doctor.prototype.constructor = Doctor; 
    
    Patient.prototype = Object.create(Person.prototype);
    Patient.prototype.constructor = Patient; 
    
    Hospital.prototype.addDoctor = function (newId, newFirstName, newLastName, newOffice, newFees) {
        var doctor = new Doctor (newId, newFirstName, newLastName, newOffice, newFees, this);
        this.allMyDoctors.push(doctor);
        this.allMyPeople.push(doctor);
        this.allMyDoctors.sort(function (a, b) {
          if (a.getId() > b.getId()) {
            return 1;
          }
          if (a.getId() < b.getId()) {
            return -1;
          }
        });

    };
    
    Hospital.prototype.addTherapy = function (newName, newCost) {
        var therapy = new Therapy (newName, newCost, this);
        this.allMyTherapy.push(therapy);
    };
    
    Hospital.prototype.findPatient = function (id) {
        var aDoctor, aPatient;
            for ( aDoctor of this.allMyDoctors ) {
                for (aPatient of aDoctor.getMyPatients()) {
                    if ( aPatient.getId() === id) {
                        return aPatient;
                    };
                };
            };
    };
    
    Hospital.prototype.findTherapy = function (name) {
        var aTherapy;
            for (aTherapy of this.allMyTherapy) {
                if ( aTherapy.getName() = name ) {
                    return aTherapy;
                }
            }
    }
    
    Hospital.prototype.findDoctor = function (id) {
        var aDoctor;
        for ( aDoctor of this.allMyDoctors ) {
            if ( aDoctor.getId() === id ) {
                return aDoctor;
            }
        }
    }
    
    Hospital.prototype.displayDoctors = function () {
        var aDoctor, result = [];
        for (aDoctor of this.allMyDoctors) {
            result.push(aDoctor.get());
        }
        return result;
    }
    
    Hospital.prototype.displayBillablePatients = function () {
        var aDoctor, result = [];
        for (aDoctor of this.allMyDoctors) {
            result.push([aDoctor.get(), aDoctor.displayBillablePatients()])
        }
        console.log(result);
        return result;
    }
    
    Doctor.prototype.addPatient = function (newId, newFirstName, newLastName, newFeesOwing) {
        var patient = new Patient (newId, newFirstName, newLastName, newFeesOwing, this);
        this.getHospital().allMyPeople.push(patient);
        this.getMyPatients().push(patient);
        this.getMyPatients().sort(function (a, b) {
          if (a.getId() > b.getId()) {
            return 1;
          }
          if (a.getId() < b.getId()) {
            return -1;
          }
        });
    };
    
    Doctor.prototype.displayBillablePatients = function () {
        var aPatient, result = [];
        for (aPatient of this.getMyPatients()) {
            if (aPatient.getPaidStatus() === false) {
                result.push(aPatient.get());
            }
        }
        return result;
    }
    
    
    initModule = function (){
    return new Hospital;
    }
    return {initModule : initModule}
}());