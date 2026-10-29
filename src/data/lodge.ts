/* ------------------------------------------------------------------
 * OUIRGANE DISCOVERY LODGE — central content file
 * Everything on the site reads from here, so it stays a living
 * document: edit copy, scores and — most importantly — swap the
 * image URLs below for the lodge's own photos when ready.
 * -----------------------------------------------------------------*/

export const BOOKING_URL =
  "https://www.booking.com/hotel/ma/ouirgane-discovery-lodge-mrksh.en-gb.html";

export const MAPS_URL =
  "https://maps.app.goo.gl/j9f99NwwmqugqiFf7";

export const MAPS_FULL_URL =
  "https://www.google.com/maps/place/Ouirgane+Discovery+Lodge/@31.1787658,-8.0816149,789m/data=!3m1!1e3!4m9!3m8!1s0xdb0178da86f1aa3:0x4f01575524660e87!5m2!4m1!1i2!8m2!3d31.1787658!4d-8.07904!16s%2Fg%2F11gpnfjsfn?entry=ttu";

export const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Ouirgane+Discovery+Lodge&t=&z=15&ie=UTF8&iwloc=&output=embed";

export const WHATSAPP_URL = "https://wa.me/212666550426";
export const INSTAGRAM_URL = "https://www.instagram.com/ouirganediscovery/";
export const FACEBOOK_URL = "https://www.facebook.com/ouirganediscovery/";

export const PHONE_DISPLAY = "+212 6 66 55 04 26";
export const PHONE_TEL = "+212666550426";

export const COORDS = "31.178° N — 8.079° W";

/* --- images: real photography of Ouirgane Discovery Lodge -------*/
export const IMG = {
  hero: "/lodge-photos/IMG_6929.JPG",
  heroAlt: "/lodge-photos/IMG_6951.JPG",
  valley: "/lodge-photos/IMG_6928.JPG",
  village: "/lodge-photos/IMG_6926.JPG",
  villageGreen: "/lodge-photos/IMG_6927.JPG",
  mudhouse: "/lodge-photos/IMG_6943.JPG",
  road: "/lodge-photos/IMG_6954.JPG",
  imlil: "/lodge-photos/IMG_6958.JPG",
  pool: "/lodge-photos/IMG_6932.JPG",
  roomDeluxe: "/lodge-photos/IMG_6937.JPG",
  roomBudget: "/lodge-photos/IMG_6934.JPG",
  roomTwin: "/lodge-photos/IMG_6941.JPG",
  tagineLift: "/lodge-photos/IMG_6936.JPG",
  tagineClot: "/lodge-photos/IMG_6947.JPG",
  tagineFresh: "/lodge-photos/IMG_6938.JPG",
  teaPour: "/lodge-photos/IMG_6949.JPG",
  teaHands: "/lodge-photos/IMG_6950.JPG",
  night: "/lodge-photos/IMG_6945.JPG",
};

/* --- The complete gallery of real lodge photography ---------------*/
export type GalleryItem = {
  src: string;
  category: "pool" | "rooms" | "dining" | "views";
  title: string;
  desc: string;
};

