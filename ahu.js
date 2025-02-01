(q=_=>( // This is a self-replicating program (the so-called Quine). RUN ME!
  {
    profile: {
      name: /^ahu(?:glajbclajep)?$/,
      birthdate: new Date("1997/3/12"),
      favorite: ["sea", "plants", "walking", "fruit"],
    },
    accounts: {
      github: "https://github.com/ahuglajbclajep",
      steam: "https://steamcommunity.com/id/ahuglajbclajep",
    },
    posts: {
      x: "https://x.com/ahuglajbclajep",
      instagram: "https://www.instagram.com/ahuglajbclajep",
      scrapbox: "https://scrapbox.io/ahuglajbclajep",
    },
  }
,console.log(`(q=${q})()`)))()
