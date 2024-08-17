// Imagine you're buying and selling stocks throughout the year. Your job is to find the biggest profit you could make by buying low and selling high only once.

// Here's what you're given: A list of stock prices of each day => [7,1,5,3,6,4]

// Here's what you need to find: the difference between the cheapest price you could have bought the stock and the most expensive price your could have sold later on

function maxProfit(prices) {
	let minPrice = prices[0]; // Assume the first daty is the cheapest to buy
	let maxProfit = 0;

	for (let i = 0; i < prices.length; i++) {
		const currentPrice = prices[i];

		// Update mininum price if a lower price is found
		minPrice = Math.min(minPrice, currentPrice);

		// Calculate the potential profit if we were to sell at the current price
		const potentialProfit = currentPrice - minPrice;

		maxProfit = Math.max(maxProfit, potentialProfit);
	}

	return maxProfit;
}

const prices = [7, 1, 5, 3, 6, 4];
const profit = maxProfit(prices);
console.log("Maximum profit: ", profit);
