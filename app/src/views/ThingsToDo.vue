<template>
  <div class="thingstodo">
<p>There are plenty of great places to eat here in Cambridge and Watertown. Here's a few favorites that might make for a good Friday evening dinner or Saturday morning brunch while you're visiting for our wedding weekend.</p>


<div v-for:='restaurantList in restaurants' :key='restaurantList.header'>
  <h4>{{restaurantList.header}}</h4>
  <ul>
    <li v-for='restaurant in restaurantList.locations' :key='restaurant.name'>
      <a :href=restaurant.link><b>{{restaurant.name}}</b></a> {{restaurant.description}}
    </li>
  </ul>
</div>

<h4>Things to Do</h4>

As it is his employer, Luke defers to <a href="https://www.tripadvisor.com/Attractions-g60890-Activities-Cambridge_Massachusetts.html">Tripadvisor</a> for activities in the area.

  </div>
</template>


<script>
export default {
  data() {
    return {
    "restaurants" : [
      {
        "header": "Friday Night Dinner",
        "locations": [
            {
                "name": "Branch Line",
                "link": "https://www.branchlinearsenal.com/",
                "description": "A tasty Watertown staple just steps from the venue"
            },
            {
                "name": "Alden & Harlow",
                "link": "https://www.aldenharlow.com/",
                "description": "Incredible cocktails and amazing small plates"
            },
            {
                "name": "Wusong Road",
                "link": "https://www.wusongroad.com/",
                "description": "A Tiki Bar like none other, with excellent cuisine"
            },
            {
                "name": "Pammy's",
                "link": "https://www.pammyscambridge.com/",
                "description": "High-end Italian with an elegant, yet cozy vibe"
            },
            {
                "name": "Waypoint",
                "link": "https://www.waypointharvard.com/",
                "description": "Fish of all kinds, plus a creative cocktail menu"
            },
            {
                "name": "Little Donkey",
                "link": "https://www.littledonkeybos.com/",
                "description": "Small plates from all around the world"
            },
            {
                "name": "Vialé",
                "link": "https://www.vialecambridge.com/",
                "description": "A beautiful, modern Italian place with incredible appetizers"
            },
            {
                "name": "Trina's Starlite Lounge",
                "link": "http://trinastarlitelounge.com/",
                "description": "Our favorite neighborhood dive bar, with excellent cocktails and elevated bar food"
            },
            {
                "name": "Moona",
                "link": "https://www.moonarestaurant.com/",
                "description": "Eastern Mediterranean cuisine and a lengthy wine list"
            }
        ]
      },
      {
        "header": "Saturday/Sunday Morning Brunch",
        "locations": [
            {
                "name": "Tatte",
                "link": "https://tattebakery.com/boston/",
                "description": "French-Israeli bakery and cafe (with long lines on the weekends)"
            },
            {
                "name": "Flour",
                "link": "https://flourbakery.com/",
                "description": "A Boston staple, with pastries and egg sandwiches"
            },
            {
                "name": "Darwin's",
                "link": "https://www.darwinsltd.com/",
                "description": "Delicious coffee and delicious breakfast sandwiches and pastries"
            }
        ]
      }
    ]
  }
}
}


</script>
