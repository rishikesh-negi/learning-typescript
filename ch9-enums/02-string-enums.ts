// Sting Enums:
// Numeric Enums are ideal when we want actual numbers and want to keep enums performant (numbers take lesser space than strings). However, string enums are often easier to work with if we just want labels:
enum LogLevel {
  ERROR = "ERROR",
  WARN = "WARN",
  INFO = "INFO",
  DEBUG = "DEBUG",
}

function structuredLog(message: string, level: LogLevel) {
  console.log(`[${level}] ${message}`);
}
// This is especially useful when the Enum members need to be redable. The values in numeric enums are not descriptive and don't tell us what member they belong to unless we read the Enum.

// When Enums only exist within our code, numeric Enums are fine. The problem arises when they need to be serialized to JSON or be stored in a DB. Debuggin API responses only to see the following can be very frustrating:
/*
{
  "id": "9d8gdfv4gd-8s7dsadd5asd-954a3s3dsadasd43",
  "name": "Joe",
  "user_type": 7, // What does 7 even mean or represent?
}
*/

type SupportRequest = {
  id: string;
  severity: RequestSeverity;
  description: string;
};

enum RequestSeverity {
  Low = "LOW",
  Medium = "MEDIUM",
  High = "HIGH",
  Critical = "CRITICAL",
}

function convertSeverityToLabel(severity: number) {
  switch (severity) {
    case 0:
      return RequestSeverity.Low;
    case 1:
      return RequestSeverity.Medium;
    case 2:
      return RequestSeverity.High;
    case 3:
      return RequestSeverity.Critical;
    default:
      throw new Error("Unknown severity");
  }
}
