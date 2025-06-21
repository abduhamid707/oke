// assets
import { IconKey, IconWindow, IconDoor, IconPackage } from '@tabler/icons-react';

// constant
const icons = {
  IconKey,
  IconWindow,
  IconDoor,
  IconPackage
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  // title: 'Pages',
  // caption: 'Pages Caption',
  // icon: icons.IconKey,
  type: 'group',
  children: [
    // {
    //   id: 'authentication',
    //   title: 'Authentication',
    //   type: 'collapse',
    //   icon: icons.IconKey,
    //   children: [
    //     {
    //       id: 'login',
    //       title: 'Login',
    //       type: 'item',
    //       url: '/pages/login',
    //       target: true
    //     },
    //     {
    //       id: 'register',
    //       title: 'Register',
    //       type: 'item',
    //       url: '/pages/register',
    //       target: true
    //     }
    //   ]
    // },

    // 🔲 Rom Dizayn sahifasi
    {
      id: 'room-design',
      title: 'Rom Dizayn',
      type: 'item',
      url: '/room-design',
      icon: icons.IconWindow
    },

    // 🚪 Eshik Dizayn sahifasi
    {
      id: 'door-design',
      title: 'Eshik Dizayn',
      type: 'item',
      url: '/door-design',
      icon: icons.IconDoor
    },

    // 📦 Buyurtmalar sahifasi
    {
      id: 'orders',
      title: 'Buyurtmalar',
      type: 'item',
      url: '/orders',
      icon: icons.IconPackage
    }
  ]
};

export default pages;
