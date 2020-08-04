export default function () {
  this.get("/groups", () => {
    return {
      data: [
        {
          type: "group",
          id: 12323,
          attributes: {
            name: "Haircut",
            position: 1,
          },
          relationships: {
            "menu-items": {
              data: [
                {
                  id: 1,
                  type: "menu-item-service",
                },
                {
                  id: 2,
                  type: "menu-item-package",
                },
                {
                  id: 3,
                  type: "menu-item-service",
                },
              ],
            },
          },
        },
        {
          type: "group",
          id: 232323,
          attributes: {
            name: "Mothers Day Specials",
            position: 2,
          },
          relationships: {
            "menu-items": {
              data: [
                {
                  id: 4,
                  type: "menu-item-service",
                },
                {
                  id: 5,
                  type: "menu-item-service",
                },
              ],
            },
          },
        },
      ],
      included: [
        {
          id: 1,
          type: "menu-item-service",
          attributes: {
            duration: "15 min",
            itemId: 124,
            name: "Strictly Bald",
            price: "$ 20.00",
          },
        },
        {
          id: 2,
          type: "menu-item-package",
          attributes: {
            duration: "45 min - 1hr 24 min",
            itemId: 20,
            name: "Mani Pendi",
            price: "$ 120.00",
          },
        },
        {
          id: 3,
          type: "menu-item-service",
          attributes: {
            duration: "1 hr",
            itemId: 202,
            name: "60 Minute Massage",
            price: "$ 75.00",
          },
        },
        {
          id: 4,
          type: "menu-item-service",
          attributes: {
            duration: "1hr 15 min",
            itemId: 2021,
            name: "Facial",
            price: "$ 50.00",
          },
        },
        {
          id: 5,
          type: "menu-item-service",
          attributes: {
            duration: "45 min",
            itemId: 20211,
            name: "Pendicure",
            price: "$ 20.00",
          },
        },
      ],
    };
  });
}
