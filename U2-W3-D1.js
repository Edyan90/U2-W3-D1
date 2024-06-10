/* class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  isSameAge(ageCompare) {
    if (this.age === ageCompare.age) {
      return "l'utente X ha la stessa età dell'utente Y";
    } else if (this.age > ageCompare.age) {
      return `l'utente X ha ${this.age} ed è più grande di  Y che ne ha ${ageCompare.age}`;
    } else {
      return `l'utente X è minore di Y`;
    }
  }
}
const X = new User("Eddy", "Turpo", 33, "Latium");
console.log(X);
const Y = new User("Emma", "Watson", 34, "London");
console.log(Y);
console.log(X.isSameAge(Y));
 */
class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  isSameOwner(ownerCompare) {
    if (this.ownerName === ownerCompare.ownerName) {
      return "gli animai hanno lo stesso padrone";
    } else {
      return "gli animali non hanno lo stesso padrone";
    }
  }
  createCard() {
    const card = document.createElement("div");
    card.classList.add("card", "m-3");
    card.style.width = "300px";
    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${this.petName}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${this.ownerName}</h6>
        <p class="card-text">Species: ${this.species}</p>
        <p class="card-text">Breed: ${this.breed}</p>
      </div>
    `;
    return card;
  }
}

/* const pet1 = new Pet("Fido", "Eddy", "Dog", "Labrador");
const pet2 = new Pet("Whiskers", "Michael", "Cat", "Siamese");

console.log(pet1.isSameOwner(pet2)); */

let listPets = [];

document.getElementById("petForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const petName = document.getElementById("petname").value;
  const ownerName = document.getElementById("ownername").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.appendChild(newPet.createCard());
  listPets.push(newPet);
  console.log(listPets);
});
