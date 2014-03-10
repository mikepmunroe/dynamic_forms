App.ApplicationController = Ember.Controller.extend({
  cities: [
    { name: "Boston",
      id: 1,
      attractions : [
        { name: "Fenway Park",
          id: 1,
          info: [
            { season: "fall", id: 1 },
            { season: "spring", id: 2 }
          ]
        },
        { name: "Musuem of Fine Arts",
          id: 2,
          info: [
            { season: "spring", id: 1 },
            { season: "summer", id: 2 },
            { season: "fall", id: 3 },
            { season: "winter", id: 4 }
          ]
        },
        { name: "Faneuil Hall",
          id: 3,
          info: [
            { season: "spring", id: 1 },
            { season: "summer", id: 2 },
            { season: "fall", id: 3 },
            { season: "winter", id: 4 }
          ]
        }
      ]
    },
    { name: "Salem",
      id: 2,
      attractions: [
        { name: "Forest River",
          id: 1,
          info: [
            { season: "Spring", id: 1 },
            { season: "Summer", id: 2 }
          ]
        },
        { name: "Willows",
          id: 2,
          info: [
            { season: "spring", id: 1 },
            { season: "summer", id: 2 },
            { season: "fall", id: 3 }
          ]
        },
        { name: "Witch House",
          id: 3,
          info: [
             { season: "spring", id: 1 },
             { season: "summer", id: 2 },
             { season: "fall", id: 3 },
             { season: "winter", id: 4 }
          ]
        }
      ]
    }
  ]
});