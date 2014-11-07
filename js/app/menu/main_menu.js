
/** @jsx React.DOM */
define(['react', 'jquery', 'jsx!app/menu/menu_tab'], function(React, $, MenuTab) {

  /**
   *
   */
  var Menu = React.createClass({
    render: function () {
      /**/
      var tabs = [
        {title: 'LED', default: true},
        {title: 'Pattern', default: false},
        {title: 'Pattern Composer', default: false},
        {title: 'Generative', default: false},
        {title: 'Effect', default: false},
        {title: 'File', default: false}
      ];

      var menuTabs = [];
      for(var i = 0; i < tabs.length; i++){
        tabs[i].id = i;
        menuTabs.push(<MenuTab item={tabs[i]}/>)
      }

      return (
        <div id='kui-menu'>
          <ol id='kui-menu-tab-container'>
          {menuTabs}
          </ol>
          <div id='kui-menu-bar'></div>
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

  /**
   *
   */
  var MenuToggle = React.createClass({

    getInitialState: function () {
      return {hidden: false};
    },
    handleClick: function () {
      var menu = $('#kui-menu');
      this.setState({hidden: !this.state.hidden});
      if (this.state.hidden) {
        menu.width('20%');
        menu.find('.menu-tab-title').show()

      }else {
        menu.width('20px');
        menu.find('.menu-tab-title').hide()
      }
      menu = null;
    },
    render: function () {
      var iconClass = this.state.hidden ? 'fa fa-chevron-right fa-fw toggle-icon' : 'fa fa-chevron-left fa-fw toggle-icon';
      return (
        <ol id='kui-menu-bar-list'>
          <li className='kui-menu-bar-options' id='kui-menu-expand'>
            <span className='fa fa-arrows-h fa-fw expand-icon'></span>
          </li>
          <li className='kui-menu-bar-options' id='kui-menu-toggle' onClick={this.handleClick}>
            <span className={iconClass}></span>
          </li>
        </ol>
        );
    }
  });

  /**
   *
   */
  React.renderComponent(
    <MenuToggle/>,
    document.getElementById('kui-menu-bar')
  );

  return MenuToggle;
});


