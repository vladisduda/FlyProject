var MongoClient = require('mongodb').MongoClient
const uri = 'mongodb://localhost:27017/'
const client = new MongoClient(uri)
async function run() {
	try {
		await client.connect()
		var database = client.db('fly')
		database.dropDatabase()
		database = client.db('fly')
		const gif = database.collection('gif')
		const result = await gif.insertOne({ name: 'Чмоня' })
		console.log(`${result} documents were inserted`)
	} finally {
		await client.close()
	}
}
run()
