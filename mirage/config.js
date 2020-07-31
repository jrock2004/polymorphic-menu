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
            name: "Strictly Bald",
            duration: "15 min",
            price: "$ 20.00",
          },
        },
        {
          id: 2,
          type: "menu-item-package",
          attributes: {
            name: "Mani Pendi",
            duration: "45 min - 1hr 24 min",
            price: "$ 120.00",
          },
        },
        {
          id: 3,
          type: "menu-item-service",
          attributes: {
            name: "60 Minute Massage",
            duration: "1 hr",
            price: "$ 75.00",
          },
        },
        {
          id: 4,
          type: "menu-item-service",
          attributes: {
            name: "Facial",
            duration: "1hr 15 min",
            price: "$ 50.00",
          },
        },
        {
          id: 5,
          type: "menu-item-service",
          attributes: {
            name: "Pendicure",
            duration: "45 min",
            price: "$ 20.00",
          },
        },
      ],
    };
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
}
