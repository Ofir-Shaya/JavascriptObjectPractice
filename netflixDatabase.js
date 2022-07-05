const Netflix = {
  Users: [
    {
      Username: "OfirGever123",
      Password: "987654",
      Phone: "0521234567",
      lastFourCreditCardDigits: "1234",
      planDetails: "Premium ULTRA HD",
      Profiles: [
        {
          Name: "Ofir",
          Restrictions: "None",
          Language: "English",
          myList: [netflixMovies[2], netflixTV[0], netflixTV[1]],
          ratingUp: [netflixTV[2], netflixMovies[0], netflixMovies[1]],
          ratingDown: [],
        },
        {
          Name: "Omer",
          Restrictions: "None",
          Language: "Hebrew",
          myList: [netflixTV[2]],
          ratingUp: [netflixMovies[0], netflixTV[1]],
          ratingDown: [netflixMovies[2]],
        },
        {
          Name: "Mika",
          Restrictions: "16+",
          Language: "Hebrew",
          myList: [netflixTV[1]],
          ratingUp: [netflixMovies[1]],
          ratingDown: [netflixMovies[0]],
        },
      ],
    },
    {
      Username: "LoremIpsum",
      Password: "abcdefghijklmnopqrstuvwxyz",
      Phone: "0509876543",
      lastFourCreditCardDigits: "5555",
      planDetails: "Premium",
      Profiles: [
        {
          Name: "Israeli",
          Restrictions: "None",
          Language: "Arabic",
          myList: [netflixTV[0], netflixTV[2]],
          ratingUp: [],
          ratingDown: [netflixMovies[1]],
        },
      ],
    },
  ],
};
const netflixTV = [
  {
    Name: "The Lincoln Lawyer",
    releaseYear: 2022,
    Description:
      "An iconoclastic idealist runs his law practice out of the back of his Lincoln Town Car in this series based on Michael Connelly's bestselling novels.",
    seasonsAndEpisodes: [
      {
        Season1: {
          Episodes: [
            {
              Name: "He Rides Again",
              Description:
                "Following a personal and professional spiral, Los Angeles defense lawyer Mickey Haller recives an unexpected opportunity from a fellow attorney.",
              releaseDate: "13 May 2022",
            },
            {
              Name: "The Magic Bullet",
              Description:
                "A high-profile murder trial sends Mickey scrambling to find evidence for his defense, while Maggie offers him a chance to help rebuild her trust.",
              releaseDate: "13 May 2022",
            },
            {
              Name: "Momentum",
              Description:
                "Mickey looks for a link between the Trevor Elliott case and his mysterious new client, Lorna chases down a lead, and Cisco voices security concerns.",
              releaseDate: "13 May 2022",
            },
            {
              Name: "Chaos Theory",
              Description:
                "After a close call at his office, Mickey hashes things out with Detective Griggs. A witness in Maggie's human trafficking case has second thoughts.",
              releaseDate: "13 May 2022",
            },
          ],
          Cast: ["Manuel Garcia-Rulfo", "neve Campbell", "Becki Newton"],
          Creator: "David E. Kelly",
        },
      },
    ],
    episodeLength: "45Minutes",
    ageRating: "16+",
    resolutionAvailable: ["240p", "360p", "480p", "720p", "1080p", "2K", "4K"],
    dolbyAtmos: true,
  },
  {
    Name: "Rick and Morty",
    releaseYear: 2013,
    Description:
      "An animated series that follows the exploits of a super scientist and his not-so-bright grandson.",
    seasonsAndEpisodes: [
      {
        Episodes: [
          {
            Name: "Pilot",
            Description:
              "A strangely eccentric genius scientist and inventor moves into the home of his daughter and her family and begins to strongly influence his young grandson.",
            releaseDate: "2 Dec. 2013",
          },
          {
            Name: "Lawnmower Dog",
            Description: "Rick helps Jerry out with the dog.",
            releaseDate: "9 Dec. 2013",
          },
          {
            Name: "Anatomy Park",
            Description:
              "It's Christmas. Rick shrinks Morty, injecting him into a homeless man to save Anatomy Park. Jerry tries to have a Christmas free of electronic devices, but regrets his decision when his parents introduce him to their new friend.",
            releaseDate: "16 Dec. 2013",
          },
          {
            Name: "M. Night Shaym-Aliens!",
            Description:
              "Rick and Morty try to get to the bottom of a mystery.",
            releaseDate: "13 Jan. 2014",
          },
          {
            Name: "Meeseeks and Destroy",
            Description:
              "Rick provides the family with a solution to their problems, freeing him up to go on an adventure led by Morty.",
            releaseDate: "20 Jan. 2014",
          },
        ],
        Cast: ["Justin Roiland", "Chris Parnell", "Spencer Grammer"],
        Creator: "Dan Harmon",
      },
      {
        Episodes: [
          {
            Name: "A Rickle in Time",
            Description:
              "Having restarted time, Rick, Morty and Summer are in a quantum-uncertain state of existence. An argument leads to the creation of two alternate timelines, which need to be stitched back together fast if they are to escape quantum collapse.",
            releaseDate: "26 Jul. 2015",
          },
          {
            Name: "Mortynight Run",
            Description:
              "Rick and Morty try to save a gas life form while Jerry resides in a daycare made for Jerrys.",
            releaseDate: "2 Aug. 2015",
          },
          {
            Name: "Auto Erotic Assimilation",
            Description:
              "Rick gets emotional. Beth and Jerry get into a fight.",
            releaseDate: "9 Aug. 2015",
          },
          {
            Name: "Total Rickall",
            Description:
              "The Smith house is locked down after parasites threaten to take over the world by multiplying through flashbacks.",
            releaseDate: "16 Aug. 2015",
          },
          {
            Name: "Get Schwifty",
            Description:
              "Rick and morty must aid Earth after a giant head disrupts the planet, demanding to see a hit song performed.",
            releaseDate: "23 Aug. 2015",
          },
        ],
        Cast: ["Justin Roiland", "Chris Parnell", "Spencer Grammer"],
        Creator: "Dan Harmon",
      },
      {
        Episodes: [
          {
            Name: "The Rickshank Rickdemption",
            Description:
              "Rick, still in galactic prison, puts an intricate escape plan into action. Back on Earth, which is now under federation control, Morty and Summer have an argument about their grandpa.",
            releaseDate: "1 Apr. 2017",
          },
          {
            Name: "Rickmancing the Stone",
            Description:
              "With the kids dealing with their parents' divorce, Rick takes them to a Mad Max-style universe where he tries to steal a green crystal from a group of scavengers.",
            releaseDate: "30 Jul. 2017",
          },
          {
            Name: "Pickle Rick",
            Description:
              "Rick turns himself into a pickle while Beth, Summer, and Morty go to family therapy.",
            releaseDate: "6 Aug. 2017",
          },
          {
            Name: "Vindicators 3: The Return of Worldender",
            Description:
              "Rick and Morty are summoned by the Vindicators to stop Worldender but end up in a deathtrap conceived by Drunk Rick.",
            releaseDate: "13 Aug. 2017",
          },
          {
            Name: "The Whirly Dirly Conspiracy",
            Description:
              "Rick takes Jerry on a sympathy adventure to a resort where everyone is immortal when there, and Jerry meets some old acquaintances of Rick's who want payback.",
            releaseDate: "20 Aug. 2017",
          },
        ],
        Cast: ["Justin Roiland", "Chris Parnell", "Spencer Grammer"],
        Creator: "Dan Harmon",
      },
    ],
    episodeLength: "22Minutes",
    ageRating: "14+",
    resolutionAvailable: ["240p", "360p", "480p", "720p", "1080p", "2K", "4K"],
    dolbyAtmos: true,
  },
  {
    Name: "Vikings",
    releaseYear: 2013,
    Description:
      "Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore--and raid--the distant shores across the ocean.",
    seasonsAndEpisodes: [
      {
        Episodes: [
          {
            Name: "Rites of Passage",
            Description:
              "Ragnar goes on a trip of initiation with his son. Meanwhile, he thinks he has finally found a way to sail ships to the west. However, his beliefs are seen as insane so he chooses to go against the law.",
            releaseDate: "3 Mar. 2013",
          },
          {
            Name: "Wrath of the Northmen",
            Description:
              "The stage is set for the first journey west by Ragnar Lothbrok as he gathers a crew willing to risk their lives to travel into the unknown.",
            releaseDate: "10 Mar. 2013",
          },
          {
            Name: "Dispossessed",
            Description:
              "After his successful raid, Ragnar and his crew joyously return home with their riches. Earl Haraldson doesn't hesitate to summon Ragnar to the great hall where he lays claim to the entirety of the treasure. He allows the crew to take one thing from the hoard and Ragnar selects Brother Athelstan as his slave. From Athelstan, he learns the political structure in England and wants to learn some of the language. Haraldson sanctions a new raid but insists that one of his men, Knute, join Ragnar's crew. Ragnar takes his wife this time and surprises everyone by putting ...",
            releaseDate: "17 Mar. 2013",
          },
          {
            Name: "Trial",
            Description:
              "The Vikings head back to England to see what other treasures this new world has to offer. This go round Ragnar and his crew sail out with Earl Haraldson's permission.",
            releaseDate: "24 Mar. 2013",
          },
        ],
        Cast: ["Travis Fimmel", "Katheryn Winnick", "Clive Standen"],
        Creator: "Michael Hirst",
      },
      {
        Episodes: [
          {
            Name: "Brother's War",
            Description:
              "The battle begins between Ragnar and King Horik's forces against Jarl Borg. Borg is joined by Rollo, and this Viking clash pits brother against brother.",
            releaseDate: "27 Feb. 2014",
          },
          {
            Name: "Invasion",
            Description:
              "Four peaceful years have since passed with Ragnar as Earl. The time has come for an unlikely alliance to band together in pursuit of a common goal - a new raid on England. A storm pushes the Viking fleet to a new destination, and on the beaches of Wessex, Ragnar and his men may have met their match.",
            releaseDate: "6 Mar. 2014",
          },
          {
            Name: "Treachery",
            Description:
              "The Wessex Viking raid is in full swing and King Ecbert finds himself facing an entirely new kind of foe. While Ragnar races to dominate in the West, Jarl Borg has his own plans in store for the future of Kattegat.",
            releaseDate: "13 Mar. 2014",
          },
          {
            Name: "Eye for an Eye",
            Description:
              "A meeting between two great men may pave the way for future compromise as Ragnar and Ecbert come face to face. Jarl Borg now rules Kattegat and with an iron fist and Rollo must now become the leader his people need in Ragnar's absence.",
            releaseDate: "20 Mar. 2014",
          },
        ],
      },
    ],
    episodeLength: "45Minutes",
    ageRating: "16+",
    resolutionAvailable: ["240p", "360p", "480p", "720p", "1080p", "2K", "4K"],
    dolbyAtmos: true,
  },
];
const netflixMovies = [
  {
    Name: "The Intouchables",
    releaseYear: 2011,
    Description:
      "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
    movieLength: "1H52M",
    ageRating: "16+",
    resolutionAvailable: ["240p", "360p", "480p", "720p", "1080p"],
    dolbyAtmos: false,
    topCast: ["François Cluzet", "Omar Sy", "Anne Le Ny", "Audrey Fleurot"],
    Director: ["Olivier Nakache", "Eric Toledano"],
    imdbRating: 8.5,
  },
  {
    Name: "Rocky",
    releaseYear: 1976,
    Description:
      "A small-time Philadelphia boxer gets a supremely rare chance to fight the world heavyweight champion in a bout in which he strives to go the distance for his self-respect.",
    movieLength: "2H",
    ageRating: "13+",
    resolutionAvailable: ["240p", "360p", "480p", "720p"],
    dolbyAtmos: false,
    topCast: [
      "Sylvester Stallone",
      "Talia Shire",
      "Burt Young",
      "Carl Weathers",
    ],
    Director: "John G. Avildsen",
    imdbRating: 8.1,
  },
  {
    Name: "Creed",
    releaseYear: 2015,
    Description:
      "The former World Heavyweight Champion Rocky Balboa serves as a trainer and mentor to Adonis Johnson, the son of his late friend and former rival Apollo Creed.",
    movieLength: "2H13M",
    ageRating: "13+",
    resolutionAvailable: ["240p", "360p", "480p", "720p", "1080p", "2K", "4K"],
    dolbyAtmos: true,
    topCast: [
      "Michael B. Jordan",
      "Sylvester Stallone",
      "Tessa Thompson",
      "Phylicia Rashad",
    ],
    Director: "Ryan Coogler",
    imdbRating: 7.6,
  },
];
