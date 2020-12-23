import format from 'date-fns/format';
import Locale from 'date-fns/locale';
/**
 * The default function used to format the day. Use the [[formatWeekdayName]]
 * prop to use another function.
 *
 * @return {string} The day formatted the `"E"` [format
 * string](https://date-fns.org/docs/format).
 * @private
 */
export function defaultFormatWeekdayName(day: Date, formatOptions?: { locale?: Locale }): string {
  return format(day, 'EEEEEE', formatOptions);
}
