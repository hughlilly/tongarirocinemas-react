import { useState } from "react";
// Import icon and ticket-related data
import TicketIcon from "../assets/logos_icons/ticket.svg";
import { MAX_TICKET_COUNT, ticketPrices } from "../Data/AppData";

// This function returns the markup for the /tickets route
function Tickets() {
  // Use the ticketPrices variahle from AppData.js as state
  const [ticketObjects, setTicketObjects] = useState(ticketPrices);

  // Sum the array using `reduce()`
  // This calculates the total value of all tickets
  const sum = ticketObjects.reduce((accumulator, ticket) => {
    console.log(ticket);
    return accumulator + ticket.count * ticket.price;
  }, 0);

  const decrementCounter = (ticket) => {
    if (ticket.count === 0) {
      return;
    }
    const newState = ticketObjects.map((item) => {
      if (item.id === ticket.id) {
        return { ...item, count: ticket.count - 1 };
      } else {
        return item;
      }
    });
    setTicketObjects(newState);
  };

  const incrementCounter = (ticket) => {
    if (ticket.count === MAX_TICKET_COUNT) {
      return;
    }
    const newState = ticketObjects.map((item) => {
      if (item.id === ticket.id) {
        return { ...item, count: ticket.count + 1 };
      } else {
        return item;
      }
    });
    setTicketObjects(newState);
  };

  const resetCounters = () => {
    const newState = ticketObjects.map((item) => {
      return { ...item, count: 0 };
    });
    setTicketObjects(newState);
  };

  return (
    <main className="first-of-type:pt-20 last-of-type:pb-56 space-y-10 mx-auto max-w-4xl">
      <h1 className="text-xl text-center">Tickets</h1>
      <img
        src={TicketIcon}
        alt="Ticket"
        className="h-[96px] w-[96px] align-middle m-auto"
      />
      <div id="tickets-description" className="px-10 text-center">
        Choose your quantity of tickets below.
        <br />
        You may select a maximum of {MAX_TICKET_COUNT} tickets of each type.
      </div>
      <div className="ticket-chooser flex flex-col border mx-10 md:mx-36 py-10 space-y-14">
        {ticketObjects.map((ticket) => {
          return (
            <div
              className="flex flex-col md:flex-row mx-20 text-center place-items-center md:place-items-start"
              key={ticket.id}
            >
              <div className="ticket-type  sm:w-1/3 md:text-right">
                {ticket.type}
              </div>
              <div className="ticket-price sm:w-1/3 md-text-left">
                {"$" + ticket.price.toFixed(2)}
              </div>

              <div className="buttons-item flex flex-row text-center sm:w-1/4 md:ml-10 space-x-3">
                <button
                  className="button decrement sm:w-1/3"
                  onClick={() => decrementCounter(ticket)}
                >
                  -
                </button>
                <div className="ticket-quantity sm:w-1/3"> {ticket.count} </div>
                <button
                  className="button increment sm:w-1/3"
                  onClick={() => incrementCounter(ticket)}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
        <div className="flex flex-row mx-20">
          <div className="spacer sm:w-1/3"></div>
          <div className="spacer sm:w-1/3"></div>
          <div className="reset-button flex sm:w-1/4 md:ml-10 space-x-3 m-auto text-center">
            <div className="spacer sm:w-1/3"></div>
            <button
              className="reset sm:w-1/3"
              type="reset"
              onClick={resetCounters}
            >
              Reset
            </button>
            <div className="spacer sm:w-1/3"></div>
          </div>
        </div>
        <div className="flex flex-row mx-20 space-x-5 place-items-center">
          <div className="flex-auto uppercase font-bold text-right">Total</div>
          <div className="flex-auto">${sum.toFixed(2)}</div>
        </div>
      </div>
      <div className="text-sm px-20 md:px-52 text-center">
        NB: Concession tickets are available to students, Gold Card and
        Community Services cardholders. Proof of ID is required.
      </div>
    </main>
  );
}

export default Tickets;
