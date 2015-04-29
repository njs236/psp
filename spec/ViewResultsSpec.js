describe("View returns", function () {
    var doctors, doctorsResults, billablePatients, billablePatientsResults;    
    beforeAll(function () {
        doctors = document.getElementById('hospitalDoctors');
        doctorsResults = doctors.getElementsByTagName("P");
        console.log(doctorsResults);
        console.log(doctorsResults[0].textContent)
        billablePatients= document.getElementById('hospitalPatients');
        billablePatientsResults = billablePatients.getElementsByTagName("P");
    })
    it("should have 11 - Xu Jian. as first entry", function () {
        expect(doctorsResults[0].textContent).toBe("11 - Xu Jian.");
    });
    
    it("should have Knightly Jude as first entry", function () {
        expect(billablePatientsResults[0].textContent).toBe("Knightly Jude");
    });
})