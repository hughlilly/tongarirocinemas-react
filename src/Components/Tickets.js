// Import icon and ticket-related data
import { useState } from "react";
import TicketIcon from "../assets/logos_icons/ticket.svg";
import { MAX_TICKET_COUNT, ticketPrices } from "../Data/AppData";

function Tickets() {
  const [counters, setCounter] = useState(ticketPrices);

  const sum = ticketPrices.reduce(
    (acc, ticketPrices) => acc + ticketPrices.count * ticketPrices.price,
    0
  );

  const decrementCounter = (ticket) => {
    if (ticket.count === 0) {
      return;
    }
    const newState = counters.map((counter) => {
      if (counter.id === ticket.id) {
        return { ...counter, count: ticket.count-- };
      } else {
        return counter;
      }
    });
    setCounter(newState);
  };

  const incrementCounter = (ticket) => {
    if (ticket.count === MAX_TICKET_COUNT) {
      return;
    }
    const newState = counters.map((counter) => {
      if (counter.id === ticket.id) {
        return { ...counter, count: ticket.count++ };
      } else {
        return counter;
      }
    });
    setCounter(newState);
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
        {ticketPrices.map((ticket) => (
          <div
            className="flex flex-col md:flex-row mx-20 text-center"
            key={ticket.id}
          >
            <div className="ticket-type  w-1/3">{ticket.type}</div>
            <div className="ticket-price w-1/3">
              {"$" + ticket.price.toFixed(2)}
            </div>
            <div className="w-1/3 flex flex-row text-center">
              <div className="button w-1/4">
                <button
                  className="decrement"
                  onClick={() => decrementCounter(ticket)}
                >
                  -
                </button>
              </div>
              <div className="ticket-quantity"> {ticket.count} </div>
              <div className="button w-1/4">
                <button
                  className="increment w-1/2"
                  onClick={() => incrementCounter(ticket)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="flex flex-row mx-20 space-x-5">
          <div className="w-2/3 uppercase font-bold text-right">Total</div>
          <div className="w-1/3 text-center">${sum.toFixed(2)}</div>
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
