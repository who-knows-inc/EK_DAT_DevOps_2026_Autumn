import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule

class WikipageSpider(CrawlSpider):
    custom_settings = {
        'CONCURRENT_REQUESTS_PER_DOMAIN': 1,  # Wikipedia asks for this
        'DOWNLOAD_DELAY': 2,  # Politeness
        'AUTOTHROTTLE_ENABLED': True,
        'AUTOTHROTTLE_START_DELAY': 1,
        'AUTOTHROTTLE_MAX_DELAY': 10,
        'AUTOTHROTTLE_TARGET_CONCURRENCY': 1,
        'RANDOMIZE_DOWNLOAD_DELAY': True,
        'USER_AGENT': 'Mozilla/5.0 (compatible; MyWikiBotv1.0)',  # Wikipedia requires a User-Agent
        'ROBOTSTXT_OBEY': True,
        'LOG_LEVEL': 'INFO'  # DEBUG is verbose, INFO is cleaner
    }

    name = 'WikiPageSpider'
    allowed_domains = ['en.wikipedia.org']
    start_urls = ['https://en.wikipedia.org/wiki/List_of_common_misconceptions']
    rules = (
        Rule(LinkExtractor(allow=r'/wiki/'), callback='parse_item', follow=True, process_links='process_links'),
    )
    visited_urls = set()

    def parse_item(self, response):
        if response.url in self.visited_urls:
            return
        self.visited_urls.add(response.url)
        yield {
            'url': response.url,
            'title': response.css('h1 span.mw-page-title-main::text').get(),
            'content': response.css('#mw-content-text p::text').getall()
        }

    def process_links(self, links):
        # Filter out already visited URLs
        return [link for link in links if link.url not in self.visited_urls]