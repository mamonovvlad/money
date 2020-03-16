export default function dateFilter(value, format = 'date') {
    const options = {}

    if (format.includes('time')) {
        options.hour = '2-digit'
        options.minute = '2-digit'
        options.timeZoneName = 'short'
    }

    return new Intl.DateTimeFormat("ru-RU", options).format(new Date(value))
}