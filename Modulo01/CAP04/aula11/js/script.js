window.addEventListener("load", () => {
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery() ;
  doSort();
});

// Transforma e retorna um novo objeto
function doMap() {
  // no dele nao tem esse () no person
  const nameEmailArray = people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });

  console.log(nameEmailArray);

  return nameEmailArray;
}

// Retira elementos de acordo com a atribuição
function doFilter() {
  // no dele nao tem esse () no person
  const olderThan18 = people.results.filter((person) => {
    return person.dob.age > 18;
  });

  console.log(olderThan18);
}

function doForEach() {
  const mappedPeople = doMap();

  mappedPeople.forEach((person) => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });

  console.log(mappedPeople);
}

function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);

  console.log(totalAges);

  //let sumAges = 0;

  // for (let i = 0; i < people.results.length; i++) {
  //   var current = people.results[i];
  //   sumAges += current.dob.age;
  // }

  // console.log(sumAges);
}

// Parecido com o Filter mas o find busca, e retorna o objeto encontrado
function doFind() {
  // no dele nao tem esse () no person
  const found = people.results.find((person) => {
    return person.location.state === "Minas Gerais";
  });

  console.log(found);
}

//Ele retorna verdadeiro ou falso
function doSome() {
  // no dele nao tem esse () no person
  const found = people.results.some((person) => {
    return person.location.state === "Amazonas";
  });

  console.log(found);
}

// Every é para todos, então se todos atendem determinada regra retorna true, senão retorna false
function doEvery() {
  // no dele nao tem esse () no person
  const every = people.results.every((person) => {
    return person.nat === "BR";
  });

  console.log(every);
}

// Ordenação conforme uma função que vc especificar
function doSort() {
  const mappedNames = people.results
    .map((person) => {
      return {
        name: person.name.first,
      };
    })
    // está filtrando so as pessoa que o primeiro nome começa com A
    .filter((person) => person.name.startsWith("A"))
    .sort((a, b) => {
      //para ordenar do menor nome para o maior
      return a.name.length - b.name.length;
      //return a.name.localeCompare(b.name);
    });

  console.log(mappedNames);
}
