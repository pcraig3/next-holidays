export const space2Nbsp = str => str.replace(/ /g, ' ')

export const getPossessive = name => {
  return name.endsWith('s') ? `${name}’` : `${name}’s`
}
