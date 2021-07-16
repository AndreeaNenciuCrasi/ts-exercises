"use strict";
var Customer2 = /** @class */ (function () {
    function Customer2(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customer2.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer2.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Customer2;
}());
var myyCustomer = new Customer2("Martin", "Dixon");
console.log(myyCustomer.firstName);
console.log(myyCustomer.lastName);
