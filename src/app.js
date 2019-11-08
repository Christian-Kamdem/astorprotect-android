const {NavigationView,contentView,Popover,statusBar} = require('tabris');
statusBar.background = 'black';
statusBar.displayMode = 'default';
const welcomePage = require('./views/welcomePage.js').create();
