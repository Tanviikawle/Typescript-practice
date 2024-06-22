//Annotation
var sales = 123456789;
var numbers = [1, 2, 3];
//Tuples
var user = [1, 'Chibi'];
//Enums
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
//Functions
function calculateTax(income) {
    return income * .2;
}
//Objects
var employee = {
    id: 1,
    name: 'Chibi',
    retire: function (date) { return date; },
};
