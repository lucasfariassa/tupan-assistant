var app = new Framework7({
    // App root element
    el: '#app',
    // App Name
    name: 'Tupan',
    // App id
    id: 'br.com.tupan.assistant',
    // Enable swipe panel
    panel: {
      swipe: true,
    },
    // Add default routes
    routes: [
      {
        path: '/index/',
        url: 'index.html',
      },
      {
        path: '/question-center/',
        url: 'question-center.html',
        on: {
          pageInit: function (e, page) {
            var searchbar = app.searchbar.create({
              el: '.searchbar',
              searchContainer: '.list',
              searchIn: '.item-title',
              on: {
                search(sb, query, previousQuery) {
                  console.log(query, previousQuery);
                }
              }
            });
          }
        },
      },
    ],
    // ... other parameters
  });

  var mainView = app.views.create('.view-main');