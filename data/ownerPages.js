// Copy for every Fluids page. Written for a plant owner, not a developer.
//
// Rules this file keeps (agreed with the owner, 2026-10-27):
//   - say WHAT changes for the customer, never HOW the software does it;
//   - no record numbers, no example figures, no module or rule counts, nothing
//     about tables, triggers, databases, queues or how anything is built;
//   - a cylinder is "a cylinder", an order is "a sales order";
//   - GST: the phrase is "GST-correct invoicing". Return filing belongs to the
//     Accounting product, and e-invoice / e-way bill are not live for customers
//     yet — say so, never sell them as shipped.

export const ownerPages = {
  overview: {
    eyebrow: "Pradrava product · Live in production",
    title: "Fluids, the operating system for",
    titleAccent: "an industrial gas plant",
    lead: "Sales, cylinders, filling, the lab, dispatch, purchasing and GST-correct invoicing on one set of live data, across every branch. Each desk picks up where the last one left off, and nothing is typed twice.",
    highlights: [
      { strong: "Every", text: "cylinder accounted for: where it is, who has it, when it was last tested" },
      { strong: "One", text: "place for sales, plant, lab, dispatch and your accounts" },
      { strong: "All", text: "your branches, each kept separate, the group total in one view" },
    ],
    areas: {
      eyebrow: "What is inside",
      title: "Seven areas, one connected plant",
      items: [
        { title: "Cylinder operations", desc: "Every cylinder's whole story: whose it is, where it stands, what it holds, and when it is due back or due for test.", gain: "Never lose a bottle again", href: "/products/fluids/cylinder-operations" },
        { title: "Quality and the lab", desc: "Gas tests, certificates your customers' auditors accept, instrument calibration and retest dates.", gain: "Certificates from real results", href: "/products/fluids/quality" },
        { title: "Production and machines", desc: "Filling, on-site gas production, bulk tanks and the machines that keep it running.", gain: "Know what each fill really cost", href: "/products/fluids/production" },
        { title: "Purchasing and stock", desc: "From a request to buy, through quotations and orders, to goods received and the supplier's bill.", gain: "Pay only for what arrived", href: "/products/fluids/procurement" },
        { title: "Billing and money", desc: "GST-correct invoices, rent on cylinders, customer payments, returns and who owes you what.", gain: "No missed rent, no wrong tax", href: "/products/fluids/finance" },
        { title: "Alerts and reminders", desc: "Every step has an owner. When work waits too long, the right person hears about it.", gain: "Nothing sits unnoticed", href: "/products/fluids/notifications" },
        { title: "Security and branches", desc: "Each branch sees only its own data, each person only their own work, and every change is recorded.", gain: "Safe to grow into many branches", href: "/products/fluids/platform" },
      ],
    },
    flow: {
      eyebrow: "End to end",
      title: "Two journeys, no gaps",
      lead: "Selling gas and buying what you need run through the same system, so a sales order and a purchase order end in the same accounts.",
      steps: [
        { title: "Selling", desc: "Enquiry, quotation and sales order, with stock held the moment the order is placed." },
        { title: "Making it ready", desc: "Cylinders set aside, filled, tested and checked before they leave." },
        { title: "Delivering", desc: "Challan, delivery signed for, and a GST-correct invoice raised from it." },
        { title: "Getting paid", desc: "Payments recorded against invoices, and late payers in plain view." },
        { title: "Buying", desc: "A request to buy, quotations from suppliers, and a purchase order." },
        { title: "Receiving", desc: "Goods checked on arrival. Anything rejected is recorded against the supplier." },
        { title: "Paying suppliers", desc: "The supplier's bill is checked against what you ordered and what arrived." },
        { title: "Into your accounts", desc: "Documents go to the accounts package you already use." },
      ],
    },
    stops: {
      eyebrow: "Fits the plant you run",
      title: "Take only the parts you need",
      items: [
        { big: "Cylinders only", line: "Refilling, rental, the lab and dispatch, without any manufacturing screens getting in the way.", points: ["Refill, rental and sale of cylinders", "Gas tests and certificates", "Customer cylinders tracked both ways"] },
        { big: "Items only", line: "Valves, regulators and other goods: received, made, serviced and sold.", points: ["Goods checked on arrival", "Production with a parts list", "Servicing with the parts it used"] },
        { big: "Both together", line: "Cylinders and items on the same order, the same delivery and the same invoice, the way most plants work.", points: ["One order, one delivery", "One view of the whole plant", "Start with one, add the other later"] },
      ],
    },
    faq: [
      { q: "Is this a cylinder tracker or a full system?", a: "A full operations system for a gas plant. Sales, purchasing, stock, production, the lab, machines, dispatch and billing all run on the same live data, with cylinders at the heart of it." },
      { q: "How is data kept separate between our branches?", a: "Each branch sees only its own customers, stock, orders and documents. Your head office sees every branch and the group total. A branch can never see, or use, another branch's stock unless it is formally transferred." },
      { q: "We only fill cylinders. Do we have to take everything?", a: "No. You switch on what you do. If you only fill cylinders, the manufacturing side is simply not there. You can add more later without moving your data." },
      { q: "Does it handle Indian GST properly?", a: "On every document you raise, yes: the right split between CGST and SGST or IGST, HSN codes, and invoice numbers that never skip. An invoice whose tax does not add up will not issue. Filing your returns is done with your accountant or our Accounting product." },
      { q: "Can it stop an unsafe dispatch?", a: "Yes. A cylinder past its pressure test, or gas that failed its quality test, cannot be sent out. A cylinder holding the wrong gas is stopped and held." },
      { q: "Do shop-floor staff need laptops?", a: "No. There is a simple full-screen mode for the shop floor with big buttons and a sound for new tasks, and a phone can be used as a scanner." },
      { q: "Can we get our data out?", a: "Yes. Registers export to spreadsheets, and every document prints with your own letterhead." },
      { q: "Do we have to install anything?", a: "No. It runs in the browser and is hosted in India. There is nothing to install or maintain at your plant." },
    ],
    cta: { title: "See it on your own workflow", text: "Book a walkthrough and we will run your hardest process: the awkward rental billing, the branch transfer, the certificate your customer keeps rejecting." },
  },

  cylinders: {
    eyebrow: "Cylinder operations",
    title: "Know every cylinder,",
    titleAccent: "whose it is and where it is",
    lead: "A cylinder is entered once and never guessed at again. Open any one and see its whole story: who owns it, where it is standing, what it last held, when it was tested and which customer has it.",
    questionsTitle: "The cylinder questions that cost you money",
    questions: [
      { q: "How many of our cylinders does that customer have?", was: "challans and registers, and the number still gets argued.", now: "on screen, both ways: your cylinders with them, and theirs with you." },
      { q: "Where is that cylinder right now?", was: "someone walks the yard looking for it.", now: "you see the bay it is standing in, or the customer who has it." },
      { q: "Why was the same cylinder promised to two orders?", was: "two people set the same bottle aside and find out at dispatch.", now: "once a cylinder is set aside for an order, nobody else can take it." },
      { q: "Is this one ours or the customer's?", was: "it depends on who you ask.", now: "every cylinder says whether it is yours, the customer's, sold or on rent." },
      { q: "Which cylinders have been sitting at customers for months?", was: "nobody knows until the stock count.", now: "cylinders idle at a customer are listed, so you can ask for them back." },
      { q: "We swapped a customer's cylinder for one of ours. Now what?", was: "the swap lives in someone's memory.", now: "the exchange is recorded, so both sides know whose bottle is whose." },
    ],
    flow: {
      eyebrow: "A cylinder's journey",
      title: "One continuous record, from arrival to return",
      steps: [
        { title: "Arrives", desc: "A new cylinder, or a customer's, is checked in with its details and test date." },
        { title: "Set aside", desc: "It is matched to a sales order. Nobody else can claim it." },
        { title: "Filled", desc: "Filled at your plant, or sent out to a filler and received back." },
        { title: "Tested", desc: "The gas is tested before it can go anywhere.", hold: "Failed? Back for rework." },
        { title: "Checked", desc: "A final look and photos before it leaves." },
        { title: "Out the gate", desc: "Leaves on a challan; the customer signs for it.", hold: "Out of test? Held back." },
        { title: "With the customer", desc: "Rent starts after the free period, if it is on rent." },
        { title: "Comes back", desc: "Received back, rent stops, and it is ready for its next fill." },
      ],
    },
    stops: {
      eyebrow: "Where it says no",
      title: "The mistakes it will not let happen",
      items: [
        { big: "Wrong gas", line: "A cylinder set for one gas cannot be filled with another, and a wrong-gas cylinder is stopped and held.", points: ["Checked every time it is filled", "Held until someone decides"] },
        { big: "Out of test", line: "A cylinder past its pressure test cannot leave the plant.", points: ["Due dates warned well ahead", "Flagged at the moment it comes back in"] },
        { big: "Double booking", line: "Two orders can never claim the same cylinder.", points: ["Set aside once, for one order", "Freed only when the order lets go"] },
      ],
    },
    reminders: {
      eyebrow: "Built for the yard, not the desk",
      title: "For people who are not sitting at a computer",
      items: [
        { title: "Shop-floor screen", desc: "Big buttons and a sound for each new move to make." },
        { title: "Phone as a scanner", desc: "Scan a cylinder with a phone instead of typing its number." },
        { title: "Moves confirmed", desc: "A move is not done until the person who made it confirms it." },
        { title: "Bays that know what they hold", desc: "A bay meant for one kind of gas will not accept another." },
        { title: "Customer exchanges", desc: "Swap a customer's cylinder for yours and keep the record straight." },
        { title: "Retire, never erase", desc: "An old cylinder is retired with its history kept, not deleted." },
      ],
    },
  },

  quality: {
    eyebrow: "Quality and the lab",
    title: "Certificates your customers'",
    titleAccent: "auditors will accept",
    lead: "Gas is tested, the result decides what happens next, and the certificate comes straight from that result. Instruments, retest dates and shelf lives are watched for you.",
    questionsTitle: "The lab questions that come up every week",
    questions: [
      { q: "The customer wants the test certificate.", was: "typed into a spreadsheet from the lab notebook.", now: "printed from the actual test result, with your letterhead." },
      { q: "Did a failed cylinder go out anyway?", was: "found out from the customer.", now: "gas that failed its test cannot be dispatched. It goes back for rework." },
      { q: "Was the instrument in calibration when we tested?", was: "nobody can say for sure.", now: "each instrument carries its calibration dates, and you are told before one runs out." },
      { q: "When is this cylinder due for its pressure test?", was: "a register checked once in a while.", now: "every cylinder's next test date is worked out and flagged as it comes up." },
      { q: "Who changed this result, and when?", was: "no one remembers.", now: "every change is recorded with who made it and when, and cannot be erased." },
      { q: "We calibrate our customers' instruments. Who is due?", was: "a diary, and a few phone calls.", now: "each customer is sent one letter listing everything of theirs that is due." },
    ],
    flow: {
      eyebrow: "A test, start to finish",
      title: "The result decides what happens next",
      steps: [
        { title: "Sample taken", desc: "Linked to the cylinder and the order it belongs to." },
        { title: "Measured", desc: "Recorded against the method and the instrument used." },
        { title: "Decided", desc: "Pass or fail is worked out from the numbers, not ticked." },
        { title: "Signed", desc: "The analyst signs; a reviewer countersigns." },
        { title: "Passed", desc: "Goes on to the final check before dispatch." },
        { title: "Failed", desc: "A rework job and a re-test are raised automatically.", hold: "It cannot go out until it passes." },
        { title: "Certificate", desc: "Printed from the result, ready for the customer's auditor." },
        { title: "Kept", desc: "Every result and certificate stays on record for the audit." },
      ],
    },
    areas: {
      eyebrow: "What the lab gets",
      title: "Everything a gas lab is asked for",
      items: [
        { title: "Certificate of analysis", desc: "To ISO 6141, with measurement uncertainty where your customer asks for it." },
        { title: "Instruments in calibration", desc: "To ISO/IEC 17025: readings before and after adjustment, and a printable calibration certificate." },
        { title: "Mixtures made by weight", desc: "For calibration gases: the composition is worked out as you weigh, so a wrong addition shows up early." },
        { title: "Sampling on incoming goods", desc: "To ISO 2859-1: how many to check, and whether the lot passes." },
        { title: "Problems recorded and closed", desc: "What went wrong, why, and what was done about it, feeding each supplier's score." },
        { title: "Quality you can see", desc: "Trends over your own results, so drift shows up before it becomes a failure." },
      ],
    },
    reminders: {
      eyebrow: "Watched for you",
      title: "Dates the lab used to keep in a diary",
      items: [
        { title: "Pressure test due", desc: "Worked out for the whole fleet from one setting per gas." },
        { title: "Certificate expiry", desc: "Mixtures nearing the end of their stated life." },
        { title: "Instrument calibration", desc: "Told before an instrument falls out of date." },
        { title: "Customer instruments due", desc: "One letter to each customer, listing what is due." },
        { title: "Failed tests waiting", desc: "Rework and re-tests that have not been done yet." },
        { title: "Retest at receiving", desc: "Warned when a cylinder that is nearly due comes back in." },
      ],
    },
  },

  production: {
    eyebrow: "Production and machines",
    title: "Filling, making gas,",
    titleAccent: "and the machines behind it",
    lead: "Whether you fill from donor cylinders, from your own tank or from an on-site plant, you see what each fill used, what it cost, and how hard your machines are working.",
    questionsTitle: "The production questions nobody can answer quickly",
    questions: [
      { q: "What did that batch of fills actually cost us?", was: "a guess at month end.", now: "what was used is recorded as you fill, so the cost is known." },
      { q: "How much gas did we lose filling from the tank?", was: "nobody measures it.", now: "drawn from the tank against delivered into cylinders, every session." },
      { q: "Which cylinders were in that batch?", was: "a paper log, if it was kept.", now: "every fill is traceable back to its source and its batch." },
      { q: "Why does that machine keep breaking down?", was: "an argument on the shop floor.", now: "breakdowns and their reasons are recorded and ranked, biggest first." },
      { q: "When is the compressor due for service?", was: "a calendar reminder someone set once.", now: "service is due by how much the machine has actually run." },
      { q: "Can we promise that delivery date?", was: "optimism.", now: "you see what each machine is already committed to." },
    ],
    areas: {
      eyebrow: "The kinds of production it handles",
      title: "However your plant makes its gas",
      items: [
        { title: "Filling from cylinders", desc: "Gas moved from donor cylinders into the customer's, with what was used recorded." },
        { title: "Filling many at once", desc: "A manifold session from a tank, for several customers in one go." },
        { title: "Making gas on site", desc: "Your own plant's output into tanks, with the running cost shared across the gases it makes." },
        { title: "Selling by the tanker", desc: "Liquid out by road tanker, billed on the agreed rate." },
        { title: "Making items", desc: "Assemblies built from a parts list, with planned against actual." },
        { title: "Servicing", desc: "Valve changes, tests and repairs, with the parts they used." },
      ],
    },
    reminders: {
      eyebrow: "Your machines",
      title: "Equipment looked after, not just listed",
      items: [
        { title: "How much each machine really runs", desc: "Available, at full rate, and making good output." },
        { title: "Breakdowns and downtime", desc: "How often, how long, and why, ranked biggest first." },
        { title: "Service on run hours", desc: "Due by how hard the machine has worked." },
        { title: "Spare parts used", desc: "Taken from stock, so maintenance cost is real." },
        { title: "Calibration", desc: "Machine and statutory calibration, warned before it runs out." },
        { title: "Machine readings", desc: "A reading outside its range raises a job." },
      ],
    },
  },

  procurement: {
    eyebrow: "Purchasing and stock",
    title: "Buy what you need,",
    titleAccent: "pay only for what arrived",
    lead: "From a request to buy, through supplier quotations and the purchase order, to goods checked on arrival and the supplier's bill checked against both.",
    questionsTitle: "Where money leaks out of purchasing",
    questions: [
      { q: "Did we pay for goods we rejected?", was: "the bill is paid before anyone checks.", now: "the bill is checked against the order and against what you accepted." },
      { q: "Which supplier actually delivers on time?", was: "an opinion.", now: "each supplier is scored from your real deliveries and rejections." },
      { q: "What did this item really cost us, landed?", was: "freight and duty sit in another file.", now: "freight, duty and handling are added to the cost of the goods." },
      { q: "Are we over budget?", was: "found out at year end.", now: "checked when someone asks to buy, before the order is placed." },
      { q: "We ran out again.", was: "someone notices the empty shelf.", now: "reorder levels raise a request to buy before you run out." },
      { q: "Which price did that supplier quote last time?", was: "an old email.", now: "every quote is kept, so the best recent price is one look away." },
    ],
    flow: {
      eyebrow: "The buying chain",
      title: "A check at every link",
      steps: [
        { title: "Request to buy", desc: "Raised by hand, or automatically when stock runs low." },
        { title: "Approved", desc: "Checked against the budget before it goes further." },
        { title: "Quotations", desc: "Suppliers quote; the best is chosen and the rest are closed." },
        { title: "Purchase order", desc: "Sent to the supplier with the right GST." },
        { title: "Goods arrive", desc: "Counted and checked before they go into stock.", hold: "Rejected? Recorded against the supplier." },
        { title: "Into stock", desc: "Only what was accepted is counted as stock." },
        { title: "Supplier's bill", desc: "Checked against the order and what was accepted." },
        { title: "Paid", desc: "Only when it all agrees, or someone signs off the difference." },
      ],
    },
    reminders: {
      eyebrow: "Stock you can trust",
      title: "Stock you can reconcile, not just look at",
      items: [
        { title: "What is free to sell", desc: "Stock already promised to an order is not counted twice." },
        { title: "Every bin, every branch", desc: "Where each item is, branch by branch." },
        { title: "Moves between branches", desc: "Stock sent from one branch and received by another." },
        { title: "Stock bought for an order", desc: "Goes to the order it was bought for." },
        { title: "Contracts with suppliers", desc: "How much is left on each agreement." },
        { title: "Supplier scorecards", desc: "On time, in full, and how much you rejected." },
      ],
    },
  },

  finance: {
    eyebrow: "Billing and money",
    title: "Bills that are right,",
    titleAccent: "and rent you never forget",
    lead: "GST-correct invoices from the delivery, rent on cylinders billed when it is due, customer payments recorded, and a clear view of who owes you what.",
    questionsTitle: "The billing mistakes that cost the most",
    questions: [
      { q: "Did we bill rent on the cylinders out with customers?", was: "someone has to remember.", now: "rent starts after the free period and is billed monthly and on return, never twice." },
      { q: "Is the GST on this invoice right?", was: "checked by hand, if at all.", now: "the right split is worked out from the two states, and a bill that does not add up will not issue." },
      { q: "Who still owes us money?", was: "a phone round to the accounts team.", now: "every unpaid invoice, and how late it is, in one view." },
      { q: "The customer returned part of the order.", was: "a credit note typed from scratch.", now: "credited against the original invoice, never more than was billed." },
      { q: "Did we invoice everything we delivered?", was: "found out at the audit.", now: "deliveries waiting for an invoice are listed." },
      { q: "Do we have to change our accounts software?", was: "the fear that stops most plants.", now: "no. Documents go to the accounts package you already use." },
    ],
    areas: {
      eyebrow: "What billing gets",
      title: "Everything between the delivery and the money",
      items: [
        { title: "GST-correct invoices", desc: "The right tax split, HSN codes, and invoice numbers that never skip." },
        { title: "Rent and holding charges", desc: "From the end of the free period, monthly and on return." },
        { title: "Customer payments", desc: "Recorded against invoices; a mistaken one is reversed, never deleted." },
        { title: "Returns and credit notes", desc: "Credited against the original, part or whole." },
        { title: "Credit limits", desc: "An order over the customer's limit can be stopped." },
        { title: "Your accounts package", desc: "Invoices and notes go to the accounts system you already run." },
      ],
    },
    soon: {
      title: "What is built and not yet switched on",
      lead: "We would rather you knew. These are built and waiting on a government portal connection or on your accountant.",
      items: [
        { title: "E-invoice (IRN)", desc: "Built, and being connected to the government portal provider." },
        { title: "E-way bill", desc: "Built, and being connected the same way." },
        { title: "Filing your GST returns", desc: "Done with your accountant, or with our Accounting product." },
      ],
    },
  },

  notifications: {
    eyebrow: "Alerts and reminders",
    title: "Nothing waits",
    titleAccent: "without someone knowing",
    lead: "Every step in the plant has an owner and a time it should be done by. When work waits too long, the owner is told, then their manager, and it stays on screen until it is done.",
    questionsTitle: "Handovers that fall between desks",
    questions: [
      { q: "The order sat for three days because someone was on leave.", was: "nobody else knew it was waiting.", now: "the task goes to the role, not the person, so whoever is on shift sees it." },
      { q: "A gas test failed on Friday and production heard on Monday.", was: "the news travelled by word of mouth.", now: "production and the manager are told the moment it fails." },
      { q: "Everyone gets every alert, so nobody reads them.", was: "a flood of messages.", now: "each alert goes only to the desk that has to act on it." },
      { q: "We have deadlines, but only in the quality manual.", was: "written down, never watched.", now: "each deadline is live, and you choose them yourself." },
      { q: "An overdue invoice nobody chased.", was: "found at month end.", now: "late payers are listed, and reminders go out on schedule." },
      { q: "A cylinder came back nearly due for test.", was: "noticed weeks later.", now: "the person receiving it is warned right there." },
    ],
    flow: {
      eyebrow: "How a delay is handled",
      title: "From a stuck job to someone acting on it",
      steps: [
        { title: "Something happens", desc: "An order is placed, a test fails, goods arrive." },
        { title: "The right desk is told", desc: "Only the desk that has to act." },
        { title: "A time to do it by", desc: "Set by you, for each kind of task." },
        { title: "Done in time", desc: "Ticked off, and nobody else is bothered." },
        { title: "Still waiting", desc: "Their manager is told.", hold: "It stays on screen until it is done." },
        { title: "One click to the record", desc: "The alert opens the exact order, cylinder or test." },
        { title: "On the shop floor too", desc: "A sound at the shop-floor screen for each new move." },
        { title: "Your settings", desc: "Change who is told and how long they have, any time." },
      ],
    },
    reminders: {
      eyebrow: "Reminders on a schedule",
      title: "Things nobody is watching, watched",
      items: [
        { title: "Unpaid invoices", desc: "Late payers listed and reminded." },
        { title: "Quotations about to lapse", desc: "Before the customer's price runs out." },
        { title: "Pressure tests due", desc: "Every cylinder, flagged ahead of time." },
        { title: "Instrument calibration", desc: "Before an instrument falls out of date." },
        { title: "Rent due", desc: "Billed on time, monthly and on return." },
        { title: "Certificate expiry", desc: "Mixtures nearing the end of their life." },
      ],
    },
  },

  platform: {
    eyebrow: "Security and branches",
    title: "Safe to grow,",
    titleAccent: "one branch or twenty",
    lead: "Each branch sees only its own data. Each person sees only the work their role needs. Every change is recorded with who made it. And there is nothing to install at your plant.",
    questionsTitle: "What owners ask before they trust a system",
    questions: [
      { q: "Can one branch see another branch's customers?", was: "in a shared spreadsheet, yes.", now: "no. Each branch sees only its own. Head office sees all of them." },
      { q: "Can a branch use another branch's stock?", was: "it just takes it.", now: "only through a proper transfer that both branches can see." },
      { q: "Who changed this, and when?", was: "nobody knows.", now: "every change is recorded with the person and the time." },
      { q: "Can the store-keeper see our prices and margins?", was: "if they have the file.", now: "each person sees only the screens their role needs." },
      { q: "Can someone approve their own purchase?", was: "in a small branch, often.", now: "you can require a second person to approve." },
      { q: "What do we have to install?", was: "servers and an IT person.", now: "nothing. It runs in the browser, hosted in India." },
    ],
    areas: {
      eyebrow: "What you control",
      title: "Set it up the way your company works",
      items: [
        { title: "Branches", desc: "Each kept separate, with the group total in one view." },
        { title: "Roles", desc: "Sales, purchase, production, lab, stores, accounts and managers each see their own screens." },
        { title: "What each branch does", desc: "Switch parts on or off per branch, and add more later." },
        { title: "Approvals", desc: "Decide which steps need a second person." },
        { title: "Your documents", desc: "Every printed document carries your letterhead and layout." },
        { title: "Your data", desc: "Registers export to spreadsheets whenever you want them." },
      ],
    },
    reminders: {
      eyebrow: "Looked after for you",
      title: "The things you should not have to think about",
      items: [
        { title: "Nothing to install", desc: "Runs in any modern browser, on a desk or a tablet." },
        { title: "Hosted in India", desc: "On managed cloud infrastructure." },
        { title: "Sign-in protection", desc: "Repeated wrong passwords are blocked." },
        { title: "Every change recorded", desc: "Who did what, and when." },
        { title: "Problems seen early", desc: "We usually see an error before it is reported." },
        { title: "Help when you need it", desc: "Written guides for every screen, and our team on call." },
      ],
    },
  },
};
