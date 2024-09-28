export async function GET() {
    // Simulated dummy data
    const data = [
      {
        "_id": "64d2f98173b8b9e12e3a1b6a",
        "restaurant": "Sunshine Diner",
        "menuItem": "Vegan Burger",
        "ingredients": [
          { "name": "Lettuce", "quantity": "50g" },
          { "name": "Tomato", "quantity": "30g" },
          { "name": "Beyond Meat Patty", "quantity": "120g" },
          { "name": "Vegan Mayo", "quantity": "10g" },
          { "name": "Whole Grain Bun", "quantity": "1 piece" }
        ],
        "price": 12.99,
        "availableFarmers": [
          { "name": "Green Valley Farms", "location": "Local" },
          { "name": "Fresh Harvest Co.", "location": "Local" }
        ]
      },
      {
        "_id": "64d2f98173b8b9e12e3a1b6b",
        "restaurant": "Healthy Bites",
        "menuItem": "Quinoa Salad",
        "ingredients": [
          { "name": "Quinoa", "quantity": "200g" },
          { "name": "Cucumber", "quantity": "60g" },
          { "name": "Olive Oil", "quantity": "10ml" },
          { "name": "Feta Cheese", "quantity": "40g" }
        ],
        "price": 10.50,
        "availableFarmers": [
          { "name": "Farm Fresh Organics", "location": "Local" },
          { "name": "Sunshine Growers", "location": "Regional" }
        ]
      }
    ];
  
    // Return dummy data as JSON response
    return new Response(JSON.stringify({ data }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  