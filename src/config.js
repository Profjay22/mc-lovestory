// =============================================================
//  M & C — Wedding site content.
//  Everything the site displays lives here. Edit this file to
//  change names, dates, wording, contacts, photos, etc.
// =============================================================

export const couple = {
  bride: { first: "Mojolaoluwa", middle: "Eunice", last: "Olunaike", short: "Mojolaoluwa" },
  groom: { first: "Chinedu", middle: "Somtochukwu", last: "Asuzu", short: "Chinedu" },
  initials: { bride: "M", groom: "C" },
  hashtag: "#M&CLovestory",
  tagline: "Our forever begins",
  // ISO date + time of the ceremony, used for the live countdown.
  weddingISO: "2026-08-29T11:00:00+01:00", // Sat 29 Aug 2026, 11:00 AM (WAT)
  dateLong: "Saturday, 29th August 2026",
  dateShort: "29 . 08 . 2026",
};

export const families = {
  intro: "With hearts full of joy, two families come together as one.",
  bride: {
    title: "The Family of the Bride",
    lines: [
      "Late Mr. Olanrewaju Emmanuel Olunaike",
      "Pastor & Dr. (Mrs.) Oluwole Owolabi",
    ],
  },
  groom: {
    title: "The Family of the Groom",
    lines: ["Sir Joseph & Lady Ethel Asuzu"],
  },
};

// Our Story — flowing narrative, split into chapters for the carousel.
export const story = {
  heading: "Our Story",
  subheading: "Some chapters are written by destiny.",
  chapters: [
    {
      tag: "How it began",
      photo: "/photos/eng-eye-front.jpg",
      body: "Chinedu and I met through a mutual friend who spoke so highly of him. The more good things he said, the more curious I became. Unknown to me, that same friend had been telling Chinedu wonderful things about me too, and before long he was eager to know me. With my permission, my contact was shared.",
    },
    {
      tag: "The first call",
      photo: "/photos/eng-lamp.jpg",
      body: "The very next day, Chinedu sent me a message. Three days later we had our first phone call, and what was meant to be a simple conversation turned into five unforgettable hours. Time seemed to disappear. We laughed, we shared stories, we talked about everything. It felt so natural, as though we had known each other for years.",
    },
    {
      tag: "Meeting in person",
      photo: "/photos/eng-walk.jpg",
      body: "The beautiful conversations continued over audio and video calls, and two weeks later we met in person for the first time. Our first date was at a park. We talked for hours before heading out for lunch — effortless, warm, and full of laughter.",
    },
    {
      tag: "The question",
      photo: "/photos/eng-phone-laugh.jpg",
      body: "The next day, after church, we went out for lunch again. It was over that lunch that Chinedu asked me to be his girlfriend… and I said no. It surely wasn't the answer he hoped for, but he didn't give up.",
    },
    {
      tag: "He didn't give up",
      photo: "/photos/eng-phone-embrace.jpg",
      body: "He returned to his city and pursued me with consistency and intention. He checked in regularly, called often, and even while on holiday in the United States he made sure we stayed connected.",
    },
    {
      tag: "And I said yes",
      photo: "/photos/eng-phone-kiss.jpg",
      body: "When he came back from the United States, he came to see me again. This time, he asked me once more… and this time, I said yes. The rest, as they say, is history. ❤️",
    },
  ],
};

export const events = [
  {
    name: "The Holy Matrimony",
    time: "11:00 AM",
    venue: "Vine Branch Church",
    address:
      "No. 1 Olubadan Palace Road, off Queen Elizabeth Road, Mokola, Ibadan.",
    map: "https://www.google.com/maps/search/?api=1&query=Vine+Branch+Church+Olubadan+Palace+Road+Mokola+Ibadan",
    icon: "church",
  },
  {
    name: "The Reception",
    time: "Immediately after",
    venue: "Manhattan Hall",
    address:
      "Beside Total Filling Station, Eleyele Road, Jericho, Ibadan, Oyo State.",
    map: "https://www.google.com/maps/search/?api=1&query=Manhattan+Hall+Eleyele+Road+Jericho+Ibadan",
    icon: "glass",
  },
];

export const colours = {
  label: "Colours of the day",
  note: "Our guests are warmly invited to wear these shades.",
  swatches: [
    { name: "Dusty Pink", hex: "#C98B94" },
    { name: "Champagne Gold", hex: "#C9A96A" },
  ],
};

export const faqs = [
  {
    q: "Can I bring a date?",
    a: "No, please. Our wedding is strictly by invitation.",
  },
  {
    q: "Are kids welcome?",
    a: "Yes, they are. Children must be supervised by their parents or guardians at all times. They should not move around the hall or step outside unaccompanied by an adult, and are not allowed around the stage or dance-floor area.",
  },
  {
    q: "What will the weather be like?",
    a: "Mild and cool. Forecasts put the day between roughly 21°C and 28°C.",
  },
  {
    q: "Where should I park?",
    a: "There is free parking available within the venue.",
  },
  {
    q: "What should I wear?",
    a: "Our colours are Dusty Pink and Champagne Gold. Feel free to wear outfits in these shades.",
  },
  {
    q: "Is the wedding indoors or outdoors?",
    a: "It is an indoor celebration.",
  },
  {
    q: "What kind of shoes should I wear?",
    a: "Whatever you feel most comfortable in.",
  },
  {
    q: "Can I take photos on my phone or camera?",
    a: "Yes, absolutely. Feel free to capture the moments.",
  },
  {
    q: "Whom should I call with questions?",
    a: "Precious — 0815 677 2729, or Chibuike — 09031547781 (WhatsApp only).",
  },
];

export const registry = {
  heading: "Gifts",
  note:
    "Your presence is the greatest gift of all. Should you wish to bless us further, we would be grateful.",
  amazon: "https://www.amazon.co.uk/wedding/guest-view/2VVUIT0KY2C81",
  monetary: {
    label: "Monetary gifts",
    detail: "Please monetise all gifts. Thank you for your kind understanding.",
    bank: "First Bank",
    account: "3107406739",
    name: "Mojolaoluwa Olunaike",
  },
};

export const rsvp = {
  heading: "RSVP",
  note: "Kindly let us know if you'll be joining us. Our celebration is strictly by invitation.",
  // WhatsApp number that receives the RSVP (Chibuike, WhatsApp only).
  whatsapp: "2349031547781",
  contacts: [
    { name: "Precious", phone: "0815 677 2729", tel: "+2348156772729" },
    { name: "Chibuike", phone: "09031547781 (WhatsApp)", tel: "+2349031547781" },
  ],
};

// Photo gallery order.
export const gallery = [
  "/photos/eng-eye-back.jpg",
  "/photos/eng-phone-kiss.jpg",
  "/photos/reg-kiss-lilies.jpg",
  "/photos/eng-lamp.jpg",
  "/photos/reg-bw-a.jpg",
  "/photos/eng-phone-embrace.jpg",
  "/photos/reg-celebrate.jpg",
  "/photos/eng-eye-front.jpg",
  "/photos/reg-steps-c.jpg",
  "/photos/eng-phone-laugh.jpg",
  "/photos/reg-bw-b.jpg",
  "/photos/reg-steps-a.jpg",
  "/photos/eng-walk.jpg",
  "/photos/reg-steps-e.jpg",
];

export const credits = { photographer: "Ally" };
