const axios = require('axios');
const cheerio = require('cheerio');
const qs = require('qs');

// 1. Sekaikomik image downloader
async function sekaikomikDl(url) {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const images = [];
        $('#chapter_images img').each((_, el) => {
            const imgSrc = $(el).attr('src');
            if (imgSrc) images.push(imgSrc);
        });
        return images;
    } catch (err) {
        console.error("Sekaikomik Error:", err.message);
        return [];
    }
}

// 2. Facebook Downloader
async function facebookDl(url) {
    try {
        const { data } = await axios.get('https://fdownloader.net', {
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });

        const $ = cheerio.load(data);
        const token = $('input[name="__RequestVerificationToken"]').val();

        const form = qs.stringify({
            '__RequestVerificationToken': token,
            'q': url
        });

        const res = await axios.post('https://fdownloader.net/api/ajaxSearch', form, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': 'Mozilla/5.0',
                'Referer': 'https://fdownloader.net'
            }
        });

        const links = res.data.data?.map(item => item.url).filter(Boolean) || [];
        return links;
    } catch (err) {
        console.error("Facebook Download Error:", err.message);
        return [];
    }
}

// 3. TikTok Stalker
async function tiktokStalk(username) {
    try {
        const { data } = await axios.get(`https://urlebird.com/user/${username}`);
        const $ = cheerio.load(data);
        const name = $('h4').first().text().trim();
        const followers = $('strong:contains("Followers")').next().text().trim();
        const likes = $('strong:contains("Likes")').next().text().trim();
        const posts = $('.video-count').text().trim();
        const profilePic = $('.profile-image').attr('src');

        return {
            name,
            followers,
            likes,
            posts,
            profilePic
        };
    } catch (err) {
        console.error("TikTok Stalk Error:", err.message);
        return null;
    }
}

// 4. Instagram Stalker
async function igStalk(username) {
    try {
        const { data } = await axios.get(`https://dumpor.com/v/${username}`);
        const $ = cheerio.load(data);
        const followers = $('div:contains("Followers")').text().replace('Followers', '').trim();
        const following = $('div:contains("Following")').text().replace('Following', '').trim();
        const posts = $('div:contains("Posts")').text().replace('Posts', '').trim();
        const profilePic = $('img[alt="profile picture"]').attr('src');

        return {
            followers,
            following,
            posts,
            profilePic
        };
    } catch (err) {
        console.error("IG Stalk Error:", err.message);
        return null;
    }
}

// 5. XNXX Downloader
async function xnxxdl(url) {
    try {
        const { data } = await axios.get(url);
        const low = data.match(/setVideoUrlLow.*?'(.*?)'/)?.[1];
        const high = data.match(/setVideoUrlHigh.*?'(.*?)'/)?.[1];
        const hls = data.match(/setVideoHLS.*?'(.*?)'/)?.[1];
        return { low, high, hls };
    } catch (err) {
        console.error("XNXX DL Error:", err.message);
        return {};
    }
}

// 6. XNXX Search
async function xnxxSearch(query) {
    try {
        const { data } = await axios.get(`https://www.xnxx.com/search/${encodeURIComponent(query)}`);
        const $ = cheerio.load(data);
        const results = [];

        $('.mozaique .thumb').each((_, el) => {
            const title = $(el).find('.title').text().trim();
            const videoUrl = 'https://www.xnxx.com' + $(el).find('a').attr('href');
            const thumb = $(el).find('img').attr('data-src') || $(el).find('img').attr('src');
            if (title && videoUrl && thumb) {
                results.push({ title, videoUrl, thumb });
            }
        });

        return results;
    } catch (err) {
        console.error("XNXX Search Error:", err.message);
        return [];
    }
}

// 7. ChatGPT API (Unofficial)
async function ChatGpt(prompt, systemPrompt = '') {
    try {
        const res = await axios.post('https://chatapicn.a3r.fun/api/chat-process', {
            prompt,
            options: {},
            systemMessage: systemPrompt,
            temperature: 1
        });

        return res.data.text;
    } catch (err) {
        console.error("ChatGPT API Error:", err.message);
        return "Error contacting AI service.";
    }
}

// 8. XVideos Downloader
async function xvideosdl(url) {
    try {
        const { data } = await axios.get(url);
        const low = data.match(/setVideoUrlLow.*?'(.*?)'/)?.[1];
        const high = data.match(/setVideoUrlHigh.*?'(.*?)'/)?.[1];
        const hls = data.match(/setVideoHLS.*?'(.*?)'/)?.[1];
        return { low, high, hls };
    } catch (err) {
        console.error("XVideos DL Error:", err.message);
        return {};
    }
}

// 9. XVideos Search (if you want it)
async function xvideosSearch(query) {
    try {
        const { data } = await axios.get(`https://www.xvideos.com/?k=${encodeURIComponent(query)}`);
        const $ = cheerio.load(data);
        const results = [];

        $('.thumb-block').each((_, el) => {
            const title = $(el).find('.thumb-under > p').text().trim();
            const videoUrl = 'https://www.xvideos.com' + $(el).find('a').attr('href');
            const thumb = $(el).find('img').attr('data-src') || $(el).find('img').attr('src');
            if (title && videoUrl && thumb) {
                results.push({ title, videoUrl, thumb });
            }
        });

        return results;
    } catch (err) {
        console.error("XVideos Search Error:", err.message);
        return [];
    }
}

module.exports = {
    sekaikomikDl,
    facebookDl,
    tiktokStalk,
    igStalk,
    xnxxdl,
    xnxxSearch,
    ChatGpt,
    xvideosdl,
    xvideosSearch
};
