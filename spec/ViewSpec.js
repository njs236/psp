describe("View", function () {
    var doctors, billablePatients;
    beforeAll(function () {
        doctors = document.getElementById('hospitalDoctors');
        billablePatients = document.getElementById('hospitalPatients');})
    it("should have a list of doctors", function () {
        expect(doctors).toBeTruthy()
    })
    it("should have a list of billablePatients", function () {
        expect(billablePatients).toBeTruthy()
    })
})

