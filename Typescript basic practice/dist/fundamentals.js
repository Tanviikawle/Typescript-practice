"use strict";
let sales = 123456789;
let numbers = [1, 2, 3];
let user = [1, 'Chibi'];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
function calculateTax(income) {
    return income * .2;
}
let employee = {
    id: 1,
    name: 'Chibi',
    retire: (date) => { return date; },
};
//# sourceMappingURL=fundamentals.js.map