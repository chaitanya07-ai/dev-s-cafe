// Mock data for Dev's American Cafe — all content is static/editable here.
export const SIGNAGE_IMG =
  "https://customer-assets.emergentagent.com/job_cupcake-cafe/artifacts/ijd66wfs_image.png";

export const restaurant = {
  name: "DEV'S",
  sub: "AMERICAN CAFE",
  hindi: "दिल से",
  tagline: "Gourmet burgers, sandwiches & sinful desserts — made in Mohali, served from the heart.",
  phone: "098131 12995",
  phoneTel: "+919813112995",
  address:
    "Ground floor, Golf Links Market, SCO 1249, Corner Showroom, Sector 118, TDI City, Sahibzada Ajit Singh Nagar, Punjab 160055",
  mapsQuery:
    "Dev's American Cafe, SCO 1249, Sector 118, TDI City, Mohali, Punjab 160055",
  instagram: "https://www.instagram.com/devswithlove/?hl=en",
  facebook: "https://www.facebook.com/devswithlove/",
  hours: [
    { day: "Monday", time: "Closed", closed: true },
    { day: "Tuesday", time: "Closed", closed: true },
    { day: "Wednesday", time: "2:00 – 10:00 PM" },
    { day: "Thursday", time: "2:00 – 10:00 PM" },
    { day: "Friday", time: "2:00 – 10:00 PM" },
    { day: "Saturday", time: "2:00 – 10:00 PM" },
    { day: "Sunday", time: "2:00 – 10:00 PM" },
  ],
};

export const story = {
  chefName: "Dev",
  chefFull: "Devinder S. Mahal",
  role: "Founder & Chef",
  image: SIGNAGE_IMG,
  paragraphs: [
    "Dev's American Cafe started with one simple obsession — recreating the soul of a classic American diner right here in Mohali. What began in 2016 around a cult-favourite burger has grown into a home-style kitchen where every recipe is original and every sauce is made from scratch.",
    "Our founder Dev is the heart of the kitchen. From hand-grinding the patties to slow-cooking pulled pork for over 18 hours, he insists on doing things the honest, time-taking way. His legendary house ranch — made by Dev himself — has become the cafe's signature and the reason regulars keep coming back.",
    "It's not a chain. It's a home with a counter. Comfort food, big American flavours, and a little bit of दिल से in everything we serve.",
  ],
  stats: [
    { value: "2016", label: "Since" },
    { value: "18 hrs", label: "Slow-cooked pork" },
    { value: "100%", label: "House-made sauces" },
  ],
};

