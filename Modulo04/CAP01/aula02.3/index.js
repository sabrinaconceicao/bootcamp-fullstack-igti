import mongoose from "mongoose";

//Conectar ao MOngo DB pelo mongoose
(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Sabrina:Tobby85124@bootcamp-hen7o.mongodb.net/student?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    console.log("Erro ao conectar no MondoDB");
  }
})();

//Criação do modelo
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: true,
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

//Definindo o modelo da coleção
mongoose.model("student", studentSchema, "student");

const student = mongoose.model("student");

new student({
  name: "Paulo Assis",
  subject: "Matematica",
  type: "Trabalho Pratico",
  value: 22,
})
  .save()
  .then(() => console.log("Documento inserido"))
  .catch((err) => console.log("Falha ao inserir o documento"));
