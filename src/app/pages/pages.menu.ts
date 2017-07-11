export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },     
      {
        path: 'admin',
        data: {
          menu: {
            title: 'general.menu.admin',
            icon: 'ion-ios-settings-strong',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          { path: 'chartist-js', data: { menu: { title: 'general.menu.companies' } } },
          { path: 'chartist-js', data: { menu: { title: 'general.menu.materials' } } },
          { path: 'chartist-js', data: { menu: { title: 'general.menu.customers' } } },
          { path: 'chartist-js', data: { menu: { title: 'general.menu.sellers' } } },
          { path: 'chartist-js', data: { menu: { title: 'general.menu.lines' } } } 
        ]
      },       
      {
        path: 'quotations',
        data: {
          menu: {
            title: 'general.menu.quotation',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 200,
          }
        }       
      }      
    ]
  }
];
