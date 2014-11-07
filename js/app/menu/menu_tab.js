
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
      if (this.isMounted()) {
        console.log("Click Received State Before: " + this.state.active);
        this.setState({active: !this.state.active});
        console.log("Click Received State After: " + this.state.active);
      }
    },
    render: function () {
      $('.menu-tab').removeClass('active');
      var iconClass = this.state.active ? 'active menu-tab' : 'menu-tab';
      return (
        <li className={iconClass} onClick={this.handleClick}>
          <div className='menu-tab-header'>
            <span className='menu-tab-title no-select'>{this.props.item.title}</span>
          </div>
        </li>
        );
    }
  });

});


