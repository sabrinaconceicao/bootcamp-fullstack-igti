const express = require("express");
const fs = require("fs");
const path = require("path");
const rota = new express.Router();

function verificaSeGradeExiste(req, res, next) {
  const { ID } = req.params;
  const dados = lerDados();
  const grade = dados.grades.find((grade) => grade.id === Number(ID));

  if (grade != null) {
    next();
  } else {
    res.status(404).json({ erro: "Grade não encontrada" });
  }
}

rota.post("/criarGrade", (req, res) => {
  const { student, subject, type, value } = req.body;
  const dados = lerDados();

  const grade = {
    id: dados.nextId,
    student,
    subject,
    type,
    value,
    timestamp: new Date(),
  };

  criarNovaGrade(dados, grade);

  res.send(grade);
});

rota.put("/atualizaGrade/:ID", verificaSeGradeExiste, (req, res) => {
  const { ID } = req.params;
  const { student, subject, type, value } = req.body;
  let dados = lerDados();
  let grade = dados.grades.find((grade) => grade.id === Number(ID));

  grade.student = student;
  grade.subject = subject;
  grade.type = type;
  grade.value = value;

  gravaDados(dados);

  res.send(grade);
});

rota.delete("/deletaGrade/:ID", verificaSeGradeExiste, (req, res) => {
  const { ID } = req.params;
  let dados = lerDados();
  dados.nextId = dados.nextId - 1;
  dados.grades = dados.grades.filter((x) => x.id !== Number(ID));

  gravaDados(dados);

  res.status(200).json({ Ok: "Grade removida" });
});

rota.get("/buscarGrade/:ID", verificaSeGradeExiste, (req, res) => {
  const { ID } = req.params;
  const dados = lerDados();
  const grade = dados.grades.find((x) => x.id === Number(ID));
  res.send(grade);
});

rota.get("/consultarNotaTotal", (req, res) => {
  const { student, subject } = req.query;
  const dados = lerDados();
  const dadosFiltrados = dados.grades.filter(
    (grade) => grade.student === student && grade.subject === subject
  );

  const nota = dadosFiltrados.reduce(
    (total, atual) => (total = total + atual.value),
    0
  );

  const grade = {
    estudante: student,
    nota: nota,
  };

  res.send(grade);
});

rota.get("/consultarMediaDasGrades", (req, res) => {
  const { subject, type } = req.query;
  const dados = lerDados();
  const dadosFiltrados = dados.grades.filter(
    (x) => x.subject === subject && x.type === type
  );
  const nota = dadosFiltrados.reduce(
    (total, atual) => (total = total + atual.value),
    0
  );
  const mediaTotal = nota / dadosFiltrados.length;

  const obj = {
    materia: subject,
    media: mediaTotal,
  };

  res.send(obj);
});

rota.get("/consultarMelhoresGrades", (req, res) => {
  const { subject, type } = req.query;
  const dados = lerDados();
  const dadosFiltrados = dados.grades.filter(
    (x) => x.subject === subject && x.type === type
  );
  const dadosOrdendos = dadosFiltrados.sort((a, b) => {
    return a.value > b.value;
  });

  res.send(dadosOrdendos.slice(0, 3));
});

function gravaDados(dados) {
  fs.writeFileSync(
    path.join(__dirname, "/dados", "grades.json"),
    JSON.stringify(dados),
    "utf8"
  );
}

function criarNovaGrade(dados, grade) {
  const novaGrade = {
    nextId: dados.nextId + 1,
    grades: [...dados.grades, grade],
  };

  fs.writeFileSync(
    path.join(__dirname, "/dados", "grades.json"),
    JSON.stringify(novaGrade),
    "utf8"
  );

  const novosDados = lerDados();
  return novosDados;
}

function lerDados() {
  const dados = JSON.parse(
    fs.readFileSync(path.join(__dirname, "/dados", "grades.json"))
  );
  return dados;
}

module.exports = rota;
