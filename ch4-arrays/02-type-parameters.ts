// TS offers an alternative way to declare arrays using type parameter syntax: Array<Type>, which, for now, is the same as the regular Type[] syntax. We come across both versions very often in codebases. For instance, the following two functions are the exact same (except for the names):

function lightSaberColors(name: string, colors: string[]): void {
  // some code...
}

function lightSaberColorsAlt(name: string, colors: Array<string>): void {
  // some code...
}
// The second function is using a TS feature called "generics", which is taught towards the end of the course since it's an advanced feature.
