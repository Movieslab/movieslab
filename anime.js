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
// The Boy and the Heron
const lucapadovan             = "https://tse1.mm.bing.net/th?q=Luca+Padovan+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const gemmachan               = "https://tse1.mm.bing.net/th?q=Gemma+Chan+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const karenfukuhara           = "https://tse1.mm.bing.net/th?q=Karen+Fukuhara+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const markhamill              = "https://tse1.mm.bing.net/th?q=Mark+Hamill+actor+portrait&w=500&h=500&c=7&rs=1&p=0";

// Princess v 
const billycrudup             = "https://tse1.mm.bing.net/th?q=Billy+Crudup+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const clairedanes             = "https://tse1.mm.bing.net/th?q=Claire+Danes+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const minniedriver            = "https://tse1.mm.bing.net/th?q=Minnie+Driver+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const jadapinkettsmith        = "https://tse1.mm.bing.net/th?q=Jada+Pinkett+Smith+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const keithdavid              = "https://tse1.mm.bing.net/th?q=Keith+David+actor+portrait&w=500&h=500&c=7&rs=1&p=0";

// Children of the Sea
const manaashida              = "https://tse1.mm.bing.net/th?q=Mana+Ashida+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const hiiroishibashi          = "https://tse1.mm.bing.net/th?q=Hiiro+Ishibashi+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const seishuuragami           = "https://tse1.mm.bing.net/th?q=Seishu+Uragami+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const goroinagaki             = "https://tse1.mm.bing.net/th?q=Goro+Inagaki+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const yuaoi                   = "https://tse1.mm.bing.net/th?q=Yu+Aoi+actress+portrait&w=500&h=500&c=7&rs=1&p=0";

// Weathering with You
const shunoguri               = "https://tse1.mm.bing.net/th?q=Shun+Oguri+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const sakurakiryu             = "https://tse1.mm.bing.net/th?q=Kyu+Saku+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const tsubasahonda            = "https://tse1.mm.bing.net/th?q=Tsubasa+Honda+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const chiekobaisho            = "https://tse1.mm.bing.net/th?q=Chieko+Baisho+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const seihiraizumi            = "https://tse1.mm.bing.net/th?q=Sei+Hiraizumi+actor+portrait&w=500&h=500&c=7&rs=1&p=0";



const erifukatsu              = "https://tse1.mm.bing.net/th?q=Eri+Fukatsu+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const shotasometani           = "https://tse1.mm.bing.net/th?q=Shota+Sometani+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const sairiito                = "https://tse1.mm.bing.net/th?q=Sairi+Ito+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const kotonehanase            = "https://tse1.mm.bing.net/th?q=Kotone+Hanase+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
// The Garden of Words
const kanahanazawa            = "https://tse1.mm.bing.net/th?q=Kana+Hanazawa+voice+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const fumihirano              = "https://tse1.mm.bing.net/th?q=Fumi+Hirano+voice+actress+portrait&w=500&h=500&c=7&rs=1&p=0";

// A Whisker Away
const miraishida              = "https://tse1.mm.bing.net/th?q=Mira+Shida+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const koichiyamadera          = "https://tse1.mm.bing.net/th?q=Koichi+Yamadera+voice+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
// Jailer 2 
// extra photos that were used but never defined
const robertpattinson = "https://tse1.mm.bing.net/th?q=Robert+Pattinson+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const christianbale = "https://tse1.mm.bing.net/th?q=Christian+Bale+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const florencepugh = "https://tse1.mm.bing.net/th?q=Florence+Pugh+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const willemdafoe = "https://tse1.mm.bing.net/th?q=Willem+Dafoe+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const davebautista = "https://tse1.mm.bing.net/th?q=Dave+Bautista+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const gilliananderson = "https://tse1.mm.bing.net/th?q=Gillian+Anderson+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const billybobthornton = "https://tse1.mm.bing.net/th?q=Billy+Bob+Thornton+actor+portrait&w=500&h=500&c=7&rs=1&p=0";

