// Readonly Utility Type:
// The Readonly<T> utility type creates a new type where all the top-level properties are 'readonly', preventing them from being mutated or reassigned after initialization:
interface UserProfile {
  id: string;
  name: string;
  preferences: {
    readonly theme: "light" | "dark";
    notifications: boolean;
  };
}

type ConstantUserProfile = Readonly<UserProfile>;
// This is the same as:
/*
type ConstantUserProfile = {
  readonly id: string;
  readonly name: string;
  readonly preferences: {
    readonly theme: "light" | "dark";
    notifications: boolean;
  };
};
*/

interface Config {
  apiUrl: string;
  timeout: number;
  debug: boolean;
}

function importConfig(config: Readonly<Config>) {
  return config;
}
