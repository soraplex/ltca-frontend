const pets = [
  {
    name: "Rex",
    species: "German Shepherd (Dog)",
    favoriteActivity: "Fetch",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRve48NDzBok7kPzWuPybhioY2a5PfzQ5JIeT0iWAKHHGbTtVGmUiSVC4nXJuqnduuyqLt-dc6zNA68_98K6qPrRFaVrqpKxtY_ULpK65p-&s=10",
  },
  {
    name: "Bella",
    species: "Golden Retriever (Dog)",
    favoriteActivity: "Swimming",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAY5HqRwYiGiSjnB3_zjyG78ksdiTpLbHfHOoUuOyjbJCc_AKzzWmI8ZchXSK3XcAkTm47ls99DYnGEPv6Hpc4vFZimgrG-9URU7ZGt1e1_w&s=10",
  },
  {
    name: "Titan",
    species: "Cane Corso (Dog)",
    favoriteActivity: "Napping",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjhu17N8JhPTVfe9yBoKM1JzWm0Y3jcp3Z9ZCJOYz3vz_HSamKS_l0QLQlpVsoDFc1pABmTv4a_k9uYfV5PAfvMycrjilV0EvEgmNjsEFU&s=10",
  },
];

const petsDiv = document.querySelector("#petsDiv");

for (const pet of pets) {
  const card = document.createElement("div");
  card.className = "card mb-4";

  const img = document.createElement("img");
  img.src = pet.image;
  img.alt = pet.name;
  img.className = "card-img-top";

  const body = document.createElement("div");
  body.className = "card-body";

  const title = document.createElement("h4");
  title.className = "card-title";
  title.innerText = pet.name;

  const subtitle = document.createElement("h6");
  subtitle.className = "card-subtitle mb-2 text-body-secondary";
  subtitle.innerText = pet.species;

  const text = document.createElement("p");
  text.className = "card-text";
  text.innerText = pet.favoriteActivity;

  body.appendChild(title);
  body.appendChild(subtitle);
  body.appendChild(text);

  card.appendChild(img);
  card.appendChild(body);

  petsDiv.appendChild(card);
}
