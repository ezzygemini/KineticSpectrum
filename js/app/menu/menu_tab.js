
/** @jsx React.DOM */
define(['react'], function(React) {

  return React.createClass({

    getDefaultProps : function() {
      return {
        "title" : "menu option"
      };
    },
    getInitialState: function () {
      return {active: false};
    },
    handleClick: function () {
      this.setState({active: !this.state.active});
    },
    render: function () {
      var iconClass = this.state.active ? 'active menu-tab' : 'in-active menu-tab';
      var items = this.props.items.map(function(item) {
        return <li className={iconClass} onClick={this.handleClick.bind(this, item)}>
                  <div className='menu-tab-header'>
                    <span className='menu-tab-title no-select'>{item.title}</span>
                  </div>
               </li>;
      }.bind(this));
      return (
        <div>{items}</div>
        );
    }
  });

});


