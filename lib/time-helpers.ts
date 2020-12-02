const withAtLeastTwoDigits = (value: string | number | undefined) => {
  if (!value) return '00'
  let stringToTest = value.toString()
  let minus = ''
  if (stringToTest.startsWith('-')) {
    minus = '-'
    stringToTest = stringToTest.replace('-', '')
  }

  if (stringToTest.length === 1) return `${minus}0${stringToTest}`
  return `${minus}${stringToTest}`
}

const getDateFromInput = (inputValue: string) => {
  // We'll compensate the time zone so the user gets the start of the day he's in
  const timeZoneOffset = new Date().getTimezoneOffset()

  const hours = Math.floor(timeZoneOffset / 60) * -1 // Invert the sign
  const minutes = timeZoneOffset % 60

  const twoDigitHours = withAtLeastTwoDigits(hours)
  const twoDigitMinutes = withAtLeastTwoDigits(minutes)

  const compensation = `${
    twoDigitHours.startsWith('-') ? twoDigitHours : `+${twoDigitHours}`
  }:${twoDigitMinutes}`

  return new Date(`${inputValue}T00:00:00${compensation}`)
}

export { withAtLeastTwoDigits, getDateFromInput }
