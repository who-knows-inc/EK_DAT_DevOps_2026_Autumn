import { JSDOM } from 'jsdom';

const START_URL = 'https://en.wikipedia.org/wiki/Elasticsearch';
const DELAY_MILLISECONDS = 1000;
const CONTENT_SELECTOR = '.mw-parser-output p, .mw-parser-output h1, .mw-parser-output h2, .mw-parser-output h3';

function delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function extractText(document) {
    return Array.from(document.querySelectorAll(CONTENT_SELECTOR))
        .map(element => element.textContent.trim())
        .join(' ')
        .replace(/[\t\n\r]+/g, ' ')
        .trim();
}

// Returns absolute article URLs (no #fragment) found in the page body.
function extractArticleUrls(document, pageUrl) {
    const articleUrls = [];

    for (const link of document.querySelectorAll('.mw-parser-output a[href]')) {
        const url = new URL(link.getAttribute('href'), pageUrl);
        const isArticle = url.origin === pageUrl.origin
            && url.pathname.startsWith('/wiki/')
            && !url.pathname.includes(':');

        if (isArticle) {
            url.hash = '';
            articleUrls.push(url.href);
        }
    }

    return articleUrls;
}

async function crawl(startUrl) {
    const queue = [startUrl];
    const visitedUrls = new Set(queue);

    while (queue.length > 0) {
        const pageUrl = new URL(queue.shift());

        try {
            const response = await fetch(pageUrl);
            if (!response.ok) {
                console.error(`Failed to fetch ${pageUrl.href}: ${response.statusText}`);
                continue;
            }

            const { document } = new JSDOM(await response.text()).window;

            console.log('Indexing:', pageUrl.href);
            // todo send or save pageUrl.href, extractText(document) somewhere

            for (const articleUrl of extractArticleUrls(document, pageUrl)) {
                if (!visitedUrls.has(articleUrl)) {
                    visitedUrls.add(articleUrl);
                    queue.push(articleUrl);
                }
            }
        } catch (error) {
            console.error(`Error crawling ${pageUrl.href}:`, error);
        }

        await delay(DELAY_MILLISECONDS);
    }
}

crawl(START_URL);
