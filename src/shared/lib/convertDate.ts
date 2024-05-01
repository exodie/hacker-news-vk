const MINUTES = ['минуту', 'минуты', 'минут']
const HOURS = ['час', 'часа', 'часов']
const MONTHS_NAMES = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря'
]

const pluralize = (count: number, words: string[]) => {
  const cases = [2, 0, 1, 1, 1, 2]
  return words[count % 100 > 4 && count % 100 < 20 ? 2 : cases[Math.min(count % 10, 5)]]
}

export const convertDate = (time: number) => {
  const currentDate = new Date()
  const targetDate = new Date(time * 1000)

  const timeDifferenceSeconds = Math.floor(
    (currentDate.getTime() - targetDate.getTime()) / 1000
  )
  const timeDifferenceMinutes = Math.floor(timeDifferenceSeconds / 60)
  const timeDifferenceHours = Math.floor(timeDifferenceMinutes / 60)

  if (timeDifferenceSeconds < 60) {
    return 'только что'
  } else if (timeDifferenceMinutes < 60) {
    return `${timeDifferenceMinutes} ${pluralize(timeDifferenceMinutes, MINUTES)} назад`
  } else if (timeDifferenceHours < 3) {
    return `${timeDifferenceHours} ${pluralize(timeDifferenceHours, HOURS)} назад`
  } else if (
    targetDate.getDate() === currentDate.getDate() &&
    targetDate.getMonth() === currentDate.getMonth() &&
    targetDate.getFullYear() === currentDate.getFullYear()
  ) {
    return `сегодня в ${targetDate.getHours()}:${targetDate.getMinutes().toString().padStart(2, '0')}`
  } else if (
    targetDate.getDate() === currentDate.getDate() - 1 &&
    targetDate.getMonth() === currentDate.getMonth() &&
    targetDate.getFullYear() === currentDate.getFullYear()
  ) {
    return `вчера в ${targetDate.getHours()}:${targetDate.getMinutes().toString().padStart(2, '0')}`
  } else {
    const formattedMonth = MONTHS_NAMES[targetDate.getMonth()]
    return `${targetDate.getDate()} ${formattedMonth} в ${targetDate.getHours()}:${targetDate.getMinutes().toString().padStart(2, '0')}`
  }
}
