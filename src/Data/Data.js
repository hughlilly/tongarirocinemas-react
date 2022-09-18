/*
 * Data for the app is stored here.
 * This file can be thought of like a rudimentary Content Management System (CMS).
 */

// Info about each section — this controls the text of the navigation as well as the content on the Home page.
// Images for each section on the Home page
import nowPlayingIcon from "../assets/logos_icons/playing.svg";
import ticketsIcon from "../assets/logos_icons/ticket.svg";
import memberIcon from "../assets/logos_icons/member.svg";
import aboutIcon from "../assets/logos_icons/about.svg";

// Each section has an id, a heading, a destination (linkTo), some display text, an icon, and alt text for the icon.
const sections = [
  {
    id: 0,
    headingName: "Now Playing",
    linkTo: "now-playing/",
    text: "See a list of films currently playing.",
    icon: nowPlayingIcon,
    altText: "View currently playing films",
  },
  {
    id: 1,
    headingName: "Tickets",
    linkTo: "tickets/",
    text: "View available seats and buy tickets to upcoming screenings.",
    icon: ticketsIcon,
    altText: "View available seats and buy tickets to upcoming screenings",
  },
  {
    id: 2,
    headingName: "Rewards",
    linkTo: "rewards/",
    text: `Join our rewards programme and start saving today! 10% off your first ticket purchase over $50.`,
    icon: memberIcon,
    altText: "Click here to sign up for our rewards programme",
  },
  {
    id: 3,
    headingName: "About",
    linkTo: "about/",
    text: "Read about the history of Tongariro Cinemas, our museum, and café.",
    icon: aboutIcon,
    altText:
      "Read about the history of Tongariro Cinemas, our museum, and café",
  },
];

// Price data -- used at /tickets
const ticketPrices = {
  adult: 18,
  child: 14.5,
  concession: 11.5,
};

// Set maximum number of tickets allowed to calculate
const MAX_TICKET_COUNT = 10;

// List of benefits -- used at /rewards
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

export { sections, ticketPrices, MAX_TICKET_COUNT, benefitsList };
