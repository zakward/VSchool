var employees = [ ]

function Employee(name, jobTitle, salary) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "Full Time"
    this.printEmployeeForm = function(){
        console.log(this.name, this.jobTitle, this.salary, this.status)
    }
}

var JohnSmith = new Employee("John Smith", "Batallion S4", "75,000/year")
JohnSmith.status = "Part Time"
var CarolBaskins = new Employee("Carol Baskins", "Cleaning Lady", "$10.00/hr")
CarolBaskins.status = "Contract"
var FrodoBaggins = new Employee("Frodo Baggins", "Entrepreneur", "$1,000,000/year")


JohnSmith.printEmployeeForm()
CarolBaskins.printEmployeeForm()
FrodoBaggins.printEmployeeForm()

employees.push(JohnSmith, CarolBaskins, FrodoBaggins)
console.log(employees)

