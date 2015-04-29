describe("Model", function () {
var doctor, patient;
    beforeAll(function () {
    })
    
    it("should add Doctors", function () {
        expect(doctor.getId()).toBe(14);
    })
    
    it("should add Patients", function () {
        expect(patient.getId()).toBe(600);
    })
})