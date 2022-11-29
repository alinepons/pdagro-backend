export function generateId(): string {
	const date = new Date()
	let id = date.toISOString().replace(/[-:\.TZ]/g, "")
	function randomValue(cicles: number) {
		for (let i = 0; i < cicles; i++) {
			id += `${Math.floor(Math.random() * 10)}`
		}
	}
	randomValue(4)
	return id
}

 export function generateCode(): string {
	return Math.floor(100000 + Math.random() * 900000).toString()
}