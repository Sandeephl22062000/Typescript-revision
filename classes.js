"use strict";
class Product {
    constructor(id, n) {
        this.id = id;
        this.employees = [];
        this.name = n;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    //static property
    static createEmployee(name) {
        return { name };
    }
    printEmployee() {
        console.log(this.employees);
    }
}
class ItDepartment extends Product {
    describe() {
        console.log("this is from the abstract class");
    }
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
class Reports extends Product {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("there is no reports");
    }
    set mostRecentReport(value) {
        if (value) {
            this.addReport(value);
        }
        else {
            throw new Error("there is an error");
        }
    }
    describe() {
        console.log("this is also from the abstract class");
    }
    constructor(id, reports) {
        super(id, "Comp");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    //overridding methods
    addEmployee(employee) {
        console.log(this.employees + employee);
    }
    addReport(report) {
        this.reports.push(report);
    }
}
//creating instances
const it = new ItDepartment("it", ["Sandeep Lohar"]);
const Comp = new Reports("comp", ["Lohar", "nice"]);
Comp.addEmployee("sarika");
Comp.addReport("this is comp reports");
Comp.mostRecentReport = "this is the value from setter function";
console.log(Comp.reports);
console.log({ Comp });
console.log("most recent reports------>", Comp.mostRecentReport);
it.addEmployee("sandeep");
it.addEmployee("Mandeep");
it.addEmployee("andeep");
// accounting.employees[3] = "lohar";
it.printEmployee();
console.log({ it });
//static property calls - it does'nt require new keyword to create thee instance for the same
const employee = Product.createEmployee("Jaydeep Lohar");
console.log({ employee });