export const LODGE_GALLERY: GalleryItem[] = [
  { src: "/lodge-photos/IMG_6926.JPG", category: "pool", title: "Swimming Pool & Terrace", desc: "Panoramic view over Ouirgane Lake and the High Atlas" },
  { src: "/lodge-photos/IMG_6927.JPG", category: "pool", title: "Lakeside Sun Terrace", desc: "Sun loungers with unobstructed views of the water" },
  { src: "/lodge-photos/IMG_6928.JPG", category: "pool", title: "Terrace Horizon", desc: "Fresh mountain air and crystal-clear swimming pool" },
  { src: "/lodge-photos/IMG_6929.JPG", category: "views", title: "Ouirgane Lake Panorama", desc: "The sparkling turquoise lake framed by mountain ridges" },
  { src: "/lodge-photos/IMG_6930.JPG", category: "views", title: "Atlas Mountain Ridges", desc: "Quiet valleys surrounding the lodge" },
  { src: "/lodge-photos/IMG_6931.JPG", category: "dining", title: "Moroccan Salon", desc: "Artisanal woodwork and warm Berber textiles" },
  { src: "/lodge-photos/IMG_6932.JPG", category: "pool", title: "Infinity Mountain Pool", desc: "Reflections of the High Atlas peaks" },
  { src: "/lodge-photos/IMG_6933.JPG", category: "rooms", title: "Deluxe Suite", desc: "Handcrafted headboards and tranquil atmosphere" },
  { src: "/lodge-photos/IMG_6934.JPG", category: "rooms", title: "Double Room", desc: "Authentic terracotta floor and garden view" },
  { src: "/lodge-photos/IMG_6935.JPG", category: "rooms", title: "Guest Room Sanctuary", desc: "Cozy bedding and natural wood accents" },
  { src: "/lodge-photos/IMG_6936.JPG", category: "dining", title: "Dining Salon", desc: "Where breakfast and evening tagines are served" },
  { src: "/lodge-photos/IMG_6937.JPG", category: "rooms", title: "King Bedroom Suite", desc: "Generous space and mountain light" },
  { src: "/lodge-photos/IMG_6938.JPG", category: "rooms", title: "Suite Bedroom", desc: "Traditional Berber craftsmanship and quiet luxury" },
  { src: "/lodge-photos/IMG_6939.JPG", category: "rooms", title: "Spacious Suite", desc: "Warm tones, crisp linens, and mountain quiet" },
  { src: "/lodge-photos/IMG_6940.JPG", category: "rooms", title: "Double Bedroom", desc: "Peaceful haven after a day of Atlas hiking" },
  { src: "/lodge-photos/IMG_6941.JPG", category: "rooms", title: "Twin Room", desc: "Two comfortable beds overlooking the valley" },
  { src: "/lodge-photos/IMG_6942.JPG", category: "rooms", title: "Ensuite Bathroom", desc: "Traditional tadelakt and modern amenities" },
  { src: "/lodge-photos/IMG_6943.JPG", category: "views", title: "Lodge Architecture", desc: "Earth-built walls in harmony with the Atlas landscape" },
  { src: "/lodge-photos/IMG_6944.JPG", category: "pool", title: "Poolside Perspective", desc: "Clear mountain waters beneath the Moroccan sun" },
  { src: "/lodge-photos/IMG_6945.JPG", category: "dining", title: "Evening Atmosphere", desc: "Intimate warmth under the Atlas night" },
  { src: "/lodge-photos/IMG_6946.JPG", category: "rooms", title: "Family Suite", desc: "Generous proportions for families and companions" },
  { src: "/lodge-photos/IMG_6947.JPG", category: "dining", title: "Traditional Dining Room", desc: "Authentic homemade meals and local recipes" },
  { src: "/lodge-photos/IMG_6948.JPG", category: "rooms", title: "Cozy Mountain Room", desc: "Soft lighting and serene mountain views" },
  { src: "/lodge-photos/IMG_6949.JPG", category: "dining", title: "Tea Lounge", desc: "Fresh mint tea and traditional Moroccan hospitality" },
  { src: "/lodge-photos/IMG_6950.JPG", category: "rooms", title: "Guest Living Corner", desc: "Thoughtful touches and comfortable relaxation" },
  { src: "/lodge-photos/IMG_6951.JPG", category: "pool", title: "Panoramic Pool Deck", desc: "The centerpiece of Ouirgane Discovery Lodge" },
  { src: "/lodge-photos/IMG_6952.JPG", category: "views", title: "Lakeside Morning", desc: "Crisp mountain air across the valley" },
  { src: "/lodge-photos/IMG_6954.JPG", category: "views", title: "Atlas Foothills", desc: "The road to Ouirgane and Toubkal trails" },
  { src: "/lodge-photos/IMG_6955.JPG", category: "views", title: "Valley Vista", desc: "Peace and stillness 1,000m above sea level" },
  { src: "/lodge-photos/IMG_6956.JPG", category: "rooms", title: "Artisan Room Details", desc: "Authentic Berber rugs and natural textures" },
  { src: "/lodge-photos/IMG_6957.JPG", category: "pool", title: "Blue Waters & Atlas Sky", desc: "The ultimate mountain getaway relaxation" },
  { src: "/lodge-photos/IMG_6958.JPG", category: "views", title: "Summit Horizons", desc: "Toward Toubkal, the roof of North Africa" },
  { src: "/lodge-photos/IMG_6959.JPG", category: "views", title: "Serene Lodge Grounds", desc: "Quiet corners and garden views" },
  { src: "/lodge-photos/IMG_6972.JPG", category: "views", title: "Nightfall in the Valley", desc: "Stars and stillness above Ouirgane" },
];

