const { chromium } = require("playwright");


async function sortHackerNewsArticles() {
  // launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // go to Hacker News
  await page.goto("https://news.ycombinator.com/newest");

  // create an array to hold articles
  let articles = [];

  // gather 100 articles
  while (articles.length < 100) {
		// scrape the 30 articles on the current page
		const newArticles = await page.evaluate(() => {
			let articlesOnPage = [];
			document.querySelectorAll('.athing').forEach(article => {
				let title = article.querySelector('.titleline a').innerText;
				let timestamp = article.nextElementSibling.querySelector('.age').getAttribute('title');
				articlesOnPage.push({ title, timestamp });
			});
			return articlesOnPage;
		});

		// add 30 articles from page to article list
		articles = articles.concat(newArticles);

		

		// if we don't have 100 articles yet, click the "More" button
		if (articles.length < 100) {
			await page.click('a.morelink');
			await page.waitForTimeout(2000);  // wait for next page to load
		}
  }

  // make sure array is EXACTLY 100 articles long
  articles = articles.slice(0, 100);

  // use an old timestamp for 4th article (for testing purposes)
  //articles[3].timestamp = '2024-10-02T19:43:13.000000Z';

  // validate that articles are sorted newest to oldest
  let isSorted = true;
  for (let i = 0; i < articles.length - 1; i++) {
		const currentTime = new Date(articles[i].timestamp);
		const nextTime = new Date(articles[i + 1].timestamp);
		if (currentTime < nextTime) {
			console.log(`Article ${i+1} was posted ${currentTime}.`);
			console.log(`Article ${i+2} was posted ${nextTime}.`);
			isSorted = false;
			break;
		}
  }

  // print result to console
  if (isSorted) {
		console.log("The articles are sorted from newest to oldest.");
  }
  else {
		console.log("The articles AREN'T sorted from newest to oldest.")
  }

  // close the browser
  await browser.close();
}

(async () => {
  await sortHackerNewsArticles();
})();
