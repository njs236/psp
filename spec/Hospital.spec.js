describe("Hospital", function () {
var hospital;

    beforeEach(function() {
        hospital =  new Hospital();
    });
    
    it("should have an allMyDoctors property", function () {
        expect(hospital.getMyDoctors()).not.toBeNull();
    })
})