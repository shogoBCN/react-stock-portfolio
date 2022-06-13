var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddStockForm = function (_React$Component) {
  _inherits(AddStockForm, _React$Component);

  function AddStockForm(props) {
    _classCallCheck(this, AddStockForm);

    var _this = _possibleConstructorReturn(this, (AddStockForm.__proto__ || Object.getPrototypeOf(AddStockForm)).call(this, props));

    _this.state = {
      name: '',
      shares_owned: 0,
      cost_per_share: 0,
      market_price: 0
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(AddStockForm, [{
    key: 'handleChange',
    value: function handleChange(event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      var _state = this.state,
          name = _state.name,
          shares_owned = _state.shares_owned,
          cost_per_share = _state.cost_per_share,
          market_price = _state.market_price;

      // onSubmit is passed down as a prop from Portfolio component

      this.props.onSubmit({
        name: name,
        shares_owned: shares_owned,
        cost_per_share: cost_per_share,
        market_price: market_price
      });

      this.setState({
        name: '',
        shares_owned: 0,
        cost_per_share: 0,
        market_price: 0
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state,
          name = _state2.name,
          shares_owned = _state2.shares_owned,
          cost_per_share = _state2.cost_per_share,
          market_price = _state2.market_price;

      return React.createElement(
        'form',
        { className: 'col-12 mt-2 mb-4', onSubmit: this.handleSubmit },
        React.createElement('input', {
          className: 'mx-2',
          name: 'name',
          type: 'text',
          placeholder: 'Name',
          onChange: this.handleChange,
          value: name,
          required: true
        }),
        React.createElement('input', {
          className: 'mx-2',
          name: 'shares_owned',
          type: 'number',
          placeholder: 'Shares',
          value: shares_owned,
          onChange: this.handleChange
        }),
        React.createElement('input', {
          className: 'mx-2',
          name: 'cost_per_share',
          type: 'number',
          placeholder: 'Cost',
          value: cost_per_share,
          onChange: this.handleChange
        }),
        React.createElement('input', {
          className: 'mx-2',
          name: 'market_price',
          type: 'number',
          placeholder: 'Price',
          value: market_price,
          onChange: this.handleChange
        }),
        React.createElement(
          'button',
          { className: 'btn btn-primary btn-sm' },
          'add'
        )
      );
    }
  }]);

  return AddStockForm;
}(React.Component);

var Stock = function (_React$Component2) {
  _inherits(Stock, _React$Component2);

  function Stock() {
    _classCallCheck(this, Stock);

    return _possibleConstructorReturn(this, (Stock.__proto__ || Object.getPrototypeOf(Stock)).apply(this, arguments));
  }

  _createClass(Stock, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          handleChange = _props.handleChange,
          removeStock = _props.removeStock,
          stock = _props.stock,
          index = _props.index;
      var name = stock.name,
          shares_owned = stock.shares_owned,
          cost_per_share = stock.cost_per_share,
          market_price = stock.market_price;


      var market_value = shares_owned * market_price;
      var unrealized_gain_loss = market_value - shares_owned * cost_per_share;
      // Adopting the underscore_style for consistency

      return React.createElement(
        'tr',
        null,
        React.createElement(
          'td',
          null,
          name
        ),
        React.createElement(
          'td',
          null,
          React.createElement('input', { onChange: function onChange(e) {
              return handleChange(e, index);
            }, type: 'number', name: 'shares_owned', value: shares_owned })
        ),
        React.createElement(
          'td',
          null,
          React.createElement('input', { onChange: function onChange(e) {
              return handleChange(e, index);
            }, type: 'number', name: 'cost_per_share', value: cost_per_share })
        ),
        React.createElement(
          'td',
          null,
          React.createElement('input', { onChange: function onChange(e) {
              return handleChange(e, index);
            }, type: 'number', name: 'market_price', value: market_price })
        ),
        React.createElement(
          'td',
          null,
          market_value
        ),
        React.createElement(
          'td',
          null,
          unrealized_gain_loss
        ),
        React.createElement(
          'td',
          null,
          React.createElement(
            'button',
            { className: 'btn btn-light btn-sm', onClick: function onClick() {
                return removeStock(index);
              } },
            'remove'
          )
        )
      );
    }
  }]);

  return Stock;
}(React.Component);

var Portfolio = function (_React$Component3) {
  _inherits(Portfolio, _React$Component3);

  function Portfolio(props) {
    _classCallCheck(this, Portfolio);

    var _this3 = _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).call(this, props));

    _this3.state = {
      portfolio: [{
        name: 'Feetbook',
        shares_owned: 20,
        cost_per_share: 50,
        market_price: 130
      }, {
        name: 'Yamazon',
        shares_owned: 5,
        cost_per_share: 200,
        market_price: 500
      }, {
        name: 'Snoozechat',
        shares_owned: 100,
        cost_per_share: 20,
        market_price: 3
      }]
    };

    _this3.removeStock = _this3.removeStock.bind(_this3);
    _this3.handleChange = _this3.handleChange.bind(_this3);
    _this3.addStock = _this3.addStock.bind(_this3);
    return _this3;
  }

  _createClass(Portfolio, [{
    key: 'removeStock',
    value: function removeStock(index) {
      var portfolio = this.state.portfolio.slice(); // shallow copy
      portfolio.splice(index, 1); // remove value at index

      this.setState({ portfolio: portfolio });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event, index) {
      var portfolio = this.state.portfolio.slice(); // shallow copy
      var _event$target2 = event.target,
          name = _event$target2.name,
          value = _event$target2.value;


      portfolio[index][name] = value;
      this.setState({ portfolio: portfolio });
    }
  }, {
    key: 'addStock',
    value: function addStock(stock) {
      var portfolio = this.state.portfolio.slice();

      portfolio.push(stock);
      this.setState({ portfolio: portfolio });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var portfolio = this.state.portfolio;


      var portfolio_market_value = portfolio.reduce(function (sum, stock) {
        return stock.shares_owned * stock.market_price + sum;
      }, 0);
      var portfolio_cost = portfolio.reduce(function (sum, stock) {
        return stock.shares_owned * stock.cost_per_share + sum;
      }, 0);
      var portfolio_gain_loss = portfolio_market_value - portfolio_cost;
      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'h1',
          { className: 'text-center my-4' },
          'Stock Portfolio'
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col-12' },
            React.createElement(
              'table',
              { className: 'table table-responsive' },
              React.createElement(
                'thead',
                null,
                React.createElement(
                  'tr',
                  null,
                  React.createElement(
                    'th',
                    { scope: 'col' },
                    'Name'
                  ),
                  React.createElement(
                    'th',
                    { scope: 'col' },
                    'Shares Owned'
                  ),
                  React.createElement(
                    'th',
                    { scope: 'col' },
                    'Cost per share ($)'
                  ),
                  React.createElement(
                    'th',
                    { scope: 'col' },
                    'Market Price ($)'
                  ),
                  React.createElement(
                    'th',
                    { scope: 'col' },
                    'Market Value ($)'
                  ),
                  React.createElement(
                    'th',
                    { scope: 'col' },
                    'Unrealized Gain/Loss ($)'
                  ),
                  React.createElement('th', { scope: 'col' })
                )
              ),
              React.createElement(
                'tbody',
                null,
                portfolio.map(function (stock, index) {
                  return React.createElement(Stock, { key: index, index: index, stock: stock, handleChange: _this4.handleChange, removeStock: _this4.removeStock });
                })
              )
            )
          ),
          React.createElement(AddStockForm, { onSubmit: this.addStock }),
          React.createElement(
            'div',
            { className: 'col-12 col-md-6' },
            React.createElement(
              'h4',
              { className: 'mb-3' },
              'Portfolio value: $ ',
              portfolio_market_value
            )
          ),
          React.createElement(
            'div',
            { className: 'col-12 col-md-6' },
            React.createElement(
              'h4',
              { className: 'mb-3' },
              'Portfolio gain/loss: $ ',
              portfolio_gain_loss
            )
          )
        ),
        React.createElement('hr', null)
      );
    }
  }]);

  return Portfolio;
}(React.Component);

