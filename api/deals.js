export default function handler(req, res) {
  const today = new Date().toISOString().split("T")[0];

  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = tomorrowDate.toISOString().split("T")[0];

  res.status(200).json({
    location: "Peru, IN (46970)",

    today: {
      date: today,

      fast_food: [
        { name: "McDonald's", deal: "BOGO sandwiches (app)" },
        { name: "Wendy's", deal: "$1 Dave's Single" },
        { name: "Taco Bell", deal: "Cravings box deals" }
      ],

      grocery: [
        { name: "Save A Lot", hours: "8 AM – 9 PM" },
        { name: "Value Foods Market", hours: "8 AM – 9 PM" }
      ],

      cashback: [
        { app: "Ibotta" },
        { app: "Fetch Rewards" },
        { app: "Upside" }
      ],

      yard_sales: [
        {
          note: "Check Facebook Marketplace & Craigslist"
        }
      ]
    },

    tomorrow: {
      date: tomorrow
    }
  });
}
