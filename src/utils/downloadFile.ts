export default function downloadFile(url, filename) {
    const link = document.createElement('a')
    link.href = url
    console.log(url)
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}
