window.addEventListener("load", () => {
  doSpread();
  doRest();
  doDestructuring();
});

// spread espalha, no caso aqui espalhei as mulheres casadas, e os homens casados separadamente
function doSpread() {
  const marriedMen = people.results.filter(
    (person) => person.name.title === "Mr"
  );

  const marriedWomen = people.results.filter(
    (person) => person.name.title === "Ms"
  );

  // e aqui juntei os dois
  const marriedPeople = [...marriedMen, ...marriedWomen, { msg: "Oi" }];
}

// O rest é o oposto do spread, ele agrupa
function doRest() {}

function infiniteSum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

function doDestructuring() {
  const first = people.results[0];

  // Sem destructuring, repetitivo.
  // const username = first.login.username;
  // const password = first.login.password;

  //Usando destructuring
  const { username, password } = first.login;

  console.log(username);
  console.log(password);
}
