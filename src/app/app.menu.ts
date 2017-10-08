export const APP_MENU = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: true,
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
            order: 100,
          }
        },
        children: [
          { path: 'companies', data: { menu: { title: 'general.menu.companies' } } },
          { path: 'configuration', data: { menu: { title: 'general.menu.configuration' } } },          
          { path: 'customers', data: { menu: { title: 'general.menu.customers' } } },
          { path: 'lines', data: { menu: { title: 'general.menu.lines' } } },
          { path: 'materials', data: { menu: { title: 'general.menu.materials' } } },
          { path: 'sellers', data: { menu: { title: 'general.menu.sellers' } } } 
        ]
      },       
      {
        path: 'quotes',
        data: {
          menu: {
            title: 'general.menu.quotation',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 200,
          }
        }     
      },
      {
        path: 'quotesSearch',
        data: {
          menu: {
            title: 'general.menu.searchQuote',
            icon: 'ion-search',
            selected: false,
            expanded: false,
            order: 300,
          }
        }     
      }            
    ]
  }
];
