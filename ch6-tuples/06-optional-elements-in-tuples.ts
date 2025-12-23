// Optional Elements in Tuples:
// Like object properties, we can make tuple elements optional with the '?' modifier:
type HttpResponse = [statusCode: number, data: string, error?: string];

const successResponse: HttpResponse = [200, "Success!"];
const errorResponse: HttpResponse = [400, "", "Resource not found"];

// Similar to optional function parameters, the optional tuple elements must appear at the end.
// This doesn't work
// type HttpResponse1 = [statusCode: number, data?: string, error: string];

// But this does:
type HttpResponse1 = [statusCode: number, data?: string, error?: string];

// Optional elements always have their specified type combined with "undefined", which is common knowledge to us by now.

type Ticket = readonly [id: number, comment: string, label?: string];

// Another way of creating an optional element without a name:
// type Ticket = readonly [id: number, comment: string, string?];

function formatTicket(ticket: Ticket): string {
  const [id, comment, label] = ticket;

  return `#${id} ${comment} ${label ? ` [${label}]` : ""}`;
}
