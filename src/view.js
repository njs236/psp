psp.view = (function () {
    var View;
    View = function (elements) {
        this._elements = elements;
    }
    
    View.prototype.displayDoctors = function (doctors) {
        console.log(doctors);
        var i = 0, P;
            for (i; i< doctors.length; i++) {
                P = document.createElement("P");
                P.innerHTML = doctors[i];
                this._elements.Doctors.appendChild(P);
            };
    };
    
    View.prototype.displayBillablePatients = function (array) {
        var doctor = 0, billablePatient = 0, DIV, P, result;
            for (doctor; doctor < array.length; doctor++) {   
                DIV = document.createElement('DIV')
                DIV.innerHTML = array[doctor][0];
                this._elements.Patients.appendChild(DIV);
                billablePatient = 0;
                for (billablePatient; billablePatient < array[doctor][1].length ; billablePatient++) {
                    console.log(array[doctor].length);
                    P = document.createElement("P")
                    P.className = "tab";
                    result = array[doctor][1][billablePatient];
                    console.log(array[doctor][1][billablePatient]);
                    P.innerHTML = result;
                    DIV.appendChild(P);
                };  
            };
    }
    
   initModule = function (elements) {
       return new View (elements);
   }
   
   return {initModule: initModule};
   
}())