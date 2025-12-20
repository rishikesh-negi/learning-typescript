// Function Overloads:
// It's a feature that's present in many languages. It allows us to define multiple different definitions for the same function, with different parameters that can be passed to it. JS is very lenient when it comes to function signatures, and TS gives us a way to take advantage of that flexibility while still maintaining type safety.
// First, we define a function that can be called in a multiple ways:
type Employee = {
  name: string;
  department: string;
};

// Function Overloads to prevent invalid combination of parameters in calls to the formatEmployee function:
function formatEmployeeMessage(employee: Employee): string;
function formatEmployeeMessage(
  employee: Employee,
  isNeW: true,
  onboardedDate: Date
): string;

function formatEmployeeMessage(
  employee: Employee,
  isNew?: boolean,
  onboradedDate?: Date
): string {
  if (!isNew) return `Employee: ${employee.name}, Dept: ${employee.department}`;

  return `Employee: ${employee.name}, New: Yes, Onboarded: ${onboradedDate}`;
}

// Used as-is, the above function can be called in three different ways:
// formatEmployeeMessage(employee);
// formatEmployeeMessage(employee, boolean); // This combination is not valid
// formatEmployeeMessage(employee, boolean, Date);

// However, we can constrain the function to allow only certain combinations of parameters by using function overloads (they are and need to be declared just above the function definition), thus eliminating invalid or wrong combinations of parameters:
const employee1: Employee = { name: "Rishi", department: "CS" };
// const message = formatEmployeeMessage(employee, true); // Raises TS error: No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments
const message1 = formatEmployeeMessage(employee1);
console.log(message1);

const employee2: Employee = { name: "Jay", department: "Finance" };
const message2 = formatEmployeeMessage(employee2, true, new Date());
console.log(message2);

// This feature is used commonly for building libraries, but not in development because it adds a lot of complexity and overhead to our code. In development, if the need for a function overload arises, it means that we're writing a complicated function that can be simplified. That said, we do occasionally encounter situations, even in development, where we need to use function overloads.

type MailPreferences = {
  [key: PropertyKey]: boolean | string;
  doNotDisturb: boolean;
  outOfOffice: boolean;
};

function configurePreferences(
  doNotDisturb: boolean,
  outOfOffice: boolean
): MailPreferences;

function configurePreferences(
  doNotDisturb: boolean,
  outOfOffice: boolean | string,
  useSystemTheme: boolean,
  theme: string
): MailPreferences;

function configurePreferences(
  doNotDisturb: boolean,
  outOfOffice: boolean | string,
  useSystemTheme?: boolean,
  theme?: string
): MailPreferences {
  if (typeof outOfOffice === "string") {
    return {
      doNotDisturb: false,
      outOfOffice: false,
      useSystemTheme: doNotDisturb,
      theme: outOfOffice,
    };
  }
  if (useSystemTheme !== undefined && theme !== undefined) {
    return {
      doNotDisturb: doNotDisturb,
      outOfOffice: outOfOffice,
      useSystemTheme: useSystemTheme,
      theme: theme,
    };
  }

  return {
    doNotDisturb,
    outOfOffice,
  };
}