/* --- the rooms, as listed on Booking.com ---------------------------*/
export type Room = {
  id: string;
  name: string;
  meter: string;
  bed: string;
  sleeps: string;
  view: string;
  note: string;
  perks: string[];
  img: string;
  tag: string;
};

export const ROOMS: Room[] = [
  {
    id: "deluxe",
    name: "Deluxe Double or Twin",
    meter: "36 m²",
    bed: "1 king bed — or 2 twins",
    sleeps: "Sleeps up to 4",
    view: "Garden & mountain view",
    note: "The room we are proudest of. Wide, quiet and open on two sides — some with a private terrace for slow mornings.",
    perks: ["Private bathroom", "Air-con & heating", "Breakfast included", "Terrace on some rooms"],
    img: IMG.roomDeluxe,
    tag: "Our favourite",
  },
  {
    id: "budget",
    name: "Budget Double",
    meter: "16 m²",
    bed: "1 king bed",
    sleeps: "Sleeps 2",
    view: "Mountain view",
    note: "Small, honest and warm. Everything a walker needs: a deep bed, hot water, a window full of mountains.",
    perks: ["Private bathroom", "Air-con & heating", "Breakfast included", "Free Wi-Fi"],
    img: IMG.roomBudget,
    tag: "Best value",
  },
  {
    id: "twin",
    name: "Economy Twin",
    meter: "16 m²",
    bed: "2 twin beds",
    sleeps: "Sleeps 2 + child",
    view: "Lake, river & mountain view",
    note: "Made for friends walking the valley together. The lake shines through the window at first light.",
    perks: ["Private bathroom", "Air-con & heating", "Breakfast included", "Free Wi-Fi"],
    img: IMG.roomTwin,
    tag: "For companions",
  },
];

/* --- things to do, from the Booking profile ------------------------*/
export type Experience = {
  id: string;
  index: string;
  title: string;
  line: string;
  detail: string;
  img: string;
};

export const EXPERIENCES: Experience[] = [
  {
    id: "walks",
    index: "01",
    title: "Walk the valley",
    line: "Guided walking tours from our door",
    detail: "Mule paths, walnut groves and red-earth villages. Walks leave straight from the lodge, from one hour to whole days.",
    img: IMG.valley,
  },
  {
    id: "bikes",
    index: "02",
    title: "Ride the ridges",
    line: "Bike tours & mountain bikes to rent",
    detail: "The road over the Kik Plateau is one of the great rides of the Atlas. We keep bikes at the lodge and know every turn.",
    img: IMG.road,
  },
  {
    id: "cook",
    index: "03",
    title: "Cook the tagine",
    line: "Hands-in cooking classes",
    detail: "Market spices, clay pot, open fire. Learn the family tagine and bake bread in the earth oven — then eat your work.",
    img: IMG.tagineClot,
  },
  {
    id: "culture",
    index: "04",
    title: "Tea & village life",
    line: "Local culture tours & ceremonies",
    detail: "Mint tea poured high, bread broken with neighbours, the weekly souk. The valley teaches you its own pace.",
    img: IMG.teaPour,
  },
  {
    id: "water",
    index: "05",
    title: "On the water",
    line: "The dam is 500 m away",
    detail: "The Ouirgane dam glitters below the lodge; Lac Takerkoust is an easy day trip for swims, picnics and wind-bright air.",
    img: IMG.heroAlt,
  },
  {
    id: "toubkal",
    index: "06",
    title: "Toward Toubkal",
    line: "Imlil & the roof of North Africa",
    detail: "Toubkal (4,167 m) looms over the next valley. Imlil's trailheads are close — we arrange mules, guides and early breakfasts.",
    img: IMG.imlil,
  },
];

/* --- Real guest reviews with photos from Booking.com --------------*/
export type FeaturedReview = {
  id: string;
  image: string;
  screenshot: string;
  name: string;
  origin: string;
  stay: string;
  title: string;
  quote: string;
  quoteOriginal?: string;
  avatar: string;
  score: string;
};

