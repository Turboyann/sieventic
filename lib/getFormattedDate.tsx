export default function getFormattedDate(dateString: string): string {
    return new Intl.DateTimeFormat('de-ch', { dateStyle: 'long' }).format(new Date(dateString))
}