// photos for the newly added anime (were missing)
const aoiyuki = "https://tse1.mm.bing.net/th?q=Aoi+Yuki+voice+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const etsukoichihara = "https://tse1.mm.bing.net/th?q=Etsuko+Ichihara+voice+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const masaminagasawa = "https://tse1.mm.bing.net/th?q=Masami+Nagasawa+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const monekamishiraishi = "https://tse1.mm.bing.net/th?q=Mone+Kamishiraishi+actress+portrait&w=500&h=500&c=7&rs=1&p=0";
const nobunagashimazaki = "https://tse1.mm.bing.net/th?q=Nobunaga+Shimazaki+voice+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const ryonarita = "https://tse1.mm.bing.net/th?q=Ryo+Narita+actor+portrait&w=500&h=500&c=7&rs=1&p=0";
const ryunosukekamiki = "https://tse1.mm.bing.net/th?q=Ryunosuke+Kamiki+actor+portrait&w=500&h=500&c=7&rs=1&p=0";

const anime = {


  
theboyandtheheron: {
  title: "The Boy and the Heron",
  director: "Hayao Miyazaki",
  genres: ["Animation", "Adventure", "Fantasy"],
  pills: ["2023", "2H 4M", "IMDb 7.5", "PG-13"],
  overview:
    "A young boy named Mahito, unhappy in his new town after his mother's death, is led by a talking grey heron into a mysterious tower, where he enters a magical world shared by the living and the dead.",
  language: "Dual Audio (English, japanese)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1ee9Qkc2mZAl1uSOt9DD4HWhKXuXXRLP2/view?usp=sharing",

  accent: "58, 152, 170",
  theme: {
    buttonColor: "#2e9aa8",
    buttonGlow: "rgba(58, 164, 180, 0.5)",
    lineColor: "#d4c07a",
    backHover: "#2e9aa8",
    castHover: "#d4c07a",
    cardHover: "#d4c07a",
    playHover: "#46b4c2",
    cautionColor: "#e4d49a",
    textColor: "#eef0e6",
    castRoleColor: "#98a898",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(8, 18, 18, 0.95) 0%, rgba(8, 18, 18, 0.42) 38%, transparent 62%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(212, 192, 122, 0.2) 0%, transparent 55%), linear-gradient(160deg, #1e4044 0%, #0a1414 100%)",
    castBackground: "linear-gradient(180deg, #0a1414 0%, #142a2a 100%)",
    reviewsBackground: "linear-gradient(180deg, #142a2a 0%, #1e4040 60%, #4a5430 100%)"
  },

  hero: "https://res.cloudinary.com/dw3etjjn0/image/upload/v1794923830/the-boy-and-the-heron-dd_npoi32.jpg",
  poster: "https://res.cloudinary.com/dw3etjjn0/image/upload/v1794924199/Hayao_Miyazaki_2023_ba23ul.jpg",

trailers: [
  {
    id: "t5khm-VjEu4",
    alt: "Official English Trailer",
    thumb: "https://img.youtube.com/vi/t5khm-VjEu4/hqdefault.jpg"
  }
],
  cast: [
    { name: "Luca Padovan",     role: "Mahito Maki (voice)",   img: lucapadovan },
    { name: "Robert Pattinson", role: "Grey Heron (voice)",    img: robertpattinson },
    { name: "Christian Bale",   role: "Shoichi Maki (voice)",  img: christianbale },
    { name: "Gemma Chan",       role: "Natsuko (voice)",       img: gemmachan },
    { name: "Florence Pugh",    role: "Himi (voice)",          img: florencepugh },
    { name: "Willem Dafoe",     role: "Parakeet Chief (voice)", img: willemdafoe },
    { name: "Dave Bautista",    role: "Pelican (voice)",       img: davebautista },
    { name: "Mark Hamill",      role: "Grand Uncle (voice)",   img: markhamill },
    { name: "Karen Fukuhara",   role: "Kiriko (voice)",        img: karenfukuhara }
  ]
},

princessmononoke: {
  title: "Princess Mononoke",
  director: "Hayao Miyazaki",
  genres: ["Animation", "Adventure", "Fantasy"],
  pills: ["1997", "2H 14M", "IMDb 8.3", "PG-13"],
  overview:
    "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.",
  language: "Dual Audio (English, japanese)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/17w3AFQIasKCQzF0DhuLOopWYmePuE32e/view?usp=sharing",

  accent: "76, 150, 120",
  theme: {
    buttonColor: "#b8322a",
    buttonGlow: "rgba(204, 56, 44, 0.52)",
    lineColor: "#7ab4a0",
    backHover: "#b8322a",
    castHover: "#7ab4a0",
    cardHover: "#7ab4a0",
    playHover: "#d8483a",
    cautionColor: "#a4d0c0",
    textColor: "#e8f0ec",
    castRoleColor: "#8ca69a",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(2, 8, 8, 0.96) 0%, rgba(2, 8, 8, 0.5) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(184, 50, 42, 0.2) 0%, transparent 55%), linear-gradient(160deg, #163a34 0%, #030a08 100%)",
    castBackground: "linear-gradient(180deg, #030a08 0%, #0e2420 100%)",
    reviewsBackground: "linear-gradient(180deg, #0e2420 0%, #1a4038 60%, #4a1c1a 100%)"
  },

  hero: "https://res.cloudinary.com/dw3etjjn0/image/upload/v1794924343/wp8056990-mononoke-princess-wallpapers_pklzhg.jpg",
  poster: "https://res.cloudinary.com/dw3etjjn0/image/upload/v1794924255/436849232630039720_xxxwce.jpg",

trailers: [
  {
    id: "vf6c6n35wr4",
    alt: "Official English Trailer",
    thumb: "https://img.youtube.com/vi/vf6c6n35wr4/hqdefault.jpg"
  }
],

  cast: [
    { name: "Billy Crudup",        role: "Ashitaka (voice)",    img: billycrudup },
    { name: "Claire Danes",        role: "San (voice)",         img: clairedanes },
    { name: "Minnie Driver",       role: "Lady Eboshi (voice)", img: minniedriver },
    { name: "Gillian Anderson",    role: "Moro (voice)",        img: gilliananderson },
    { name: "Billy Bob Thornton",  role: "Jigo (voice)",        img: billybobthornton },
    { name: "Jada Pinkett Smith",  role: "Toki (voice)",        img: jadapinkettsmith },
    { name: "Keith David",         role: "Okkoto (voice)",      img: keithdavid }
  ]
},

childrenofthesea: {
  title: "Children of the Sea",
  director: "Ayumu Watanabe",
  genres: ["Animation", "Adventure", "Drama", "Fantasy"],
  pills: ["2019", "1H 51M", "IMDb 7.6", "PG"],
  overview:
    "Ruka, a young girl whose life is about to change, meets two mysterious boys raised in the sea, and together they are drawn into a cosmic mystery that connects the ocean, the stars and the origin of life.",
  language: "Dual Audio (English, japanese)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/12eJV6H0S8NGSNxavqAHm1uY8ItXWJ9bb/view?usp=sharing",

  accent: "38, 150, 220",
  theme: {
    buttonColor: "#1e8ee0",
    buttonGlow: "rgba(40, 156, 232, 0.55)",
    lineColor: "#7ad0f0",
    backHover: "#1e8ee0",
    castHover: "#7ad0f0",
    cardHover: "#7ad0f0",
    playHover: "#40a8f0",
    cautionColor: "#a4e0f8",
    textColor: "#eaf4fa",
    castRoleColor: "#88a8c0",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(2, 10, 24, 0.94) 0%, rgba(2, 10, 24, 0.4) 38%, transparent 62%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(122, 208, 240, 0.2) 0%, transparent 55%), linear-gradient(160deg, #0e3868 0%, #030a18 100%)",
    castBackground: "linear-gradient(180deg, #030a18 0%, #0a2040 100%)",
    reviewsBackground: "linear-gradient(180deg, #0a2040 0%, #104a80 60%, #0c6a8a 100%)"
  },

  hero: "https://res.cloudinary.com/dw3etjjn0/image/upload/v1794924369/840062136723455374_s3minf.jpg",
  poster: "https://res.cloudinary.com/dw3etjjn0/image/upload/v1794924296/1126955506745111036_wdoshu.jpg",


trailers: [
  {
    id: "SOhRCIv-VOE",
    alt: "Official US Trailer - GKIDS",
    thumb: "https://img.youtube.com/vi/SOhRCIv-VOE/hqdefault.jpg"
  }
],
  cast: [
    { name: "Mana Ashida",     role: "Ruka Azumi (voice)", img: manaashida },
    { name: "Hiiro Ishibashi", role: "Umi (voice)",        img: hiiroishibashi },
    { name: "Seishu Uragami",  role: "Sora (voice)",       img: seishuuragami },
    { name: "Goro Inagaki",    role: "Masaaki (voice)",    img: goroinagaki },
    { name: "Yu Aoi",          role: "Kanako (voice)",     img: yuaoi }
  ]
},

weatheringwithyou: {
  title: "Weathering with You",
  director: "Makoto Shinkai",
  genres: ["Animation", "Drama", "Fantasy", "Romance"],
  pills: ["2019", "1H 52M", "IMDb 7.5", "PG-13"],
  overview:
    "A high-school boy who has run away to Tokyo befriends a girl who appears to be able to manipulate the weather, and together they discover how far they will go to keep the sun shining.",
  language: "Dual Audio (English, japanese)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1VrvDZfmFmv-NzKKMaUMhWLNze3N-A1w7/view?usp=sharing",

  accent: "60, 150, 240",
  theme: {
    buttonColor: "#2f8cf0",
    buttonGlow: "rgba(56, 152, 250, 0.55)",
    lineColor: "#f0a8c8",
    backHover: "#2f8cf0",
    castHover: "#f0a8c8",
    cardHover: "#f0a8c8",
    playHover: "#4aa0ff",
    cautionColor: "#f8c4a8",
    textColor: "#eef2fa",
    castRoleColor: "#9aa8c4",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(4, 10, 30, 0.94) 0%, rgba(4, 10, 30, 0.4) 38%, transparent 62%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(240, 168, 200, 0.22) 0%, transparent 55%), linear-gradient(160deg, #123a7a 0%, #040a1c 100%)",
    castBackground: "linear-gradient(180deg, #040a1c 0%, #0c2050 100%)",
    reviewsBackground: "linear-gradient(180deg, #0c2050 0%, #1a3a80 55%, #5a2a6a 100%)"
  },

  hero: "https://res.cloudinary.com/dw3etjjn0/image/upload/v1794924366/Weathering-With-You-Background-Images_wt8j6i.png",
  poster: "https://res.cloudinary.com/dw3etjjn0/image/upload/v1794924372/Weathering_with_you_poster_1_quohmp.jpg",


trailers: [
  {
    id: "9N1gmaD499k",
    alt: "Official Subtitled Teaser",
    thumb: "https://img.youtube.com/vi/9N1gmaD499k/hqdefault.jpg"
  },
  {
    id: "Q6iK6DjV_iE",
    alt: "Official Subtitled Trailer - GKIDS",
    thumb: "https://img.youtube.com/vi/Q6iK6DjV_iE/hqdefault.jpg"
  }
],
  cast: [
    { name: "Kotaro Daigo",   role: "Hodaka Morishima (voice)", img: kotarodaigo },
    { name: "Nana Mori",      role: "Hina Amano (voice)",       img: nanamori },
    { name: "Shun Oguri",     role: "Keisuke Suga (voice)",     img: shunoguri },
    { name: "Sakura Kiryu",   role: "Nagi Amano (voice)",       img: sakurakiryu },
    { name: "Tsubasa Honda",  role: "Natsumi (voice)",          img: tsubasahonda },
    { name: "Chieko Baisho",  role: "Tome (voice)",             img: chiekobaisho },
    { name: "Sei Hiraizumi",  role: "Yasui (voice)",            img: seihiraizumi }
  ]
},
thegardenofwords: {
  title: "The Garden of Words",
  director: "Makoto Shinkai",
  genres: ["Animation", "Drama", "Romance"],
  pills: ["2013", "46M", "IMDb 7.5", "PG"],
  overview:
    "Takao, a 15-year-old aspiring shoemaker, skips school on rainy mornings to sketch designs in a Tokyo garden, where he meets Yukari, a mysterious older woman. As the rainy season passes, their unlikely bond grows deeper.",
  language: "Dual Audio (English, japanese)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/17_ta795u0KhXaaWoNMd42U4d1VEISbnT/view?usp=sharing",

  accent: "72, 170, 90",
  theme: {
    buttonColor: "#2e9e56",
    buttonGlow: "rgba(56, 180, 100, 0.52)",
    lineColor: "#b878d8",
    backHover: "#2e9e56",
    castHover: "#b878d8",
    cardHover: "#b878d8",
    playHover: "#46b872",
    cautionColor: "#d4a8e8",
    textColor: "#eaf4ec",
    castRoleColor: "#8eaa96",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(2, 10, 6, 0.95) 0%, rgba(2, 10, 6, 0.45) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(184, 120, 216, 0.2) 0%, transparent 55%), linear-gradient(160deg, #123c24 0%, #030a06 100%)",
    castBackground: "linear-gradient(180deg, #030a06 0%, #0c2616 100%)",
    reviewsBackground: "linear-gradient(180deg, #0c2616 0%, #164a2c 60%, #3c1e50 100%)"
  },

  hero: "https://res.cloudinary.com/dw3etjjn0/image/upload/v1794927535/1006710_1_glcok1.jpg",
  poster: "https://res.cloudinary.com/dw3etjjn0/image/upload/v1794924345/The_Garden_Of_Words_1_wcpe7q.jpg",


trailers: [
  {
    id: "udDIkl6z8X0",
    alt: "Official Trailer - CoMix Wave Films",
    thumb: "https://img.youtube.com/vi/udDIkl6z8X0/hqdefault.jpg"
  }
],

  cast: [
    { name: "Miyu Irino",     role: "Takao Akizuki (voice)",  img: miyuirino },
    { name: "Kana Hanazawa",  role: "Yukari Yukino (voice)",  img: kanahanazawa },
    { name: "Fumi Hirano",    role: "Takao's Mother (voice)", img: fumihirano }
  ]
},

awhiskeraway: {
  title: "A Whisker Away",
  director: "Junichi Sato, Tomotaka Shibayama",
  genres: ["Animation", "Drama", "Fantasy", "Romance"],
  pills: ["2020", "1H 44M", "IMDb 7.0", "PG"],
  overview:
    "A peculiar girl, who is in love with a boy in her class, gets a magic mask that lets her turn into a cat. As a cat, she can stay close to him, but the longer she wears the mask, the harder it becomes to return to being human.",
  language: "Dual Audio (English, japanese)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1cvOdik3Y38rPP2HX3sfD2fxw-WtoK_LA/view?usp=sharing",

  accent: "240, 140, 120",
  theme: {
    buttonColor: "#e07c68",
    buttonGlow: "rgba(240, 140, 120, 0.52)",
    lineColor: "#9ab0e0",
    backHover: "#e07c68",
    castHover: "#9ab0e0",
    cardHover: "#9ab0e0",
    playHover: "#f09480",
    cautionColor: "#f8c4a8",
    textColor: "#f6eef0",
    castRoleColor: "#a898a8",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(12, 8, 22, 0.94) 0%, rgba(12, 8, 22, 0.4) 38%, transparent 62%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(240, 140, 120, 0.22) 0%, transparent 55%), linear-gradient(160deg, #36305e 0%, #0a0818 100%)",
    castBackground: "linear-gradient(180deg, #0a0818 0%, #1c1838 100%)",
    reviewsBackground: "linear-gradient(180deg, #1c1838 0%, #3c2c58 55%, #6a3a40 100%)"
  },

  hero: "https://res.cloudinary.com/dw3etjjn0/image/upload/v1795083776/1088270_1_a2nnfg.png",
  poster: "https://res.cloudinary.com/dw3etjjn0/image/upload/v1795083760/a_whisker_away_thjoqg.jpg",


trailers: [
  {
    id: "FTT6k4xFlLU",
    alt: "Official Trailer - A Whisker Away",
    thumb: "https://img.youtube.com/vi/FTT6k4xFlLU/hqdefault.jpg"
  }
],


  cast: [
    { name: "Mirai Shida",     role: "Miyo Sasaki / Muge (voice)", img: miraishida },
    { name: "Natsuki Hanae",   role: "Kento Hinode (voice)",       img: natsukihanae },
    { name: "Koichi Yamadera", role: "Mask Seller (voice)",        img: koichiyamadera }
  ]
},
yourname: {
  title: "Your Name",
  director: "Makoto Shinkai",
  genres: ["Animation", "Drama", "Fantasy", "Romance"],
  pills: ["2016", "1H 46M", "IMDb 8.4", "PG"],
  overview:
    "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart? A high school girl in a rural town and a boy in Tokyo mysteriously begin swapping bodies.",
  language: "Dual Audio (Japanese, english)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1Dfi-tNn8P9N2jC1wgbP9q3i_sQ4BbjgB/view?usp=sharing",

  accent: "56, 150, 240",
  theme: {
    buttonColor: "#2a7ad8",
    buttonGlow: "rgba(56, 160, 248, 0.55)",
    lineColor: "#f0987a",
    backHover: "#2a7ad8",
    castHover: "#f0987a",
    cardHover: "#f0987a",
    playHover: "#c85ad8",
    cautionColor: "#f6b49a",
    textColor: "#e8ecfa",
    castRoleColor: "#98a0c8",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(6, 8, 28, 0.94) 0%, rgba(6, 8, 28, 0.38) 40%, transparent 65%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(240, 152, 122, 0.24) 0%, transparent 55%), linear-gradient(160deg, #1a2468 0%, #05061c 100%)",
    castBackground: "linear-gradient(180deg, #05061c 0%, #0e1448 100%)",
    reviewsBackground: "linear-gradient(180deg, #0e1448 0%, #2a1c62 60%, #6a2c58 100%)"
  },

  hero: "https://res.cloudinary.com/dw3etjjn0/image/upload/v1794760007/619644_gsyaou.jpg",
  poster: "https://res.cloudinary.com/dw3etjjn0/image/upload/v1794759975/Your_Name_Movie_Poster___Chinese_Animated_Movie_2016_e6ynq0.jpg",


trailers: [
  {
    id: "xU47nhruN-Q",
    alt: "Official Trailer",
    thumb: "https://img.youtube.com/vi/xU47nhruN-Q/hqdefault.jpg"
  },
  {
    id: "NooIc3dW4sY",
    alt: "English Dub Trailer",
    thumb: "https://img.youtube.com/vi/NooIc3dW4sY/hqdefault.jpg"
  }
],

  cast: [
    { name: "Ryunosuke Kamiki",  role: "Taki Tachibana (voice)",    img: ryunosukekamiki },
    { name: "Mone Kamishiraishi", role: "Mitsuha Miyamizu (voice)", img: monekamishiraishi },
    { name: "Ryo Narita",        role: "Katsuhiko Teshigawara (voice)", img: ryonarita },
    { name: "Aoi Yuki",          role: "Sayaka Natori (voice)",     img: aoiyuki },
    { name: "Nobunaga Shimazaki", role: "Tsukasa Fujii (voice)",    img: nobunagashimazaki },
    { name: "Masami Nagasawa",   role: "Miki Okudera (voice)",      img: masaminagasawa },
    { name: "Etsuko Ichihara",   role: "Hitoha Miyamizu (voice)",   img: etsukoichihara }
  ]
},

suzume: {
  title: "Suzume",
  director: "Makoto Shinkai",
  genres: ["Animation", "Adventure", "Drama", "Fantasy"],
  pills: ["2022", "2H 2M", "IMDb 7.6", "PG"],
  overview:
    "A 17-year-old girl named Suzume helps a mysterious young man close doors from the other side that are releasing disasters all over Japan.",
  language: "Dual Audio (English, Hindi)",
  caution: "Dual Audio is available when you download the movie",
  watchLink: "https://drive.google.com/file/d/1J3N_--8Sj01Ep2J4ruVQ_wQ_WvLgno24/view?usp=sharing",

  accent: "58, 160, 190",
  theme: {
    buttonColor: "#2a9cc0",
    buttonGlow: "rgba(56, 172, 204, 0.52)",
    lineColor: "#8ccf7a",
    backHover: "#2a9cc0",
    castHover: "#8ccf7a",
    cardHover: "#8ccf7a",
    playHover: "#40b4d8",
    cautionColor: "#f0b8c8",
    textColor: "#eef6f6",
    castRoleColor: "#8ea8a8",
    titleFont: "'Montserrat', 'Segoe UI', Arial, sans-serif",
    heroOverlay: "linear-gradient(to top, rgba(4, 16, 18, 0.94) 0%, rgba(4, 16, 18, 0.42) 38%, transparent 62%)",
    infoBackground: "radial-gradient(ellipse at 88% 110%, rgba(240, 184, 200, 0.18) 0%, transparent 55%), linear-gradient(160deg, #124a58 0%, #040e12 100%)",
    castBackground: "linear-gradient(180deg, #040e12 0%, #0c2a32 100%)",
    reviewsBackground: "linear-gradient(180deg, #0c2a32 0%, #14505a 55%, #2a5a38 100%)"
  },

  hero: "https://res.cloudinary.com/dw3etjjn0/image/upload/v1795110698/suzume-no-tojimari-5k-p5_ycfya4.jpg",
  poster: "https://res.cloudinary.com/dw3etjjn0/image/upload/v1795110686/Suzume_2022_-_Makoto_Shinkai_ki9a7u.jpg",


trailers: [
  {
    id: "IfKNOUUtyCA",
    alt: "Official Trailer",
    thumb: "https://img.youtube.com/vi/IfKNOUUtyCA/hqdefault.jpg"
  },
  {
    id: "9UuwS0mTBNM",
    alt: "Official Trailer 2",
    thumb: "https://img.youtube.com/vi/9UuwS0mTBNM/hqdefault.jpg"
  }
],

  cast: [
    { name: "Nanoka Hara",     role: "Suzume Iwato (voice)",   img: nanokahara },
    { name: "Hokuto Matsumura", role: "Souta Munakata (voice)", img: hokutomatsumura },
    { name: "Eri Fukatsu",     role: "Tamaki Iwato (voice)",   img: erifukatsu },
    { name: "Shota Sometani",  role: "Minoru Okabe (voice)",   img: shotasometani },
    { name: "Sairi Ito",       role: "Rumi Ninomiya (voice)",  img: sairiito },
    { name: "Kotone Hanase",   role: "Chika Amabe (voice)",    img: kotonehanase }
  ]
},
}
