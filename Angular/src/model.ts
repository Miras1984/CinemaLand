export interface Category{
  id: number,
  name: string
}

export interface Film{
  id: number,
  name: string,
  description: string,
  rating: number,
  country: string,
  year: number,
  image: string,
  gallery: string[],
  category: string[],
  link: string
}

export const categories = [
  {
    id: 1,
    name: "Horror"
  },
  {
    id: 2,
    name: "Thriller"
  },
  {
    id: 3,
    name: "Drama"
  },
  {
    id: 4,
    name: "Adventure"
  },
  {
    id: 5,
    name: "Action"
  },
  {
    id: 6,
    name: "Detective"
  },
  {
    id: 7,
    name: "Fantastic"
  },
]


export const films = [
  {
    id: 1,
    name: "Dorian Grey",
    description: "Dorian Gray is a 2009 British fantasy-horror drama film based on Oscar Wilde's 1890 novel The Picture" +
      " of Dorian Gray. The adaptation is directed by Oliver Parker, written by Toby Finlay (his first screenplay), and " +
      "stars Ben Barnes as Dorian Gray and Colin Firth as Lord Henry Wotton. It tells the story of the title character," +
      " an attractive Englishman whose image is captured in an enchanted painting that keeps him from aging. His portrait" +
      " becomes tainted with every sin he commits, while he remains young and handsome.",
    rating: 7.0,
    country: "United Kingdom",
    year: 2009,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Dorian_gray_ver2.jpg/330px-Dorian_gray_ver2.jpg",
    gallery:[
      "https://mf-static-ssl.more.tv/jackal/3998013/b97c1d5f-393a-4d61-a938-df0b67004e78_W375_H532.jpg",
      "https://img-tv.vl.ru/fhd/9ef3a67db5fa4361c92ae668d9c550c919012c.jpg",
      "https://briefly.ru/static/cache/films/720/103.jpeg?1579583994",
      "https://static.wikia.nocookie.net/zlodei/images/2/24/%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%94%D0%BE%D1%80%D0%B8%D0%B0%D0%BD%D0%B0_%D0%93%D1%80%D0%B5%D1%8F.jpg/revision/latest/top-crop/width/360/height/450?cb=20200425044507&path-prefix=ru"
    ],
    category: [
      "Fantastic",
      "Drama"
    ],
    link: "https://www.youtube.com/embed/y5oX3YJWlFc"
  },
  {
    id: 2,
    name: "Dallas Buyers Club1",
    description: "Dallas Buyers Club is a 2013 American biographical drama film written by Craig Borten and Melisa Wallack," +
      " and directed by Jean-Marc Vallée. The film tells the story of Ron Woodroof (Matthew McConaughey), an AIDS patient " +
      "diagnosed in the mid-1980s when HIV/AIDS treatments were under-researched, while the disease was not understood and " +
      "highly stigmatized. As part of the experimental AIDS treatment movement, he smuggled unapproved pharmaceutical drugs" +
      " into Texas for treating his symptoms, and distributed them to fellow people with AIDS by establishing the \"Dallas Buyers Club\" while " +
      "facing opposition from the Food and Drug Administration (FDA). Two fictional supporting characters, Dr. Eve Saks (Jennifer Garner)," +
      " and Rayon (Jared Leto), were composite roles created from interviews with transgender AIDS patients, activists, and doctors." +
      " Presidential biographer and PEN-USA winner Bill Minutaglio wrote the first magazine profile of The Dallas Buyers Club in 1992." +
      " The article, which featured interviews with Woodroof and also recreated his dramatic international exploits, attracted widespread " +
      "attention from filmmakers and journalists.[3]",
    rating: 8.3,
    country: "USA",
    year: 2013,
    image: "https://upload.wikimedia.org/wikipedia/en/a/a8/Dallas_Buyers_Club_poster.jpg",
    gallery:[
      "https://www.film.ru/sites/default/files/movies/frames/Dallas-Buyers-Club-15.jpg",
      "https://b1.filmpro.ru/c/220168.560x420.jpg",
      "https://media.vashdosug.ru/media/768838/560x292/"
    ],
    category: [
      "Drama",
    ],
    link: "https://www.youtube.com/embed/CqiTtDyEbJ8",
  },
  {
    id: 3,
    name: "Dorian Grey",
    description: "Dorian Gray is a 2009 British fantasy-horror drama film based on Oscar Wilde's 1890 novel The Picture" +
      " of Dorian Gray. The adaptation is directed by Oliver Parker, written by Toby Finlay (his first screenplay), and " +
      "stars Ben Barnes as Dorian Gray and Colin Firth as Lord Henry Wotton. It tells the story of the title character," +
      " an attractive Englishman whose image is captured in an enchanted painting that keeps him from aging. His portrait" +
      " becomes tainted with every sin he commits, while he remains young and handsome.",
    rating: 7.0,
    country: "United Kingdom",
    year: 2009,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Dorian_gray_ver2.jpg/330px-Dorian_gray_ver2.jpg",
    gallery:[
      "https://mf-static-ssl.more.tv/jackal/3998013/b97c1d5f-393a-4d61-a938-df0b67004e78_W375_H532.jpg",
      "https://img-tv.vl.ru/fhd/9ef3a67db5fa4361c92ae668d9c550c919012c.jpg",
      "https://briefly.ru/static/cache/films/720/103.jpeg?1579583994",
      "https://static.wikia.nocookie.net/zlodei/images/2/24/%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%94%D0%BE%D1%80%D0%B8%D0%B0%D0%BD%D0%B0_%D0%93%D1%80%D0%B5%D1%8F.jpg/revision/latest/top-crop/width/360/height/450?cb=20200425044507&path-prefix=ru"
    ],
    category: [
      "Fantastic",
      "Drama"
    ],
    link: "https://www.youtube.com/embed/y5oX3YJWlFc"
  },
  {
    id: 4,
    name: "Dorian Grey",
    description: "Dorian Gray is a 2009 British fantasy-horror drama film based on Oscar Wilde's 1890 novel The Picture" +
      " of Dorian Gray. The adaptation is directed by Oliver Parker, written by Toby Finlay (his first screenplay), and " +
      "stars Ben Barnes as Dorian Gray and Colin Firth as Lord Henry Wotton. It tells the story of the title character," +
      " an attractive Englishman whose image is captured in an enchanted painting that keeps him from aging. His portrait" +
      " becomes tainted with every sin he commits, while he remains young and handsome.",
    rating: 7.0,
    country: "United Kingdom",
    year: 2009,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Dorian_gray_ver2.jpg/330px-Dorian_gray_ver2.jpg",
    gallery:[
      "https://mf-static-ssl.more.tv/jackal/3998013/b97c1d5f-393a-4d61-a938-df0b67004e78_W375_H532.jpg",
      "https://img-tv.vl.ru/fhd/9ef3a67db5fa4361c92ae668d9c550c919012c.jpg",
      "https://briefly.ru/static/cache/films/720/103.jpeg?1579583994",
      "https://static.wikia.nocookie.net/zlodei/images/2/24/%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%94%D0%BE%D1%80%D0%B8%D0%B0%D0%BD%D0%B0_%D0%93%D1%80%D0%B5%D1%8F.jpg/revision/latest/top-crop/width/360/height/450?cb=20200425044507&path-prefix=ru"
    ],
    category: [
      "Fantastic",
      "Drama"
    ],
    link: "https://www.youtube.com/embed/y5oX3YJWlFc"
  },
  {
    id: 5,
    name: "Dorian Grey",
    description: "Dorian Gray is a 2009 British fantasy-horror drama film based on Oscar Wilde's 1890 novel The Picture" +
      " of Dorian Gray. The adaptation is directed by Oliver Parker, written by Toby Finlay (his first screenplay), and " +
      "stars Ben Barnes as Dorian Gray and Colin Firth as Lord Henry Wotton. It tells the story of the title character," +
      " an attractive Englishman whose image is captured in an enchanted painting that keeps him from aging. His portrait" +
      " becomes tainted with every sin he commits, while he remains young and handsome.",
    rating: 7.0,
    country: "United Kingdom",
    year: 2009,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Dorian_gray_ver2.jpg/330px-Dorian_gray_ver2.jpg",
    gallery:[
      "https://mf-static-ssl.more.tv/jackal/3998013/b97c1d5f-393a-4d61-a938-df0b67004e78_W375_H532.jpg",
      "https://img-tv.vl.ru/fhd/9ef3a67db5fa4361c92ae668d9c550c919012c.jpg",
      "https://briefly.ru/static/cache/films/720/103.jpeg?1579583994",
      "https://static.wikia.nocookie.net/zlodei/images/2/24/%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%94%D0%BE%D1%80%D0%B8%D0%B0%D0%BD%D0%B0_%D0%93%D1%80%D0%B5%D1%8F.jpg/revision/latest/top-crop/width/360/height/450?cb=20200425044507&path-prefix=ru"
    ],
    category: [
      "Fantastic",
      "Drama"
    ],
    link: "https://www.youtube.com/embed/y5oX3YJWlFc"
  },
  {
    id: 6,
    name: "Dorian Grey",
    description: "Dorian Gray is a 2009 British fantasy-horror drama film based on Oscar Wilde's 1890 novel The Picture" +
      " of Dorian Gray. The adaptation is directed by Oliver Parker, written by Toby Finlay (his first screenplay), and " +
      "stars Ben Barnes as Dorian Gray and Colin Firth as Lord Henry Wotton. It tells the story of the title character," +
      " an attractive Englishman whose image is captured in an enchanted painting that keeps him from aging. His portrait" +
      " becomes tainted with every sin he commits, while he remains young and handsome.",
    rating: 7.0,
    country: "United Kingdom",
    year: 2009,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Dorian_gray_ver2.jpg/330px-Dorian_gray_ver2.jpg",
    gallery:[
      "https://mf-static-ssl.more.tv/jackal/3998013/b97c1d5f-393a-4d61-a938-df0b67004e78_W375_H532.jpg",
      "https://img-tv.vl.ru/fhd/9ef3a67db5fa4361c92ae668d9c550c919012c.jpg",
      "https://briefly.ru/static/cache/films/720/103.jpeg?1579583994",
      "https://static.wikia.nocookie.net/zlodei/images/2/24/%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%94%D0%BE%D1%80%D0%B8%D0%B0%D0%BD%D0%B0_%D0%93%D1%80%D0%B5%D1%8F.jpg/revision/latest/top-crop/width/360/height/450?cb=20200425044507&path-prefix=ru"
    ],
    category: [
      "Fantastic",
      "Drama"
    ],
    link: "https://www.youtube.com/embed/y5oX3YJWlFc"
  },
  {
    id: 7,
    name: "Dorian Grey",
    description: "Dorian Gray is a 2009 British fantasy-horror drama film based on Oscar Wilde's 1890 novel The Picture" +
      " of Dorian Gray. The adaptation is directed by Oliver Parker, written by Toby Finlay (his first screenplay), and " +
      "stars Ben Barnes as Dorian Gray and Colin Firth as Lord Henry Wotton. It tells the story of the title character," +
      " an attractive Englishman whose image is captured in an enchanted painting that keeps him from aging. His portrait" +
      " becomes tainted with every sin he commits, while he remains young and handsome.",
    rating: 7.0,
    country: "United Kingdom",
    year: 2009,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Dorian_gray_ver2.jpg/330px-Dorian_gray_ver2.jpg",
    gallery:[
      "https://mf-static-ssl.more.tv/jackal/3998013/b97c1d5f-393a-4d61-a938-df0b67004e78_W375_H532.jpg",
      "https://img-tv.vl.ru/fhd/9ef3a67db5fa4361c92ae668d9c550c919012c.jpg",
      "https://briefly.ru/static/cache/films/720/103.jpeg?1579583994",
      "https://static.wikia.nocookie.net/zlodei/images/2/24/%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%94%D0%BE%D1%80%D0%B8%D0%B0%D0%BD%D0%B0_%D0%93%D1%80%D0%B5%D1%8F.jpg/revision/latest/top-crop/width/360/height/450?cb=20200425044507&path-prefix=ru"
    ],
    category: [
      "Fantastic",
      "Drama"
    ],
    link: "https://www.youtube.com/embed/y5oX3YJWlFc"
  },
  {
    id: 8,
    name: "Dorian Grey",
    description: "Dorian Gray is a 2009 British fantasy-horror drama film based on Oscar Wilde's 1890 novel The Picture" +
      " of Dorian Gray. The adaptation is directed by Oliver Parker, written by Toby Finlay (his first screenplay), and " +
      "stars Ben Barnes as Dorian Gray and Colin Firth as Lord Henry Wotton. It tells the story of the title character," +
      " an attractive Englishman whose image is captured in an enchanted painting that keeps him from aging. His portrait" +
      " becomes tainted with every sin he commits, while he remains young and handsome.",
    rating: 7.0,
    country: "United Kingdom",
    year: 2009,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Dorian_gray_ver2.jpg/330px-Dorian_gray_ver2.jpg",
    gallery:[
      "https://mf-static-ssl.more.tv/jackal/3998013/b97c1d5f-393a-4d61-a938-df0b67004e78_W375_H532.jpg",
      "https://img-tv.vl.ru/fhd/9ef3a67db5fa4361c92ae668d9c550c919012c.jpg",
      "https://briefly.ru/static/cache/films/720/103.jpeg?1579583994",
      "https://static.wikia.nocookie.net/zlodei/images/2/24/%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%94%D0%BE%D1%80%D0%B8%D0%B0%D0%BD%D0%B0_%D0%93%D1%80%D0%B5%D1%8F.jpg/revision/latest/top-crop/width/360/height/450?cb=20200425044507&path-prefix=ru"
    ],
    category: [
      "Fantastic",
      "Drama"
    ],
    link: "https://www.youtube.com/embed/y5oX3YJWlFc"
  },
  {
    id: 9,
    name: "Dallas Buyers Club2",
    description: "Dallas Buyers Club is a 2013 American biographical drama film written by Craig Borten and Melisa Wallack," +
      " and directed by Jean-Marc Vallée. The film tells the story of Ron Woodroof (Matthew McConaughey), an AIDS patient " +
      "diagnosed in the mid-1980s when HIV/AIDS treatments were under-researched, while the disease was not understood and " +
      "highly stigmatized. As part of the experimental AIDS treatment movement, he smuggled unapproved pharmaceutical drugs" +
      " into Texas for treating his symptoms, and distributed them to fellow people with AIDS by establishing the \"Dallas Buyers Club\" while " +
      "facing opposition from the Food and Drug Administration (FDA). Two fictional supporting characters, Dr. Eve Saks (Jennifer Garner)," +
      " and Rayon (Jared Leto), were composite roles created from interviews with transgender AIDS patients, activists, and doctors." +
      " Presidential biographer and PEN-USA winner Bill Minutaglio wrote the first magazine profile of The Dallas Buyers Club in 1992." +
      " The article, which featured interviews with Woodroof and also recreated his dramatic international exploits, attracted widespread " +
      "attention from filmmakers and journalists.[3]",
    rating: 8.3,
    country: "USA",
    year: 2013,
    image: "https://upload.wikimedia.org/wikipedia/en/a/a8/Dallas_Buyers_Club_poster.jpg",
    gallery:[
      "https://www.film.ru/sites/default/files/movies/frames/Dallas-Buyers-Club-15.jpg",
      "https://b1.filmpro.ru/c/220168.560x420.jpg",
      "https://media.vashdosug.ru/media/768838/560x292/"
    ],
    category: [
      "Drama",
    ],
    link: "https://www.youtube.com/embed/CqiTtDyEbJ8",
  },
  {
    id: 10,
    name: "Dallas Buyers Club3",
    description: "Dallas Buyers Club is a 2013 American biographical drama film written by Craig Borten and Melisa Wallack," +
      " and directed by Jean-Marc Vallée. The film tells the story of Ron Woodroof (Matthew McConaughey), an AIDS patient " +
      "diagnosed in the mid-1980s when HIV/AIDS treatments were under-researched, while the disease was not understood and " +
      "highly stigmatized. As part of the experimental AIDS treatment movement, he smuggled unapproved pharmaceutical drugs" +
      " into Texas for treating his symptoms, and distributed them to fellow people with AIDS by establishing the \"Dallas Buyers Club\" while " +
      "facing opposition from the Food and Drug Administration (FDA). Two fictional supporting characters, Dr. Eve Saks (Jennifer Garner)," +
      " and Rayon (Jared Leto), were composite roles created from interviews with transgender AIDS patients, activists, and doctors." +
      " Presidential biographer and PEN-USA winner Bill Minutaglio wrote the first magazine profile of The Dallas Buyers Club in 1992." +
      " The article, which featured interviews with Woodroof and also recreated his dramatic international exploits, attracted widespread " +
      "attention from filmmakers and journalists.[3]",
    rating: 8.3,
    country: "USA",
    year: 2013,
    image: "https://upload.wikimedia.org/wikipedia/en/a/a8/Dallas_Buyers_Club_poster.jpg",
    gallery:[
      "https://www.film.ru/sites/default/files/movies/frames/Dallas-Buyers-Club-15.jpg",
      "https://b1.filmpro.ru/c/220168.560x420.jpg",
      "https://media.vashdosug.ru/media/768838/560x292/"
    ],
    category: [
      "Drama",
    ],
    link: "https://www.youtube.com/embed/CqiTtDyEbJ8",
  },
  {
    id: 10,
    name: "Dallas Buyers Club4",
    description: "Dallas Buyers Club is a 2013 American biographical drama film written by Craig Borten and Melisa Wallack," +
      " and directed by Jean-Marc Vallée. The film tells the story of Ron Woodroof (Matthew McConaughey), an AIDS patient " +
      "diagnosed in the mid-1980s when HIV/AIDS treatments were under-researched, while the disease was not understood and " +
      "highly stigmatized. As part of the experimental AIDS treatment movement, he smuggled unapproved pharmaceutical drugs" +
      " into Texas for treating his symptoms, and distributed them to fellow people with AIDS by establishing the \"Dallas Buyers Club\" while " +
      "facing opposition from the Food and Drug Administration (FDA). Two fictional supporting characters, Dr. Eve Saks (Jennifer Garner)," +
      " and Rayon (Jared Leto), were composite roles created from interviews with transgender AIDS patients, activists, and doctors." +
      " Presidential biographer and PEN-USA winner Bill Minutaglio wrote the first magazine profile of The Dallas Buyers Club in 1992." +
      " The article, which featured interviews with Woodroof and also recreated his dramatic international exploits, attracted widespread " +
      "attention from filmmakers and journalists.[3]",
    rating: 8.3,
    country: "USA",
    year: 2013,
    image: "https://upload.wikimedia.org/wikipedia/en/a/a8/Dallas_Buyers_Club_poster.jpg",
    gallery:[
      "https://www.film.ru/sites/default/files/movies/frames/Dallas-Buyers-Club-15.jpg",
      "https://b1.filmpro.ru/c/220168.560x420.jpg",
      "https://media.vashdosug.ru/media/768838/560x292/"
    ],
    category: [
      "Drama",
    ],
    link: "https://www.youtube.com/embed/CqiTtDyEbJ8",
  },
  {
    id: 10,
    name: "Dallas Buyers Club5",
    description: "Dallas Buyers Club is a 2013 American biographical drama film written by Craig Borten and Melisa Wallack," +
      " and directed by Jean-Marc Vallée. The film tells the story of Ron Woodroof (Matthew McConaughey), an AIDS patient " +
      "diagnosed in the mid-1980s when HIV/AIDS treatments were under-researched, while the disease was not understood and " +
      "highly stigmatized. As part of the experimental AIDS treatment movement, he smuggled unapproved pharmaceutical drugs" +
      " into Texas for treating his symptoms, and distributed them to fellow people with AIDS by establishing the \"Dallas Buyers Club\" while " +
      "facing opposition from the Food and Drug Administration (FDA). Two fictional supporting characters, Dr. Eve Saks (Jennifer Garner)," +
      " and Rayon (Jared Leto), were composite roles created from interviews with transgender AIDS patients, activists, and doctors." +
      " Presidential biographer and PEN-USA winner Bill Minutaglio wrote the first magazine profile of The Dallas Buyers Club in 1992." +
      " The article, which featured interviews with Woodroof and also recreated his dramatic international exploits, attracted widespread " +
      "attention from filmmakers and journalists.[3]",
    rating: 8.3,
    country: "USA",
    year: 2013,
    image: "https://upload.wikimedia.org/wikipedia/en/a/a8/Dallas_Buyers_Club_poster.jpg",
    gallery:[
      "https://www.film.ru/sites/default/files/movies/frames/Dallas-Buyers-Club-15.jpg",
      "https://b1.filmpro.ru/c/220168.560x420.jpg",
      "https://media.vashdosug.ru/media/768838/560x292/"
    ],
    category: [
      "Drama",
    ],
    link: "https://www.youtube.com/embed/CqiTtDyEbJ8",
  },
  {
    id: 10,
    name: "Dallas Buyers Club6",
    description: "Dallas Buyers Club is a 2013 American biographical drama film written by Craig Borten and Melisa Wallack," +
      " and directed by Jean-Marc Vallée. The film tells the story of Ron Woodroof (Matthew McConaughey), an AIDS patient " +
      "diagnosed in the mid-1980s when HIV/AIDS treatments were under-researched, while the disease was not understood and " +
      "highly stigmatized. As part of the experimental AIDS treatment movement, he smuggled unapproved pharmaceutical drugs" +
      " into Texas for treating his symptoms, and distributed them to fellow people with AIDS by establishing the \"Dallas Buyers Club\" while " +
      "facing opposition from the Food and Drug Administration (FDA). Two fictional supporting characters, Dr. Eve Saks (Jennifer Garner)," +
      " and Rayon (Jared Leto), were composite roles created from interviews with transgender AIDS patients, activists, and doctors." +
      " Presidential biographer and PEN-USA winner Bill Minutaglio wrote the first magazine profile of The Dallas Buyers Club in 1992." +
      " The article, which featured interviews with Woodroof and also recreated his dramatic international exploits, attracted widespread " +
      "attention from filmmakers and journalists.[3]",
    rating: 8.3,
    country: "USA",
    year: 2013,
    image: "https://upload.wikimedia.org/wikipedia/en/a/a8/Dallas_Buyers_Club_poster.jpg",
    gallery:[
      "https://www.film.ru/sites/default/files/movies/frames/Dallas-Buyers-Club-15.jpg",
      "https://b1.filmpro.ru/c/220168.560x420.jpg",
      "https://media.vashdosug.ru/media/768838/560x292/"
    ],
    category: [
      "Drama",
    ],
    link: "https://www.youtube.com/embed/CqiTtDyEbJ8",
  },
  {
    id: 10,
    name: "Dallas Buyers Club7",
    description: "Dallas Buyers Club is a 2013 American biographical drama film written by Craig Borten and Melisa Wallack," +
      " and directed by Jean-Marc Vallée. The film tells the story of Ron Woodroof (Matthew McConaughey), an AIDS patient " +
      "diagnosed in the mid-1980s when HIV/AIDS treatments were under-researched, while the disease was not understood and " +
      "highly stigmatized. As part of the experimental AIDS treatment movement, he smuggled unapproved pharmaceutical drugs" +
      " into Texas for treating his symptoms, and distributed them to fellow people with AIDS by establishing the \"Dallas Buyers Club\" while " +
      "facing opposition from the Food and Drug Administration (FDA). Two fictional supporting characters, Dr. Eve Saks (Jennifer Garner)," +
      " and Rayon (Jared Leto), were composite roles created from interviews with transgender AIDS patients, activists, and doctors." +
      " Presidential biographer and PEN-USA winner Bill Minutaglio wrote the first magazine profile of The Dallas Buyers Club in 1992." +
      " The article, which featured interviews with Woodroof and also recreated his dramatic international exploits, attracted widespread " +
      "attention from filmmakers and journalists.[3]",
    rating: 8.3,
    country: "USA",
    year: 2013,
    image: "https://upload.wikimedia.org/wikipedia/en/a/a8/Dallas_Buyers_Club_poster.jpg",
    gallery:[
      "https://www.film.ru/sites/default/files/movies/frames/Dallas-Buyers-Club-15.jpg",
      "https://b1.filmpro.ru/c/220168.560x420.jpg",
      "https://media.vashdosug.ru/media/768838/560x292/"
    ],
    category: [
      "Drama",
    ],
    link: "https://www.youtube.com/embed/CqiTtDyEbJ8",
  },
  {
    id: 10,
    name: "Dallas Buyers Club8",
    description: "Dallas Buyers Club is a 2013 American biographical drama film written by Craig Borten and Melisa Wallack," +
      " and directed by Jean-Marc Vallée. The film tells the story of Ron Woodroof (Matthew McConaughey), an AIDS patient " +
      "diagnosed in the mid-1980s when HIV/AIDS treatments were under-researched, while the disease was not understood and " +
      "highly stigmatized. As part of the experimental AIDS treatment movement, he smuggled unapproved pharmaceutical drugs" +
      " into Texas for treating his symptoms, and distributed them to fellow people with AIDS by establishing the \"Dallas Buyers Club\" while " +
      "facing opposition from the Food and Drug Administration (FDA). Two fictional supporting characters, Dr. Eve Saks (Jennifer Garner)," +
      " and Rayon (Jared Leto), were composite roles created from interviews with transgender AIDS patients, activists, and doctors." +
      " Presidential biographer and PEN-USA winner Bill Minutaglio wrote the first magazine profile of The Dallas Buyers Club in 1992." +
      " The article, which featured interviews with Woodroof and also recreated his dramatic international exploits, attracted widespread " +
      "attention from filmmakers and journalists.[3]",
    rating: 8.3,
    country: "USA",
    year: 2013,
    image: "https://upload.wikimedia.org/wikipedia/en/a/a8/Dallas_Buyers_Club_poster.jpg",
    gallery:[
      "https://www.film.ru/sites/default/files/movies/frames/Dallas-Buyers-Club-15.jpg",
      "https://b1.filmpro.ru/c/220168.560x420.jpg",
      "https://media.vashdosug.ru/media/768838/560x292/"
    ],
    category: [
      "Drama",
    ],
    link: "https://www.youtube.com/embed/CqiTtDyEbJ8",
  },
  {
    id: 11,
    name: "Dallas Buyers Club9",
    description: "Dallas Buyers Club is a 2013 American biographical drama film written by Craig Borten and Melisa Wallack," +
      " and directed by Jean-Marc Vallée. The film tells the story of Ron Woodroof (Matthew McConaughey), an AIDS patient " +
      "diagnosed in the mid-1980s when HIV/AIDS treatments were under-researched, while the disease was not understood and " +
      "highly stigmatized. As part of the experimental AIDS treatment movement, he smuggled unapproved pharmaceutical drugs" +
      " into Texas for treating his symptoms, and distributed them to fellow people with AIDS by establishing the \"Dallas Buyers Club\" while " +
      "facing opposition from the Food and Drug Administration (FDA). Two fictional supporting characters, Dr. Eve Saks (Jennifer Garner)," +
      " and Rayon (Jared Leto), were composite roles created from interviews with transgender AIDS patients, activists, and doctors." +
      " Presidential biographer and PEN-USA winner Bill Minutaglio wrote the first magazine profile of The Dallas Buyers Club in 1992." +
      " The article, which featured interviews with Woodroof and also recreated his dramatic international exploits, attracted widespread " +
      "attention from filmmakers and journalists.[3]",
    rating: 8.3,
    country: "USA",
    year: 2013,
    image: "https://upload.wikimedia.org/wikipedia/en/a/a8/Dallas_Buyers_Club_poster.jpg",
    gallery:[
      "https://www.film.ru/sites/default/files/movies/frames/Dallas-Buyers-Club-15.jpg",
      "https://b1.filmpro.ru/c/220168.560x420.jpg",
      "https://media.vashdosug.ru/media/768838/560x292/"
    ],
    category: [
      "Drama",
    ],
    link: "https://www.youtube.com/embed/CqiTtDyEbJ8",
  },
  {
    id: 12,
    name: "Dallas Buyers Club10",
    description: "Dallas Buyers Club is a 2013 American biographical drama film written by Craig Borten and Melisa Wallack," +
      " and directed by Jean-Marc Vallée. The film tells the story of Ron Woodroof (Matthew McConaughey), an AIDS patient " +
      "diagnosed in the mid-1980s when HIV/AIDS treatments were under-researched, while the disease was not understood and " +
      "highly stigmatized. As part of the experimental AIDS treatment movement, he smuggled unapproved pharmaceutical drugs" +
      " into Texas for treating his symptoms, and distributed them to fellow people with AIDS by establishing the \"Dallas Buyers Club\" while " +
      "facing opposition from the Food and Drug Administration (FDA). Two fictional supporting characters, Dr. Eve Saks (Jennifer Garner)," +
      " and Rayon (Jared Leto), were composite roles created from interviews with transgender AIDS patients, activists, and doctors." +
      " Presidential biographer and PEN-USA winner Bill Minutaglio wrote the first magazine profile of The Dallas Buyers Club in 1992." +
      " The article, which featured interviews with Woodroof and also recreated his dramatic international exploits, attracted widespread " +
      "attention from filmmakers and journalists.[3]",
    rating: 8.3,
    country: "USA",
    year: 2013,
    image: "https://upload.wikimedia.org/wikipedia/en/a/a8/Dallas_Buyers_Club_poster.jpg",
    gallery:[
      "https://www.film.ru/sites/default/files/movies/frames/Dallas-Buyers-Club-15.jpg",
      "https://b1.filmpro.ru/c/220168.560x420.jpg",
      "https://media.vashdosug.ru/media/768838/560x292/"
    ],
    category: [
      "Drama",
    ],
    link: "https://www.youtube.com/embed/CqiTtDyEbJ8",
  },
  {
    id: 13,
    name: "Dallas Buyers Club11",
    description: "Dallas Buyers Club is a 2013 American biographical drama film written by Craig Borten and Melisa Wallack," +
      " and directed by Jean-Marc Vallée. The film tells the story of Ron Woodroof (Matthew McConaughey), an AIDS patient " +
      "diagnosed in the mid-1980s when HIV/AIDS treatments were under-researched, while the disease was not understood and " +
      "highly stigmatized. As part of the experimental AIDS treatment movement, he smuggled unapproved pharmaceutical drugs" +
      " into Texas for treating his symptoms, and distributed them to fellow people with AIDS by establishing the \"Dallas Buyers Club\" while " +
      "facing opposition from the Food and Drug Administration (FDA). Two fictional supporting characters, Dr. Eve Saks (Jennifer Garner)," +
      " and Rayon (Jared Leto), were composite roles created from interviews with transgender AIDS patients, activists, and doctors." +
      " Presidential biographer and PEN-USA winner Bill Minutaglio wrote the first magazine profile of The Dallas Buyers Club in 1992." +
      " The article, which featured interviews with Woodroof and also recreated his dramatic international exploits, attracted widespread " +
      "attention from filmmakers and journalists.[3]",
    rating: 8.3,
    country: "USA",
    year: 2013,
    image: "https://upload.wikimedia.org/wikipedia/en/a/a8/Dallas_Buyers_Club_poster.jpg",
    gallery:[
      "https://www.film.ru/sites/default/files/movies/frames/Dallas-Buyers-Club-15.jpg",
      "https://b1.filmpro.ru/c/220168.560x420.jpg",
      "https://media.vashdosug.ru/media/768838/560x292/"
    ],
    category: [
      "Drama",
    ],
    link: "https://www.youtube.com/embed/CqiTtDyEbJ8",
  },
]
