describe("Doctor", function () {
var hospital, doctor, patient;

    beforeEach(function() {
        hospital = globalConstants.hospital;
        doctor = hospital.addDoctor(1,"David", "Weir", "N205", "30", hospital);
        patient = doctor.addPatient(1,"Nathan", "Sinclair", 0, doctor);
    });
    
    it("should have an id", function () {
        expect(doctor.getId()).not.toBeNull();
    })
    it("should have a first name", function () {
        expect(doctor.getFirstName()).not.toBeNull();
    })
    it("should have a last name", function () {
        expect(doctor.getLastName()).not.toBeNull();
    })
    it("should have an office", function () {
        expect(doctor.getOffice()).not.toBeNull();
    })
    it("should have fees", function () {
        expect(doctor.getFees()).not.toBeNull();
    })
    it("should be part of a Hospital", function () {
        expect(doctor.getHospital()).toBe(hospital);
    })
    
    it("should be able to create patients", function () {
        expect(patient).not.toBeNull();
    })
})