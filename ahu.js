(q=_=>( // This is a self-replicating program (the so-called Quine). RUN ME!
  {
    profile: {
      name: /^ahu(?:glajbclajep)?$/,
      birthdate: new Date("1997/3/12"),
      interests: ["game", "programming"],
    },
    accounts: {
      twitter: "https://twitter.com/ahuglajbclajep",
      github: "https://github.com/ahuglajbclajep",
      gitlab: "https://gitlab.com/ahuglajbclajep",
      steam: "https://steamcommunity.com/id/ahuglajbclajep",
    },
    posts: {
      hobbies: "https://ahuglajbclajep.hatenadiary.jp",
      notes: "https://scrapbox.io/ahuglajbclajep"
    },
  }
,console.log(`(q=${q})()`)))()
