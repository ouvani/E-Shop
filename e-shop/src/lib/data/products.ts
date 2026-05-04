export let res = {};

const url = 'https://www.amazon.com/OLIXIS-Office-Desk-Chair-Adjustable/dp/B0GRJVYMHT/ref=sr_1_6?sr=8-6';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-host': 'amazon-product-info2.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
  res = result;
	console.log(result);
} catch (error) {
	console.error(error);
}