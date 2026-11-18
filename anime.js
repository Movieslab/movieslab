/* =========================================================
   anime.js  -  ALL ANIME MOVIES live here (separate from movies.js)
   ---------------------------------------------------------
   Anime is kept apart from the Hollywood list on purpose:
   it shows ONLY on anime.html (and opens on movie.html as usual).
   It does not appear in Explore, the studios or the search box.

   HOW TO ADD AN ANIME MOVIE
   1. Copy the example block below and paste it above the closing  };
   2. Change the key (the word before the colon, no spaces: e.g. yourname)
   3. Fill in the details. Same fields as movies.js. A comma after every block.

   Actor photos: define them as const at the TOP of this file, like in
   movies.js, e.g.   const actorname = "https://...";
   then use  img: actorname  (no quotes) in the cast list.
   ========================================================= */

/* ---------- voice actor photos: paste each image link between the quotes ---------- */
const rumihiiragi = "https://tse1.mm.bing.net/th?q=Rumi+Hiiragi+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const miyuirino = "https://tse1.mm.bing.net/th?q=Miyu+Irino+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const nanokahara = "https://tse1.mm.bing.net/th?q=Nanoka+Hara+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const hokutomatsumura = "https://tse1.mm.bing.net/th?q=Hokuto+Matsumura+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const natsukihanae = "https://tse1.mm.bing.net/th?q=Natsuki+Hanae+voice+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const akarikito = "https://tse1.mm.bing.net/th?q=Akari+Kito+voice+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const hiroshimono = "https://tse1.mm.bing.net/th?q=Hiro+Shimono+voice+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const yoshitsugumatsuoka = "https://tse1.mm.bing.net/th?q=Yoshitsugu+Matsuoka+voice+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const kotarodaigo = "https://tse1.mm.bing.net/th?q=Kota+Daigo+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const nanamori = "https://tse1.mm.bing.net/th?q=Nana+Mori+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const anime = {

  spiritedaway: {
    title: "Spirited Away",
    director: "Hayao Miyazaki",
    genres: ["Animation", "Adventure", "Family", "Fantasy"],
    pills: ["2001", "2H 5M", "IMDb 8.6", "PG"],
    overview:
      "During her family's move, ten-year-old Chihiro wanders into a world ruled by gods, witches and spirits, where humans are changed into beasts. To save her parents she must work in a bathhouse for the spirits.",
    language: "Japanese (English subtitles)",
    caution: "",
    watchLink: "",
    accent: "110, 160, 120",
    hero: "",
    poster: "",
    trailers: [],
    cast: [
      { name: "Rumi Hiiragi", role: "Chihiro Ogino (voice)", img: rumihiiragi },
      { name: "Miyu Irino", role: "Haku (voice)", img: miyuirino }
    ]
  },
  suzume: {
    title: "Suzume",
    director: "Makoto Shinkai",
    genres: ["Animation", "Adventure", "Fantasy"],
    pills: ["2022", "2H 2M", "IMDb 7.6", "PG"],
    overview:
      "A 17-year-old girl named Suzume helps a mysterious young man who is searching for doors that unleash disasters all over Japan. She must close them before they cause destruction.",
    language: "Japanese (English subtitles)",
    caution: "",
    watchLink: "",
    accent: "80, 140, 200",
    hero: "",
    poster: "",
    trailers: [],
    cast: [
      { name: "Nanoka Hara", role: "Suzume Iwato (voice)", img: nanokahara },
      { name: "Hokuto Matsumura", role: "Souta Munakata (voice)", img: hokutomatsumura }
    ]
  },
  demonslayermugentrain: {
    title: "Demon Slayer: Mugen Train",
    director: "Haruo Sotozaki",
    genres: ["Animation", "Action", "Fantasy"],
    pills: ["2020", "1H 57M", "IMDb 8.2", "R"],
    overview:
      "Tanjiro and his friends join the Flame Hashira Kyojuro Rengoku on a mission aboard the Mugen Train, where more than 40 people have disappeared. A powerful demon waits for them.",
    language: "Japanese (English subtitles)",
    caution: "",
    watchLink: "",
    accent: "220, 60, 40",
    hero: "",
    poster: "",
    trailers: [],
    cast: [
      { name: "Natsuki Hanae", role: "Tanjiro Kamado (voice)", img: natsukihanae },
      { name: "Akari Kito", role: "Nezuko Kamado (voice)", img: akarikito },
      { name: "Hiro Shimono", role: "Zenitsu Agatsuma (voice)", img: hiroshimono },
      { name: "Yoshitsugu Matsuoka", role: "Inosuke Hashibira (voice)", img: yoshitsugumatsuoka }
    ]
  },
  weatheringwithyou: {
    title: "Weathering With You",
    director: "Makoto Shinkai",
    genres: ["Animation", "Drama", "Fantasy", "Romance"],
    pills: ["2019", "1H 52M", "IMDb 7.5", "PG"],
    overview:
      "A high-school boy who has run away to Tokyo befriends a girl who can influence the weather. Together they face the cost of her power and a city that never stops raining.",
    language: "Japanese (English subtitles)",
    caution: "",
    watchLink: "",
    accent: "90, 150, 220",
    hero: "",
    poster: "",
    trailers: [],
    cast: [
      { name: "Kotaro Daigo", role: "Hodaka Morishima (voice)", img: kotarodaigo },
      { name: "Nana Mori", role: "Hina Amano (voice)", img: nanamori }
    ]
  },


  /* ---------- EXAMPLE (to use it: delete the two comment marks around the block) ----------
  yourname: {
    title: "Your Anime Movie",
    director: "Director Name",
    genres: ["Animation", "Adventure", "Fantasy"],
    pills: ["2016", "1H 46M", "IMDb 8.4", "PG"],
    overview: "Short story of the movie.",
    language: "Japanese (English subtitles)",
    caution: "",
    watchLink: "https://drive.google.com/...",
    accent: "229, 113, 48",
    hero: "https://...hero-wallpaper.jpg",
    poster: "https://...poster.jpg",
    trailers: [
      { id: "YOUTUBE_VIDEO_ID", thumb: "https://img.youtube.com/vi/YOUTUBE_VIDEO_ID/hqdefault.jpg", alt: "Trailer" }
    ],
    cast: [
      { name: "Voice Actor", role: "Character", img: actorname }
    ]
  },
  ---------------------------------------------------------------------- */

};