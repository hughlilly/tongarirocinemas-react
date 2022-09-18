// Import icon and ticket-related data
import TicketIcon from "../assets/logos_icons/ticket.svg";
import { MAX_TICKET_COUNT, ticketPrices } from "../Data/AppData";

function Tickets() {
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
      <div className="ticket-chooser text-center md:text-left grid md:grid-cols-3 grid-rows-4 gap-2 md:gap-7 border mx-20 p-5">
        <div className="ticket-type">Adult</div>
        <div className="price">{ticketPrices.adult.toFixed(2)}</div>
        <div className="ticket-quantity flex flex-row justify-center space-x-5 border rounded-md mx-28 sm:mx-10">
          <button className="decrease" data-count-name="adult">
            &minus;
          </button>
          <div id="adult" className="value border-x px-3 py-1">
            0
          </div>
          <button className="increase" data-count-name="adult">
            +
          </button>
        </div>
        <div className="ticket-type">Child</div>
        <div className="price">{ticketPrices.child.toFixed(2)}</div>
        <div className="ticket-quantity flex flex-row justify-center space-x-5 border rounded-md mx-28 sm:mx-10">
          <button className="decrease" data-count-name="child">
            &minus;
          </button>
          <div id="child" className="value border-x px-3 py-1">
            0
          </div>
          <button className="increase" data-count-name="child">
            +
          </button>
        </div>
        <div className="ticket-type">Concession</div>
        <div className="price">{ticketPrices.concession.toFixed(2)}</div>
        <div className="ticket-quantity flex flex-row justify-center space-x-5 border rounded-md mx-28 sm:mx-10">
          <button className="decrease" data-count-name="conc">
            &minus;
          </button>
          <div id="conc" className="value border-x px-3 py-1">
            0
          </div>
          <button className="increase" data-count-name="conc">
            +
          </button>
        </div>
        <div className="total-heading uppercase font-bold">Total</div>
        <div id="ticket-total" className="price font-bold">
          0.00
        </div>
        <button id="reset" className="m-auto">
          Reset
        </button>
      </div>
      <div className="text-sm px-20 md:px-52 text-center">
        NB: Concession tickets are available to students, Gold Card and
        Community Services cardholders. Proof of ID is required.
      </div>
    </main>
  );
}

export default Tickets;
