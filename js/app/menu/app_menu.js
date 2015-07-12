
/** @jsx React.DOM */
define(['react', 'jquery', 'jsx!app/menu/app_menu_tab'], function(React, $, MenuTab) {


  /**
   *
   */
  var Menu = React.createClass({
    render: function () {
      /**/
      var tabs = [
        {title: 'Pattern', default: false, url: 'pattern.html'},
        {title: 'Generative', default: false, url: 'generative.html'},
        {title: 'Swipe', default: false, url: 'swipe.html'}
      ];

      var menuTabs = [];
      for(var i = 0; i < tabs.length; i++){
        tabs[i].id = i;
        menuTabs.push(<MenuTab item={tabs[i]}/>)
      }

      return (
        <div id='app-menu'>
          <ol id='app-menu-tab-container'>
          {menuTabs}
          </ol>
          <div id='app-menu-bar'></div>
        </div>
        );
    }
  });

  /**
   *
   */
  React.renderComponent(
    <Menu />,
    document.getElementById('kui-layout')
  );
});


