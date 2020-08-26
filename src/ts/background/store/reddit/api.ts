export async function getShowerThought() {
	// uses Reddit api to fetch top shower thought
	try {
		const response = await fetch(
			'https://www.reddit.com/r/showerthoughts/top/.json?count=25',
		)
		const responseJson = await response.json()
		return responseJson.data.children[Math.floor(Math.random() * 24)].data.title
	} catch (error) {
		throw Error(error)
	}
}
