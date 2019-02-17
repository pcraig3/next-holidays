import format from 'date-fns/format'
import formatDistance from 'date-fns/formatDistance'
import addMinutes from 'date-fns/addMinutes'
import differenceInDays from 'date-fns/differenceInDays'
import startOfDay from 'date-fns/startOfDay'
import { space2Nbsp } from './strings.js'

// 60 minutes * 24 hours = 1440
export const getDateBeforeMidnightFromString = str =>
  addMinutes(new Date(str), 1439)

export const displayDate = dateString =>
  space2Nbsp(format(getDateBeforeMidnightFromString(dateString), 'MMMM do'))

export const relativeDate = dateString => {
  const daysOffset = differenceInDays(
    startOfDay(new Date()),
    getDateBeforeMidnightFromString(dateString),
  )

  switch (daysOffset) {
    case 0:
      return 'That’s today! 🥳🥂🎊'
    case -1:
      return 'That’s tomorrow! 🤠'
    default:
      return `That’s in ${formatDistance(
        getDateBeforeMidnightFromString(dateString),
        new Date(),
      )}.`
  }
}
