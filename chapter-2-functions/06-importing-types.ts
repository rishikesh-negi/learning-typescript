// In TS, we can export a type alias for use in other modules. The ES modules' export and import syntax can be used for it. However, if we're importing only type-related information from a file and the file's code doesn't matter, we don't want to execute the file's extra code in the final bundle when the type-related code is going to be eliminated anyway. So, instead of the regular import, the "import type {...}" syntax should be used for importing types. This syntax does not import the exporter module into our JS bundle since we're only importing types that are going to be eliminated later. Ex:
import type { LoggerCallback } from "./05-type-alias.js";
// OR
import { type SupportResponse } from "./05-type-alias.js";
// Both these syntaxes are valid nad ideal for importing types.
// When the JS code is compiled, all the type-related code is eliminited. So, these type imports don't make it into the final JS bundle that gets built for production, resulting in a smaller bundle size.
