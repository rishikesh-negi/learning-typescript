// Required Utility Type:
// The Required<T> utility type does the opposite of Partial<T> - it makes all properties of a type to be required, even those that were originally optional.

// A practical example of using Required<T>:
interface BlogPost {
  title: string;
  content: string;
  tags?: string[];
  publishDate?: Date;
  author?: {
    id: string;
    name?: string;
  };
}

type BlogPostComplete = Required<BlogPost>;

// BlogPostComplete is equivalent to:
/*
interface BlogPostComplete {
  title: string;
  content: string;
  tags: string[];
  publishDate: Date;
  author: {
    id: string;
    name?: string;
  };
}
*/
// Notice that the nested property 'name' remains optional. Required utility type also works only at the top level of the original type.

interface ContactInfo {
  email?: string;
  phoneNumber?: string;
}

function addBillingInfo(info: Required<ContactInfo>) {
  return `billing info: ${info.email}, ${info.phoneNumber}`;
}
// Now, instead of using the Required utility type in the function, we could've used info.email! and info.phoneNumber! to make those properties mandatory. The major difference is that with the non-null assertion, we're overriding TS and telling it that we know better than it about the type of those properties, whereas using the Required utility type gives us actual type safety and raises compilation errors when the properties receive the wrong type.
