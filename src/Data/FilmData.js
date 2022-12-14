/*
 * Data on films is stored here.
 * This is a rudimentary database, and could be replaced by a real database in the future.
 */

// Film data -- used at /now-playing
// Import images for use in `filmData` array
import TwelveAngryMenStill from "../assets/stills/12angrymen.jpg";
import PsychoStill from "../assets/stills/psycho.jpg";
import RearWindowStill from "../assets/stills/rear-window.jpg";
import VertigoStill from "../assets/stills/vertigo.jpg";
import SevenSamuraiStill from "../assets/stills/samurai.jpg";

// This array stores the data about each film, and uses the images imported above
const filmData = [
  {
    id: 0,
    title: "12 Angry Men",
    director: "Sidney Lumet",
    releaseYear: 1957,
    runtimeMins: 96,
    IMDbID: "0050083",
    trailerID: "iWh0pONVnjc",
    synopsis:
      "Following the closing arguments in a murder trial, the 12 members of the jury must deliberate, with a guilty verdict meaning death for the accused, an inner-city teen. As the dozen men try to reach a unanimous decision while sequestered in a room, one juror (Henry Fonda) casts considerable doubt on elements of the case. Personal issues soon rise to the surface, and conflict threatens to derail the delicate process that will decide one boy's fate.",
    filmStill: TwelveAngryMenStill,
  },
  {
    id: 1,
    title: "Psycho",
    director: "Alfred Hitchcock",
    releaseYear: 1960,
    runtimeMins: 109,
    IMDbID: "0054215",
    trailerID: "DTJQfFQ40lI",
    synopsis:
      "Phoenix secretary Marion Crane (Janet Leigh), on the lam after stealing $40,000 from her employer in order to run away with her boyfriend, Sam Loomis (John Gavin), is overcome by exhaustion during a heavy rainstorm. Traveling on the back roads to avoid the police, she stops for the night at the ramshackle Bates Motel and meets the polite but highly strung proprietor Norman Bates (Anthony Perkins), a young man with an interest in taxidermy and a difficult relationship with his mother. ",
    filmStill: PsychoStill,
  },
  {
    id: 2,
    title: "Rear Window",
    director: "Alfred Hitchcock",
    releaseYear: 1954,
    runtimeMins: 112,
    IMDbID: "0047396",
    trailerID: "Ob_Sq__g01E",
    synopsis:
      "The story of a recuperating news photographer who believes he has witnessed a murder. Confined to a wheelchair after an accident, he spends his time watching the occupants of neighbouring apartments through a telephoto lens and binoculars and becomes convinced that a murder has taken place.",
    filmStill: RearWindowStill,
  },
  {
    id: 3,
    title: "Vertigo",
    director: "Alfred Hitchcock",
    releaseYear: 1958,
    runtimeMins: 128,
    IMDbID: "0052357",
    trailerID: "95o-QM-lz8g",
    synopsis:
      "An ex-police officer who suffers from an intense fear of heights is hired to prevent an old friend's wife from committing suicide, but all is not as it seems. Hitchcock's haunting, compelling masterpiece is uniquely revelatory about the director's own predilections and hang-ups and is widely considered to be one of his masterworks.",
    filmStill: VertigoStill,
  },
  {
    id: 4,
    title: "Seven Samurai",
    director: "Akira Kurosawa",
    releaseYear: 1954,
    runtimeMins: 207,
    IMDbID: "0047478",
    trailerID: "7mw6LyyoeGE",
    synopsis:
      "A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food. A giant battle occurs when 40 bandits attack the village.",
    filmStill: SevenSamuraiStill,
  },
];

export { filmData };