export const FEATURED_PHOTO_REVIEWS: FeaturedReview[] = [
  {
    id: "review-1",
    image: "/reviews/review1image.jpg",
    screenshot: "/reviews/review1.jpg",
    name: "Elena & Markus",
    origin: "Germany",
    stay: "Budget Double · 3 nights",
    title: "Wie ein Traum",
    quote: "It was like a dream, the location was very beautiful and quiet. The air very pleasant and clean. I really enjoyed everything and I look forward to travelling back there again!",
    quoteOriginal: "Das war wie ein Traum, Örtlichkeit war sehr schön und ruhig. Luft sehr angenehm und sauber. Mir hat alles sehr viel Spaß gemacht und ich freue mich sehr nochmal dahin zurück zu reisen.",
    avatar: "E",
    score: "10 / 10",
  },
  {
    id: "review-2",
    image: "/reviews/review2image.jpg",
    screenshot: "/reviews/review2.jpg",
    name: "Laurène",
    origin: "France",
    stay: "Twin Room · 3 nights",
    title: "Un havre de paix",
    quote: "I highly recommend this haven of peace: the kindness of the hosts, the excellent dishes (every kind of tagine), the generous breakfasts, the view you never get tired of, and the guided hiking routes around.",
    quoteOriginal: "Je vous recommande ce havre de paix : la gentillesse des hôtes, les plats excellents (toute sorte de tajine), les petits déjeuners copieux, la vue dont on ne se lasse pas, les randonnées possibles autour avec guide.",
    avatar: "L",
    score: "9.8 / 10",
  },
  {
    id: "review-3",
    image: "/reviews/review3image.jpg",
    screenshot: "/reviews/review3.jpg",
    name: "Dave & Family",
    origin: "United Kingdom",
    stay: "Deluxe Suite · 3 nights",
    title: "An Unforgettable Mountain Getaway!",
    quote: "An absolute hidden gem in the High Atlas! The views overlooking the mountains and Ouirgane lake from both the terrace and swimming pool are breathtaking. The traditional Moroccan food was delicious and Abdul was amazing.",
    quoteOriginal: "An absolute hidden gem in the High Atlas! The views overlooking the mountains and Ouirgane lake from both the terrace and the swimming pool are breathtaking. The traditional Moroccan food was incredibly delicious, and the entire team was exceptionally welcoming.",
    avatar: "D",
    score: "10 / 10",
  },
];

/* --- FAQs directly from Booking.com profile -----------------------*/
export type FAQItem = {
  id: string;
  q: string;
  a: string;
};

export const FAQS: FAQItem[] = [
  {
    id: "faq-pool",
    q: "Does Ouirgane discovery lodge have a pool?",
    a: "Yes, our lodge features an outdoor swimming pool with panoramic views of Ouirgane Lake and the High Atlas summits, complete with sun loungers and terrace seating.",
  },
  {
    id: "faq-rooms",
    q: "What type of room can I book at Ouirgane discovery lodge?",
    a: "Room options include Deluxe Double or Twin Room (with private terrace & mountain views), Budget Double Room, and Economy Twin Room with mountain and lake window exposure.",
  },
  {
    id: "faq-checkin",
    q: "What are the check-in and check-out times at Ouirgane discovery lodge?",
    a: "Check-in is from 13:00 to 23:00, and check-out is from 08:00 to 11:30. Early check-in or late check-out can be arranged on request.",
  },
  {
    id: "faq-cost",
    q: "How much does it cost to stay at Ouirgane discovery lodge?",
    a: "Rates vary depending on your selected dates and room category. Traditional Moroccan breakfast is always included. Live rates and instant booking are available directly on Booking.com.",
  },
  {
    id: "faq-restaurant",
    q: "Does Ouirgane discovery lodge have a restaurant on site?",
    a: "Yes, Ouirgane Discovery Lodge has an on-site restaurant serving authentic, homemade Moroccan tagines, couscous on Fridays, and fresh mountain ingredients. Halal, vegetarian, and vegan options are always available.",
  },
  {
    id: "faq-activities",
    q: "What is there to do at Ouirgane discovery lodge?",
    a: "Activities include walking tours to Berber villages, Toubkal summit trailheads, mountain bike rental, lakeside cycling loops, cooking classes, local cultural tours, and relaxing by the panoramic pool.",
  },
  {
    id: "faq-distance",
    q: "How far is Ouirgane discovery lodge from the centre of Ouirgane?",
    a: "The lodge is located approximately 600 meters from the centre of Ouirgane village, perched quietly above the lake and dam.",
  },
  {
    id: "faq-families",
    q: "Is Ouirgane discovery lodge popular with families?",
    a: "Yes, Ouirgane Discovery Lodge is very popular with families seeking peaceful nature, clean mountain air, private parking, and spacious rooms.",
  },
];

