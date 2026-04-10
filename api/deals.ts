import dayjs from "dayjs";

export default function handler(req, res) {
  const today = dayjs().format("YYYY-MM-DD");
  const tomorrow = dayjs().add(1, "day").format("YYYY-MM-DD");

  const data = {
    location: "Peru, IN (46970)",

    today: {
      date: today,

      fast_food: [
        {
          name: "McDonald's",
          deal: "BOGO sandwiches (app)",
          type: "app-only"
        },
        {
          name: "Wendy's",
          deal: "$1 Dave's Single",
          type: "app-only"
        },
        {
          name: "Taco Bell",
          deal: "Cravings box deals",
          type: "app-only"
        }
      ],

      grocery: [
        {
          name: "Save A Lot",
          hours: "8 AM – 9 PM",
          deal: "Weekly ad active"
        },
        {
          name: "Value Foods Market",
          hours: "8 AM – 9 PM",
          deal: "Meat + produce specials"
        }
      ],

      cashback: [
        {
          app: "Ibotta",
          note: "Cashback on groceries"
        },
        {
          app: "Fetch Rewards",
          note: "Receipt scanning points"
        },
        {
          app: "Upside",
          note: "Gas + restaurant cashback"
        }
      ],

      yard_sales: [
        {
          note: "No verified centralized listings",
          suggestion: "Check Facebook Marketplace & Craigslist"
        }
      ]
    },

    tomorrow: {
      date: tomorrow,
      note: "Same sources apply — refreshed daily"
    }
  };

  res.status(200).json(data);
}
