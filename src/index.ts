interface a {
  name: string,
  address: string,
}

abstract class aAnimal {
  detail: a
  abstract sound(): void
  abstract sound(s: string): void
}

class Animal extends aAnimal {
  sound(): void {
    console.log("Wek wek")
  }
}

const main = () => {
  const obj = new Animal()
}

main()