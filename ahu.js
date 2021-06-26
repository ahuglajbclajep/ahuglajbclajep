(q=_=>( // This is a self-replicating program (the so-called Quine). RUN ME!
  {
    profile: {
      name: /^ahu(?:glajbclajep)?$/,
      birthdate: new Date("1997/3/12"),
      hobbies: ["programming", "gaming", "reading"],
    },
    accounts: {
      twitter: "https://twitter.com/ahuglajbclajep",
      github: "https://github.com/ahuglajbclajep",
      steam: "https://steamcommunity.com/id/ahuglajbclajep",
    },
    posts: {
      notes: "https://scrapbox.io/ahuglajbclajep",
      hobbies: "https://ahuglajbclajep.hatenadiary.jp",
    },
  }
,console.log(`(q=${q})()`)))()
