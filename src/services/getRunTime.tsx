export default function getRunTime(runtime: number) {
    if(typeof(runtime) !== "number") return

    const hours = Math.floor(runtime / 60)
    const minutes = runtime % 60

    if (runtime < 60) return `${minutes}m`

    return `${hours}h ${minutes}m`
}