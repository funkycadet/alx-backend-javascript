interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
  tryWork = (): string => "Current work";
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

export function createEmployee(salary: string | number) {
  if (salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

export function isDirector(employee: Teacher | Director): boolean {
  return employee instanceof Director;
}

export function executeWork(employee: Teacher | Director): void {
  if (employee instanceof Teacher) {
    employee.workTeacherTasks();
  } else {
    employee.workDirectorTasks();
  }
}

type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string {
  if (todayClass == 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));

executeWork(createEmployee(200));
executeWork(createEmployee(1000));
