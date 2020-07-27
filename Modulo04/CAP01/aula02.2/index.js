const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://Sabrina:Tobby85124@bootcamp-hen7o.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect(async (err) => {
  //obter coleção student
  const collection = client.db("student").collection("student");

  //buscar documents cujo subject seja Historia
  const documents = await collection.find({ subject: "Historia" }).toArray();

  //console.log(documents);

  //obter a lista dos bancps no servidor conectado
  const databaselist = await client.db().admin.listDatabases();
  console.log("Databases:");

  databaselist.databases.forEach((db) => {
    console.log(` - ${db.name} `);
  });

  client.close();
});
