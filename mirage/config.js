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
          },
        },
        {
          id: 2,
          type: "menu-item-package",
          attributes: {
            name: "Mani Pendi",
          },
        },
        {
          id: 3,
          type: "menu-item-service",
          attributes: {
            name: "60 Minute Massage",
          },
        },
        {
          id: 4,
          type: "menu-item-service",
          attributes: {
            name: "Facial",
          },
        },
        {
          id: 5,
          type: "menu-item-service",
          attributes: {
            name: "Pendicure",
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
