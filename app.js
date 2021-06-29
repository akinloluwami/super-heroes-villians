const HeroContainer = document.querySelector(".Hero-container");
const VillianContainer = document.querySelector(".Villian-container");
const loading = document.querySelector(".loader");

function FetchHeroData() {
  fetch("https://superhero-search.p.rapidapi.com/api/heroes", {
    method: "GET",
    headers: {
      // "x-rapidapi-key": "5caf141545msha2d29df358a627bp166d7djsna9e79f47d35b",
      "x-rapidapi-key": "3eb5864680mshbb0ee72783290fcp102a22jsn48c802b24cf9",
      "x-rapidapi-host": "superhero-search.p.rapidapi.com",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      data.forEach((hero) => {
        const { name, images } = hero;
        const heroEl = document.createElement("div");
        heroEl.classList.add("hero");
        heroEl.innerHTML = `
      <img src=${images.sm}>
        <p class="name">${name}</p>
        `;
        HeroContainer.appendChild(heroEl);
      });
    });
}
FetchHeroData();
function showLoading() {
  loading.classList.add("show");

  setTimeout(() => {
    loading.classList.remove("show");

    setTimeout(() => {
      FetchHeroData();
      FetchVillianData();
    }, 300);
  }, 1000);
}

window.addEventListener("scroll", (e) => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 2) {
    showLoading();
  }
});

function FetchVillianData() {
  fetch("https://superhero-search.p.rapidapi.com/api/villains", {
    method: "GET",
    headers: {
      // "x-rapidapi-key": "5caf141545msha2d29df358a627bp166d7djsna9e79f47d35b",
      "x-rapidapi-key": "3eb5864680mshbb0ee72783290fcp102a22jsn48c802b24cf9",
      "x-rapidapi-host": "superhero-search.p.rapidapi.com",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      data.forEach((villian) => {
        const { name, images } = villian;
        const villianEl = document.createElement("div");
        villianEl.classList.add("villian");
        villianEl.innerHTML = `
      <img src=${images.sm}>
        <p class="name">${name}</p>
        `;
        VillianContainer.appendChild(villianEl);
      });
    });
}
FetchVillianData();

const heroes = document.getElementById("heroes");
const villians = document.getElementById("villians");

villians.addEventListener("click", () => {
  HeroContainer.classList.add("hide");
  VillianContainer.classList.remove("hide");
  villians.classList.add("active");
  heroes.classList.remove("active");
});
heroes.addEventListener("click", () => {
  HeroContainer.classList.remove("hide");
  VillianContainer.classList.add("hide");
  villians.classList.remove("active");
  heroes.classList.add("active");
});

const quotes = [
  `“Why do we fall? So that we can learn to pick ourselves up.” Batman`,
  `“Faith is my sword. Truth is my shield. Knowledge my armor.” Stephen Strange`,
  ` “You’re going to make a difference. A lot of times it won’t be huge, it won’t be visible even. But it will matter just the same.” James Gordon`,
  `“You are much stronger than you think you are.” Superman`,
  `“With great power comes great responsibility.” Spiderman`,
  `“If there is nothing but what we make in this world, brothers, let us make it good.” Beta Ray Bill`,
  `“The answers you seek shall be yours, once I claim what’s mine.” Thor`,
  `“The real crime would be not to finish what we started.” Dr. Octopus`,
  ` “The greatest power on Earth is the magnificent power we all of us possess… the power of the human brain!” Professor X`,
  `“Awaken the superhero within you.” Asad Meah `,
  `“A true hero isn’t measured by the size of his strength, but by the size of his heart.” Zeus`,
  `“But everybody’s story begins ‘once upon a time’, and it’s up to us to cherish the time we’re given to ensure we live happily ever after.” Scarlet Witch`,
  `“Sometimes you have to take a leap of faith first. The trust part comes later.” Man of Steel`,
  `“All men have limits. They learn what they are and they learn not to exceed them. I ignore mine.” Chuck Dixon`,
  `“I have no idea where I’m going to be tomorrow but I accept the fact that tomorrow will come and I’m going to rise to meet it.” Donna Tray`,
  `“When you decide not to be afraid, you can find friends in super unexpected places.” Ms. Marvel`,
  `“Just because someone stumbles and loses their path, doesn’t mean they can’t be saved.” Professor Charles Xavier`,
  `“There is a right and a wrong in the universe and that distinction is not hard to make.” Superman`,
  `“I will fight for those who cannot fight for themselves.” Wonder Woman`,
  `“Heroes are made by the path they choose, not the powers they are graced with.” Iron Man`,
  ` “There are no heroes or villains there’s just what I want and how I’ll get it.” Magneto`,
  `“If you cage the beast, the beast will get angry.” Wolverine`,
  `“I have nothing to prove to you.” Captain Marvel`,
  `“How others see you is not important. How you see yourself means everything.” Superman`,
  `“Intelligence is a privilege, and it needs to be used for the greater good of people.” Dr. Octopus`,
  `“No man can win every battle, but no man should fall without a struggle.” Peter Parker`,
  `“Life hits you hard. But it takes you three seconds to decide if you are a superhero or not. I am.” Hrithik Roshan`,
  `“The ‘Amazing’ can only be created by facing fear, risk, and failure during the process.” Superman`,
  ` “You only have your thoughts and dreams ahead of you. You are someone. You mean something.” Batman`,
  `“I think you just have to appreciate who you are and hopefully they can see what a superhero is about.”Lucy Liu`,
  `“There is a superhero in all of us. We just need the courage to put on the cape.” Superman`,
  ` “If you are good at something, never do it for free.” The Joker`,
  `“It’s about what you believe. And I believe in love. Only love will truly save the world.” Wonder Woman`,
  `“I made a choice, this is my path.” Spiderman`,
  ` “It’s not who I am underneath, but what I do that defines me.” Batman`,
];

const showQuote = quotes[Math.floor(Math.random() * quotes.length)];

document.getElementById("quote").innerHTML = showQuote;

const switchNav = document.getElementById("switch");
window.addEventListener("scroll", () => {
  const x = window.scrollY;
  if (x > 648) {
    switchNav.classList.add("bg");
  } else {
    switchNav.classList.remove("bg");
  }
});
