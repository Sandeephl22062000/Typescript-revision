abstract class Product {
  name: string;
  protected employees: string[] = [];
  constructor(private readonly id: string, n: string) {
    this.name = n;
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  //abstract method
  abstract describe(this: ItDepartment): void;

  //static property
  static createEmployee(name: string) {
    return { name };
  }
  printEmployee() {
    console.log(this.employees);
  }
}

class ItDepartment extends Product {
  admins: string[];
  describe(this: ItDepartment): void {
    console.log("this is from the abstract class")
  }
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class Reports extends Product {
  reports: string[];
  private lastReport: string;
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("there is no reports");
  }
  set mostRecentReport(value) {
    if (value) {
      this.addReport(value);
    } else {
      throw new Error("there is an error");
    }
  }
  describe(this: ItDepartment): void {
    console.log("this is also from the abstract class")
  }
  constructor(id: string, reports: string[]) {
    super(id, "Comp");
    this.reports = reports;
    this.lastReport = reports[0];
  }
  //overridding methods
  addEmployee(employee: string): void {
    console.log(this.employees + employee);
  }
  addReport(report: string) {
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
