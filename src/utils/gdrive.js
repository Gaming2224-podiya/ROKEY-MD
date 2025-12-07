const fetch = require('node-fetch')
const { sizeFormatter } = require('human-readable')

const formatSize = sizeFormatter({
    std: 'JEDEC',
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`
})

async function GDriveDl(url) {
    let id, result = { error: true }

    if (!url || !url.match(/drive\.google/i)) return result

    try {
        id = (url.match(/(?:\/d\/|id=)([a-zA-Z0-9_-]+)/) || [])[1]
        if (!id) throw new Error('ID Not Found')

        const res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
            method: 'POST',
            headers: {
                'accept-encoding': 'gzip, deflate, br',
                'content-length': 0,
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'origin': 'https://drive.google.com',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
                'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
                'x-drive-first-party': 'DriveWebUi',
                'x-json-requested': 'true'
            }
        })

        const jsonText = await res.text()
        const json = JSON.parse(jsonText.slice(4))

        if (!json.downloadUrl) throw new Error('Link blocked or quota exceeded.')

        const dlRes = await fetch(json.downloadUrl)
        if (dlRes.status !== 200) throw new Error(`Download failed: ${dlRes.statusText}`)

        return {
            downloadUrl: json.downloadUrl,
            fileName: json.fileName || 'Unknown',
            fileSize: formatSize(json.sizeBytes || 0),
            mimetype: dlRes.headers.get('content-type') || 'application/octet-stream'
        }

    } catch (e) {
        console.error('[GDriveDl Error]', e.message)
        return result
    }
}

module.exports = GDriveDl