/* _______________________________________ */

var CurrencyConverter = function (_React$Component4) {
  _inherits(CurrencyConverter, _React$Component4);

  function CurrencyConverter(props) {
    _classCallCheck(this, CurrencyConverter);

    var _this5 = _possibleConstructorReturn(this, (CurrencyConverter.__proto__ || Object.getPrototypeOf(CurrencyConverter)).call(this, props));

    _this5.state = {
      rate: 0.89,
      usd: 1,
      euro: 1 * 0.89
    };
    _this5.handleUsdChange = _this5.handleUsdChange.bind(_this5);
    _this5.handleEuroChange = _this5.handleEuroChange.bind(_this5);
    return _this5;
  }

  _createClass(CurrencyConverter, [{
    key: 'toUsd',
    value: function toUsd(amount, rate) {
      return amount * (1 / rate);
    }
  }, {
    key: 'toEuro',
    value: function toEuro(amount, rate) {
      return amount * rate;
    }
  }, {
    key: 'handleUsdChange',
    value: function handleUsdChange(event) {
      var euro = this.convert(event.target.value, this.state.rate, this.toEuro);
      this.setState({
        usd: event.target.value,
        euro: euro
      });
    }
  }, {
    key: 'handleEuroChange',
    value: function handleEuroChange(event) {
      var usd = this.convert(event.target.value, this.state.rate, this.toUsd);
      this.setState({
        euro: event.target.value,
        usd: usd
      });
    }
  }, {
    key: 'convert',
    value: function convert(amount, rate, equation) {
      var input = parseFloat(amount);
      if (Number.isNaN(input)) {
        return '';
      }
      return equation(input, rate).toFixed(3);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state3 = this.state,
          rate = _state3.rate,
          usd = _state3.usd,
          euro = _state3.euro;

      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'div',
          { className: 'text-center p-3 mb-2' },
          React.createElement(
            'h2',
            { className: 'mb-2' },
            'Currency Converter'
          ),
          React.createElement(
            'h4',
            null,
            'USD 1 : ',
            rate,
            ' EURO'
          )
        ),
        React.createElement(
          'div',
          { className: 'row text-center' },
          React.createElement(
            'div',
            { className: 'col-12' },
            React.createElement(
              'span',
              { className: 'mr-1' },
              'USD'
            ),
            React.createElement('input', { value: usd, onChange: this.handleUsdChange, type: 'number' }),
            React.createElement(
              'span',
              { className: 'mx-3' },
              '='
            ),
            React.createElement('input', { value: euro, onChange: this.handleEuroChange, type: 'number' }),
            React.createElement(
              'span',
              { className: 'ml-1' },
              'EURO'
            )
          )
        )
      );
    }
  }]);

  return CurrencyConverter;
}(React.Component);

ReactDOM.render(React.createElement(CurrencyConverter, null), document.getElementById('root2'));

ReactDOM.render(React.createElement(Portfolio, null), document.getElementById('root'));