/* --- guest words (sourced from Booking.com / Google reviews) -------*/
export type Review = {
  quote: string;
  name: string;
  origin: string;
  source: string;
  score: string;
};

export const REVIEWS: Review[] = [
  {
    quote:
      "The perfect stay to end our trip. The view is unbelievable, the staff is friendly and the food is delicious. We would love to come back.",
    name: "A happy traveller",
    origin: "Booking.com guest",
    source: "Verified stay",
    score: "10",
  },
  {
    quote: "Very friendly host and amazing service.",
    name: "Rachid",
    origin: "Qatar",
    source: "Booking.com",
    score: "10",
  },
  {
    quote:
      "Stunning views and exceptionally friendly staff. A great place to relax after long walks. Lovely homemade food — rooms clean and comfortable.",
    name: "Dave",
    origin: "United Kingdom",
    source: "Verified stay",
    score: "9",
  },
  {
    quote: "The terrace, the view and the food and drink. Simple. Perfect.",
    name: "A terrace regular",
    origin: "Booking.com guest",
    source: "Verified stay",
    score: "10",
  },
  {
    quote:
      "Family-run and it shows — tea appears without asking, dinner tastes like someone's grandmother signed off on it.",
    name: "Google reviewer",
    origin: "France",
    source: "Google 4.8 / 5",
    score: "10",
  },
  {
    quote:
      "A sleepy little mountain lodge. Breakfast on the terrace with the valley below — we stayed for three nights and stayed for five.",
    name: "Returning guests",
    origin: "Germany",
    source: "Google review",
    score: "10",
  },
];

export const SCORES: { label: string; value: number }[] = [
  { label: "Staff", value: 9.9 },
  { label: "Location", value: 9.7 },
  { label: "Value for money", value: 9.6 },
  { label: "Cleanliness", value: 9.2 },
  { label: "Comfort", value: 9.1 },
  { label: "Facilities", value: 9.0 },
];

/* --- the map --------------------------------------------------------*/
export const NEARBY: { place: string; dist: string; how: string }[] = [
  { place: "Ouirgane Dam", dist: "0.5 km", how: "on foot" },
  { place: "Mt. Toubkal", dist: "16 km", how: "trail" },
  { place: "Kik Plateau", dist: "17 km", how: "road" },
  { place: "Lac Takerkoust", dist: "20 km", how: "car" },
  { place: "Oukaimeden", dist: "21 km", how: "car" },
  { place: "ANIMA Garden", dist: "35 km", how: "car" },
  { place: "Ourika Valley", dist: "38 km", how: "road" },
  { place: "Marrakech Medina", dist: "46 km", how: "~1 h" },
  { place: "Marrakech–Menara Airport", dist: "62 km", how: "shuttle" },
];

/* --- the practicalities --------------------------------------------*/
export const GOOD_TO_KNOW = [
  { k: "Check-in", v: "13:00 — 23:00" },
  { k: "Check-out", v: "08:00 — 11:30" },
  { k: "Breakfast", v: "Local, included · 08:00 — 10:30" },
  { k: "Payment", v: "Cash at the lodge (MAD)" },
  { k: "Pets", v: "Welcome on request" },
  { k: "Parking", v: "Free, private, on site" },
  { k: "Airport shuttle", v: "On request, from Menara" },
  { k: "Languages", v: "العربية · English · Français" },
];

export const NAV_LINKS = [
  { label: "The Lodge", href: "#lodge" },
  { label: "Rooms", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#guests" },
  { label: "FAQs", href: "#faqs" },
  { label: "Find Us", href: "#find" },
];