export const menu = [
  {
    id: "burgers",
    title: "Burgers",
    accent: "#e0473a",
    soft: "#fdecea",
    items: [
      { name: "The Smashterpiece", desc: "A double smashed burger available in chicken, mutton or buffalo variants.", price: "700 / 900 / 1200", img: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
      { name: "The Buffalo Tenderloin Burger", desc: "A hand-ground succulent burger topped with 2 slices of cheese on a bed of pickles and topped with our signature ranch.", price: "1000", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
      { name: "The Mutton Burger", desc: "A custom ground mutton patty with our in-house seasoning blend, cooked to medium and topped with cheese and ranch on a bed of cowboy candy.", price: "700", img: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
      { name: "The Chicken Burger", desc: "Custom ground chicken patty with our in-house spice blend, topped with melted cheese and signature ranch on a bed of cowboy candy.", price: "500", img: "https://images.unsplash.com/photo-1549611016-3a70d82b5040?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
      { name: "The Bourbon Mushroom Burger", desc: "Burger of choice — mushrooms sauteed in butter and deglazed with Bourbon whiskey, placed atop your choice of burger.", price: "400", img: "https://images.pexels.com/photos/15010285/pexels-photo-15010285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
      { name: "The Texas Outlaw Burger", desc: "Burger of choice — onion rings and bacon on top of any burger with our signature bourbon bbq sauce.", price: "200", img: "https://images.unsplash.com/photo-1550317138-10000687a72b?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
      { name: "The Baloo Burger", desc: "Our signature Chicken Bacon burger atop our signature Mutton Bacon burger on a bed of cowboy candy and topped with our ranch.", price: "1100", img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
    ],
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    accent: "#c98a3a",
    soft: "#f8efe0",
    items: [
      { name: "The Philadelphia Chicken Cheesesteak", desc: "Julienne chicken tenders sauteed with multi-colour peppers, onions and mushrooms, seasoned with oregano spices and drizzled with ranch and cheese on a bed of cowboy candy.", price: "600", img: "https://images.unsplash.com/photo-1734769853702-c7444c039c8c?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
      { name: "The Fried Chicken Sandwich", desc: "2 slices of chicken breast battered and deep fried, served on a panini with cheese and our signature ranch.", price: "600", img: "https://images.unsplash.com/photo-1703219342329-fce8488cf443?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
      { name: "Pulled Pork Sandwich", desc: "Slow cooked pork roasted for over 18 hours until it falls off the bone, sauteed with our signature bourbon bbq sauce and served on a panini with cheese.", price: "600", img: "https://images.unsplash.com/photo-1761712826051-b873907fb5d3?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
      { name: "The Inferno", desc: "2 slices of chicken breast battered and deep fried, tossed in our fire-in-the-hole chili sauce, served on a panini with cheese and our signature ranch.", price: "700", img: "https://images.unsplash.com/photo-1619019187211-adf2f6119afd?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
    ],
  },
  {
    id: "hotdogs",
    title: "Hot Dogs",
    accent: "#c98a3a",
    soft: "#f8efe0",
    items: [
      { name: "The Classic", desc: "2 chicken hot dogs served on toasted buns with cowboy candy and ranch.", price: "500", img: "https://images.unsplash.com/photo-1638368593249-7cadb261e8b3?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
      { name: "The Bacon and Cheese Dog", desc: "2 chicken hot dogs, bacon and cheese served on toasted buns with cowboy candy and ranch.", price: "600", img: "https://images.unsplash.com/photo-1638368593249-7cadb261e8b3?crop=entropy&cs=srgb&fm=jpg&q=85&w=900&sat=-20" },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    accent: "#5a9e54",
    soft: "#eaf5e8",
    items: [
      { name: "The Diva", desc: "An inspiring salad of iceberg lettuce, fresh fruits, sweet chili, ranch and exotic vegetables. Comes in paneer or grilled chicken variants. Add bacon for 800/-.", price: "500 / 800", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
    ],
  },
  {
    id: "greenside",
    title: "On The Green Side",
    subtitle: "Veg Section — for all of you plant-loving fanatics, an assortment of paneer and other goodies.",
    accent: "#5a9e54",
    soft: "#eaf5e8",
    items: [
      { name: "The Quinoa Blackbean Burger", desc: "Quinoa slow cooked with sundried tomatoes and chipotle chilis, with Mexican blackbeans formed into a succulent patty, served on a nest of pickles topped with cheese and ranch.", price: "600", veg: true, img: "https://images.pexels.com/photos/15010285/pexels-photo-15010285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
      { name: "The Texas BBQ Ranch Paneer Burger", desc: "A thick fresh paneer patty topped with cheese and an onion ring tower, served on a fresh bun with our signature pickles and dripping in our ranch.", price: "600", veg: true, img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
      { name: "Sriracha Mango Paneer", desc: "A thick fresh paneer patty topped with fresh mango slices, served atop a nest of homemade pickle and drizzled with Sriracha.", price: "600", veg: true, img: "https://images.unsplash.com/photo-1549611016-3a70d82b5040?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
      { name: "The Mushroom Paneer", desc: "Sauteed mushrooms atop a thick fresh paneer patty topped with cheese, served on a fresh bun with our signature pickles and dripping in our ranch.", price: "600", veg: true, img: "https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
      { name: "The Pancho Villa", desc: "A tofu chorizo burger topped with cheddar cheese and ranch, served on a bed of our very own cowboy candy.", price: "600", veg: true, img: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
      { name: "Montezuma's Revenge", desc: "2 tofu chorizo hot dogs served on toasted buns with cowboy candy and topped with cheese and ranch.", price: "600", veg: true, img: "https://images.unsplash.com/photo-1638368593249-7cadb261e8b3?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
      { name: "The Philadelphia Paneer Sandwich", desc: "Sliced paneer sauteed with julienne exotic peppers and mushrooms, served on a bed of pickle with cheese and ranch on a multigrain panini.", price: "600", veg: true, img: "https://images.unsplash.com/photo-1734769853702-c7444c039c8c?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
    ],
  },
  {
    id: "fingerfoods",
    title: "Finger Foods",
    accent: "#3f86c4",
    soft: "#e7f1fa",
    groups: [
      {
        label: "Fries",
        items: [
          { name: "Plain Fries", price: "300", veg: true },
          { name: "Cheesy Fries", price: "400", veg: true },
          { name: "Nutella Fries", price: "500", veg: true },
          { name: "Bacon and Cheese Fries", price: "500" },
        ],
        img: "https://images.unsplash.com/photo-1639744210631-209fce3e256c?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
      },
      {
        label: "Chicken Wings",
        items: [
          { name: "Buffalo Style (medium spicy)", price: "500" },
          { name: "Fire in the Hole (flaming hot)", price: "600" },
        ],
        img: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
      },
      {
        label: "And Other Delicacies",
        items: [
          { name: "Fried Chicken Strips with Ranch", price: "600" },
          { name: "Deep Fried Mushrooms with Ranch", price: "400", veg: true },
        ],
        img: "https://images.unsplash.com/photo-1619019187211-adf2f6119afd?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
      },
    ],
  },
  {
    id: "wateringhole",
    title: "The Watering Hole",
    accent: "#3f86c4",
    soft: "#e7f1fa",
    list: [
      { name: "Assorted Soft Drinks", price: "100" },
      { name: "Cold Coffee", price: "300" },
      { name: "Ice Tea", price: "100" },
      { name: "California Date Shake", price: "300" },
      { name: "Oreo Shake", price: "300" },
      { name: "Blueberry Shake", price: "300" },
      { name: "Berry Shake", price: "300" },
      { name: "Cappuccino", price: "200" },
      { name: "Mexican Hot Chocolate w/ Whipped Cream", price: "250" },
      { name: "…served in a collector's mug", price: "500" },
    ],
    imgs: [
      "https://images.unsplash.com/photo-1577805947697-89e18249d767?crop=entropy&cs=srgb&fm=jpg&q=85&w=700",
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?crop=entropy&cs=srgb&fm=jpg&q=85&w=700",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=srgb&fm=jpg&q=85&w=700",
    ],
  },
  {
    id: "desserts",
    title: "Guilty Pleasures",
    subtitle: "Ice cream by BikkaBuy · Gourmet cookies by Oloaf Bakery",
    accent: "#c0476f",
    soft: "#fbeaf0",
    items: [
      { name: "Aleen's Artisanal Cupcakes", desc: "Small-batch artisanal cupcakes, baked fresh.", price: "150", veg: true, img: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
      { name: "The Showstopper", desc: "Our original signature cheesecake.", price: "500", veg: true, img: "https://images.unsplash.com/photo-1702925614886-50ad13c88d3f?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
      { name: "Maple Bacon Ice Cream Sundae", desc: "Sweet-and-salty sundae with maple and crispy bacon.", price: "600", img: "https://images.unsplash.com/photo-1597249536924-b226b1a1259d?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
      { name: "Bananas Foster", desc: "Caramelised bananas flambeed in bourbon, served with ice cream.", price: "600", veg: true, img: "https://images.unsplash.com/photo-1657225953401-5f95007fc8e0?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" },
      { name: "The All American Banana Split", desc: "The classic three-scoop banana split, done right.", price: "500", veg: true, img: "https://images.pexels.com/photos/15030594/pexels-photo-15030594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
      { name: "Cookies and Cream Gourmet Ice Cream Sandwich", desc: "Gourmet cookies hugging a thick slab of ice cream. Available Veg / Non-Veg.", price: "500", img: "https://images.pexels.com/photos/6431578/pexels-photo-6431578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
    ],
  },
  {
    id: "sides",
    title: "Sides For Sale",
    accent: "#c98a3a",
    soft: "#f8efe0",
    list: [
      { name: "Cowboy Candy Jar", price: "500" },
      { name: "Ranch Dressing Jar", price: "500" },
    ],
  },
];
