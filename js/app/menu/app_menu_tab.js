
/** @jsx React.DOM */
define(['react'], function(React) {

  /**
   *
   */
  return React.createClass({

    getDefaultProps : function() {
      return {
        'title' : 'menu option',
        'default' : false
      };
    },
    getInitialState: function () {
      var active = this.props.item.default || false;
      return {active: active};
    },
    handleClick: function () {

    },
    render: function () {
      $('.app-menu-tab').removeClass('active');
      var iconClass = this.state.active ? 'active app-menu-tab' : 'app-menu-tab';
      return (
        <li className={iconClass} onClick={this.handleClick}>
          <div className='app-menu-tab-header'>
            <span className='app-menu-tab-title no-select'>{this.props.item.title}</span>
          </div>
        </li>
        );
    }
  });

});


