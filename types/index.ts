export type Movie = {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export const pick = <T, K extends keyof T>(obj: any, keys: K[]): T => {
  const result = {} as T
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key]
    }
  }
  return result
}
