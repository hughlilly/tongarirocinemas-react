/*
 * Data for the app is stored here.
 *
 */

import nowPlayingIcon from "./assets/logos_icons/playing.svg";
import ticketsIcon from "./assets/logos_icons/ticket.svg";
import memberIcon from "./assets/logos_icons/member.svg";
import aboutIcon from "./assets/logos_icons/about.svg";

const homeSectionsData = [
  {
    id: "now-playing",
    linkTo: "now-playing/",
    headingText: "Now Playing",
    text: "See a list of films currently playing.",
    icon: nowPlayingIcon,
    altText: "View currently playing films",
  },
  {
    id: "tickets",
    linkTo: "tickets/",
    headingText: "Tickets",
    text: "View available seats and buy tickets to upcoming screenings.",
    icon: ticketsIcon,
    altText: "View available seats and buy tickets to upcoming screenings",
  },
  {
    id: "rewards",
    linkTo: "rewards/",
    headingText: "Rewards",
    text: `Join our rewards programme and start saving today! 10% off your first ticket purchase over $50.`,
    icon: memberIcon,
    altText: "Click here to sign up for our rewards programme",
  },
  {
    id: "About",
    linkTo: "About/",
    headingText: "About",
    text: "Read about the history of Tongariro Cinemas, our museum, and café.",
    icon: aboutIcon,
    altText:
      "Read about the history of Tongariro Cinemas, our museum, and café",
  },
];

// Set prices
const ticketPrices = {
  adult: 18,
  child: 14.5,
  concession: 11.5,
};

// Set maximum number of tickets allowed to calculate
const MAX_TICKET_COUNT = 10;

/*
 *
 *
 */

// List of benefits (see Rewards and Benefits component)
const benefitsList = [
  {
    id: 0,
    text: "10% off your first ticket purchase over $50",
  },
  {
    id: 1,
    text: "Free entry to the museum on Saturdays",
  },
  {
    id: 2,
    text: "One free coffee at the café",
  },
  {
    id: 3,
    text: "A free ticket to any screening on your birthday",
  },
];

export { homeSectionsData, ticketPrices, MAX_TICKET_COUNT, benefitsList };
