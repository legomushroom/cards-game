(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("guarantee-rate-game", [], factory);
	else if(typeof exports === 'object')
		exports["guarantee-rate-game"] = factory();
	else
		root["guarantee-rate-game"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _stringify = __webpack_require__(2);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _preactRedux = __webpack_require__(5);

	var _preact = __webpack_require__(6);

	var _game = __webpack_require__(22);

	var _game2 = _interopRequireDefault(_game);

	var _store = __webpack_require__(169);

	var _store2 = _interopRequireDefault(_store);

	var _addUnload = __webpack_require__(196);

	var _addUnload2 = _interopRequireDefault(_addUnload);

	var _constants = __webpack_require__(126);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	  TODO:
	    - memoneto
	    - sounds
	    - difficulty
	    - readme
	    - comments
	*/

	// import Icon from './components/icon';
	var store = (0, _store2.default)();
	(0, _preact.render)((0, _preact.h)(
	  _preactRedux.Provider,
	  { store: store },
	  (0, _preact.h)(_game2.default, null)
	), document.body);

	// save to loal storage
	var prefix = 'localstorage';
	(0, _addUnload2.default)(function () {
	  var preState = store.getState();
	  delete preState.cards.history;
	  try {
	    localStorage.setItem(_constants2.default.NAME, (0, _stringify2.default)(preState));
	  } catch (e) {
	    console.error(e);
	  }
	});

	// load from localstorage
	try {
	  var stored = localStorage.getItem(_constants2.default.NAME);
	  if (stored) {
	    store.dispatch({ type: 'SET_APP_STATE', data: JSON.parse(stored) });
	  }
	} catch (e) {
	  console.error(e);
	}

	// localStorage.removeItem(C.NAME);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(4)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
		 true ? factory(exports, __webpack_require__(6), __webpack_require__(7)) :
		typeof define === 'function' && define.amd ? define(['exports', 'preact', 'redux'], factory) :
		(factory((global.preactRedux = global.preactRedux || {}),global.preact,global.redux));
	}(this, function (exports,preact,redux) { 'use strict';

		function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports), module.exports; }


		var babelHelpers = {};

		babelHelpers.classCallCheck = function (instance, Constructor) {
		  if (!(instance instanceof Constructor)) {
		    throw new TypeError("Cannot call a class as a function");
		  }
		};

		babelHelpers.extends = Object.assign || function (target) {
		  for (var i = 1; i < arguments.length; i++) {
		    var source = arguments[i];

		    for (var key in source) {
		      if (Object.prototype.hasOwnProperty.call(source, key)) {
		        target[key] = source[key];
		      }
		    }
		  }

		  return target;
		};

		babelHelpers.inherits = function (subClass, superClass) {
		  if (typeof superClass !== "function" && superClass !== null) {
		    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		  }

		  subClass.prototype = Object.create(superClass && superClass.prototype, {
		    constructor: {
		      value: subClass,
		      enumerable: false,
		      writable: true,
		      configurable: true
		    }
		  });
		  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		};

		babelHelpers.possibleConstructorReturn = function (self, call) {
		  if (!self) {
		    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		  }

		  return call && (typeof call === "object" || typeof call === "function") ? call : self;
		};

		babelHelpers;

		var Children = {
			only: function (children) {
				return children && children[0] || null;
			}
		};

		function proptype() {}
		proptype.isRequired = proptype;

		var PropTypes = {
			element: proptype,
			func: proptype,
			shape: function () {
				return proptype;
			}
		};

		var storeShape = PropTypes.shape({
		  subscribe: PropTypes.func.isRequired,
		  dispatch: PropTypes.func.isRequired,
		  getState: PropTypes.func.isRequired
		});

		/**
		 * Prints a warning in the console if it exists.
		 *
		 * @param {String} message The warning message.
		 * @returns {void}
		 */
		function warning(message) {
		  /* eslint-disable no-console */
		  if (typeof console !== 'undefined' && typeof console.error === 'function') {
		    console.error(message);
		  }
		  /* eslint-enable no-console */
		  try {
		    // This error was thrown as a convenience so that you can use this stack
		    // to find the callsite that caused this warning to fire.
		    throw new Error(message);
		    /* eslint-disable no-empty */
		  } catch (e) {}
		  /* eslint-enable no-empty */
		}

		var didWarnAboutReceivingStore = false;
		function warnAboutReceivingStore() {
		  if (didWarnAboutReceivingStore) {
		    return;
		  }
		  didWarnAboutReceivingStore = true;

		  warning('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
		}

		var Provider = function (_Component) {
		  babelHelpers.inherits(Provider, _Component);

		  Provider.prototype.getChildContext = function getChildContext() {
		    return { store: this.store };
		  };

		  function Provider(props, context) {
		    babelHelpers.classCallCheck(this, Provider);

		    var _this = babelHelpers.possibleConstructorReturn(this, _Component.call(this, props, context));

		    _this.store = props.store;
		    return _this;
		  }

		  Provider.prototype.render = function render() {
		    var children = this.props.children;

		    return Children.only(children);
		  };

		  return Provider;
		}(preact.Component);

		if (true) {
		  Provider.prototype.componentWillReceiveProps = function (nextProps) {
		    var store = this.store;
		    var nextStore = nextProps.store;


		    if (store !== nextStore) {
		      warnAboutReceivingStore();
		    }
		  };
		}

		Provider.childContextTypes = {
		  store: storeShape.isRequired
		};

		function shallowEqual(objA, objB) {
		  if (objA === objB) {
		    return true;
		  }

		  var keysA = Object.keys(objA);
		  var keysB = Object.keys(objB);

		  if (keysA.length !== keysB.length) {
		    return false;
		  }

		  // Test for A's keys different from B.
		  var hasOwn = Object.prototype.hasOwnProperty;
		  for (var i = 0; i < keysA.length; i++) {
		    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
		      return false;
		    }
		  }

		  return true;
		}

		function wrapActionCreators(actionCreators) {
		  return function (dispatch) {
		    return redux.bindActionCreators(actionCreators, dispatch);
		  };
		}

		var isObjectLike = __commonjs(function (module) {
		  /**
		   * Checks if `value` is object-like. A value is object-like if it's not `null`
		   * and has a `typeof` result of "object".
		   *
		   * @static
		   * @memberOf _
		   * @since 4.0.0
		   * @category Lang
		   * @param {*} value The value to check.
		   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
		   * @example
		   *
		   * _.isObjectLike({});
		   * // => true
		   *
		   * _.isObjectLike([1, 2, 3]);
		   * // => true
		   *
		   * _.isObjectLike(_.noop);
		   * // => false
		   *
		   * _.isObjectLike(null);
		   * // => false
		   */
		  function isObjectLike(value) {
		    return !!value && typeof value == 'object';
		  }

		  module.exports = isObjectLike;
		});

		var require$$0 = isObjectLike && typeof isObjectLike === 'object' && 'default' in isObjectLike ? isObjectLike['default'] : isObjectLike;

		var _isHostObject = __commonjs(function (module) {
		  /**
		   * Checks if `value` is a host object in IE < 9.
		   *
		   * @private
		   * @param {*} value The value to check.
		   * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
		   */
		  function isHostObject(value) {
		    // Many host objects are `Object` objects that can coerce to strings
		    // despite having improperly defined `toString` methods.
		    var result = false;
		    if (value != null && typeof value.toString != 'function') {
		      try {
		        result = !!(value + '');
		      } catch (e) {}
		    }
		    return result;
		  }

		  module.exports = isHostObject;
		});

		var require$$1 = _isHostObject && typeof _isHostObject === 'object' && 'default' in _isHostObject ? _isHostObject['default'] : _isHostObject;

		var _getPrototype = __commonjs(function (module) {
		  /* Built-in method references for those with the same name as other `lodash` methods. */
		  var nativeGetPrototype = Object.getPrototypeOf;

		  /**
		   * Gets the `[[Prototype]]` of `value`.
		   *
		   * @private
		   * @param {*} value The value to query.
		   * @returns {null|Object} Returns the `[[Prototype]]`.
		   */
		  function getPrototype(value) {
		    return nativeGetPrototype(Object(value));
		  }

		  module.exports = getPrototype;
		});

		var require$$2 = _getPrototype && typeof _getPrototype === 'object' && 'default' in _getPrototype ? _getPrototype['default'] : _getPrototype;

		var isPlainObject = __commonjs(function (module) {
		  var getPrototype = require$$2,
		      isHostObject = require$$1,
		      isObjectLike = require$$0;

		  /** `Object#toString` result references. */
		  var objectTag = '[object Object]';

		  /** Used for built-in method references. */
		  var objectProto = Object.prototype;

		  /** Used to resolve the decompiled source of functions. */
		  var funcToString = Function.prototype.toString;

		  /** Used to check objects for own properties. */
		  var hasOwnProperty = objectProto.hasOwnProperty;

		  /** Used to infer the `Object` constructor. */
		  var objectCtorString = funcToString.call(Object);

		  /**
		   * Used to resolve the
		   * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
		   * of values.
		   */
		  var objectToString = objectProto.toString;

		  /**
		   * Checks if `value` is a plain object, that is, an object created by the
		   * `Object` constructor or one with a `[[Prototype]]` of `null`.
		   *
		   * @static
		   * @memberOf _
		   * @since 0.8.0
		   * @category Lang
		   * @param {*} value The value to check.
		   * @returns {boolean} Returns `true` if `value` is a plain object,
		   *  else `false`.
		   * @example
		   *
		   * function Foo() {
		   *   this.a = 1;
		   * }
		   *
		   * _.isPlainObject(new Foo);
		   * // => false
		   *
		   * _.isPlainObject([1, 2, 3]);
		   * // => false
		   *
		   * _.isPlainObject({ 'x': 0, 'y': 0 });
		   * // => true
		   *
		   * _.isPlainObject(Object.create(null));
		   * // => true
		   */
		  function isPlainObject(value) {
		    if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
		      return false;
		    }
		    var proto = getPrototype(value);
		    if (proto === null) {
		      return true;
		    }
		    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
		    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
		  }

		  module.exports = isPlainObject;
		});

		var isPlainObject$1 = isPlainObject && typeof isPlainObject === 'object' && 'default' in isPlainObject ? isPlainObject['default'] : isPlainObject;

		var index = __commonjs(function (module) {
		    /**
		     * Copyright 2015, Yahoo! Inc.
		     * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
		     */
		    'use strict';

		    var REACT_STATICS = {
		        childContextTypes: true,
		        contextTypes: true,
		        defaultProps: true,
		        displayName: true,
		        getDefaultProps: true,
		        mixins: true,
		        propTypes: true,
		        type: true
		    };

		    var KNOWN_STATICS = {
		        name: true,
		        length: true,
		        prototype: true,
		        caller: true,
		        arguments: true,
		        arity: true
		    };

		    module.exports = function hoistNonReactStatics(targetComponent, sourceComponent) {
		        if (typeof sourceComponent !== 'string') {
		            // don't hoist over string (html) components
		            var keys = Object.getOwnPropertyNames(sourceComponent);
		            for (var i = 0; i < keys.length; ++i) {
		                if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]]) {
		                    try {
		                        targetComponent[keys[i]] = sourceComponent[keys[i]];
		                    } catch (error) {}
		                }
		            }
		        }

		        return targetComponent;
		    };
		});

		var hoistStatics = index && typeof index === 'object' && 'default' in index ? index['default'] : index;

		var invariant = __commonjs(function (module) {
		  /**
		   * Copyright 2013-2015, Facebook, Inc.
		   * All rights reserved.
		   *
		   * This source code is licensed under the BSD-style license found in the
		   * LICENSE file in the root directory of this source tree. An additional grant
		   * of patent rights can be found in the PATENTS file in the same directory.
		   */

		  'use strict';

		  /**
		   * Use invariant() to assert state which your program assumes to be true.
		   *
		   * Provide sprintf-style format (only %s is supported) and arguments
		   * to provide information about what broke and what you were
		   * expecting.
		   *
		   * The invariant message will be stripped in production, but the invariant
		   * will remain to ensure logic does not differ in production.
		   */

		  var NODE_ENV = 'development';

		  var invariant = function (condition, format, a, b, c, d, e, f) {
		    if (NODE_ENV !== 'production') {
		      if (format === undefined) {
		        throw new Error('invariant requires an error message argument');
		      }
		    }

		    if (!condition) {
		      var error;
		      if (format === undefined) {
		        error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
		      } else {
		        var args = [a, b, c, d, e, f];
		        var argIndex = 0;
		        error = new Error(format.replace(/%s/g, function () {
		          return args[argIndex++];
		        }));
		        error.name = 'Invariant Violation';
		      }

		      error.framesToPop = 1; // we don't care about invariant's own frame
		      throw error;
		    }
		  };

		  module.exports = invariant;
		});

		var invariant$1 = invariant && typeof invariant === 'object' && 'default' in invariant ? invariant['default'] : invariant;

		var defaultMapStateToProps = function (state) {
		  return {};
		}; // eslint-disable-line no-unused-vars
		var defaultMapDispatchToProps = function (dispatch) {
		  return { dispatch: dispatch };
		};
		var defaultMergeProps = function (stateProps, dispatchProps, parentProps) {
		  return babelHelpers.extends({}, parentProps, stateProps, dispatchProps);
		};

		function getDisplayName(WrappedComponent) {
		  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
		}

		var errorObject = { value: null };
		function tryCatch(fn, ctx) {
		  try {
		    return fn.apply(ctx);
		  } catch (e) {
		    errorObject.value = e;
		    return errorObject;
		  }
		}

		// Helps track hot reloading.
		var nextVersion = 0;

		function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
		  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

		  var shouldSubscribe = Boolean(mapStateToProps);
		  var mapState = mapStateToProps || defaultMapStateToProps;

		  var mapDispatch = void 0;
		  if (typeof mapDispatchToProps === 'function') {
		    mapDispatch = mapDispatchToProps;
		  } else if (!mapDispatchToProps) {
		    mapDispatch = defaultMapDispatchToProps;
		  } else {
		    mapDispatch = wrapActionCreators(mapDispatchToProps);
		  }

		  var finalMergeProps = mergeProps || defaultMergeProps;
		  var _options$pure = options.pure;
		  var pure = _options$pure === undefined ? true : _options$pure;
		  var _options$withRef = options.withRef;
		  var withRef = _options$withRef === undefined ? false : _options$withRef;

		  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

		  // Helps track hot reloading.
		  var version = nextVersion++;

		  return function wrapWithConnect(WrappedComponent) {
		    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

		    function checkStateShape(props, methodName) {
		      if (!isPlainObject$1(props)) {
		        warning(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
		      }
		    }

		    function computeMergedProps(stateProps, dispatchProps, parentProps) {
		      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
		      if (true) {
		        checkStateShape(mergedProps, 'mergeProps');
		      }
		      return mergedProps;
		    }

		    var Connect = function (_Component) {
		      babelHelpers.inherits(Connect, _Component);

		      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
		        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
		      };

		      function Connect(props, context) {
		        babelHelpers.classCallCheck(this, Connect);

		        var _this = babelHelpers.possibleConstructorReturn(this, _Component.call(this, props, context));

		        _this.version = version;
		        _this.store = props.store || context.store;

		        invariant$1(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

		        var storeState = _this.store.getState();
		        _this.state = { storeState: storeState };
		        _this.clearCache();
		        return _this;
		      }

		      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
		        if (!this.finalMapStateToProps) {
		          return this.configureFinalMapState(store, props);
		        }

		        var state = store.getState();
		        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

		        if (true) {
		          checkStateShape(stateProps, 'mapStateToProps');
		        }
		        return stateProps;
		      };

		      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
		        var mappedState = mapState(store.getState(), props);
		        var isFactory = typeof mappedState === 'function';

		        this.finalMapStateToProps = isFactory ? mappedState : mapState;
		        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

		        if (isFactory) {
		          return this.computeStateProps(store, props);
		        }

		        if (true) {
		          checkStateShape(mappedState, 'mapStateToProps');
		        }
		        return mappedState;
		      };

		      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
		        if (!this.finalMapDispatchToProps) {
		          return this.configureFinalMapDispatch(store, props);
		        }

		        var dispatch = store.dispatch;

		        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

		        if (true) {
		          checkStateShape(dispatchProps, 'mapDispatchToProps');
		        }
		        return dispatchProps;
		      };

		      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
		        var mappedDispatch = mapDispatch(store.dispatch, props);
		        var isFactory = typeof mappedDispatch === 'function';

		        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
		        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

		        if (isFactory) {
		          return this.computeDispatchProps(store, props);
		        }

		        if (true) {
		          checkStateShape(mappedDispatch, 'mapDispatchToProps');
		        }
		        return mappedDispatch;
		      };

		      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
		        var nextStateProps = this.computeStateProps(this.store, this.props);
		        if (this.stateProps && shallowEqual(nextStateProps, this.stateProps)) {
		          return false;
		        }

		        this.stateProps = nextStateProps;
		        return true;
		      };

		      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
		        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
		        if (this.dispatchProps && shallowEqual(nextDispatchProps, this.dispatchProps)) {
		          return false;
		        }

		        this.dispatchProps = nextDispatchProps;
		        return true;
		      };

		      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
		        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
		        if (this.mergedProps && checkMergedEquals && shallowEqual(nextMergedProps, this.mergedProps)) {
		          return false;
		        }

		        this.mergedProps = nextMergedProps;
		        return true;
		      };

		      Connect.prototype.isSubscribed = function isSubscribed() {
		        return typeof this.unsubscribe === 'function';
		      };

		      Connect.prototype.trySubscribe = function trySubscribe() {
		        if (shouldSubscribe && !this.unsubscribe) {
		          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
		          this.handleChange();
		        }
		      };

		      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
		        if (this.unsubscribe) {
		          this.unsubscribe();
		          this.unsubscribe = null;
		        }
		      };

		      Connect.prototype.componentDidMount = function componentDidMount() {
		        this.trySubscribe();
		      };

		      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
		        if (!pure || !shallowEqual(nextProps, this.props)) {
		          this.haveOwnPropsChanged = true;
		        }
		      };

		      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
		        this.tryUnsubscribe();
		        this.clearCache();
		      };

		      Connect.prototype.clearCache = function clearCache() {
		        this.dispatchProps = null;
		        this.stateProps = null;
		        this.mergedProps = null;
		        this.haveOwnPropsChanged = true;
		        this.hasStoreStateChanged = true;
		        this.haveStatePropsBeenPrecalculated = false;
		        this.statePropsPrecalculationError = null;
		        this.renderedElement = null;
		        this.finalMapDispatchToProps = null;
		        this.finalMapStateToProps = null;
		      };

		      Connect.prototype.handleChange = function handleChange() {
		        if (!this.unsubscribe) {
		          return;
		        }

		        var storeState = this.store.getState();
		        var prevStoreState = this.state.storeState;
		        if (pure && prevStoreState === storeState) {
		          return;
		        }

		        if (pure && !this.doStatePropsDependOnOwnProps) {
		          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
		          if (!haveStatePropsChanged) {
		            return;
		          }
		          if (haveStatePropsChanged === errorObject) {
		            this.statePropsPrecalculationError = errorObject.value;
		          }
		          this.haveStatePropsBeenPrecalculated = true;
		        }

		        this.hasStoreStateChanged = true;
		        this.setState({ storeState: storeState });
		      };

		      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
		        invariant$1(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

		        return this.refs.wrappedInstance;
		      };

		      Connect.prototype.render = function render() {
		        var haveOwnPropsChanged = this.haveOwnPropsChanged;
		        var hasStoreStateChanged = this.hasStoreStateChanged;
		        var haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated;
		        var statePropsPrecalculationError = this.statePropsPrecalculationError;
		        var renderedElement = this.renderedElement;


		        this.haveOwnPropsChanged = false;
		        this.hasStoreStateChanged = false;
		        this.haveStatePropsBeenPrecalculated = false;
		        this.statePropsPrecalculationError = null;

		        if (statePropsPrecalculationError) {
		          throw statePropsPrecalculationError;
		        }

		        var shouldUpdateStateProps = true;
		        var shouldUpdateDispatchProps = true;
		        if (pure && renderedElement) {
		          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
		          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
		        }

		        var haveStatePropsChanged = false;
		        var haveDispatchPropsChanged = false;
		        if (haveStatePropsBeenPrecalculated) {
		          haveStatePropsChanged = true;
		        } else if (shouldUpdateStateProps) {
		          haveStatePropsChanged = this.updateStatePropsIfNeeded();
		        }
		        if (shouldUpdateDispatchProps) {
		          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
		        }

		        var haveMergedPropsChanged = true;
		        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
		          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
		        } else {
		          haveMergedPropsChanged = false;
		        }

		        if (!haveMergedPropsChanged && renderedElement) {
		          return renderedElement;
		        }

		        if (withRef) {
		          this.renderedElement = preact.h(WrappedComponent, babelHelpers.extends({}, this.mergedProps, {
		            ref: 'wrappedInstance'
		          }));
		        } else {
		          this.renderedElement = preact.h(WrappedComponent, this.mergedProps);
		        }

		        return this.renderedElement;
		      };

		      return Connect;
		    }(preact.Component);

		    Connect.displayName = connectDisplayName;
		    Connect.WrappedComponent = WrappedComponent;
		    Connect.contextTypes = {
		      store: storeShape
		    };


		    if (true) {
		      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
		        if (this.version === version) {
		          return;
		        }

		        // We are hot reloading!
		        this.version = version;
		        this.trySubscribe();
		        this.clearCache();
		      };
		    }

		    return hoistStatics(Connect, WrappedComponent);
		  };
		}

		exports.Provider = Provider;
		exports.connect = connect;

	}));


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	!function(global, factory) {
	     true ? factory(exports) : 'function' == typeof define && define.amd ? define([ 'exports' ], factory) : factory(global.preact = global.preact || {});
	}(this, function(exports) {
	    function VNode(nodeName, attributes, children) {
	        this.nodeName = nodeName;
	        this.attributes = attributes;
	        this.children = children;
	        this.key = attributes && attributes.key;
	    }
	    function h(nodeName, attributes) {
	        var lastSimple, child, simple, i, children = [];
	        for (i = arguments.length; i-- > 2; ) stack.push(arguments[i]);
	        if (attributes && attributes.children) {
	            if (!stack.length) stack.push(attributes.children);
	            delete attributes.children;
	        }
	        while (stack.length) if ((child = stack.pop()) instanceof Array) for (i = child.length; i--; ) stack.push(child[i]); else if (null != child && child !== !1) {
	            if ('number' == typeof child || child === !0) child = String(child);
	            simple = 'string' == typeof child;
	            if (simple && lastSimple) children[children.length - 1] += child; else {
	                children.push(child);
	                lastSimple = simple;
	            }
	        }
	        var p = new VNode(nodeName, attributes || void 0, children);
	        if (options.vnode) options.vnode(p);
	        return p;
	    }
	    function extend(obj, props) {
	        if (props) for (var i in props) obj[i] = props[i];
	        return obj;
	    }
	    function clone(obj) {
	        return extend({}, obj);
	    }
	    function delve(obj, key) {
	        for (var p = key.split('.'), i = 0; i < p.length && obj; i++) obj = obj[p[i]];
	        return obj;
	    }
	    function isFunction(obj) {
	        return 'function' == typeof obj;
	    }
	    function isString(obj) {
	        return 'string' == typeof obj;
	    }
	    function hashToClassName(c) {
	        var str = '';
	        for (var prop in c) if (c[prop]) {
	            if (str) str += ' ';
	            str += prop;
	        }
	        return str;
	    }
	    function cloneElement(vnode, props) {
	        return h(vnode.nodeName, extend(clone(vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
	    }
	    function createLinkedState(component, key, eventPath) {
	        var path = key.split('.');
	        return function(e) {
	            var t = e && e.target || this, state = {}, obj = state, v = isString(eventPath) ? delve(e, eventPath) : t.nodeName ? t.type.match(/^che|rad/) ? t.checked : t.value : e, i = 0;
	            for (;i < path.length - 1; i++) obj = obj[path[i]] || (obj[path[i]] = !i && component.state[path[i]] || {});
	            obj[path[i]] = v;
	            component.setState(state);
	        };
	    }
	    function enqueueRender(component) {
	        if (!component._dirty && (component._dirty = !0) && 1 == items.push(component)) (options.debounceRendering || defer)(rerender);
	    }
	    function rerender() {
	        var p, list = items;
	        items = [];
	        while (p = list.pop()) if (p._dirty) renderComponent(p);
	    }
	    function isFunctionalComponent(vnode) {
	        var nodeName = vnode && vnode.nodeName;
	        return nodeName && isFunction(nodeName) && !(nodeName.prototype && nodeName.prototype.render);
	    }
	    function buildFunctionalComponent(vnode, context) {
	        return vnode.nodeName(getNodeProps(vnode), context || EMPTY);
	    }
	    function isSameNodeType(node, vnode) {
	        if (isString(vnode)) return node instanceof Text;
	        if (isString(vnode.nodeName)) return isNamedNode(node, vnode.nodeName);
	        if (isFunction(vnode.nodeName)) return node._componentConstructor === vnode.nodeName || isFunctionalComponent(vnode); else ;
	    }
	    function isNamedNode(node, nodeName) {
	        return node.normalizedNodeName === nodeName || toLowerCase(node.nodeName) === toLowerCase(nodeName);
	    }
	    function getNodeProps(vnode) {
	        var props = clone(vnode.attributes);
	        props.children = vnode.children;
	        var defaultProps = vnode.nodeName.defaultProps;
	        if (defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
	        return props;
	    }
	    function removeNode(node) {
	        var p = node.parentNode;
	        if (p) p.removeChild(node);
	    }
	    function setAccessor(node, name, old, value, isSvg) {
	        if ('className' === name) name = 'class';
	        if ('class' === name && value && 'object' == typeof value) value = hashToClassName(value);
	        if ('key' === name) ; else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
	            if (!value || isString(value) || isString(old)) node.style.cssText = value || '';
	            if (value && 'object' == typeof value) {
	                if (!isString(old)) for (var i in old) if (!(i in value)) node.style[i] = '';
	                for (var i in value) node.style[i] = 'number' == typeof value[i] && !NON_DIMENSION_PROPS[i] ? value[i] + 'px' : value[i];
	            }
	        } else if ('dangerouslySetInnerHTML' === name) {
	            if (value) node.innerHTML = value.__html;
	        } else if ('o' == name[0] && 'n' == name[1]) {
	            var l = node._listeners || (node._listeners = {});
	            name = toLowerCase(name.substring(2));
	            if (value) {
	                if (!l[name]) node.addEventListener(name, eventProxy, !!NON_BUBBLING_EVENTS[name]);
	            } else if (l[name]) node.removeEventListener(name, eventProxy, !!NON_BUBBLING_EVENTS[name]);
	            l[name] = value;
	        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
	            setProperty(node, name, null == value ? '' : value);
	            if (null == value || value === !1) node.removeAttribute(name);
	        } else {
	            var ns = isSvg && name.match(/^xlink\:?(.+)/);
	            if (null == value || value === !1) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1])); else node.removeAttribute(name); else if ('object' != typeof value && !isFunction(value)) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1]), value); else node.setAttribute(name, value);
	        }
	    }
	    function setProperty(node, name, value) {
	        try {
	            node[name] = value;
	        } catch (e) {}
	    }
	    function eventProxy(e) {
	        return this._listeners[e.type](options.event && options.event(e) || e);
	    }
	    function collectNode(node) {
	        removeNode(node);
	        if (node instanceof Element) {
	            node._component = node._componentConstructor = null;
	            var _name = node.normalizedNodeName || toLowerCase(node.nodeName);
	            (nodes[_name] || (nodes[_name] = [])).push(node);
	        }
	    }
	    function createNode(nodeName, isSvg) {
	        var name = toLowerCase(nodeName), node = nodes[name] && nodes[name].pop() || (isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName));
	        node.normalizedNodeName = name;
	        return node;
	    }
	    function flushMounts() {
	        var c;
	        while (c = mounts.pop()) {
	            if (options.afterMount) options.afterMount(c);
	            if (c.componentDidMount) c.componentDidMount();
	        }
	    }
	    function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	        if (!diffLevel++) isSvgMode = parent instanceof SVGElement;
	        var ret = idiff(dom, vnode, context, mountAll);
	        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
	        if (!--diffLevel && !componentRoot) flushMounts();
	        return ret;
	    }
	    function idiff(dom, vnode, context, mountAll) {
	        var originalAttributes = vnode && vnode.attributes;
	        while (isFunctionalComponent(vnode)) vnode = buildFunctionalComponent(vnode, context);
	        if (null == vnode) vnode = '';
	        if (isString(vnode)) {
	            if (dom) {
	                if (dom instanceof Text && dom.parentNode) {
	                    if (dom.nodeValue != vnode) dom.nodeValue = vnode;
	                    return dom;
	                }
	                recollectNodeTree(dom);
	            }
	            return document.createTextNode(vnode);
	        }
	        if (isFunction(vnode.nodeName)) return buildComponentFromVNode(dom, vnode, context, mountAll);
	        var out = dom, nodeName = vnode.nodeName, prevSvgMode = isSvgMode, vchildren = vnode.children;
	        if (!isString(nodeName)) nodeName = String(nodeName);
	        isSvgMode = 'svg' === nodeName ? !0 : 'foreignObject' === nodeName ? !1 : isSvgMode;
	        if (!dom) out = createNode(nodeName, isSvgMode); else if (!isNamedNode(dom, nodeName)) {
	            out = createNode(nodeName, isSvgMode);
	            while (dom.firstChild) out.appendChild(dom.firstChild);
	            recollectNodeTree(dom);
	        }
	        if (vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && 1 === out.childNodes.length && out.firstChild instanceof Text) {
	            if (out.firstChild.nodeValue != vchildren[0]) out.firstChild.nodeValue = vchildren[0];
	        } else if (vchildren && vchildren.length || out.firstChild) innerDiffNode(out, vchildren, context, mountAll);
	        var props = out[ATTR_KEY];
	        if (!props) {
	            out[ATTR_KEY] = props = {};
	            for (var a = out.attributes, i = a.length; i--; ) props[a[i].name] = a[i].value;
	        }
	        diffAttributes(out, vnode.attributes, props);
	        if (originalAttributes && 'function' == typeof originalAttributes.ref) (props.ref = originalAttributes.ref)(out);
	        isSvgMode = prevSvgMode;
	        return out;
	    }
	    function innerDiffNode(dom, vchildren, context, mountAll) {
	        var j, c, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren && vchildren.length;
	        if (len) for (var i = 0; i < len; i++) {
	            var _child = originalChildren[i], key = vlen ? (c = _child._component) ? c.__key : (c = _child[ATTR_KEY]) ? c.key : null : null;
	            if (key || 0 === key) {
	                keyedLen++;
	                keyed[key] = _child;
	            } else children[childrenLen++] = _child;
	        }
	        if (vlen) for (var i = 0; i < vlen; i++) {
	            vchild = vchildren[i];
	            child = null;
	            var key = vchild.key;
	            if (null != key) {
	                if (keyedLen && key in keyed) {
	                    child = keyed[key];
	                    keyed[key] = void 0;
	                    keyedLen--;
	                }
	            } else if (!child && min < childrenLen) {
	                for (j = min; j < childrenLen; j++) {
	                    c = children[j];
	                    if (c && isSameNodeType(c, vchild)) {
	                        child = c;
	                        children[j] = void 0;
	                        if (j === childrenLen - 1) childrenLen--;
	                        if (j === min) min++;
	                        break;
	                    }
	                }
	                if (!child && min < childrenLen && isFunction(vchild.nodeName) && mountAll) {
	                    child = children[min];
	                    children[min++] = void 0;
	                }
	            }
	            child = idiff(child, vchild, context, mountAll);
	            if (child && child !== dom && child !== originalChildren[i]) dom.insertBefore(child, originalChildren[i] || null);
	        }
	        if (keyedLen) for (var i in keyed) if (keyed[i]) recollectNodeTree(keyed[i]);
	        if (min < childrenLen) removeOrphanedChildren(children);
	    }
	    function removeOrphanedChildren(children, unmountOnly) {
	        for (var i = children.length; i--; ) if (children[i]) recollectNodeTree(children[i], unmountOnly);
	    }
	    function recollectNodeTree(node, unmountOnly) {
	        var component = node._component;
	        if (component) unmountComponent(component, !unmountOnly); else {
	            if (node[ATTR_KEY] && node[ATTR_KEY].ref) node[ATTR_KEY].ref(null);
	            if (!unmountOnly) collectNode(node);
	            if (node.childNodes && node.childNodes.length) removeOrphanedChildren(node.childNodes, unmountOnly);
	        }
	    }
	    function diffAttributes(dom, attrs, old) {
	        for (var _name in old) if (!(attrs && _name in attrs) && null != old[_name]) setAccessor(dom, _name, old[_name], old[_name] = void 0, isSvgMode);
	        if (attrs) for (var _name2 in attrs) if (!('children' === _name2 || 'innerHTML' === _name2 || _name2 in old && attrs[_name2] === ('value' === _name2 || 'checked' === _name2 ? dom[_name2] : old[_name2]))) setAccessor(dom, _name2, old[_name2], old[_name2] = attrs[_name2], isSvgMode);
	    }
	    function collectComponent(component) {
	        var name = component.constructor.name, list = components[name];
	        if (list) list.push(component); else components[name] = [ component ];
	    }
	    function createComponent(Ctor, props, context) {
	        var inst = new Ctor(props, context), list = components[Ctor.name];
	        Component.call(inst, props, context);
	        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
	            inst.nextBase = list[i].nextBase;
	            list.splice(i, 1);
	            break;
	        }
	        return inst;
	    }
	    function setComponentProps(component, props, opts, context, mountAll) {
	        if (!component._disable) {
	            component._disable = !0;
	            if (component.__ref = props.ref) delete props.ref;
	            if (component.__key = props.key) delete props.key;
	            if (!component.base || mountAll) {
	                if (component.componentWillMount) component.componentWillMount();
	            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
	            if (context && context !== component.context) {
	                if (!component.prevContext) component.prevContext = component.context;
	                component.context = context;
	            }
	            if (!component.prevProps) component.prevProps = component.props;
	            component.props = props;
	            component._disable = !1;
	            if (0 !== opts) if (1 === opts || options.syncComponentUpdates !== !1 || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);
	            if (component.__ref) component.__ref(component);
	        }
	    }
	    function renderComponent(component, opts, mountAll, isChild) {
	        if (!component._disable) {
	            var skip, rendered, inst, cbase, props = component.props, state = component.state, context = component.context, previousProps = component.prevProps || props, previousState = component.prevState || state, previousContext = component.prevContext || context, isUpdate = component.base, nextBase = component.nextBase, initialBase = isUpdate || nextBase, initialChildComponent = component._component;
	            if (isUpdate) {
	                component.props = previousProps;
	                component.state = previousState;
	                component.context = previousContext;
	                if (2 !== opts && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === !1) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
	                component.props = props;
	                component.state = state;
	                component.context = context;
	            }
	            component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	            component._dirty = !1;
	            if (!skip) {
	                if (component.render) rendered = component.render(props, state, context);
	                if (component.getChildContext) context = extend(clone(context), component.getChildContext());
	                while (isFunctionalComponent(rendered)) rendered = buildFunctionalComponent(rendered, context);
	                var toUnmount, base, childComponent = rendered && rendered.nodeName;
	                if (isFunction(childComponent)) {
	                    inst = initialChildComponent;
	                    var childProps = getNodeProps(rendered);
	                    if (inst && inst.constructor === childComponent) setComponentProps(inst, childProps, 1, context); else {
	                        toUnmount = inst;
	                        inst = createComponent(childComponent, childProps, context);
	                        inst.nextBase = inst.nextBase || nextBase;
	                        inst._parentComponent = component;
	                        component._component = inst;
	                        setComponentProps(inst, childProps, 0, context);
	                        renderComponent(inst, 1, mountAll, !0);
	                    }
	                    base = inst.base;
	                } else {
	                    cbase = initialBase;
	                    toUnmount = initialChildComponent;
	                    if (toUnmount) cbase = component._component = null;
	                    if (initialBase || 1 === opts) {
	                        if (cbase) cbase._component = null;
	                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
	                    }
	                }
	                if (initialBase && base !== initialBase && inst !== initialChildComponent) {
	                    var baseParent = initialBase.parentNode;
	                    if (baseParent && base !== baseParent) {
	                        baseParent.replaceChild(base, initialBase);
	                        if (!toUnmount) {
	                            initialBase._component = null;
	                            recollectNodeTree(initialBase);
	                        }
	                    }
	                }
	                if (toUnmount) unmountComponent(toUnmount, base !== initialBase);
	                component.base = base;
	                if (base && !isChild) {
	                    var componentRef = component, t = component;
	                    while (t = t._parentComponent) (componentRef = t).base = base;
	                    base._component = componentRef;
	                    base._componentConstructor = componentRef.constructor;
	                }
	            }
	            if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip) {
	                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
	                if (options.afterUpdate) options.afterUpdate(component);
	            }
	            var fn, cb = component._renderCallbacks;
	            if (cb) while (fn = cb.pop()) fn.call(component);
	            if (!diffLevel && !isChild) flushMounts();
	        }
	    }
	    function buildComponentFromVNode(dom, vnode, context, mountAll) {
	        var c = dom && dom._component, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
	        while (c && !isOwner && (c = c._parentComponent)) isOwner = c.constructor === vnode.nodeName;
	        if (c && isOwner && (!mountAll || c._component)) {
	            setComponentProps(c, props, 3, context, mountAll);
	            dom = c.base;
	        } else {
	            if (c && !isDirectOwner) {
	                unmountComponent(c, !0);
	                dom = oldDom = null;
	            }
	            c = createComponent(vnode.nodeName, props, context);
	            if (dom && !c.nextBase) {
	                c.nextBase = dom;
	                oldDom = null;
	            }
	            setComponentProps(c, props, 1, context, mountAll);
	            dom = c.base;
	            if (oldDom && dom !== oldDom) {
	                oldDom._component = null;
	                recollectNodeTree(oldDom);
	            }
	        }
	        return dom;
	    }
	    function unmountComponent(component, remove) {
	        if (options.beforeUnmount) options.beforeUnmount(component);
	        var base = component.base;
	        component._disable = !0;
	        if (component.componentWillUnmount) component.componentWillUnmount();
	        component.base = null;
	        var inner = component._component;
	        if (inner) unmountComponent(inner, remove); else if (base) {
	            if (base[ATTR_KEY] && base[ATTR_KEY].ref) base[ATTR_KEY].ref(null);
	            component.nextBase = base;
	            if (remove) {
	                removeNode(base);
	                collectComponent(component);
	            }
	            removeOrphanedChildren(base.childNodes, !remove);
	        }
	        if (component.__ref) component.__ref(null);
	        if (component.componentDidUnmount) component.componentDidUnmount();
	    }
	    function Component(props, context) {
	        this._dirty = !0;
	        this.context = context;
	        this.props = props;
	        if (!this.state) this.state = {};
	    }
	    function render(vnode, parent, merge) {
	        return diff(merge, vnode, {}, !1, parent);
	    }
	    var options = {};
	    var stack = [];
	    var lcCache = {};
	    var toLowerCase = function(s) {
	        return lcCache[s] || (lcCache[s] = s.toLowerCase());
	    };
	    var resolved = 'undefined' != typeof Promise && Promise.resolve();
	    var defer = resolved ? function(f) {
	        resolved.then(f);
	    } : setTimeout;
	    var EMPTY = {};
	    var ATTR_KEY = 'undefined' != typeof Symbol ? Symbol.for('preactattr') : '__preactattr_';
	    var NON_DIMENSION_PROPS = {
	        boxFlex: 1,
	        boxFlexGroup: 1,
	        columnCount: 1,
	        fillOpacity: 1,
	        flex: 1,
	        flexGrow: 1,
	        flexPositive: 1,
	        flexShrink: 1,
	        flexNegative: 1,
	        fontWeight: 1,
	        lineClamp: 1,
	        lineHeight: 1,
	        opacity: 1,
	        order: 1,
	        orphans: 1,
	        strokeOpacity: 1,
	        widows: 1,
	        zIndex: 1,
	        zoom: 1
	    };
	    var NON_BUBBLING_EVENTS = {
	        blur: 1,
	        error: 1,
	        focus: 1,
	        load: 1,
	        resize: 1,
	        scroll: 1
	    };
	    var items = [];
	    var nodes = {};
	    var mounts = [];
	    var diffLevel = 0;
	    var isSvgMode = !1;
	    var components = {};
	    extend(Component.prototype, {
	        linkState: function(key, eventPath) {
	            var c = this._linkedStates || (this._linkedStates = {});
	            return c[key + eventPath] || (c[key + eventPath] = createLinkedState(this, key, eventPath));
	        },
	        setState: function(state, callback) {
	            var s = this.state;
	            if (!this.prevState) this.prevState = clone(s);
	            extend(s, isFunction(state) ? state(s, this.props) : state);
	            if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
	            enqueueRender(this);
	        },
	        forceUpdate: function() {
	            renderComponent(this, 2);
	        },
	        render: function() {}
	    });
	    exports.h = h;
	    exports.cloneElement = cloneElement;
	    exports.Component = Component;
	    exports.render = render;
	    exports.rerender = rerender;
	    exports.options = options;
	});


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(9);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(17);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(19);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(20);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(21);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(18);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2["default"];
	exports.combineReducers = _combineReducers2["default"];
	exports.bindActionCreators = _bindActionCreators2["default"];
	exports.applyMiddleware = _applyMiddleware2["default"];
	exports.compose = _compose2["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout.call(null, cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout.call(null, timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout.call(null, drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports["default"] = createStore;

	var _isPlainObject = __webpack_require__(10);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(15);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, initialState, enhancer) {
	  var _ref2;

	  if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = initialState;
	    initialState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, initialState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = initialState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2["default"])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */

	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2["default"]] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(11),
	    isHostObject = __webpack_require__(13),
	    isObjectLike = __webpack_require__(14);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object,
	 *  else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(12);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;

	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	var getPrototype = overArg(nativeGetPrototype, Object);

	module.exports = getPrototype;


/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Creates a function that invokes `func` with its first argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	module.exports = __webpack_require__(16)(global || window || this);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function symbolObservablePonyfill(root) {
		var result;
		var Symbol = root.Symbol;

		if (typeof Symbol === 'function') {
			if (Symbol.observable) {
				result = Symbol.observable;
			} else {
				result = Symbol('observable');
				Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports["default"] = combineReducers;

	var _createStore = __webpack_require__(9);

	var _isPlainObject = __webpack_require__(10);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(18);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2["default"])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key);
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action);
	      if (warningMessage) {
	        (0, _warning2["default"])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports["default"] = applyMiddleware;

	var _compose = __webpack_require__(21);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, initialState, enhancer) {
	      var store = createStore(reducer, initialState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  } else {
	    var _ret = function () {
	      var last = funcs[funcs.length - 1];
	      var rest = funcs.slice(0, -1);
	      return {
	        v: function v() {
	          return rest.reduceRight(function (composed, f) {
	            return f(composed);
	          }, last.apply(undefined, arguments));
	        }
	      };
	    }();

	    if (typeof _ret === "object") return _ret.v;
	  }
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getOwnPropertyDescriptor = __webpack_require__(23);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	var _extends2 = __webpack_require__(48);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(65);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(69);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(70);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(74);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(108);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _desc, _value, _class;

	var _preact = __webpack_require__(6);

	var _reduxUndo = __webpack_require__(116);

	var _decko = __webpack_require__(121);

	var _icons = __webpack_require__(122);

	var _icons2 = _interopRequireDefault(_icons);

	var _card = __webpack_require__(123);

	var _card2 = _interopRequireDefault(_card);

	var _scores = __webpack_require__(139);

	var _scores2 = _interopRequireDefault(_scores);

	var _resetButton = __webpack_require__(150);

	var _resetButton2 = _interopRequireDefault(_resetButton);

	var _button = __webpack_require__(151);

	var _button2 = _interopRequireDefault(_button);

	var _congrats = __webpack_require__(158);

	var _congrats2 = _interopRequireDefault(_congrats);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var CLASSES = __webpack_require__(166);
	__webpack_require__(167);

	var Game = (_class = function (_Component) {
	  (0, _inherits3.default)(Game, _Component);

	  function Game() {
	    (0, _classCallCheck3.default)(this, Game);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Game).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Game, [{
	    key: 'render',
	    value: function render() {
	      var store = this.context.store;

	      var state = store.getState();
	      var cards = state.cards;


	      var cardComponents = this._renderCards(cards.present.cards);

	      return (0, _preact.h)(
	        'div',
	        { className: CLASSES.game, 'data-component': 'game' },
	        (0, _preact.h)(_icons2.default, null),
	        (0, _preact.h)(
	          'div',
	          { className: CLASSES.game__inner },
	          (0, _preact.h)(
	            'div',
	            { className: CLASSES.game__right },
	            (0, _preact.h)(_scores2.default, { state: state }),
	            (0, _preact.h)(_resetButton2.default, { state: state })
	          ),
	          (0, _preact.h)(
	            'div',
	            { className: CLASSES.game__left },
	            (0, _preact.h)(_congrats2.default, { state: state }),
	            cardComponents
	          )
	        )
	      );
	    }
	  }, {
	    key: '_undo',
	    value: function _undo() {
	      var store = this.context.store;

	      store.dispatch(_reduxUndo.ActionCreators.undo());
	    }
	  }, {
	    key: '_redo',
	    value: function _redo() {
	      var store = this.context.store;

	      store.dispatch(_reduxUndo.ActionCreators.redo());
	    }
	  }, {
	    key: '_renderCards',
	    value: function _renderCards() {
	      var cards = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

	      var cardComponents = [];

	      for (var i = 0; i < cards.length; i++) {
	        var card = cards[i];
	        cardComponents.push((0, _preact.h)(_card2.default, (0, _extends3.default)({}, card, { id: i })));
	      }
	      return cardComponents;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var store = this.context.store;


	      store.subscribe(this.forceUpdate.bind(this));
	    }
	  }]);
	  return Game;
	}(_preact.Component), (_applyDecoratedDescriptor(_class.prototype, '_undo', [_decko.bind], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, '_undo'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, '_redo', [_decko.bind], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, '_redo'), _class.prototype)), _class);
	exports.default = Game;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(24), __esModule: true };

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(25);
	var $Object = __webpack_require__(4).Object;
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $Object.getOwnPropertyDescriptor(it, key);
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(26)
	  , $getOwnPropertyDescriptor = __webpack_require__(30).f;

	__webpack_require__(41)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(27)
	  , defined = __webpack_require__(29);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(28);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(31)
	  , createDesc     = __webpack_require__(32)
	  , toIObject      = __webpack_require__(26)
	  , toPrimitive    = __webpack_require__(33)
	  , has            = __webpack_require__(35)
	  , IE8_DOM_DEFINE = __webpack_require__(36)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(37) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(34);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(37) && !__webpack_require__(38)(function(){
	  return Object.defineProperty(__webpack_require__(39)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(38)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(34)
	  , document = __webpack_require__(40).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(42)
	  , core    = __webpack_require__(4)
	  , fails   = __webpack_require__(38);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(40)
	  , core      = __webpack_require__(4)
	  , ctx       = __webpack_require__(43)
	  , hide      = __webpack_require__(45)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(44);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(46)
	  , createDesc = __webpack_require__(32);
	module.exports = __webpack_require__(37) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(47)
	  , IE8_DOM_DEFINE = __webpack_require__(36)
	  , toPrimitive    = __webpack_require__(33)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(37) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(34);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(49);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(50), __esModule: true };

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(51);
	module.exports = __webpack_require__(4).Object.assign;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(42);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(52)});

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(53)
	  , gOPS     = __webpack_require__(63)
	  , pIE      = __webpack_require__(31)
	  , toObject = __webpack_require__(64)
	  , IObject  = __webpack_require__(27)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(38)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(54)
	  , enumBugKeys = __webpack_require__(62);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(35)
	  , toIObject    = __webpack_require__(26)
	  , arrayIndexOf = __webpack_require__(55)(false)
	  , IE_PROTO     = __webpack_require__(59)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(26)
	  , toLength  = __webpack_require__(56)
	  , toIndex   = __webpack_require__(58);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(57)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(57)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(60)('keys')
	  , uid    = __webpack_require__(61);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(40)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 63 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(29);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(66), __esModule: true };

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(67);
	module.exports = __webpack_require__(4).Object.getPrototypeOf;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(64)
	  , $getPrototypeOf = __webpack_require__(68);

	__webpack_require__(41)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(35)
	  , toObject    = __webpack_require__(64)
	  , IE_PROTO    = __webpack_require__(59)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(71);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(72), __esModule: true };

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(73);
	var $Object = __webpack_require__(4).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(42);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(37), 'Object', {defineProperty: __webpack_require__(46).f});

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(75);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(76);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(95);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(77), __esModule: true };

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(78);
	__webpack_require__(90);
	module.exports = __webpack_require__(94).f('iterator');

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(79)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(80)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(57)
	  , defined   = __webpack_require__(29);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(81)
	  , $export        = __webpack_require__(42)
	  , redefine       = __webpack_require__(82)
	  , hide           = __webpack_require__(45)
	  , has            = __webpack_require__(35)
	  , Iterators      = __webpack_require__(83)
	  , $iterCreate    = __webpack_require__(84)
	  , setToStringTag = __webpack_require__(88)
	  , getPrototypeOf = __webpack_require__(68)
	  , ITERATOR       = __webpack_require__(89)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(45);

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(85)
	  , descriptor     = __webpack_require__(32)
	  , setToStringTag = __webpack_require__(88)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(45)(IteratorPrototype, __webpack_require__(89)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(47)
	  , dPs         = __webpack_require__(86)
	  , enumBugKeys = __webpack_require__(62)
	  , IE_PROTO    = __webpack_require__(59)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(39)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(87).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(46)
	  , anObject = __webpack_require__(47)
	  , getKeys  = __webpack_require__(53);

	module.exports = __webpack_require__(37) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(40).document && document.documentElement;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(46).f
	  , has = __webpack_require__(35)
	  , TAG = __webpack_require__(89)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(60)('wks')
	  , uid        = __webpack_require__(61)
	  , Symbol     = __webpack_require__(40).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(91);
	var global        = __webpack_require__(40)
	  , hide          = __webpack_require__(45)
	  , Iterators     = __webpack_require__(83)
	  , TO_STRING_TAG = __webpack_require__(89)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(92)
	  , step             = __webpack_require__(93)
	  , Iterators        = __webpack_require__(83)
	  , toIObject        = __webpack_require__(26);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(80)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(89);

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(97);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(107);
	module.exports = __webpack_require__(4).Symbol;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(40)
	  , has            = __webpack_require__(35)
	  , DESCRIPTORS    = __webpack_require__(37)
	  , $export        = __webpack_require__(42)
	  , redefine       = __webpack_require__(82)
	  , META           = __webpack_require__(98).KEY
	  , $fails         = __webpack_require__(38)
	  , shared         = __webpack_require__(60)
	  , setToStringTag = __webpack_require__(88)
	  , uid            = __webpack_require__(61)
	  , wks            = __webpack_require__(89)
	  , wksExt         = __webpack_require__(94)
	  , wksDefine      = __webpack_require__(99)
	  , keyOf          = __webpack_require__(100)
	  , enumKeys       = __webpack_require__(101)
	  , isArray        = __webpack_require__(102)
	  , anObject       = __webpack_require__(47)
	  , toIObject      = __webpack_require__(26)
	  , toPrimitive    = __webpack_require__(33)
	  , createDesc     = __webpack_require__(32)
	  , _create        = __webpack_require__(85)
	  , gOPNExt        = __webpack_require__(103)
	  , $GOPD          = __webpack_require__(30)
	  , $DP            = __webpack_require__(46)
	  , $keys          = __webpack_require__(53)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(104).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(31).f  = $propertyIsEnumerable;
	  __webpack_require__(63).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(81)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(45)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(61)('meta')
	  , isObject = __webpack_require__(34)
	  , has      = __webpack_require__(35)
	  , setDesc  = __webpack_require__(46).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(38)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(40)
	  , core           = __webpack_require__(4)
	  , LIBRARY        = __webpack_require__(81)
	  , wksExt         = __webpack_require__(94)
	  , defineProperty = __webpack_require__(46).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(53)
	  , toIObject = __webpack_require__(26);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(53)
	  , gOPS    = __webpack_require__(63)
	  , pIE     = __webpack_require__(31);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(28);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(26)
	  , gOPN      = __webpack_require__(104).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(54)
	  , hiddenKeys = __webpack_require__(62).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 105 */
/***/ function(module, exports) {

	

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(99)('asyncIterator');

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(99)('observable');

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(109);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(113);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(75);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(111);
	module.exports = __webpack_require__(4).Object.setPrototypeOf;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(42);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(112).set});

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(34)
	  , anObject = __webpack_require__(47);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(43)(Function.call, __webpack_require__(30).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(115);
	var $Object = __webpack_require__(4).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(42)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(85)});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _actions = __webpack_require__(117);

	Object.defineProperty(exports, 'ActionTypes', {
	  enumerable: true,
	  get: function get() {
	    return _actions.ActionTypes;
	  }
	});
	Object.defineProperty(exports, 'ActionCreators', {
	  enumerable: true,
	  get: function get() {
	    return _actions.ActionCreators;
	  }
	});

	var _helpers = __webpack_require__(118);

	Object.defineProperty(exports, 'parseActions', {
	  enumerable: true,
	  get: function get() {
	    return _helpers.parseActions;
	  }
	});
	Object.defineProperty(exports, 'isHistory', {
	  enumerable: true,
	  get: function get() {
	    return _helpers.isHistory;
	  }
	});
	Object.defineProperty(exports, 'distinctState', {
	  enumerable: true,
	  get: function get() {
	    return _helpers.distinctState;
	  }
	});
	Object.defineProperty(exports, 'includeAction', {
	  enumerable: true,
	  get: function get() {
	    return _helpers.includeAction;
	  }
	});
	Object.defineProperty(exports, 'excludeAction', {
	  enumerable: true,
	  get: function get() {
	    return _helpers.excludeAction;
	  }
	});
	Object.defineProperty(exports, 'combineFilters', {
	  enumerable: true,
	  get: function get() {
	    return _helpers.combineFilters;
	  }
	});

	var _reducer = __webpack_require__(119);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_reducer).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 117 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ActionTypes = exports.ActionTypes = {
	  UNDO: '@@redux-undo/UNDO',
	  REDO: '@@redux-undo/REDO',
	  JUMP_TO_FUTURE: '@@redux-undo/JUMP_TO_FUTURE',
	  JUMP_TO_PAST: '@@redux-undo/JUMP_TO_PAST',
	  JUMP: '@@redux-undo/JUMP',
	  CLEAR_HISTORY: '@@redux-undo/CLEAR_HISTORY'
	};

	var ActionCreators = exports.ActionCreators = {
	  undo: function undo() {
	    return { type: ActionTypes.UNDO };
	  },
	  redo: function redo() {
	    return { type: ActionTypes.REDO };
	  },
	  jumpToFuture: function jumpToFuture(index) {
	    return { type: ActionTypes.JUMP_TO_FUTURE, index: index };
	  },
	  jumpToPast: function jumpToPast(index) {
	    return { type: ActionTypes.JUMP_TO_PAST, index: index };
	  },
	  jump: function jump(index) {
	    return { type: ActionTypes.JUMP, index: index };
	  },
	  clearHistory: function clearHistory() {
	    return { type: ActionTypes.CLEAR_HISTORY };
	  }
	};

/***/ },
/* 118 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.parseActions = parseActions;
	exports.isHistory = isHistory;
	exports.distinctState = distinctState;
	exports.includeAction = includeAction;
	exports.excludeAction = excludeAction;
	exports.combineFilters = combineFilters;
	// parseActions helper: takes a string (or array)
	//                      and makes it an array if it isn't yet
	function parseActions(rawActions) {
	  var defaultValue = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

	  if (Array.isArray(rawActions)) {
	    return rawActions;
	  } else if (typeof rawActions === 'string') {
	    return [rawActions];
	  }
	  return defaultValue;
	}

	// isHistory helper: check for a valid history object
	function isHistory(history) {
	  return typeof history.present !== 'undefined' && typeof history.future !== 'undefined' && typeof history.past !== 'undefined' && Array.isArray(history.future) && Array.isArray(history.past);
	}

	// distinctState helper: deprecated, does nothing in latest beta
	/* istanbul ignore next */
	function distinctState() {
	  console.warn('distinctState is deprecated in beta4 and newer. ' + 'The distinctState behavior is now default, which means only ' + 'actions resulting in a new state are recorded. ' + 'See https://github.com/omnidan/redux-undo#filtering-actions ' + 'for more details.');
	  return function () {
	    return true;
	  };
	}

	// includeAction helper: whitelist actions to be added to the history
	function includeAction(rawActions) {
	  var actions = parseActions(rawActions);
	  return function (action) {
	    return actions.indexOf(action.type) >= 0;
	  };
	}

	// excludeAction helper: blacklist actions from being added to the history
	function excludeAction(rawActions) {
	  var actions = parseActions(rawActions);
	  return function (action) {
	    return actions.indexOf(action.type) < 0;
	  };
	}

	// combineFilters helper: combine multiple filters to one
	function combineFilters() {
	  for (var _len = arguments.length, filters = Array(_len), _key = 0; _key < _len; _key++) {
	    filters[_key] = arguments[_key];
	  }

	  return filters.reduce(function (prev, curr) {
	    return function (action, currentState, previousHistory) {
	      return prev(action, currentState, previousHistory) && curr(action, currentState, previousHistory);
	    };
	  }, function () {
	    return true;
	  });
	}

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = undoable;

	var _debug = __webpack_require__(120);

	var debug = _interopRequireWildcard(_debug);

	var _actions = __webpack_require__(117);

	var _helpers = __webpack_require__(118);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	// length: get length of history
	function length(history) {
	  var past = history.past;
	  var future = history.future;

	  return past.length + 1 + future.length;
	}

	// insert: insert `state` into history, which means adding the current state
	//         into `past`, setting the new `state` as `present` and erasing
	//         the `future`.
	function insert(history, state, limit) {
	  debug.log('inserting', state);
	  debug.log('new free: ', limit - length(history));

	  var past = history.past;
	  var present = history.present;

	  var historyOverflow = limit && length(history) >= limit;

	  var newPast = history.wasFiltered ? past // if the last `present` was filtered, don't store it in the history
	  : [].concat(_toConsumableArray(past.slice(historyOverflow ? 1 : 0)), [present]);

	  return {
	    past: newPast,
	    present: state,
	    future: []
	  };
	}

	// undo: go back to the previous point in history
	function undo(history) {
	  var past = history.past;
	  var present = history.present;
	  var future = history.future;


	  if (past.length <= 0) return history;

	  var newFuture = history.wasFiltered ? future // if the last `present` was filtered, don't store it in the future
	  : [present].concat(_toConsumableArray(future));

	  return {
	    past: past.slice(0, past.length - 1), // remove last element from past
	    present: past[past.length - 1], // set element as new present
	    future: newFuture
	  };
	}

	// redo: go to the next point in history
	function redo(history) {
	  var past = history.past;
	  var present = history.present;
	  var future = history.future;


	  if (future.length <= 0) return history;

	  return {
	    future: future.slice(1, future.length), // remove element from future
	    present: future[0], // set element as new present
	    past: [].concat(_toConsumableArray(past), [present // old present state is in the past now
	    ])
	  };
	}

	// jumpToFuture: jump to requested index in future history
	function jumpToFuture(history, index) {
	  if (index === 0) return redo(history);
	  if (index < 0 || index >= history.future.length) return history;

	  var past = history.past;
	  var present = history.present;
	  var future = history.future;


	  return {
	    future: future.slice(index + 1),
	    present: future[index],
	    past: past.concat([present]).concat(future.slice(0, index))
	  };
	}

	// jumpToPast: jump to requested index in past history
	function jumpToPast(history, index) {
	  if (index === history.past.length - 1) return undo(history);
	  if (index < 0 || index >= history.past.length) return history;

	  var past = history.past;
	  var present = history.present;
	  var future = history.future;


	  return {
	    future: past.slice(index + 1).concat([present]).concat(future),
	    present: past[index],
	    past: past.slice(0, index)
	  };
	}

	// jump: jump n steps in the past or forward
	function jump(history, n) {
	  if (n > 0) return jumpToFuture(history, n - 1);
	  if (n < 0) return jumpToPast(history, history.past.length + n);
	  return history;
	}

	// createHistory
	function createHistory(state) {
	  return {
	    past: [],
	    present: state,
	    future: []
	  };
	}

	// redux-undo higher order reducer
	function undoable(reducer) {
	  var rawConfig = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  debug.set(rawConfig.debug);

	  var config = {
	    initTypes: (0, _helpers.parseActions)(rawConfig.initTypes, ['@@redux-undo/INIT']),
	    limit: rawConfig.limit,
	    filter: rawConfig.filter || function () {
	      return true;
	    },
	    undoType: rawConfig.undoType || _actions.ActionTypes.UNDO,
	    redoType: rawConfig.redoType || _actions.ActionTypes.REDO,
	    jumpToPastType: rawConfig.jumpToPastType || _actions.ActionTypes.JUMP_TO_PAST,
	    jumpToFutureType: rawConfig.jumpToFutureType || _actions.ActionTypes.JUMP_TO_FUTURE,
	    jumpType: rawConfig.jumpType || _actions.ActionTypes.JUMP,
	    clearHistoryType: rawConfig.clearHistoryType || _actions.ActionTypes.CLEAR_HISTORY
	  };

	  return function () {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? config.history : arguments[0];
	    var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    debug.start(action, state);

	    var history = state;
	    if (!config.history) {
	      debug.log('history is uninitialized');

	      if (state === undefined) {
	        history = createHistory(reducer(state, {}));
	        debug.log('do not initialize on probe actions');
	      } else if ((0, _helpers.isHistory)(state)) {
	        history = config.history = state;
	        debug.log('initialHistory initialized: initialState is a history', config.history);
	      } else {
	        history = config.history = createHistory(state);
	        debug.log('initialHistory initialized: initialState is not a history', config.history);
	      }
	    }

	    var res = void 0;
	    switch (action.type) {
	      case undefined:
	        return history;

	      case config.undoType:
	        res = undo(history);
	        debug.log('perform undo');
	        debug.end(res);
	        return res;

	      case config.redoType:
	        res = redo(history);
	        debug.log('perform redo');
	        debug.end(res);
	        return res;

	      case config.jumpToPastType:
	        res = jumpToPast(history, action.index);
	        debug.log('perform jumpToPast to ' + action.index);
	        debug.end(res);
	        return res;

	      case config.jumpToFutureType:
	        res = jumpToFuture(history, action.index);
	        debug.log('perform jumpToFuture to ' + action.index);
	        debug.end(res);
	        return res;

	      case config.jumpType:
	        res = jump(history, action.index);
	        debug.log('perform jump to ' + action.index);
	        debug.end(res);
	        return res;

	      case config.clearHistoryType:
	        res = createHistory(history.present);
	        debug.log('perform clearHistory');
	        debug.end(res);
	        return res;

	      default:
	        res = reducer(history.present, action);

	        if (config.initTypes.some(function (actionType) {
	          return actionType === action.type;
	        })) {
	          debug.log('reset history due to init action');
	          debug.end(config.history);
	          return config.history;
	        }

	        if (history.present === res) {
	          // Don't handle this action. Do not call debug.end here,
	          // because this action should not produce side effects to the console
	          return history;
	        }

	        if (typeof config.filter === 'function' && !config.filter(action, res, history)) {
	          var nextState = _extends({}, history, {
	            wasFiltered: true,
	            present: res
	          });
	          debug.log('filter prevented action, not storing it');
	          debug.end(nextState);
	          return nextState;
	        }

	        // insert before filtering because the previous action might not have
	        // been filtered and `insert` checks for `wasFiltered` anyway
	        history = insert(history, res, config.limit);

	        debug.log('inserted new state into history');
	        debug.end(history);
	        return history;
	    }
	  };
	}

/***/ },
/* 120 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var __DEBUG__ = void 0;
	var displayBuffer = void 0;

	var colors = {
	  prevState: '#9E9E9E',
	  action: '#03A9F4',
	  nextState: '#4CAF50'
	};

	/* istanbul ignore next: debug messaging is not tested */
	function initBuffer() {
	  displayBuffer = {
	    header: [],
	    prev: [],
	    action: [],
	    next: [],
	    msgs: []
	  };
	}

	/* istanbul ignore next: debug messaging is not tested */
	function printBuffer() {
	  var _displayBuffer = displayBuffer;
	  var header = _displayBuffer.header;
	  var prev = _displayBuffer.prev;
	  var next = _displayBuffer.next;
	  var action = _displayBuffer.action;
	  var msgs = _displayBuffer.msgs;

	  if (console.group) {
	    var _console, _console2, _console3, _console4, _console5;

	    (_console = console).groupCollapsed.apply(_console, _toConsumableArray(header));
	    (_console2 = console).log.apply(_console2, _toConsumableArray(prev));
	    (_console3 = console).log.apply(_console3, _toConsumableArray(action));
	    (_console4 = console).log.apply(_console4, _toConsumableArray(next));
	    (_console5 = console).log.apply(_console5, _toConsumableArray(msgs));
	    console.groupEnd();
	  } else {
	    var _console6, _console7, _console8, _console9, _console10;

	    (_console6 = console).log.apply(_console6, _toConsumableArray(header));
	    (_console7 = console).log.apply(_console7, _toConsumableArray(prev));
	    (_console8 = console).log.apply(_console8, _toConsumableArray(action));
	    (_console9 = console).log.apply(_console9, _toConsumableArray(next));
	    (_console10 = console).log.apply(_console10, _toConsumableArray(msgs));
	  }
	}

	/* istanbul ignore next: debug messaging is not tested */
	function colorFormat(text, color, obj) {
	  return ['%c' + text, 'color: ' + color + '; font-weight: bold', obj];
	}

	/* istanbul ignore next: debug messaging is not tested */
	function start(action, state) {
	  initBuffer();
	  if (__DEBUG__) {
	    if (console.group) {
	      displayBuffer.header = ['%credux-undo', 'font-style: italic', 'action', action.type];
	      displayBuffer.action = colorFormat('action', colors.action, action);
	      displayBuffer.prev = colorFormat('prev history', colors.prevState, state);
	    } else {
	      displayBuffer.header = ['redux-undo action', action.type];
	      displayBuffer.action = ['action', action];
	      displayBuffer.prev = ['prev history', state];
	    }
	  }
	}

	/* istanbul ignore next: debug messaging is not tested */
	function end(nextState) {
	  if (__DEBUG__) {
	    if (console.group) {
	      displayBuffer.next = colorFormat('next history', colors.nextState, nextState);
	    } else {
	      displayBuffer.next = ['next history', nextState];
	    }
	    printBuffer();
	  }
	}

	/* istanbul ignore next: debug messaging is not tested */
	function log() {
	  if (__DEBUG__) {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    displayBuffer.msgs = displayBuffer.msgs.concat([].concat(args, ['\n']));
	  }
	}

	/* istanbul ignore next: debug messaging is not tested */
	function set(debug) {
	  __DEBUG__ = debug;
	}

	exports.set = set;
	exports.start = start;
	exports.end = end;
	exports.log = log;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(global,factory){if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else if(typeof exports !== 'undefined'){factory(exports);}else {var mod={exports:{}};factory(mod.exports);global.decko = mod.exports;}})(this,function(exports){'use strict';exports.__esModule = true;var EMPTY={};var HOP=Object.prototype.hasOwnProperty;var fns={memoize:function memoize(fn){var opt=arguments.length <= 1 || arguments[1] === undefined?EMPTY:arguments[1];var cache=opt.cache || {};return function(){for(var _len=arguments.length,a=Array(_len),_key=0;_key < _len;_key++) {a[_key] = arguments[_key];}var k=String(a[0]);if(opt.caseSensitive === false)k = k.toLowerCase();return HOP.call(cache,k)?cache[k]:cache[k] = fn.apply(this,a);};},debounce:function debounce(fn,opts){if(typeof opts === 'function'){var p=fn;fn = opts;opts = p;}var delay=opts && opts.delay || opts || 0,args=undefined,context=undefined,timer=undefined;return function(){for(var _len2=arguments.length,a=Array(_len2),_key2=0;_key2 < _len2;_key2++) {a[_key2] = arguments[_key2];}args = a;context = this;if(!timer)timer = setTimeout(function(){fn.apply(context,args);args = context = timer = null;},delay);};},bind:function bind(target,key,_ref){var fn=_ref.value;return {configurable:true,get:function get(){var value=fn.bind(this);Object.defineProperty(this,key,{value:value,configurable:true,writable:true});return value;}};}};var memoize=multiMethod(fns.memoize),debounce=multiMethod(fns.debounce),bind=multiMethod(function(f,c){return f.bind(c);},function(){return fns.bind;});exports.memoize = memoize;exports.debounce = debounce;exports.bind = bind;exports['default'] = {memoize:memoize,debounce:debounce,bind:bind};function multiMethod(inner,deco){deco = deco || inner.decorate || decorator(inner);var d=deco();return function(){for(var _len3=arguments.length,args=Array(_len3),_key3=0;_key3 < _len3;_key3++) {args[_key3] = arguments[_key3];}var l=args.length;return (l < 2?deco:l > 2?d:inner).apply(undefined,args);};}function decorator(fn){return function(opt){return typeof opt === 'function'?fn(opt):function(target,key,desc){desc.value = fn(desc.value,opt,target,key,desc);};};}});



/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _preact=__webpack_require__(6);var Icons=function Icons(){return(0,_preact.h)('div',{dangerouslySetInnerHTML:{__html:'<svg height="0" version="1.1" xmlns="http://www.w3.org/2000/svg" style="position:absolute; margin-left: -100%; width:0; height:0;" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <g id="pan-shape">\n        <g transform="translate(3.000000, 0.000000)">\n          <path d="M14.3875969,6.52307692 C15.379845,6.52307692 16.248062,5.72307692 16.248062,4.67692308 C16.248062,3.69230769 15.4418605,2.83076923 14.3875969,2.83076923 C13.3953488,2.83076923 12.5271318,3.63076923 12.5271318,4.67692308 C12.5271318,5.72307692 13.3953488,6.52307692 14.3875969,6.52307692 L14.3875969,6.52307692 L14.3875969,6.52307692 Z M14.3875969,3.87692308 C14.8217054,3.87692308 15.1937984,4.24615385 15.1937984,4.67692308 C15.1937984,5.10769231 14.8217054,5.47692308 14.3875969,5.47692308 C13.9534884,5.47692308 13.5813953,5.10769231 13.5813953,4.67692308 C13.5193798,4.24615385 13.8914729,3.87692308 14.3875969,3.87692308 L14.3875969,3.87692308 L14.3875969,3.87692308 Z"></path>\n          <path d="M17.9844961,1.78461538 C17.9844961,2.76923077 18.7906977,3.56923077 19.7829457,3.56923077 C20.7751938,3.56923077 21.5813953,2.76923077 21.5813953,1.78461538 C21.5813953,0.8 20.7751938,0 19.7829457,0 C18.7906977,0 17.9844961,0.861538462 17.9844961,1.78461538 L17.9844961,1.78461538 L17.9844961,1.78461538 Z M20.5891473,1.78461538 C20.5891473,2.21538462 20.2170543,2.58461538 19.7829457,2.58461538 C19.3488372,2.58461538 18.9767442,2.21538462 18.9767442,1.78461538 C18.9767442,1.35384615 19.3488372,0.984615385 19.7829457,0.984615385 C20.2170543,0.984615385 20.5891473,1.35384615 20.5891473,1.78461538 L20.5891473,1.78461538 L20.5891473,1.78461538 Z"></path>\n          <path d="M6.07751938,27.0153846 C5.95348837,27.0153846 5.82945736,26.9538462 5.76744186,26.8923077 C5.70542636,26.8307692 4.58914729,25.9076923 3.72093023,24.2461538 C3.59689922,24 3.65891473,23.6923077 3.96899225,23.5692308 C4.21705426,23.4461538 4.52713178,23.5076923 4.65116279,23.8153846 C5.39534884,25.2307692 6.4496124,26.1538462 6.4496124,26.1538462 C6.69767442,26.3384615 6.69767442,26.6461538 6.51162791,26.8923077 C6.3875969,26.9538462 6.26356589,27.0153846 6.07751938,27.0153846 L6.07751938,27.0153846 Z"></path>\n          <path d="M7.87596899,28.0615385 C7.81395349,28.0615385 7.68992248,28.0615385 7.62790698,28 L7.25581395,27.7538462 C7.00775194,27.6307692 6.88372093,27.2615385 7.06976744,27.0153846 C7.19379845,26.7692308 7.50387597,26.6461538 7.81395349,26.8307692 L8.18604651,27.0769231 C8.43410853,27.2 8.55813953,27.5692308 8.37209302,27.8153846 C8.24806202,28 8.0620155,28.0615385 7.87596899,28.0615385 L7.87596899,28.0615385 Z"></path>\n          <path d="M26.4186047,18.6461538 C26.4186047,16.4307692 25.8604651,14.2769231 24.8062016,12.3692308 L24.9302326,12.3692308 C25.5503876,12.3692308 26.0465116,11.8769231 26.0465116,11.2615385 L26.0465116,9.84615385 C26.0465116,9.23076923 25.5503876,8.73846154 24.9302326,8.73846154 L21.0232558,8.73846154 C21.0852713,8.12307692 21.0852713,7.44615385 20.4031008,6.70769231 C19.9069767,6.09230769 19.2868217,5.72307692 18.2945736,5.72307692 C17.0542636,5.72307692 16.0620155,6.52307692 15.751938,7.63076923 C15.4418605,7.44615385 15.1317829,7.26153846 14.6356589,7.26153846 C13.7674419,7.26153846 13.0232558,7.87692308 12.7131783,8.73846154 L9.30232558,8.73846154 L2.60465116,2.33846154 C2.35658915,2.09230769 1.98449612,1.90769231 1.6124031,1.90769231 C1.24031008,1.90769231 0.868217054,2.09230769 0.558139535,2.33846154 L0.558139535,2.33846154 C-1.74582571e-14,2.89230769 -1.74582571e-14,3.81538462 0.620155039,4.36923077 L5.14728682,8.73846154 L1.5503876,8.73846154 C0.930232558,8.73846154 0.434108527,9.23076923 0.434108527,9.84615385 L0.434108527,11.2615385 C0.434108527,11.8769231 0.930232558,12.3692308 1.5503876,12.3692308 L1.6744186,12.3692308 C0.620155039,14.2769231 0.0620155039,16.4307692 0.0620155039,18.6461538 C0.0620155039,20.4923077 0.434108527,22.2769231 1.17829457,23.9384615 C1.86046512,25.4769231 2.85271318,26.8307692 4.03100775,28 L3.84496124,31.0153846 C3.78294574,31.6307692 4.46511628,32.0615385 5.02325581,31.7538462 L7.50387597,30.4615385 C9.30232558,31.3230769 11.1627907,31.6923077 13.1472868,31.6923077 C15.1317829,31.6923077 16.9922481,31.2615385 18.7906977,30.4615385 L21.2713178,31.7538462 C21.8294574,32.0615385 22.5116279,31.6307692 22.4496124,31.0153846 L22.2635659,28.0615385 C23.503876,26.8923077 24.496124,25.5384615 25.1782946,23.9384615 C26.0465116,22.3384615 26.4186047,20.4923077 26.4186047,18.6461538 L26.4186047,18.6461538 Z M18.2945736,6.83076923 C19.1627907,6.83076923 19.9069767,7.56923077 19.9069767,8.43076923 C19.9069767,8.55384615 19.9069767,8.67692308 19.8449612,8.73846154 L16.744186,8.73846154 C16.744186,8.61538462 16.6821705,8.49230769 16.6821705,8.43076923 C16.6821705,7.56923077 17.4263566,6.83076923 18.2945736,6.83076923 L18.2945736,6.83076923 Z M14.6356589,8.24615385 C15.0697674,8.24615385 15.379845,8.49230769 15.627907,8.8 L13.6434109,8.8 C13.8914729,8.43076923 14.2015504,8.24615385 14.6356589,8.24615385 L14.6356589,8.24615385 Z M1.36434109,3.56923077 C1.24031008,3.44615385 1.24031008,3.26153846 1.36434109,3.13846154 L1.36434109,3.13846154 C1.42635659,3.07692308 1.48837209,3.01538462 1.6124031,3.01538462 C1.6744186,3.01538462 1.79844961,3.01538462 1.86046512,3.07692308 L7.68992248,8.73846154 L6.75968992,8.73846154 L1.36434109,3.56923077 L1.36434109,3.56923077 Z M1.5503876,11.2615385 L1.5503876,9.90769231 L24.8682171,9.90769231 L24.8682171,11.2615385 L1.5503876,11.2615385 L1.5503876,11.2615385 Z M10.6666667,16.3076923 L10.4186047,16.3076923 C9.92248062,16.3076923 9.5503876,16.6769231 9.5503876,17.1692308 C8.24806202,16.8615385 7.06976744,16.4307692 6.07751938,15.8153846 C4.46511628,14.8307692 3.53488372,13.6615385 3.28682171,12.3692308 L23.255814,12.3692308 C23.0697674,13.6615385 22.0775194,14.8923077 20.4651163,15.8153846 C19.6589147,16.3076923 18.7286822,16.6769231 17.7364341,16.9846154 C17.4883721,17.0461538 17.2403101,17.1076923 16.9922481,17.1692308 C16.9922481,16.6769231 16.620155,16.3076923 16.124031,16.3076923 L10.6666667,16.3076923 L10.6666667,16.3076923 Z M15.875969,17.4153846 L15.875969,18.8923077 L10.6666667,18.8923077 L10.6666667,17.4153846 L15.875969,17.4153846 L15.875969,17.4153846 Z M21.4573643,27.4461538 L21.2713178,27.6307692 L21.3953488,30.5230769 L18.9147287,29.2307692 L18.6046512,29.3538462 C16.9302326,30.2153846 15.1317829,30.5846154 13.2093023,30.5846154 C11.2868217,30.5846154 9.48837209,30.1538462 7.81395349,29.2923077 L7.56589147,29.1692308 L5.02325581,30.4615385 L5.20930233,27.5076923 L5.02325581,27.3230769 C3.84496124,26.2153846 2.85271318,24.9230769 2.23255814,23.4461538 C1.5503876,21.9076923 1.17829457,20.3076923 1.17829457,18.5846154 C1.17829457,16.7384615 1.6124031,14.9538462 2.41860465,13.3538462 C2.91472868,14.6461538 3.96899225,15.8153846 5.51937984,16.7384615 C6.69767442,17.4153846 8.0620155,17.9692308 9.5503876,18.2769231 L9.5503876,19.0769231 C9.5503876,19.5692308 9.92248062,19.9384615 10.4186047,19.9384615 L16.124031,19.9384615 C16.620155,19.9384615 16.9922481,19.5692308 16.9922481,19.0769231 L16.9922481,18.2769231 C17.1162791,18.2153846 17.3023256,18.2153846 17.4263566,18.1538462 C17.8604651,18.0307692 18.2325581,17.9076923 18.6666667,17.7846154 C19.5348837,17.4769231 20.3410853,17.1076923 21.0232558,16.6769231 C22.5736434,15.7538462 23.627907,14.5846154 24.124031,13.2923077 C24.9302326,14.8923077 25.3643411,16.6769231 25.3643411,18.5230769 C25.3643411,20.2461538 24.9922481,21.8461538 24.3100775,23.3846154 C23.5658915,25.0461538 22.6356589,26.3384615 21.4573643,27.4461538 L21.4573643,27.4461538 Z"></path>\n        </g>\n      </g>\n      <g id="coffin-shape">\n        <path d="M5.12307692,8.36923077 L5.12307692,8.36923077 L5.12307692,8.43076923 L5.12307692,8.43076923 L9.30769231,31.0153846 C9.36923077,31.2615385 9.55384615,31.4461538 9.8,31.4461538 L22.2923077,31.4461538 C22.5384615,31.4461538 22.7846154,31.2615385 22.7846154,31.0153846 L26.9692308,8.43076923 C26.9692308,8.30769231 26.9692308,8.18461538 26.9076923,8.12307692 L22.7846154,0.8 C22.7230769,0.615384615 22.5384615,0.553846154 22.3538462,0.553846154 L9.8,0.553846154 C9.61538462,0.553846154 9.43076923,0.676923077 9.36923077,0.8 L5.18461538,8.12307692 C5.18461538,8.12307692 5.18461538,8.18461538 5.12307692,8.18461538 L5.12307692,8.18461538 L5.12307692,8.24615385 L5.12307692,8.24615385 C5.12307692,8.30769231 5.12307692,8.30769231 5.12307692,8.36923077 L5.12307692,8.36923077 L5.12307692,8.36923077 L5.12307692,8.36923077 Z M10.1692308,1.53846154 L13.1230769,1.53846154 L9.55384615,7.87692308 L6.6,7.87692308 L10.1692308,1.53846154 L10.1692308,1.53846154 Z M10.3538462,8.43076923 L14.2923077,1.53846154 L21.9846154,1.53846154 L25.9230769,8.43076923 L21.8615385,30.4615385 L14.4153846,30.4615385 L10.3538462,8.43076923 L10.3538462,8.43076923 Z M13.3692308,30.4615385 L10.2923077,30.4615385 L6.29230769,8.86153846 L9.36923077,8.86153846 L13.3692308,30.4615385 L13.3692308,30.4615385 Z"></path>\n        <path d="M14.1692308,8.55384615 C13.8615385,8.55384615 13.6769231,8.8 13.6769231,9.04615385 C13.6769231,9.29230769 13.9230769,9.53846154 14.1692308,9.53846154 L17.6153846,9.53846154 L17.6153846,24.6769231 C17.6153846,24.9230769 17.8615385,25.1692308 18.1076923,25.1692308 C18.4153846,25.1692308 18.6,24.9230769 18.6,24.6769231 L18.6,9.53846154 L22.0461538,9.53846154 C22.3538462,9.53846154 22.5384615,9.29230769 22.5384615,9.04615385 C22.5384615,8.8 22.2923077,8.55384615 22.0461538,8.55384615 L18.6,8.55384615 L18.6,5.04615385 C18.6,4.8 18.3538462,4.55384615 18.1076923,4.55384615 C17.8,4.55384615 17.6153846,4.8 17.6153846,5.04615385 L17.6153846,8.55384615 L14.1692308,8.55384615 L14.1692308,8.55384615 L14.1692308,8.55384615 Z"></path>\n        <path d="M18.1692308,25.8461538 C17.8615385,25.8461538 17.6153846,26.0923077 17.6153846,26.3384615 L17.6153846,27.0769231 C17.6153846,27.3846154 17.8615385,27.5692308 18.1692308,27.5692308 C18.4769231,27.5692308 18.7230769,27.3230769 18.7230769,27.0769231 L18.7230769,26.4 C18.6615385,26.0923077 18.4769231,25.8461538 18.1692308,25.8461538 L18.1692308,25.8461538 L18.1692308,25.8461538 Z"></path>\n      </g>\n      <g id="vampire-shape">\n        <g transform="translate(1.000000, 0.000000)">\n          <path d="M16.190901,13.2306173 L15.223372,13.2306173 L15.4871365,13.0488889 C15.6205888,12.9568395 15.7002676,12.8043457 15.7002676,12.6415802 L15.7002676,9.30488889 C15.7002676,9.0322963 15.4804639,8.81106173 15.2096343,8.81106173 C14.9388046,8.81106173 14.7190009,9.0322963 14.7190009,9.30488889 L14.7190009,12.3812346 L13.3621053,13.3171358 C13.1850847,13.4396049 13.1073684,13.664 13.1709545,13.8706173 C13.2345406,14.0772346 13.4245138,14.2182716 13.6396075,14.2182716 L16.190901,14.2182716 C16.4617306,14.2182716 16.6815343,13.997037 16.6815343,13.7244444 C16.6815343,13.4518519 16.4617306,13.2306173 16.190901,13.2306173 L16.190901,13.2306173 Z"></path>\n          <path d="M19.2088849,6.90962963 C19.4797145,6.90962963 19.6995183,6.68839506 19.6995183,6.41580247 C19.6995183,6.14320988 19.4797145,5.92197531 19.2088849,5.92197531 C17.5042284,5.92197531 16.1178947,7.31733333 16.1178947,9.03308642 C16.1178947,9.30567901 16.3376985,9.52691358 16.6085281,9.52691358 C16.8793577,9.52691358 17.0991615,9.30567901 17.0991615,9.03308642 C17.0991615,7.86212346 18.0458876,6.90962963 19.2088849,6.90962963 L19.2088849,6.90962963 Z"></path>\n          <path d="M13.6647279,9.03308642 C13.6647279,7.31733333 12.2783943,5.92197531 10.5737377,5.92197531 C10.3029081,5.92197531 10.0831044,6.14320988 10.0831044,6.41580247 C10.0831044,6.68839506 10.3029081,6.90962963 10.5737377,6.90962963 C11.7371276,6.90962963 12.6834612,7.86212346 12.6834612,9.03308642 C12.6834612,9.30567901 12.9032649,9.52691358 13.1740946,9.52691358 C13.4449242,9.52691358 13.6647279,9.30607407 13.6647279,9.03308642 L13.6647279,9.03308642 Z"></path>\n          <ellipse cx="11.3465834" cy="9.56404938" rx="1.01816236" ry="1.02479012"></ellipse>\n          <ellipse cx="18.4364318" cy="9.56404938" rx="1.01816236" ry="1.02479012"></ellipse>\n          <path d="M20.0284389,9.67071605 C20.0284389,10.6374321 19.2473506,11.424 18.2864942,11.424 C18.0156646,11.424 17.7958608,11.6452346 17.7958608,11.9178272 C17.7958608,12.1904198 18.0156646,12.4116543 18.2864942,12.4116543 C19.7878323,12.4116543 21.0097056,11.1822222 21.0097056,9.67071605 C21.0097056,9.39812346 20.7899019,9.17688889 20.5190723,9.17688889 C20.2482426,9.17688889 20.0284389,9.39812346 20.0284389,9.67071605 L20.0284389,9.67071605 Z"></path>\n          <path d="M11.5436218,11.4243951 C10.5831579,11.4243951 9.80167707,10.6378272 9.80167707,9.67111111 C9.80167707,9.39851852 9.58187333,9.17728395 9.31104371,9.17728395 C9.04021409,9.17728395 8.82041035,9.39851852 8.82041035,9.67111111 C8.82041035,11.1826173 10.0418912,12.4120494 11.5436218,12.4120494 C11.8144514,12.4120494 12.0342551,12.1908148 12.0342551,11.9182222 C12.0342551,11.6456296 11.8148439,11.4243951 11.5436218,11.4243951 L11.5436218,11.4243951 Z"></path>\n          <path d="M24.9163247,22.3952593 C27.1339875,20.2330864 29.2707939,18.886321 29.3010169,18.867358 C29.4281891,18.7879506 29.5125781,18.6544198 29.5298483,18.5042963 C29.5471186,18.3545679 29.4957003,18.2048395 29.3897235,18.0985679 C27.9684567,16.6680494 26.3505442,15.4848395 24.581124,14.5714568 C25.4791793,14.5647407 26.1484032,13.7817284 26.222587,13.6920494 C26.2367172,13.6746667 26.2437823,13.6533333 26.255165,13.6343704 C26.2681178,13.612642 26.281463,13.593284 26.2916682,13.5699753 C26.3057984,13.5363951 26.313256,13.5016296 26.3195361,13.465679 C26.3238537,13.4415802 26.3305263,13.4198519 26.3317038,13.394963 C26.3317038,13.388642 26.3348439,13.3831111 26.3348439,13.3767901 L26.3348439,7.99604938 C26.3348439,7.80523457 26.2253345,7.63101235 26.0538091,7.54962963 C25.8818912,7.46745679 25.6797502,7.49274074 25.5325602,7.61441975 L24.0861731,8.81145679 C23.8310437,5.21165432 21.5234969,2.17560494 18.3363426,0.885333333 C18.2990544,0.860444444 18.2598037,0.839111111 18.217413,0.825283951 C18.071008,0.768790123 17.9202855,0.726123457 17.7715254,0.677925926 C17.720107,0.660938272 17.6690812,0.642765432 17.6176628,0.626962963 C17.4952007,0.589432099 17.3735236,0.553481481 17.249884,0.521481481 C17.0646209,0.472493827 16.8773952,0.430222222 16.6874219,0.392691358 C16.6163782,0.378864198 16.5461195,0.366222222 16.4750758,0.35437037 C16.2411418,0.313679012 16.0048528,0.281283951 15.7654237,0.259555556 C15.7469759,0.257580247 15.7285281,0.256790123 15.7096878,0.255209877 C15.4471008,0.232296296 15.1825513,0.218074074 14.9144692,0.218074074 C10.0654416,0.218074074 6.08306869,4.01580247 5.7435504,8.81145679 L4.29716325,7.61441975 C4.14997324,7.49274074 3.94783229,7.46745679 3.77591436,7.54962963 C3.60438894,7.63101235 3.49487957,7.80483951 3.49487957,7.99604938 L3.49487957,13.3771852 C3.49487957,13.4921481 3.53491525,13.6031605 3.60713649,13.6920494 C3.68092774,13.7817284 4.35054416,14.5651358 5.24859946,14.5714568 C3.47957181,15.4848395 1.86165923,16.6680494 0.440392507,18.0985679 C0.334023194,18.2052346 0.282604817,18.3545679 0.300267618,18.5046914 C0.317537913,18.6544198 0.401926851,18.7883457 0.529099019,18.867358 C0.559714541,18.886716 2.69573595,20.2311111 4.91418376,22.3948642 C4.0129884,22.9716543 0.0192328278,25.8362469 0.151900089,31.2351605 C0.15896521,31.5038025 0.376806423,31.7167407 0.642140946,31.7167407 L0.65470116,31.7167407 C0.925138269,31.7096296 1.13944692,31.4832593 1.13316682,31.2106667 C1.05937556,28.2188642 2.4406066,26.0614321 3.68171276,24.7348148 C3.89366637,24.6340741 4.53855486,24.3638519 5.37223907,24.3638519 C5.95942908,24.3638519 6.52267618,24.5029136 7.04981267,24.7676049 C7.2570562,25.0346667 7.45919715,25.3072593 7.65270294,25.586963 C7.74808207,25.7252346 7.90076717,25.798716 8.05580731,25.798716 C8.15236396,25.798716 8.25009813,25.7702716 8.33566459,25.7102222 C8.55782337,25.5541728 8.61277431,25.2464198 8.45812667,25.0228148 C8.24578055,24.7158519 8.02322926,24.4195556 7.79596789,24.128 C7.77123996,24.0837531 7.74023194,24.0438519 7.70412132,24.0094815 C5.4793934,21.1926914 2.71182872,19.1521975 1.57002676,18.3727407 C2.83272079,17.1824198 4.2473149,16.1923951 5.77926851,15.4117531 C6.0893488,18.1613827 7.59971454,20.5499259 9.77027654,22.0302222 L9.77027654,23.9545679 L9.59050847,23.8980741 C9.44096343,23.8514568 9.28003568,23.8791111 9.15404103,23.9719506 C9.02843889,24.0651852 8.95425513,24.2125432 8.95425513,24.3697778 L8.95425513,28.4246914 C8.95425513,28.5993086 9.04610169,28.761679 9.19564674,28.8501728 C9.27218555,28.8956049 9.35853702,28.9185185 9.44488849,28.9185185 C9.52652988,28.9185185 9.60856378,28.8979753 9.68235504,28.8568889 L13.843711,26.5374815 C13.9865834,26.7468642 14.1883318,26.9116049 14.4246209,27.0091852 L14.4246209,31.2229136 C14.4246209,31.4955062 14.6444246,31.7167407 14.9152542,31.7167407 C15.1860839,31.7167407 15.4058876,31.4955062 15.4058876,31.2229136 L15.4058876,27.0087901 C15.6488492,26.9084444 15.8557003,26.7369877 15.9989652,26.5189136 L20.1461909,28.8553086 C20.2203747,28.8971852 20.3031936,28.9181235 20.38562,28.9181235 C20.4715789,28.9181235 20.5575379,28.8952099 20.6336842,28.8501728 C20.7840143,28.761284 20.8762533,28.5993086 20.8762533,28.4242963 L20.8762533,23.9466667 C20.8762533,23.7831111 20.7957895,23.6302222 20.6615522,23.5385679 C20.5273149,23.4465185 20.356182,23.4267654 20.2054594,23.4872099 L20.0602319,23.5448889 L20.0602319,22.0298272 C22.2307939,20.5495309 23.7411597,18.1609877 24.05124,15.410963 C25.5828011,16.192 26.9981802,17.1820247 28.2608742,18.3727407 C26.9970027,19.2355556 23.7395897,21.6399012 21.4320428,24.9362963 C21.2758252,25.1591111 21.3288136,25.4672593 21.5505798,25.6240988 C21.6365388,25.6849383 21.735058,25.7145679 21.8327921,25.7145679 C21.9870473,25.7145679 22.1385549,25.6414815 22.233934,25.5051852 C22.8387868,24.6411852 23.5190009,23.8364444 24.2125602,23.1071605 C24.228653,23.1190123 24.2388582,23.1356049 24.2569135,23.1462716 C24.3024442,23.1727407 28.8292239,25.8386173 28.6969492,31.2102716 C28.6902765,31.4828642 28.9045852,31.7096296 29.1754148,31.7163457 L29.187975,31.7163457 C29.4533095,31.7163457 29.6711508,31.5034074 29.6782159,31.2347654 C29.8108831,25.837037 25.8186976,22.9724444 24.9163247,22.3952593 L24.9163247,22.3952593 Z M25.3535772,12.9781728 C24.584264,13.0291358 24.172132,12.2710123 24.1218912,12.1710617 C24.1195361,12.1659259 24.114826,12.1631605 24.112471,12.1588148 L24.112471,12.0086914 L24.5713113,12.0086914 C24.8421409,12.0086914 25.0619447,11.7874568 25.0619447,11.5148642 C25.0619447,11.2422716 24.8421409,11.021037 24.5713113,11.021037 L24.112471,11.021037 L24.112471,10.0689383 L25.3535772,9.04177778 L25.3535772,12.9781728 L25.3535772,12.9781728 Z M4.47693131,9.04177778 L5.71803747,10.0689383 L5.71803747,11.021037 L5.33534344,11.021037 C5.06451383,11.021037 4.84471008,11.2422716 4.84471008,11.5148642 C4.84471008,11.7874568 5.06451383,12.0086914 5.33534344,12.0086914 L5.71803747,12.0086914 L5.71803747,13.3673086 C5.49470116,13.5838025 5.32199822,13.5841975 5.25998216,13.5841975 C4.96363961,13.5841975 4.65395183,13.350716 4.47693131,13.1812346 L4.47693131,9.04177778 L4.47693131,9.04177778 Z M10.9344514,27.0293333 C10.4657984,27.0384198 10.0744692,26.4884938 9.93512935,26.2637037 L9.93512935,25.0398025 L12.8620517,25.9543704 L10.9344514,27.0293333 L10.9344514,27.0293333 Z M14.5965388,25.798716 C14.5965388,25.6217284 14.7394112,25.4779259 14.9152542,25.4779259 C15.0910972,25.4779259 15.2339697,25.6217284 15.2339697,25.798716 C15.2339697,25.9757037 15.0910972,26.1195062 14.9152542,26.1195062 C14.7394112,26.1195062 14.5965388,25.9757037 14.5965388,25.798716 L14.5965388,25.798716 Z M16.8667975,25.8757531 L19.5134701,24.8240988 C19.5327029,24.8264691 19.5499732,24.8355556 19.5699911,24.8355556 C19.6959857,24.8355556 19.8082426,24.7841975 19.8953791,24.7055802 L19.8953791,27.5820247 L16.8667975,25.8757531 L16.8667975,25.8757531 Z M19.0789652,23.9348148 L16.0342908,25.1444938 C15.808992,24.754963 15.3945049,24.4898765 14.9152542,24.4898765 C14.4128457,24.4898765 13.9806958,24.7814321 13.7644246,25.2025679 L10.7511508,24.2611358 L10.7511508,22.6101728 C12.0024621,23.2525432 13.4166637,23.6175802 14.9148617,23.6175802 C16.4130598,23.6175802 17.8276539,23.2525432 19.0785727,22.6101728 L19.0785727,23.9348148 L19.0789652,23.9348148 Z M14.9152542,22.6299259 C12.645388,22.6299259 10.5882605,21.6983704 9.09987511,20.1955556 C10.5427297,19.9395556 11.7685281,19.0522469 12.4895629,17.8271605 L12.9695986,19.2351605 C13.024157,19.3947654 13.1733095,19.5022222 13.3409099,19.5022222 C13.5085103,19.5022222 13.6576628,19.3951605 13.7118287,19.2355556 L14.4418912,17.0955062 L15.3882248,17.0955062 L16.1175022,19.2351605 C16.1720607,19.3947654 16.3212132,19.5022222 16.4888136,19.5022222 C16.6564139,19.5022222 16.8055665,19.3951605 16.8597324,19.2355556 L17.3405531,17.8263704 C18.0615879,19.0522469 19.2877788,19.9395556 20.7306334,20.1955556 C19.242248,21.6983704 17.1851204,22.6299259 14.9152542,22.6299259 L14.9152542,22.6299259 Z M13.0700803,17.0955062 L13.612132,17.0955062 L13.3409099,17.8903704 L13.0700803,17.0955062 L13.0700803,17.0955062 Z M16.2183764,17.0955062 L16.7604282,17.0955062 L16.4892061,17.8903704 L16.2183764,17.0955062 L16.2183764,17.0955062 Z M23.1312043,14.361284 C23.1312043,16.2066173 22.5200714,17.9065679 21.5015165,19.2837531 C19.3603925,19.2359506 17.6325781,17.4712099 17.6325781,15.3050864 C17.6325781,15.0324938 17.4127743,14.8112593 17.1419447,14.8112593 C16.8711151,14.8112593 16.6513113,15.0324938 16.6513113,15.3050864 C16.6513113,15.6476049 16.6858519,15.9826173 16.751793,16.3057778 L13.079893,16.3057778 C13.1458341,15.9826173 13.1803747,15.6476049 13.1803747,15.3050864 C13.1803747,15.0324938 12.9605709,14.8112593 12.6897413,14.8112593 C12.4189117,14.8112593 12.1991079,15.0324938 12.1991079,15.3050864 C12.1991079,17.4712099 10.4712935,19.2359506 8.33016949,19.2837531 C7.31122212,17.9065679 6.70048171,16.2066173 6.70048171,14.361284 L6.70048171,11.5891358 C6.70440678,11.5642469 6.71539697,11.5413333 6.71539697,11.5148642 C6.71539697,11.4883951 6.70440678,11.4654815 6.70048171,11.4405926 L6.70048171,9.47555556 C6.70048171,6.03417284 8.80117752,3.07990123 11.7783408,1.83624691 C12.8910972,2.17639506 13.818198,2.91555556 14.3975379,3.93837037 C14.4980196,4.11535802 14.6911329,4.20385185 14.8807136,4.18449383 C14.899554,4.18646914 14.9187868,4.18765432 14.9376271,4.18765432 C15.1083675,4.18765432 15.2736128,4.09797531 15.3642819,3.93837037 C15.9514719,2.90054321 16.8927029,2.15822222 18.0219447,1.824 C21.0163782,3.05975309 23.1323818,6.02153086 23.1323818,9.47516049 L23.1323818,14.361284 L23.1312043,14.361284 Z"></path>\n        </g>\n      </g>\n      <g id="bat-shape">\n        <path d="M3.79259259,28.6814815 L11.437037,29.7481481 L10.1925926,30.9925926 C10.0148148,31.1703704 10.0148148,31.5259259 10.1925926,31.7037037 C10.3111111,31.8222222 10.4296296,31.8814815 10.5481481,31.8814815 C10.6666667,31.8814815 10.7851852,31.8222222 10.9037037,31.7037037 L12.8592593,29.7481481 C16.2962963,27.2 21.2148148,27.9111111 23.8222222,31.3481481 C23.9407407,31.4666667 24.0592593,31.5259259 24.237037,31.5259259 L24.237037,31.5259259 C24.4148148,31.5259259 24.5333333,31.4666667 24.6518519,31.3481481 C26.1925926,29.3925926 29.037037,29.037037 30.9925926,30.5777778 C31.1111111,30.6962963 31.3481481,30.6962963 31.5259259,30.637037 C31.7037037,30.5777778 31.8222222,30.4 31.8222222,30.2222222 C32,27.8518519 31.2888889,25.5407407 29.7481481,23.762963 C28.4444444,22.2222222 26.7259259,21.2148148 24.7703704,20.8 L24.7703704,20.8 L24.7703704,20.8 C24.9481481,20.6222222 24.9481481,20.2666667 24.7703704,20.0888889 C24.5925926,19.9111111 24.237037,19.9111111 24.0592593,20.0888889 L23.2888889,20.7407407 C20.9185185,22.7555556 17.7185185,23.0518519 14.7555556,21.6296296 C15.0518519,21.1555556 15.2296296,20.562963 15.2888889,19.9703704 L16.5333333,18.7259259 C16.7111111,18.5481481 16.7111111,18.1925926 16.5333333,18.0148148 C16.3555556,17.837037 16,17.837037 15.8222222,18.0148148 L15.0518519,18.7851852 C14.8740741,18.3703704 14.637037,18.0148148 14.3407407,17.7185185 C14.0444444,17.4222222 13.6888889,17.1851852 13.2740741,17.0074074 L14.0444444,16.237037 C14.2222222,16.0592593 14.2222222,15.7037037 14.0444444,15.5259259 C13.8666667,15.3481481 13.5111111,15.3481481 13.3333333,15.5259259 L12.0888889,16.7703704 C11.4962963,16.7703704 10.9037037,16.9481481 10.4296296,17.3037037 C9.00740741,14.4 9.3037037,11.1407407 11.3185185,8.77037037 L12.0296296,8.05925926 C12.2074074,7.88148148 12.2074074,7.52592593 12.0296296,7.34814815 C11.8518519,7.17037037 11.4962963,7.17037037 11.3185185,7.34814815 L11.3185185,7.34814815 C10.9037037,5.39259259 9.8962963,3.67407407 8.35555556,2.37037037 C6.45925926,0.711111111 4.14814815,5.19029264e-15 1.77777778,0.177777778 C1.6,0.177777778 1.42222222,0.296296296 1.36296296,0.474074074 C1.3037037,0.651851852 1.3037037,0.888888889 1.42222222,1.00740741 C2.19259259,1.95555556 2.48888889,3.14074074 2.31111111,4.32592593 C2.13333333,5.51111111 1.54074074,6.57777778 0.592592593,7.34814815 C0.474074074,7.46666667 0.414814815,7.58518519 0.414814815,7.76296296 C0.414814815,7.94074074 0.474074074,8.05925926 0.592592593,8.17777778 C4.02962963,10.7851852 4.74074074,15.7037037 2.13333333,19.1407407 C2.13333333,19.2 2.07407407,19.2 2.07407407,19.2592593 L0.237037037,21.0962963 C0.0592592593,21.2740741 0.0592592593,21.6296296 0.237037037,21.8074074 C0.414814815,21.9259259 0.533333333,21.9259259 0.651851852,21.9259259 C0.77037037,21.9259259 0.888888889,21.8666667 1.00740741,21.7481481 L2.19259259,20.562963 L3.25925926,28.0888889 L3.79259259,28.6814815 Z M3.26801698,28.0261188 C3.4962963,27.8181327 4.1970679,27.0522762 4.1970679,27.0522762 L3.14074074,19.6148148 C4.44444444,17.7777778 5.03703704,15.4666667 4.74074074,13.2148148 C4.44444444,11.0814815 3.37777778,9.18518519 1.77777778,7.76296296 C3.55555556,6.04444444 3.91111111,3.37777778 2.78518519,1.18518519 C4.56296296,1.24444444 6.28148148,1.8962963 7.64444444,3.02222222 C9.18518519,4.32592593 10.1333333,6.16296296 10.3703704,8.17777778 C9.24444444,9.6 8.59259259,11.2592593 8.53333333,13.037037 C8.47407407,14.6962963 8.82962963,16.3555556 9.65925926,17.8962963 L6.6962963,20.8592593 C5.57037037,21.9851852 5.45185185,23.7037037 6.34074074,24.9481481 C6.34074074,24.9481481 4.91162551,26.3772634 4.1970679,27.091821 C3.72644033,27.5624486 2.78518519,28.5037037 2.78518519,28.5037037 C2.60740741,28.6814815 2.60740741,29.037037 2.78518519,29.2148148 C2.9037037,29.3333333 3.02222222,29.3925926 3.14074074,29.3925926 C3.25925926,29.3925926 3.37777778,29.3333333 3.4962963,29.2148148 L7.05185185,25.6592593 C7.58518519,26.0740741 8.23703704,26.2518519 8.88888889,26.2518519 C9.71851852,26.2518519 10.5481481,25.8962963 11.1407407,25.3037037 L14.1037037,22.3407407 C15.6444444,23.1703704 17.3037037,23.5259259 18.962963,23.4666667 C20.7407407,23.3481481 22.4,22.7555556 23.8222222,21.6296296 C25.837037,21.8666667 27.6740741,22.8148148 28.9777778,24.3555556 C30.162963,25.7185185 30.7555556,27.437037 30.8148148,29.2148148 C28.6814815,28.0888889 25.9555556,28.4444444 24.237037,30.2222222 C21.2740741,26.7851852 16.1185185,26.1333333 12.3851852,28.8 L5.01439043,27.6977238 L3.97719907,28.7281636 L3.7945216,28.6761188 C3.7945216,28.6761188 3.2032373,28.0851398 3.26801698,28.0261188 Z M10.4296296,24.5925926 C10.0148148,25.0074074 9.48148148,25.2444444 8.88888889,25.2444444 C8.2962963,25.2444444 7.76296296,25.0074074 7.34814815,24.5925926 C6.51851852,23.762963 6.51851852,22.4 7.34814815,21.5111111 L10.5481481,18.3111111 C10.5481481,18.3111111 10.5481481,18.3111111 10.6074074,18.2518519 C11.0222222,17.837037 11.5555556,17.6592593 12.0888889,17.6592593 L12.2074074,17.6592593 L12.2074074,17.6592593 C12.7407407,17.7185185 13.2148148,17.8962963 13.6296296,18.3111111 C13.9851852,18.6666667 14.2222222,19.2 14.2814815,19.7333333 L14.2814815,19.7333333 L14.2814815,19.8518519 C14.2814815,20.4444444 14.0444444,20.9777778 13.6888889,21.3333333 C13.6888889,21.3333333 13.6888889,21.3333333 13.6296296,21.3925926 L10.4296296,24.5925926 L10.4296296,24.5925926 Z"></path>\n        <path d="M27.2,25.3037037 C27.0814815,25.3037037 26.962963,25.2444444 26.8444444,25.1851852 C26.8444444,25.1851852 25.8962963,24.2962963 24.4148148,23.762963 C24.1777778,23.6444444 24,23.4074074 24.1185185,23.1111111 C24.237037,22.8740741 24.4740741,22.6962963 24.7703704,22.8148148 C26.4296296,23.4074074 27.4962963,24.3555556 27.5555556,24.4148148 C27.7333333,24.5925926 27.7925926,24.9481481 27.6148148,25.1259259 C27.437037,25.2444444 27.3185185,25.3037037 27.2,25.3037037 L27.2,25.3037037 Z"></path>\n        <path d="M28.4444444,26.8444444 C28.2666667,26.8444444 28.1481481,26.7851852 28.0296296,26.6666667 L27.7925926,26.3111111 C27.6148148,26.0740741 27.6740741,25.7777778 27.9111111,25.6 C28.1481481,25.4222222 28.4444444,25.4814815 28.6222222,25.7185185 L28.8592593,26.0740741 C29.037037,26.3111111 28.9777778,26.6074074 28.7407407,26.7851852 C28.6222222,26.8444444 28.5037037,26.8444444 28.4444444,26.8444444 L28.4444444,26.8444444 Z"></path>\n      </g>\n      <g id="spider-shape">\n        <g transform="translate(2.000000, 0.000000)">\n          <path d="M25.1076923,4.06153846 C24.9230769,3.81538462 24.6153846,3.75384615 24.3692308,3.87692308 C24.1230769,4 24.0615385,4.36923077 24.1846154,4.55384615 C25.8461538,7.07692308 26.1538462,9.90769231 26.0923077,11.8153846 C26.0307692,13.4153846 25.7846154,14.7076923 25.6615385,15.2 L19.5692308,17.4153846 L22.8923077,14.3384615 C22.9538462,14.2769231 23.0153846,14.1538462 23.0769231,14.0307692 C23.0769231,13.9692308 23.3846154,11.9384615 23.1384615,9.23076923 C22.9538462,6.70769231 22.2769231,3.2 20.1230769,0.430769231 C19.9384615,0.184615385 19.5692308,0.184615385 19.3846154,0.307692308 C19.0769231,0.492307692 19.0769231,0.8 19.2,1.04615385 C22.7692308,5.53846154 22.1538462,12.5538462 22.0307692,13.7230769 L20.5538462,15.0769231 C20.6769231,14.6461538 20.7384615,14.1538462 20.7384615,13.6615385 C20.7384615,10.0923077 17.6,7.13846154 13.7846154,7.13846154 C9.96923077,7.13846154 6.83076923,10.0307692 6.83076923,13.6615385 C6.83076923,14.1538462 6.89230769,14.5846154 7.01538462,15.0769231 L5.53846154,13.7230769 C5.41538462,12.5538462 4.73846154,5.53846154 8.30769231,1.04615385 C8.49230769,0.8 8.43076923,0.492307692 8.18461538,0.307692308 C7.93846154,0.123076923 7.56923077,0.184615385 7.44615385,0.430769231 C5.23076923,3.13846154 4.55384615,6.70769231 4.30769231,9.23076923 C4.12307692,11.9384615 4.36923077,13.9692308 4.36923077,14.0307692 C4.36923077,14.1538462 4.43076923,14.2769231 4.55384615,14.3384615 L7.87692308,17.4153846 L1.84615385,15.2 C1.53846154,14.0307692 0.492307692,8.86153846 3.32307692,4.55384615 C3.50769231,4.30769231 3.38461538,4 3.13846154,3.87692308 C2.89230769,3.75384615 2.52307692,3.81538462 2.4,4.06153846 C0.553846154,6.76923077 0.246153846,9.84615385 0.307692308,11.8769231 C0.369230769,14.0923077 0.861538462,15.6923077 0.861538462,15.7538462 C0.923076923,15.9384615 1.04615385,16.0615385 1.16923077,16.0615385 L10.5230769,19.4461538 C10.2153846,19.8153846 9.96923077,20.1846154 9.78461538,20.6153846 L2.89230769,20.0615385 C2.64615385,20.0615385 2.4,20.1846154 2.33846154,20.4307692 C2.33846154,20.4923077 1.84615385,22.0307692 1.84615385,24.0615385 C1.78461538,26.8307692 2.52307692,29.2307692 3.87692308,31.1384615 C4,31.2615385 4.18461538,31.3846154 4.30769231,31.3846154 C4.43076923,31.3846154 4.55384615,31.3846154 4.61538462,31.2615385 C4.86153846,31.0769231 4.92307692,30.7692308 4.73846154,30.5230769 C2.15384615,27.0769231 2.95384615,22.5230769 3.26153846,21.1076923 L9.53846154,21.6615385 L9.53846154,22.0307692 L9.53846154,22.2153846 L5.47692308,23.0153846 C5.23076923,23.0769231 5.10769231,23.2 5.04615385,23.4461538 C4.98461538,23.6307692 4.18461538,28.7384615 7.56923077,31.8769231 C7.69230769,32 7.81538462,32 7.93846154,32 C8.06153846,32 8.24615385,31.9384615 8.30769231,31.8769231 C8.49230769,31.6923077 8.49230769,31.3230769 8.30769231,31.1384615 C5.78461538,28.8 5.96923077,25.1076923 6.09230769,23.9384615 L9.72307692,23.2 C10.0307692,24.1846154 10.7692308,24.9846154 11.7538462,25.4769231 L11.7538462,27.2 C11.7538462,27.5076923 12,27.6923077 12.3076923,27.6923077 C12.6153846,27.6923077 12.8615385,27.4461538 12.8615385,27.2 L12.8615385,25.8461538 C13.1692308,25.9076923 13.4769231,25.9692308 13.7846154,25.9692308 C14.0923077,25.9692308 14.4,25.9076923 14.7076923,25.8461538 L14.7076923,27.2 C14.7076923,27.5076923 14.9538462,27.6923077 15.2615385,27.6923077 C15.5692308,27.6923077 15.8153846,27.4461538 15.8153846,27.2 L15.8153846,25.4769231 C16.7384615,24.9846154 17.4769231,24.1846154 17.8461538,23.2 L21.4769231,23.9384615 C21.6,25.1076923 21.7230769,28.8 19.2615385,31.1384615 C19.0769231,31.3230769 19.0769231,31.6923077 19.2615385,31.8769231 C19.3846154,32 19.5076923,32 19.6307692,32 C19.7538462,32 19.9384615,31.9384615 20,31.8769231 C23.3846154,28.7384615 22.5230769,23.6307692 22.5230769,23.4461538 C22.4615385,23.2615385 22.3384615,23.0769231 22.0923077,23.0153846 L17.9692308,22.1538462 L17.9692308,21.9692308 L17.9692308,21.6 L24.2461538,21.0461538 C24.5538462,22.4615385 25.3538462,27.0153846 22.7692308,30.4615385 C22.5846154,30.7076923 22.6461538,31.0153846 22.8923077,31.2 C23.0153846,31.2615385 23.0769231,31.3230769 23.2,31.3230769 C23.3846154,31.3230769 23.5692308,31.2615385 23.6307692,31.0769231 C25.0461538,29.2307692 25.7230769,26.7692308 25.6615385,24 C25.6,21.9076923 25.1692308,20.4307692 25.1692308,20.3692308 C25.1076923,20.1230769 24.8615385,20 24.6153846,20 L17.7230769,20.5538462 C17.5384615,20.1230769 17.2923077,19.6923077 16.9846154,19.3846154 L26.3384615,16 C26.5230769,15.9384615 26.6461538,15.8153846 26.6461538,15.6923077 C26.6461538,15.6307692 27.1384615,14.0307692 27.2,11.8153846 C27.2615385,9.78461538 26.8923077,6.76923077 25.1076923,4.06153846 L25.1076923,4.06153846 L25.1076923,4.06153846 Z M13.7230769,24.9230769 C12,24.9230769 10.5846154,23.6307692 10.5846154,22.0307692 C10.5846154,21.7846154 10.5846154,21.5384615 10.6461538,21.3538462 L10.6461538,21.2923077 C10.8307692,20.6769231 11.2,20.1230769 11.7538462,19.7538462 L11.8153846,19.6923077 C12.1230769,19.5076923 12.4307692,19.3846154 12.7384615,19.2615385 C13.0461538,19.2 13.1692308,18.8923077 13.1076923,18.6461538 C13.0461538,18.4 12.7384615,18.2153846 12.4307692,18.2769231 C12.0615385,18.4 11.6923077,18.5230769 11.3846154,18.7076923 C9.23076923,17.8461538 7.81538462,15.8769231 7.81538462,13.6615385 C7.81538462,10.6461538 10.4615385,8.18461538 13.6615385,8.18461538 C16.9230769,8.18461538 19.5076923,10.6461538 19.5076923,13.6615385 C19.5076923,15.8769231 18.0923077,17.8461538 15.9384615,18.7076923 C15.6307692,18.5230769 15.2615385,18.3384615 14.8923077,18.2769231 C14.5846154,18.2153846 14.2769231,18.3384615 14.2153846,18.6461538 C14.1538462,18.8923077 14.2769231,19.2 14.5846154,19.2615385 C14.9538462,19.3846154 15.2615385,19.5076923 15.5076923,19.6923077 L15.5692308,19.7538462 C16.1230769,20.1230769 16.4923077,20.6769231 16.6769231,21.2923077 L16.6769231,21.3538462 C16.7384615,21.6 16.7384615,21.7846154 16.7384615,22.0307692 C16.8615385,23.6307692 15.4461538,24.9230769 13.7230769,24.9230769 L13.7230769,24.9230769 L13.7230769,24.9230769 Z"></path>\n          <path d="M11.5692308,12.4307692 C11.2615385,12.4307692 11.0153846,12.6769231 11.0153846,12.9230769 L11.0153846,13.6 C11.0153846,13.9076923 11.2615385,14.0923077 11.5692308,14.0923077 C11.8769231,14.0923077 12.1230769,13.8461538 12.1230769,13.6 L12.1230769,12.9230769 C12.1230769,12.6153846 11.8769231,12.4307692 11.5692308,12.4307692 L11.5692308,12.4307692 L11.5692308,12.4307692 Z"></path>\n          <path d="M15.9384615,14.0923077 C16.2461538,14.0923077 16.4923077,13.8461538 16.4923077,13.6 L16.4923077,12.9230769 C16.4923077,12.6153846 16.2461538,12.4307692 15.9384615,12.4307692 C15.6307692,12.4307692 15.3846154,12.6769231 15.3846154,12.9230769 L15.3846154,13.6 C15.3846154,13.9076923 15.6307692,14.0923077 15.9384615,14.0923077 L15.9384615,14.0923077 L15.9384615,14.0923077 Z"></path>\n          <path d="M13.7230769,17.2307692 C13.4153846,17.2307692 13.2307692,16.8615385 13.1692308,16.5538462 L13.1692308,13.4153846 C13.1692308,13.1076923 13.4153846,12.8615385 13.6615385,12.8615385 L13.6615385,12.8615385 C13.9692308,12.8615385 14.1538462,13.0461538 14.1538462,13.2923077 L14.1538462,16.4923077 C14.2769231,16.9230769 14.0307692,17.2307692 13.7230769,17.2307692 L13.7230769,17.2307692 L13.7230769,17.2307692 Z"></path>\n          <path d="M13.7230769,10.0923077 C13.4153846,10.0923077 13.1692308,10.3384615 13.1692308,10.5846154 L13.1692308,11.2615385 C13.1692308,11.5692308 13.4153846,11.7538462 13.7230769,11.7538462 C14.0307692,11.7538462 14.2769231,11.5076923 14.2769231,11.2615385 L14.2769231,10.5846154 C14.2769231,10.3384615 14.0307692,10.0923077 13.7230769,10.0923077 L13.7230769,10.0923077 L13.7230769,10.0923077 Z"></path>\n        </g>\n      </g>\n      <g id="hat-shape">\n        <g transform="translate(2.000000, 0.000000)">\n          <path d="M25.3787234,30.4592593 C27.2255319,29.8666667 28.0595745,29.037037 28.0595745,28.5037037 C28.0595745,28.2074074 28,27.7925926 27.2851064,27.6148148 C26.093617,27.3185185 22.4,26.7851852 22.4,26.7851852 L17.693617,9.71851852 C17.6340426,9.6 17.6340426,9.48148148 17.693617,9.36296296 L18.587234,5.98518519 C18.6468085,5.86666667 18.706383,5.74814815 18.7659574,5.68888889 L23.412766,1.12592593 C23.5914894,0.948148148 23.5914894,0.711111111 23.4723404,0.474074074 C23.3531915,0.296296296 23.0553191,0.177777778 22.8170213,0.296296296 C22.8170213,0.296296296 17.0978723,2.31111111 15.5489362,2.84444444 C15.4297872,2.9037037 15.2510638,3.02222222 15.1914894,3.14074074 L11.6170213,7.7037037 C11.4382979,7.94074074 11.3191489,8.11851852 11.2595745,8.41481481 C9.7106383,13.3333333 6.19574468,26.8444444 6.19574468,26.8444444 L1.37021277,27.6740741 C0.774468085,27.8518519 0.536170213,28.3851852 0.536170213,28.6222222 C0.536170213,29.5111111 1.37021277,29.9259259 3.21702128,30.5185185 L25.3787234,30.4592593 Z M21.2680851,26.7851852 C20.1957447,26.962963 19.0042553,27.0814815 17.7531915,27.1407407 L17.7531915,24.4148148 C18.706383,24.3555556 19.6595745,24.237037 20.493617,24.1777778 L21.2680851,26.7851852 L21.2680851,26.7851852 Z M12.3319149,8.47407407 L16.0255319,3.79259259 L21.0297872,2.01481481 L17.812766,5.21481481 C17.7531915,5.27407407 17.693617,5.33333333 17.693617,5.45185185 L16.6212766,9.42222222 L16.6212766,9.65925926 L20.3148936,23.1703704 C19.5404255,23.2888889 18.706383,23.3481481 17.812766,23.4074074 C17.7531915,23.1703704 17.5148936,23.0518519 17.2765957,23.0518519 L11.3191489,23.0518519 C11.0808511,23.0518519 10.8425532,23.2296296 10.7829787,23.4074074 C9.8893617,23.3481481 9.05531915,23.2888889 8.28085106,23.1703704 L12.3319149,8.47407407 L12.3319149,8.47407407 Z M16.7404255,24.0592593 L16.7404255,27.5555556 L11.9148936,27.5555556 L11.9148936,24.0592593 L16.7404255,24.0592593 L16.7404255,24.0592593 Z M8.04255319,24.1777778 C8.93617021,24.2962963 9.82978723,24.3555556 10.7829787,24.4148148 L10.7829787,27.1407407 C9.53191489,27.0814815 8.34042553,26.9037037 7.26808511,26.7851852 L8.04255319,24.1777778 L8.04255319,24.1777778 Z M1.72765957,28.6222222 L6.67234043,27.7333333 C7.92340426,27.9703704 9.35319149,28.0888889 10.8425532,28.2074074 C10.9021277,28.4444444 11.1404255,28.6222222 11.3787234,28.6222222 L17.2765957,28.6222222 C17.5148936,28.6222222 17.7531915,28.4444444 17.812766,28.2074074 C19.3021277,28.0888889 20.7319149,27.9703704 21.9829787,27.7333333 L26.9276596,28.6222222 C26.5106383,28.9777778 25.5574468,29.4518519 23.6510638,29.8666667 C21.1489362,30.4 17.8723404,30.7555556 14.2978723,30.7555556 C10.7829787,30.7555556 7.44680851,30.4592593 4.94468085,29.8666667 C3.03829787,29.4518519 2.14468085,28.9777778 1.72765957,28.6222222 L1.72765957,28.6222222 L1.72765957,28.6222222 Z M3.21702128,30.4592593 C3.33617021,30.5185185 4.58723404,30.8148148 4.76595745,30.8740741 C7.32765957,31.4666667 10.7234043,31.762963 14.3574468,31.762963 C17.9914894,31.762963 21.387234,31.4666667 23.9489362,30.8740741 C24.0680851,30.8740741 25.3787234,30.5185185 25.4978723,30.4592593 L3.21702128,30.4592593 Z"></path>\n          <path d="M13.2255319,25.0666667 C12.9276596,25.0666667 12.6893617,25.3037037 12.6893617,25.5407407 L12.6893617,26.1925926 C12.6893617,26.4888889 12.9276596,26.6666667 13.2255319,26.6666667 C13.5234043,26.6666667 13.7617021,26.4296296 13.7617021,26.1925926 L13.7617021,25.5407407 C13.7617021,25.2444444 13.5234043,25.0666667 13.2255319,25.0666667 L13.2255319,25.0666667 L13.2255319,25.0666667 Z"></path>\n          <path d="M15.4297872,25.0666667 C15.1319149,25.0666667 14.893617,25.3037037 14.893617,25.5407407 L14.893617,26.1925926 C14.893617,26.4888889 15.1319149,26.6666667 15.4297872,26.6666667 C15.7276596,26.6666667 15.9659574,26.4296296 15.9659574,26.1925926 L15.9659574,25.5407407 C15.9659574,25.2444444 15.7276596,25.0666667 15.4297872,25.0666667 L15.4297872,25.0666667 L15.4297872,25.0666667 Z"></path>\n          <path d="M12.5702128,13.5703704 L12.4510638,13.5703704 C12.1531915,13.5111111 12.0340426,13.2148148 12.093617,12.9777778 L12.8085106,10.0740741 C12.8680851,9.77777778 13.1659574,9.65925926 13.4042553,9.71851852 C13.7021277,9.77777778 13.8212766,10.0740741 13.7617021,10.3111111 L13.0468085,13.2148148 C12.987234,13.4518519 12.8085106,13.5703704 12.5702128,13.5703704 L12.5702128,13.5703704 Z"></path>\n          <path d="M11.9148936,15.762963 L11.7957447,15.762963 C11.4978723,15.7037037 11.3787234,15.4074074 11.4382979,15.1703704 L11.5574468,14.7555556 C11.6170213,14.4592593 11.9148936,14.3407407 12.1531915,14.4 C12.4510638,14.4592593 12.5702128,14.7555556 12.5106383,14.9925926 L12.3914894,15.4074074 C12.3319149,15.6444444 12.1531915,15.762963 11.9148936,15.762963 L11.9148936,15.762963 Z"></path>\n        </g>\n      </g>\n      <g id="poison-shape" transform="translate(7.000000, 0.000000)">\n        <path d="M8.34782609,19.8518519 C7.21490683,19.8518519 6.26086957,20.2666667 5.60496894,21.0962963 C4.77018634,22.0444444 4.41242236,23.4666667 4.59130435,25.0074074 C4.59130435,25.2444444 4.82981366,25.4814815 5.06832298,25.4814815 L6.26086957,25.4814815 L6.49937888,26.7259259 C6.55900621,26.962963 6.7378882,27.1407407 6.97639752,27.1407407 L9.77888199,27.1407407 C10.0173913,27.1407407 10.1962733,26.962963 10.2559006,26.7259259 L10.4944099,25.4814815 L11.6869565,25.4814815 C11.9254658,25.4814815 12.1639752,25.3037037 12.1639752,25.0074074 C12.3428571,23.4666667 11.9850932,22.0444444 11.1503106,21.0962963 C10.4347826,20.2666667 9.48074534,19.8518519 8.34782609,19.8518519 L8.34782609,19.8518519 L8.34782609,19.8518519 Z M11.1503106,24.4740741 L10.0173913,24.4740741 C9.77888199,24.4740741 9.6,24.6518519 9.54037267,24.8888889 L9.36149068,26.0740741 L7.39378882,26.0740741 L7.09565217,24.8888889 C7.03602484,24.6518519 6.85714286,24.4740741 6.61863354,24.4740741 L5.48571429,24.4740741 C5.42608696,23.4074074 5.7242236,22.4592593 6.26086957,21.8074074 C6.7378882,21.2148148 7.45341615,20.9185185 8.28819876,20.9185185 C9.12298137,20.9185185 9.83850932,21.2148148 10.315528,21.8074074 C10.9118012,22.4 11.2099379,23.4074074 11.1503106,24.4740741 L11.1503106,24.4740741 L11.1503106,24.4740741 Z"></path>\n        <path d="M11.9850932,10.4296296 L11.9850932,7.7037037 C12.1639752,7.52592593 12.2832298,7.28888889 12.2832298,7.05185185 L12.2832298,5.45185185 C12.2832298,4.97777778 11.9254658,4.62222222 11.5080745,4.62222222 L11.3888199,4.62222222 L11.6273292,0.711111111 C11.6273292,0.592592593 11.5677019,0.414814815 11.5080745,0.355555556 C11.3888199,0.237037037 11.2695652,0.177777778 11.1503106,0.177777778 L5.60496894,0.177777778 C5.48571429,0.177777778 5.36645963,0.237037037 5.24720497,0.355555556 C5.12795031,0.474074074 5.12795031,0.592592593 5.12795031,0.711111111 L5.36645963,4.62222222 L5.24720497,4.62222222 C4.82981366,4.62222222 4.47204969,4.97777778 4.47204969,5.45185185 L4.47204969,7.05185185 C4.47204969,7.34814815 4.59130435,7.58518519 4.77018634,7.7037037 L4.77018634,10.4296296 C1.90807453,11.9111111 0.119254658,14.9333333 0.119254658,18.3111111 L0.119254658,31.4074074 C0.119254658,31.7037037 0.357763975,31.9407407 0.596273292,31.9407407 L16.2186335,31.9407407 C16.4571429,31.9407407 16.6956522,31.7037037 16.6956522,31.4074074 L16.6956522,18.3111111 C16.6360248,14.9333333 14.7875776,11.8518519 11.9850932,10.4296296 L11.9850932,10.4296296 L11.9850932,10.4296296 Z M6.08198758,1.12592593 L10.5540373,1.12592593 L10.3751553,4.56296296 L6.26086957,4.56296296 L6.08198758,1.12592593 L6.08198758,1.12592593 Z M5.36645963,6.81481481 L5.36645963,5.57037037 L11.3291925,5.57037037 L11.3291925,6.81481481 L5.36645963,6.81481481 L5.36645963,6.81481481 Z M15.6819876,18.7851852 L15.6819876,28.1481481 L1.0136646,28.1481481 L1.0136646,18.7851852 L15.6819876,18.7851852 L15.6819876,18.7851852 Z M1.07329193,17.7777778 C1.25217391,14.9333333 2.92173913,12.3851852 5.42608696,11.2 L5.42608696,11.2 C5.60496894,11.1407407 5.7242236,10.962963 5.7242236,10.7259259 L5.7242236,7.82222222 L11.0310559,7.82222222 L11.0310559,10.7259259 C11.0310559,10.9037037 11.1503106,11.1407407 11.3291925,11.2 C13.8335404,12.3851852 15.5031056,14.9333333 15.6819876,17.7777778 L1.07329193,17.7777778 L1.07329193,17.7777778 Z M1.0136646,30.8740741 L1.0136646,29.1555556 L15.6223602,29.1555556 L15.6223602,30.8740741 L1.0136646,30.8740741 L1.0136646,30.8740741 Z"></path>\n        <path d="M7.57267081,22.162963 C7.27453416,22.162963 7.03602484,22.4 7.03602484,22.637037 L7.03602484,23.2888889 C7.03602484,23.5851852 7.27453416,23.762963 7.57267081,23.762963 C7.87080745,23.762963 8.10931677,23.5259259 8.10931677,23.2888889 L8.10931677,22.637037 C8.04968944,22.4 7.81118012,22.162963 7.57267081,22.162963 L7.57267081,22.162963 L7.57267081,22.162963 Z"></path>\n        <path d="M9.12298137,22.162963 C8.82484472,22.162963 8.5863354,22.4 8.5863354,22.637037 L8.5863354,23.2888889 C8.5863354,23.5851852 8.82484472,23.762963 9.12298137,23.762963 C9.42111801,23.762963 9.65962733,23.5259259 9.65962733,23.2888889 L9.65962733,22.637037 C9.65962733,22.4 9.42111801,22.162963 9.12298137,22.162963 L9.12298137,22.162963 L9.12298137,22.162963 Z"></path>\n        <path d="M13.0583851,14.8148148 C12.8795031,14.8148148 12.7602484,14.7555556 12.6409938,14.637037 C12.6409938,14.637037 11.8658385,13.6296296 10.4944099,12.8 C10.2559006,12.6814815 10.1962733,12.3259259 10.315528,12.0888889 C10.4347826,11.8518519 10.7925466,11.7925926 11.0310559,11.9111111 C12.5813665,12.8 13.4161491,13.9851852 13.4757764,13.9851852 C13.6546584,14.2222222 13.5950311,14.5185185 13.3565217,14.6962963 C13.2372671,14.7555556 13.1180124,14.8148148 13.0583851,14.8148148 L13.0583851,14.8148148 Z"></path>\n        <path d="M13.952795,16.5333333 C13.773913,16.5333333 13.5950311,16.4148148 13.4757764,16.237037 L13.2968944,15.8814815 C13.1776398,15.6444444 13.2968944,15.3481481 13.5354037,15.2296296 C13.773913,15.1111111 14.0720497,15.2296296 14.1913043,15.4666667 L14.3701863,15.8222222 C14.489441,16.0592593 14.3701863,16.3555556 14.131677,16.4740741 C14.131677,16.5333333 14.0124224,16.5333333 13.952795,16.5333333 L13.952795,16.5333333 Z"></path>\n      </g>\n      <g id="grave-shape">\n        <g transform="translate(0.000000, 1.000000)">\n          <path d="M9.61381818,4.19623912 C8.60872727,4.98995696 7.77490909,5.9519847 7.136,7.05498996 C7.01127273,7.27041224 7.08654545,7.54517456 7.30472727,7.66852989 C7.37563636,7.70880918 7.45345455,7.72822956 7.53018182,7.72822956 C7.688,7.72822956 7.84072727,7.6469517 7.92509091,7.50237781 C8.50690909,6.49791296 9.26618182,5.62183835 10.1814545,4.89932855 C10.3774545,4.7443252 10.4094545,4.46165088 10.2527273,4.26744715 C10.0967273,4.07324342 9.81054545,4.04159541 9.61381818,4.19623912 L9.61381818,4.19623912 Z"></path>\n          <path d="M11.8436364,3.80423529 C11.908,3.80423529 11.9730909,3.79056911 12.0352727,3.76179818 C12.708,3.45143185 13.4181818,3.22234338 14.1465455,3.08172549 C14.3927273,3.03425347 14.5534545,2.79797226 14.5050909,2.55449833 C14.4570909,2.31102439 14.22,2.15098613 13.9716364,2.19953706 C13.1712727,2.35418077 12.3901818,2.60592635 11.6509091,2.94722143 C11.4232727,3.05223529 11.3250909,3.31980488 11.4312727,3.54493735 C11.5083636,3.70821234 11.6727273,3.80423529 11.8436364,3.80423529 L11.8436364,3.80423529 Z"></path>\n          <path d="M31.2621818,28.345473 L26.6963636,28.345473 L26.6963636,11.216704 C26.6963636,8.1892836 25.4883636,5.35822477 23.2945455,3.24536011 C23.1145455,3.0720153 22.8269091,3.07561167 22.6516364,3.25363176 C22.4767273,3.43165184 22.4803636,3.71612434 22.66,3.88946915 C24.6767273,5.83150646 25.7872727,8.43383644 25.7872727,11.216704 L25.7872727,28.345473 L7.53745455,28.345473 C6.19636364,28.345473 5.10545455,27.1622688 5.10545455,25.7082582 L5.10545455,11.216704 C5.10545455,5.57724342 9.74436364,0.989360115 15.4465455,0.989360115 C17.22,0.989360115 18.9694545,1.44070397 20.5058182,2.29448111 C20.7247273,2.4163979 21.0018182,2.33907604 21.1247273,2.12257484 C21.2476364,1.90607365 21.1698182,1.63203061 20.9509091,1.51047346 C19.2789091,0.581532281 17.3752727,0.0902687709 15.4461818,0.0899091344 C9.24290909,0.0899091344 4.196,5.08130464 4.196,11.2163443 L4.196,25.7082582 L4.196,28.345473 L0.737818182,28.345473 C0.486909091,28.345473 0.283272727,28.5468694 0.283272727,28.7950187 C0.283272727,29.0431679 0.486909091,29.2445643 0.737818182,29.2445643 L4.65054545,29.2445643 L7.53709091,29.2445643 L31.2618182,29.2445643 C31.5127273,29.2445643 31.7163636,29.0431679 31.7163636,28.7950187 C31.7163636,28.5468694 31.5130909,28.345473 31.2621818,28.345473 L31.2621818,28.345473 Z"></path>\n          <path d="M18.0603636,8.45937064 C18.0603636,8.21122143 17.8567273,8.00982496 17.6058182,8.00982496 L16.4545455,8.00982496 L16.4545455,6.87193496 C16.4545455,6.62378575 16.2509091,6.42238929 16,6.42238929 C15.7490909,6.42238929 15.5454545,6.62378575 15.5454545,6.87193496 L15.5454545,8.00982496 L14.3941818,8.00982496 C14.1432727,8.00982496 13.9396364,8.21122143 13.9396364,8.45937064 C13.9396364,8.70751985 14.1432727,8.90891631 14.3941818,8.90891631 L15.5454545,8.90891631 L15.5454545,11.6356805 C15.5454545,11.8838297 15.7490909,12.0852262 16,12.0852262 C16.2509091,12.0852262 16.4545455,11.8838297 16.4545455,11.6356805 L16.4545455,8.90891631 L17.6058182,8.90891631 C17.8567273,8.90891631 18.0603636,8.70787948 18.0603636,8.45937064 L18.0603636,8.45937064 Z"></path>\n          <path d="M16.1254545,14.9389421 C15.8745455,14.9389421 15.6709091,15.1403386 15.6709091,15.3884878 L15.6709091,19.0064314 C15.6709091,19.2545806 15.8745455,19.455977 16.1254545,19.455977 C16.3763636,19.455977 16.58,19.2545806 16.58,19.0064314 L16.58,15.3884878 C16.58,15.1403386 16.3763636,14.9389421 16.1254545,14.9389421 L16.1254545,14.9389421 Z"></path>\n          <path d="M14.2032727,16.3566294 C14.2032727,15.5747795 13.56,14.9389421 12.7698182,14.9389421 L11.088,14.9389421 C11.0643636,14.9389421 11.044,14.9486523 11.0214545,14.9522487 C10.9989091,14.9486523 10.9781818,14.9389421 10.9545455,14.9389421 C10.7036364,14.9389421 10.5,15.1403386 10.5,15.3884878 L10.5,19.0064314 C10.5,19.2545806 10.7036364,19.455977 10.9545455,19.455977 C11.2054545,19.455977 11.4090909,19.2545806 11.4090909,19.0064314 L11.4090909,17.7743166 L12.5069091,17.7743166 L13.3549091,19.2304849 C13.4389091,19.3750588 13.5916364,19.4556174 13.7490909,19.4556174 C13.8261818,19.4556174 13.904,19.436197 13.9756364,19.3955581 C14.1930909,19.2718431 14.268,18.9970808 14.1425455,18.7816585 L13.452,17.5952176 C13.8970909,17.3549804 14.2032727,16.8928474 14.2032727,16.3566294 L14.2032727,16.3566294 Z M11.4090909,15.8380335 L12.7694545,15.8380335 C13.0585455,15.8380335 13.2938182,16.0707183 13.2938182,16.3566294 C13.2938182,16.6425404 13.0585455,16.8752253 12.7694545,16.8752253 L11.4090909,16.8752253 L11.4090909,15.8380335 L11.4090909,15.8380335 Z"></path>\n          <path d="M18.8443636,14.9389421 C18.8207273,14.9389421 18.8003636,14.9486523 18.7774545,14.9522487 C18.7549091,14.9486523 18.7345455,14.9389421 18.7105455,14.9389421 C18.4596364,14.9389421 18.256,15.1403386 18.256,15.3884878 L18.256,19.0064314 C18.256,19.2545806 18.4596364,19.455977 18.7105455,19.455977 C18.9614545,19.455977 19.1650909,19.2545806 19.1650909,19.0064314 L19.1650909,17.7743166 L20.5258182,17.7743166 C21.3163636,17.7743166 21.9592727,17.1381196 21.9592727,16.3566294 C21.9592727,15.5747795 21.316,14.9389421 20.5258182,14.9389421 L18.8443636,14.9389421 L18.8443636,14.9389421 Z M21.0509091,16.3566294 C21.0509091,16.6425404 20.8156364,16.8752253 20.5265455,16.8752253 L19.1658182,16.8752253 L19.1658182,15.8380335 L20.5265455,15.8380335 C20.8152727,15.8380335 21.0509091,16.0707183 21.0509091,16.3566294 L21.0509091,16.3566294 Z"></path>\n        </g>\n      </g>\n      <g id="net-shape">\n        <path d="M31.9890011,11.4599074 C31.9336457,11.2078156 31.685294,11.0488556 31.4317061,11.104211 L29.267232,11.5822131 L29.266484,11.5822131 C27.8343479,11.9001331 25.528493,10.6434141 23.5304594,8.45911675 C21.5511269,6.29539073 20.5087234,3.91435704 20.9190272,2.50952473 L21.2051552,1.60925013 C21.2833261,1.36314266 21.1471816,1.10020413 20.9014481,1.02203321 C20.6549666,0.943862298 20.3924021,1.08038088 20.3142312,1.32574031 L20.0445602,2.17365161 C20.0430641,2.17813989 20.0393239,2.18113208 20.0378278,2.18562036 C19.594984,3.58521635 17.3549572,4.95414241 14.4637554,5.59260055 C11.5729277,6.23068466 8.96560975,5.93183987 7.97556951,4.84941582 C7.9643488,4.83707305 7.94863981,4.83183672 7.93629704,4.82061601 L5.45726919,2.11680004 C5.28334826,1.92642207 4.98749566,1.91407929 4.79674367,2.08800023 C4.6063657,2.26266921 4.5936489,2.55814778 4.76831788,2.74852575 L7.36030083,5.57539546 C8.31630493,6.75992793 8.31181664,9.51573318 7.33224906,12.3635482 C7.24809377,12.6077856 7.37787993,12.8737163 7.62211729,12.9578716 C7.86485855,13.0424009 8.13228536,12.9118667 8.21606663,12.6680033 C8.77036947,11.056336 9.15636174,9.02688445 8.95999939,7.31984113 L10.8637791,9.39641968 C11.3810536,10.0094442 11.3971366,11.5197512 10.8970672,13.1007486 C10.3891432,14.7071795 9.4866245,15.9496857 8.70267122,16.1228585 C8.70229719,16.1228585 8.70192317,16.1232326 8.70154915,16.1232326 L5.97379566,16.7257844 C6.62085634,16.0061632 7.22116408,15.0509072 7.7320802,13.9015329 C7.83680678,13.6655241 7.73058411,13.3891207 7.49457527,13.2843941 C7.25744436,13.1785454 6.98216305,13.2858902 6.87743647,13.521525 C5.95023218,15.6070801 4.71034423,17.0040579 3.56096998,17.2580199 C3.56096998,17.2580199 3.56059595,17.2580199 3.56059595,17.2583939 L0.366809175,17.9641763 C0.114717327,18.0199058 -0.0446166901,18.2693795 0.0111128134,18.5214713 C0.0593618466,18.739527 0.252732003,18.8880144 0.4674215,18.8880144 C0.500709592,18.8880144 0.534745732,18.8842741 0.568781872,18.8771677 L3.76369072,18.1717593 C5.27063146,17.8377563 7.74666712,19.2556795 9.78397319,21.6153938 C9.876357,21.7227386 10.0068912,21.77772 10.1381735,21.77772 C10.2462663,21.77772 10.3547331,21.7403177 10.4430026,21.6640169 C10.6382429,21.4953323 10.6603103,21.2002277 10.4916257,21.0046134 C9.36244869,19.6966532 7.78032923,18.324735 6.18624102,17.6365317 L8.90651403,17.0358499 C9.6885972,16.8634251 11.0309676,17.6114721 12.166503,18.8532302 C13.2148909,19.9988642 13.8193129,21.2742844 13.7194486,22.0679623 L12.8274025,24.8746347 C12.5221993,23.9612693 11.9929561,22.9730992 11.2561297,21.9654798 C11.1031541,21.7571487 10.8110418,21.7111439 10.6027107,21.8641195 C10.3943796,22.016347 10.3491227,22.3088334 10.5013503,22.5175385 C11.721415,24.1853094 12.3247149,25.7917404 12.1766016,26.9201693 L11.0283494,30.5328624 C10.9501785,30.7789699 11.0863231,31.0419084 11.3320565,31.1200794 C11.3791835,31.1350403 11.4270585,31.1421467 11.4738114,31.1421467 C11.6720439,31.1421467 11.8560635,31.0149787 11.9192734,30.8163723 L12.9025812,27.7228238 C12.9403576,27.677941 12.9725236,27.6274478 12.9908508,27.567978 L12.9912248,27.567978 C12.9912248,27.56723 12.9912248,27.566856 12.9915988,27.566482 C13.6049974,25.6324064 18.1067444,23.5019684 22.3032882,23.8647712 C22.5565022,23.8853425 22.7872747,23.6968347 22.809342,23.4391325 C22.8317835,23.1818043 22.6414055,22.9555201 22.3837033,22.9330787 C19.5078365,22.6806128 15.8154764,23.6194118 13.6899007,25.2475362 L14.5026538,22.6907114 C14.5348199,22.6488208 14.5617496,22.6016938 14.5785806,22.5478345 L14.5789546,22.5478345 C14.7708287,21.9407943 15.6467918,21.3045803 16.8661084,20.8871701 C17.1099717,20.8033888 17.240506,20.5374581 17.1567247,20.2932207 C17.0729434,20.0493574 16.8085088,19.9188232 16.5627753,20.0026044 C16.0249295,20.186624 15.555156,20.4099161 15.1489665,20.6575196 L15.7028953,18.91457 C15.7309471,18.8752976 15.7541365,18.8311628 15.7694715,18.7825397 C15.8936473,18.389067 16.9670948,17.8897456 17.9964075,17.8897456 C18.4687992,17.8897456 18.7388441,18.0012046 18.8345942,18.1055572 C18.8461889,18.118274 18.8622719,18.1231363 18.8746147,18.134357 L20.1638737,19.5403114 C19.6286461,19.4830858 19.0313305,19.4890702 18.3786595,19.5758436 C18.1224534,19.6102538 17.9429221,19.8451405 17.9769583,20.1009726 C18.0113684,20.3571787 18.2514915,20.5333438 18.5020873,20.5026739 C19.8897145,20.3164102 21.0387147,20.5153907 21.4998857,21.0192004 C21.5167168,21.0379015 21.5391582,21.045756 21.5582334,21.060717 L24.8690895,24.6711659 C24.9281852,24.7508329 24.9865329,24.831622 25.0531091,24.9041826 C25.0770466,24.9307383 25.1084646,24.9442031 25.1372644,24.9640263 L26.8405675,26.8218011 C26.9329513,26.9224135 27.0589972,26.9732807 27.1854172,26.9732807 C27.2983723,26.9732807 27.4113274,26.9328861 27.501467,26.8506009 C27.691845,26.675932 27.7045618,26.3800794 27.5302668,26.1897014 L25.7600135,24.258618 C25.7596395,24.258244 25.7592655,24.258244 25.7588915,24.25787 L25.5722537,24.0544012 C24.68507,22.7748667 24.7482799,20.0347705 25.7592655,17.212389 C25.846039,16.9692738 25.719993,16.7014729 25.4768777,16.6143254 C25.2330144,16.527552 24.9659616,16.6535979 24.8788141,16.8967132 C24.2474625,18.6583639 23.8827895,20.7225997 24.0761597,22.4225366 L22.0874767,20.2532002 C21.647625,19.5851942 21.6588457,18.149692 22.1323595,16.6524758 C22.6402834,15.0452968 23.5428022,13.8020426 24.3275035,13.6292438 L24.3278775,13.6292438 L27.0530128,13.0274399 C26.5200293,13.6213893 26.0177157,14.3772908 25.5666434,15.2805576 C25.4510701,15.5117041 25.54495,15.7922218 25.7760966,15.907795 C25.8434208,15.9414571 25.9144853,15.9571661 25.9848017,15.9571661 C26.1564785,15.9571661 26.3214228,15.8625382 26.403334,15.6987159 C27.3043566,13.8948005 28.4208168,12.7270991 29.4665866,12.4948305 L29.4673346,12.4948305 L29.4688307,12.4948305 L29.4688307,12.4948305 L31.6329307,12.0168284 C31.8853966,11.9614729 32.0443566,11.7119992 31.9890011,11.4599074 L31.9890011,11.4599074 Z M22.840386,9.09046844 C23.9463735,10.2989384 25.3912264,11.4916994 26.8420636,12.1178148 L24.1251568,12.7177485 C23.3393334,12.8916694 21.9984591,12.1428743 20.8618016,10.9003682 C19.7243961,9.65711407 19.0990288,8.25377784 19.341022,7.48777769 C19.3436402,7.47954917 19.3417701,7.47132065 19.3436402,7.46309214 L20.1795827,4.83408086 C20.6740418,6.33503722 21.7343985,7.88125042 22.840386,9.09046844 L22.840386,9.09046844 Z M15.3311159,16.9991956 C15.285111,16.9292532 15.2402282,16.8637991 15.1987116,16.8065735 C14.9488639,16.4658381 14.6227154,16.1288429 14.267393,15.8520655 L15.8038816,15.5128262 L15.3311159,16.9991956 L15.3311159,16.9991956 Z M14.552399,13.4201646 L15.6288386,14.5942244 L14.0732748,14.937578 C14.2281206,14.6331229 14.3264888,14.3526053 14.3743638,14.2011257 C14.4222388,14.0485241 14.5037759,13.760526 14.552399,13.4201646 L14.552399,13.4201646 Z M15.2439684,12.7914311 C15.7126199,12.7656235 16.2691669,12.6556606 16.7752207,12.456306 L16.3017069,13.9452936 L15.2439684,12.7914311 L15.2439684,12.7914311 Z M17.6736252,12.7170004 C17.7274846,12.8011557 17.7805959,12.8800747 17.829219,12.9462768 C18.0794407,13.2877603 18.4059632,13.6247555 18.7616596,13.9022809 L17.1862725,14.2501228 L17.6736252,12.7170004 L17.6736252,12.7170004 Z M20.2704704,13.569026 L20.2704704,13.569026 C20.248403,13.5738883 20.2244655,13.5761324 20.1982839,13.5761324 C19.7786295,13.5761324 19.0694809,13.0566138 18.5843724,12.3934701 C18.2013724,11.8705852 18.0910354,11.4438244 18.1512532,11.2526984 C18.1591077,11.2287609 18.1591077,11.2048234 18.1624739,11.1808859 L18.7291195,9.39791577 C19.0735952,10.1665341 19.6133111,10.9198174 20.1724763,11.5313459 C20.7290233,12.1398821 21.4276992,12.7409379 22.1592892,13.1519898 L20.2704704,13.569026 L20.2704704,13.569026 Z M14.66498,6.50596597 C16.2672968,6.15213972 18.0218411,5.49311029 19.2897808,4.54720483 L17.2221788,11.0499776 C16.9929024,11.4281154 15.9931375,11.8638528 15.0322711,11.8638528 C14.5643677,11.8638528 14.2958188,11.7542639 14.1985727,11.6506594 L12.88201,10.2151571 C14.0179194,10.3340966 15.3531833,10.1377343 16.5021835,9.73865119 C16.7460469,9.65374785 16.875085,9.38781714 16.7905557,9.14357978 C16.7056523,8.89971645 16.4397216,8.76955627 16.1954843,8.85520765 C14.2898345,9.51685525 12.1971729,9.46299586 11.5295409,8.73477208 C11.5291669,8.73477208 11.5287929,8.73439806 11.5284189,8.73402403 C11.5246786,8.72990978 11.5194423,8.72841368 11.5157021,8.72467345 L9.63511184,6.6735285 C11.1858133,7.0011731 13.0596711,6.86016623 14.66498,6.50596597 L14.66498,6.50596597 Z M11.7879912,13.3831363 C12.0363428,12.5969389 12.2076456,11.691428 12.198295,10.8524932 L13.4998968,12.2722865 C13.5013929,12.2741566 13.5021409,12.2771488 13.5040111,12.2790189 C13.6831683,12.4746332 13.7366537,13.1160835 13.4826917,13.918738 C13.2287298,14.7210184 12.8169299,15.2147294 12.5577316,15.271955 C12.5573575,15.271955 12.5573575,15.2723291 12.5569835,15.2723291 L10.6681648,15.6893653 C11.1585096,15.0086425 11.5392655,14.1697078 11.7879912,13.3831363 L11.7879912,13.3831363 Z M12.8565764,18.2226265 C12.3004034,17.6140903 11.6021015,17.0137825 10.8708855,16.6023567 L12.7608263,16.1853205 C12.7817717,16.1804582 12.8057092,16.17784 12.8315168,16.17784 C13.2500491,16.17784 13.9588236,16.6969846 14.4443062,17.3593803 C14.7626002,17.7936216 14.8908902,18.1597906 14.8916383,18.3815865 L14.2789878,20.3081817 C13.9337641,19.5563944 13.4041468,18.8210642 12.8565764,18.2226265 L12.8565764,18.2226265 Z M18.4392513,16.9827386 C18.3004886,16.9644114 18.1523753,16.9554349 17.9967815,16.9554349 C17.480255,16.9554349 16.8062647,17.0721302 16.2123153,17.3133754 L16.8586279,15.2798095 L18.9557778,14.8167684 C18.8009321,15.1219716 18.7021898,15.4032373 18.6539408,15.5554649 C18.577266,15.7982061 18.4164359,16.3880412 18.4392513,16.9827386 L18.4392513,16.9827386 Z M21.2410615,16.3719582 C20.99458,17.1521712 20.8236512,18.0498277 20.8300096,18.8831521 L19.5306519,17.466351 C19.5224234,17.4577485 19.5112027,17.4540082 19.5026002,17.4457797 C19.5011041,17.4442836 19.499982,17.4427875 19.4984859,17.4412914 C19.341022,17.2135111 19.3054898,16.5974944 19.5459869,15.8367306 C19.7999489,15.0340761 20.2117487,14.539617 20.4713211,14.4820174 L22.3608879,14.0646071 C21.870543,14.745704 21.4897871,15.5853868 21.2410615,16.3719582 L21.2410615,16.3719582 Z"></path>\n      </g>\n      <g id="pumpkin-shape">\n        <path d="M19.5664176,6.89138019 C19.2242637,5.65273687 18.292044,4.65606271 17.0514286,4.24798119 C16.8203956,4.17177319 16.5721319,4.29749882 16.4961758,4.52752757 C16.4202198,4.7579075 16.5457582,5.00584688 16.7760879,5.08205487 C17.6559121,5.37143454 18.3395165,6.041503 18.6507253,6.88892187 L15.3635165,6.88892187 C14.6707692,6.54019127 14.3694066,5.86169428 14.2431648,5.40093441 C14.5167473,5.22779828 14.8181099,5.09329292 15.1444396,5.01497779 C15.1511209,5.01357303 15.156044,5.0083052 15.1623736,5.00654926 C15.2014066,4.99531121 15.2365714,4.97740057 15.2706813,4.95632924 C15.282989,4.94895427 15.2970549,4.94438882 15.3083077,4.93560909 C15.3501538,4.9036509 15.3870769,4.86466893 15.4155604,4.81901437 C15.4197802,4.81199059 15.4208352,4.80356206 15.4247033,4.79653828 C15.4443956,4.76001463 15.4626813,4.72278861 15.4718242,4.67994356 C15.9314286,2.53804233 17.8567033,0.983328978 20.0495824,0.983328978 C20.2922198,0.983328978 20.4891429,0.786663183 20.4891429,0.544342827 C20.4891429,0.302022472 20.2922198,0.105356676 20.0495824,0.105356676 C17.5363516,0.105356676 15.3237802,1.82688477 14.680967,4.23288006 C13.4255824,4.62656284 12.4606593,5.62990959 12.1132308,6.89138019 C11.258022,6.89875516 10.4073846,6.99603449 9.5781978,7.17900392 C8.77116484,6.63325634 7.79850549,6.31402561 6.75235165,6.31402561 C3.96589011,6.31402561 1.69916484,8.57778939 1.69916484,11.3606104 C1.69916484,11.8013525 1.76175824,12.2266423 1.86865934,12.6343726 C0.665318681,14.5623998 0.0253186813,16.7798066 0.0253186813,19.0646418 C0.0253186813,19.3069621 0.222241758,19.5036279 0.464879121,19.5036279 C0.707516484,19.5036279 0.90443956,19.3069621 0.90443956,19.0646418 C0.90443956,17.1717335 1.3752967,15.3279916 2.27024176,13.681618 C2.49389011,14.1107708 2.77767033,14.5034001 3.11032967,14.8496723 L0.939956044,20.7981103 C0.881934066,20.9564965 0.920263736,21.1341981 1.03841758,21.2550071 C1.15621978,21.375816 1.33345055,21.4179587 1.49345055,21.364578 L3.43876923,20.7096107 L4.57002198,22.4894361 C4.6509011,22.6172689 4.79156044,22.6931257 4.94101099,22.6931257 C4.95683516,22.6931257 4.97265934,22.6924233 4.98848352,22.6906674 C5.15516484,22.6727567 5.29652747,22.561781 5.3541978,22.4047996 L6.0363956,20.5357721 L6.61907692,23.2729386 C6.65424176,23.4379974 6.78083516,23.5682885 6.94505495,23.608324 C6.97951648,23.6164014 7.01432967,23.6206156 7.04879121,23.6206156 C7.1789011,23.6206156 7.30408791,23.5630206 7.38883516,23.4597711 L8.88334066,21.6388565 L11.0691868,22.6832924 C11.2203956,22.7552861 11.3993846,22.7359707 11.5309011,22.6320188 C11.6624176,22.5287693 11.7236044,22.3594962 11.6887912,22.1958422 L10.1710769,15.0663559 C11.1732747,14.1437826 11.8055385,12.826473 11.8055385,11.3609616 C11.8055385,10.6227625 11.6423736,9.92319415 11.3557802,9.2907029 C12.2918681,8.65224144 13.3088352,8.20763627 14.3683516,7.97128612 C12.8351648,9.9976462 12.0235604,14.5543224 12.0235604,18.9076603 C12.0235604,19.3002895 12.0295385,19.6883533 12.0418462,20.070798 C12.0495824,20.3082017 12.2447473,20.4957366 12.4810549,20.4957366 L12.4954725,20.4957366 C12.7381099,20.4880105 12.9283516,20.2850233 12.9206154,20.0427029 C12.9086593,19.6693891 12.9026813,19.2904562 12.9026813,18.9076603 C12.9026813,12.3421834 14.624,7.76689417 16.1691429,7.76689417 L16.1691429,7.76689417 C17.076044,7.76689417 18.0346374,9.35672642 18.6707692,11.9154889 C18.7294945,12.1504343 18.9668571,12.2933682 19.2035165,12.2357732 C19.4391209,12.1771246 19.5825934,11.9390186 19.5242198,11.703722 C19.109978,10.0380329 18.5744176,8.77831826 17.9527033,7.96426235 C22.3715165,8.94162111 25.7241319,13.4754701 25.7241319,18.9076603 C25.7241319,19.765966 25.6400879,20.6204087 25.4748132,21.4474586 C25.426989,21.6852135 25.5817143,21.9162958 25.8194286,21.9640575 C25.8486154,21.9700277 25.8774505,21.972486 25.9062857,21.972486 C26.1112967,21.972486 26.2948571,21.8281474 26.3367033,21.6195412 C26.5135824,20.736301 26.6032527,19.8239122 26.6032527,18.9076603 C26.6032527,13.8912778 23.9205275,9.58535041 20.1216703,7.78691194 C26.0564396,8.12651163 30.7811868,13.0547458 30.7811868,19.0653441 C30.7811868,23.8243052 27.8181978,27.9030133 23.6385055,29.5648393 C22.8254945,29.5532501 21.9407473,29.4278756 21.3601758,29.3277868 C23.2566154,28.0747447 24.8066813,26.1460152 25.7237802,23.7456389 C25.8102857,23.519122 25.6967033,23.2652124 25.4698901,23.17882 C25.2427253,23.0927787 24.9891868,23.2058615 24.9023297,23.4323784 C23.6163516,26.798173 21.0018462,29.1592161 17.9716923,29.8405226 C19.5034725,27.8127578 20.3143736,23.2585398 20.3143736,18.9076603 C20.3143736,17.2454831 20.205011,15.6380915 19.9898022,14.1311398 C19.9553407,13.8912778 19.7345055,13.7241118 19.4925714,13.7585284 C19.2523956,13.7925937 19.0853626,14.0148963 19.1194725,14.2551095 C19.3287033,15.7213232 19.4349011,17.2865722 19.4349011,18.9076603 C19.4349011,25.4446909 17.7283516,30.0073373 16.1884835,30.0463193 C16.1723077,30.0463193 16.1564835,30.0449146 16.139956,30.0445634 C15.1732747,30.0062838 13.8591648,27.9915129 13.2251429,23.6114847 C13.1903297,23.3712715 12.965978,23.2044568 12.7272088,23.2395756 C12.4866813,23.2743433 12.3203516,23.4969971 12.3548132,23.7368592 C12.762022,26.5495312 13.4712967,28.6538552 14.3697582,29.8370107 C11.7643956,29.2410431 9.48641758,27.4071346 8.06575824,24.6826109 C7.95358242,24.4673321 7.68808791,24.3841003 7.47287912,24.4957784 C7.25767033,24.6078077 7.17362637,24.8729553 7.2858022,25.0878829 C8.62628571,27.658937 10.6806154,29.4970598 13.067956,30.3637941 L12.2166154,30.3637941 C7.22918681,30.3637941 2.76536264,27.0296065 1.36052747,22.2562467 C1.29301099,22.0234084 1.04791209,21.8896054 0.815824176,21.9587897 C0.583032967,22.0269203 0.449406593,22.2709966 0.517978022,22.5038349 C2.03147253,27.6487525 6.84237363,31.2417664 12.2173187,31.2417664 L19.4672527,31.2417664 C26.1904176,31.2417664 31.659956,25.7793739 31.659956,19.0653441 C31.659956,12.3843261 26.2438681,6.94476091 19.5664176,6.89138019 L19.5664176,6.89138019 Z M4.83375824,21.2662451 L3.99613187,19.9485843 C3.88782418,19.7779065 3.67648352,19.7031032 3.48448352,19.767722 L2.07859341,20.2407735 L3.63920879,15.964346 C4.15718681,16.5497779 5.12175824,17.7613797 5.61265934,19.1317188 L4.83375824,21.2662451 L4.83375824,21.2662451 Z M10.6433407,21.5064583 L8.95156044,20.6980214 C8.76835165,20.6102242 8.54997802,20.6593906 8.42197802,20.8156697 L7.28861538,22.1965446 L6.04413187,16.3517073 C6.27621978,16.3843679 6.51147253,16.4071952 6.75235165,16.4071952 C7.72254945,16.4071952 8.62663736,16.128 9.3970989,15.6524902 L10.6433407,21.5064583 L10.6433407,21.5064583 Z M6.75235165,15.5295741 C4.45081319,15.5295741 2.57828571,13.6594931 2.57828571,11.3609616 C2.57828571,9.0624301 4.45081319,7.1923491 6.75235165,7.1923491 C9.05389011,7.1923491 10.9264176,9.0624301 10.9264176,11.3609616 C10.9264176,13.6598443 9.05389011,15.5295741 6.75235165,15.5295741 L6.75235165,15.5295741 Z M10.4302418,7.91123282 C11.0196044,7.81781657 11.6174066,7.76654298 12.2176703,7.76654298 L12.263033,7.76654298 C11.8034286,7.98006585 11.3571868,8.23221949 10.9260659,8.52124797 C10.7776703,8.30421322 10.6099341,8.1019284 10.4302418,7.91123282 L10.4302418,7.91123282 Z"></path>\n        <path d="M6.75235165,8.90966292 C5.39885714,8.90966292 4.29784615,10.0092354 4.29784615,11.3609616 C4.29784615,12.7126877 5.39885714,13.8122603 6.75235165,13.8122603 C8.10584615,13.8122603 9.20685714,12.7126877 9.20685714,11.3609616 C9.20685714,10.0092354 8.10584615,8.90966292 6.75235165,8.90966292 L6.75235165,8.90966292 Z M6.75235165,12.934288 C5.88378022,12.934288 5.17696703,12.2283982 5.17696703,11.3609616 C5.17696703,10.493525 5.88378022,9.78763522 6.75235165,9.78763522 C7.62092308,9.78763522 8.32773626,10.493525 8.32773626,11.3609616 C8.32773626,12.2283982 7.62092308,12.934288 6.75235165,12.934288 L6.75235165,12.934288 Z"></path>\n      </g>\n      <g id="hand-shape">\n        <g transform="translate(0.000000, 1.000000)">\n          <path d="M10.410427,17.9351827 C10.421573,17.9351827 10.4327191,17.9348225 10.4442247,17.9341022 C10.6915955,17.9153732 10.8774831,17.6999896 10.8591461,17.4518303 C10.848,17.3009177 10.8426067,17.1485645 10.8426067,16.9944104 L10.8426067,15.2871896 L10.8426067,13.7110719 L10.8426067,11.0097732 C11.6174382,11.0209385 12.2894382,11.4225316 12.3038202,11.8849939 L12.3038202,15.3639065 C12.3038202,15.3901991 12.3146067,15.4132502 12.3189213,15.4384623 C12.3239551,15.466916 12.3257528,15.4953697 12.3358202,15.5220225 C12.348764,15.556239 12.3692584,15.5843325 12.3893933,15.6135065 C12.401618,15.6315152 12.4106067,15.6509645 12.4253483,15.6668121 C12.455191,15.6992277 12.4915056,15.722639 12.5292584,15.7453299 C12.5404045,15.7521732 12.5475955,15.7626182 12.5594607,15.7680208 C12.5648539,15.770542 12.5698876,15.7737835 12.5752809,15.7763048 C12.5767191,15.7770251 12.5781573,15.7777455 12.5795955,15.7784658 C14.1227865,16.5294268 15.1191011,18.1217524 15.1191011,19.8422996 C15.1191011,20.090819 15.3204494,20.292516 15.5685393,20.292516 C15.8166292,20.292516 16.0179775,20.090819 16.0179775,19.8422996 C16.0179775,17.8663896 14.9209888,16.0327481 13.2023371,15.0898147 L13.2023371,12.5628398 C13.2023371,12.5621195 13.2026966,12.5617593 13.2026966,12.561039 L13.2026966,11.9105662 C13.2026966,11.9062442 13.2048539,11.9030026 13.2048539,11.8990407 C13.2048539,11.887155 13.2026966,11.8756294 13.2026966,11.8633835 L13.2023371,6.89659567 C13.2023371,6.64807619 13.0009888,6.44637922 12.7528989,6.44637922 C12.504809,6.44637922 12.3034607,6.64807619 12.3034607,6.89659567 L12.3034607,9.50172814 C12.0826966,9.38971429 11.836764,9.32056104 11.5724944,9.32056104 C10.6739775,9.32056104 9.94301124,10.0527931 9.94301124,10.9528658 L9.94301124,13.7099913 L9.94301124,15.2861091 L9.94301124,16.9933299 C9.94301124,17.1698147 9.94948315,17.3441385 9.96206742,17.5166615 C9.98004494,17.7547359 10.1770787,17.9351827 10.410427,17.9351827 L10.410427,17.9351827 Z M11.7148764,10.2368416 C11.7235056,10.2386424 11.7321348,10.241884 11.740764,10.2436848 C11.7321348,10.2411636 11.7231461,10.2393628 11.7148764,10.2368416 L11.7148764,10.2368416 Z M11.761618,10.250168 C11.8022472,10.2613333 11.8417978,10.2746597 11.879191,10.2919481 C11.8403596,10.2779013 11.8018876,10.2631342 11.761618,10.250168 L11.761618,10.250168 Z"></path>\n          <path d="M20.2815281,17.3963636 C20.0384719,17.3416173 19.7982921,17.4914494 19.7422022,17.7334857 C19.580764,18.4315013 19.2366742,19.0672069 18.7466067,19.5721697 C18.5736629,19.7504554 18.5779775,20.0357126 18.7559551,20.2089558 C18.8433258,20.2939567 18.9562247,20.3364571 19.0691236,20.3364571 C19.1863371,20.3364571 19.3035506,20.2907152 19.3916404,20.1999515 C19.9953258,19.5772121 20.419236,18.7945558 20.6177079,17.9369835 C20.6737978,17.6942268 20.5231461,17.4525506 20.2815281,17.3963636 L20.2815281,17.3963636 Z"></path>\n          <path d="M26.3838202,9.30867532 L25.5493034,8.07003983 C25.4101573,7.86402078 25.1311461,7.80999481 24.9254831,7.94866147 C24.7198202,8.08768831 24.6655281,8.36754286 24.8043146,8.5735619 L25.6388315,9.8121974 C25.8459326,10.1197853 25.7646742,10.539387 25.4572584,10.7472069 C25.1502022,10.9550268 24.7316854,10.8736277 24.5238652,10.5653195 L24.3814831,10.3546182 C24.3688989,10.3358892 24.3491236,10.325084 24.334382,10.3088762 L23.9521798,9.79274805 C23.8040449,9.59321212 23.5228764,9.55143203 23.3233258,9.6994632 C23.1241348,9.84785455 23.082427,10.1298701 23.2302022,10.3294061 L23.3855281,10.539387 L22.2346067,11.4942061 C22.1314157,11.5799273 22.0717303,11.7070684 22.0717303,11.8410528 L22.0717303,12.8081177 C22.0717303,13.0566372 22.2730787,13.2583342 22.5211685,13.2583342 C22.7692584,13.2583342 22.9706067,13.0566372 22.9706067,12.8081177 L22.9706067,12.0528346 L23.9284494,11.2582926 C24.4454831,11.8180017 25.3094831,11.932897 25.9599101,11.4938459 C26.6782921,11.0083325 26.8684944,10.0283013 26.3838202,9.30867532 L26.3838202,9.30867532 Z"></path>\n          <path d="M24.0075506,29.4891775 L20.8643596,29.4891775 C20.8650787,29.4776519 20.871191,29.4672069 20.871191,29.4553212 L20.871191,22.2558199 C20.871191,22.1780225 20.846382,22.1088693 20.8118652,22.0451186 C22.1479551,20.7855931 22.9562247,18.9735619 22.9562247,16.9947706 L22.9562247,14.3024762 C22.9562247,14.0539567 22.7548764,13.8522597 22.5067865,13.8522597 C22.2586966,13.8522597 22.0573483,14.0539567 22.0573483,14.3024762 L22.0573483,16.9947706 C22.0573483,19.5815342 20.4850337,21.8437818 18.1443596,22.6235567 C17.9088539,22.7024346 17.781573,22.9570771 17.8595955,23.1929905 C17.9221573,23.3817212 18.097618,23.5009385 18.2860225,23.5009385 C18.332764,23.5009385 18.3809438,23.4933749 18.4280449,23.4782476 C18.6844045,23.3928866 18.9299775,23.287716 19.1694382,23.1724606 C19.4171685,23.2819532 19.8000899,23.5117437 19.9719551,23.9266632 L19.9719551,29.4556814 C19.9719551,29.4675671 19.9780674,29.4780121 19.9787865,29.4895377 L13.4248989,29.4895377 C13.425618,29.4780121 13.4317303,29.4675671 13.4317303,29.4556814 L13.4317303,23.0229887 C13.6140225,23.1231169 13.8013483,23.2153212 13.9926292,23.2970805 C14.0501573,23.3212121 14.1098427,23.3330978 14.168809,23.3330978 C14.3435506,23.3330978 14.5096629,23.2304485 14.5822921,23.0593662 C14.6797303,22.8302961 14.5733034,22.5662892 14.3449888,22.4683221 C13.0056629,21.8967273 11.9025618,20.7704658 11.3179326,19.3787567 C11.221573,19.1493264 10.958382,19.0412745 10.7293483,19.138161 C10.5006742,19.2346874 10.3931685,19.4986944 10.4895281,19.7277645 C10.9364494,20.7920762 11.6519551,21.7170009 12.5328539,22.4164571 L12.5328539,29.4560416 C12.5328539,29.4679273 12.5389663,29.4783723 12.5396854,29.4898978 L4.24701124,29.4898978 C4.04853933,29.4898978 3.88746067,29.6508952 3.88746067,29.850071 C3.88746067,30.0492468 4.04853933,30.2102442 4.24701124,30.2102442 L24.007191,30.2102442 C24.2056629,30.2102442 24.3667416,30.0492468 24.3667416,29.850071 C24.3667416,29.6508952 24.2060225,29.4891775 24.0075506,29.4891775 L24.0075506,29.4891775 Z"></path>\n          <path d="M28.9287191,29.4891775 L25.7326742,29.4891775 C25.5342022,29.4891775 25.3731236,29.6501749 25.3731236,29.8493506 C25.3731236,30.0485264 25.5342022,30.2095238 25.7326742,30.2095238 L28.9287191,30.2095238 C29.127191,30.2095238 29.2882697,30.0485264 29.2882697,29.8493506 C29.2882697,29.6501749 29.127191,29.4891775 28.9287191,29.4891775 L28.9287191,29.4891775 Z"></path>\n          <path d="M31.3869663,29.4891775 L30.3543371,29.4891775 C30.1558652,29.4891775 29.9947865,29.6501749 29.9947865,29.8493506 C29.9947865,30.0485264 30.1558652,30.2095238 30.3543371,30.2095238 L31.3869663,30.2095238 C31.5854382,30.2095238 31.7465169,30.0485264 31.7465169,29.8493506 C31.7465169,29.6501749 31.5854382,29.4891775 31.3869663,29.4891775 L31.3869663,29.4891775 Z"></path>\n          <path d="M2.03469663,29.4891775 L0.657977528,29.4891775 C0.459505618,29.4891775 0.298426966,29.6501749 0.298426966,29.8493506 C0.298426966,30.0485264 0.459505618,30.2095238 0.657977528,30.2095238 L2.03469663,30.2095238 C2.23316854,30.2095238 2.39424719,30.0485264 2.39424719,29.8493506 C2.39424719,29.6501749 2.23316854,29.4891775 2.03469663,29.4891775 L2.03469663,29.4891775 Z"></path>\n          <path d="M12.7528989,5.77213506 C13.0009888,5.77213506 13.2023371,5.5704381 13.2023371,5.32191861 L13.2023371,1.71046234 C13.9843596,1.72234805 14.663191,2.13222511 14.663191,2.60045022 L14.663191,11.7902684 C14.663191,12.0387879 14.8645393,12.2404848 15.1126292,12.2404848 C15.3607191,12.2404848 15.5620674,12.0387879 15.5620674,11.7902684 L15.5620674,7.69401905 C15.6008989,7.65800173 15.6357753,7.61694199 15.6605843,7.56651775 L17.9462472,2.94261472 C18.0282247,2.7510026 18.1867865,2.6033316 18.3834607,2.53633939 C18.5797753,2.46862684 18.7958652,2.48699567 18.9774382,2.58748398 L20.0334382,3.16988398 C20.3246742,3.77029264 20.2257978,4.44813853 19.808,4.66172121 C19.7925393,4.66964502 19.783191,4.68369177 19.768809,4.6926961 C19.7522697,4.68693333 19.736809,4.67864935 19.7206292,4.67180606 L19.5182022,4.56879654 L19.413573,4.51116883 C19.4060225,4.50720693 19.3977528,4.50720693 19.3898427,4.50360519 L18.7081348,4.15711861 C18.4866517,4.04474459 18.2162697,4.13298701 18.1037303,4.35485368 C17.991191,4.57672035 18.08,4.84757056 18.3011236,4.96030476 L18.581573,5.10293333 L17.2598652,7.57768312 C17.2249888,7.64287446 17.2066517,7.71562944 17.2066517,7.78982511 L17.2037753,11.8136797 C17.2037753,12.0621991 17.404764,12.2638961 17.6528539,12.2642563 L17.6532135,12.2642563 C17.9013034,12.2642563 18.1026517,12.0629195 18.1026517,11.8144 L18.1062472,7.90291948 L19.3840899,5.51028918 C19.4053034,5.51893333 19.427236,5.52289524 19.4484494,5.53081905 C19.4549213,5.53225974 19.4606742,5.53514113 19.4667865,5.53658182 C19.7849888,5.64859567 20.1283596,5.66372294 20.4591461,5.56755671 C20.8787416,5.44581818 21.2253483,5.16740433 21.4360449,4.78418009 C21.6467416,4.40131602 21.696,3.9586632 21.5744719,3.5387013 C21.4529438,3.11837922 21.1753708,2.77117229 20.792809,2.56011082 L19.4117753,1.79834459 C19.008,1.57575758 18.5272809,1.53433766 18.0933034,1.6841697 C17.6575281,1.83184069 17.3030112,2.16139913 17.1307865,2.56515325 L15.5620674,5.73755844 L15.5620674,1.67552554 C15.5620674,0.775452814 14.8311011,0.0432207792 13.9325843,0.0432207792 C13.0340674,0.0432207792 12.3031011,0.775452814 12.3031011,1.67552554 L12.3031011,5.32191861 C12.3034607,5.5704381 12.504809,5.77213506 12.7528989,5.77213506 L12.7528989,5.77213506 Z"></path>\n          <path d="M23.1424719,7.59209004 C22.9324944,7.57083983 22.7322247,7.46350823 22.6053034,7.27477749 C22.5945169,7.2585697 22.5826517,7.24344242 22.5697079,7.22867532 L22.0260674,6.6116987 C22.0174382,6.60197403 22.0052135,6.59765195 21.9962247,6.58864762 L21.6079101,6.06495584 C21.4597753,5.86505974 21.1778876,5.82363983 20.9790562,5.97203117 C20.7798652,6.12042251 20.7381573,6.40207792 20.8862921,6.60197403 L21.0649888,6.84292987 L19.8299326,7.86762251 C19.7267416,7.95334372 19.6670562,8.08048485 19.6670562,8.21446926 L19.6670562,11.9001212 C19.6670562,12.1486407 19.8684045,12.3503377 20.1164944,12.3503377 C20.3645843,12.3503377 20.5659326,12.1486407 20.5659326,11.9001212 L20.5659326,11.1855377 C20.6666067,11.150961 20.7564944,11.0836087 20.8129438,10.9834805 C20.8542921,10.9103654 20.9075056,10.8466147 20.970427,10.7940294 L22.5416629,9.4902026 C22.7329438,9.33172641 22.759191,9.04754978 22.6013483,8.85629784 C22.4427865,8.66468571 22.1594607,8.63839307 21.9685393,8.79650909 L20.5662921,9.96022857 L20.5662921,8.42553074 L21.639191,7.53518268 C21.6402697,7.53554286 21.6413483,7.53590303 21.642427,7.53662338 L21.8779326,7.80387186 C22.2029663,8.26741472 22.7282697,8.50909091 23.2578876,8.49612468 C23.2625618,8.49612468 23.2665169,8.49792554 23.271191,8.49792554 C23.3075056,8.49792554 23.3438202,8.49288312 23.3801348,8.48351861 C23.6404494,8.45758615 23.8978876,8.37618701 24.1294382,8.21951169 C24.4915056,7.97495411 24.7370787,7.60361558 24.8201348,7.17428918 C24.903191,6.74496277 24.8147416,6.3084329 24.5573034,5.92772987 L23.2952809,4.24247965 C23.2035955,4.10669437 23.0921348,3.98567619 22.9641348,3.88230649 C22.7703371,3.72599134 22.4877303,3.75768658 22.3324045,3.95145974 C22.1770787,4.1452329 22.208,4.42868918 22.4014382,4.58428398 C22.4593258,4.63074632 22.5096629,4.68549264 22.5639551,4.76473074 L23.3132584,5.76565195 C23.6692135,6.48599827 23.5857978,7.28450216 23.1424719,7.59209004 L23.1424719,7.59209004 Z"></path>\n          <ellipse cx="23.7587416" cy="26.3445056" rx="0.936988764" ry="0.938611255"></ellipse>\n          <path d="M9.63092135,25.1897905 C10.2989663,25.1897905 10.8422472,24.6452087 10.8422472,23.9763671 C10.8422472,23.3075255 10.2989663,22.7629437 9.63092135,22.7629437 C8.9628764,22.7629437 8.41959551,23.3075255 8.41959551,23.9763671 C8.41959551,24.6452087 8.9628764,25.1897905 9.63092135,25.1897905 L9.63092135,25.1897905 Z M9.63092135,23.6630165 C9.80314607,23.6630165 9.94337079,23.803484 9.94337079,23.9760069 C9.94337079,24.1485299 9.80314607,24.2889974 9.63092135,24.2889974 C9.45869663,24.2889974 9.31847191,24.1485299 9.31847191,23.9760069 C9.31847191,23.803484 9.45869663,23.6630165 9.63092135,23.6630165 L9.63092135,23.6630165 Z"></path>\n          <path d="M9.43820225,27.1631792 C9.43820225,27.5935861 9.78768539,27.9436745 10.2173483,27.9436745 C10.6470112,27.9436745 10.9964944,27.5935861 10.9964944,27.1631792 C10.9964944,26.7327723 10.6470112,26.382684 10.2173483,26.382684 C9.78768539,26.382684 9.43820225,26.7327723 9.43820225,27.1631792 L9.43820225,27.1631792 Z M10.3370787,27.1631792 C10.3370787,27.2294511 10.2835056,27.2831169 10.2173483,27.2831169 C10.151191,27.2831169 10.097618,27.2294511 10.097618,27.1631792 C10.097618,27.0969074 10.151191,27.0432416 10.2173483,27.0432416 C10.2835056,27.0432416 10.3370787,27.0969074 10.3370787,27.1631792 L10.3370787,27.1631792 Z"></path>\n          <path d="M17.048809,25.2121212 C17.048809,25.5766165 17.3443596,25.8726788 17.7078652,25.8726788 C18.0713708,25.8726788 18.3669213,25.5766165 18.3669213,25.2121212 C18.3669213,24.8479861 18.0713708,24.5519238 17.7078652,24.5519238 C17.3443596,24.5519238 17.048809,24.8479861 17.048809,25.2121212 L17.048809,25.2121212 Z M17.7078652,24.9722459 C17.8401798,24.9722459 17.9476854,25.0799377 17.9476854,25.2121212 C17.9476854,25.3446649 17.8401798,25.4523567 17.7078652,25.4523567 C17.5755506,25.4523567 17.4684045,25.3446649 17.4684045,25.2121212 C17.4684045,25.0799377 17.5759101,24.9722459 17.7078652,24.9722459 L17.7078652,24.9722459 Z"></path>\n          <path d="M5.21348315,23.9522355 C5.57698876,23.9522355 5.87253933,23.6561732 5.87253933,23.2916779 C5.87253933,22.9275429 5.57698876,22.6314805 5.21348315,22.6314805 C4.84997753,22.6314805 4.55442697,22.9275429 4.55442697,23.2916779 C4.55442697,23.6561732 4.84997753,23.9522355 5.21348315,23.9522355 L5.21348315,23.9522355 Z M5.21348315,23.0518026 C5.34579775,23.0518026 5.45330337,23.1594944 5.45330337,23.2916779 C5.45330337,23.4242216 5.34579775,23.5319134 5.21348315,23.5319134 C5.08116854,23.5319134 4.97366292,23.4242216 4.97366292,23.2916779 C4.97366292,23.1594944 5.08116854,23.0518026 5.21348315,23.0518026 L5.21348315,23.0518026 Z"></path>\n          <path d="M24.3717753,22.1809039 C24.0550112,22.1809039 23.7968539,22.4391481 23.7968539,22.7568208 C23.7968539,23.0744935 24.0546517,23.3327377 24.3717753,23.3327377 C24.6888989,23.3327377 24.9466966,23.0744935 24.9466966,22.7568208 C24.9466966,22.4391481 24.6888989,22.1809039 24.3717753,22.1809039 L24.3717753,22.1809039 Z M24.3717753,23.0813368 C24.1930787,23.0813368 24.0478202,22.9358268 24.0478202,22.7568208 C24.0478202,22.5778147 24.1930787,22.4323048 24.3717753,22.4323048 C24.5504719,22.4323048 24.6957303,22.5778147 24.6957303,22.7568208 C24.6957303,22.9358268 24.5504719,23.0813368 24.3717753,23.0813368 L24.3717753,23.0813368 Z"></path>\n          <path d="M27.5980225,23.7422545 C27.9931685,23.7422545 28.3146067,23.4198996 28.3146067,23.0244294 C28.3146067,22.6289593 27.9931685,22.3066043 27.5980225,22.3066043 C27.2028764,22.3066043 26.8814382,22.6289593 26.8814382,23.0244294 C26.8814382,23.4198996 27.2028764,23.7422545 27.5980225,23.7422545 L27.5980225,23.7422545 Z M27.5980225,22.8418216 C27.6983371,22.8418216 27.7803146,22.9239411 27.7803146,23.0244294 C27.7803146,23.1249177 27.6983371,23.2070372 27.5980225,23.2070372 C27.4977079,23.2070372 27.4157303,23.1249177 27.4157303,23.0244294 C27.4157303,22.9239411 27.4977079,22.8418216 27.5980225,22.8418216 L27.5980225,22.8418216 Z"></path>\n        </g>\n      </g>\n      <g id="broom-shape">\n        <path d="M0.581818182,0.638271605 C0.232727273,1.04444444 0,1.50864198 0,2.0308642 C0,2.55308642 0.232727273,3.07530864 0.581818182,3.42345679 L15.0690909,17.8716049 L14.8945455,18.045679 C14.3709091,18.5679012 14.6618182,19.4962963 15.36,19.6703704 L15.5345455,19.7283951 L16.7563636,19.9604938 L16.7563636,19.9604938 C16.4654545,20.6567901 16.3490909,21.3530864 16.3490909,22.1074074 C16.3490909,22.8617284 16.4654545,23.5580247 16.7563636,24.254321 C17.0472727,24.9506173 17.4545455,25.5888889 18.0363636,26.1691358 L22.8654545,30.9851852 L22.8654545,30.9851852 C23.2727273,31.391358 23.9709091,31.391358 24.3781818,30.9851852 L24.3781818,30.9851852 L25.2509091,30.1148148 L25.2509091,30.1148148 C25.6,29.7666667 25.6581818,29.3024691 25.4254545,28.8962963 L25.4254545,28.8962963 L24.6690909,27.5037037 L26.0654545,28.2580247 L26.0654545,28.2580247 C26.4727273,28.4901235 26.9963636,28.4320988 27.2872727,28.0839506 L27.2872727,28.0839506 L31.1272727,24.254321 C31.5345455,23.8481481 31.5345455,23.1518519 31.1272727,22.745679 L31.1272727,22.745679 L26.2981818,17.9296296 C25.7745455,17.4074074 25.0763636,16.9432099 24.3781818,16.6530864 C23.68,16.362963 22.9818182,16.2469136 22.2254545,16.2469136 C21.4690909,16.2469136 20.7709091,16.362963 20.0727273,16.6530864 L20.0727273,16.6530864 L19.84,15.4345679 L19.7818182,15.2604938 C19.6072727,14.5061728 18.6763636,14.2160494 18.1527273,14.7962963 L17.8618182,15.0864198 L3.37454545,0.638271605 C3.02545455,0.290123457 2.50181818,0.0580246914 1.97818182,0.0580246914 C1.45454545,0.0580246914 0.989090909,0.290123457 0.581818182,0.638271605 L0.581818182,0.638271605 L0.581818182,0.638271605 L0.581818182,0.638271605 Z M18.7345455,25.4728395 C18.1527273,24.8925926 17.7454545,24.1382716 17.5127273,23.3839506 L23.3890909,17.5234568 C24.1454545,17.7555556 24.9018182,18.1617284 25.4836364,18.7419753 L30.3127273,23.5580247 L26.4727273,27.3876543 L23.9709091,25.9950617 C23.3890909,25.6469136 22.6909091,26.3432099 23.04,26.9234568 L24.4363636,29.4185185 L23.5636364,30.2888889 L18.7345455,25.4728395 L18.7345455,25.4728395 L18.7345455,25.4728395 Z M17.3963636,22.0493827 C17.3963636,21.4111111 17.5709091,20.7728395 17.8036364,20.1925926 C17.8618182,20.0185185 17.9781818,19.8444444 18.0363636,19.7283951 C18.1527273,19.554321 18.2690909,19.4382716 18.3854545,19.2641975 C18.5018182,19.1481481 18.6181818,18.9740741 18.7345455,18.8580247 L18.7927273,18.8 C18.9090909,18.6839506 19.0836364,18.5679012 19.2,18.4518519 C19.3745455,18.3358025 19.4909091,18.2197531 19.6654545,18.1037037 C19.84,17.9876543 19.9563636,17.9296296 20.1309091,17.8716049 C20.7127273,17.5814815 21.3527273,17.4654321 21.9927273,17.4654321 L20.3636364,19.0901235 L18.9672727,20.482716 L17.3963636,22.0493827 L17.3963636,22.0493827 Z M15.7672727,18.7419753 L16.5818182,17.9296296 L17.92,16.5950617 L18.6763636,15.8407407 L18.7345455,15.782716 L18.7927273,16.0148148 L19.0254545,17.3493827 C18.6763636,17.5814815 18.3854545,17.8135802 18.0945455,18.1037037 L18.0363636,18.1037037 C17.7454545,18.3938272 17.5127273,18.6839506 17.28,19.0320988 L15.9418182,18.8 L15.7672727,18.7419753 L15.7672727,18.7419753 Z M1.33818182,2.72716049 C0.989090909,2.32098765 0.989090909,1.74074074 1.33818182,1.39259259 L1.33818182,1.39259259 C1.51272727,1.21851852 1.74545455,1.10246914 1.97818182,1.10246914 C2.21090909,1.10246914 2.44363636,1.21851852 2.61818182,1.39259259 L17.1054545,15.8407407 L15.7672727,17.1753086 L1.33818182,2.72716049 L1.33818182,2.72716049 L1.33818182,2.72716049 Z"></path>\n        <path d="M21.4690909,24.4283951 C21.2363636,24.6024691 21.2363636,24.9506173 21.4109091,25.1246914 L21.8763636,25.5888889 C22.0509091,25.762963 22.4,25.762963 22.5745455,25.5888889 C22.8072727,25.4148148 22.8072727,25.0666667 22.6327273,24.8925926 L22.1672727,24.4283951 C21.9927273,24.1962963 21.7018182,24.254321 21.4690909,24.4283951 L21.4690909,24.4283951 L21.4690909,24.4283951 Z"></path>\n        <path d="M26.88,22.5135802 C26.7636364,22.5135802 26.6472727,22.4555556 26.5309091,22.3975309 L24.4363636,20.2506173 C24.2618182,20.0765432 24.2618182,19.7283951 24.4363636,19.554321 C24.6109091,19.3802469 24.96,19.3802469 25.1345455,19.554321 L27.2290909,21.6432099 C27.4036364,21.817284 27.4036364,22.1654321 27.2290909,22.3395062 C27.1709091,22.4555556 27.0545455,22.5135802 26.88,22.5135802 L26.88,22.5135802 Z"></path>\n        <path d="M28.5672727,24.0222222 C28.4509091,24.0222222 28.3345455,23.9641975 28.2181818,23.9061728 L27.9272727,23.5580247 C27.7527273,23.3839506 27.7527273,23.0358025 27.9272727,22.8617284 C28.1018182,22.6876543 28.4509091,22.6876543 28.6254545,22.8617284 L28.9163636,23.1518519 C29.0909091,23.3259259 29.0909091,23.6740741 28.9163636,23.8481481 C28.8,23.9641975 28.6836364,24.0222222 28.5672727,24.0222222 L28.5672727,24.0222222 Z"></path>\n      </g>\n      <g id="ghost-shape">\n          <path d="M5.99851163,18.6781481 C6.25525581,18.6781481 6.46362791,18.4707407 6.46362791,18.2151852 L6.46362791,11.6711111 C6.46362791,6.43703704 10.7415814,2.17888889 16,2.17888889 C17.6357209,2.17888889 19.2483721,2.59777778 20.6653023,3.39037037 C20.887814,3.51518519 21.1724651,3.43666667 21.2986047,3.21333333 C21.4243721,2.99037037 21.3447442,2.70814815 21.1207442,2.58296296 C19.5650233,1.71296296 17.7946047,1.25296296 15.9996279,1.25296296 C10.228093,1.25296296 5.53302326,5.92666667 5.53302326,11.6711111 L5.53302326,18.2151852 C5.53339535,18.4711111 5.74176744,18.6781481 5.99851163,18.6781481 L5.99851163,18.6781481 Z"></path>\n          <path d="M11.2230698,5.16444444 C11.0630698,4.96481481 10.7702326,4.93222222 10.5693023,5.09148148 C9.63386047,5.83481481 8.85767442,6.73592593 8.26269767,7.76925926 C8.13506977,7.99111111 8.21209302,8.27407407 8.43534884,8.40111111 C8.50790698,8.44259259 8.58753488,8.46259259 8.66604651,8.46259259 C8.82753488,8.46259259 8.98381395,8.37888889 9.07013953,8.23 C9.60632558,7.29814815 10.3062326,6.48592593 11.1501395,5.81518519 C11.3506977,5.65555556 11.3834419,5.36407407 11.2230698,5.16444444 L11.2230698,5.16444444 Z"></path>\n          <path d="M12.6623256,4.8037037 C12.728186,4.8037037 12.7947907,4.78962963 12.8584186,4.76 C13.4786977,4.47185185 14.1335814,4.25962963 14.804093,4.12888889 C15.056,4.08 15.2204651,3.83666667 15.1709767,3.58592593 C15.1218605,3.33518519 14.8785116,3.17111111 14.6251163,3.22037037 C13.8805581,3.36518519 13.1534884,3.60074074 12.4647442,3.92074074 C12.231814,4.02888889 12.1313488,4.30444444 12.24,4.53592593 C12.3192558,4.70444444 12.4874419,4.8037037 12.6623256,4.8037037 L12.6623256,4.8037037 Z"></path>\n          <path d="M12.6842791,15.1914815 C13.6792558,15.1914815 14.4889302,14.3855556 14.4889302,13.3951852 C14.4889302,12.4048148 13.6792558,11.5988889 12.6842791,11.5988889 C11.6889302,11.5988889 10.8792558,12.4048148 10.8792558,13.3951852 C10.8792558,14.3855556 11.6889302,15.1914815 12.6842791,15.1914815 L12.6842791,15.1914815 Z M12.6842791,12.5248148 C13.1665116,12.5248148 13.5586977,12.9151852 13.5586977,13.3951852 C13.5586977,13.7740741 13.3127442,14.0940741 12.9726512,14.212963 C12.411907,13.7925926 12.16,13.217037 12.0476279,12.8022222 C12.2072558,12.6325926 12.4323721,12.5248148 12.6842791,12.5248148 L12.6842791,12.5248148 Z"></path>\n          <path d="M19.3023256,15.1914815 C20.2973023,15.1914815 21.1069767,14.3855556 21.1069767,13.3951852 C21.1069767,12.4048148 20.2973023,11.5988889 19.3023256,11.5988889 C18.3069767,11.5988889 17.4973023,12.4048148 17.4973023,13.3951852 C17.4973023,14.3855556 18.3069767,15.1914815 19.3023256,15.1914815 L19.3023256,15.1914815 Z M19.3023256,12.5248148 C19.7845581,12.5248148 20.1767442,12.9151852 20.1767442,13.3951852 C20.1767442,13.7733333 19.9315349,14.092963 19.592186,14.2125926 C19.0310698,13.7914815 18.779907,13.2148148 18.667907,12.8003704 C18.8271628,12.6318519 19.0515349,12.5248148 19.3023256,12.5248148 L19.3023256,12.5248148 Z"></path>\n          <path d="M31.1106977,17.51 C30.2452093,16.8711111 29.019907,17.0518519 28.3776744,17.912963 C27.8779535,18.5833333 27.2234419,19.0744444 26.4662326,19.3622222 L26.4662326,11.6711111 C26.4662326,8.83592593 25.3421395,6.18518519 23.3012093,4.20703704 C23.1170233,4.02851852 22.8226977,4.03222222 22.6433488,4.21555556 C22.4643721,4.39888889 22.468093,4.69185185 22.651907,4.87037037 C24.5116279,6.67259259 25.5356279,9.08777778 25.5356279,11.6711111 L25.5356279,20.4444444 C25.5356279,20.7 25.744,20.9074074 26.0007442,20.9074074 C26.2574884,20.9074074 26.4658605,20.7 26.4658605,20.4444444 L26.4658605,20.3403704 C27.52,20.0162963 28.455814,19.3614815 29.1244651,18.4648148 C29.4612093,18.012963 30.1034419,17.9188889 30.555907,18.2537037 C31.0091163,18.5881481 31.1043721,19.2274074 30.7683721,19.6785185 C29.7242791,21.0788889 28.1767442,22.0603704 26.4662326,22.4362963 L26.4662326,22.0803704 C26.4662326,21.8248148 26.2578605,21.6174074 26.0011163,21.6174074 C25.7443721,21.6174074 25.536,21.8248148 25.536,22.0803704 L25.536,28.7951852 L25.536,29.0774074 C25.536,29.3625926 25.4076279,29.6162963 25.208186,29.7922222 C24.4096744,29.63 23.8779535,28.95 23.5706047,28.3981481 C23.4042791,27.527037 22.6381395,26.8648148 21.7153488,26.8648148 C20.6708837,26.8648148 19.8210233,27.7103704 19.8210233,28.7496296 L19.8210233,28.7948148 L19.8210233,29.077037 C19.8210233,29.3688889 19.6866977,29.6274074 19.4790698,29.8033333 C18.7259535,29.6803704 18.2035349,29.0988889 17.876093,28.5696296 C17.783814,27.6151852 16.9826977,26.8644444 16,26.8644444 C14.9555349,26.8644444 14.1060465,27.71 14.1060465,28.7492593 L14.1060465,28.7944444 L14.1060465,29.0766667 C14.1060465,29.3681481 13.972093,29.6262963 13.7652093,29.8022222 C13.0065116,29.6748148 12.4837209,29.0818519 12.1585116,28.5492593 C12.0569302,27.6048148 11.259907,26.8644444 10.2846512,26.8644444 C9.24055814,26.8644444 8.39106977,27.71 8.39106977,28.7492593 L8.39106977,28.7944444 L8.39106977,29.0766667 C8.39106977,29.3692593 8.256,29.6281481 8.048,29.8040741 C7.312,29.6888889 6.79404651,29.137037 6.46325581,28.6188889 L6.46325581,21.897037 C6.46325581,21.6414815 6.25488372,21.4340741 5.99813953,21.4340741 C5.74139535,21.4340741 5.53302326,21.6414815 5.53302326,21.897037 L5.53302326,22.4366667 C3.82213953,22.0603704 2.27460465,21.0792593 1.23088372,19.6788889 C0.895255814,19.2277778 0.990511628,18.5885185 1.44334884,18.2540741 C1.89544186,17.92 2.53767442,18.0137037 2.8747907,18.4651852 C3.61227907,19.4548148 4.67386047,20.1544444 5.86269767,20.4340741 C6.11460465,20.4948148 6.36353488,20.3388889 6.42269767,20.09 C6.48148837,19.8411111 6.32706977,19.5918519 6.07702326,19.532963 C5.08688372,19.3 4.23776744,18.7396296 3.6215814,17.912963 C2.97934884,17.0518519 1.75367442,16.8711111 0.88855814,17.51 C0.0238139535,18.1488889 -0.157767442,19.3688889 0.483348837,20.23 C1.70083721,21.8633333 3.5255814,22.9888889 5.53265116,23.3781481 L5.53265116,28.8314815 L5.53265116,29.0774074 L5.53265116,29.2577778 C5.53265116,29.3218519 5.54567442,29.3825926 5.56948837,29.4381481 C5.73916279,30.3051852 6.5067907,30.9625926 7.42660465,30.9625926 C8.47106977,30.9625926 9.32093023,30.117037 9.32093023,29.0777778 L9.32093023,28.7955556 L9.32093023,28.7503704 C9.32093023,28.2214815 9.75293023,27.7914815 10.2842791,27.7914815 C10.8156279,27.7914815 11.248,28.2218519 11.248,28.7503704 C11.248,28.7648148 11.2550698,28.777037 11.256186,28.7911111 C11.2546977,28.8055556 11.248,28.8174074 11.248,28.8318519 L11.248,29.0777778 C11.248,30.117037 12.0974884,30.9625926 13.1419535,30.9625926 C14.1864186,30.9625926 15.0362791,30.117037 15.0362791,29.0777778 L15.0362791,28.7955556 L15.0362791,28.7503704 C15.0362791,28.2214815 15.4686512,27.7914815 16,27.7914815 C16.5313488,27.7914815 16.9633488,28.2218519 16.9633488,28.7503704 C16.9633488,28.7648148 16.9704186,28.777037 16.9715349,28.7911111 C16.9700465,28.8055556 16.9633488,28.8174074 16.9633488,28.8318519 L16.9633488,29.0777778 C16.9633488,30.117037 17.8128372,30.9625926 18.8573023,30.9625926 C19.9017674,30.9625926 20.7512558,30.117037 20.7512558,29.0777778 L20.7512558,28.7955556 L20.7512558,28.7503704 C20.7512558,28.2214815 21.1836279,27.7914815 21.7153488,27.7914815 C22.2466977,27.7914815 22.6786977,28.2218519 22.6786977,28.7503704 C22.6786977,28.7648148 22.6857674,28.777037 22.6868837,28.7911111 C22.6853953,28.8055556 22.6786977,28.8174074 22.6786977,28.8318519 L22.6786977,29.0777778 C22.6786977,30.117037 23.528186,30.9625926 24.5726512,30.9625926 C25.4928372,30.9625926 26.260093,30.3055556 26.4297674,29.4381481 C26.4532093,29.382963 26.4666047,29.3218519 26.4666047,29.2577778 L26.4666047,29.0777778 L26.4666047,28.7955556 L26.4666047,23.3785185 C28.4740465,22.9892593 30.2984186,21.8637037 31.515907,20.2303704 C32.1573953,19.3688889 31.975814,18.1488889 31.1106977,17.51 L31.1106977,17.51 Z"></path>\n          <path d="M16,18.0833333 C17.0444651,18.0833333 17.8939535,17.2377778 17.8939535,16.1985185 C17.8939535,15.942963 17.6855814,15.7355556 17.4288372,15.7355556 C17.172093,15.7355556 16.9637209,15.942963 16.9637209,16.1985185 C16.9637209,16.7274074 16.5313488,17.1574074 16,17.1574074 C15.4686512,17.1574074 15.0366512,16.727037 15.0366512,16.1985185 C15.0366512,15.942963 14.8282791,15.7355556 14.5715349,15.7355556 C14.3147907,15.7355556 14.1064186,15.942963 14.1064186,16.1985185 C14.1064186,17.2377778 14.955907,18.0833333 16,18.0833333 L16,18.0833333 Z"></path>\n      </g>\n      <path id="undo-shape" d="M14.6993508,0.00163566024 C14.46916,0.0197701308 14.2473829,0.096244986 14.0549393,0.223846524 L8.11079875,4.14586826 C7.73066752,4.3976285 7.50207739,4.82320183 7.50207739,5.27914367 C7.50207739,5.73508551 7.73066752,6.16065884 8.11079875,6.41241907 L14.0549393,10.3233303 C14.4723093,10.6003633 15.0082243,10.6253824 15.4495891,10.3884391 C15.8909539,10.1514959 16.1662234,9.6909989 16.1659425,9.19005486 L16.1659425,6.91239351 C22.223336,6.92907497 27.0876065,11.8059421 27.0876065,17.8673891 C27.0876065,23.9392195 22.2044424,28.8334952 16.1326109,28.8334952 C10.0607787,28.8334952 5.17761535,23.9392195 5.17761535,17.8673891 C5.17761536,17.2997628 4.87479033,16.7752544 4.38321152,16.4914412 C3.89163271,16.2076281 3.28598264,16.2076281 2.79440383,16.4914412 C2.30282502,16.7752544 1.99999999,17.2997628 2,17.8673891 C2,25.6529079 8.34709067,32 16.1326109,32 C23.9181305,32 30.2652218,25.6529079 30.2652218,17.8673891 C30.2652218,10.0922359 23.9372559,3.7516445 16.1659425,3.73477817 L16.1659425,1.35712193 C16.1640108,0.617933262 15.5717331,0.0157843502 14.8326774,0.00163566024 C14.7882619,-0.000545220081 14.7437663,-0.000545220081 14.6993508,0.00163566024 L14.6993508,0.00163566024 Z"></path>\n      <path id="redo-shape" d="M17.565871,0.00163566024 C17.7960618,0.0197701308 18.0178389,0.096244986 18.2102825,0.223846524 L24.1544231,4.14586826 C24.5345543,4.3976285 24.7631444,4.82320183 24.7631444,5.27914367 C24.7631444,5.73508551 24.5345543,6.16065884 24.1544231,6.41241907 L18.2102825,10.3233303 C17.7929125,10.6003633 17.2569976,10.6253824 16.8156327,10.3884391 C16.3742679,10.1514959 16.0989984,9.6909989 16.0992793,9.19005486 L16.0992793,6.91239351 C10.0418858,6.92907497 5.17761535,11.8059421 5.17761535,17.8673891 C5.17761535,23.9392195 10.0607794,28.8334952 16.1326109,28.8334952 C22.2044431,28.8334952 27.0876065,23.9392195 27.0876065,17.8673891 C27.0876065,17.2997628 27.3904315,16.7752544 27.8820103,16.4914412 C28.3735891,16.2076281 28.9792392,16.2076281 29.470818,16.4914412 C29.9623968,16.7752544 30.2652218,17.2997628 30.2652218,17.8673891 C30.2652218,25.6529079 23.9181312,32 16.1326109,32 C8.34709138,32 2,25.6529079 2,17.8673891 C2,10.0922359 8.32796596,3.7516445 16.0992793,3.73477817 L16.0992793,1.35712193 C16.1012111,0.617933262 16.6934887,0.0157843502 17.4325445,0.00163566024 C17.4769599,-0.000545220081 17.5214556,-0.000545220081 17.565871,0.00163566024 L17.565871,0.00163566024 L17.565871,0.00163566024 Z"></path>\n    </svg>'}});};exports.default=Icons;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(65);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(69);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(70);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(74);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(108);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _preact = __webpack_require__(6);

	var _hammerjs = __webpack_require__(124);

	var _hammerjs2 = _interopRequireDefault(_hammerjs);

	var _moJs = __webpack_require__(125);

	var _moJs2 = _interopRequireDefault(_moJs);

	var _constants = __webpack_require__(126);

	var _constants2 = _interopRequireDefault(_constants);

	var _icon = __webpack_require__(127);

	var _icon2 = _interopRequireDefault(_icon);

	var _cardStagger = __webpack_require__(133);

	var _cardStagger2 = _interopRequireDefault(_cardStagger);

	var _checkOpenCards = __webpack_require__(134);

	var _checkOpenCards2 = _interopRequireDefault(_checkOpenCards);

	var _cardLockAnimation = __webpack_require__(135);

	var _cardLockAnimation2 = _interopRequireDefault(_cardLockAnimation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASSES = __webpack_require__(136);
	__webpack_require__(137);

	var Card = function (_Component) {
	  (0, _inherits3.default)(Card, _Component);

	  function Card() {
	    (0, _classCallCheck3.default)(this, Card);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Card).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Card, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var p = this.props;
	      var store = this.context.store;

	      var mc = new _hammerjs2.default.Manager(this.base);
	      mc.add(new _hammerjs2.default.Tap());

	      mc.on('tap', function (e) {
	        store.dispatch({ type: 'OPEN_CARD', data: p.id, isRecord: true });
	        store.dispatch(_checkOpenCards2.default);
	        store.dispatch({ type: 'RESET_CONFIRM' });
	      });
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      var store = this.context.store;

	      this._timeline = new _moJs2.default.Timeline({
	        onComplete: function onComplete() {
	          store.dispatch((0, _cardLockAnimation2.default)(_this2.props.id));
	        }
	      });
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      var store = this.context.store;

	      var state = store.getState();

	      this.props.isPlay && this._timeline.play();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var p = this.props;
	      var type = p.type;
	      var className = CLASSES.card + ' ' + CLASSES['card--' + type];

	      if (p.isOpen) {
	        className += ' ' + CLASSES['is-open'];
	      }

	      return (0, _preact.h)(
	        'div',
	        { className: className, 'data-component': 'card' },
	        (0, _preact.h)(
	          'div',
	          { className: CLASSES.card__inner },
	          (0, _preact.h)(_icon2.default, { shape: type }),
	          (0, _preact.h)(_cardStagger2.default, { timeline: this._timeline })
	        )
	      );
	    }
	  }]);
	  return Card;
	}(_preact.Component);

	exports.default = Card;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
	 * http://hammerjs.github.io/
	 *
	 * Copyright (c) 2016 Jorik Tangelder;
	 * Licensed under the MIT license */
	(function(window, document, exportName, undefined) {
	  'use strict';

	var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
	var TEST_ELEMENT = document.createElement('div');

	var TYPE_FUNCTION = 'function';

	var round = Math.round;
	var abs = Math.abs;
	var now = Date.now;

	/**
	 * set a timeout with a given scope
	 * @param {Function} fn
	 * @param {Number} timeout
	 * @param {Object} context
	 * @returns {number}
	 */
	function setTimeoutContext(fn, timeout, context) {
	    return setTimeout(bindFn(fn, context), timeout);
	}

	/**
	 * if the argument is an array, we want to execute the fn on each entry
	 * if it aint an array we don't want to do a thing.
	 * this is used by all the methods that accept a single and array argument.
	 * @param {*|Array} arg
	 * @param {String} fn
	 * @param {Object} [context]
	 * @returns {Boolean}
	 */
	function invokeArrayArg(arg, fn, context) {
	    if (Array.isArray(arg)) {
	        each(arg, context[fn], context);
	        return true;
	    }
	    return false;
	}

	/**
	 * walk objects and arrays
	 * @param {Object} obj
	 * @param {Function} iterator
	 * @param {Object} context
	 */
	function each(obj, iterator, context) {
	    var i;

	    if (!obj) {
	        return;
	    }

	    if (obj.forEach) {
	        obj.forEach(iterator, context);
	    } else if (obj.length !== undefined) {
	        i = 0;
	        while (i < obj.length) {
	            iterator.call(context, obj[i], i, obj);
	            i++;
	        }
	    } else {
	        for (i in obj) {
	            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
	        }
	    }
	}

	/**
	 * wrap a method with a deprecation warning and stack trace
	 * @param {Function} method
	 * @param {String} name
	 * @param {String} message
	 * @returns {Function} A new function wrapping the supplied method.
	 */
	function deprecate(method, name, message) {
	    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
	    return function() {
	        var e = new Error('get-stack-trace');
	        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
	            .replace(/^\s+at\s+/gm, '')
	            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

	        var log = window.console && (window.console.warn || window.console.log);
	        if (log) {
	            log.call(window.console, deprecationMessage, stack);
	        }
	        return method.apply(this, arguments);
	    };
	}

	/**
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} target
	 * @param {...Object} objects_to_assign
	 * @returns {Object} target
	 */
	var assign;
	if (typeof Object.assign !== 'function') {
	    assign = function assign(target) {
	        if (target === undefined || target === null) {
	            throw new TypeError('Cannot convert undefined or null to object');
	        }

	        var output = Object(target);
	        for (var index = 1; index < arguments.length; index++) {
	            var source = arguments[index];
	            if (source !== undefined && source !== null) {
	                for (var nextKey in source) {
	                    if (source.hasOwnProperty(nextKey)) {
	                        output[nextKey] = source[nextKey];
	                    }
	                }
	            }
	        }
	        return output;
	    };
	} else {
	    assign = Object.assign;
	}

	/**
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} dest
	 * @param {Object} src
	 * @param {Boolean} [merge=false]
	 * @returns {Object} dest
	 */
	var extend = deprecate(function extend(dest, src, merge) {
	    var keys = Object.keys(src);
	    var i = 0;
	    while (i < keys.length) {
	        if (!merge || (merge && dest[keys[i]] === undefined)) {
	            dest[keys[i]] = src[keys[i]];
	        }
	        i++;
	    }
	    return dest;
	}, 'extend', 'Use `assign`.');

	/**
	 * merge the values from src in the dest.
	 * means that properties that exist in dest will not be overwritten by src
	 * @param {Object} dest
	 * @param {Object} src
	 * @returns {Object} dest
	 */
	var merge = deprecate(function merge(dest, src) {
	    return extend(dest, src, true);
	}, 'merge', 'Use `assign`.');

	/**
	 * simple class inheritance
	 * @param {Function} child
	 * @param {Function} base
	 * @param {Object} [properties]
	 */
	function inherit(child, base, properties) {
	    var baseP = base.prototype,
	        childP;

	    childP = child.prototype = Object.create(baseP);
	    childP.constructor = child;
	    childP._super = baseP;

	    if (properties) {
	        assign(childP, properties);
	    }
	}

	/**
	 * simple function bind
	 * @param {Function} fn
	 * @param {Object} context
	 * @returns {Function}
	 */
	function bindFn(fn, context) {
	    return function boundFn() {
	        return fn.apply(context, arguments);
	    };
	}

	/**
	 * let a boolean value also be a function that must return a boolean
	 * this first item in args will be used as the context
	 * @param {Boolean|Function} val
	 * @param {Array} [args]
	 * @returns {Boolean}
	 */
	function boolOrFn(val, args) {
	    if (typeof val == TYPE_FUNCTION) {
	        return val.apply(args ? args[0] || undefined : undefined, args);
	    }
	    return val;
	}

	/**
	 * use the val2 when val1 is undefined
	 * @param {*} val1
	 * @param {*} val2
	 * @returns {*}
	 */
	function ifUndefined(val1, val2) {
	    return (val1 === undefined) ? val2 : val1;
	}

	/**
	 * addEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */
	function addEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	        target.addEventListener(type, handler, false);
	    });
	}

	/**
	 * removeEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */
	function removeEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	        target.removeEventListener(type, handler, false);
	    });
	}

	/**
	 * find if a node is in the given parent
	 * @method hasParent
	 * @param {HTMLElement} node
	 * @param {HTMLElement} parent
	 * @return {Boolean} found
	 */
	function hasParent(node, parent) {
	    while (node) {
	        if (node == parent) {
	            return true;
	        }
	        node = node.parentNode;
	    }
	    return false;
	}

	/**
	 * small indexOf wrapper
	 * @param {String} str
	 * @param {String} find
	 * @returns {Boolean} found
	 */
	function inStr(str, find) {
	    return str.indexOf(find) > -1;
	}

	/**
	 * split string on whitespace
	 * @param {String} str
	 * @returns {Array} words
	 */
	function splitStr(str) {
	    return str.trim().split(/\s+/g);
	}

	/**
	 * find if a array contains the object using indexOf or a simple polyFill
	 * @param {Array} src
	 * @param {String} find
	 * @param {String} [findByKey]
	 * @return {Boolean|Number} false when not found, or the index
	 */
	function inArray(src, find, findByKey) {
	    if (src.indexOf && !findByKey) {
	        return src.indexOf(find);
	    } else {
	        var i = 0;
	        while (i < src.length) {
	            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
	                return i;
	            }
	            i++;
	        }
	        return -1;
	    }
	}

	/**
	 * convert array-like objects to real arrays
	 * @param {Object} obj
	 * @returns {Array}
	 */
	function toArray(obj) {
	    return Array.prototype.slice.call(obj, 0);
	}

	/**
	 * unique array with objects based on a key (like 'id') or just by the array's value
	 * @param {Array} src [{id:1},{id:2},{id:1}]
	 * @param {String} [key]
	 * @param {Boolean} [sort=False]
	 * @returns {Array} [{id:1},{id:2}]
	 */
	function uniqueArray(src, key, sort) {
	    var results = [];
	    var values = [];
	    var i = 0;

	    while (i < src.length) {
	        var val = key ? src[i][key] : src[i];
	        if (inArray(values, val) < 0) {
	            results.push(src[i]);
	        }
	        values[i] = val;
	        i++;
	    }

	    if (sort) {
	        if (!key) {
	            results = results.sort();
	        } else {
	            results = results.sort(function sortUniqueArray(a, b) {
	                return a[key] > b[key];
	            });
	        }
	    }

	    return results;
	}

	/**
	 * get the prefixed property
	 * @param {Object} obj
	 * @param {String} property
	 * @returns {String|Undefined} prefixed
	 */
	function prefixed(obj, property) {
	    var prefix, prop;
	    var camelProp = property[0].toUpperCase() + property.slice(1);

	    var i = 0;
	    while (i < VENDOR_PREFIXES.length) {
	        prefix = VENDOR_PREFIXES[i];
	        prop = (prefix) ? prefix + camelProp : property;

	        if (prop in obj) {
	            return prop;
	        }
	        i++;
	    }
	    return undefined;
	}

	/**
	 * get a unique id
	 * @returns {number} uniqueId
	 */
	var _uniqueId = 1;
	function uniqueId() {
	    return _uniqueId++;
	}

	/**
	 * get the window object of an element
	 * @param {HTMLElement} element
	 * @returns {DocumentView|Window}
	 */
	function getWindowForElement(element) {
	    var doc = element.ownerDocument || element;
	    return (doc.defaultView || doc.parentWindow || window);
	}

	var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

	var SUPPORT_TOUCH = ('ontouchstart' in window);
	var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
	var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

	var INPUT_TYPE_TOUCH = 'touch';
	var INPUT_TYPE_PEN = 'pen';
	var INPUT_TYPE_MOUSE = 'mouse';
	var INPUT_TYPE_KINECT = 'kinect';

	var COMPUTE_INTERVAL = 25;

	var INPUT_START = 1;
	var INPUT_MOVE = 2;
	var INPUT_END = 4;
	var INPUT_CANCEL = 8;

	var DIRECTION_NONE = 1;
	var DIRECTION_LEFT = 2;
	var DIRECTION_RIGHT = 4;
	var DIRECTION_UP = 8;
	var DIRECTION_DOWN = 16;

	var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
	var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
	var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

	var PROPS_XY = ['x', 'y'];
	var PROPS_CLIENT_XY = ['clientX', 'clientY'];

	/**
	 * create new input type manager
	 * @param {Manager} manager
	 * @param {Function} callback
	 * @returns {Input}
	 * @constructor
	 */
	function Input(manager, callback) {
	    var self = this;
	    this.manager = manager;
	    this.callback = callback;
	    this.element = manager.element;
	    this.target = manager.options.inputTarget;

	    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
	    // so when disabled the input events are completely bypassed.
	    this.domHandler = function(ev) {
	        if (boolOrFn(manager.options.enable, [manager])) {
	            self.handler(ev);
	        }
	    };

	    this.init();

	}

	Input.prototype = {
	    /**
	     * should handle the inputEvent data and trigger the callback
	     * @virtual
	     */
	    handler: function() { },

	    /**
	     * bind the events
	     */
	    init: function() {
	        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
	        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
	        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	    },

	    /**
	     * unbind the events
	     */
	    destroy: function() {
	        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
	        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
	        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	    }
	};

	/**
	 * create new input type manager
	 * called by the Manager constructor
	 * @param {Hammer} manager
	 * @returns {Input}
	 */
	function createInputInstance(manager) {
	    var Type;
	    var inputClass = manager.options.inputClass;

	    if (inputClass) {
	        Type = inputClass;
	    } else if (SUPPORT_POINTER_EVENTS) {
	        Type = PointerEventInput;
	    } else if (SUPPORT_ONLY_TOUCH) {
	        Type = TouchInput;
	    } else if (!SUPPORT_TOUCH) {
	        Type = MouseInput;
	    } else {
	        Type = TouchMouseInput;
	    }
	    return new (Type)(manager, inputHandler);
	}

	/**
	 * handle input events
	 * @param {Manager} manager
	 * @param {String} eventType
	 * @param {Object} input
	 */
	function inputHandler(manager, eventType, input) {
	    var pointersLen = input.pointers.length;
	    var changedPointersLen = input.changedPointers.length;
	    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
	    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

	    input.isFirst = !!isFirst;
	    input.isFinal = !!isFinal;

	    if (isFirst) {
	        manager.session = {};
	    }

	    // source event is the normalized value of the domEvents
	    // like 'touchstart, mouseup, pointerdown'
	    input.eventType = eventType;

	    // compute scale, rotation etc
	    computeInputData(manager, input);

	    // emit secret event
	    manager.emit('hammer.input', input);

	    manager.recognize(input);
	    manager.session.prevInput = input;
	}

	/**
	 * extend the data with some usable properties like scale, rotate, velocity etc
	 * @param {Object} manager
	 * @param {Object} input
	 */
	function computeInputData(manager, input) {
	    var session = manager.session;
	    var pointers = input.pointers;
	    var pointersLength = pointers.length;

	    // store the first input to calculate the distance and direction
	    if (!session.firstInput) {
	        session.firstInput = simpleCloneInputData(input);
	    }

	    // to compute scale and rotation we need to store the multiple touches
	    if (pointersLength > 1 && !session.firstMultiple) {
	        session.firstMultiple = simpleCloneInputData(input);
	    } else if (pointersLength === 1) {
	        session.firstMultiple = false;
	    }

	    var firstInput = session.firstInput;
	    var firstMultiple = session.firstMultiple;
	    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

	    var center = input.center = getCenter(pointers);
	    input.timeStamp = now();
	    input.deltaTime = input.timeStamp - firstInput.timeStamp;

	    input.angle = getAngle(offsetCenter, center);
	    input.distance = getDistance(offsetCenter, center);

	    computeDeltaXY(session, input);
	    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

	    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
	    input.overallVelocityX = overallVelocity.x;
	    input.overallVelocityY = overallVelocity.y;
	    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

	    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
	    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

	    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
	        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

	    computeIntervalInputData(session, input);

	    // find the correct target
	    var target = manager.element;
	    if (hasParent(input.srcEvent.target, target)) {
	        target = input.srcEvent.target;
	    }
	    input.target = target;
	}

	function computeDeltaXY(session, input) {
	    var center = input.center;
	    var offset = session.offsetDelta || {};
	    var prevDelta = session.prevDelta || {};
	    var prevInput = session.prevInput || {};

	    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
	        prevDelta = session.prevDelta = {
	            x: prevInput.deltaX || 0,
	            y: prevInput.deltaY || 0
	        };

	        offset = session.offsetDelta = {
	            x: center.x,
	            y: center.y
	        };
	    }

	    input.deltaX = prevDelta.x + (center.x - offset.x);
	    input.deltaY = prevDelta.y + (center.y - offset.y);
	}

	/**
	 * velocity is calculated every x ms
	 * @param {Object} session
	 * @param {Object} input
	 */
	function computeIntervalInputData(session, input) {
	    var last = session.lastInterval || input,
	        deltaTime = input.timeStamp - last.timeStamp,
	        velocity, velocityX, velocityY, direction;

	    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
	        var deltaX = input.deltaX - last.deltaX;
	        var deltaY = input.deltaY - last.deltaY;

	        var v = getVelocity(deltaTime, deltaX, deltaY);
	        velocityX = v.x;
	        velocityY = v.y;
	        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
	        direction = getDirection(deltaX, deltaY);

	        session.lastInterval = input;
	    } else {
	        // use latest velocity info if it doesn't overtake a minimum period
	        velocity = last.velocity;
	        velocityX = last.velocityX;
	        velocityY = last.velocityY;
	        direction = last.direction;
	    }

	    input.velocity = velocity;
	    input.velocityX = velocityX;
	    input.velocityY = velocityY;
	    input.direction = direction;
	}

	/**
	 * create a simple clone from the input used for storage of firstInput and firstMultiple
	 * @param {Object} input
	 * @returns {Object} clonedInputData
	 */
	function simpleCloneInputData(input) {
	    // make a simple copy of the pointers because we will get a reference if we don't
	    // we only need clientXY for the calculations
	    var pointers = [];
	    var i = 0;
	    while (i < input.pointers.length) {
	        pointers[i] = {
	            clientX: round(input.pointers[i].clientX),
	            clientY: round(input.pointers[i].clientY)
	        };
	        i++;
	    }

	    return {
	        timeStamp: now(),
	        pointers: pointers,
	        center: getCenter(pointers),
	        deltaX: input.deltaX,
	        deltaY: input.deltaY
	    };
	}

	/**
	 * get the center of all the pointers
	 * @param {Array} pointers
	 * @return {Object} center contains `x` and `y` properties
	 */
	function getCenter(pointers) {
	    var pointersLength = pointers.length;

	    // no need to loop when only one touch
	    if (pointersLength === 1) {
	        return {
	            x: round(pointers[0].clientX),
	            y: round(pointers[0].clientY)
	        };
	    }

	    var x = 0, y = 0, i = 0;
	    while (i < pointersLength) {
	        x += pointers[i].clientX;
	        y += pointers[i].clientY;
	        i++;
	    }

	    return {
	        x: round(x / pointersLength),
	        y: round(y / pointersLength)
	    };
	}

	/**
	 * calculate the velocity between two points. unit is in px per ms.
	 * @param {Number} deltaTime
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Object} velocity `x` and `y`
	 */
	function getVelocity(deltaTime, x, y) {
	    return {
	        x: x / deltaTime || 0,
	        y: y / deltaTime || 0
	    };
	}

	/**
	 * get the direction between two points
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Number} direction
	 */
	function getDirection(x, y) {
	    if (x === y) {
	        return DIRECTION_NONE;
	    }

	    if (abs(x) >= abs(y)) {
	        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
	    }
	    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
	}

	/**
	 * calculate the absolute distance between two points
	 * @param {Object} p1 {x, y}
	 * @param {Object} p2 {x, y}
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} distance
	 */
	function getDistance(p1, p2, props) {
	    if (!props) {
	        props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	        y = p2[props[1]] - p1[props[1]];

	    return Math.sqrt((x * x) + (y * y));
	}

	/**
	 * calculate the angle between two coordinates
	 * @param {Object} p1
	 * @param {Object} p2
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} angle
	 */
	function getAngle(p1, p2, props) {
	    if (!props) {
	        props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	        y = p2[props[1]] - p1[props[1]];
	    return Math.atan2(y, x) * 180 / Math.PI;
	}

	/**
	 * calculate the rotation degrees between two pointersets
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} rotation
	 */
	function getRotation(start, end) {
	    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
	}

	/**
	 * calculate the scale factor between two pointersets
	 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} scale
	 */
	function getScale(start, end) {
	    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
	}

	var MOUSE_INPUT_MAP = {
	    mousedown: INPUT_START,
	    mousemove: INPUT_MOVE,
	    mouseup: INPUT_END
	};

	var MOUSE_ELEMENT_EVENTS = 'mousedown';
	var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

	/**
	 * Mouse events input
	 * @constructor
	 * @extends Input
	 */
	function MouseInput() {
	    this.evEl = MOUSE_ELEMENT_EVENTS;
	    this.evWin = MOUSE_WINDOW_EVENTS;

	    this.pressed = false; // mousedown state

	    Input.apply(this, arguments);
	}

	inherit(MouseInput, Input, {
	    /**
	     * handle mouse events
	     * @param {Object} ev
	     */
	    handler: function MEhandler(ev) {
	        var eventType = MOUSE_INPUT_MAP[ev.type];

	        // on start we want to have the left mouse button down
	        if (eventType & INPUT_START && ev.button === 0) {
	            this.pressed = true;
	        }

	        if (eventType & INPUT_MOVE && ev.which !== 1) {
	            eventType = INPUT_END;
	        }

	        // mouse must be down
	        if (!this.pressed) {
	            return;
	        }

	        if (eventType & INPUT_END) {
	            this.pressed = false;
	        }

	        this.callback(this.manager, eventType, {
	            pointers: [ev],
	            changedPointers: [ev],
	            pointerType: INPUT_TYPE_MOUSE,
	            srcEvent: ev
	        });
	    }
	});

	var POINTER_INPUT_MAP = {
	    pointerdown: INPUT_START,
	    pointermove: INPUT_MOVE,
	    pointerup: INPUT_END,
	    pointercancel: INPUT_CANCEL,
	    pointerout: INPUT_CANCEL
	};

	// in IE10 the pointer types is defined as an enum
	var IE10_POINTER_TYPE_ENUM = {
	    2: INPUT_TYPE_TOUCH,
	    3: INPUT_TYPE_PEN,
	    4: INPUT_TYPE_MOUSE,
	    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
	};

	var POINTER_ELEMENT_EVENTS = 'pointerdown';
	var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

	// IE10 has prefixed support, and case-sensitive
	if (window.MSPointerEvent && !window.PointerEvent) {
	    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
	    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
	}

	/**
	 * Pointer events input
	 * @constructor
	 * @extends Input
	 */
	function PointerEventInput() {
	    this.evEl = POINTER_ELEMENT_EVENTS;
	    this.evWin = POINTER_WINDOW_EVENTS;

	    Input.apply(this, arguments);

	    this.store = (this.manager.session.pointerEvents = []);
	}

	inherit(PointerEventInput, Input, {
	    /**
	     * handle mouse events
	     * @param {Object} ev
	     */
	    handler: function PEhandler(ev) {
	        var store = this.store;
	        var removePointer = false;

	        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
	        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
	        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

	        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

	        // get index of the event in the store
	        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

	        // start and mouse must be down
	        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
	            if (storeIndex < 0) {
	                store.push(ev);
	                storeIndex = store.length - 1;
	            }
	        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	            removePointer = true;
	        }

	        // it not found, so the pointer hasn't been down (so it's probably a hover)
	        if (storeIndex < 0) {
	            return;
	        }

	        // update the event in the store
	        store[storeIndex] = ev;

	        this.callback(this.manager, eventType, {
	            pointers: store,
	            changedPointers: [ev],
	            pointerType: pointerType,
	            srcEvent: ev
	        });

	        if (removePointer) {
	            // remove from the store
	            store.splice(storeIndex, 1);
	        }
	    }
	});

	var SINGLE_TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	};

	var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
	var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

	/**
	 * Touch events input
	 * @constructor
	 * @extends Input
	 */
	function SingleTouchInput() {
	    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
	    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
	    this.started = false;

	    Input.apply(this, arguments);
	}

	inherit(SingleTouchInput, Input, {
	    handler: function TEhandler(ev) {
	        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

	        // should we handle the touch events?
	        if (type === INPUT_START) {
	            this.started = true;
	        }

	        if (!this.started) {
	            return;
	        }

	        var touches = normalizeSingleTouches.call(this, ev, type);

	        // when done, reset the started state
	        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
	            this.started = false;
	        }

	        this.callback(this.manager, type, {
	            pointers: touches[0],
	            changedPointers: touches[1],
	            pointerType: INPUT_TYPE_TOUCH,
	            srcEvent: ev
	        });
	    }
	});

	/**
	 * @this {TouchInput}
	 * @param {Object} ev
	 * @param {Number} type flag
	 * @returns {undefined|Array} [all, changed]
	 */
	function normalizeSingleTouches(ev, type) {
	    var all = toArray(ev.touches);
	    var changed = toArray(ev.changedTouches);

	    if (type & (INPUT_END | INPUT_CANCEL)) {
	        all = uniqueArray(all.concat(changed), 'identifier', true);
	    }

	    return [all, changed];
	}

	var TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	};

	var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

	/**
	 * Multi-user touch events input
	 * @constructor
	 * @extends Input
	 */
	function TouchInput() {
	    this.evTarget = TOUCH_TARGET_EVENTS;
	    this.targetIds = {};

	    Input.apply(this, arguments);
	}

	inherit(TouchInput, Input, {
	    handler: function MTEhandler(ev) {
	        var type = TOUCH_INPUT_MAP[ev.type];
	        var touches = getTouches.call(this, ev, type);
	        if (!touches) {
	            return;
	        }

	        this.callback(this.manager, type, {
	            pointers: touches[0],
	            changedPointers: touches[1],
	            pointerType: INPUT_TYPE_TOUCH,
	            srcEvent: ev
	        });
	    }
	});

	/**
	 * @this {TouchInput}
	 * @param {Object} ev
	 * @param {Number} type flag
	 * @returns {undefined|Array} [all, changed]
	 */
	function getTouches(ev, type) {
	    var allTouches = toArray(ev.touches);
	    var targetIds = this.targetIds;

	    // when there is only one touch, the process can be simplified
	    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
	        targetIds[allTouches[0].identifier] = true;
	        return [allTouches, allTouches];
	    }

	    var i,
	        targetTouches,
	        changedTouches = toArray(ev.changedTouches),
	        changedTargetTouches = [],
	        target = this.target;

	    // get target touches from touches
	    targetTouches = allTouches.filter(function(touch) {
	        return hasParent(touch.target, target);
	    });

	    // collect touches
	    if (type === INPUT_START) {
	        i = 0;
	        while (i < targetTouches.length) {
	            targetIds[targetTouches[i].identifier] = true;
	            i++;
	        }
	    }

	    // filter changed touches to only contain touches that exist in the collected target ids
	    i = 0;
	    while (i < changedTouches.length) {
	        if (targetIds[changedTouches[i].identifier]) {
	            changedTargetTouches.push(changedTouches[i]);
	        }

	        // cleanup removed touches
	        if (type & (INPUT_END | INPUT_CANCEL)) {
	            delete targetIds[changedTouches[i].identifier];
	        }
	        i++;
	    }

	    if (!changedTargetTouches.length) {
	        return;
	    }

	    return [
	        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
	        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
	        changedTargetTouches
	    ];
	}

	/**
	 * Combined touch and mouse input
	 *
	 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
	 * This because touch devices also emit mouse events while doing a touch.
	 *
	 * @constructor
	 * @extends Input
	 */

	var DEDUP_TIMEOUT = 2500;
	var DEDUP_DISTANCE = 25;

	function TouchMouseInput() {
	    Input.apply(this, arguments);

	    var handler = bindFn(this.handler, this);
	    this.touch = new TouchInput(this.manager, handler);
	    this.mouse = new MouseInput(this.manager, handler);

	    this.primaryTouch = null;
	    this.lastTouches = [];
	}

	inherit(TouchMouseInput, Input, {
	    /**
	     * handle mouse and touch events
	     * @param {Hammer} manager
	     * @param {String} inputEvent
	     * @param {Object} inputData
	     */
	    handler: function TMEhandler(manager, inputEvent, inputData) {
	        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
	            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

	        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
	            return;
	        }

	        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
	        if (isTouch) {
	            recordTouches.call(this, inputEvent, inputData);
	        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
	            return;
	        }

	        this.callback(manager, inputEvent, inputData);
	    },

	    /**
	     * remove the event listeners
	     */
	    destroy: function destroy() {
	        this.touch.destroy();
	        this.mouse.destroy();
	    }
	});

	function recordTouches(eventType, eventData) {
	    if (eventType & INPUT_START) {
	        this.primaryTouch = eventData.changedPointers[0].identifier;
	        setLastTouch.call(this, eventData);
	    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	        setLastTouch.call(this, eventData);
	    }
	}

	function setLastTouch(eventData) {
	    var touch = eventData.changedPointers[0];

	    if (touch.identifier === this.primaryTouch) {
	        var lastTouch = {x: touch.clientX, y: touch.clientY};
	        this.lastTouches.push(lastTouch);
	        var lts = this.lastTouches;
	        var removeLastTouch = function() {
	            var i = lts.indexOf(lastTouch);
	            if (i > -1) {
	                lts.splice(i, 1);
	            }
	        };
	        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
	    }
	}

	function isSyntheticEvent(eventData) {
	    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
	    for (var i = 0; i < this.lastTouches.length; i++) {
	        var t = this.lastTouches[i];
	        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
	        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
	            return true;
	        }
	    }
	    return false;
	}

	var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
	var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

	// magical touchAction value
	var TOUCH_ACTION_COMPUTE = 'compute';
	var TOUCH_ACTION_AUTO = 'auto';
	var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
	var TOUCH_ACTION_NONE = 'none';
	var TOUCH_ACTION_PAN_X = 'pan-x';
	var TOUCH_ACTION_PAN_Y = 'pan-y';
	var TOUCH_ACTION_MAP = getTouchActionProps();

	/**
	 * Touch Action
	 * sets the touchAction property or uses the js alternative
	 * @param {Manager} manager
	 * @param {String} value
	 * @constructor
	 */
	function TouchAction(manager, value) {
	    this.manager = manager;
	    this.set(value);
	}

	TouchAction.prototype = {
	    /**
	     * set the touchAction value on the element or enable the polyfill
	     * @param {String} value
	     */
	    set: function(value) {
	        // find out the touch-action by the event handlers
	        if (value == TOUCH_ACTION_COMPUTE) {
	            value = this.compute();
	        }

	        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
	            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
	        }
	        this.actions = value.toLowerCase().trim();
	    },

	    /**
	     * just re-set the touchAction value
	     */
	    update: function() {
	        this.set(this.manager.options.touchAction);
	    },

	    /**
	     * compute the value for the touchAction property based on the recognizer's settings
	     * @returns {String} value
	     */
	    compute: function() {
	        var actions = [];
	        each(this.manager.recognizers, function(recognizer) {
	            if (boolOrFn(recognizer.options.enable, [recognizer])) {
	                actions = actions.concat(recognizer.getTouchAction());
	            }
	        });
	        return cleanTouchActions(actions.join(' '));
	    },

	    /**
	     * this method is called on each input cycle and provides the preventing of the browser behavior
	     * @param {Object} input
	     */
	    preventDefaults: function(input) {
	        var srcEvent = input.srcEvent;
	        var direction = input.offsetDirection;

	        // if the touch action did prevented once this session
	        if (this.manager.session.prevented) {
	            srcEvent.preventDefault();
	            return;
	        }

	        var actions = this.actions;
	        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
	        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
	        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

	        if (hasNone) {
	            //do not prevent defaults if this is a tap gesture

	            var isTapPointer = input.pointers.length === 1;
	            var isTapMovement = input.distance < 2;
	            var isTapTouchTime = input.deltaTime < 250;

	            if (isTapPointer && isTapMovement && isTapTouchTime) {
	                return;
	            }
	        }

	        if (hasPanX && hasPanY) {
	            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
	            return;
	        }

	        if (hasNone ||
	            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
	            (hasPanX && direction & DIRECTION_VERTICAL)) {
	            return this.preventSrc(srcEvent);
	        }
	    },

	    /**
	     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
	     * @param {Object} srcEvent
	     */
	    preventSrc: function(srcEvent) {
	        this.manager.session.prevented = true;
	        srcEvent.preventDefault();
	    }
	};

	/**
	 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
	 * @param {String} actions
	 * @returns {*}
	 */
	function cleanTouchActions(actions) {
	    // none
	    if (inStr(actions, TOUCH_ACTION_NONE)) {
	        return TOUCH_ACTION_NONE;
	    }

	    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
	    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

	    // if both pan-x and pan-y are set (different recognizers
	    // for different directions, e.g. horizontal pan but vertical swipe?)
	    // we need none (as otherwise with pan-x pan-y combined none of these
	    // recognizers will work, since the browser would handle all panning
	    if (hasPanX && hasPanY) {
	        return TOUCH_ACTION_NONE;
	    }

	    // pan-x OR pan-y
	    if (hasPanX || hasPanY) {
	        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
	    }

	    // manipulation
	    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
	        return TOUCH_ACTION_MANIPULATION;
	    }

	    return TOUCH_ACTION_AUTO;
	}

	function getTouchActionProps() {
	    if (!NATIVE_TOUCH_ACTION) {
	        return false;
	    }
	    var touchMap = {};
	    var cssSupports = window.CSS && window.CSS.supports;
	    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

	        // If css.supports is not supported but there is native touch-action assume it supports
	        // all values. This is the case for IE 10 and 11.
	        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
	    });
	    return touchMap;
	}

	/**
	 * Recognizer flow explained; *
	 * All recognizers have the initial state of POSSIBLE when a input session starts.
	 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
	 * Example session for mouse-input: mousedown -> mousemove -> mouseup
	 *
	 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
	 * which determines with state it should be.
	 *
	 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
	 * POSSIBLE to give it another change on the next cycle.
	 *
	 *               Possible
	 *                  |
	 *            +-----+---------------+
	 *            |                     |
	 *      +-----+-----+               |
	 *      |           |               |
	 *   Failed      Cancelled          |
	 *                          +-------+------+
	 *                          |              |
	 *                      Recognized       Began
	 *                                         |
	 *                                      Changed
	 *                                         |
	 *                                  Ended/Recognized
	 */
	var STATE_POSSIBLE = 1;
	var STATE_BEGAN = 2;
	var STATE_CHANGED = 4;
	var STATE_ENDED = 8;
	var STATE_RECOGNIZED = STATE_ENDED;
	var STATE_CANCELLED = 16;
	var STATE_FAILED = 32;

	/**
	 * Recognizer
	 * Every recognizer needs to extend from this class.
	 * @constructor
	 * @param {Object} options
	 */
	function Recognizer(options) {
	    this.options = assign({}, this.defaults, options || {});

	    this.id = uniqueId();

	    this.manager = null;

	    // default is enable true
	    this.options.enable = ifUndefined(this.options.enable, true);

	    this.state = STATE_POSSIBLE;

	    this.simultaneous = {};
	    this.requireFail = [];
	}

	Recognizer.prototype = {
	    /**
	     * @virtual
	     * @type {Object}
	     */
	    defaults: {},

	    /**
	     * set options
	     * @param {Object} options
	     * @return {Recognizer}
	     */
	    set: function(options) {
	        assign(this.options, options);

	        // also update the touchAction, in case something changed about the directions/enabled state
	        this.manager && this.manager.touchAction.update();
	        return this;
	    },

	    /**
	     * recognize simultaneous with an other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    recognizeWith: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
	            return this;
	        }

	        var simultaneous = this.simultaneous;
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        if (!simultaneous[otherRecognizer.id]) {
	            simultaneous[otherRecognizer.id] = otherRecognizer;
	            otherRecognizer.recognizeWith(this);
	        }
	        return this;
	    },

	    /**
	     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    dropRecognizeWith: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
	            return this;
	        }

	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        delete this.simultaneous[otherRecognizer.id];
	        return this;
	    },

	    /**
	     * recognizer can only run when an other is failing
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    requireFailure: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
	            return this;
	        }

	        var requireFail = this.requireFail;
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        if (inArray(requireFail, otherRecognizer) === -1) {
	            requireFail.push(otherRecognizer);
	            otherRecognizer.requireFailure(this);
	        }
	        return this;
	    },

	    /**
	     * drop the requireFailure link. it does not remove the link on the other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    dropRequireFailure: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
	            return this;
	        }

	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        var index = inArray(this.requireFail, otherRecognizer);
	        if (index > -1) {
	            this.requireFail.splice(index, 1);
	        }
	        return this;
	    },

	    /**
	     * has require failures boolean
	     * @returns {boolean}
	     */
	    hasRequireFailures: function() {
	        return this.requireFail.length > 0;
	    },

	    /**
	     * if the recognizer can recognize simultaneous with an other recognizer
	     * @param {Recognizer} otherRecognizer
	     * @returns {Boolean}
	     */
	    canRecognizeWith: function(otherRecognizer) {
	        return !!this.simultaneous[otherRecognizer.id];
	    },

	    /**
	     * You should use `tryEmit` instead of `emit` directly to check
	     * that all the needed recognizers has failed before emitting.
	     * @param {Object} input
	     */
	    emit: function(input) {
	        var self = this;
	        var state = this.state;

	        function emit(event) {
	            self.manager.emit(event, input);
	        }

	        // 'panstart' and 'panmove'
	        if (state < STATE_ENDED) {
	            emit(self.options.event + stateStr(state));
	        }

	        emit(self.options.event); // simple 'eventName' events

	        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
	            emit(input.additionalEvent);
	        }

	        // panend and pancancel
	        if (state >= STATE_ENDED) {
	            emit(self.options.event + stateStr(state));
	        }
	    },

	    /**
	     * Check that all the require failure recognizers has failed,
	     * if true, it emits a gesture event,
	     * otherwise, setup the state to FAILED.
	     * @param {Object} input
	     */
	    tryEmit: function(input) {
	        if (this.canEmit()) {
	            return this.emit(input);
	        }
	        // it's failing anyway
	        this.state = STATE_FAILED;
	    },

	    /**
	     * can we emit?
	     * @returns {boolean}
	     */
	    canEmit: function() {
	        var i = 0;
	        while (i < this.requireFail.length) {
	            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
	                return false;
	            }
	            i++;
	        }
	        return true;
	    },

	    /**
	     * update the recognizer
	     * @param {Object} inputData
	     */
	    recognize: function(inputData) {
	        // make a new copy of the inputData
	        // so we can change the inputData without messing up the other recognizers
	        var inputDataClone = assign({}, inputData);

	        // is is enabled and allow recognizing?
	        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
	            this.reset();
	            this.state = STATE_FAILED;
	            return;
	        }

	        // reset when we've reached the end
	        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
	            this.state = STATE_POSSIBLE;
	        }

	        this.state = this.process(inputDataClone);

	        // the recognizer has recognized a gesture
	        // so trigger an event
	        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
	            this.tryEmit(inputDataClone);
	        }
	    },

	    /**
	     * return the state of the recognizer
	     * the actual recognizing happens in this method
	     * @virtual
	     * @param {Object} inputData
	     * @returns {Const} STATE
	     */
	    process: function(inputData) { }, // jshint ignore:line

	    /**
	     * return the preferred touch-action
	     * @virtual
	     * @returns {Array}
	     */
	    getTouchAction: function() { },

	    /**
	     * called when the gesture isn't allowed to recognize
	     * like when another is being recognized or it is disabled
	     * @virtual
	     */
	    reset: function() { }
	};

	/**
	 * get a usable string, used as event postfix
	 * @param {Const} state
	 * @returns {String} state
	 */
	function stateStr(state) {
	    if (state & STATE_CANCELLED) {
	        return 'cancel';
	    } else if (state & STATE_ENDED) {
	        return 'end';
	    } else if (state & STATE_CHANGED) {
	        return 'move';
	    } else if (state & STATE_BEGAN) {
	        return 'start';
	    }
	    return '';
	}

	/**
	 * direction cons to string
	 * @param {Const} direction
	 * @returns {String}
	 */
	function directionStr(direction) {
	    if (direction == DIRECTION_DOWN) {
	        return 'down';
	    } else if (direction == DIRECTION_UP) {
	        return 'up';
	    } else if (direction == DIRECTION_LEFT) {
	        return 'left';
	    } else if (direction == DIRECTION_RIGHT) {
	        return 'right';
	    }
	    return '';
	}

	/**
	 * get a recognizer by name if it is bound to a manager
	 * @param {Recognizer|String} otherRecognizer
	 * @param {Recognizer} recognizer
	 * @returns {Recognizer}
	 */
	function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
	    var manager = recognizer.manager;
	    if (manager) {
	        return manager.get(otherRecognizer);
	    }
	    return otherRecognizer;
	}

	/**
	 * This recognizer is just used as a base for the simple attribute recognizers.
	 * @constructor
	 * @extends Recognizer
	 */
	function AttrRecognizer() {
	    Recognizer.apply(this, arguments);
	}

	inherit(AttrRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof AttrRecognizer
	     */
	    defaults: {
	        /**
	         * @type {Number}
	         * @default 1
	         */
	        pointers: 1
	    },

	    /**
	     * Used to check if it the recognizer receives valid input, like input.distance > 10.
	     * @memberof AttrRecognizer
	     * @param {Object} input
	     * @returns {Boolean} recognized
	     */
	    attrTest: function(input) {
	        var optionPointers = this.options.pointers;
	        return optionPointers === 0 || input.pointers.length === optionPointers;
	    },

	    /**
	     * Process the input and return the state for the recognizer
	     * @memberof AttrRecognizer
	     * @param {Object} input
	     * @returns {*} State
	     */
	    process: function(input) {
	        var state = this.state;
	        var eventType = input.eventType;

	        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
	        var isValid = this.attrTest(input);

	        // on cancel input and we've recognized before, return STATE_CANCELLED
	        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
	            return state | STATE_CANCELLED;
	        } else if (isRecognized || isValid) {
	            if (eventType & INPUT_END) {
	                return state | STATE_ENDED;
	            } else if (!(state & STATE_BEGAN)) {
	                return STATE_BEGAN;
	            }
	            return state | STATE_CHANGED;
	        }
	        return STATE_FAILED;
	    }
	});

	/**
	 * Pan
	 * Recognized when the pointer is down and moved in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function PanRecognizer() {
	    AttrRecognizer.apply(this, arguments);

	    this.pX = null;
	    this.pY = null;
	}

	inherit(PanRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof PanRecognizer
	     */
	    defaults: {
	        event: 'pan',
	        threshold: 10,
	        pointers: 1,
	        direction: DIRECTION_ALL
	    },

	    getTouchAction: function() {
	        var direction = this.options.direction;
	        var actions = [];
	        if (direction & DIRECTION_HORIZONTAL) {
	            actions.push(TOUCH_ACTION_PAN_Y);
	        }
	        if (direction & DIRECTION_VERTICAL) {
	            actions.push(TOUCH_ACTION_PAN_X);
	        }
	        return actions;
	    },

	    directionTest: function(input) {
	        var options = this.options;
	        var hasMoved = true;
	        var distance = input.distance;
	        var direction = input.direction;
	        var x = input.deltaX;
	        var y = input.deltaY;

	        // lock to axis?
	        if (!(direction & options.direction)) {
	            if (options.direction & DIRECTION_HORIZONTAL) {
	                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
	                hasMoved = x != this.pX;
	                distance = Math.abs(input.deltaX);
	            } else {
	                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
	                hasMoved = y != this.pY;
	                distance = Math.abs(input.deltaY);
	            }
	        }
	        input.direction = direction;
	        return hasMoved && distance > options.threshold && direction & options.direction;
	    },

	    attrTest: function(input) {
	        return AttrRecognizer.prototype.attrTest.call(this, input) &&
	            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
	    },

	    emit: function(input) {

	        this.pX = input.deltaX;
	        this.pY = input.deltaY;

	        var direction = directionStr(input.direction);

	        if (direction) {
	            input.additionalEvent = this.options.event + direction;
	        }
	        this._super.emit.call(this, input);
	    }
	});

	/**
	 * Pinch
	 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function PinchRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}

	inherit(PinchRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof PinchRecognizer
	     */
	    defaults: {
	        event: 'pinch',
	        threshold: 0,
	        pointers: 2
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_NONE];
	    },

	    attrTest: function(input) {
	        return this._super.attrTest.call(this, input) &&
	            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
	    },

	    emit: function(input) {
	        if (input.scale !== 1) {
	            var inOut = input.scale < 1 ? 'in' : 'out';
	            input.additionalEvent = this.options.event + inOut;
	        }
	        this._super.emit.call(this, input);
	    }
	});

	/**
	 * Press
	 * Recognized when the pointer is down for x ms without any movement.
	 * @constructor
	 * @extends Recognizer
	 */
	function PressRecognizer() {
	    Recognizer.apply(this, arguments);

	    this._timer = null;
	    this._input = null;
	}

	inherit(PressRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof PressRecognizer
	     */
	    defaults: {
	        event: 'press',
	        pointers: 1,
	        time: 251, // minimal time of the pointer to be pressed
	        threshold: 9 // a minimal movement is ok, but keep it low
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_AUTO];
	    },

	    process: function(input) {
	        var options = this.options;
	        var validPointers = input.pointers.length === options.pointers;
	        var validMovement = input.distance < options.threshold;
	        var validTime = input.deltaTime > options.time;

	        this._input = input;

	        // we only allow little movement
	        // and we've reached an end event, so a tap is possible
	        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
	            this.reset();
	        } else if (input.eventType & INPUT_START) {
	            this.reset();
	            this._timer = setTimeoutContext(function() {
	                this.state = STATE_RECOGNIZED;
	                this.tryEmit();
	            }, options.time, this);
	        } else if (input.eventType & INPUT_END) {
	            return STATE_RECOGNIZED;
	        }
	        return STATE_FAILED;
	    },

	    reset: function() {
	        clearTimeout(this._timer);
	    },

	    emit: function(input) {
	        if (this.state !== STATE_RECOGNIZED) {
	            return;
	        }

	        if (input && (input.eventType & INPUT_END)) {
	            this.manager.emit(this.options.event + 'up', input);
	        } else {
	            this._input.timeStamp = now();
	            this.manager.emit(this.options.event, this._input);
	        }
	    }
	});

	/**
	 * Rotate
	 * Recognized when two or more pointer are moving in a circular motion.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function RotateRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}

	inherit(RotateRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof RotateRecognizer
	     */
	    defaults: {
	        event: 'rotate',
	        threshold: 0,
	        pointers: 2
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_NONE];
	    },

	    attrTest: function(input) {
	        return this._super.attrTest.call(this, input) &&
	            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
	    }
	});

	/**
	 * Swipe
	 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function SwipeRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}

	inherit(SwipeRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof SwipeRecognizer
	     */
	    defaults: {
	        event: 'swipe',
	        threshold: 10,
	        velocity: 0.3,
	        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
	        pointers: 1
	    },

	    getTouchAction: function() {
	        return PanRecognizer.prototype.getTouchAction.call(this);
	    },

	    attrTest: function(input) {
	        var direction = this.options.direction;
	        var velocity;

	        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
	            velocity = input.overallVelocity;
	        } else if (direction & DIRECTION_HORIZONTAL) {
	            velocity = input.overallVelocityX;
	        } else if (direction & DIRECTION_VERTICAL) {
	            velocity = input.overallVelocityY;
	        }

	        return this._super.attrTest.call(this, input) &&
	            direction & input.offsetDirection &&
	            input.distance > this.options.threshold &&
	            input.maxPointers == this.options.pointers &&
	            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
	    },

	    emit: function(input) {
	        var direction = directionStr(input.offsetDirection);
	        if (direction) {
	            this.manager.emit(this.options.event + direction, input);
	        }

	        this.manager.emit(this.options.event, input);
	    }
	});

	/**
	 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
	 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
	 * a single tap.
	 *
	 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
	 * multi-taps being recognized.
	 * @constructor
	 * @extends Recognizer
	 */
	function TapRecognizer() {
	    Recognizer.apply(this, arguments);

	    // previous time and center,
	    // used for tap counting
	    this.pTime = false;
	    this.pCenter = false;

	    this._timer = null;
	    this._input = null;
	    this.count = 0;
	}

	inherit(TapRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof PinchRecognizer
	     */
	    defaults: {
	        event: 'tap',
	        pointers: 1,
	        taps: 1,
	        interval: 300, // max time between the multi-tap taps
	        time: 250, // max time of the pointer to be down (like finger on the screen)
	        threshold: 9, // a minimal movement is ok, but keep it low
	        posThreshold: 10 // a multi-tap can be a bit off the initial position
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_MANIPULATION];
	    },

	    process: function(input) {
	        var options = this.options;

	        var validPointers = input.pointers.length === options.pointers;
	        var validMovement = input.distance < options.threshold;
	        var validTouchTime = input.deltaTime < options.time;

	        this.reset();

	        if ((input.eventType & INPUT_START) && (this.count === 0)) {
	            return this.failTimeout();
	        }

	        // we only allow little movement
	        // and we've reached an end event, so a tap is possible
	        if (validMovement && validTouchTime && validPointers) {
	            if (input.eventType != INPUT_END) {
	                return this.failTimeout();
	            }

	            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
	            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

	            this.pTime = input.timeStamp;
	            this.pCenter = input.center;

	            if (!validMultiTap || !validInterval) {
	                this.count = 1;
	            } else {
	                this.count += 1;
	            }

	            this._input = input;

	            // if tap count matches we have recognized it,
	            // else it has began recognizing...
	            var tapCount = this.count % options.taps;
	            if (tapCount === 0) {
	                // no failing requirements, immediately trigger the tap event
	                // or wait as long as the multitap interval to trigger
	                if (!this.hasRequireFailures()) {
	                    return STATE_RECOGNIZED;
	                } else {
	                    this._timer = setTimeoutContext(function() {
	                        this.state = STATE_RECOGNIZED;
	                        this.tryEmit();
	                    }, options.interval, this);
	                    return STATE_BEGAN;
	                }
	            }
	        }
	        return STATE_FAILED;
	    },

	    failTimeout: function() {
	        this._timer = setTimeoutContext(function() {
	            this.state = STATE_FAILED;
	        }, this.options.interval, this);
	        return STATE_FAILED;
	    },

	    reset: function() {
	        clearTimeout(this._timer);
	    },

	    emit: function() {
	        if (this.state == STATE_RECOGNIZED) {
	            this._input.tapCount = this.count;
	            this.manager.emit(this.options.event, this._input);
	        }
	    }
	});

	/**
	 * Simple way to create a manager with a default set of recognizers.
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */
	function Hammer(element, options) {
	    options = options || {};
	    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
	    return new Manager(element, options);
	}

	/**
	 * @const {string}
	 */
	Hammer.VERSION = '2.0.7';

	/**
	 * default settings
	 * @namespace
	 */
	Hammer.defaults = {
	    /**
	     * set if DOM events are being triggered.
	     * But this is slower and unused by simple implementations, so disabled by default.
	     * @type {Boolean}
	     * @default false
	     */
	    domEvents: false,

	    /**
	     * The value for the touchAction property/fallback.
	     * When set to `compute` it will magically set the correct value based on the added recognizers.
	     * @type {String}
	     * @default compute
	     */
	    touchAction: TOUCH_ACTION_COMPUTE,

	    /**
	     * @type {Boolean}
	     * @default true
	     */
	    enable: true,

	    /**
	     * EXPERIMENTAL FEATURE -- can be removed/changed
	     * Change the parent input target element.
	     * If Null, then it is being set the to main element.
	     * @type {Null|EventTarget}
	     * @default null
	     */
	    inputTarget: null,

	    /**
	     * force an input class
	     * @type {Null|Function}
	     * @default null
	     */
	    inputClass: null,

	    /**
	     * Default recognizer setup when calling `Hammer()`
	     * When creating a new Manager these will be skipped.
	     * @type {Array}
	     */
	    preset: [
	        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
	        [RotateRecognizer, {enable: false}],
	        [PinchRecognizer, {enable: false}, ['rotate']],
	        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
	        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
	        [TapRecognizer],
	        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
	        [PressRecognizer]
	    ],

	    /**
	     * Some CSS properties can be used to improve the working of Hammer.
	     * Add them to this method and they will be set when creating a new Manager.
	     * @namespace
	     */
	    cssProps: {
	        /**
	         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
	         * @type {String}
	         * @default 'none'
	         */
	        userSelect: 'none',

	        /**
	         * Disable the Windows Phone grippers when pressing an element.
	         * @type {String}
	         * @default 'none'
	         */
	        touchSelect: 'none',

	        /**
	         * Disables the default callout shown when you touch and hold a touch target.
	         * On iOS, when you touch and hold a touch target such as a link, Safari displays
	         * a callout containing information about the link. This property allows you to disable that callout.
	         * @type {String}
	         * @default 'none'
	         */
	        touchCallout: 'none',

	        /**
	         * Specifies whether zooming is enabled. Used by IE10>
	         * @type {String}
	         * @default 'none'
	         */
	        contentZooming: 'none',

	        /**
	         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
	         * @type {String}
	         * @default 'none'
	         */
	        userDrag: 'none',

	        /**
	         * Overrides the highlight color shown when the user taps a link or a JavaScript
	         * clickable element in iOS. This property obeys the alpha value, if specified.
	         * @type {String}
	         * @default 'rgba(0,0,0,0)'
	         */
	        tapHighlightColor: 'rgba(0,0,0,0)'
	    }
	};

	var STOP = 1;
	var FORCED_STOP = 2;

	/**
	 * Manager
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */
	function Manager(element, options) {
	    this.options = assign({}, Hammer.defaults, options || {});

	    this.options.inputTarget = this.options.inputTarget || element;

	    this.handlers = {};
	    this.session = {};
	    this.recognizers = [];
	    this.oldCssProps = {};

	    this.element = element;
	    this.input = createInputInstance(this);
	    this.touchAction = new TouchAction(this, this.options.touchAction);

	    toggleCssProps(this, true);

	    each(this.options.recognizers, function(item) {
	        var recognizer = this.add(new (item[0])(item[1]));
	        item[2] && recognizer.recognizeWith(item[2]);
	        item[3] && recognizer.requireFailure(item[3]);
	    }, this);
	}

	Manager.prototype = {
	    /**
	     * set options
	     * @param {Object} options
	     * @returns {Manager}
	     */
	    set: function(options) {
	        assign(this.options, options);

	        // Options that need a little more setup
	        if (options.touchAction) {
	            this.touchAction.update();
	        }
	        if (options.inputTarget) {
	            // Clean up existing event listeners and reinitialize
	            this.input.destroy();
	            this.input.target = options.inputTarget;
	            this.input.init();
	        }
	        return this;
	    },

	    /**
	     * stop recognizing for this session.
	     * This session will be discarded, when a new [input]start event is fired.
	     * When forced, the recognizer cycle is stopped immediately.
	     * @param {Boolean} [force]
	     */
	    stop: function(force) {
	        this.session.stopped = force ? FORCED_STOP : STOP;
	    },

	    /**
	     * run the recognizers!
	     * called by the inputHandler function on every movement of the pointers (touches)
	     * it walks through all the recognizers and tries to detect the gesture that is being made
	     * @param {Object} inputData
	     */
	    recognize: function(inputData) {
	        var session = this.session;
	        if (session.stopped) {
	            return;
	        }

	        // run the touch-action polyfill
	        this.touchAction.preventDefaults(inputData);

	        var recognizer;
	        var recognizers = this.recognizers;

	        // this holds the recognizer that is being recognized.
	        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
	        // if no recognizer is detecting a thing, it is set to `null`
	        var curRecognizer = session.curRecognizer;

	        // reset when the last recognizer is recognized
	        // or when we're in a new session
	        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
	            curRecognizer = session.curRecognizer = null;
	        }

	        var i = 0;
	        while (i < recognizers.length) {
	            recognizer = recognizers[i];

	            // find out if we are allowed try to recognize the input for this one.
	            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
	            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
	            //      that is being recognized.
	            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
	            //      this can be setup with the `recognizeWith()` method on the recognizer.
	            if (session.stopped !== FORCED_STOP && ( // 1
	                    !curRecognizer || recognizer == curRecognizer || // 2
	                    recognizer.canRecognizeWith(curRecognizer))) { // 3
	                recognizer.recognize(inputData);
	            } else {
	                recognizer.reset();
	            }

	            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
	            // current active recognizer. but only if we don't already have an active recognizer
	            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
	                curRecognizer = session.curRecognizer = recognizer;
	            }
	            i++;
	        }
	    },

	    /**
	     * get a recognizer by its event name.
	     * @param {Recognizer|String} recognizer
	     * @returns {Recognizer|Null}
	     */
	    get: function(recognizer) {
	        if (recognizer instanceof Recognizer) {
	            return recognizer;
	        }

	        var recognizers = this.recognizers;
	        for (var i = 0; i < recognizers.length; i++) {
	            if (recognizers[i].options.event == recognizer) {
	                return recognizers[i];
	            }
	        }
	        return null;
	    },

	    /**
	     * add a recognizer to the manager
	     * existing recognizers with the same event name will be removed
	     * @param {Recognizer} recognizer
	     * @returns {Recognizer|Manager}
	     */
	    add: function(recognizer) {
	        if (invokeArrayArg(recognizer, 'add', this)) {
	            return this;
	        }

	        // remove existing
	        var existing = this.get(recognizer.options.event);
	        if (existing) {
	            this.remove(existing);
	        }

	        this.recognizers.push(recognizer);
	        recognizer.manager = this;

	        this.touchAction.update();
	        return recognizer;
	    },

	    /**
	     * remove a recognizer by name or instance
	     * @param {Recognizer|String} recognizer
	     * @returns {Manager}
	     */
	    remove: function(recognizer) {
	        if (invokeArrayArg(recognizer, 'remove', this)) {
	            return this;
	        }

	        recognizer = this.get(recognizer);

	        // let's make sure this recognizer exists
	        if (recognizer) {
	            var recognizers = this.recognizers;
	            var index = inArray(recognizers, recognizer);

	            if (index !== -1) {
	                recognizers.splice(index, 1);
	                this.touchAction.update();
	            }
	        }

	        return this;
	    },

	    /**
	     * bind event
	     * @param {String} events
	     * @param {Function} handler
	     * @returns {EventEmitter} this
	     */
	    on: function(events, handler) {
	        if (events === undefined) {
	            return;
	        }
	        if (handler === undefined) {
	            return;
	        }

	        var handlers = this.handlers;
	        each(splitStr(events), function(event) {
	            handlers[event] = handlers[event] || [];
	            handlers[event].push(handler);
	        });
	        return this;
	    },

	    /**
	     * unbind event, leave emit blank to remove all handlers
	     * @param {String} events
	     * @param {Function} [handler]
	     * @returns {EventEmitter} this
	     */
	    off: function(events, handler) {
	        if (events === undefined) {
	            return;
	        }

	        var handlers = this.handlers;
	        each(splitStr(events), function(event) {
	            if (!handler) {
	                delete handlers[event];
	            } else {
	                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
	            }
	        });
	        return this;
	    },

	    /**
	     * emit event to the listeners
	     * @param {String} event
	     * @param {Object} data
	     */
	    emit: function(event, data) {
	        // we also want to trigger dom events
	        if (this.options.domEvents) {
	            triggerDomEvent(event, data);
	        }

	        // no handlers, so skip it all
	        var handlers = this.handlers[event] && this.handlers[event].slice();
	        if (!handlers || !handlers.length) {
	            return;
	        }

	        data.type = event;
	        data.preventDefault = function() {
	            data.srcEvent.preventDefault();
	        };

	        var i = 0;
	        while (i < handlers.length) {
	            handlers[i](data);
	            i++;
	        }
	    },

	    /**
	     * destroy the manager and unbinds all events
	     * it doesn't unbind dom events, that is the user own responsibility
	     */
	    destroy: function() {
	        this.element && toggleCssProps(this, false);

	        this.handlers = {};
	        this.session = {};
	        this.input.destroy();
	        this.element = null;
	    }
	};

	/**
	 * add/remove the css properties as defined in manager.options.cssProps
	 * @param {Manager} manager
	 * @param {Boolean} add
	 */
	function toggleCssProps(manager, add) {
	    var element = manager.element;
	    if (!element.style) {
	        return;
	    }
	    var prop;
	    each(manager.options.cssProps, function(value, name) {
	        prop = prefixed(element.style, name);
	        if (add) {
	            manager.oldCssProps[prop] = element.style[prop];
	            element.style[prop] = value;
	        } else {
	            element.style[prop] = manager.oldCssProps[prop] || '';
	        }
	    });
	    if (!add) {
	        manager.oldCssProps = {};
	    }
	}

	/**
	 * trigger dom event
	 * @param {String} event
	 * @param {Object} data
	 */
	function triggerDomEvent(event, data) {
	    var gestureEvent = document.createEvent('Event');
	    gestureEvent.initEvent(event, true, true);
	    gestureEvent.gesture = data;
	    data.target.dispatchEvent(gestureEvent);
	}

	assign(Hammer, {
	    INPUT_START: INPUT_START,
	    INPUT_MOVE: INPUT_MOVE,
	    INPUT_END: INPUT_END,
	    INPUT_CANCEL: INPUT_CANCEL,

	    STATE_POSSIBLE: STATE_POSSIBLE,
	    STATE_BEGAN: STATE_BEGAN,
	    STATE_CHANGED: STATE_CHANGED,
	    STATE_ENDED: STATE_ENDED,
	    STATE_RECOGNIZED: STATE_RECOGNIZED,
	    STATE_CANCELLED: STATE_CANCELLED,
	    STATE_FAILED: STATE_FAILED,

	    DIRECTION_NONE: DIRECTION_NONE,
	    DIRECTION_LEFT: DIRECTION_LEFT,
	    DIRECTION_RIGHT: DIRECTION_RIGHT,
	    DIRECTION_UP: DIRECTION_UP,
	    DIRECTION_DOWN: DIRECTION_DOWN,
	    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
	    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
	    DIRECTION_ALL: DIRECTION_ALL,

	    Manager: Manager,
	    Input: Input,
	    TouchAction: TouchAction,

	    TouchInput: TouchInput,
	    MouseInput: MouseInput,
	    PointerEventInput: PointerEventInput,
	    TouchMouseInput: TouchMouseInput,
	    SingleTouchInput: SingleTouchInput,

	    Recognizer: Recognizer,
	    AttrRecognizer: AttrRecognizer,
	    Tap: TapRecognizer,
	    Pan: PanRecognizer,
	    Swipe: SwipeRecognizer,
	    Pinch: PinchRecognizer,
	    Rotate: RotateRecognizer,
	    Press: PressRecognizer,

	    on: addEventListeners,
	    off: removeEventListeners,
	    each: each,
	    merge: merge,
	    extend: extend,
	    assign: assign,
	    inherit: inherit,
	    bindFn: bindFn,
	    prefixed: prefixed
	});

	// this prevents errors when Hammer is loaded in the presence of an AMD
	//  style loader but by script tag, not by the loader.
	var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
	freeGlobal.Hammer = Hammer;

	if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	        return Hammer;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module != 'undefined' && module.exports) {
	    module.exports = Hammer;
	} else {
	    window[exportName] = Hammer;
	}

	})(window, document, 'Hammer');


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define(factory);
		else if(typeof exports === 'object')
			exports["mojs"] = factory();
		else
			root["mojs"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "build/";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(53);


	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(59);
		__webpack_require__(58);
		module.exports = __webpack_require__(61)('iterator');

	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _keys = __webpack_require__(28);

		var _keys2 = _interopRequireDefault(_keys);

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(24);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(25);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _module = __webpack_require__(16);

		var _module2 = _interopRequireDefault(_module);

		var _thenable = __webpack_require__(12);

		var _thenable2 = _interopRequireDefault(_thenable);

		var _tunable = __webpack_require__(13);

		var _tunable2 = _interopRequireDefault(_tunable);

		var _tweenable = __webpack_require__(11);

		var _tweenable2 = _interopRequireDefault(_tweenable);

		var _tween = __webpack_require__(8);

		var _tween2 = _interopRequireDefault(_tween);

		var _timeline = __webpack_require__(9);

		var _timeline2 = _interopRequireDefault(_timeline);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var h = __webpack_require__(19);
		var Bit = __webpack_require__(26);
		var shapesMap = __webpack_require__(20);


		// TODO
		//  - refactor
		//    - add setIfChanged to Module
		//  --
		//  - tween for every prop

		var Shape = function (_Tunable) {
		  (0, _inherits3.default)(Shape, _Tunable);

		  function Shape() {
		    (0, _classCallCheck3.default)(this, Shape);
		    return (0, _possibleConstructorReturn3.default)(this, _Tunable.apply(this, arguments));
		  }

		  /*
		    Method to declare module's defaults.
		    @private
		  */

		  Shape.prototype._declareDefaults = function _declareDefaults() {
		    // DEFAULTS / APIs
		    this._defaults = {
		      // where to append the module to [selector, HTMLElement]
		      parent: document.body,
		      // class name for the `el`
		      className: '',
		      // Possible values: [circle, line, zigzag, rect, polygon, cross, equal ]
		      shape: 'circle',
		      // ∆ :: Possible values: [color name, rgb, rgba, hex]
		      stroke: 'transparent',
		      // ∆ :: Possible values: [ 0..1 ]
		      strokeOpacity: 1,
		      // Possible values: ['butt' | 'round' | 'square']
		      strokeLinecap: '',
		      // ∆ :: Possible values: [ number ]
		      strokeWidth: 2,
		      // ∆ :: Units :: Possible values: [ number, string ]
		      strokeDasharray: 0,
		      // ∆ :: Units :: Possible values: [ number, string ]
		      strokeDashoffset: 0,
		      // ∆ :: Possible values: [color name, rgb, rgba, hex]
		      fill: 'deeppink',
		      // ∆ :: Possible values: [ 0..1 ]
		      fillOpacity: 1,
		      // {Boolean} - if should hide module with `opacity` instead of `display`
		      isSoftHide: true,
		      // {Boolean} - if should trigger composite layer for the `el`
		      isForce3d: false,
		      // ∆ :: Units :: Possible values: [ number, string ]
		      left: '50%',
		      // ∆ :: Units :: Possible values: [ number, string ]
		      top: '50%',
		      // ∆ :: Units :: Possible values: [ number, string ]
		      x: 0,
		      // ∆ :: Units :: Possible values: [ number, string ]
		      y: 0,
		      // ∆ :: Possible values: [ number ]
		      angle: 0,
		      // ∆ :: Possible values: [ number ]
		      scale: 1,
		      // ∆ :: Possible values: [ number ] Fallbacks to `scale`.
		      scaleX: null,
		      // ∆ :: Possible values: [ number ] Fallbacks to `scale`.
		      scaleY: null,
		      // ∆ :: Possible values: [ number, string ]
		      origin: '50% 50%',
		      // ∆ :: Possible values: [ 0..1 ]
		      opacity: 1,
		      // ∆ :: Units :: Possible values: [ number, string ]
		      rx: 0,
		      // ∆ :: Units :: Possible values: [ number, string ]
		      ry: 0,
		      // ∆ :: Possible values: [ number ]
		      points: 3,
		      // ∆ :: Possible values: [ number ]
		      radius: 50,
		      // ∆ :: Possible values: [ number ]
		      radiusX: null,
		      // ∆ :: Possible values: [ number ]
		      radiusY: null,
		      // Possible values: [ boolean ]
		      isShowStart: false,
		      // Possible values: [ boolean ]
		      isShowEnd: true,
		      // Possible values: [ boolean ]
		      isRefreshState: true,
		      // Possible values: [ number > 0 ]
		      duration: 400,
		      // Possible values: [ number ]

		      /* technical ones: */
		      // explicit width of the module canvas
		      width: null,
		      // explicit height of the module canvas
		      height: null,
		      // Possible values: [ number ]
		      // sizeGap:          0,
		      /* [boolean] :: If should have child shape. */
		      isWithShape: true,
		      // context for all the callbacks
		      callbacksContext: this
		    };
		  };
		  /*
		    Method to start the animation with optional new options.
		    @public
		    @overrides @ Tunable
		    @param {Object} New options to set on the run.
		    @returns {Object} this.
		  */


		  Shape.prototype.tune = function tune(o) {
		    _Tunable.prototype.tune.call(this, o);
		    // update shapeModule's size to the max in `then` chain
		    this._getMaxSizeInChain();
		    return this;
		  };
		  /*
		    Method to create a then record for the module.
		    @public
		    @overrides @ Thenable
		    @param    {Object} Options for the next animation.
		    @returns  {Object} this.
		  */


		  Shape.prototype.then = function then(o) {
		    // this._makeTimeline()
		    _Tunable.prototype.then.call(this, o);
		    // update shapeModule's size to the max in `then` chain
		    this._getMaxSizeInChain();
		    return this;
		  };

		  // ^ PUBLIC  METHOD(S) ^
		  // v PRIVATE METHOD(S) v

		  /*
		    Method to declare variables.
		    @overrides Thenable
		  */


		  Shape.prototype._vars = function _vars() {
		    // call _vars method on Thenable
		    _Tunable.prototype._vars.call(this);
		    this._lastSet = {};
		    // save previous module in the chain
		    this._prevChainModule = this._o.prevChainModule;
		    // should draw on foreign svg canvas
		    this.isForeign = !!this._o.ctx;
		    // this._o.isTimelineLess = true;
		    // should take an svg element as self bit
		    return this.isForeignBit = !!this._o.shape;
		  };
		  /*
		    Method to initialize modules presentation.
		    @private
		    @overrides Module
		  */


		  Shape.prototype._render = function _render() {
		    if (!this._isRendered && !this._isChained) {
		      // create `mojs` shape element
		      this.el = document.createElement('div');
		      // set name on the `el`
		      this.el.setAttribute('data-name', 'mojs-shape');
		      // set class on the `el`
		      this.el.setAttribute('class', this._props.className);
		      // create shape module
		      this._createShape();
		      // append `el` to parent
		      this._props.parent.appendChild(this.el);
		      // set position styles on the el
		      this._setElStyles();
		      // set initial position for the first module in the chain
		      this._setProgress(0, 0);
		      // show at start if `isShowStart`
		      if (this._props.isShowStart) {
		        this._show();
		      } else {
		        this._hide();
		      }
		      // set `_isRendered` hatch
		      this._isRendered = true;
		    } else if (this._isChained) {
		      // save elements from master module
		      this.el = this._masterModule.el;
		      this.shapeModule = this._masterModule.shapeModule;
		    }

		    return this;
		  };
		  /*
		    Method to set el styles on initialization.
		    @private
		  */


		  Shape.prototype._setElStyles = function _setElStyles() {
		    if (!this.el) {
		      return;
		    }
		    // if (!this.isForeign) {
		    var p = this._props,
		        style = this.el.style,
		        width = p.shapeWidth,
		        height = p.shapeHeight;

		    style.position = 'absolute';
		    this._setElSizeStyles(width, height);

		    if (p.isForce3d) {
		      var name = 'backface-visibility';
		      style['' + name] = 'hidden';
		      style['' + h.prefix.css + name] = 'hidden';
		    }
		    // }
		  };
		  /*
		    Method to set `width`/`height`/`margins` to the `el` styles.
		    @param {Number} Width.
		    @param {height} Height.
		  */


		  Shape.prototype._setElSizeStyles = function _setElSizeStyles(width, height) {
		    var style = this.el.style;
		    style.width = width + 'px';
		    style.height = height + 'px';
		    style['margin-left'] = -width / 2 + 'px';
		    style['margin-top'] = -height / 2 + 'px';
		  };
		  /*
		    Method to draw shape.
		    @private
		  */


		  Shape.prototype._draw = function _draw() {
		    if (!this.shapeModule) {
		      return;
		    }

		    var p = this._props,
		        bP = this.shapeModule._props;
		    // set props on bit
		    // bP.x                    = this._origin.x;
		    // bP.y                    = this._origin.y;
		    bP.rx = p.rx;
		    bP.ry = p.ry;
		    bP.stroke = p.stroke;
		    bP['stroke-width'] = p.strokeWidth;
		    bP['stroke-opacity'] = p.strokeOpacity;
		    bP['stroke-dasharray'] = p.strokeDasharray;
		    bP['stroke-dashoffset'] = p.strokeDashoffset;
		    bP['stroke-linecap'] = p.strokeLinecap;
		    bP['fill'] = p.fill;
		    bP['fill-opacity'] = p.fillOpacity;
		    bP.radius = p.radius;
		    bP.radiusX = p.radiusX;
		    bP.radiusY = p.radiusY;
		    bP.points = p.points;

		    this.shapeModule._draw();
		    this._drawEl();
		  };
		  /*
		    Method to set current modules props to main div el.
		    @private
		  */


		  Shape.prototype._drawEl = function _drawEl() {
		    // return;
		    if (this.el == null) {
		      return true;
		    }
		    var p = this._props;
		    var style = this.el.style;

		    // style.opacity = p.opacity;
		    this._isPropChanged('opacity') && (style.opacity = p.opacity);
		    if (!this.isForeign) {
		      this._isPropChanged('left') && (style.left = p.left);
		      this._isPropChanged('top') && (style.top = p.top);

		      var isX = this._isPropChanged('x'),
		          isY = this._isPropChanged('y'),
		          isTranslate = isX || isY,
		          isScaleX = this._isPropChanged('scaleX'),
		          isScaleY = this._isPropChanged('scaleY'),
		          isScale = this._isPropChanged('scale'),
		          isScale = isScale || isScaleX || isScaleY,
		          isRotate = this._isPropChanged('angle');

		      if (isTranslate || isScale || isRotate) {
		        var transform = this._fillTransform();
		        style[h.prefix.css + 'transform'] = transform;
		        style['transform'] = transform;
		      }

		      if (this._isPropChanged('origin') || this._deltas['origin']) {
		        var origin = this._fillOrigin();
		        style[h.prefix.css + 'transform-origin'] = origin;
		        style['transform-origin'] = origin;
		      }
		    }
		  };
		  /*
		    Method to check if property changed after the latest check.
		    @private
		    @param {String} Name of the property to check.
		    @returns {Boolean}
		  */


		  Shape.prototype._isPropChanged = function _isPropChanged(name) {
		    // if there is no recod for the property - create it
		    if (this._lastSet[name] == null) {
		      this._lastSet[name] = {};
		    }
		    if (this._lastSet[name].value !== this._props[name]) {
		      this._lastSet[name].value = this._props[name];
		      return true;
		    } else {
		      return false;
		    }
		  };
		  /*
		    Method to tune new option on run.
		    @private
		    @override @ Module
		    @param {Object}  Option to tune on run.
		  */


		  Shape.prototype._tuneNewOptions = function _tuneNewOptions(o) {
		    // call super on Module
		    _Tunable.prototype._tuneNewOptions.call(this, o);
		    // return if empty object
		    if (!(o != null && (0, _keys2.default)(o).length)) {
		      return 1;
		    }

		    // this._calcSize();
		    this._setElStyles();
		  };
		  /*
		    Method to get max radiusX value.
		    @private
		    @param {String} Radius name.
		  */


		  Shape.prototype._getMaxRadius = function _getMaxRadius(name) {
		    var selfSize, selfSizeX;
		    selfSize = this._getRadiusSize('radius');
		    return this._getRadiusSize(name, selfSize);
		  };
		  /*
		    Method to increase calculated size based on easing.
		    @private
		  */


		  Shape.prototype._increaseSizeWithEasing = function _increaseSizeWithEasing() {
		    var p = this._props,
		        easing = this._o.easing,
		        isStringEasing = easing && typeof easing === 'string';

		    switch (isStringEasing && easing.toLowerCase()) {
		      case 'elastic.out':
		      case 'elastic.inout':
		        p.size *= 1.25;
		        break;
		      case 'back.out':
		      case 'back.inout':
		        p.size *= 1.1;
		    }
		  };
		  /*
		    Method to increase calculated size based on bit ratio.
		    @private
		  */
		  // _increaseSizeWithBitRatio () {
		  //   var p   = this._props;
		  //   // p.size *= this.shape._props.ratio;
		  //   p.size += 2 * p.sizeGap;
		  // }
		  /*
		    Method to get maximum radius size with optional fallback.
		    @private
		    @param {Object}
		      @param key {String} Name of the radius - [radius|radiusX|radiusY].
		      @param @optional fallback {Number}  Optional number to set if there
		                                          is no value for the key.
		  */


		  Shape.prototype._getRadiusSize = function _getRadiusSize(name) {
		    var fallback = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

		    var delta = this._deltas[name];
		    // if value is delta value
		    if (delta != null) {
		      // get maximum number between start and end values of the delta
		      return Math.max(Math.abs(delta.end), Math.abs(delta.start));
		    } else if (this._props[name] != null) {
		      // else get the value from props object
		      return parseFloat(this._props[name]);
		    } else {
		      return fallback;
		    }
		  };
		  /*
		    Method to get max shape canvas size and save it to _props.
		    @private
		  */


		  Shape.prototype._getShapeSize = function _getShapeSize() {
		    var p = this._props,

		    // get maximum stroke value
		    stroke = this._getMaxStroke();
		    // save shape `width` and `height` to `_props`
		    p.shapeWidth = p.width != null ? p.width : 2 * this._getMaxRadius('radiusX') + stroke;

		    p.shapeHeight = p.height != null ? p.height : 2 * this._getMaxRadius('radiusY') + stroke;
		  };
		  /*
		    Method to create shape.
		    @private
		  */


		  Shape.prototype._createShape = function _createShape() {
		    // calculate max shape canvas size and set to _props
		    this._getShapeSize();
		    // don't create actual shape if !`isWithShape`
		    if (!this._props.isWithShape) {
		      return;
		    }

		    var p = this._props;
		    // get shape's class
		    var Shape = shapesMap.getShape(this._props.shape);
		    // create `_shape` module
		    this.shapeModule = new Shape({
		      width: p.shapeWidth,
		      height: p.shapeHeight,
		      parent: this.el
		    });
		  };
		  /*
		    Method to get max size in `then` chain
		    @private
		  */


		  Shape.prototype._getMaxSizeInChain = function _getMaxSizeInChain() {
		    var p = this._props,
		        maxW = 0,
		        maxH = 0;

		    for (var i = 0; i < this._modules.length; i++) {
		      this._modules[i]._getShapeSize();
		      maxW = Math.max(maxW, this._modules[i]._props.shapeWidth);
		      maxH = Math.max(maxH, this._modules[i]._props.shapeHeight);
		    }

		    this.shapeModule && this.shapeModule._setSize(maxW, maxH);
		    this._setElSizeStyles(maxW, maxH);
		  };
		  /*
		    Method to get max value of the strokeWidth.
		    @private
		  */


		  Shape.prototype._getMaxStroke = function _getMaxStroke() {
		    var p = this._props;
		    var dStroke = this._deltas['strokeWidth'];
		    return dStroke != null ? Math.max(dStroke.start, dStroke.end) : p.strokeWidth;
		  };
		  /*
		    Method to draw current progress of the deltas.
		    @private
		    @override @ Module
		    @param   {Number}  EasedProgress to set - [0..1].
		    @param   {Number}  Progress to set - [0..1].
		  */


		  Shape.prototype._setProgress = function _setProgress(easedProgress, progress) {
		    // call the super on Module
		    _module2.default.prototype._setProgress.call(this, easedProgress, progress);
		    // draw current progress
		    this._draw(easedProgress);
		  };
		  /*
		    Method to add callback overrides to passed object.
		    @private
		    @param {Object} Object to add the overrides to.
		  */


		  Shape.prototype._applyCallbackOverrides = function _applyCallbackOverrides(obj) {
		    var it = this,
		        p = this._props;
		    // specify control functions for the module
		    obj.callbackOverrides = {
		      onUpdate: function onUpdate(ep, p) {
		        return it._setProgress(ep, p);
		      },
		      onStart: function onStart(isFwd) {
		        // don't touch main `el` onStart in chained elements
		        if (it._isChained) {
		          return;
		        };
		        if (isFwd) {
		          it._show();
		        } else {
		          if (!p.isShowStart) {
		            it._hide();
		          }
		        }
		      },
		      onComplete: function onComplete(isFwd) {
		        // don't touch main `el` if not the last in `then` chain
		        if (!it._isLastInChain()) {
		          return;
		        }
		        if (isFwd) {
		          if (!p.isShowEnd) {
		            it._hide();
		          }
		        } else {
		          it._show();
		        }
		      },
		      onRefresh: function onRefresh(isBefore) {
		        p.isRefreshState && isBefore && it._refreshBefore();
		      }
		    };
		  };
		  /*
		    Method to setup tween and timeline options before creating them.
		    @override @ Tweenable
		    @private  
		  */


		  Shape.prototype._transformTweenOptions = function _transformTweenOptions() {
		    this._applyCallbackOverrides(this._o);
		  };
		  /*
		    Method to create transform string.
		    @private
		    @returns {String} Transform string.
		  */


		  Shape.prototype._fillTransform = function _fillTransform() {
		    var p = this._props,
		        scaleX = p.scaleX != null ? p.scaleX : p.scale,
		        scaleY = p.scaleY != null ? p.scaleY : p.scale,
		        scale = scaleX + ', ' + scaleY;
		    return 'translate(' + p.x + ', ' + p.y + ') rotate(' + p.angle + 'deg) scale(' + scale + ')';
		  };
		  /*
		    Method to create transform-origin string.
		    @private
		    @returns {String} Transform string.
		  */


		  Shape.prototype._fillOrigin = function _fillOrigin() {
		    var p = this._props,
		        str = '';
		    for (var i = 0; i < p.origin.length; i++) {
		      str += p.origin[i].string + ' ';
		    }
		    return str;
		  };
		  /*
		    Method to refresh state befor startTime.
		    @private
		  */


		  Shape.prototype._refreshBefore = function _refreshBefore() {
		    // call setProgress with eased and normal progress
		    this._setProgress(this.tween._props.easing(0), 0);

		    if (this._props.isShowStart) {
		      this._show();
		    } else {
		      this._hide();
		    }
		  };
		  /*
		    Method that gets called on `soft` show of the module,
		    it should restore transform styles of the module.
		    @private
		    @overrides @ Module
		  */


		  Shape.prototype._showByTransform = function _showByTransform() {
		    // reset the cache of the scale prop
		    this._lastSet.scale = null;
		    // draw el accroding to it's props
		    this._drawEl();
		  };

		  return Shape;
		}(_tunable2.default);

		exports.default = Shape;

	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(24);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(25);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _shape = __webpack_require__(2);

		var _shape2 = _interopRequireDefault(_shape);

		var _h = __webpack_require__(19);

		var _h2 = _interopRequireDefault(_h);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		/*
		  *TODO:*
		  ---
		  - tweak then chains
		*/

		var ShapeSwirl = function (_Shape) {
		  (0, _inherits3.default)(ShapeSwirl, _Shape);

		  function ShapeSwirl() {
		    (0, _classCallCheck3.default)(this, ShapeSwirl);
		    return (0, _possibleConstructorReturn3.default)(this, _Shape.apply(this, arguments));
		  }

		  /*
		    Method to declare _defaults and other default objects.
		    @private
		    @override @ Shape
		  */

		  ShapeSwirl.prototype._declareDefaults = function _declareDefaults() {
		    _Shape.prototype._declareDefaults.call(this);

		    /* _DEFAULTS ARE - Shape DEFAULTS + THESE: */

		    /* [boolean] :: If shape should follow sinusoidal path. */
		    this._defaults.isSwirl = true;
		    /* ∆ :: [number > 0] :: Degree size of the sinusoidal path. */
		    this._defaults.swirlSize = 10;
		    /* ∆ :: [number > 0] :: Frequency of the sinusoidal path. */
		    this._defaults.swirlFrequency = 3;
		    /* ∆ :: [number > 0] :: Sinusoidal path length scale. */
		    this._defaults.pathScale = 1;
		    /* ∆ :: [number] :: Degree shift for the sinusoidal path. */
		    this._defaults.degreeShift = 0;
		    /* ∆ :: [number] :: Radius of the shape. */
		    this._defaults.radius = 5;
		    // ∆ :: Units :: Possible values: [ number, string ]
		    this._defaults.x = 0;
		    // ∆ :: Units :: Possible values: [ number, string ]
		    this._defaults.y = 0;
		    // ∆ :: Possible values: [ number ]
		    this._defaults.scale = { 1: 0 };
		    /* [number: -1, 1] :: Directon of Swirl. */
		    this._defaults.direction = 1;
		  };

		  // ^ PUBLIC  METHOD(S) ^
		  // v PRIVATE METHOD(S) v

		  /*
		    Method to copy _o options to _props with
		    fallback to _defaults.
		    @private
		    @override @ Module
		  */


		  ShapeSwirl.prototype._extendDefaults = function _extendDefaults() {
		    _Shape.prototype._extendDefaults.call(this);
		    this._calcPosData();
		  };
		  /*
		    Method to tune new oprions to _o and _props object.
		    @private
		    @overrides @ Module
		    @param {Object} Options object to tune to.
		  */


		  ShapeSwirl.prototype._tuneNewOptions = function _tuneNewOptions(o) {
		    if (o == null) {
		      return;
		    }

		    _Shape.prototype._tuneNewOptions.call(this, o);
		    if (o.x != null || o.y != null) {
		      this._calcPosData();
		    }
		  };
		  /*
		    Method to calculate Swirl's position data.
		    @private
		  */


		  ShapeSwirl.prototype._calcPosData = function _calcPosData() {
		    var x = this._getPosValue('x'),
		        y = this._getPosValue('y'),
		        angle = 90 + Math.atan(y.delta / x.delta || 0) * _h2.default.RAD_TO_DEG;

		    this._posData = {
		      radius: Math.sqrt(x.delta * x.delta + y.delta * y.delta),
		      angle: x.delta < 0 ? angle + 180 : angle,
		      x: x, y: y
		    };
		    // set the last position to _props
		    // this._calcSwirlXY( 1 );
		  };
		  /*
		    Gets `x` or `y` position value.
		    @private
		    @param {String} Name of the property.
		  */


		  ShapeSwirl.prototype._getPosValue = function _getPosValue(name) {
		    var delta = this._deltas[name];
		    if (delta) {
		      // delete from deltas to prevent normal
		      delete this._deltas[name];
		      return {
		        start: delta.start.value,
		        end: delta.end.value,
		        delta: delta.delta,
		        units: delta.end.unit
		      };
		    } else {
		      var pos = _h2.default.parseUnit(this._props[name]);
		      return { start: pos.value, end: pos.value, delta: 0, units: pos.unit };
		    }
		  };
		  /*
		    Method to calculate the progress of the Swirl.
		    @private
		    @overrides @ Shape
		    @param {Numer} Eased progress of the Swirl in range of [0..1]
		    @param {Numer} Progress of the Swirl in range of [0..1]
		  */


		  ShapeSwirl.prototype._setProgress = function _setProgress(easedProgress, progress) {
		    this._progress = easedProgress;
		    this._calcCurrentProps(easedProgress, progress);
		    this._calcSwirlXY(easedProgress);
		    // this._calcOrigin();
		    this._draw(easedProgress);
		  };
		  /*
		    Method to calculate x/y for Swirl's progress
		    @private
		    @mutates _props
		    @param {Number} Current progress in [0...1]
		  */


		  ShapeSwirl.prototype._calcSwirlXY = function _calcSwirlXY(proc) {
		    var p = this._props,
		        angle = this._posData.angle + p.degreeShift,
		        point = _h2.default.getRadialPoint({
		      angle: p.isSwirl ? angle + this._getSwirl(proc) : angle,
		      radius: proc * this._posData.radius * p.pathScale,
		      center: {
		        x: this._posData.x.start,
		        y: this._posData.y.start
		      }
		    });
		    // if foreign svg canvas - set position without units
		    var x = point.x,
		        y = point.y,
		        smallNumber = 0.000001;

		    // remove very small numbers to prevent exponential forms
		    if (x > 0 && x < smallNumber) {
		      x = smallNumber;
		    }
		    if (y > 0 && y < smallNumber) {
		      y = smallNumber;
		    }
		    if (x < 0 && x > -smallNumber) {
		      x = -smallNumber;
		    }
		    if (y < 0 && y > -smallNumber) {
		      y = -smallNumber;
		    }

		    p.x = this._o.ctx ? x : '' + x + this._posData.x.units;
		    p.y = this._o.ctx ? y : '' + y + this._posData.y.units;
		  };
		  /*
		    Method to get progress of the swirl.
		    @private
		    @param {Number} Progress of the Swirl.
		    @returns {Number} Progress of the swirl.
		  */


		  ShapeSwirl.prototype._getSwirl = function _getSwirl(proc) {
		    var p = this._props;
		    return p.direction * p.swirlSize * Math.sin(p.swirlFrequency * proc);
		  };
		  /*
		    Method to draw shape.
		    If !isWithShape - draw self el only, but not shape.
		    @private
		    @overrides @ Shape.
		  */


		  ShapeSwirl.prototype._draw = function _draw() {
		    // call _draw or just _drawEl @ Shape depending if there is `shape`
		    var methodName = this._props.isWithShape ? '_draw' : '_drawEl';
		    _shape2.default.prototype[methodName].call(this);
		  };

		  return ShapeSwirl;
		}(_shape2.default);

		exports.default = ShapeSwirl;

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _keys = __webpack_require__(28);

		var _keys2 = _interopRequireDefault(_keys);

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(24);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(25);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _timeline = __webpack_require__(9);

		var _timeline2 = _interopRequireDefault(_timeline);

		var _shapeSwirl = __webpack_require__(3);

		var _shapeSwirl2 = _interopRequireDefault(_shapeSwirl);

		var _tunable = __webpack_require__(13);

		var _tunable2 = _interopRequireDefault(_tunable);

		var _h = __webpack_require__(19);

		var _h2 = _interopRequireDefault(_h);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		// import Shape    from './shape';

		var Burst = function (_Tunable) {
		  (0, _inherits3.default)(Burst, _Tunable);

		  function Burst() {
		    (0, _classCallCheck3.default)(this, Burst);
		    return (0, _possibleConstructorReturn3.default)(this, _Tunable.apply(this, arguments));
		  }

		  /*
		    Method to declare defaults.
		    @override @ ShapeSwirl.
		  */

		  Burst.prototype._declareDefaults = function _declareDefaults() {
		    this._defaults = {
		      /* [number > 0] :: Quantity of Burst particles. */
		      count: 5,
		      /* [0 < number < 360] :: Degree of the Burst. */
		      degree: 360,
		      /* ∆ :: [number > 0] :: Radius of the Burst. */
		      radius: { 0: 50 },
		      /* ∆ :: [number > 0] :: X radius of the Burst. */
		      radiusX: null,
		      /* ∆ :: [number > 0] :: Y radius of the Burst. */
		      radiusY: null,
		      /* [number >= 0] :: width of the main swirl. */
		      width: 0,
		      /* [number >= 0] :: height of the main swirl. */
		      height: 0
		    };
		  };
		  /*
		    Method to create a then record for the module.
		    @public
		    overrides @ Thenable
		    @param    {Object} Options for the next animation.
		    @returns  {Object} this.
		  */


		  Burst.prototype.then = function then(o) {
		    // remove tween properties (not callbacks)
		    this._removeTweenProperties(o);

		    var newMaster = this._masterThen(o),
		        newSwirls = this._childThen(o);

		    this._setSwirlDuration(newMaster, this._calcPackTime(newSwirls));

		    this.timeline._recalcTotalDuration();
		    return this;
		  };
		  /*
		    Method to start the animation with optional new options.
		    @public
		    @param {Object} New options to set on the run.
		    @returns {Object} this.
		  */


		  Burst.prototype.tune = function tune(o) {
		    if (o == null) {
		      return this;
		    }
		    // save timeline options to _timelineOptions
		    // and delete the timeline options on o
		    // cuz masterSwirl should not get them
		    this._saveTimelineOptions(o);

		    // add new timeline properties to timeline
		    this.timeline._setProp(this._timelineOptions);

		    // remove tween options (not callbacks)
		    this._removeTweenProperties(o);

		    // tune _props
		    this._tuneNewOptions(o);

		    // tune master swirl
		    this.masterSwirl.tune(o);

		    // tune child swirls
		    this._tuneSwirls(o);

		    // recalc time for modules
		    this._recalcModulesTime();
		    return this;
		  };

		  // ^ PUBLIC  METHODS ^
		  // v PRIVATE METHODS v

		  /*
		    Method to copy `_o` options to `_props` object
		    with fallback to `_defaults`.
		    @private
		    @overrides @ Module
		  */


		  Burst.prototype._extendDefaults = function _extendDefaults() {
		    // remove tween properties (not callbacks)
		    this._removeTweenProperties(this._o);
		    _Tunable.prototype._extendDefaults.call(this);
		  };
		  /*
		    Method to remove all tween (excluding
		    callbacks) props from object.
		    @private
		    @param {Object} Object which should be cleaned
		                    up from tween properties.
		  */


		  Burst.prototype._removeTweenProperties = function _removeTweenProperties(o) {
		    for (var key in _h2.default.tweenOptionMap) {
		      // remove all items that are not declared in _defaults
		      if (this._defaults[key] == null) {
		        delete o[key];
		      }
		    }
		  };
		  /*
		    Method to recalc modules chain tween
		    times after tuning new options.
		    @private
		  */


		  Burst.prototype._recalcModulesTime = function _recalcModulesTime() {
		    var modules = this.masterSwirl._modules,
		        swirls = this._swirls,
		        shiftTime = 0;

		    for (var i = 0; i < modules.length; i++) {
		      var tween = modules[i].tween,
		          packTime = this._calcPackTime(swirls[i]);
		      tween._setProp({ 'duration': packTime, 'shiftTime': shiftTime });
		      shiftTime += packTime;
		    }

		    this.timeline._recalcTotalDuration();
		  };
		  /*
		    Method to tune Swirls with new options.
		    @private
		    @param {Object} New options.
		  */


		  Burst.prototype._tuneSwirls = function _tuneSwirls(o) {
		    // get swirls in first pack
		    var pack0 = this._swirls[0];
		    for (var i = 0; i < pack0.length; i++) {
		      var swirl = pack0[i],
		          option = this._getChildOption(o || {}, i);

		      // since the `degreeShift` participate in
		      // children position calculations, we need to keep
		      // the old `degreeShift` value if new not set
		      var isDegreeShift = option.degreeShift != null;
		      if (!isDegreeShift) {
		        option.degreeShift = this._swirls[0][i]._props.degreeShift;
		      }

		      this._addBurstProperties(option, i);

		      // after burst position calculation - delete the old `degreeShift`
		      // from the options, since anyways we have copied it from the swirl
		      if (!isDegreeShift) {
		        delete option.degreeShift;
		      }

		      swirl.tune(option);
		      this._refreshBurstOptions(swirl._modules, i);
		    }
		  };
		  /*
		    Method to refresh burst x/y/angle options on further chained 
		    swirls, because they will be overriden after `tune` call on
		    very first swirl.
		    @param {Array} Chained modules array
		    param {Number} Index of the first swirl in the chain.
		  */


		  Burst.prototype._refreshBurstOptions = function _refreshBurstOptions(modules, i) {
		    for (var j = 1; j < modules.length; j++) {
		      var module = modules[j],
		          options = {};
		      this._addBurstProperties(options, i, j);
		      module._tuneNewOptions(options);
		    }
		  };
		  /*
		    Method to call then on masterSwirl.
		    @param {Object} Then options.
		    @returns {Object} New master swirl.
		  */


		  Burst.prototype._masterThen = function _masterThen(o) {
		    this.masterSwirl.then(o);
		    // get the latest master swirl in then chain
		    var newMasterSwirl = _h2.default.getLastItem(this.masterSwirl._modules);
		    // save to masterSwirls
		    this._masterSwirls.push(newMasterSwirl);
		    return newMasterSwirl;
		  };
		  /*
		    Method to call then on child swilrs.
		    @param {Object} Then options.
		    @return {Array} Array of new Swirls.
		  */


		  Burst.prototype._childThen = function _childThen(o) {
		    var pack = this._swirls[0],
		        newPack = [];

		    for (var i = 0; i < pack.length; i++) {
		      // get option by modulus
		      var options = this._getChildOption(o, i);
		      var swirl = pack[i];
		      var lastSwirl = _h2.default.getLastItem(swirl._modules);
		      // add new Master Swirl as parent of new childswirl
		      options.parent = this.el;

		      this._addBurstProperties(options, i, this._masterSwirls.length - 1);

		      swirl.then(options);

		      // save the new item in `then` chain
		      newPack.push(_h2.default.getLastItem(swirl._modules));
		    }
		    // save the pack to _swirls object
		    this._swirls[this._masterSwirls.length - 1] = newPack;
		    return newPack;
		  };
		  /*
		    Method to initialize properties.
		    @private
		    @overrides @ Thenable
		  */


		  Burst.prototype._vars = function _vars() {
		    _Tunable.prototype._vars.call(this);
		    // just buffer timeline for calculations
		    this._bufferTimeline = new _timeline2.default();
		  };
		  /*
		    Method for initial render of the module.
		  */


		  Burst.prototype._render = function _render() {
		    this._o.isWithShape = false;
		    this._o.isSwirl = this._props.isSwirl;
		    this._o.callbacksContext = this;
		    // save timeline options and remove from _o
		    // cuz the master swirl should not get them
		    this._saveTimelineOptions(this._o);

		    this.masterSwirl = new MainSwirl(this._o);
		    this._masterSwirls = [this.masterSwirl];
		    this.el = this.masterSwirl.el;

		    this._renderSwirls();
		  };
		  /*
		    Method for initial render of swirls.
		    @private
		  */


		  Burst.prototype._renderSwirls = function _renderSwirls() {
		    var p = this._props,
		        pack = [];

		    for (var i = 0; i < p.count; i++) {
		      var option = this._getChildOption(this._o, i);
		      pack.push(new ChildSwirl(this._addOptionalProps(option, i)));
		    }
		    this._swirls = { 0: pack };
		    this._setSwirlDuration(this.masterSwirl, this._calcPackTime(pack));
		  };
		  /*
		    Method to save timeline options to _timelineOptions
		    and delete the property on the object.
		    @private
		    @param {Object} The object to save the timeline options from.
		  */


		  Burst.prototype._saveTimelineOptions = function _saveTimelineOptions(o) {
		    this._timelineOptions = o.timeline;
		    delete o.timeline;
		  };
		  /*
		    Method to calculate total time of array of
		    concurrent tweens.
		    @param   {Array}  Pack to calculate the total time for.
		    @returns {Number} Total pack duration.
		  */


		  Burst.prototype._calcPackTime = function _calcPackTime(pack) {
		    var maxTime = 0;
		    for (var i = 0; i < pack.length; i++) {
		      var tween = pack[i].tween,
		          p = tween._props;

		      maxTime = Math.max(p.repeatTime / p.speed, maxTime);
		    }

		    return maxTime;
		  };
		  /*
		    Method to set duration for Swirl.
		    @param {Object} Swirl instance to set the duration to.
		    @param {Number} Duration to set.
		  */


		  Burst.prototype._setSwirlDuration = function _setSwirlDuration(swirl, duration) {
		    swirl.tween._setProp('duration', duration);
		    var isRecalc = swirl.timeline && swirl.timeline._recalcTotalDuration;
		    isRecalc && swirl.timeline._recalcTotalDuration();
		  };
		  /*
		    Method to get childOption form object call by modulus.
		    @private
		    @param   {Object} Object to look in.
		    @param   {Number} Index of the current Swirl.
		    @returns {Object} Options for the current swirl.
		  */


		  Burst.prototype._getChildOption = function _getChildOption(obj, i) {
		    var options = {};
		    for (var key in obj.children) {
		      options[key] = this._getPropByMod(key, i, obj.children);
		    }
		    return options;
		  };
		  /*
		    Method to get property by modulus.
		    @private
		    @param {String} Name of the property.
		    @param {Number} Index for the modulus.
		    @param {Object} Source object to check in.
		    @returns {Any} Property.
		  */


		  Burst.prototype._getPropByMod = function _getPropByMod(name, index) {
		    var sourceObj = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

		    var prop = sourceObj[name];
		    return _h2.default.isArray(prop) ? prop[index % prop.length] : prop;
		  };
		  /*
		    Method to add optional Swirls' properties to passed object.
		    @private
		    @param {Object} Object to add the properties to.
		    @param {Number} Index of the property.
		  */


		  Burst.prototype._addOptionalProps = function _addOptionalProps(options, index) {
		    options.index = index;
		    options.parent = this.masterSwirl.el;

		    this._addBurstProperties(options, index);

		    return options;
		  };
		  /*
		    Method to add Burst options to object.
		    @private
		    @param {Object} Options to add the properties to.
		    @param {Number} Index of the Swirl.
		    @param {Number} Index of the main swirl.
		  */


		  Burst.prototype._addBurstProperties = function _addBurstProperties(options, index, i) {
		    // save index of the module
		    var mainIndex = this._index;
		    // temporary change the index to parse index based properties like stagger
		    this._index = index;
		    // parse degree shift for the bit
		    var degreeShift = this._parseProperty('degreeShift', options.degreeShift || 0);
		    // put the index of the module back
		    this._index = mainIndex;

		    var p = this._props,
		        degreeCnt = p.degree % 360 === 0 ? p.count : p.count - 1 || 1,
		        step = p.degree / degreeCnt,
		        pointStart = this._getSidePoint('start', index * step + degreeShift, i),
		        pointEnd = this._getSidePoint('end', index * step + degreeShift, i);

		    options.x = this._getDeltaFromPoints('x', pointStart, pointEnd);
		    options.y = this._getDeltaFromPoints('y', pointStart, pointEnd);

		    options.angle = this._getBitAngle(options.angle || 0, degreeShift, index);
		  };
		  /* 
		    Method to get shapes angle in burst so
		    it will follow circular shape.
		     
		     @param    {Number, Object} Base angle.
		     @param    {Number}         Angle shift for the bit
		     @param    {Number}         Shape's index in burst.
		     @returns  {Number}         Angle in burst.
		  */


		  Burst.prototype._getBitAngle = function _getBitAngle() {
		    var angleProperty = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
		    var angleShift = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
		    var i = arguments[2];

		    var p = this._props,
		        degCnt = p.degree % 360 === 0 ? p.count : p.count - 1 || 1,
		        step = p.degree / degCnt,
		        angle = i * step + 90;

		    angle += angleShift;
		    // if not delta option
		    if (!this._isDelta(angleProperty)) {
		      angleProperty += angle;
		    } else {
		      var delta = {},
		          keys = (0, _keys2.default)(angleProperty),
		          start = keys[0],
		          end = angleProperty[start];

		      start = _h2.default.parseStringOption(start, i);
		      end = _h2.default.parseStringOption(end, i);
		      // new start = newEnd
		      delta[parseFloat(start) + angle] = parseFloat(end) + angle;

		      angleProperty = delta;
		    }
		    return angleProperty;
		  };
		  /*
		    Method to get radial point on `start` or `end`.
		    @private
		    @param {String} Name of the side - [start, end].
		    @param {Number} Angle of the radial point.
		    @param {Number} Index of the main swirl.
		    @returns radial point.
		  */


		  Burst.prototype._getSidePoint = function _getSidePoint(side, angle, i) {
		    var p = this._props,
		        sideRadius = this._getSideRadius(side, i);

		    return _h2.default.getRadialPoint({
		      radius: sideRadius.radius,
		      radiusX: sideRadius.radiusX,
		      radiusY: sideRadius.radiusY,
		      angle: angle,
		      // center:  { x: p.center, y: p.center }
		      center: { x: 0, y: 0 }
		    });
		  };
		  /*
		    Method to get radius of the side.
		    @private
		    @param {String} Name of the side - [start, end].
		    @param {Number} Index of the main swirl.
		    @returns {Object} Radius.
		  */


		  Burst.prototype._getSideRadius = function _getSideRadius(side, i) {
		    return {
		      radius: this._getRadiusByKey('radius', side, i),
		      radiusX: this._getRadiusByKey('radiusX', side, i),
		      radiusY: this._getRadiusByKey('radiusY', side, i)
		    };
		  };
		  /*
		    Method to get radius from ∆ or plain property.
		    @private
		    @param {String} Key name.
		    @param {String} Side name - [start, end].
		    @param {Number} Index of the main swirl.
		    @returns {Number} Radius value.
		  */


		  Burst.prototype._getRadiusByKey = function _getRadiusByKey(key, side) {
		    var i = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

		    var swirl = this._masterSwirls[i],
		        deltas = swirl._deltas,
		        props = swirl._props;

		    if (deltas[key] != null) {
		      return deltas[key][side];
		    } else if (props[key] != null) {
		      return props[key];
		    }
		  };
		  /*
		    Method to get delta from start and end position points.
		    @private
		    @param {String} Key name.
		    @param {Object} Start position point.
		    @param {Object} End position point.
		    @returns {Object} Delta of the end/start.
		  */


		  Burst.prototype._getDeltaFromPoints = function _getDeltaFromPoints(key, pointStart, pointEnd) {
		    var delta = {};
		    if (pointStart[key] === pointEnd[key]) {
		      delta = pointStart[key];
		    } else {
		      delta[pointStart[key]] = pointEnd[key];
		    }
		    return delta;
		  };
		  /*
		    Method to create timeline.
		    @private
		    @override @ Tweenable
		  */


		  Burst.prototype._makeTimeline = function _makeTimeline() {
		    // restore timeline options that were deleted in _render method
		    this._o.timeline = this._timelineOptions;
		    _Tunable.prototype._makeTimeline.call(this);
		    this.timeline.add(this.masterSwirl, this._swirls[0]);
		  };
		  /*
		    Method to make Tween for the module.
		    @private
		    @override @ Tweenable
		  */


		  Burst.prototype._makeTween = function _makeTween() {} /* don't create any tween */
		  /*
		    Override `_hide` and `_show` methods on module
		    since we don't have to hide nor show on the module.
		  */
		  ;

		  Burst.prototype._hide = function _hide() {/* do nothing */};

		  Burst.prototype._show = function _show() {/* do nothing */};

		  return Burst;
		}(_tunable2.default);

		var ChildSwirl = function (_ShapeSwirl) {
		  (0, _inherits3.default)(ChildSwirl, _ShapeSwirl);

		  function ChildSwirl() {
		    (0, _classCallCheck3.default)(this, ChildSwirl);
		    return (0, _possibleConstructorReturn3.default)(this, _ShapeSwirl.apply(this, arguments));
		  }

		  ChildSwirl.prototype._declareDefaults = function _declareDefaults() {
		    _ShapeSwirl.prototype._declareDefaults.call(this);
		    this._defaults.isSwirl = false;
		    this._o.duration = this._o.duration != null ? this._o.duration : 700;
		  };
		  // disable degreeshift calculations


		  ChildSwirl.prototype._calcSwirlXY = function _calcSwirlXY(proc) {
		    var degreeShift = this._props.degreeShift;

		    this._props.degreeShift = 0;
		    _ShapeSwirl.prototype._calcSwirlXY.call(this, proc);
		    this._props.degreeShift = degreeShift;
		  };

		  return ChildSwirl;
		}(_shapeSwirl2.default);

		var MainSwirl = function (_ChildSwirl) {
		  (0, _inherits3.default)(MainSwirl, _ChildSwirl);

		  function MainSwirl() {
		    (0, _classCallCheck3.default)(this, MainSwirl);
		    return (0, _possibleConstructorReturn3.default)(this, _ChildSwirl.apply(this, arguments));
		  }

		  MainSwirl.prototype._declareDefaults = function _declareDefaults() {
		    _ChildSwirl.prototype._declareDefaults.call(this);
		    this._defaults.scale = 1;
		    this._defaults.width = 0;
		    this._defaults.height = 0;
		    this._defaults.radius = { 25: 75 };
		    // this._defaults.duration = 2000;
		  };

		  return MainSwirl;
		}(ChildSwirl);

		Burst.ChildSwirl = ChildSwirl;
		Burst.MainSwirl = MainSwirl;

		exports.default = Burst;

	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _extends4 = __webpack_require__(27);

		var _extends5 = _interopRequireDefault(_extends4);

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(24);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(25);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _keys = __webpack_require__(28);

		var _keys2 = _interopRequireDefault(_keys);

		var _thenable = __webpack_require__(12);

		var _thenable2 = _interopRequireDefault(_thenable);

		var _tween = __webpack_require__(8);

		var _tween2 = _interopRequireDefault(_tween);

		var _deltas = __webpack_require__(15);

		var _deltas2 = _interopRequireDefault(_deltas);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var h = __webpack_require__(19);


		// get tween properties
		var obj = {};
		_tween2.default.prototype._declareDefaults.call(obj);
		var keys = (0, _keys2.default)(obj._defaults);
		for (var i = 0; i < keys.length; i++) {
		  obj._defaults[keys[i]] = 1;
		}
		obj._defaults['timeline'] = 1;
		var TWEEN_PROPERTIES = obj._defaults;

		/*
		  TODO:

		    - change _props to _propsObj for animations
		    - current values in deltas
		*/

		var Html = function (_Thenable) {
		  (0, _inherits3.default)(Html, _Thenable);

		  function Html() {
		    (0, _classCallCheck3.default)(this, Html);
		    return (0, _possibleConstructorReturn3.default)(this, _Thenable.apply(this, arguments));
		  }

		  Html.prototype._declareDefaults = function _declareDefaults() {
		    this._defaults = {
		      x: 0,
		      y: 0,
		      z: 0,

		      skewX: 0,
		      skewY: 0,

		      // angle:      0,
		      angleX: 0,
		      angleY: 0,
		      angleZ: 0,

		      scale: 1,
		      scaleX: 1,
		      scaleY: 1,

		      isSoftHide: true,
		      isShowStart: true,
		      isShowEnd: true,
		      isForce3d: false,
		      isRefreshState: true

		    };
		    // exclude from automatic drawing
		    this._drawExclude = { el: 1 };
		    // properties that cause 3d layer
		    this._3dProperties = ['angleX', 'angleY', 'z'];
		    // properties that have array values
		    this._arrayPropertyMap = { transformOrigin: 1, backgroundPosition: 1 };
		    // properties that have no units
		    this._numberPropertyMap = {
		      opacity: 1, scale: 1, scaleX: 1, scaleY: 1,
		      // angle: 1,
		      angleX: 1, angleY: 1, angleZ: 1,
		      skewX: 1, skewY: 1
		    };
		    // properties that should be prefixed
		    this._prefixPropertyMap = { transform: 1, transformOrigin: 1 };
		    // save prefix
		    this._prefix = h.prefix.css;
		  };

		  Html.prototype.then = function then(o) {
		    // return if nothing was passed
		    if (o == null || !(0, _keys2.default)(o).length) {
		      return 1;
		    }

		    // get the last item in `then` chain
		    var prevModule = h.getLastItem(this._modules);
		    // set deltas to the finish state
		    prevModule.deltas.refresh(false);
		    // copy finish state to the last history record
		    this._history[this._history.length - 1] = prevModule._o;
		    // call super
		    _Thenable.prototype.then.call(this, o);
		    // restore the _props
		    prevModule.deltas.restore();

		    return this;
		  };
		  /*
		    Method to pipe startValue of the delta.
		    @private
		    @ovarrides @ Thenable
		    @param {String} Start property name.
		    @param {Any} Start property value.
		    @returns {Any} Start property value.
		  */


		  Html.prototype._checkStartValue = function _checkStartValue(key, value) {
		    if (value == null) {
		      // return default value for transforms
		      if (this._defaults[key] != null) {
		        return this._defaults[key];
		      }
		      // return default value from _customProps
		      if (this._customProps[key] != null) {
		        return this._customProps[key];
		      }
		      // try to get the default value
		      if (h.defaultStyles[key] != null) {
		        return h.defaultStyles[key];
		      }
		      // at the end return 0
		      return 0;
		    }

		    return value;
		  };
		  /*
		    Method to draw _props to el.
		    @private
		  */


		  Html.prototype._draw = function _draw() {
		    var p = this._props;
		    for (var i = 0; i < this._drawProps.length; i++) {
		      var name = this._drawProps[i];
		      this._setStyle(name, p[name]);
		    }
		    // draw transforms
		    this._drawTransform();
		    // call custom transform callback if exist
		    this._customDraw && this._customDraw(this._props.el, this._props);
		  };
		  /*
		    Method to set transform on element.
		    @private
		  */


		  Html.prototype._drawTransform = function _drawTransform() {
		    var p = this._props;
		    var string = !this._is3d ? 'translate(' + p.x + ', ' + p.y + ')\n          rotate(' + p.angleZ + 'deg)\n          skew(' + p.skewX + 'deg, ' + p.skewY + 'deg)\n          scale(' + p.scaleX + ', ' + p.scaleY + ')' : 'translate3d(' + p.x + ', ' + p.y + ', ' + p.z + ')\n          rotateX(' + p.angleX + 'deg)\n          rotateY(' + p.angleY + 'deg)\n          rotateZ(' + p.angleZ + 'deg)\n          skew(' + p.skewX + 'deg, ' + p.skewY + 'deg)\n          scale(' + p.scaleX + ', ' + p.scaleY + ')';

		    this._setStyle('transform', string);
		  };
		  /*
		    Method to render on initialization.
		    @private
		    @overrides @ Module
		  */


		  Html.prototype._render = function _render() {
		    // return immediately if not the first in `then` chain
		    if (this._o.prevChainModule) {
		      return;
		    }

		    var p = this._props;

		    for (var i = 0; i < this._renderProps.length; i++) {
		      var name = this._renderProps[i],
		          value = p[name];

		      value = typeof value === 'number' ? value + 'px' : value;
		      this._setStyle(name, value);
		    }

		    this._draw();

		    if (!p.isShowStart) {
		      this._hide();
		    }
		  };
		  /*
		    Method to set style on el.
		    @private
		    @param {String} Style property name.
		    @param {String} Style property value.
		  */


		  Html.prototype._setStyle = function _setStyle(name, value) {
		    if (this._state[name] !== value) {
		      var style = this._props.el.style;
		      // set style
		      style[name] = value;
		      // if prefix needed - set it
		      if (this._prefixPropertyMap[name]) {
		        style['' + this._prefix + name] = value;
		      }
		      // cache the last set value
		      this._state[name] = value;
		    }
		  };
		  /*
		    Method to copy `_o` options to `_props` object.
		    @private
		  */


		  Html.prototype._extendDefaults = function _extendDefaults() {
		    this._props = this._o.props || {};
		    // props for intial render only
		    this._renderProps = [];
		    // props for draw on every frame update
		    this._drawProps = [];
		    // save custom properties if present
		    this._saveCustomProperties(this._o);
		    // copy the options
		    var o = (0, _extends5.default)({}, this._o);
		    // extend options with defaults
		    o = this._addDefaults(o);

		    var keys = (0, _keys2.default)(o);
		    for (var i = 0; i < keys.length; i++) {
		      var key = keys[i];
		      // include the property if it is not in drawExclude object
		      // and not in defaults = not a transform
		      var isInclude = !this._drawExclude[key] && // not in exclude map
		      this._defaults[key] == null && // not transform property
		      !TWEEN_PROPERTIES[key]; // not tween property

		      var isCustom = this._customProps[key];
		      // copy all non-delta properties to the props
		      // if not delta then add the property to render
		      // list that is called on initialization
		      // otherwise add it to the draw list that will
		      // be drawed on each frame
		      if (!h.isDelta(o[key]) && !TWEEN_PROPERTIES[key]) {
		        this._parseOption(key, o[key]);
		        if (key === 'el') {
		          this._props.el = h.parseEl(o.el);
		          this.el = this._props.el;
		        }
		        if (isInclude && !isCustom) {
		          this._renderProps.push(key);
		        }
		        // copy delta prop but not transforms
		        // otherwise push it to draw list that gets traversed on every draw
		      } else if (isInclude && !isCustom) {
		          this._drawProps.push(key);
		        }
		    }

		    this._createDeltas(o);
		  };
		  /*
		    Method to save customProperties to _customProps.
		    @param {Object} Options of the module.
		  */


		  Html.prototype._saveCustomProperties = function _saveCustomProperties() {
		    var o = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		    this._customProps = o.customProperties || {};
		    this._customProps = (0, _extends5.default)({}, this._customProps);
		    this._customDraw = this._customProps.draw;
		    delete this._customProps.draw;
		    delete o.customProperties;

		    this._copyDefaultCustomProps();

		    // if ( this._customProps ) {}
		    // this._customProps = this._customProps || {};
		  };

		  Html.prototype._copyDefaultCustomProps = function _copyDefaultCustomProps() {
		    for (var key in this._customProps) {
		      if (this._o[key] == null) {
		        this._o[key] = this._customProps[key];
		      }
		    }
		  };
		  /*
		    Method to reset some flags on merged options object.
		    @private
		    @overrides @ Thenable
		    @param   {Object} Options object.
		    @returns {Object} Options object.
		  */


		  Html.prototype._resetMergedFlags = function _resetMergedFlags(o) {
		    _Thenable.prototype._resetMergedFlags.call(this, o);
		    o.props = this._props;
		    o.customProperties = this._customProps;
		    return o;
		  };
		  /*
		    Method to parse option value.
		    @private
		    @param {String} Option name.
		    @param {Any} Option value.
		  */


		  Html.prototype._parseOption = function _parseOption(key, value) {
		    _Thenable.prototype._parseOption.call(this, key, value);
		    // at this point the property is parsed
		    var parsed = this._props[key];
		    // cast it to string if it is array
		    if (h.isArray(parsed)) {
		      this._props[key] = this._arrToString(parsed);
		    }
		  };
		  /*
		    Method cast array to string value.
		    @private
		    @param {Array} Array of parsed numbers with units.
		    @returns {String} Casted array.
		  */


		  Html.prototype._arrToString = function _arrToString(arr) {
		    var string = '';
		    for (var i = 0; i < arr.length; i++) {
		      string += arr[i].string + ' ';
		    }
		    return string;
		  };
		  /*
		    Method to add defauls to passed object.
		    @private
		    @param {Object} Object to add defaults to.
		  */


		  Html.prototype._addDefaults = function _addDefaults(obj) {
		    // flag that after all defaults are set will indicate
		    // if user have set the 3d transform
		    this._is3d = false;

		    for (var key in this._defaults) {
		      // skip property if it is listed in _skipProps
		      // if (this._skipProps && this._skipProps[key]) { continue; }

		      // copy the properties to the _o object
		      // if it's null - set the default value
		      if (obj[key] == null) {
		        // scaleX and scaleY should fallback to scale
		        if (key === 'scaleX' || key === 'scaleY') {
		          obj[key] = obj['scale'] != null ? obj['scale'] : this._defaults['scale'];
		        } else {
		          obj[key] = this._defaults[key];
		        }
		      } else {
		        // get if 3d property was set.
		        if (this._3dProperties.indexOf(key) !== -1) {
		          this._is3d = true;
		        }
		      }
		    }

		    if (this._o.isForce3d) {
		      this._is3d = true;
		    }

		    return obj;
		  };
		  /*
		    Lifecycle method to declare variables.
		    @private
		  */


		  Html.prototype._vars = function _vars() {
		    // set deltas to the last value, so the _props with
		    // end values will be copied to the _history, it is
		    // crucial for `then` chaining
		    this.deltas.refresh(false);
		    // call super vars
		    _Thenable.prototype._vars.call(this);
		    // state of set properties
		    this._state = {};
		    // restore delta values that we have refreshed before
		    this.deltas.restore(false);
		  };
		  /*
		    Method to create deltas from passed object.
		    @private
		    @param {Object} Options object to pass to the Deltas.
		  */


		  Html.prototype._createDeltas = function _createDeltas(options) {
		    this.deltas = new _deltas2.default({
		      options: options,
		      props: this._props,
		      arrayPropertyMap: this._arrayPropertyMap,
		      numberPropertyMap: this._numberPropertyMap,
		      customProps: this._customProps,
		      callbacksContext: options.callbacksContext || this,
		      isChained: !!this._o.prevChainModule
		    });

		    // if chained module set timeline to deltas' timeline
		    if (this._o.prevChainModule) {
		      this.timeline = this.deltas.timeline;
		    }
		  };
		  /* @overrides @ Tweenable */


		  Html.prototype._makeTween = function _makeTween() {};

		  Html.prototype._makeTimeline = function _makeTimeline() {
		    // do not create timeline if module if chained
		    if (this._o.prevChainModule) {
		      return;
		    }
		    // add callbacks overrides
		    this._o.timeline = this._o.timeline || {};
		    this._addCallbackOverrides(this._o.timeline);
		    _Thenable.prototype._makeTimeline.call(this);
		    this.timeline.add(this.deltas);
		  };
		  /*
		    Method to add callback overrides to passed object object.
		    @param {Object} Object to add overrides on.
		  */


		  Html.prototype._addCallbackOverrides = function _addCallbackOverrides(o) {
		    var it = this;
		    var p = this._props;
		    o.callbackOverrides = {
		      onUpdate: this._draw,
		      onRefresh: this._props.isRefreshState ? this._draw : void 0,
		      onStart: function onStart(isFwd) {
		        // don't touch main `el` onStart in chained elements
		        if (it._isChained) {
		          return;
		        };
		        // show if was hidden at start
		        if (isFwd && !p.isShowStart) {
		          it._show();
		        }
		        // hide if should be hidden at start
		        else {
		            if (!p.isShowStart) {
		              it._hide();
		            }
		          }
		      },
		      onComplete: function onComplete(isFwd) {
		        // don't touch main `el` if not the last in `then` chain
		        if (it._isChained) {
		          return;
		        }
		        if (isFwd) {
		          if (!p.isShowEnd) {
		            it._hide();
		          }
		        } else if (!p.isShowEnd) {
		          it._show();
		        }
		      }
		    };
		  };

		  /*
		    Method that gets called on `soft` show of the module,
		    it should restore transform styles of the module.
		    @private
		    @overrides @ Module
		  */


		  Html.prototype._showByTransform = function _showByTransform() {
		    this._drawTransform();
		  };

		  /*
		    Method to merge `start` and `end` for a property in then record.
		    @private
		    @param {String} Property name.
		    @param {Any}    Start value of the property.
		    @param {Any}    End value of the property.
		  */
		  // !! COVER !!


		  Html.prototype._mergeThenProperty = function _mergeThenProperty(key, startValue, endValue) {
		    // if isnt tween property
		    var isBoolean = typeof endValue === 'boolean',
		        curve,
		        easing;

		    if (!h.isTweenProp(key) && !this._nonMergeProps[key] && !isBoolean) {

		      var TWEEN_PROPS = {};
		      if (h.isObject(endValue) && endValue.to != null) {
		        for (var _key in endValue) {
		          if (TWEEN_PROPERTIES[_key] || _key === 'curve') {
		            TWEEN_PROPS[_key] = endValue[_key];
		            delete endValue[_key];
		          }
		        }
		        // curve    = endValue.curve;
		        // easing   = endValue.easing;
		        endValue = endValue.to;
		      }

		      // if end value is delta - just save it
		      if (this._isDelta(endValue)) {

		        var _TWEEN_PROPS = {};
		        for (var _key2 in endValue) {
		          if (TWEEN_PROPERTIES[_key2] || _key2 === 'curve') {
		            _TWEEN_PROPS[_key2] = endValue[_key2];
		            delete endValue[_key2];
		          }
		        }
		        var result = this._parseDeltaValues(key, endValue);

		        return (0, _extends5.default)({}, result, _TWEEN_PROPS);
		      } else {
		        var parsedEndValue = this._parsePreArrayProperty(key, endValue);
		        // if end value is not delta - merge with start value
		        if (this._isDelta(startValue)) {
		          var _extends2;

		          // if start value is delta - take the end value
		          // as start value of the new delta
		          return (0, _extends5.default)((_extends2 = {}, _extends2[h.getDeltaEnd(startValue)] = parsedEndValue, _extends2), TWEEN_PROPS);
		          // if both start and end value are not ∆ - make ∆
		        } else {
		            var _extends3;

		            return (0, _extends5.default)((_extends3 = {}, _extends3[startValue] = parsedEndValue, _extends3), TWEEN_PROPS);
		          }
		      }
		      // copy the tween values unattended
		    } else {
		        return endValue;
		      }
		  };

		  return Html;
		}(_thenable2.default);

		exports.default = Html;

	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var _keys = __webpack_require__(28);

		var _keys2 = _interopRequireDefault(_keys);

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(24);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(25);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _h = __webpack_require__(19);

		var _h2 = _interopRequireDefault(_h);

		var _timeline = __webpack_require__(9);

		var _timeline2 = _interopRequireDefault(_timeline);

		var _tunable = __webpack_require__(13);

		var _tunable2 = _interopRequireDefault(_tunable);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var Stagger = function (_Tunable) {
		  (0, _inherits3.default)(Stagger, _Tunable);

		  function Stagger(options, Module) {
		    var _ret;

		    (0, _classCallCheck3.default)(this, Stagger);

		    var _this = (0, _possibleConstructorReturn3.default)(this, _Tunable.call(this));

		    return _ret = _this._init(options, Module), (0, _possibleConstructorReturn3.default)(_this, _ret);
		  }
		  /*
		    Method to create then chain on child modules.
		    @param {Object} Then options.
		    @return {Object} this.
		  */


		  Stagger.prototype.then = function then(o) {
		    if (o == null) {
		      return this;
		    }
		    for (var i = 0; i < this._modules.length; i++) {
		      // get child module's option and pass to the child `then`
		      this._modules[i].then(this._getOptionByIndex(i, o));
		    }
		    this.timeline._recalcTotalDuration();
		    return this;
		  };
		  /*
		    Method to tune child modules.
		    @param {Object} Tune options.
		    @return {Object} this.
		  */


		  Stagger.prototype.tune = function tune(o) {
		    if (o == null) {
		      return this;
		    }
		    for (var i = 0; i < this._modules.length; i++) {
		      // get child module's option and pass to the child `then`
		      this._modules[i].tune(this._getOptionByIndex(i, o));
		    }
		    this.timeline._recalcTotalDuration();
		    return this;
		  };
		  /*
		    Method to generate child modules.
		    @return {Object} this.
		  */


		  Stagger.prototype.generate = function generate() {
		    for (var i = 0; i < this._modules.length; i++) {
		      // get child module's option and pass to the child `then`
		      this._modules[i].generate();
		    }
		    this.timeline._recalcTotalDuration();
		    return this;
		  };
		  /*
		    Method to get an option by modulo and name.
		    @param {String} Name of the property to get.
		    @param {Number} Index for the modulo calculation.
		    @param {Object} Options hash to look in.
		    @return {Any} Property.
		  */


		  Stagger.prototype._getOptionByMod = function _getOptionByMod(name, i, store) {
		    var props = store[name];
		    // if not dom list then clone it to array
		    if (props + '' === '[object NodeList]' || props + '' === '[object HTMLCollection]') props = Array.prototype.slice.call(props, 0);
		    // get the value in array or return the value itself
		    var value = _h2.default.isArray(props) ? props[i % props.length] : props;
		    // check if value has the stagger expression, if so parse it
		    return _h2.default.parseIfStagger(value, i);
		  };
		  /*
		    Method to get option by modulo of index.
		    @param {Number} Index for modulo calculations.
		    @param {Object} Options hash to look in.
		  */


		  Stagger.prototype._getOptionByIndex = function _getOptionByIndex(i, store) {
		    var _this2 = this;

		    var options = {};
		    (0, _keys2.default)(store).forEach(function (key) {
		      return options[key] = _this2._getOptionByMod(key, i, store);
		    });
		    return options;
		  };
		  /*
		    Method to get total child modules quantity.
		    @param  {String} Name of quantifier in options hash.
		    @param  {Object} Options hash object.
		    @return {Number} Number of child object that should be defined.
		  */


		  Stagger.prototype._getChildQuantity = function _getChildQuantity(name, store) {
		    // if number was set
		    if (typeof name === 'number') {
		      return name;
		    }

		    var quantifier = store[name];
		    if (_h2.default.isArray(quantifier)) {
		      return quantifier.length;
		    } else if (quantifier + '' === '[object NodeList]') {
		      return quantifier.length;
		    } else if (quantifier + '' === '[object HTMLCollection]') {
		      return Array.prototype.slice.call(quantifier, 0).length;
		    } else if (quantifier instanceof HTMLElement) {
		      return 1;
		    } else if (typeof quantifier == 'string') {
		      return 1;
		    }
		  };
		  /*
		    Method to make stagger form options
		    @param {Object} Options.
		    @param {Object} Child class.
		  */


		  Stagger.prototype._init = function _init(options, Module) {
		    var count = this._getChildQuantity(options.quantifier || 'el', options);
		    this._createTimeline(options);this._modules = [];
		    for (var i = 0; i < count; i++) {
		      // get child module's option
		      var option = this._getOptionByIndex(i, options);
		      option.isRunLess = true;
		      // set index of the module
		      option.index = i;
		      // create child module
		      var module = new Module(option);this._modules.push(module);
		      // add child module's timeline to the self timeline
		      this.timeline.add(module);
		    }
		    return this;
		  };
		  /*
		    Method to create timeline.
		    @param {Object} Timeline options.
		  */


		  Stagger.prototype._createTimeline = function _createTimeline() {
		    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		    this.timeline = new _timeline2.default(options.timeline);
		  };

		  /* @overrides @ Tweenable */


		  Stagger.prototype._makeTween = function _makeTween() {};

		  Stagger.prototype._makeTimeline = function _makeTimeline() {};

		  return Stagger;
		}(_tunable2.default);

		module.exports = function (Module) {
		  return function (options) {
		    return new Stagger(options, Module);
		  };
		};

	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _h = __webpack_require__(19);

		var _h2 = _interopRequireDefault(_h);

		var _tween = __webpack_require__(8);

		var _tween2 = _interopRequireDefault(_tween);

		var _timeline = __webpack_require__(9);

		var _timeline2 = _interopRequireDefault(_timeline);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		/*
		  Class for toggling opacity on bunch of elements
		  @class Spriter
		  @todo
		    - add isForce3d option
		    - add run new option merging
		    - add then chains
		*/

		var Spriter = function () {
		  /*
		    Defaults/APIs
		  */

		  Spriter.prototype._declareDefaults = function _declareDefaults() {
		    this._defaults = {
		      /*
		        Duration
		        @property duration
		        @type     {Number}
		      */
		      duration: 500,
		      /*
		        Delay
		        @property delay
		        @type     {Number}
		      */
		      delay: 0,
		      /*
		        Easing. Please see the 
		        [timeline module parseEasing function](timeline.coffee.html#parseEasing)
		        for all avaliable options.
		          @property easing
		        @type     {String, Function}
		      */
		      easing: 'linear.none',
		      /*
		        Repeat times count
		        
		        @property repeat
		        @type     {Number}
		      */
		      repeat: 0,
		      /*
		        Yoyo option defines if animation should be altered on repeat.
		        
		        @property yoyo
		        @type     {Boolean}
		      */
		      yoyo: false,
		      /*
		        isRunLess option prevents animation from running immediately after
		        initialization.
		        
		        @property isRunLess
		        @type     {Boolean}
		      */
		      isRunLess: false,
		      /*
		        isShowEnd option defines if the last frame should be shown when
		        animation completed.
		        
		        @property isShowEnd
		        @type     {Boolean}
		      */
		      isShowEnd: false,
		      /*
		        onStart callback will be called once on animation start.
		        
		        @property onStart
		        @type     {Function}
		      */
		      onStart: null,
		      /*
		        onUpdate callback will be called on every frame of the animation.
		        The current progress in range **[0,1]** will be passed to the callback.
		        
		        @property onUpdate
		        @type     {Function}
		      */
		      onUpdate: null,
		      /*
		        onComplete callback will be called once on animation complete.
		        
		        @property onComplete
		        @type     {Function}
		      */
		      onComplete: null
		    };
		  };

		  function Spriter() {
		    var o = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		    (0, _classCallCheck3.default)(this, Spriter);

		    this.o = o;
		    if (!this.o.el) {
		      return _h2.default.error('No "el" option specified, aborting');
		    }
		    this._vars();this._declareDefaults();this._extendDefaults();this._parseFrames();
		    if (this._frames.length <= 2) _h2.default.warn('Spriter: only ' + this._frames.length + ' frames found');
		    if (this._frames.length < 1) _h2.default.error("Spriter: there is no frames to animate, aborting");
		    this._createTween();
		    return this;
		  }
		  /*
		    Method to declare some variables.
		    
		    @method run
		    @param  {Object} New options
		    @todo   Implement new object merging
		  */


		  Spriter.prototype._vars = function _vars() {
		    this._props = _h2.default.cloneObj(this.o);
		    this.el = this.o.el;
		    this._frames = [];
		  };
		  /*
		    Method to run the spriter on demand.
		    
		    @method run
		    @param  {Object} New options
		    @todo   Implement new object merging
		  */


		  Spriter.prototype.run = function run(o) {
		    return this.timeline.play();
		  };
		  /*
		    Method to extend _props by options(this.o)
		    
		    @method _extendDefaults
		  */


		  Spriter.prototype._extendDefaults = function _extendDefaults() {
		    return _h2.default.extend(this._props, this._defaults);
		  };
		  /*
		    Method to parse frames as child nodes of el.
		    
		    @method _parseFrames
		  */


		  Spriter.prototype._parseFrames = function _parseFrames() {
		    this._frames = Array.prototype.slice.call(this.el.children, 0);
		    this._frames.forEach(function (frame, i) {
		      return frame.style.opacity = 0;
		    });
		    this._frameStep = 1 / this._frames.length;
		  };

		  /*
		    Method to create tween and timeline and supply callbacks.
		    
		    @method _createTween
		  */


		  Spriter.prototype._createTween = function _createTween() {
		    var _this = this;

		    this._tween = new _tween2.default({
		      duration: this._props.duration,
		      delay: this._props.delay,
		      yoyo: this._props.yoyo,
		      repeat: this._props.repeat,
		      easing: this._props.easing,
		      onStart: function onStart() {
		        return _this._props.onStart && _this._props.onStart();
		      },
		      onComplete: function onComplete() {
		        return _this._props.onComplete && _this._props.onComplete();
		      },
		      onUpdate: function onUpdate(p) {
		        return _this._setProgress(p);
		      }
		    });
		    this.timeline = new _timeline2.default();this.timeline.add(this._tween);
		    if (!this._props.isRunLess) this._startTween();
		  };

		  /*
		    Method to start tween
		    
		    @method _startTween
		  */


		  Spriter.prototype._startTween = function _startTween() {
		    var _this2 = this;

		    setTimeout(function () {
		      return _this2.timeline.play();
		    }, 1);
		  };
		  /*
		    Method to set progress of the sprite
		    
		    @method _setProgress
		    @param  {Number} Progress in range **[0,1]**
		  */


		  Spriter.prototype._setProgress = function _setProgress(p) {
		    // get the frame number
		    var proc = Math.floor(p / this._frameStep);
		    // react only if frame changes
		    if (this._prevFrame != this._frames[proc]) {
		      // if previous frame isnt current one, hide it
		      if (this._prevFrame) {
		        this._prevFrame.style.opacity = 0;
		      }
		      // if end of animation and isShowEnd flag was specified
		      // then show the last frame else show current frame
		      var currentNum = p === 1 && this._props.isShowEnd ? proc - 1 : proc;
		      // show the current frame
		      if (this._frames[currentNum]) {
		        this._frames[currentNum].style.opacity = 1;
		      }
		      // set previous frame as current
		      this._prevFrame = this._frames[proc];
		    }
		    if (this._props.onUpdate) {
		      this._props.onUpdate(p);
		    }
		  };

		  return Spriter;
		}();

		exports.default = Spriter;

	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(24);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(25);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _h = __webpack_require__(19);

		var _h2 = _interopRequireDefault(_h);

		var _tweener = __webpack_require__(10);

		var _tweener2 = _interopRequireDefault(_tweener);

		var _easing = __webpack_require__(22);

		var _easing2 = _interopRequireDefault(_easing);

		var _module = __webpack_require__(16);

		var _module2 = _interopRequireDefault(_module);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		// import h from '../h';

		var Tween = function (_Module) {
		  (0, _inherits3.default)(Tween, _Module);

		  /*
		    Method do declare defaults with this._defaults object.
		    @private
		  */

		  Tween.prototype._declareDefaults = function _declareDefaults() {
		    // DEFAULTS
		    this._defaults = {
		      /* duration of the tween [0..∞] */
		      duration: 350,
		      /* delay of the tween [-∞..∞] */
		      delay: 0,
		      /* repeat of the tween [0..∞], means how much to
		         repeat the tween regardless first run,
		         for instance repeat: 2 will make the tween run 3 times */
		      repeat: 0,
		      /* speed of playback [0..∞], speed that is less then 1
		         will slowdown playback, for instance .5 will make tween
		         run 2x slower. Speed of 2 will speedup the tween to 2x. */
		      speed: 1,
		      /*  flip onUpdate's progress on each even period.
		          note that callbacks order won't flip at least
		          for now (under consideration). */
		      isYoyo: false,
		      /* easing for the tween, could be any easing type [link to easing-types.md] */
		      easing: 'Sin.Out',
		      /*
		        Easing for backward direction of the tweenthe tween,
		        if `null` - fallbacks to `easing` property.
		        forward direction in `yoyo` period is treated as backward for the easing.
		      */
		      backwardEasing: null,
		      /* custom tween's name */
		      name: null,
		      /* custom tween's base name */
		      nameBase: 'Tween',
		      /*
		        onProgress callback runs before any other callback.
		        @param {Number}   The entire, not eased, progress
		                          of the tween regarding repeat option.
		        @param {Boolean}  The direction of the tween.
		                          `true` for forward direction.
		                          `false` for backward direction(tween runs in reverse).
		      */
		      onProgress: null,
		      /*
		        onStart callback runs on very start of the tween just after onProgress
		        one. Runs on very end of the tween if tween is reversed.
		        @param {Boolean}  Direction of the tween.
		                          `true` for forward direction.
		                          `false` for backward direction(tween runs in reverse).
		      */
		      onStart: null,
		      onRefresh: null,
		      onComplete: null,
		      onRepeatStart: null,
		      onRepeatComplete: null,
		      onFirstUpdate: null,
		      onUpdate: null,
		      isChained: false,
		      // playback callbacks
		      onPlaybackStart: null,
		      onPlaybackPause: null,
		      onPlaybackStop: null,
		      onPlaybackComplete: null,
		      // context which all callbacks will be called with
		      callbacksContext: null
		    };
		  };
		  /*
		    API method to play the Tween.
		    @public
		    @param  {Number} Shift time in milliseconds.
		    @return {Object} Self.
		  */


		  Tween.prototype.play = function play() {
		    var shift = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

		    if (this._state === 'play' && this._isRunning) {
		      return this;
		    }
		    this._props.isReversed = false;
		    this._subPlay(shift, 'play');
		    this._setPlaybackState('play');
		    return this;
		  };
		  /*
		    API method to play the Tween in reverse.
		    @public
		    @param  {Number} Shift time in milliseconds.
		    @return {Object} Self.
		  */


		  Tween.prototype.playBackward = function playBackward() {
		    var shift = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

		    if (this._state === 'reverse' && this._isRunning) {
		      return this;
		    }
		    this._props.isReversed = true;
		    this._subPlay(shift, 'reverse');
		    this._setPlaybackState('reverse');
		    return this;
		  };
		  /*
		    API method to pause Tween.
		    @public
		    @returns {Object} Self.
		  */


		  Tween.prototype.pause = function pause() {
		    if (this._state === 'pause' || this._state === 'stop') {
		      return this;
		    }
		    this._removeFromTweener();
		    this._setPlaybackState('pause');
		    return this;
		  };
		  /*
		    API method to stop the Tween.
		    @public
		    @param   {Number} Progress [0..1] to set when stopped.
		    @returns {Object} Self.
		  */


		  Tween.prototype.stop = function stop(progress) {
		    if (this._state === 'stop') {
		      return this;
		    }

		    this._wasUknownUpdate = undefined;

		    var stopProc = progress != null ? progress
		    /* if no progress passsed - set 1 if tween
		       is playingBackward, otherwise set to 0 */
		    : this._state === 'reverse' ? 1 : 0;

		    this.setProgress(stopProc);

		    this.reset();
		    return this;
		  };
		  /*
		    API method to replay(restart) the Tween.
		    @public
		    @param   {Number} Shift time in milliseconds.
		    @returns {Object} Self.
		  */


		  Tween.prototype.replay = function replay() {
		    var shift = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

		    this.reset();
		    this.play(shift);
		    return this;
		  };
		  /*
		    API method to replay(restart) backward the Tween.
		    @public
		    @param   {Number} Shift time in milliseconds.
		    @returns {Object} Self.
		  */


		  Tween.prototype.replayBackward = function replayBackward() {
		    var shift = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

		    this.reset();
		    this.playBackward(shift);
		    return this;
		  };
		  /*
		    API method to resume the Tween.
		    @public
		    @param  {Number} Shift time in milliseconds.
		    @return {Object} Self.
		  */


		  Tween.prototype.resume = function resume() {
		    var shift = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

		    if (this._state !== 'pause') {
		      return this;
		    }

		    switch (this._prevState) {
		      case 'play':
		        this.play(shift);
		        break;
		      case 'reverse':
		        this.playBackward(shift);
		        break;
		    }

		    return this;
		  };
		  /*
		    API method to set progress on tween.
		    @public
		    @param {Number} Progress to set.
		    @returns {Object} Self.
		  */


		  Tween.prototype.setProgress = function setProgress(progress) {
		    var p = this._props;
		    // set start time if there is no one yet.
		    !p.startTime && this._setStartTime();
		    // reset play time
		    this._playTime = null;
		    // progress should be in range of [0..1]
		    progress < 0 && (progress = 0);
		    progress > 1 && (progress = 1);
		    // update self with calculated time
		    this._update(p.startTime - p.delay + progress * p.repeatTime);
		    return this;
		  };
		  /*
		    Method to set tween's speed.
		    @public
		    @param {Number} Speed value.
		    @returns this.
		  */


		  Tween.prototype.setSpeed = function setSpeed(speed) {
		    this._props.speed = speed;
		    // if playing - normalize _startTime and _prevTime to the current point.
		    if (this._state === 'play' || this._state === 'reverse') {
		      this._setResumeTime(this._state);
		    }
		    return this;
		  };
		  /*
		    Method to reset tween's state and properties.
		    @public
		    @returns this.
		  */


		  Tween.prototype.reset = function reset() {
		    this._removeFromTweener();
		    this._setPlaybackState('stop');
		    this._progressTime = 0;
		    this._isCompleted = false;
		    this._isStarted = false;
		    this._isFirstUpdate = false;
		    this._wasUknownUpdate = undefined;
		    this._prevTime = undefined;
		    this._prevYoyo = undefined;
		    // this._props.startTime  = undefined;
		    this._props.isReversed = false;
		    return this;
		  };

		  // ^ PUBLIC  METHOD(S) ^
		  // v PRIVATE METHOD(S) v

		  /*
		    Method to launch play. Used as launch
		    method for bothplay and reverse methods.
		    @private
		    @param  {Number} Shift time in milliseconds.
		    @param  {String} Play or reverse state.
		    @return {Object} Self.
		  */


		  Tween.prototype._subPlay = function _subPlay() {
		    var shift = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
		    var state = arguments[1];

		    var resumeTime,
		        startTime,
		        p = this._props,

		    // check if direction of playback changes,
		    // if so, the _progressTime needs to be flipped
		    _state = this._state,
		        _prevState = this._prevState,
		        isPause = _state === 'pause',
		        wasPlay = _state === 'play' || isPause && _prevState === 'play',
		        wasReverse = _state === 'reverse' || isPause && _prevState === 'reverse',
		        isFlip = wasPlay && state === 'reverse' || wasReverse && state === 'play';

		    // if tween was ended, set progress to 0 if not, set to elapsed progress
		    this._progressTime = this._progressTime >= p.repeatTime ? 0 : this._progressTime;
		    // flip the _progressTime if playback direction changed
		    if (isFlip) {
		      this._progressTime = p.repeatTime - this._progressTime;
		    }
		    // set resume time and normalize prev/start times
		    this._setResumeTime(state, shift);
		    // add self to tweener = play
		    _tweener2.default.add(this);
		    return this;
		  };
		  /*
		    Method to set _resumeTime, _startTime and _prevTime.
		    @private
		    @param {String} Current state. [play, reverse]
		    @param {Number} Time shift. *Default* is 0.
		  */


		  Tween.prototype._setResumeTime = function _setResumeTime(state) {
		    var shift = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

		    // get current moment as resume time
		    this._resumeTime = performance.now();
		    // set start time regarding passed `shift` and `procTime`
		    var startTime = this._resumeTime - Math.abs(shift) - this._progressTime;
		    this._setStartTime(startTime, false);
		    // if we have prevTime - we need to normalize
		    // it for the current resume time
		    if (this._prevTime != null) {
		      this._prevTime = state === 'play' ? this._normPrevTimeForward() : this._props.endTime - this._progressTime;
		    }
		  };
		  /*
		    Method recalculate _prevTime for forward direction.
		    @private
		    @return {Number} Normalized prev time.
		  */


		  Tween.prototype._normPrevTimeForward = function _normPrevTimeForward() {
		    var p = this._props;
		    return p.startTime + this._progressTime - p.delay;
		  };
		  /*
		    Constructor of the class.
		    @private
		  */


		  function Tween() {
		    var _ret;

		    var o = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		    (0, _classCallCheck3.default)(this, Tween);

		    var _this = (0, _possibleConstructorReturn3.default)(this, _Module.call(this, o));

		    _this._props.name == null && _this._setSelfName();
		    return _ret = _this, (0, _possibleConstructorReturn3.default)(_this, _ret);
		  }
		  /*
		    Method to set self name to generic one.
		    @private
		  */


		  Tween.prototype._setSelfName = function _setSelfName() {
		    var globalName = '_' + this._props.nameBase + 's';
		    // track amount of tweens globally
		    _tweener2.default[globalName] = _tweener2.default[globalName] == null ? 1 : ++_tweener2.default[globalName];
		    // and set generic tween's name  || Tween # ||
		    this._props.name = this._props.nameBase + ' ' + _tweener2.default[globalName];
		  };
		  /*
		    Method set playback state string.
		    @private
		    @param {String} State name
		  */


		  Tween.prototype._setPlaybackState = function _setPlaybackState(state) {
		    // save previous state
		    this._prevState = this._state;
		    this._state = state;

		    // callbacks
		    var wasPause = this._prevState === 'pause',
		        wasStop = this._prevState === 'stop',
		        wasPlay = this._prevState === 'play',
		        wasReverse = this._prevState === 'reverse',
		        wasPlaying = wasPlay || wasReverse,
		        wasStill = wasStop || wasPause;

		    if ((state === 'play' || state === 'reverse') && wasStill) {
		      this._playbackStart();
		    }
		    if (state === 'pause' && wasPlaying) {
		      this._playbackPause();
		    }
		    if (state === 'stop' && (wasPlaying || wasPause)) {
		      this._playbackStop();
		    }
		  };
		  /*
		    Method to declare some vars.
		    @private
		  */


		  Tween.prototype._vars = function _vars() {
		    this.progress = 0;
		    this._prevTime = undefined;
		    this._progressTime = 0;
		    this._negativeShift = 0;
		    this._state = 'stop';
		    // if negative delay was specified,
		    // save it to _negativeShift property and
		    // reset it back to 0
		    if (this._props.delay < 0) {
		      this._negativeShift = this._props.delay;
		      this._props.delay = 0;
		    }

		    return this._calcDimentions();
		  };
		  /*
		    Method to calculate tween's dimentions.
		    @private
		  */


		  Tween.prototype._calcDimentions = function _calcDimentions() {
		    this._props.time = this._props.duration + this._props.delay;
		    this._props.repeatTime = this._props.time * (this._props.repeat + 1);
		  };
		  /*
		    Method to extend defaults by options and put them in _props.
		    @private
		  */


		  Tween.prototype._extendDefaults = function _extendDefaults() {
		    // save callback overrides object with fallback to empty one
		    this._callbackOverrides = this._o.callbackOverrides || {};
		    delete this._o.callbackOverrides;
		    // call the _extendDefaults @ Module
		    _Module.prototype._extendDefaults.call(this);

		    var p = this._props;
		    p.easing = _easing2.default.parseEasing(p.easing);
		    p.easing._parent = this;

		    // parse only present backward easing to prevent parsing as `linear.none`
		    // because we need to fallback to `easing` in `_setProgress` method
		    if (p.backwardEasing != null) {
		      p.backwardEasing = _easing2.default.parseEasing(p.backwardEasing);
		      p.backwardEasing._parent = this;
		    }
		  };
		  /*
		    Method for setting start and end time to props.
		    @private
		    @param {Number(Timestamp)}, {Null} Start time.
		    @param {Boolean} Should reset flags.
		    @returns this
		  */


		  Tween.prototype._setStartTime = function _setStartTime(time) {
		    var isResetFlags = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

		    var p = this._props,
		        shiftTime = p.shiftTime || 0;
		    // reset flags
		    if (isResetFlags) {
		      this._isCompleted = false;this._isRepeatCompleted = false;
		      this._isStarted = false;
		    }
		    // set start time to passed time or to the current moment
		    var startTime = time == null ? performance.now() : time;
		    // calculate bounds
		    // - negativeShift is negative delay in options hash
		    // - shift time is shift of the parent
		    p.startTime = startTime + p.delay + this._negativeShift + shiftTime;
		    p.endTime = p.startTime + p.repeatTime - p.delay;
		    // set play time to the startTimes
		    // if playback controls are used - use _resumeTime as play time,
		    // else use shifted startTime -- shift is needed for timelines append chains
		    this._playTime = this._resumeTime != null ? this._resumeTime : startTime + shiftTime;
		    this._resumeTime = null;

		    return this;
		  };
		  /*
		    Method to update tween's progress.
		    @private
		    @param {Number} Current update time.
		    -- next params only present when parent Timeline calls the method.
		    @param {Number} Previous Timeline's update time.
		    @param {Boolean} Was parent in yoyo period.
		    @param {Number} [-1, 0, 1] If update is on edge.
		                   -1 = edge jump in negative direction.
		                    0 = no edge jump.
		                    1 = edge jump in positive direction.
		  */


		  Tween.prototype._update = function _update(time, timelinePrevTime, wasYoyo, onEdge) {
		    var p = this._props;
		    // if we don't the _prevTime thus the direction we are heading to,
		    // but prevTime was passed thus we are child of a Timeline
		    // set _prevTime to passed one and pretent that there was unknown
		    // update to not to block start/complete callbacks
		    if (this._prevTime == null && timelinePrevTime != null) {

		      if (this._props.speed && this._playTime) {
		        // play point + ( speed * delta )
		        this._prevTime = this._playTime + this._props.speed * (timelinePrevTime - this._playTime);
		      }
		      // this._prevTime = timelinePrevTime;
		      this._wasUknownUpdate = true;
		    }

		    // var before = time;
		    // cache vars
		    var startPoint = p.startTime - p.delay;
		    // if speed param was defined - calculate
		    // new time regarding speed
		    if (p.speed && this._playTime) {
		      // play point + ( speed * delta )
		      time = this._playTime + p.speed * (time - this._playTime);
		    }

		    // due to javascript precision issues, after speed mapping
		    // we can get very close number that was made from progress of 1
		    // and in fact represents `endTime` if so, set the time to `endTime`
		    if (Math.abs(p.endTime - time) < 0.00000001) {
		      time = p.endTime;
		    }

		    // if parent is onEdge but not very start nor very end
		    if (onEdge && wasYoyo != null) {
		      var T = this._getPeriod(time),
		          isYoyo = !!(p.isYoyo && this._props.repeat && T % 2 === 1);

		      // for timeline
		      // notify children about edge jump
		      if (this._timelines) {
		        for (var i = 0; i < this._timelines.length; i++) {
		          this._timelines[i]._update(time, timelinePrevTime, wasYoyo, onEdge);
		        }
		      }
		      // forward edge direction
		      if (onEdge === 1) {
		        // jumped from yoyo period?
		        if (wasYoyo) {
		          this._prevTime = time + 1;
		          this._repeatStart(time, isYoyo);
		          this._start(time, isYoyo);
		        } else {
		          this._prevTime = time - 1;
		          this._repeatComplete(time, isYoyo);
		          this._complete(time, isYoyo);
		        }
		        // backward edge direction
		      } else if (onEdge === -1) {
		          // jumped from yoyo period?
		          if (wasYoyo) {
		            this._prevTime = time - 1;
		            this._repeatComplete(time, isYoyo);
		            this._complete(time, isYoyo);
		          } else {
		            // call _start callbacks only if prev time was in active area
		            // not always true for append chains
		            if (this._prevTime >= p.startTime && this._prevTime <= p.endTime) {
		              this._prevTime = time + 1;
		              this._repeatStart(time, isYoyo);
		              this._start(time, isYoyo);
		              // reset isCOmpleted immediately to prevent onComplete cb
		              this._isCompleted = true;
		            }
		          }
		        }
		      // reset the _prevTime - drop one frame to undestand
		      // where we are heading
		      this._prevTime = undefined;
		    }
		    // if in active area and not ended - save progress time
		    // for pause/play purposes.
		    if (time > startPoint && time < p.endTime) {
		      this._progressTime = time - startPoint;
		    }
		    // else if not started or ended set progress time to 0
		    else if (time <= startPoint) {
		        this._progressTime = 0;
		      } else if (time >= p.endTime) {
		        // set progress time to repeat time + tiny cofficient
		        // to make it extend further than the end time
		        this._progressTime = p.repeatTime + .00000000001;
		      }
		    // reverse time if _props.isReversed is set
		    if (p.isReversed) {
		      time = p.endTime - this._progressTime;
		    }
		    // We need to know what direction we are heading to,
		    // so if we don't have the previous update value - this is very first
		    // update, - skip it entirely and wait for the next value
		    if (this._prevTime == null) {
		      this._prevTime = time;
		      this._wasUknownUpdate = true;
		      return false;
		    }

		    // ====== AFTER SKIPPED FRAME ======

		    // handle onProgress callback
		    if (time >= startPoint && time <= p.endTime) {
		      this._progress((time - startPoint) / p.repeatTime, time);
		    }
		    /*
		      if time is inside the active area of the tween.
		      active area is the area from start time to end time,
		      with all the repeat and delays in it
		    */
		    if (time >= p.startTime && time <= p.endTime) {
		      this._updateInActiveArea(time);
		    } else {
		      // if was in active area - update in inactive area but just once -
		      // right after the active area
		      if (this._isInActiveArea) {
		        this._updateInInactiveArea(time);
		      } else if (!this._isRefreshed) {
		        // onRefresh callback
		        // before startTime
		        if (time < p.startTime && this.progress !== 0) {
		          this._refresh(true);
		          this._isRefreshed = true;
		          // after endTime
		        }
		        // else if ( time > p.endTime ) { }
		      }
		    }

		    this._prevTime = time;
		    return time >= p.endTime || time <= startPoint;
		  };
		  /*
		    Method to handle tween's progress in inactive area.
		    @private
		    @param {Number} Current update time.
		  */


		  Tween.prototype._updateInInactiveArea = function _updateInInactiveArea(time) {
		    if (!this._isInActiveArea) {
		      return;
		    }
		    var p = this._props;
		    // complete if time is larger then end time
		    if (time > p.endTime && !this._isCompleted) {
		      this._progress(1, time);
		      // get period number
		      var T = this._getPeriod(p.endTime),
		          isYoyo = p.isYoyo && T % 2 === 0;

		      this._setProgress(isYoyo ? 0 : 1, time, isYoyo);
		      this._repeatComplete(time, isYoyo);
		      this._complete(time, isYoyo);
		    }
		    // if was active and went to - inactive area "-"
		    if (time < this._prevTime && time < p.startTime && !this._isStarted && !this._isCompleted) {
		      // if was in active area and didn't fire onStart callback
		      this._progress(0, time, false);
		      this._setProgress(0, time, false);
		      this._isRepeatStart = false;
		      this._repeatStart(time, false);
		      this._start(time, false);
		    }
		    this._isInActiveArea = false;
		  };
		  /*
		    Method to handle tween's progress in active area.
		    @private
		    @param {Number} Current update time.
		  */


		  Tween.prototype._updateInActiveArea = function _updateInActiveArea(time) {

		    var props = this._props,
		        delayDuration = props.delay + props.duration,
		        startPoint = props.startTime - props.delay,
		        elapsed = (time - props.startTime + props.delay) % delayDuration,
		        TCount = Math.round((props.endTime - props.startTime + props.delay) / delayDuration),
		        T = this._getPeriod(time),
		        TValue = this._delayT,
		        prevT = this._getPeriod(this._prevTime),
		        TPrevValue = this._delayT;

		    // "zero" and "one" value regarding yoyo and it's period
		    var isYoyo = props.isYoyo && T % 2 === 1,
		        isYoyoPrev = props.isYoyo && prevT % 2 === 1,
		        yoyoZero = isYoyo ? 1 : 0,
		        yoyoOne = 1 - yoyoZero;

		    if (time === props.endTime) {
		      this._wasUknownUpdate = false;
		      // if `time` is equal to `endTime`, T represents the next period,
		      // so we need to decrement T and calculate "one" value regarding yoyo
		      var isYoyo = props.isYoyo && (T - 1) % 2 === 1;
		      this._setProgress(isYoyo ? 0 : 1, time, isYoyo);
		      if (time > this._prevTime) {
		        this._isRepeatCompleted = false;
		      }
		      this._repeatComplete(time, isYoyo);
		      return this._complete(time, isYoyo);
		    }

		    // reset callback flags
		    this._isCompleted = false;
		    this._isRefreshed = false;
		    // if time is inside the duration area of the tween
		    if (startPoint + elapsed >= props.startTime) {
		      this._isInActiveArea = true;this._isRepeatCompleted = false;
		      this._isRepeatStart = false;this._isStarted = false;
		      // active zone or larger then end
		      var elapsed2 = (time - props.startTime) % delayDuration,
		          proc = elapsed2 / props.duration;
		      // |=====|=====|=====| >>>
		      //      ^1^2
		      var isOnEdge = T > 0 && prevT < T;
		      // |=====|=====|=====| <<<
		      //      ^2^1
		      var isOnReverseEdge = prevT > T;

		      // for use in timeline
		      this._onEdge = 0;
		      isOnEdge && (this._onEdge = 1);
		      isOnReverseEdge && (this._onEdge = -1);

		      if (this._wasUknownUpdate) {
		        if (time > this._prevTime) {
		          this._start(time, isYoyo);
		          this._repeatStart(time, isYoyo);
		          this._firstUpdate(time, isYoyo);
		        }
		        // if backward direction and
		        // if ( time < this._prevTime && time !== this._props.startTime ) {
		        if (time < this._prevTime) {
		          this._complete(time, isYoyo);
		          this._repeatComplete(time, isYoyo);
		          this._firstUpdate(time, isYoyo);
		          // reset isCompleted immediately
		          this._isCompleted = false;
		        }
		      }

		      if (isOnEdge) {
		        // if not just after delay
		        // |---=====|---=====|---=====| >>>
		        //            ^1 ^2
		        // because we have already handled
		        // 1 and onRepeatComplete in delay gap
		        if (this.progress !== 1) {
		          // prevT
		          var isThisYoyo = props.isYoyo && (T - 1) % 2 === 1;
		          this._repeatComplete(time, isThisYoyo);
		        }
		        // if on edge but not at very start
		        // |=====|=====|=====| >>>
		        // ^!    ^here ^here
		        if (prevT >= 0) {
		          this._repeatStart(time, isYoyo);
		        }
		      }

		      if (time > this._prevTime) {
		        //  |=====|=====|=====| >>>
		        // ^1  ^2
		        if (!this._isStarted && this._prevTime <= props.startTime) {
		          this._start(time, isYoyo);
		          this._repeatStart(time, isYoyo);
		          // it was zero anyways

		          // restart flags immediately in case if we will
		          // return to '-' inactive area on the next step
		          this._isStarted = false;
		          this._isRepeatStart = false;
		        }
		        this._firstUpdate(time, isYoyo);
		      }

		      if (isOnReverseEdge) {
		        // if on edge but not at very end
		        // |=====|=====|=====| <<<
		        //       ^here ^here ^not here
		        if (this.progress !== 0 && this.progress !== 1 && prevT != TCount) {
		          this._repeatStart(time, isYoyoPrev);
		        }
		        // if on very end edge
		        // |=====|=====|=====| <<<
		        //       ^!    ^! ^2 ^1
		        // we have handled the case in this._wasUknownUpdate
		        // block so filter that
		        if (prevT === TCount && !this._wasUknownUpdate) {
		          this._complete(time, isYoyo);
		          this._repeatComplete(time, isYoyo);
		          this._firstUpdate(time, isYoyo);
		          // reset isComplete flag call
		          // cuz we returned to active area
		          // this._isRepeatCompleted = false;
		          this._isCompleted = false;
		        }
		        this._repeatComplete(time, isYoyo);
		      }

		      if (prevT === 'delay') {
		        // if just before delay gap
		        // |---=====|---=====|---=====| <<<
		        //               ^2    ^1
		        if (T < TPrevValue) {
		          this._repeatComplete(time, isYoyo);
		        }
		        // if just after delay gap
		        // |---=====|---=====|---=====| >>>
		        //            ^1  ^2
		        if (T === TPrevValue && T > 0) {
		          this._repeatStart(time, isYoyo);
		        }
		      }

		      // swap progress and repeatStart based on direction
		      if (time > this._prevTime) {
		        // if progress is equal 0 and progress grows
		        if (proc === 0) {
		          this._repeatStart(time, isYoyo);
		        }
		        if (time !== props.endTime) {
		          this._setProgress(isYoyo ? 1 - proc : proc, time, isYoyo);
		        }
		      } else {
		        if (time !== props.endTime) {
		          this._setProgress(isYoyo ? 1 - proc : proc, time, isYoyo);
		        }
		        // if progress is equal 0 and progress grows
		        if (proc === 0) {
		          this._repeatStart(time, isYoyo);
		        }
		      }

		      if (time === props.startTime) {
		        this._start(time, isYoyo);
		      }
		      // delay gap - react only once
		    } else if (this._isInActiveArea) {
		        // because T will be string of "delay" here,
		        // let's normalize it be setting to TValue
		        var t = T === 'delay' ? TValue : T,
		            isGrows = time > this._prevTime;
		        // decrement period if forward direction of update
		        isGrows && t--;
		        // calculate normalized yoyoZero value
		        yoyoZero = props.isYoyo && t % 2 === 1 ? 1 : 0;
		        // if was in active area and previous time was larger
		        // |---=====|---=====|---=====| <<<
		        //   ^2 ^1    ^2 ^1    ^2 ^1
		        if (time < this._prevTime) {
		          this._setProgress(yoyoZero, time, yoyoZero === 1);
		          this._repeatStart(time, yoyoZero === 1);
		        }
		        // set 1 or 0 regarding direction and yoyo
		        this._setProgress(isGrows ? 1 - yoyoZero : yoyoZero, time, yoyoZero === 1);
		        // if time grows
		        if (time > this._prevTime) {
		          // if reverse direction and in delay gap, then progress will be 0
		          // if so we don't need to call the onRepeatComplete callback
		          // |---=====|---=====|---=====| <<<
		          //   ^0       ^0       ^0  
		          // OR we have flipped 0 to 1 regarding yoyo option
		          if (this.progress !== 0 || yoyoZero === 1) {
		            // since we repeatComplete for previous period
		            // invert isYoyo option
		            // is elapsed is 0 - count as previous period
		            this._repeatComplete(time, yoyoZero === 1);
		          }
		        }
		        // set flag to indicate inactive area
		        this._isInActiveArea = false;
		      }
		    // we've got the first update now
		    this._wasUknownUpdate = false;
		  };
		  /*
		    Method to remove the Tween from the tweener.
		    @private
		    @returns {Object} Self.
		  */


		  Tween.prototype._removeFromTweener = function _removeFromTweener() {
		    _tweener2.default.remove(this);return this;
		  };
		  /*
		    Method to get current period number.
		    @private
		    @param {Number} Time to get the period for.
		    @returns {Number} Current period number.
		  */


		  Tween.prototype._getPeriod = function _getPeriod(time) {
		    var p = this._props,
		        TTime = p.delay + p.duration,
		        dTime = p.delay + time - p.startTime,
		        T = dTime / TTime,

		    // if time if equal to endTime we need to set the elapsed
		    // time to 0 to fix the occasional precision js bug, which
		    // causes 0 to be something like 1e-12
		    elapsed = time < p.endTime ? dTime % TTime : 0;
		    // If the latest period, round the result, otherwise floor it.
		    // Basically we always can floor the result, but because of js
		    // precision issues, sometimes the result is 2.99999998 which
		    // will result in 2 instead of 3 after the floor operation.
		    T = time >= p.endTime ? Math.round(T) : Math.floor(T);
		    // if time is larger then the end time
		    if (time > p.endTime) {
		      // set equal to the periods count
		      T = Math.round((p.endTime - p.startTime + p.delay) / TTime);
		      // if in delay gap, set _delayT to current
		      // period number and return "delay"
		    } else if (elapsed > 0 && elapsed < p.delay) {
		        this._delayT = T;T = 'delay';
		      }
		    // if the end of period and there is a delay
		    return T;
		  };
		  /*
		    Method to set Tween's progress and call onUpdate callback.
		    @private
		    @override @ Module
		    @param {Number} Progress to set.
		    @param {Number} Current update time.
		    @param {Boolean} Is yoyo perido. Used in Timeline to pass to Tween.
		    @returns {Object} Self.
		  */


		  Tween.prototype._setProgress = function _setProgress(proc, time, isYoyo) {
		    var p = this._props,
		        isYoyoChanged = p.wasYoyo !== isYoyo,
		        isForward = time > this._prevTime;

		    this.progress = proc;
		    // get the current easing for `forward` direction regarding `yoyo`
		    if (isForward && !isYoyo || !isForward && isYoyo) {
		      this.easedProgress = p.easing(proc);
		      // get the current easing for `backward` direction regarding `yoyo`
		    } else if (!isForward && !isYoyo || isForward && isYoyo) {
		        var easing = p.backwardEasing != null ? p.backwardEasing : p.easing;

		        this.easedProgress = easing(proc);
		      }

		    if (p.prevEasedProgress !== this.easedProgress || isYoyoChanged) {
		      if (p.onUpdate != null && typeof p.onUpdate === 'function') {
		        p.onUpdate.call(p.callbacksContext || this, this.easedProgress, this.progress, isForward, isYoyo);
		      }
		    }
		    p.prevEasedProgress = this.easedProgress;
		    p.wasYoyo = isYoyo;
		    return this;
		  };
		  /*
		    Method to set tween's state to start and call onStart callback.
		    @method _start
		    @private
		    @param {Number} Progress to set.
		    @param {Boolean} Is yoyo period.
		  */


		  Tween.prototype._start = function _start(time, isYoyo) {
		    if (this._isStarted) {
		      return;
		    }
		    var p = this._props;
		    if (p.onStart != null && typeof p.onStart === 'function') {
		      p.onStart.call(p.callbacksContext || this, time > this._prevTime, isYoyo);
		    }
		    this._isCompleted = false;this._isStarted = true;
		    this._isFirstUpdate = false;
		  };
		  /*
		    Method to call onPlaybackStart callback
		    @private
		  */


		  Tween.prototype._playbackStart = function _playbackStart() {
		    var p = this._props;
		    if (p.onPlaybackStart != null && typeof p.onPlaybackStart === 'function') {
		      p.onPlaybackStart.call(p.callbacksContext || this);
		    }
		  };
		  /*
		    Method to call onPlaybackPause callback
		    @private
		  */


		  Tween.prototype._playbackPause = function _playbackPause() {
		    var p = this._props;
		    if (p.onPlaybackPause != null && typeof p.onPlaybackPause === 'function') {
		      p.onPlaybackPause.call(p.callbacksContext || this);
		    }
		  };
		  /*
		    Method to call onPlaybackStop callback
		    @private
		  */


		  Tween.prototype._playbackStop = function _playbackStop() {
		    var p = this._props;
		    if (p.onPlaybackStop != null && typeof p.onPlaybackStop === 'function') {
		      p.onPlaybackStop.call(p.callbacksContext || this);
		    }
		  };
		  /*
		    Method to call onPlaybackComplete callback
		    @private
		  */


		  Tween.prototype._playbackComplete = function _playbackComplete() {
		    var p = this._props;
		    if (p.onPlaybackComplete != null && typeof p.onPlaybackComplete === 'function') {
		      p.onPlaybackComplete.call(p.callbacksContext || this);
		    }
		  };
		  /*
		    Method to set tween's state to complete.
		    @method _complete
		    @private
		    @param {Number} Current time.
		    @param {Boolean} Is yoyo period.
		  */


		  Tween.prototype._complete = function _complete(time, isYoyo) {
		    if (this._isCompleted) {
		      return;
		    }
		    var p = this._props;
		    if (p.onComplete != null && typeof p.onComplete === 'function') {
		      p.onComplete.call(p.callbacksContext || this, time > this._prevTime, isYoyo);
		    }

		    this._isCompleted = true;this._isStarted = false;
		    this._isFirstUpdate = false;
		    // reset _prevYoyo for timeline usage
		    this._prevYoyo = undefined;
		  };

		  /*
		    Method to run onFirstUpdate callback.
		    @method _firstUpdate
		    @private
		    @param {Number} Current update time.
		    @param {Boolean} Is yoyo period.
		  */


		  Tween.prototype._firstUpdate = function _firstUpdate(time, isYoyo) {
		    if (this._isFirstUpdate) {
		      return;
		    }
		    var p = this._props;
		    if (p.onFirstUpdate != null && typeof p.onFirstUpdate === 'function') {
		      // onFirstUpdate should have tween pointer
		      p.onFirstUpdate.tween = this;
		      p.onFirstUpdate.call(p.callbacksContext || this, time > this._prevTime, isYoyo);
		    }
		    this._isFirstUpdate = true;
		  };
		  /*
		    Method call onRepeatComplete calback and set flags.
		    @private
		    @param {Number} Current update time.
		    @param {Boolean} Is repeat period.
		  */


		  Tween.prototype._repeatComplete = function _repeatComplete(time, isYoyo) {
		    if (this._isRepeatCompleted) {
		      return;
		    }
		    var p = this._props;
		    if (p.onRepeatComplete != null && typeof p.onRepeatComplete === 'function') {
		      p.onRepeatComplete.call(p.callbacksContext || this, time > this._prevTime, isYoyo);
		    }
		    this._isRepeatCompleted = true;
		    // this._prevYoyo = null;
		  };

		  /*
		    Method call onRepeatStart calback and set flags.
		    @private
		    @param {Number} Current update time.
		    @param {Boolean} Is yoyo period.
		  */


		  Tween.prototype._repeatStart = function _repeatStart(time, isYoyo) {
		    if (this._isRepeatStart) {
		      return;
		    }
		    var p = this._props;
		    if (p.onRepeatStart != null && typeof p.onRepeatStart === 'function') {
		      p.onRepeatStart.call(p.callbacksContext || this, time > this._prevTime, isYoyo);
		    }
		    this._isRepeatStart = true;
		  };
		  /*
		    Method to launch onProgress callback.
		    @method _progress
		    @private
		    @param {Number} Progress to set.
		  */


		  Tween.prototype._progress = function _progress(progress, time) {
		    var p = this._props;
		    if (p.onProgress != null && typeof p.onProgress === 'function') {
		      p.onProgress.call(p.callbacksContext || this, progress, time > this._prevTime);
		    }
		  };
		  /*
		    Method to launch onRefresh callback.
		    @method _refresh
		    @private
		    @param {Boolean} If refresh even before start time.
		  */


		  Tween.prototype._refresh = function _refresh(isBefore) {
		    var p = this._props;
		    if (p.onRefresh != null) {
		      var context = p.callbacksContext || this,
		          progress = isBefore ? 0 : 1;

		      p.onRefresh.call(context, isBefore, p.easing(progress), progress);
		    }
		  };
		  /*
		    Method which is called when the tween is removed from tweener.
		    @private
		  */


		  Tween.prototype._onTweenerRemove = function _onTweenerRemove() {};
		  /*
		    Method which is called when the tween is removed
		    from tweener when finished.
		    @private
		  */


		  Tween.prototype._onTweenerFinish = function _onTweenerFinish() {
		    this._setPlaybackState('stop');
		    this._playbackComplete();
		  };
		  /*
		    Method to set property[s] on Tween.
		    @private
		    @override @ Module
		    @param {Object, String} Hash object of key/value pairs, or property name.
		    @param {_} Property's value to set.
		  */


		  Tween.prototype._setProp = function _setProp(obj, value) {
		    _Module.prototype._setProp.call(this, obj, value);
		    this._calcDimentions();
		  };
		  /*
		    Method to set single property.
		    @private
		    @override @ Module
		    @param {String} Name of the property.
		    @param {Any} Value for the property.
		  */


		  Tween.prototype._assignProp = function _assignProp(key, value) {
		    // fallback to defaults
		    if (value == null) {
		      value = this._defaults[key];
		    }
		    // parse easing
		    if (key === 'easing') {
		      value = _easing2.default.parseEasing(value);
		      value._parent = this;
		    }
		    // handle control callbacks overrides
		    var control = this._callbackOverrides[key],
		        isntOverriden = !value || !value.isMojsCallbackOverride;
		    if (control && isntOverriden) {
		      value = this._overrideCallback(value, control);
		    }
		    // call super on Module
		    _Module.prototype._assignProp.call(this, key, value);
		  };
		  /*
		    Method to override callback for controll pupropes.
		    @private
		    @param {String}    Callback name.
		    @parma {Function}  Method to call  
		  */


		  Tween.prototype._overrideCallback = function _overrideCallback(callback, fun) {
		    var isCallback = callback && typeof callback === 'function',
		        override = function callbackOverride() {
		      // call overriden callback if it exists
		      isCallback && callback.apply(this, arguments);
		      // call the passed cleanup function
		      fun.apply(this, arguments);
		    };
		    // add overridden flag
		    override.isMojsCallbackOverride = true;
		    return override;
		  };

		  // _visualizeProgress(time) {
		  //   var str = '|',
		  //       procStr = ' ',
		  //       p = this._props,
		  //       proc = p.startTime - p.delay;

		  //   while ( proc < p.endTime ) {
		  //     if (p.delay > 0 ) {
		  //       var newProc = proc + p.delay;
		  //       if ( time > proc && time < newProc ) {
		  //         procStr += ' ^ ';
		  //       } else {
		  //         procStr += '   ';
		  //       }
		  //       proc = newProc;
		  //       str  += '---';
		  //     }
		  //     var newProc = proc + p.duration;
		  //     if ( time > proc && time < newProc ) {
		  //       procStr += '  ^   ';
		  //     } else if (time === proc) {
		  //       procStr += '^     ';
		  //     } else if (time === newProc) {
		  //       procStr += '    ^ ';
		  //     } else {
		  //       procStr += '      ';
		  //     }
		  //     proc = newProc;
		  //     str += '=====|';
		  //   }

		  //   console.log(str);
		  //   console.log(procStr);
		  // }


		  return Tween;
		}(_module2.default);

		exports.default = Tween;

	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _getIterator2 = __webpack_require__(29);

		var _getIterator3 = _interopRequireDefault(_getIterator2);

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(24);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(25);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _h = __webpack_require__(19);

		var _h2 = _interopRequireDefault(_h);

		var _tweener = __webpack_require__(10);

		var _tweener2 = _interopRequireDefault(_tweener);

		var _tween = __webpack_require__(8);

		var _tween2 = _interopRequireDefault(_tween);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var Timeline = function (_Tween) {
		  (0, _inherits3.default)(Timeline, _Tween);

		  /*
		    API method to add child tweens/timelines.
		    @public
		    @param {Object, Array} Tween/Timeline or an array of such.
		    @returns {Object} Self.
		  */

		  Timeline.prototype.add = function add() {
		    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    this._pushTimelineArray(args);
		    this._calcDimentions();
		    return this;
		  };
		  /*
		    API method to append the Tween/Timeline to the end of the
		    timeline. Each argument is treated as a new append.
		    Array of tweens is treated as a parallel sequence. 
		    @public
		    @param {Object, Array} Tween/Timeline to append or array of such.
		    @returns {Object} Self.
		  */


		  Timeline.prototype.append = function append() {
		    for (var _len2 = arguments.length, timeline = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		      timeline[_key2] = arguments[_key2];
		    }

		    for (var _iterator = timeline, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
		      var _ref;

		      if (_isArray) {
		        if (_i >= _iterator.length) break;
		        _ref = _iterator[_i++];
		      } else {
		        _i = _iterator.next();
		        if (_i.done) break;
		        _ref = _i.value;
		      }

		      var tm = _ref;

		      if (_h2.default.isArray(tm)) {
		        this._appendTimelineArray(tm);
		      } else {
		        this._appendTimeline(tm, this._timelines.length);
		      }
		      this._calcDimentions();
		    }
		    return this;
		  };
		  /*
		    API method to stop the Tween.
		    @public
		    @param   {Number} Progress [0..1] to set when stopped.
		    @returns {Object} Self.
		  */


		  Timeline.prototype.stop = function stop(progress) {
		    _Tween.prototype.stop.call(this, progress);
		    this._stopChildren(progress);
		    return this;
		  };
		  /*
		    Method to reset tween's state and properties.
		    @public
		    @overrides @ Tween
		    @returns this.
		  */


		  Timeline.prototype.reset = function reset() {
		    _Tween.prototype.reset.call(this);
		    this._resetChildren();
		    return this;
		  };
		  /*
		    Method to call `reset` method on all children.
		    @private
		  */


		  Timeline.prototype._resetChildren = function _resetChildren() {
		    for (var i = 0; i < this._timelines.length; i++) {
		      this._timelines[i].reset();
		    }
		  };
		  /*
		    Method to call `stop` method on all children.
		    @private
		    @param   {Number} Progress [0..1] to set when stopped.
		  */


		  Timeline.prototype._stopChildren = function _stopChildren(progress) {
		    for (var i = this._timelines.length - 1; i >= 0; i--) {
		      this._timelines[i].stop(progress);
		    }
		  };
		  /*
		    Method to set tween's state to complete.
		    @private
		    @overrides @ Tween
		    @param {Number} Current time.
		    @param {Boolean} Is yoyo period.
		  */
		  // _complete ( time, isYoyo ) {
		  //   // this._updateChildren( 1, time, isYoyo );
		  //   // this._setProgress( 1, time, isYoyo );
		  //   super._complete( time, isYoyo );
		  //   // this._resetChildren();
		  // }

		  // ^ PUBLIC  METHOD(S) ^
		  // v PRIVATE METHOD(S) v

		  /*
		    Method to append Tween/Timeline array or mix of such.
		    @private
		    @param {Array} Array of Tweens/Timelines.
		  */


		  Timeline.prototype._appendTimelineArray = function _appendTimelineArray(timelineArray) {
		    var i = timelineArray.length,
		        time = this._props.repeatTime - this._props.delay,
		        len = this._timelines.length;

		    while (i--) {
		      this._appendTimeline(timelineArray[i], len, time);
		    }
		  };
		  /*
		    Method to append a single timeline to the Timeline.
		    @private
		    @param {Object} Tween/Timline to append.
		    @param {Number} Index of the append.
		    @param {Number} Shift time.
		  */


		  Timeline.prototype._appendTimeline = function _appendTimeline(timeline, index, time) {
		    // if timeline is a module with timeline property then extract it
		    if (timeline.timeline instanceof Timeline) {
		      timeline = timeline.timeline;
		    }
		    if (timeline.tween instanceof _tween2.default) {
		      timeline = timeline.tween;
		    }

		    var shift = time != null ? time : this._props.duration;
		    shift += timeline._props.shiftTime || 0;
		    timeline.index = index;this._pushTimeline(timeline, shift);
		  };
		  /*
		    PrivateMethod to push Tween/Timeline array.
		    @private
		    @param {Array} Array of Tweens/Timelines.
		  */


		  Timeline.prototype._pushTimelineArray = function _pushTimelineArray(array) {
		    for (var i = 0; i < array.length; i++) {
		      var tm = array[i];
		      // recursive push to handle arrays of arrays
		      if (_h2.default.isArray(tm)) {
		        this._pushTimelineArray(tm);
		      } else {
		        this._pushTimeline(tm);
		      }
		    };
		  };
		  /*
		    Method to push a single Tween/Timeline.
		    @private
		    @param {Object} Tween or Timeline to push.
		    @param {Number} Number of milliseconds to shift the start time
		                    of the Tween/Timeline.
		  */


		  Timeline.prototype._pushTimeline = function _pushTimeline(timeline, shift) {
		    // if timeline is a module with timeline property then extract it
		    if (timeline.timeline instanceof Timeline) {
		      timeline = timeline.timeline;
		    }
		    if (timeline.tween instanceof _tween2.default) {
		      timeline = timeline.tween;
		    }
		    // add self delay to the timeline
		    shift != null && timeline._setProp({ 'shiftTime': shift });
		    this._timelines.push(timeline);
		    this._recalcDuration(timeline);
		  };
		  /*
		    Method set progress on self and child Tweens/Timelines.
		    @private
		    @param {Number} Progress to set.
		    @param {Number} Current update time.
		  */


		  Timeline.prototype._setProgress = function _setProgress(p, time, isYoyo) {
		    // we need to pass self previous time to children
		    // to prevent initial _wasUnknownUpdate nested waterfall
		    // if not yoyo option set, pass the previous time
		    // otherwise, pass previous or next time regarding yoyo period.

		    // COVER CURRENT SWAPPED ORDER
		    this._updateChildren(p, time, isYoyo);

		    _tween2.default.prototype._setProgress.call(this, p, time);
		  };

		  Timeline.prototype._updateChildren = function _updateChildren(p, time, isYoyo) {
		    var coef = time > this._prevTime ? -1 : 1;
		    if (this._props.isYoyo && isYoyo) {
		      coef *= -1;
		    }
		    var timeToTimelines = this._props.startTime + p * this._props.duration,
		        prevTimeToTimelines = timeToTimelines + coef,
		        len = this._timelines.length;

		    for (var i = 0; i < len; i++) {
		      // specify the children's array update loop direction
		      // if time > prevTime go from 0->length else from length->0
		      // var j = ( time > this._prevTime ) ? i : (len-1) - i ;
		      var j = timeToTimelines > prevTimeToTimelines ? i : len - 1 - i;
		      this._timelines[j]._update(timeToTimelines, prevTimeToTimelines, this._prevYoyo, this._onEdge);
		    }
		    this._prevYoyo = isYoyo;
		  };
		  /*
		    Method calculate self duration based on timeline's duration.
		    @private
		    @param {Object} Tween or Timeline to calculate.
		  */


		  Timeline.prototype._recalcDuration = function _recalcDuration(timeline) {
		    var p = timeline._props,
		        timelineTime = p.repeatTime / p.speed + (p.shiftTime || 0) + timeline._negativeShift;

		    this._props.duration = Math.max(timelineTime, this._props.duration);
		  };
		  /*
		    Method calculate self duration from skretch.
		    @private
		  */


		  Timeline.prototype._recalcTotalDuration = function _recalcTotalDuration() {
		    var i = this._timelines.length;
		    this._props.duration = 0;
		    while (i--) {
		      var tm = this._timelines[i];
		      // recalc total duration on child timelines
		      tm._recalcTotalDuration && tm._recalcTotalDuration();
		      // add the timeline's duration to selft duration
		      this._recalcDuration(tm);
		    }
		    this._calcDimentions();
		  };
		  /*
		    Method set start and end times.
		    @private
		    @param {Number, Null} Time to start with.
		  */


		  Timeline.prototype._setStartTime = function _setStartTime(time) {
		    var isReset = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

		    _Tween.prototype._setStartTime.call(this, time);
		    this._startTimelines(this._props.startTime, isReset);
		  };
		  /*
		    Method calculate self duration based on timeline's duration.
		    @private
		    @param {Number, Null} Time to start with.
		  */


		  Timeline.prototype._startTimelines = function _startTimelines(time) {
		    var isReset = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

		    var p = this._props,
		        isStop = this._state === 'stop';

		    time == null && (time = this._props.startTime);

		    for (var i = 0; i < this._timelines.length; i++) {
		      var tm = this._timelines[i];
		      tm._setStartTime(time, isReset);
		      // if from `_subPlay` and `_prevTime` is set and state is `stop`
		      // prevTime normalizing is for play/pause functionality, so no
		      // need to normalize if the timeline is in `stop` state.
		      if (!isReset && tm._prevTime != null && !isStop) {
		        tm._prevTime = tm._normPrevTimeForward();
		      }
		    }
		  };
		  /*
		    Method to launch onRefresh callback.
		    @method _refresh
		    @private
		    @overrides @ Tween
		    @param {Boolean} If refresh even before start time.
		  */


		  Timeline.prototype._refresh = function _refresh(isBefore) {
		    var len = this._timelines.length;
		    for (var i = 0; i < len; i++) {
		      this._timelines[i]._refresh(isBefore);
		    }
		    _Tween.prototype._refresh.call(this, isBefore);
		  };
		  /*
		    Method do declare defaults by this._defaults object
		    @private
		  */


		  Timeline.prototype._declareDefaults = function _declareDefaults() {
		    // if duration was passed on initialization stage, warn user and reset it.
		    if (this._o.duration != null) {
		      _h2.default.error('Duration can not be declared on Timeline, but "' + this._o.duration + '" is. You probably want to use Tween instead.');
		      this._o.duration = 0;
		    }
		    _Tween.prototype._declareDefaults.call(this);
		    // remove default
		    this._defaults.duration = 0;
		    this._defaults.easing = 'Linear.None';
		    this._defaults.backwardEasing = 'Linear.None';
		    this._defaults.nameBase = 'Timeline';
		  };

		  function Timeline() {
		    var o = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		    (0, _classCallCheck3.default)(this, Timeline);
		    return (0, _possibleConstructorReturn3.default)(this, _Tween.call(this, o));
		  }
		  /*
		    Method to declare some vars.
		    @private
		  */


		  Timeline.prototype._vars = function _vars() {
		    this._timelines = [];
		    _Tween.prototype._vars.call(this);
		  };

		  return Timeline;
		}(_tween2.default);

		exports.default = Timeline;

	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		__webpack_require__(30);

		__webpack_require__(31);

		var _h = __webpack_require__(19);

		var _h2 = _interopRequireDefault(_h);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var Tweener = function () {
		  function Tweener() {
		    (0, _classCallCheck3.default)(this, Tweener);

		    this._vars();
		    this._listenVisibilityChange();
		    return this;
		  }

		  Tweener.prototype._vars = function _vars() {
		    this.tweens = [];
		    this._loop = this._loop.bind(this);
		    this._onVisibilityChange = this._onVisibilityChange.bind(this);
		  };
		  /*
		    Main animation loop. Should have only one concurrent loop.
		    @private
		    @returns this
		  */


		  Tweener.prototype._loop = function _loop() {
		    if (!this._isRunning) {
		      return false;
		    }
		    this._update(window.performance.now());
		    if (!this.tweens.length) {
		      return this._isRunning = false;
		    }
		    requestAnimationFrame(this._loop);
		    return this;
		  };
		  /*
		    Method to start animation loop.
		    @private
		  */


		  Tweener.prototype._startLoop = function _startLoop() {
		    if (this._isRunning) {
		      return;
		    };this._isRunning = true;
		    requestAnimationFrame(this._loop);
		  };
		  /*
		    Method to stop animation loop.
		    @private
		  */


		  Tweener.prototype._stopLoop = function _stopLoop() {
		    this._isRunning = false;
		  };
		  /*
		    Method to update every tween/timeline on animation frame.
		    @private
		  */


		  Tweener.prototype._update = function _update(time) {
		    var i = this.tweens.length;
		    while (i--) {
		      // cache the current tween
		      var tween = this.tweens[i];
		      if (tween && tween._update(time) === true) {
		        this.remove(tween);
		        tween._onTweenerFinish();
		        tween._prevTime = undefined;
		      }
		    }
		  };
		  /*
		    Method to add a Tween/Timeline to loop pool.
		    @param {Object} Tween/Timeline to add.
		  */


		  Tweener.prototype.add = function add(tween) {
		    // return if tween is already running
		    if (tween._isRunning) {
		      return;
		    }
		    tween._isRunning = true;
		    this.tweens.push(tween);
		    this._startLoop();
		  };
		  /*
		    Method stop updating all the child tweens/timelines.
		    @private
		  */


		  Tweener.prototype.removeAll = function removeAll() {
		    this.tweens.length = 0;
		  };
		  /*
		    Method to remove specific tween/timeline form updating.
		    @private
		  */


		  Tweener.prototype.remove = function remove(tween) {
		    var index = typeof tween === 'number' ? tween : this.tweens.indexOf(tween);

		    if (index !== -1) {
		      tween = this.tweens[index];
		      if (tween) {
		        tween._isRunning = false;
		        this.tweens.splice(index, 1);
		        tween._onTweenerRemove();
		      }
		    }
		  };

		  /*
		    Method to initialize event listeners to visibility change events.
		    @private
		  */


		  Tweener.prototype._listenVisibilityChange = function _listenVisibilityChange() {
		    if (typeof document.hidden !== "undefined") {
		      this._visibilityHidden = "hidden";
		      this._visibilityChange = "visibilitychange";
		    } else if (typeof document.mozHidden !== "undefined") {
		      this._visibilityHidden = "mozHidden";
		      this._visibilityChange = "mozvisibilitychange";
		    } else if (typeof document.msHidden !== "undefined") {
		      this._visibilityHidden = "msHidden";
		      this._visibilityChange = "msvisibilitychange";
		    } else if (typeof document.webkitHidden !== "undefined") {
		      this._visibilityHidden = "webkitHidden";
		      this._visibilityChange = "webkitvisibilitychange";
		    }

		    document.addEventListener(this._visibilityChange, this._onVisibilityChange, false);
		  };
		  /*
		    Method that will fire on visibility change.
		  */


		  Tweener.prototype._onVisibilityChange = function _onVisibilityChange() {
		    if (document[this._visibilityHidden]) {
		      this._savePlayingTweens();
		    } else {
		      this._restorePlayingTweens();
		    }
		  };
		  /*
		    Method to save all playing tweens.
		    @private
		  */


		  Tweener.prototype._savePlayingTweens = function _savePlayingTweens() {
		    this._savedTweens = this.tweens.slice(0);
		    for (var i = 0; i < this._savedTweens.length; i++) {
		      this._savedTweens[i].pause();
		    }
		  };
		  /*
		    Method to restore all playing tweens.
		    @private
		  */


		  Tweener.prototype._restorePlayingTweens = function _restorePlayingTweens() {
		    for (var i = 0; i < this._savedTweens.length; i++) {
		      this._savedTweens[i].resume();
		    }
		  };

		  return Tweener;
		}();

		var t = new Tweener();
		exports.default = t;

	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(24);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(25);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _tween = __webpack_require__(8);

		var _tween2 = _interopRequireDefault(_tween);

		var _timeline = __webpack_require__(9);

		var _timeline2 = _interopRequireDefault(_timeline);

		var _module = __webpack_require__(16);

		var _module2 = _interopRequireDefault(_module);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		/*
		  Class to define a module ancestor
		  with timeline and tween options and functionality.
		  All runable modules should inherit from this class.

		  @class Tweenable
		*/

		var Tweenable = function (_Module) {
		  (0, _inherits3.default)(Tweenable, _Module);

		  /*
		    `play` method for the timeline.
		    @public
		    @param {Number} Time shift.
		    @returns this.
		  */

		  Tweenable.prototype.play = function play() {
		    this.timeline.play.apply(this.timeline, arguments);
		    return this;
		  };
		  /*
		    `playBackward` method for the timeline.
		    @public
		    @param {Number} Time shift.
		    @returns this.
		  */


		  Tweenable.prototype.playBackward = function playBackward() {
		    this.timeline.playBackward.apply(this.timeline, arguments);
		    return this;
		  };
		  /*
		    `pause` method for the timeline.
		    @public
		    @returns this.
		  */


		  Tweenable.prototype.pause = function pause() {
		    this.timeline.pause.apply(this.timeline, arguments);
		    return this;
		  };
		  /*
		    `stop` method for the timeline.
		    @public
		    @param {Number} [0...1] Progress to set on stop.
		                            *Default* is `0` if `play`
		                            and `1` if `playBAckward`.
		    @returns this.
		  */


		  Tweenable.prototype.stop = function stop() {
		    this.timeline.stop.apply(this.timeline, arguments);
		    return this;
		  };
		  /*
		    `reset` method for the timeline.
		    @public
		    @returns this.
		  */


		  Tweenable.prototype.reset = function reset() {
		    this.timeline.reset.apply(this.timeline, arguments);
		    return this;
		  };
		  /*
		    `replay` method for the timeline.
		    @public
		    @returns this.
		  */


		  Tweenable.prototype.replay = function replay() {
		    this.timeline.replay.apply(this.timeline, arguments);
		    return this;
		  };
		  /*
		    `replay` method for the timeline.
		    @public
		    @returns this.
		  */


		  Tweenable.prototype.replayBackward = function replayBackward() {
		    this.timeline.replayBackward.apply(this.timeline, arguments);
		    return this;
		  };
		  /*
		    `resume` method for the timeline.
		    @public
		    @param {Number} Time shift.
		    @returns this.
		  */


		  Tweenable.prototype.resume = function resume() {
		    var shift = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

		    this.timeline.resume.apply(this.timeline, arguments);
		    return this;
		  };
		  /*
		    `setProgress` method for the timeline.
		    @public
		    @param {Number} [0...1] Progress value.
		    @returns this.
		  */


		  Tweenable.prototype.setProgress = function setProgress() {
		    this.timeline.setProgress.apply(this.timeline, arguments);
		    return this;
		  };
		  /*
		    setSpeed method for the timeline.
		    @param {Number} Speed value.
		    @returns this.
		  */


		  Tweenable.prototype.setSpeed = function setSpeed(speed) {
		    this.timeline.setSpeed.apply(this.timeline, arguments);
		    return this;
		  };

		  // ^ PUBLIC  METHOD(S) ^
		  // v PRIVATE METHOD(S) v

		  function Tweenable() {
		    var o = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		    (0, _classCallCheck3.default)(this, Tweenable);

		    // pipe function for _o object
		    // before creating tween/timeline

		    var _this = (0, _possibleConstructorReturn3.default)(this, _Module.call(this, o));
		    // super of Module


		    _this._transformTweenOptions();
		    // make tween only if isTweenLess option is not set
		    !_this._o.isTweenLess && _this._makeTween();
		    // make timeline only if isTimelineLess option is not set
		    !_this._o.isTimelineLess && _this._makeTimeline();
		    return _this;
		  }
		  /*
		    Placeholder method that should be overrided
		    and will be called before tween/timeline creation.
		    @private
		  */


		  Tweenable.prototype._transformTweenOptions = function _transformTweenOptions() {};
		  /*
		    Method to create tween.
		    @private
		  */


		  Tweenable.prototype._makeTween = function _makeTween() {
		    // pass callbacks context
		    this._o.callbacksContext = this._o.callbacksContext || this;
		    this.tween = new _tween2.default(this._o);
		    // make timeline property point to tween one is "no timeline" mode
		    this._o.isTimelineLess && (this.timeline = this.tween);
		  };
		  /*
		    Method to create timeline.
		    @private
		    @param {Object} Timeline's options.
		                    An object which contains "timeline" property with
		                    timeline options.
		  */


		  Tweenable.prototype._makeTimeline = function _makeTimeline() {
		    // pass callbacks context
		    this._o.timeline = this._o.timeline || {};
		    this._o.timeline.callbacksContext = this._o.callbacksContext || this;
		    this.timeline = new _timeline2.default(this._o.timeline);
		    // set the flag to indicate that real timeline is present
		    this._isTimeline = true;
		    // if tween exist - add it to the timeline there is some
		    // modules like burst and stagger that have no tween
		    this.tween && this.timeline.add(this.tween);
		  };

		  return Tweenable;
		}(_module2.default);

		exports.default = Tweenable;

	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _keys = __webpack_require__(28);

		var _keys2 = _interopRequireDefault(_keys);

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(24);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(25);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _tweenable = __webpack_require__(11);

		var _tweenable2 = _interopRequireDefault(_tweenable);

		var _h = __webpack_require__(19);

		var _h2 = _interopRequireDefault(_h);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		/*
		  The Thenable class adds .then public method and
		  the ability to chain API calls.
		*/

		var Thenable = function (_Tweenable) {
		  (0, _inherits3.default)(Thenable, _Tweenable);

		  function Thenable() {
		    (0, _classCallCheck3.default)(this, Thenable);
		    return (0, _possibleConstructorReturn3.default)(this, _Tweenable.apply(this, arguments));
		  }

		  /*
		    Method to create a then record for the module.
		    @public
		    @param    {Object} Options for the next animation.
		    @returns  {Object} this.
		  */

		  Thenable.prototype.then = function then(o) {
		    // return if nothing was passed
		    if (o == null || !(0, _keys2.default)(o).length) {
		      return 1;
		    }
		    // merge then options with the current ones
		    var prevRecord = this._history[this._history.length - 1],
		        prevModule = this._modules[this._modules.length - 1],
		        merged = this._mergeThenOptions(prevRecord, o);

		    this._resetMergedFlags(merged);
		    // create a submodule of the same type as the master module
		    var module = new this.constructor(merged);
		    // set `this` as amster module of child module
		    module._masterModule = this;
		    // save the modules to the _modules array
		    this._modules.push(module);
		    // add module's tween into master timeline
		    this.timeline.append(module);

		    return this;
		  };

		  // ^ PUBLIC  METHOD(S) ^
		  // v PRIVATE METHOD(S) v

		  /*
		    Method to reset some flags on merged options object.
		    @private
		    @param   {Object} Options object.
		    @returns {Object} Options object.
		  */


		  Thenable.prototype._resetMergedFlags = function _resetMergedFlags(obj) {
		    // set the submodule to be without timeline for perf reasons
		    obj.isTimelineLess = true;
		    // reset isShowStart flag for the submodules
		    obj.isShowStart = false;
		    // reset isRefreshState flag for the submodules
		    obj.isRefreshState = false;
		    // set the submodule callbacks context
		    obj.callbacksContext = this._props.callbacksContext || this;
		    // set previous module
		    obj.prevChainModule = _h2.default.getLastItem(this._modules);
		    // pass the `this` as master module
		    obj.masterModule = this;
		    return obj;
		  };
		  /*
		    Method to initialize properties.
		    @private
		  */


		  Thenable.prototype._vars = function _vars() {
		    _Tweenable.prototype._vars.call(this);
		    // save _master module
		    this._masterModule = this._o.masterModule;
		    // set isChained flag based on prevChainModule option
		    this._isChained = !!this._masterModule;
		    // we are expect that the _o object
		    // have been already extended by defaults
		    var initialRecord = _h2.default.cloneObj(this._props);
		    for (var key in this._arrayPropertyMap) {
		      if (this._o[key]) {
		        var preParsed = this._parsePreArrayProperty(key, this._o[key]);
		        initialRecord[key] = preParsed;
		      }
		    }

		    this._history = [initialRecord];
		    // the array holds all modules in the then chain
		    this._modules = [this];
		    // the props that to exclude from then merge
		    this._nonMergeProps = { shape: 1 };
		  };
		  /*
		    Method to merge two options into one. Used in .then chains.
		    @private
		    @param {Object} Start options for the merge.
		    @param {Object} End options for the merge.
		    @returns {Object} Merged options.
		  */


		  Thenable.prototype._mergeThenOptions = function _mergeThenOptions(start, end) {
		    var o = {};
		    this._mergeStartLoop(o, start);
		    this._mergeEndLoop(o, start, end);
		    this._history.push(o);
		    return o;
		  };
		  /*
		    Method to pipe startValue of the delta.
		    @private
		    @param {String} Start property name.
		    @param {Any} Start property value.
		    @returns {Any} Start property value.
		  */


		  Thenable.prototype._checkStartValue = function _checkStartValue(name, value) {
		    return value;
		  };
		  /*
		    Originally part of the _mergeThenOptions.
		    Loops thru start object and copies all the props from it.
		    @param {Object} An object to copy in.
		    @parma {Object} Start options object.
		  */


		  Thenable.prototype._mergeStartLoop = function _mergeStartLoop(o, start) {
		    // loop thru start options object
		    for (var key in start) {
		      var value = start[key];
		      if (start[key] == null) {
		        continue;
		      };
		      // copy all values from start if not tween prop or duration
		      if (!_h2.default.isTweenProp(key) || key === 'duration') {
		        // if delta - copy only the end value
		        if (this._isDelta(value)) {
		          o[key] = _h2.default.getDeltaEnd(value);
		        } else {
		          o[key] = value;
		        }
		      }
		    }
		  };
		  /*
		    Originally part of the _mergeThenOptions.
		    Loops thru start object and merges all the props from it.
		    @param {Object} An object to copy in.
		    @parma {Object} Start options object.
		    @parma {Object} End options object.
		  */


		  Thenable.prototype._mergeEndLoop = function _mergeEndLoop(o, start, end) {
		    var endKeys = (0, _keys2.default)(end);

		    for (var key in end) {
		      // just copy parent option
		      if (key == 'parent') {
		        o[key] = end[key];continue;
		      };

		      // get key/value of the end object
		      // endKey - name of the property, endValue - value of the property
		      var endValue = end[key],
		          startValue = start[key] != null ? start[key] : this._defaults[key];

		      startValue = this._checkStartValue(key, startValue);
		      if (endValue == null) {
		        continue;
		      };
		      // make ∆ of start -> end
		      // if key name is radiusX/radiusY and
		      // the startValue is not set fallback to radius value
		      var isSubRadius = key === 'radiusX' || key === 'radiusY';
		      if (isSubRadius && startValue == null) {
		        startValue = start.radius;
		      }

		      var isSubRadius = key === 'scaleX' || key === 'scaleY';
		      if (isSubRadius && startValue == null) {
		        startValue = start.scale;
		      }

		      o[key] = this._mergeThenProperty(key, startValue, endValue);
		    }
		  };
		  /*
		    Method to merge `start` and `end` for a property in then record.
		    @private
		    @param {String} Property name.
		    @param {Any}    Start value of the property.
		    @param {Any}    End value of the property.
		  */


		  Thenable.prototype._mergeThenProperty = function _mergeThenProperty(key, startValue, endValue) {
		    // if isnt tween property
		    var isBoolean = typeof endValue === 'boolean',
		        curve,
		        easing;

		    if (!_h2.default.isTweenProp(key) && !this._nonMergeProps[key] && !isBoolean) {

		      if (_h2.default.isObject(endValue) && endValue.to != null) {
		        curve = endValue.curve;
		        easing = endValue.easing;
		        endValue = endValue.to;
		      }

		      // if end value is delta - just save it
		      if (this._isDelta(endValue)) {
		        return this._parseDeltaValues(key, endValue);
		      } else {
		        var parsedEndValue = this._parsePreArrayProperty(key, endValue);
		        // if end value is not delta - merge with start value
		        if (this._isDelta(startValue)) {
		          var _ref;

		          // if start value is delta - take the end value
		          // as start value of the new delta
		          return _ref = {}, _ref[_h2.default.getDeltaEnd(startValue)] = parsedEndValue, _ref.easing = easing, _ref.curve = curve, _ref;
		          // if both start and end value are not ∆ - make ∆
		        } else {
		            var _ref2;

		            return _ref2 = {}, _ref2[startValue] = parsedEndValue, _ref2.easing = easing, _ref2.curve = curve, _ref2;
		          }
		      }
		      // copy the tween values unattended
		    } else {
		        return endValue;
		      }
		  };
		  /*
		    Method to retreive array's length and return -1 for
		    all other types.
		    @private
		    @param {Array, Any} Array to get the width for.
		    @returns {Number} Array length or -1 if not array.
		  */


		  Thenable.prototype._getArrayLength = function _getArrayLength(arr) {
		    return _h2.default.isArray(arr) ? arr.length : -1;
		  };
		  /*
		    Method to check if the property is delta property.
		    @private
		    @param {Any} Parameter value to check.
		    @returns {Boolean}
		  */


		  Thenable.prototype._isDelta = function _isDelta(optionsValue) {
		    var isObject = _h2.default.isObject(optionsValue);
		    isObject = isObject && !optionsValue.unit;
		    return !(!isObject || _h2.default.isArray(optionsValue) || _h2.default.isDOM(optionsValue));
		  };
		  /*
		    Method to check if the module is first in `then` chain.
		    @private
		    @returns {Boolean} If the module is the first in module chain.
		  */


		  Thenable.prototype._isFirstInChain = function _isFirstInChain() {
		    return !this._masterModule;
		  };
		  /*
		    Method to check if the module is last in `then` chain.
		    @private
		    @returns {Boolean} If the module is the last in module chain.
		  */


		  Thenable.prototype._isLastInChain = function _isLastInChain() {
		    var master = this._masterModule;
		    // if there is no master field - check the modules length
		    // if module length is 1 thus there is no modules chain
		    // it is the last one, otherwise it isnt
		    if (!master) {
		      return this._modules.length === 1;
		    }
		    // if there is master - check if it is the last item in _modules chain
		    return this === _h2.default.getLastItem(master._modules);
		  };

		  return Thenable;
		}(_tweenable2.default);

		exports.default = Thenable;

	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _keys = __webpack_require__(28);

		var _keys2 = _interopRequireDefault(_keys);

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(24);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(25);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _h = __webpack_require__(19);

		var _h2 = _interopRequireDefault(_h);

		var _thenable = __webpack_require__(12);

		var _thenable2 = _interopRequireDefault(_thenable);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var Tuneable = function (_Thenable) {
		  (0, _inherits3.default)(Tuneable, _Thenable);

		  function Tuneable() {
		    (0, _classCallCheck3.default)(this, Tuneable);
		    return (0, _possibleConstructorReturn3.default)(this, _Thenable.apply(this, arguments));
		  }

		  /*
		    Method to start the animation with optional new options.
		    @public
		    @param {Object} New options to set on the run.
		    @returns {Object} this.
		  */

		  Tuneable.prototype.tune = function tune(o) {
		    // if options object was passed
		    if (o && (0, _keys2.default)(o).length) {
		      this._transformHistory(o);
		      this._tuneNewOptions(o);
		      // restore array prop values because _props
		      // contain them as parsed arrays
		      // but we need the as strings to store in history
		      // and merge in history chains
		      this._history[0] = _h2.default.cloneObj(this._props);
		      for (var key in this._arrayPropertyMap) {
		        if (o[key] != null) {
		          this._history[0][key] = this._preparsePropValue(key, o[key]);
		        }
		      }

		      this._tuneSubModules();
		      this._resetTweens();
		    }
		    return this;
		  };
		  /*
		    Method to regenerate all the random properties form initial object.
		    @public
		    @returns this.
		  */


		  Tuneable.prototype.generate = function generate() {
		    return this.tune(this._o);
		  };

		  // ^ PUBLIC  METHOD(S) ^
		  // v PRIVATE METHOD(S) v

		  /*
		    Method to preparse options in object.
		    @private
		    @param {Object} Object to preparse properties on.
		    @returns {Object} Passed object with preparsed props.
		  */
		  // _preParseOptions ( o ) {
		  //   for (var key in o) {
		  //     o[key] = this._preparsePropValue( key, o[key] );
		  //   }
		  //   return o;
		  // }
		  /*
		    Method to transform history rewrite new options object chain on run.
		    @private
		    @param {Object} New options to tune for.
		  */


		  Tuneable.prototype._transformHistory = function _transformHistory(o) {
		    for (var key in o) {
		      var value = o[key];
		      // don't transform for childOptions
		      // if ( key === 'childOptions' ) { continue; }
		      this._transformHistoryFor(key, this._preparsePropValue(key, value));
		    }
		  };
		  /*
		    Method to transform history chain for specific key/value.
		    @param {String} Name of the property to transform history for.
		    @param {Any} The new property's value.
		  */


		  Tuneable.prototype._transformHistoryFor = function _transformHistoryFor(key, value) {
		    for (var i = 0; i < this._history.length; i++) {
		      if (value = this._transformHistoryRecord(i, key, value)) {
		        // break if no further history modifications needed
		        if (value == null) {
		          break;
		        }
		      }
		    }
		  };
		  /*
		    Method to transform history recod with key/value.
		    @param {Number} Index of the history record to transform.
		    @param {String} Property name to transform.
		    @param {Any} Property value to transform to.
		    @param {Object} Optional the current history record.
		    @param {Object} Optional the next history record.
		    @returns {Boolean} Returns true if no further
		                       history modifications is needed.
		  */


		  Tuneable.prototype._transformHistoryRecord = function _transformHistoryRecord(index, key, newVal, currRecord, nextRecord) {
		    // newVal = this._parseProperty( key, newVal );
		    if (newVal == null) {
		      return null;
		    }

		    // fallback to history records, if wasn't specified
		    currRecord = currRecord == null ? this._history[index] : currRecord;
		    nextRecord = nextRecord == null ? this._history[index + 1] : nextRecord;

		    var oldVal = currRecord[key],
		        nextVal = nextRecord == null ? null : nextRecord[key];

		    // if index is 0 - always save the newVal
		    // and return non-delta for subsequent modifications
		    if (index === 0) {
		      currRecord[key] = newVal;
		      // always return on tween properties
		      if (_h2.default.isTweenProp(key) && key !== 'duration') {
		        return null;
		      }
		      // nontween properties
		      var isRewriteNext = this._isRewriteNext(oldVal, nextVal),
		          returnVal = this._isDelta(newVal) ? _h2.default.getDeltaEnd(newVal) : newVal;
		      return isRewriteNext ? returnVal : null;
		    } else {
		      // if was delta and came none-deltta - rewrite
		      // the start of the delta and stop
		      if (this._isDelta(oldVal)) {
		        var _currRecord$key;

		        currRecord[key] = (_currRecord$key = {}, _currRecord$key[newVal] = _h2.default.getDeltaEnd(oldVal), _currRecord$key);
		        return null;
		      } else {
		        // if the old value is not delta and the new one is
		        currRecord[key] = newVal;
		        // if the next item has the same value - return the
		        // item for subsequent modifications or stop
		        return this._isRewriteNext(oldVal, nextVal) ? newVal : null;
		      }
		    }
		  };
		  /*
		    Method to check if the next item should
		    be rewrited in transform history operation.
		    @private
		    @param {Any} Current value.
		    @param {Any} Next value.
		    @returns {Boolean} If need to rewrite the next value.
		  */


		  Tuneable.prototype._isRewriteNext = function _isRewriteNext(currVal, nextVal) {
		    // return false if nothing to rewrite next
		    if (nextVal == null && currVal != null) {
		      return false;
		    }

		    var isEqual = currVal === nextVal,
		        isNextDelta = this._isDelta(nextVal),
		        isDelta = this._isDelta(currVal),
		        isValueDeltaChain = false,
		        isDeltaChain = false;

		    if (isDelta && isNextDelta) {
		      if (_h2.default.getDeltaEnd(currVal) == _h2.default.getDeltaStart(nextVal)) {
		        isDeltaChain = true;
		      }
		    } else if (isNextDelta) {
		      isValueDeltaChain = _h2.default.getDeltaStart(nextVal) === '' + currVal;
		    }

		    return isEqual || isValueDeltaChain || isDeltaChain;
		  };
		  /*
		    Method to tune new history options to all the submodules.
		    @private
		  */


		  Tuneable.prototype._tuneSubModules = function _tuneSubModules() {
		    for (var i = 1; i < this._modules.length; i++) {
		      this._modules[i]._tuneNewOptions(this._history[i]);
		    }
		  };
		  /*
		    Method to set new options on run.
		    @param {Boolean} If foreign context.
		    @private
		  */


		  Tuneable.prototype._resetTweens = function _resetTweens() {
		    var i = 0,
		        shift = 0,
		        tweens = this.timeline._timelines;

		    // if `isTimelineLess` return
		    if (tweens == null) {
		      return;
		    }

		    for (var i = 0; i < tweens.length; i++) {
		      var tween = tweens[i],
		          prevTween = tweens[i - 1];

		      shift += prevTween ? prevTween._props.repeatTime : 0;
		      this._resetTween(tween, this._history[i], shift);
		    }
		    this.timeline._setProp(this._props.timeline);
		    this.timeline._recalcTotalDuration();
		  };
		  /*
		    Method to reset tween with new options.
		    @param {Object} Tween to reset.
		    @param {Object} Tween's to reset tween with.
		    @param {Number} Optional number to shift tween start time.
		  */


		  Tuneable.prototype._resetTween = function _resetTween(tween, o) {
		    var shift = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

		    o.shiftTime = shift;tween._setProp(o);
		  };

		  return Tuneable;
		}(_thenable2.default);

		exports.default = Tuneable;

	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _tween = __webpack_require__(8);

		var _tween2 = _interopRequireDefault(_tween);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var h = __webpack_require__(19);

		var Delta = function () {
		  function Delta() {
		    var o = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		    (0, _classCallCheck3.default)(this, Delta);

		    this._o = o;
		    this._createTween(o.tweenOptions);
		    // initial properties render
		    !this._o.isChained && this.refresh(true);
		  }
		  /*
		    Method to call `_refresh` method on `tween`.
		    Use switch between `0` and `1` progress for delta value.
		    @public
		    @param {Boolean} If refresh before start time or after.
		    @returns this.
		  */


		  Delta.prototype.refresh = function refresh(isBefore) {
		    this._previousValues = [];

		    var deltas = this._o.deltas;
		    for (var i = 0; i < deltas.length; i++) {
		      var name = deltas[i].name;
		      this._previousValues.push({
		        name: name, value: this._o.props[name]
		      });
		    }

		    this.tween._refresh(isBefore);
		    return this;
		  };
		  /*
		    Method to restore all saved properties from `_previousValues` array.
		    @public
		    @returns this.
		  */


		  Delta.prototype.restore = function restore() {
		    var prev = this._previousValues;
		    for (var i = 0; i < prev.length; i++) {
		      var record = prev[i];
		      this._o.props[record.name] = record.value;
		    }
		    return this;
		  };
		  /*
		    Method to create tween of the delta.
		    @private
		    @param {Object} Options object.
		  */


		  Delta.prototype._createTween = function _createTween() {
		    var o = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		    var it = this;
		    o.callbackOverrides = {
		      onUpdate: function onUpdate(ep, p) {
		        it._calcCurrentProps(ep, p);
		      }
		    };

		    // if not chained - add the onRefresh callback
		    // to refresh the tween when needed
		    if (!this._o.isChained) {
		      o.callbackOverrides.onRefresh = function (isBefore, ep, p) {
		        it._calcCurrentProps(ep, p);
		      };
		    }

		    o.callbacksContext = this._o.callbacksContext;
		    this.tween = new _tween2.default(o);
		  };
		  /*
		    Method to calculate current progress of the deltas.
		    @private
		    @param {Number} Eased progress to calculate - [0..1].
		    @param {Number} Progress to calculate - [0..1].
		  */


		  Delta.prototype._calcCurrentProps = function _calcCurrentProps(easedProgress, p) {
		    var deltas = this._o.deltas;
		    for (var i = 0; i < deltas.length; i++) {
		      var type = deltas[i].type;
		      this['_calcCurrent_' + type](deltas[i], easedProgress, p);
		    }
		  };
		  /*
		    Method to calc the current color delta value.
		    @param {Object} Delta
		    @param {Number} Eased progress [0..1].
		    @param {Number} Plain progress [0..1].
		  */


		  Delta.prototype._calcCurrent_color = function _calcCurrent_color(delta, ep, p) {
		    var r,
		        g,
		        b,
		        a,
		        start = delta.start,
		        d = delta.delta;
		    if (!delta.curve) {
		      r = parseInt(start.r + ep * d.r, 10);
		      g = parseInt(start.g + ep * d.g, 10);
		      b = parseInt(start.b + ep * d.b, 10);
		      a = parseFloat(start.a + ep * d.a);
		    } else {
		      var cp = delta.curve(p);
		      r = parseInt(cp * (start.r + p * d.r), 10);
		      g = parseInt(cp * (start.g + p * d.g), 10);
		      b = parseInt(cp * (start.b + p * d.b), 10);
		      a = parseFloat(cp * (start.a + p * d.a));
		    }
		    this._o.props[delta.name] = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
		  };
		  /*
		    Method to calc the current number delta value.
		    @param {Object} Delta
		    @param {Number} Eased progress [0..1].
		    @param {Number} Plain progress [0..1].
		  */


		  Delta.prototype._calcCurrent_number = function _calcCurrent_number(delta, ep, p) {
		    this._o.props[delta.name] = !delta.curve ? delta.start + ep * delta.delta : delta.curve(p) * (delta.start + p * delta.delta);
		  };
		  /*
		    Method to calc the current number with units delta value.
		    @param {Object} Delta
		    @param {Number} Eased progress [0..1].
		    @param {Number} Plain progress [0..1].
		  */


		  Delta.prototype._calcCurrent_unit = function _calcCurrent_unit(delta, ep, p) {
		    var currentValue = !delta.curve ? delta.start.value + ep * delta.delta : delta.curve(p) * (delta.start.value + p * delta.delta);

		    this._o.props[delta.name] = '' + currentValue + delta.end.unit;
		  };
		  /*
		    Method to calc the current array delta value.
		    @param {Object} Delta
		    @param {Number} Eased progress [0..1].
		    @param {Number} Plain progress [0..1].
		  */


		  Delta.prototype._calcCurrent_array = function _calcCurrent_array(delta, ep, p) {
		    // var arr,
		    var name = delta.name,
		        props = this._o.props,
		        string = '';

		    // to prevent GC bothering with arrays garbage
		    // if ( h.isArray( props[name] ) ) {
		    //   arr = props[name];
		    //   arr.length = 0;
		    // } else { arr = []; }

		    // just optimization to prevent curve
		    // calculations on every array item
		    var proc = delta.curve ? delta.curve(p) : null;

		    for (var i = 0; i < delta.delta.length; i++) {
		      var item = delta.delta[i],
		          dash = !delta.curve ? delta.start[i].value + ep * item.value : proc * (delta.start[i].value + p * item.value);

		      string += '' + dash + item.unit + ' ';
		      // arr.push({
		      //   string: `${dash}${item.unit}`,
		      //   value:  dash,
		      //   unit:   item.unit,
		      // });
		    }
		    props[name] = string;
		  };

		  return Delta;
		}();

		exports.default = Delta;

	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _extends2 = __webpack_require__(27);

		var _extends3 = _interopRequireDefault(_extends2);

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _keys = __webpack_require__(28);

		var _keys2 = _interopRequireDefault(_keys);

		var _timeline = __webpack_require__(9);

		var _timeline2 = _interopRequireDefault(_timeline);

		var _tween = __webpack_require__(8);

		var _tween2 = _interopRequireDefault(_tween);

		var _delta = __webpack_require__(14);

		var _delta2 = _interopRequireDefault(_delta);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		/*
		  This module's target is to parse options object,
		  find deltas in it and send them to `Delta` classes.
		  The `Delta` class is dull - they expect actual parsed deltas
		  and separated tween options, so we should parse them here.
		  The timeline of the module controls the `Delta` modules' tweens.

		  @param {Object} props Object to set deltas result to (pass to the Delta classes).
		  @param {Object} options Object to parse the deltas from.
		  @param {Function} onUpdate onUpdate callback.
		  @param optional {Object} arrayPropertyMap List of properties with truthy
		                                            values which describe properties
		                                            that should be parsed as arrays.
		  @param optional {Object} numberPropertyMap List of properties with truthy
		                                            values which describe properties
		                                            that should be parsed as numbers
		                                            without units.
		*/

		// TODO:
		// - colors with curves change alpha level too
		// const html = new mojs.Html({
		//   el: '#js-el',
		//   x: { 0: 100 },
		//   onUpdate () {
		//     console.log(this._props.originX);
		//   },
		//   originX: { 'white': 'black', curve: 'M0,100 L100, 0' },
		//   customProperties: {
		//     originX: {
		//       type: 'color',
		//       default: 'cyan'
		//     },
		//     draw() { console.log('draw'); }
		//   }
		// });

		var easing = __webpack_require__(22);
		var h = __webpack_require__(19);


		// get tween properties
		var obj = {};
		_tween2.default.prototype._declareDefaults.call(obj);
		var keys = (0, _keys2.default)(obj._defaults);
		for (var i = 0; i < keys.length; i++) {
		  obj._defaults[keys[i]] = 1;
		}
		obj._defaults['timeline'] = 1;
		var TWEEN_PROPERTIES = obj._defaults;

		var Deltas = function () {
		  function Deltas() {
		    var o = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		    (0, _classCallCheck3.default)(this, Deltas);

		    this._o = o;

		    this._shortColors = {
		      transparent: 'rgba(0,0,0,0)',
		      none: 'rgba(0,0,0,0)',
		      aqua: 'rgb(0,255,255)',
		      black: 'rgb(0,0,0)',
		      blue: 'rgb(0,0,255)',
		      fuchsia: 'rgb(255,0,255)',
		      gray: 'rgb(128,128,128)',
		      green: 'rgb(0,128,0)',
		      lime: 'rgb(0,255,0)',
		      maroon: 'rgb(128,0,0)',
		      navy: 'rgb(0,0,128)',
		      olive: 'rgb(128,128,0)',
		      purple: 'rgb(128,0,128)',
		      red: 'rgb(255,0,0)',
		      silver: 'rgb(192,192,192)',
		      teal: 'rgb(0,128,128)',
		      white: 'rgb(255,255,255)',
		      yellow: 'rgb(255,255,0)',
		      orange: 'rgb(255,128,0)'
		    };

		    this._ignoreDeltasMap = { prevChainModule: 1, masterModule: 1 };

		    this._parseDeltas(o.options);
		    this._createDeltas();
		    this._createTimeline(this._mainTweenOptions);
		  }
		  /*
		    Method to call `refresh` on all child `delta` objects.
		    @public
		    @param {Boolean} If before start time (true) or after end time (false).
		  */


		  Deltas.prototype.refresh = function refresh(isBefore) {
		    for (var i = 0; i < this._deltas.length; i++) {
		      this._deltas[i].refresh(isBefore);
		    }
		    return this;
		  };
		  /*
		    Method to call `restore` on all child `delta` objects.
		    @public
		  */


		  Deltas.prototype.restore = function restore() {
		    for (var i = 0; i < this._deltas.length; i++) {
		      this._deltas[i].restore();
		    }
		    return this;
		  };
		  /*
		    Method to create Timeline.
		    @private
		    @param {Object} Timeline options.
		  */


		  Deltas.prototype._createTimeline = function _createTimeline() {
		    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		    // const o = this._o;
		    // opts.timeline = opts.timeline || {};
		    // opts.timeline.callbackOverrides = {
		    //   onUpdate:   o.onUpdate,
		    //   onRefresh:  o.onUpdate
		    // }
		    // send callbacksContext to timeline if set
		    // o.callbacksContext && (opts.timeline.callbacksContext = o.callbacksContext);
		    // opts.timeline
		    this.timeline = new _timeline2.default();
		    this.timeline.add(this._deltas);
		  };
		  /*
		    Method to create Deltas from parsed options.
		    @private
		  */


		  Deltas.prototype._createDeltas = function _createDeltas() {
		    this._deltas = [];

		    // create main delta object
		    this._deltas.push(this._createDelta(this._mainDeltas, this._mainTweenOptions));

		    // create child delta object
		    for (var i = 0; i < this._childDeltas.length; i++) {
		      var delta = this._childDeltas[i];
		      this._deltas.push(this._createDelta([delta.delta], delta.tweenOptions));
		    }
		  };
		  /*
		    Method to create Delta object with passed options.
		    @private
		    @param {Array} Array of deltas.
		    @param {Object} Tween properties.
		    @returns {Object} Delta object
		  */


		  Deltas.prototype._createDelta = function _createDelta(deltas, tweenOptions) {
		    var o = this._o;
		    return new _delta2.default({
		      deltas: deltas, tweenOptions: tweenOptions,
		      props: o.props,
		      isChained: o.isChained,
		      callbacksContext: o.callbacksContext
		    });
		  };
		  /*
		    Method to parse delta objects from options.
		    @private
		    @param {Object} Options object to parse the deltas from.
		  */


		  Deltas.prototype._parseDeltas = function _parseDeltas(obj) {
		    // spilt main animation properties and main tween properties
		    var mainSplit = this._splitTweenOptions(obj);
		    // main animation properties
		    var opts = mainSplit.delta;
		    // main tween properties
		    this._mainTweenOptions = mainSplit.tweenOptions;

		    this._mainDeltas = [];
		    this._childDeltas = [];
		    var keys = (0, _keys2.default)(opts);
		    // loop thru all properties without tween ones
		    for (var i = 0; i < keys.length; i++) {
		      var key = keys[i];
		      // is property is delta - parse it
		      if (this._isDelta(opts[key]) && !this._ignoreDeltasMap[key]) {
		        var delta = this._splitAndParseDelta(key, opts[key]);
		        // if parsed object has no tween values - it's delta of the main object
		        if (!delta.tweenOptions) {
		          this._mainDeltas.push(delta.delta);
		        }
		        // otherwise it is distinct delta object
		        else {
		            this._childDeltas.push(delta);
		          }
		      }
		    }
		  };
		  /*
		    Method to split tween values and parse single delta record.
		    @private
		    @param {String} Property name.
		    @param {Object} Raw delta object.
		    @returns {Object} Split object.
		                @param {Object} tweenOptions Tween properties.
		                @param {Object} delta Parsed delta.
		  */


		  Deltas.prototype._splitAndParseDelta = function _splitAndParseDelta(name, object) {
		    var split = this._splitTweenOptions(object);
		    // parse delta in the object
		    split.delta = this._parseDelta(name, split.delta);
		    return split;
		  };
		  /*
		    Method to parse delta by delegating the variables to _parse*Delta methods.
		    @private
		    @param {String} Property name.
		    @param {Object} Raw delta object.
		    @param {Number} Module index.
		  */


		  Deltas.prototype._parseDelta = function _parseDelta(name, object, index) {
		    // if name is in _o.customProps - parse it regarding the type
		    return this._o.customProps && this._o.customProps[name] != null ? this._parseDeltaByCustom(name, object, index) : this._parseDeltaByGuess(name, object, index);
		  };
		  /**
		    Method to parse delta by taking the type from the customProps object.
		    @private
		    @param {String} Property name.
		    @param {Object} Raw delta object.
		    @param {Number} Module index.
		  */


		  Deltas.prototype._parseDeltaByCustom = function _parseDeltaByCustom(name, object, index) {
		    return this._parseNumberDelta(name, object, index);
		    // const customRecord = this._o.customProps[name];
		    // switch ( customRecord.type.toLowerCase() ) {
		    //   case 'color':  { return this._parseColorDelta( name, object ); }
		    //   case 'array':  { return this._parseArrayDelta( name, object ); }
		    //   case 'number': { return this._parseNumberDelta( name, object, index ); }
		    //   case 'unit':   { return this._parseUnitDelta( name, object, index ); }
		    // }
		  };
		  /**
		    Method to parse delta by reasoning about it's value.
		    @private
		    @param {String} Property name.
		    @param {Object} Raw delta object.
		    @param {Number} Module index.
		  */


		  Deltas.prototype._parseDeltaByGuess = function _parseDeltaByGuess(name, object, index) {
		    var _preparseDelta2 = this._preparseDelta(object);

		    var start = _preparseDelta2.start;

		    var o = this._o;

		    // color values
		    if (isNaN(parseFloat(start)) && !start.match(/rand\(/) && !start.match(/stagger\(/)) {
		      return this._parseColorDelta(name, object);
		      // array values
		    } else if (o.arrayPropertyMap && o.arrayPropertyMap[name]) {
		        return this._parseArrayDelta(name, object);
		        // unit or number values
		      } else {
		          return o.numberPropertyMap && o.numberPropertyMap[name] ?
		          // if the property is in the number property map - parse it like number
		          this._parseNumberDelta(name, object, index)
		          // otherwise - like number with units
		          : this._parseUnitDelta(name, object, index);
		        }
		  };
		  /*
		    Method to separate tween options from delta properties.
		    @param {Object} Object for separation.
		    @returns {Object} Object that contains 2 objects
		                        - one delta options
		                        - one tween options ( could be empty if no tween opts )
		  */


		  Deltas.prototype._splitTweenOptions = function _splitTweenOptions(delta) {
		    delta = (0, _extends3.default)({}, delta);

		    var keys = (0, _keys2.default)(delta),
		        tweenOptions = {};
		    var isTween = null;

		    for (var i = 0; i < keys.length; i++) {
		      var key = keys[i];
		      if (TWEEN_PROPERTIES[key]) {
		        if (delta[key] != null) {
		          tweenOptions[key] = delta[key];
		          isTween = true;
		        }
		        delete delta[key];
		      }
		    }
		    return {
		      delta: delta,
		      tweenOptions: isTween ? tweenOptions : undefined
		    };
		  };
		  /*
		    Method to check if the property is delta property.
		    @private
		    @param {Any} Parameter value to check.
		    @returns {Boolean}
		  */


		  Deltas.prototype._isDelta = function _isDelta(optionsValue) {
		    var isObject = h.isObject(optionsValue);
		    isObject = isObject && !optionsValue.unit;
		    return !(!isObject || h.isArray(optionsValue) || h.isDOM(optionsValue));
		  };
		  /*
		    Method to parse color delta values.
		    @private
		    @param {String} Name of the property.
		    @param {Any} Property value.
		    @returns {Object} Parsed delta.
		  */


		  Deltas.prototype._parseColorDelta = function _parseColorDelta(key, value) {
		    if (key === 'strokeLinecap') {
		      h.warn('Sorry, stroke-linecap property is not animatable yet, using the start(#{start}) value instead', value);
		      return {};
		    }
		    var preParse = this._preparseDelta(value);

		    var startColorObj = this._makeColorObj(preParse.start),
		        endColorObj = this._makeColorObj(preParse.end);

		    var delta = {
		      type: 'color',
		      name: key,
		      start: startColorObj,
		      end: endColorObj,
		      curve: preParse.curve,
		      delta: {
		        r: endColorObj.r - startColorObj.r,
		        g: endColorObj.g - startColorObj.g,
		        b: endColorObj.b - startColorObj.b,
		        a: endColorObj.a - startColorObj.a
		      }
		    };
		    return delta;
		  };
		  /*
		    Method to parse array delta values.
		    @private
		    @param {String} Name of the property.
		    @param {Any} Property value.
		    @returns {Object} Parsed delta.
		  */


		  Deltas.prototype._parseArrayDelta = function _parseArrayDelta(key, value) {
		    var preParse = this._preparseDelta(value);

		    var startArr = this._strToArr(preParse.start),
		        endArr = this._strToArr(preParse.end);

		    h.normDashArrays(startArr, endArr);

		    for (var i = 0; i < startArr.length; i++) {
		      var end = endArr[i];
		      h.mergeUnits(startArr[i], end, key);
		    }

		    var delta = {
		      type: 'array',
		      name: key,
		      start: startArr,
		      end: endArr,
		      delta: h.calcArrDelta(startArr, endArr),
		      curve: preParse.curve
		    };

		    return delta;
		  };
		  /*
		    Method to parse numeric delta values with units.
		    @private
		    @param {String} Name of the property.
		    @param {Any} Property value.
		    @param {Number} Index of the module.
		    @returns {Object} Parsed delta.
		  */


		  Deltas.prototype._parseUnitDelta = function _parseUnitDelta(key, value, index) {
		    var preParse = this._preparseDelta(value);

		    var end = h.parseUnit(h.parseStringOption(preParse.end, index)),
		        start = h.parseUnit(h.parseStringOption(preParse.start, index));

		    h.mergeUnits(start, end, key);
		    var delta = {
		      type: 'unit',
		      name: key,
		      start: start,
		      end: end,
		      delta: end.value - start.value,
		      curve: preParse.curve
		    };
		    return delta;
		  };
		  /*
		    Method to parse numeric delta values without units.
		    @private
		    @param {String} Name of the property.
		    @param {Any} Property value.
		    @param {Number} Index of the module.
		    @returns {Object} Parsed delta.
		  */


		  Deltas.prototype._parseNumberDelta = function _parseNumberDelta(key, value, index) {
		    var preParse = this._preparseDelta(value);

		    var end = parseFloat(h.parseStringOption(preParse.end, index)),
		        start = parseFloat(h.parseStringOption(preParse.start, index));

		    var delta = {
		      type: 'number',
		      name: key,
		      start: start,
		      end: end,
		      delta: end - start,
		      curve: preParse.curve
		    };

		    return delta;
		  };
		  /*
		    Method to extract `curve` and `start`/`end` values.
		    @private
		    @param {Object} Delta object.
		    @returns {Object} Preparsed delta.
		              @property {String} Start value.
		              @property {String, Number} End value.
		  */


		  Deltas.prototype._preparseDelta = function _preparseDelta(value) {
		    // clone value object
		    value = (0, _extends3.default)({}, value);
		    // parse curve if exist
		    var curve = value.curve;
		    if (curve != null) {
		      curve = easing.parseEasing(curve);
		      curve._parent = this;
		    }
		    delete value.curve;
		    // parse start and end values
		    var start = (0, _keys2.default)(value)[0],
		        end = value[start];

		    return { start: start, end: end, curve: curve };
		  };
		  /*
		    Method to parse color into usable object.
		    @private
		    @param {String} Color string.
		    @returns {Object} Parsed color value.
		  */


		  Deltas.prototype._makeColorObj = function _makeColorObj(color) {
		    // HEX
		    var colorObj = {};
		    if (color[0] === '#') {
		      var result = /^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(color);
		      if (result) {
		        var r = result[1].length === 2 ? result[1] : result[1] + result[1],
		            g = result[2].length === 2 ? result[2] : result[2] + result[2],
		            b = result[3].length === 2 ? result[3] : result[3] + result[3];

		        colorObj = {
		          r: parseInt(r, 16), g: parseInt(g, 16), b: parseInt(b, 16), a: 1
		        };
		      }
		    }

		    // not HEX
		    // shorthand color and rgb()
		    if (color[0] !== '#') {
		      var isRgb = color[0] === 'r' && color[1] === 'g' && color[2] === 'b';
		      var rgbColor = undefined;
		      // rgb color
		      if (isRgb) {
		        rgbColor = color;
		      };
		      // shorthand color name
		      if (!isRgb) {
		        if (!this._shortColors[color]) {
		          h.div.style.color = color;
		          rgbColor = h.computedStyle(h.div).color;
		        } else {
		          rgbColor = this._shortColors[color];
		        }
		      }

		      var regexString1 = '^rgba?\\((\\d{1,3}),\\s?(\\d{1,3}),',
		          regexString2 = '\\s?(\\d{1,3}),?\\s?(\\d{1}|0?\\.\\d{1,})?\\)$',
		          result = new RegExp(regexString1 + regexString2, 'gi').exec(rgbColor),
		          alpha = parseFloat(result[4] || 1);

		      if (result) {
		        colorObj = {
		          r: parseInt(result[1], 10),
		          g: parseInt(result[2], 10),
		          b: parseInt(result[3], 10),
		          a: alpha != null && !isNaN(alpha) ? alpha : 1
		        };
		      }
		    }

		    return colorObj;
		  };
		  /*
		    Method to parse string into array.
		    @private
		    @param {String, Number} String or number to parse.
		    @returns {Array} Parsed array.
		  */


		  Deltas.prototype._strToArr = function _strToArr(string) {
		    var arr = [];
		    // plain number
		    if (typeof string === 'number' && !isNaN(string)) {
		      arr.push(h.parseUnit(string));
		      return arr;
		    }
		    // string array
		    string.trim().split(/\s+/gim).forEach(function (str) {
		      arr.push(h.parseUnit(h.parseIfRand(str)));
		    });
		    return arr;
		  };

		  return Deltas;
		}();

		exports.default = Deltas;

	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _typeof2 = __webpack_require__(18);

		var _typeof3 = _interopRequireDefault(_typeof2);

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _h = __webpack_require__(19);

		var _h2 = _interopRequireDefault(_h);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		/*
		  Base class for module. Extends and parses defaults.
		*/

		var Module = function () {
		  function Module() {
		    var o = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		    (0, _classCallCheck3.default)(this, Module);

		    // this._isIt = o.isIt;
		    // delete o.isIt;
		    this._o = o;
		    this._index = this._o.index || 0;
		    // map of props that should be
		    // parsed to arrays of values
		    this._arrayPropertyMap = {
		      strokeDashoffset: 1,
		      strokeDasharray: 1,
		      origin: 1
		    };

		    this._skipPropsDelta = {
		      timeline: 1,
		      prevChainModule: 1,
		      callbacksContext: 1
		    };

		    this._declareDefaults();
		    this._extendDefaults();

		    this._vars();
		    this._render();
		  }
		  /*
		    Method to declare defaults.
		    @private
		  */


		  Module.prototype._declareDefaults = function _declareDefaults() {
		    this._defaults = {};
		  };
		  /*
		    Method to declare module's variables.
		    @private
		  */


		  Module.prototype._vars = function _vars() {
		    this._progress = 0;
		    this._strokeDasharrayBuffer = [];
		  };
		  /*
		    Method to render on initialization.
		    @private
		  */


		  Module.prototype._render = function _render() {};
		  /*
		    Method to set property on the module.
		    @private
		    @param {String, Object} Name of the property to set
		                            or object with properties to set.
		    @param {Any} Value for the property to set. Could be
		                  undefined if the first param is object.
		  */


		  Module.prototype._setProp = function _setProp(attr, value) {
		    if ((typeof attr === 'undefined' ? 'undefined' : (0, _typeof3.default)(attr)) === 'object') {
		      for (var key in attr) {
		        this._assignProp(key, attr[key]);
		      }
		    } else {
		      this._assignProp(attr, value);
		    }
		  };
		  /*
		    Method to assign single property's value.
		    @private
		    @param {String} Property name.
		    @param {Any}    Property value.
		  */


		  Module.prototype._assignProp = function _assignProp(key, value) {
		    this._props[key] = value;
		  };
		  /*
		    Method to show element.
		    @private
		  */


		  Module.prototype._show = function _show() {
		    var p = this._props;
		    if (!this.el) {
		      return;
		    }

		    if (p.isSoftHide) {
		      // this.el.style.opacity = p.opacity;
		      this._showByTransform();
		    } else {
		      this.el.style.display = 'block';
		    }

		    this._isShown = true;
		  };
		  /*
		    Method to hide element.
		    @private
		  */


		  Module.prototype._hide = function _hide() {
		    if (!this.el) {
		      return;
		    }

		    if (this._props.isSoftHide) {
		      // this.el.style.opacity = 0;
		      _h2.default.setPrefixedStyle(this.el, 'transform', 'scale(0)');
		    } else {
		      this.el.style.display = 'none';
		    }

		    this._isShown = false;
		  };
		  /*
		    Method to show element by applying transform back to normal.
		    @private
		  */


		  Module.prototype._showByTransform = function _showByTransform() {};
		  /*
		    Method to parse option string.
		    Searches for stagger and rand values and parses them.
		    Leaves the value unattended otherwise.
		    @param {Any} Option value to parse.
		    @returns {Number} Parsed options value.
		  */


		  Module.prototype._parseOptionString = function _parseOptionString(value) {
		    if (typeof value === 'string') {
		      if (value.match(/stagger/)) {
		        value = _h2.default.parseStagger(value, this._index);
		      }
		    }
		    if (typeof value === 'string') {
		      if (value.match(/rand/)) {
		        value = _h2.default.parseRand(value);
		      }
		    }
		    return value;
		  };
		  /*
		    Method to parse postion option.
		    @param {String} Property name.
		    @param {Any} Property Value.
		    @returns {String} Parsed options value.
		  */


		  Module.prototype._parsePositionOption = function _parsePositionOption(key, value) {
		    if (_h2.default.unitOptionMap[key]) {
		      value = _h2.default.parseUnit(value).string;
		    }
		    return value;
		  };
		  /*
		    Method to parse strokeDash.. option.
		    @param {String} Property name.
		    @param {Any}    Property value.
		    @returns {String} Parsed options value.
		  */


		  Module.prototype._parseStrokeDashOption = function _parseStrokeDashOption(key, value) {
		    var result = value;
		    // parse numeric/percent values for strokeDash.. properties
		    if (this._arrayPropertyMap[key]) {
		      var result = [];
		      switch (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) {
		        case 'number':
		          result.push(_h2.default.parseUnit(value));
		          break;
		        case 'string':
		          var array = value.split(' ');
		          for (var i = 0; i < array.length; i++) {
		            result.push(_h2.default.parseUnit(array[i]));
		          }
		          break;
		      }
		    }
		    return result;
		  };
		  /*
		    Method to check if the property is delta property.
		    @private
		    @param {Any} Parameter value to check.
		    @returns {Boolean}
		  */


		  Module.prototype._isDelta = function _isDelta(optionsValue) {
		    var isObject = _h2.default.isObject(optionsValue);
		    isObject = isObject && !optionsValue.unit;
		    return !(!isObject || _h2.default.isArray(optionsValue) || _h2.default.isDOM(optionsValue));
		  };
		  /*
		    Method to get delta from property and set
		    the property's start value to the props object.
		    @private
		    @param {String} Key name to get delta for.
		    @param {Object} Option value to get the delta for.
		  */


		  Module.prototype._getDelta = function _getDelta(key, optionsValue) {
		    var delta;
		    if ((key === 'left' || key === 'top') && !this._o.ctx) {
		      _h2.default.warn('Consider to animate x/y properties instead of left/top,\n        as it would be much more performant', optionsValue);
		    }
		    // skip delta calculation for a property if it is listed
		    // in skipPropsDelta object
		    if (this._skipPropsDelta && this._skipPropsDelta[key]) {
		      return;
		    }
		    // get delta
		    delta = _h2.default.parseDelta(key, optionsValue, this._index);
		    // if successfully parsed - save it
		    if (delta.type != null) {
		      this._deltas[key] = delta;
		    }

		    var deltaEnd = (0, _typeof3.default)(delta.end) === 'object' ? delta.end.value === 0 ? 0 : delta.end.string : delta.end;
		    // set props to end value of the delta
		    // 0 should be 0 regardless units
		    this._props[key] = deltaEnd;
		  };
		  /*
		    Method to copy `_o` options to `_props` object
		    with fallback to `_defaults`.
		    @private
		  */


		  Module.prototype._extendDefaults = function _extendDefaults() {
		    this._props = {};
		    this._deltas = {};
		    for (var key in this._defaults) {
		      // skip property if it is listed in _skipProps
		      // if (this._skipProps && this._skipProps[key]) { continue; }
		      // copy the properties to the _o object
		      var value = this._o[key] != null ? this._o[key] : this._defaults[key];
		      // parse option
		      this._parseOption(key, value);
		    }
		  };
		  /*
		    Method to tune new oprions to _o and _props object.
		    @private
		    @param {Object} Options object to tune to.
		  */


		  Module.prototype._tuneNewOptions = function _tuneNewOptions(o) {
		    // hide the module before tuning it's options
		    // cuz the user could see the change
		    this._hide();
		    for (var key in o) {
		      // skip property if it is listed in _skipProps
		      // if (this._skipProps && this._skipProps[key]) { continue; }
		      // copy the properties to the _o object
		      // delete the key from deltas
		      o && delete this._deltas[key];
		      // rewrite _o record
		      this._o[key] = o[key];
		      // save the options to _props
		      this._parseOption(key, o[key]);
		    }
		  };
		  /*
		    Method to parse option value.
		    @private
		    @param {String} Option name.
		    @param {Any} Option value.
		  */


		  Module.prototype._parseOption = function _parseOption(name, value) {
		    // if delta property
		    if (this._isDelta(value) && !this._skipPropsDelta[name]) {
		      this._getDelta(name, value);
		      var deltaEnd = _h2.default.getDeltaEnd(value);
		      return this._assignProp(name, this._parseProperty(name, deltaEnd));
		    }

		    this._assignProp(name, this._parseProperty(name, value));
		  };
		  /*
		    Method to parse postion and string props.
		    @private
		    @param {String} Property name.
		    @param {Any}    Property value.
		    @returns {Any}  Parsed property value.
		  */


		  Module.prototype._parsePreArrayProperty = function _parsePreArrayProperty(name, value) {
		    // parse stagger and rand values
		    value = this._parseOptionString(value);
		    // parse units for position properties
		    return this._parsePositionOption(name, value);
		  };
		  /*
		    Method to parse property value.
		    @private
		    @param {String} Property name.
		    @param {Any}    Property value.
		    @returns {Any}  Parsed property value.
		  */


		  Module.prototype._parseProperty = function _parseProperty(name, value) {
		    // parse `HTML` element in `parent` option
		    if (name === 'parent') {
		      return _h2.default.parseEl(value);
		    }
		    // parse `stagger`, `rand` and `position`
		    value = this._parsePreArrayProperty(name, value);
		    // parse numeric/percent values for strokeDash.. properties
		    return this._parseStrokeDashOption(name, value);
		  };
		  /*
		    Method to parse values inside ∆.
		    @private
		    @param {String} Key name.
		    @param {Object} Delta.
		    @returns {Object} Delta with parsed parameters.
		  */


		  Module.prototype._parseDeltaValues = function _parseDeltaValues(name, delta) {
		    // return h.parseDelta( name, delta, this._index );

		    var d = {};
		    for (var key in delta) {
		      var value = delta[key];

		      // delete delta[key];
		      // add parsed properties
		      var newEnd = this._parsePreArrayProperty(name, value);
		      d[this._parsePreArrayProperty(name, key)] = newEnd;
		    }
		    return d;
		  };
		  /*
		    Method to parse delta and nondelta properties.
		    @private
		    @param {String} Property name.
		    @param {Any}    Property value.
		    @returns {Any}  Parsed property value.
		  */


		  Module.prototype._preparsePropValue = function _preparsePropValue(key, value) {
		    return this._isDelta(value) ? this._parseDeltaValues(key, value) : this._parsePreArrayProperty(key, value);
		  };
		  /*
		    Method to calculate current progress of the deltas.
		    @private
		    @param {Number} Eased progress to calculate - [0..1].
		    @param {Number} Progress to calculate - [0..1].
		  */


		  Module.prototype._calcCurrentProps = function _calcCurrentProps(easedProgress, p) {

		    for (var key in this._deltas) {

		      var value = this._deltas[key];

		      // get eased progress from delta easing if defined and not curve
		      var isCurve = !!value.curve;
		      var ep = value.easing != null && !isCurve ? value.easing(p) : easedProgress;

		      if (value.type === 'array') {
		        var arr;
		        // if prop property is array - reuse it else - create an array
		        if (_h2.default.isArray(this._props[key])) {
		          arr = this._props[key];
		          arr.length = 0;
		        } else {
		          arr = [];
		        }

		        // just optimization to prevent curve
		        // calculations on every array item
		        var proc = isCurve ? value.curve(p) : null;

		        for (var i = 0; i < value.delta.length; i++) {
		          var item = value.delta[i],
		              dash = !isCurve ? value.start[i].value + ep * item.value : proc * (value.start[i].value + p * item.value);
		          arr.push({
		            string: '' + dash + item.unit,
		            value: dash,
		            unit: item.unit
		          });
		        }

		        this._props[key] = arr;
		      } else if (value.type === 'number') {
		        this._props[key] = !isCurve ? value.start + ep * value.delta : value.curve(p) * (value.start + p * value.delta);
		      } else if (value.type === 'unit') {
		        var currentValue = !isCurve ? value.start.value + ep * value.delta : value.curve(p) * (value.start.value + p * value.delta);

		        this._props[key] = '' + currentValue + value.end.unit;
		      } else if (value.type === 'color') {
		        var r, g, b, a;
		        if (!isCurve) {
		          r = parseInt(value.start.r + ep * value.delta.r, 10);
		          g = parseInt(value.start.g + ep * value.delta.g, 10);
		          b = parseInt(value.start.b + ep * value.delta.b, 10);
		          a = parseFloat(value.start.a + ep * value.delta.a);
		        } else {
		          var cp = value.curve(p);
		          r = parseInt(cp * (value.start.r + p * value.delta.r), 10);
		          g = parseInt(cp * (value.start.g + p * value.delta.g), 10);
		          b = parseInt(cp * (value.start.b + p * value.delta.b), 10);
		          a = parseFloat(cp * (value.start.a + p * value.delta.a));
		        }
		        this._props[key] = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
		      }
		    }
		  };
		  /*
		    Method to calculate current progress and probably draw it in children.
		    @private
		    @param {Number} Eased progress to set - [0..1].
		    @param {Number} Progress to set - [0..1].
		  */


		  Module.prototype._setProgress = function _setProgress(easedProgress, progress) {
		    this._progress = easedProgress;
		    this._calcCurrentProps(easedProgress, progress);
		  };

		  return Module;
		}();

		exports.default = Module;

	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = function(module) {
			if(!module.webpackPolyfill) {
				module.deprecate = function() {};
				module.paths = [];
				// module.parent = undefined by default
				module.children = [];
				module.webpackPolyfill = 1;
			}
			return module;
		}


	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		var _typeof = typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol ? "symbol" : typeof obj; };

		exports.__esModule = true;

		var _iterator = __webpack_require__(32);

		var _iterator2 = _interopRequireDefault(_iterator);

		var _symbol = __webpack_require__(33);

		var _symbol2 = _interopRequireDefault(_symbol);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
		  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
		} : function (obj) {
		  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
		};

	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		var Helpers, h;

		Helpers = (function() {
		  Helpers.prototype.NS = 'http://www.w3.org/2000/svg';

		  Helpers.prototype.logBadgeCss = 'background:#3A0839;color:#FF512F;border-radius:5px; padding: 1px 5px 2px; border: 1px solid #FF512F;';

		  Helpers.prototype.shortColors = {
		    transparent: 'rgba(0,0,0,0)',
		    none: 'rgba(0,0,0,0)',
		    aqua: 'rgb(0,255,255)',
		    black: 'rgb(0,0,0)',
		    blue: 'rgb(0,0,255)',
		    fuchsia: 'rgb(255,0,255)',
		    gray: 'rgb(128,128,128)',
		    green: 'rgb(0,128,0)',
		    lime: 'rgb(0,255,0)',
		    maroon: 'rgb(128,0,0)',
		    navy: 'rgb(0,0,128)',
		    olive: 'rgb(128,128,0)',
		    purple: 'rgb(128,0,128)',
		    red: 'rgb(255,0,0)',
		    silver: 'rgb(192,192,192)',
		    teal: 'rgb(0,128,128)',
		    white: 'rgb(255,255,255)',
		    yellow: 'rgb(255,255,0)',
		    orange: 'rgb(255,128,0)'
		  };

		  Helpers.prototype.chainOptionMap = {};

		  Helpers.prototype.callbacksMap = {
		    onRefresh: 1,
		    onStart: 1,
		    onComplete: 1,
		    onFirstUpdate: 1,
		    onUpdate: 1,
		    onProgress: 1,
		    onRepeatStart: 1,
		    onRepeatComplete: 1,
		    onPlaybackStart: 1,
		    onPlaybackPause: 1,
		    onPlaybackStop: 1,
		    onPlaybackComplete: 1
		  };

		  Helpers.prototype.tweenOptionMap = {
		    duration: 1,
		    delay: 1,
		    speed: 1,
		    repeat: 1,
		    easing: 1,
		    backwardEasing: 1,
		    isYoyo: 1,
		    shiftTime: 1,
		    isReversed: 1,
		    callbacksContext: 1
		  };

		  Helpers.prototype.unitOptionMap = {
		    left: 1,
		    top: 1,
		    x: 1,
		    y: 1,
		    rx: 1,
		    ry: 1
		  };

		  Helpers.prototype.RAD_TO_DEG = 180 / Math.PI;

		  function Helpers() {
		    this.vars();
		  }

		  Helpers.prototype.vars = function() {
		    var ua;
		    this.prefix = this.getPrefix();
		    this.getRemBase();
		    this.isFF = this.prefix.lowercase === 'moz';
		    this.isIE = this.prefix.lowercase === 'ms';
		    ua = navigator.userAgent;
		    this.isOldOpera = ua.match(/presto/gim);
		    this.isSafari = ua.indexOf('Safari') > -1;
		    this.isChrome = ua.indexOf('Chrome') > -1;
		    this.isOpera = ua.toLowerCase().indexOf("op") > -1;
		    this.isChrome && this.isSafari && (this.isSafari = false);
		    (ua.match(/PhantomJS/gim)) && (this.isSafari = false);
		    this.isChrome && this.isOpera && (this.isChrome = false);
		    this.is3d = this.checkIf3d();
		    this.uniqIDs = -1;
		    this.div = document.createElement('div');
		    document.body.appendChild(this.div);
		    return this.defaultStyles = this.computedStyle(this.div);
		  };

		  Helpers.prototype.cloneObj = function(obj, exclude) {
		    var i, key, keys, newObj;
		    keys = Object.keys(obj);
		    newObj = {};
		    i = keys.length;
		    while (i--) {
		      key = keys[i];
		      if (exclude != null) {
		        if (!exclude[key]) {
		          newObj[key] = obj[key];
		        }
		      } else {
		        newObj[key] = obj[key];
		      }
		    }
		    return newObj;
		  };

		  Helpers.prototype.extend = function(objTo, objFrom) {
		    var key, value;
		    for (key in objFrom) {
		      value = objFrom[key];
		      if (objTo[key] == null) {
		        objTo[key] = objFrom[key];
		      }
		    }
		    return objTo;
		  };

		  Helpers.prototype.getRemBase = function() {
		    var html, style;
		    html = document.querySelector('html');
		    style = getComputedStyle(html);
		    return this.remBase = parseFloat(style.fontSize);
		  };

		  Helpers.prototype.clamp = function(value, min, max) {
		    if (value < min) {
		      return min;
		    } else if (value > max) {
		      return max;
		    } else {
		      return value;
		    }
		  };

		  Helpers.prototype.setPrefixedStyle = function(el, name, value) {
		    (name === 'transform') && (el.style["" + this.prefix.css + name] = value);
		    return el.style[name] = value;
		  };

		  Helpers.prototype.style = function(el, name, value) {
		    var key, keys, len, results;
		    if (typeof name === 'object') {
		      keys = Object.keys(name);
		      len = keys.length;
		      results = [];
		      while (len--) {
		        key = keys[len];
		        value = name[key];
		        results.push(this.setPrefixedStyle(el, key, value));
		      }
		      return results;
		    } else {
		      return this.setPrefixedStyle(el, name, value);
		    }
		  };

		  Helpers.prototype.prepareForLog = function(args) {
		    args = Array.prototype.slice.apply(args);
		    args.unshift('::');
		    args.unshift(this.logBadgeCss);
		    args.unshift('%cmo·js%c');
		    return args;
		  };

		  Helpers.prototype.log = function() {
		    if (mojs.isDebug === false) {
		      return;
		    }
		    return console.log.apply(console, this.prepareForLog(arguments));
		  };

		  Helpers.prototype.warn = function() {
		    if (mojs.isDebug === false) {
		      return;
		    }
		    return console.warn.apply(console, this.prepareForLog(arguments));
		  };

		  Helpers.prototype.error = function() {
		    if (mojs.isDebug === false) {
		      return;
		    }
		    return console.error.apply(console, this.prepareForLog(arguments));
		  };

		  Helpers.prototype.parseUnit = function(value) {
		    var amount, isStrict, ref, regex, returnVal, unit;
		    if (typeof value === 'number') {
		      return returnVal = {
		        unit: 'px',
		        isStrict: false,
		        value: value,
		        string: value === 0 ? "" + value : value + "px"
		      };
		    } else if (typeof value === 'string') {
		      regex = /px|%|rem|em|ex|cm|ch|mm|in|pt|pc|vh|vw|vmin|deg/gim;
		      unit = (ref = value.match(regex)) != null ? ref[0] : void 0;
		      isStrict = true;
		      if (!unit) {
		        unit = 'px';
		        isStrict = false;
		      }
		      amount = parseFloat(value);
		      return returnVal = {
		        unit: unit,
		        isStrict: isStrict,
		        value: amount,
		        string: amount === 0 ? "" + amount : "" + amount + unit
		      };
		    }
		    return value;
		  };

		  Helpers.prototype.bind = function(func, context) {
		    var bindArgs, wrapper;
		    wrapper = function() {
		      var args, unshiftArgs;
		      args = Array.prototype.slice.call(arguments);
		      unshiftArgs = bindArgs.concat(args);
		      return func.apply(context, unshiftArgs);
		    };
		    bindArgs = Array.prototype.slice.call(arguments, 2);
		    return wrapper;
		  };

		  Helpers.prototype.getRadialPoint = function(o) {
		    var point, radAngle, radiusX, radiusY;
		    if (o == null) {
		      o = {};
		    }
		    radAngle = (o.angle - 90) * 0.017453292519943295;
		    radiusX = o.radiusX != null ? o.radiusX : o.radius;
		    radiusY = o.radiusY != null ? o.radiusY : o.radius;
		    return point = {
		      x: o.center.x + (Math.cos(radAngle) * radiusX),
		      y: o.center.y + (Math.sin(radAngle) * radiusY)
		    };
		  };

		  Helpers.prototype.getPrefix = function() {
		    var dom, pre, styles, v;
		    styles = window.getComputedStyle(document.documentElement, "");
		    v = Array.prototype.slice.call(styles).join("").match(/-(moz|webkit|ms)-/);
		    pre = (v || (styles.OLink === "" && ["", "o"]))[1];
		    dom = "WebKit|Moz|MS|O".match(new RegExp("(" + pre + ")", "i"))[1];
		    return {
		      dom: dom,
		      lowercase: pre,
		      css: "-" + pre + "-",
		      js: pre[0].toUpperCase() + pre.substr(1)
		    };
		  };

		  Helpers.prototype.strToArr = function(string) {
		    var arr;
		    arr = [];
		    if (typeof string === 'number' && !isNaN(string)) {
		      arr.push(this.parseUnit(string));
		      return arr;
		    }
		    string.trim().split(/\s+/gim).forEach((function(_this) {
		      return function(str) {
		        return arr.push(_this.parseUnit(_this.parseIfRand(str)));
		      };
		    })(this));
		    return arr;
		  };

		  Helpers.prototype.calcArrDelta = function(arr1, arr2) {
		    var delta, i, j, len1, num;
		    delta = [];
		    for (i = j = 0, len1 = arr1.length; j < len1; i = ++j) {
		      num = arr1[i];
		      delta[i] = this.parseUnit("" + (arr2[i].value - arr1[i].value) + arr2[i].unit);
		    }
		    return delta;
		  };

		  Helpers.prototype.isArray = function(variable) {
		    return variable instanceof Array;
		  };

		  Helpers.prototype.normDashArrays = function(arr1, arr2) {
		    var arr1Len, arr2Len, currItem, i, j, k, lenDiff, ref, ref1, startI;
		    arr1Len = arr1.length;
		    arr2Len = arr2.length;
		    if (arr1Len > arr2Len) {
		      lenDiff = arr1Len - arr2Len;
		      startI = arr2.length;
		      for (i = j = 0, ref = lenDiff; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
		        currItem = i + startI;
		        arr2.push(this.parseUnit("0" + arr1[currItem].unit));
		      }
		    } else if (arr2Len > arr1Len) {
		      lenDiff = arr2Len - arr1Len;
		      startI = arr1.length;
		      for (i = k = 0, ref1 = lenDiff; 0 <= ref1 ? k < ref1 : k > ref1; i = 0 <= ref1 ? ++k : --k) {
		        currItem = i + startI;
		        arr1.push(this.parseUnit("0" + arr2[currItem].unit));
		      }
		    }
		    return [arr1, arr2];
		  };

		  Helpers.prototype.makeColorObj = function(color) {
		    var alpha, b, colorObj, g, isRgb, r, regexString1, regexString2, result, rgbColor;
		    if (color[0] === '#') {
		      result = /^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(color);
		      colorObj = {};
		      if (result) {
		        r = result[1].length === 2 ? result[1] : result[1] + result[1];
		        g = result[2].length === 2 ? result[2] : result[2] + result[2];
		        b = result[3].length === 2 ? result[3] : result[3] + result[3];
		        colorObj = {
		          r: parseInt(r, 16),
		          g: parseInt(g, 16),
		          b: parseInt(b, 16),
		          a: 1
		        };
		      }
		    }
		    if (color[0] !== '#') {
		      isRgb = color[0] === 'r' && color[1] === 'g' && color[2] === 'b';
		      if (isRgb) {
		        rgbColor = color;
		      }
		      if (!isRgb) {
		        rgbColor = !this.shortColors[color] ? (this.div.style.color = color, this.computedStyle(this.div).color) : this.shortColors[color];
		      }
		      regexString1 = '^rgba?\\((\\d{1,3}),\\s?(\\d{1,3}),';
		      regexString2 = '\\s?(\\d{1,3}),?\\s?(\\d{1}|0?\\.\\d{1,})?\\)$';
		      result = new RegExp(regexString1 + regexString2, 'gi').exec(rgbColor);
		      colorObj = {};
		      alpha = parseFloat(result[4] || 1);
		      if (result) {
		        colorObj = {
		          r: parseInt(result[1], 10),
		          g: parseInt(result[2], 10),
		          b: parseInt(result[3], 10),
		          a: (alpha != null) && !isNaN(alpha) ? alpha : 1
		        };
		      }
		    }
		    return colorObj;
		  };

		  Helpers.prototype.computedStyle = function(el) {
		    return getComputedStyle(el);
		  };

		  Helpers.prototype.capitalize = function(str) {
		    if (typeof str !== 'string') {
		      throw Error('String expected - nothing to capitalize');
		    }
		    return str.charAt(0).toUpperCase() + str.substring(1);
		  };

		  Helpers.prototype.parseRand = function(string) {
		    var rand, randArr, units;
		    randArr = string.split(/rand\(|\,|\)/);
		    units = this.parseUnit(randArr[2]);
		    rand = this.rand(parseFloat(randArr[1]), parseFloat(randArr[2]));
		    if (units.unit && randArr[2].match(units.unit)) {
		      return rand + units.unit;
		    } else {
		      return rand;
		    }
		  };

		  Helpers.prototype.parseStagger = function(string, index) {
		    var base, number, splittedValue, unit, unitValue, value;
		    value = string.split(/stagger\(|\)$/)[1].toLowerCase();
		    splittedValue = value.split(/(rand\(.*?\)|[^\(,\s]+)(?=\s*,|\s*$)/gim);
		    value = splittedValue.length > 3 ? (base = this.parseUnit(this.parseIfRand(splittedValue[1])), splittedValue[3]) : (base = this.parseUnit(0), splittedValue[1]);
		    value = this.parseIfRand(value);
		    unitValue = this.parseUnit(value);
		    number = index * unitValue.value + base.value;
		    unit = base.isStrict ? base.unit : unitValue.isStrict ? unitValue.unit : '';
		    if (unit) {
		      return "" + number + unit;
		    } else {
		      return number;
		    }
		  };

		  Helpers.prototype.parseIfStagger = function(value, i) {
		    if (!(typeof value === 'string' && value.match(/stagger/g))) {
		      return value;
		    } else {
		      return this.parseStagger(value, i);
		    }
		  };

		  Helpers.prototype.parseIfRand = function(str) {
		    if (typeof str === 'string' && str.match(/rand\(/)) {
		      return this.parseRand(str);
		    } else {
		      return str;
		    }
		  };

		  Helpers.prototype.parseDelta = function(key, value, index) {
		    var curve, delta, easing, end, endArr, endColorObj, i, j, len1, start, startArr, startColorObj;
		    value = this.cloneObj(value);
		    easing = value.easing;
		    if (easing != null) {
		      easing = mojs.easing.parseEasing(easing);
		    }
		    delete value.easing;
		    curve = value.curve;
		    if (curve != null) {
		      curve = mojs.easing.parseEasing(curve);
		    }
		    delete value.curve;
		    start = Object.keys(value)[0];
		    end = value[start];
		    delta = {
		      start: start
		    };
		    if (isNaN(parseFloat(start)) && !start.match(/rand\(/) && !start.match(/stagger\(/)) {
		      if (key === 'strokeLinecap') {
		        this.warn("Sorry, stroke-linecap property is not animatable yet, using the start(" + start + ") value instead", value);
		        return delta;
		      }
		      startColorObj = this.makeColorObj(start);
		      endColorObj = this.makeColorObj(end);
		      delta = {
		        type: 'color',
		        name: key,
		        start: startColorObj,
		        end: endColorObj,
		        easing: easing,
		        curve: curve,
		        delta: {
		          r: endColorObj.r - startColorObj.r,
		          g: endColorObj.g - startColorObj.g,
		          b: endColorObj.b - startColorObj.b,
		          a: endColorObj.a - startColorObj.a
		        }
		      };
		    } else if (key === 'strokeDasharray' || key === 'strokeDashoffset' || key === 'origin') {
		      startArr = this.strToArr(start);
		      endArr = this.strToArr(end);
		      this.normDashArrays(startArr, endArr);
		      for (i = j = 0, len1 = startArr.length; j < len1; i = ++j) {
		        start = startArr[i];
		        end = endArr[i];
		        this.mergeUnits(start, end, key);
		      }
		      delta = {
		        type: 'array',
		        name: key,
		        start: startArr,
		        end: endArr,
		        delta: this.calcArrDelta(startArr, endArr),
		        easing: easing,
		        curve: curve
		      };
		    } else {
		      if (!this.callbacksMap[key] && !this.tweenOptionMap[key]) {
		        if (this.unitOptionMap[key]) {
		          end = this.parseUnit(this.parseStringOption(end, index));
		          start = this.parseUnit(this.parseStringOption(start, index));
		          this.mergeUnits(start, end, key);
		          delta = {
		            type: 'unit',
		            name: key,
		            start: start,
		            end: end,
		            delta: end.value - start.value,
		            easing: easing,
		            curve: curve
		          };
		        } else {
		          end = parseFloat(this.parseStringOption(end, index));
		          start = parseFloat(this.parseStringOption(start, index));
		          delta = {
		            type: 'number',
		            name: key,
		            start: start,
		            end: end,
		            delta: end - start,
		            easing: easing,
		            curve: curve
		          };
		        }
		      }
		    }
		    return delta;
		  };

		  Helpers.prototype.mergeUnits = function(start, end, key) {
		    if (!end.isStrict && start.isStrict) {
		      end.unit = start.unit;
		      return end.string = "" + end.value + end.unit;
		    } else if (end.isStrict && !start.isStrict) {
		      start.unit = end.unit;
		      return start.string = "" + start.value + start.unit;
		    } else if (end.isStrict && start.isStrict) {
		      if (end.unit !== start.unit) {
		        start.unit = end.unit;
		        start.string = "" + start.value + start.unit;
		        return this.warn("Two different units were specified on \"" + key + "\" delta property, mo · js will fallback to end \"" + end.unit + "\" unit ");
		      }
		    }
		  };

		  Helpers.prototype.rand = function(min, max) {
		    return (Math.random() * (max - min)) + min;
		  };

		  Helpers.prototype.isDOM = function(o) {
		    var isNode;
		    if (o == null) {
		      return false;
		    }
		    isNode = typeof o.nodeType === 'number' && typeof o.nodeName === 'string';
		    return typeof o === 'object' && isNode;
		  };

		  Helpers.prototype.getChildElements = function(element) {
		    var childNodes, children, i;
		    childNodes = element.childNodes;
		    children = [];
		    i = childNodes.length;
		    while (i--) {
		      if (childNodes[i].nodeType === 1) {
		        children.unshift(childNodes[i]);
		      }
		    }
		    return children;
		  };

		  Helpers.prototype.delta = function(start, end) {
		    var isType1, isType2, obj, type1, type2;
		    type1 = typeof start;
		    type2 = typeof end;
		    isType1 = type1 === 'string' || type1 === 'number' && !isNaN(start);
		    isType2 = type2 === 'string' || type2 === 'number' && !isNaN(end);
		    if (!isType1 || !isType2) {
		      this.error("delta method expects Strings or Numbers at input but got - " + start + ", " + end);
		      return;
		    }
		    obj = {};
		    obj[start] = end;
		    return obj;
		  };

		  Helpers.prototype.getUniqID = function() {
		    return ++this.uniqIDs;
		  };

		  Helpers.prototype.parsePath = function(path) {
		    var domPath;
		    if (typeof path === 'string') {
		      if (path.charAt(0).toLowerCase() === 'm') {
		        domPath = document.createElementNS(this.NS, 'path');
		        domPath.setAttributeNS(null, 'd', path);
		        return domPath;
		      } else {
		        return document.querySelector(path);
		      }
		    }
		    if (path.style) {
		      return path;
		    }
		  };

		  Helpers.prototype.closeEnough = function(num1, num2, eps) {
		    return Math.abs(num1 - num2) < eps;
		  };

		  Helpers.prototype.checkIf3d = function() {
		    var div, prefixed, style, tr;
		    div = document.createElement('div');
		    this.style(div, 'transform', 'translateZ(0)');
		    style = div.style;
		    prefixed = this.prefix.css + "transform";
		    tr = style[prefixed] != null ? style[prefixed] : style.transform;
		    return tr !== '';
		  };


		  /*
		    Method to check if variable holds pointer to an object.
		    @param {Any} Variable to test
		    @returns {Boolean} If variable is object.
		   */

		  Helpers.prototype.isObject = function(variable) {
		    return variable !== null && typeof variable === 'object';
		  };


		  /*
		    Method to get first value of the object.
		    Used to get end value on ∆s.
		    @param {Object} Object to get the value of.
		    @returns {Any} The value of the first object' property.
		   */

		  Helpers.prototype.getDeltaEnd = function(obj) {
		    var key;
		    key = Object.keys(obj)[0];
		    return obj[key];
		  };


		  /*
		    Method to get first key of the object.
		    Used to get start value on ∆s.
		    @param {Object} Object to get the value of.
		    @returns {String} The key of the first object' property.
		   */

		  Helpers.prototype.getDeltaStart = function(obj) {
		    var key;
		    key = Object.keys(obj)[0];
		    return key;
		  };


		  /*
		    Method to check if propery exists in callbacksMap or tweenOptionMap.
		    @param {String} Property name to check for
		    @returns {Boolean} If property is tween property.
		   */

		  Helpers.prototype.isTweenProp = function(keyName) {
		    return this.tweenOptionMap[keyName] || this.callbacksMap[keyName];
		  };


		  /*
		    Method to parse string property value
		    which can include both `rand` and `stagger `
		    value in various positions.
		    @param {String} Property name to check for.
		    @param {Number} Optional index for stagger.
		    @returns {Number} Parsed option value.
		   */

		  Helpers.prototype.parseStringOption = function(value, index) {
		    if (index == null) {
		      index = 0;
		    }
		    if (typeof value === 'string') {
		      value = this.parseIfStagger(value, index);
		      value = this.parseIfRand(value);
		    }
		    return value;
		  };


		  /*
		    Method to get the last item of array.
		    @private
		    @param {Array} Array to get the last item in.
		    @returns {Any} The last item of array.
		   */

		  Helpers.prototype.getLastItem = function(arr) {
		    return arr[arr.length - 1];
		  };


		  /*
		    Method parse HTMLElement.
		    @private
		    @param {String, Object} Selector string or HTMLElement.
		    @returns {Object} HTMLElement.
		   */

		  Helpers.prototype.parseEl = function(el) {
		    if (h.isDOM(el)) {
		      return el;
		    } else if (typeof el === 'string') {
		      el = document.querySelector(el);
		    }
		    if (el === null) {
		      h.error("Can't parse HTML element: ", el);
		    }
		    return el;
		  };


		  /*
		    Method force compositor layer on HTMLElement.
		    @private
		    @param {Object} HTMLElement.
		    @returns {Object} HTMLElement.
		   */

		  Helpers.prototype.force3d = function(el) {
		    this.setPrefixedStyle(el, 'backface-visibility', 'hidden');
		    return el;
		  };


		  /*
		    Method to check if value is delta.
		    @private
		    @param {Any} Property to check.
		    @returns {Boolean} If value is delta.
		   */

		  Helpers.prototype.isDelta = function(optionsValue) {
		    var isObject;
		    isObject = this.isObject(optionsValue);
		    isObject = isObject && !optionsValue.unit;
		    return !(!isObject || this.isArray(optionsValue) || this.isDOM(optionsValue));
		  };

		  return Helpers;

		})();

		h = new Helpers;

		module.exports = h;


	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {

		var Bit, BitsMap, Circle, Cross, Curve, Custom, Equal, Line, Polygon, Rect, Zigzag, h;

		Bit = __webpack_require__(26)["default"] || __webpack_require__(26);

		Custom = __webpack_require__(36)["default"] || __webpack_require__(36);

		Circle = __webpack_require__(37);

		Line = __webpack_require__(38);

		Zigzag = __webpack_require__(39);

		Rect = __webpack_require__(35);

		Polygon = __webpack_require__(40);

		Cross = __webpack_require__(41);

		Curve = __webpack_require__(42)["default"] || __webpack_require__(42);

		Equal = __webpack_require__(43);

		h = __webpack_require__(19);

		BitsMap = (function() {
		  function BitsMap() {
		    this.addShape = h.bind(this.addShape, this);
		  }

		  BitsMap.prototype.bit = Bit;

		  BitsMap.prototype.custom = Custom;

		  BitsMap.prototype.circle = Circle;

		  BitsMap.prototype.line = Line;

		  BitsMap.prototype.zigzag = Zigzag;

		  BitsMap.prototype.rect = Rect;

		  BitsMap.prototype.polygon = Polygon;

		  BitsMap.prototype.cross = Cross;

		  BitsMap.prototype.equal = Equal;

		  BitsMap.prototype.curve = Curve;

		  BitsMap.prototype.getShape = function(name) {
		    return this[name] || h.error("no \"" + name + "\" shape available yet, please choose from this list:", ['circle', 'line', 'zigzag', 'rect', 'polygon', 'cross', 'equal', 'curve']);
		  };


		  /*
		    Method to add shape to the map.
		    @public
		    @param {String} Name of the shape module.
		    @param {Object} Shape module class.
		   */

		  BitsMap.prototype.addShape = function(name, Module) {
		    return this[name] = Module;
		  };

		  return BitsMap;

		})();

		module.exports = new BitsMap;


	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		var MotionPath, Timeline, Tween, h, resize,
		  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

		h = __webpack_require__(19);

		resize = __webpack_require__(34);

		Tween = __webpack_require__(8)["default"];

		Timeline = __webpack_require__(9)["default"];

		MotionPath = (function() {
		  MotionPath.prototype.defaults = {
		    path: null,
		    curvature: {
		      x: '75%',
		      y: '50%'
		    },
		    isCompositeLayer: true,
		    delay: 0,
		    duration: 1000,
		    easing: null,
		    repeat: 0,
		    yoyo: false,
		    onStart: null,
		    onComplete: null,
		    onUpdate: null,
		    offsetX: 0,
		    offsetY: 0,
		    angleOffset: null,
		    pathStart: 0,
		    pathEnd: 1,
		    motionBlur: 0,
		    transformOrigin: null,
		    isAngle: false,
		    isReverse: false,
		    isRunLess: false,
		    isPresetPosition: true
		  };

		  function MotionPath(o1) {
		    this.o = o1 != null ? o1 : {};
		    this.calcHeight = bind(this.calcHeight, this);
		    if (this.vars()) {
		      return;
		    }
		    this.createTween();
		    this;
		  }

		  MotionPath.prototype.vars = function() {
		    this.getScaler = h.bind(this.getScaler, this);
		    this.resize = resize;
		    this.props = h.cloneObj(this.defaults);
		    this.extendOptions(this.o);
		    this.isMotionBlurReset = h.isSafari || h.isIE;
		    this.isMotionBlurReset && (this.props.motionBlur = 0);
		    this.history = [h.cloneObj(this.props)];
		    return this.postVars();
		  };

		  MotionPath.prototype.curveToPath = function(o) {
		    var angle, curvature, curvatureX, curvatureY, curvePoint, curveXPoint, dX, dY, endPoint, path, percent, radius, start;
		    path = document.createElementNS(h.NS, 'path');
		    start = o.start;
		    endPoint = {
		      x: start.x + o.shift.x,
		      y: start.x + o.shift.y
		    };
		    curvature = o.curvature;
		    dX = o.shift.x;
		    dY = o.shift.y;
		    radius = Math.sqrt(dX * dX + dY * dY);
		    percent = radius / 100;
		    angle = Math.atan(dY / dX) * (180 / Math.PI) + 90;
		    if (o.shift.x < 0) {
		      angle = angle + 180;
		    }
		    curvatureX = h.parseUnit(curvature.x);
		    curvatureX = curvatureX.unit === '%' ? curvatureX.value * percent : curvatureX.value;
		    curveXPoint = h.getRadialPoint({
		      center: {
		        x: start.x,
		        y: start.y
		      },
		      radius: curvatureX,
		      angle: angle
		    });
		    curvatureY = h.parseUnit(curvature.y);
		    curvatureY = curvatureY.unit === '%' ? curvatureY.value * percent : curvatureY.value;
		    curvePoint = h.getRadialPoint({
		      center: {
		        x: curveXPoint.x,
		        y: curveXPoint.y
		      },
		      radius: curvatureY,
		      angle: angle + 90
		    });
		    path.setAttribute('d', "M" + start.x + "," + start.y + " Q" + curvePoint.x + "," + curvePoint.y + " " + endPoint.x + "," + endPoint.y);
		    return path;
		  };

		  MotionPath.prototype.postVars = function() {
		    this.props.pathStart = h.clamp(this.props.pathStart, 0, 1);
		    this.props.pathEnd = h.clamp(this.props.pathEnd, this.props.pathStart, 1);
		    this.angle = 0;
		    this.speedX = 0;
		    this.speedY = 0;
		    this.blurX = 0;
		    this.blurY = 0;
		    this.prevCoords = {};
		    this.blurAmount = 20;
		    this.props.motionBlur = h.clamp(this.props.motionBlur, 0, 1);
		    this.onUpdate = this.props.onUpdate;
		    if (!this.o.el) {
		      h.error('Missed "el" option. It could be a selector, DOMNode or another module.');
		      return true;
		    }
		    this.el = this.parseEl(this.props.el);
		    this.props.motionBlur > 0 && this.createFilter();
		    this.path = this.getPath();
		    if (!this.path.getAttribute('d')) {
		      h.error('Path has no coordinates to work with, aborting');
		      return true;
		    }
		    this.len = this.path.getTotalLength();
		    this.slicedLen = this.len * (this.props.pathEnd - this.props.pathStart);
		    this.startLen = this.props.pathStart * this.len;
		    this.fill = this.props.fill;
		    if (this.fill != null) {
		      this.container = this.parseEl(this.props.fill.container);
		      this.fillRule = this.props.fill.fillRule || 'all';
		      this.getScaler();
		      if (this.container != null) {
		        this.removeEvent(this.container, 'onresize', this.getScaler);
		        return this.addEvent(this.container, 'onresize', this.getScaler);
		      }
		    }
		  };

		  MotionPath.prototype.addEvent = function(el, type, handler) {
		    return el.addEventListener(type, handler, false);
		  };

		  MotionPath.prototype.removeEvent = function(el, type, handler) {
		    return el.removeEventListener(type, handler, false);
		  };

		  MotionPath.prototype.createFilter = function() {
		    var div, svg;
		    div = document.createElement('div');
		    this.filterID = "filter-" + (h.getUniqID());
		    div.innerHTML = "<svg id=\"svg-" + this.filterID + "\"\n    style=\"visibility:hidden; width:0px; height:0px\">\n  <filter id=\"" + this.filterID + "\" y=\"-20\" x=\"-20\" width=\"40\" height=\"40\">\n    <feOffset\n      id=\"blur-offset\" in=\"SourceGraphic\"\n      dx=\"0\" dy=\"0\" result=\"offset2\"></feOffset>\n    <feGaussianblur\n      id=\"blur\" in=\"offset2\"\n      stdDeviation=\"0,0\" result=\"blur2\"></feGaussianblur>\n    <feMerge>\n      <feMergeNode in=\"SourceGraphic\"></feMergeNode>\n      <feMergeNode in=\"blur2\"></feMergeNode>\n    </feMerge>\n  </filter>\n</svg>";
		    svg = div.querySelector("#svg-" + this.filterID);
		    this.filter = svg.querySelector('#blur');
		    this.filterOffset = svg.querySelector('#blur-offset');
		    document.body.insertBefore(svg, document.body.firstChild);
		    this.el.style['filter'] = "url(#" + this.filterID + ")";
		    return this.el.style[h.prefix.css + "filter"] = "url(#" + this.filterID + ")";
		  };

		  MotionPath.prototype.parseEl = function(el) {
		    if (typeof el === 'string') {
		      return document.querySelector(el);
		    }
		    if (el instanceof HTMLElement) {
		      return el;
		    }
		    if (el._setProp != null) {
		      this.isModule = true;
		      return el;
		    }
		  };

		  MotionPath.prototype.getPath = function() {
		    var path;
		    path = h.parsePath(this.props.path);
		    if (path) {
		      return path;
		    }
		    if (this.props.path.x || this.props.path.y) {
		      return this.curveToPath({
		        start: {
		          x: 0,
		          y: 0
		        },
		        shift: {
		          x: this.props.path.x || 0,
		          y: this.props.path.y || 0
		        },
		        curvature: {
		          x: this.props.curvature.x || this.defaults.curvature.x,
		          y: this.props.curvature.y || this.defaults.curvature.y
		        }
		      });
		    }
		  };

		  MotionPath.prototype.getScaler = function() {
		    var end, size, start;
		    this.cSize = {
		      width: this.container.offsetWidth || 0,
		      height: this.container.offsetHeight || 0
		    };
		    start = this.path.getPointAtLength(0);
		    end = this.path.getPointAtLength(this.len);
		    size = {};
		    this.scaler = {};
		    size.width = end.x >= start.x ? end.x - start.x : start.x - end.x;
		    size.height = end.y >= start.y ? end.y - start.y : start.y - end.y;
		    switch (this.fillRule) {
		      case 'all':
		        this.calcWidth(size);
		        return this.calcHeight(size);
		      case 'width':
		        this.calcWidth(size);
		        return this.scaler.y = this.scaler.x;
		      case 'height':
		        this.calcHeight(size);
		        return this.scaler.x = this.scaler.y;
		    }
		  };

		  MotionPath.prototype.calcWidth = function(size) {
		    this.scaler.x = this.cSize.width / size.width;
		    return !isFinite(this.scaler.x) && (this.scaler.x = 1);
		  };

		  MotionPath.prototype.calcHeight = function(size) {
		    this.scaler.y = this.cSize.height / size.height;
		    return !isFinite(this.scaler.y) && (this.scaler.y = 1);
		  };

		  MotionPath.prototype.run = function(o) {
		    var fistItem, key, value;
		    if (o) {
		      fistItem = this.history[0];
		      for (key in o) {
		        value = o[key];
		        if (h.callbacksMap[key] || h.tweenOptionMap[key]) {
		          h.warn("the property \"" + key + "\" property can not be overridden on run yet");
		          delete o[key];
		        } else {
		          this.history[0][key] = value;
		        }
		      }
		      this.tuneOptions(o);
		    }
		    return this.startTween();
		  };

		  MotionPath.prototype.createTween = function() {
		    this.tween = new Tween({
		      duration: this.props.duration,
		      delay: this.props.delay,
		      yoyo: this.props.yoyo,
		      repeat: this.props.repeat,
		      easing: this.props.easing,
		      onStart: (function(_this) {
		        return function() {
		          var ref;
		          return (ref = _this.props.onStart) != null ? ref.apply(_this) : void 0;
		        };
		      })(this),
		      onComplete: (function(_this) {
		        return function() {
		          var ref;
		          _this.props.motionBlur && _this.setBlur({
		            blur: {
		              x: 0,
		              y: 0
		            },
		            offset: {
		              x: 0,
		              y: 0
		            }
		          });
		          return (ref = _this.props.onComplete) != null ? ref.apply(_this) : void 0;
		        };
		      })(this),
		      onUpdate: (function(_this) {
		        return function(p) {
		          return _this.setProgress(p);
		        };
		      })(this),
		      onFirstUpdate: (function(_this) {
		        return function(isForward, isYoyo) {
		          if (!isForward) {
		            return _this.history.length > 1 && _this.tuneOptions(_this.history[0]);
		          }
		        };
		      })(this)
		    });
		    this.timeline = new Timeline;
		    this.timeline.add(this.tween);
		    !this.props.isRunLess && this.startTween();
		    return this.props.isPresetPosition && this.setProgress(0, true);
		  };

		  MotionPath.prototype.startTween = function() {
		    return setTimeout(((function(_this) {
		      return function() {
		        var ref;
		        return (ref = _this.timeline) != null ? ref.play() : void 0;
		      };
		    })(this)), 1);
		  };

		  MotionPath.prototype.setProgress = function(p, isInit) {
		    var len, point, x, y;
		    len = this.startLen + (!this.props.isReverse ? p * this.slicedLen : (1 - p) * this.slicedLen);
		    point = this.path.getPointAtLength(len);
		    x = point.x + this.props.offsetX;
		    y = point.y + this.props.offsetY;
		    this._getCurrentAngle(point, len, p);
		    this._setTransformOrigin(p);
		    this._setTransform(x, y, p, isInit);
		    return this.props.motionBlur && this.makeMotionBlur(x, y);
		  };

		  MotionPath.prototype.setElPosition = function(x, y, p) {
		    var composite, isComposite, rotate, transform;
		    rotate = this.angle !== 0 ? "rotate(" + this.angle + "deg)" : '';
		    isComposite = this.props.isCompositeLayer && h.is3d;
		    composite = isComposite ? 'translateZ(0)' : '';
		    transform = "translate(" + x + "px," + y + "px) " + rotate + " " + composite;
		    return h.setPrefixedStyle(this.el, 'transform', transform);
		  };

		  MotionPath.prototype.setModulePosition = function(x, y) {
		    this.el._setProp({
		      shiftX: x + "px",
		      shiftY: y + "px",
		      angle: this.angle
		    });
		    return this.el._draw();
		  };

		  MotionPath.prototype._getCurrentAngle = function(point, len, p) {
		    var atan, isTransformFunOrigin, prevPoint, x1, x2;
		    isTransformFunOrigin = typeof this.props.transformOrigin === 'function';
		    if (this.props.isAngle || (this.props.angleOffset != null) || isTransformFunOrigin) {
		      prevPoint = this.path.getPointAtLength(len - 1);
		      x1 = point.y - prevPoint.y;
		      x2 = point.x - prevPoint.x;
		      atan = Math.atan(x1 / x2);
		      !isFinite(atan) && (atan = 0);
		      this.angle = atan * h.RAD_TO_DEG;
		      if ((typeof this.props.angleOffset) !== 'function') {
		        return this.angle += this.props.angleOffset || 0;
		      } else {
		        return this.angle = this.props.angleOffset.call(this, this.angle, p);
		      }
		    } else {
		      return this.angle = 0;
		    }
		  };

		  MotionPath.prototype._setTransform = function(x, y, p, isInit) {
		    var transform;
		    if (this.scaler) {
		      x *= this.scaler.x;
		      y *= this.scaler.y;
		    }
		    transform = null;
		    if (!isInit) {
		      transform = typeof this.onUpdate === "function" ? this.onUpdate(p, {
		        x: x,
		        y: y,
		        angle: this.angle
		      }) : void 0;
		    }
		    if (this.isModule) {
		      return this.setModulePosition(x, y);
		    } else {
		      if (typeof transform !== 'string') {
		        return this.setElPosition(x, y, p);
		      } else {
		        return h.setPrefixedStyle(this.el, 'transform', transform);
		      }
		    }
		  };

		  MotionPath.prototype._setTransformOrigin = function(p) {
		    var isTransformFunOrigin, tOrigin;
		    if (this.props.transformOrigin) {
		      isTransformFunOrigin = typeof this.props.transformOrigin === 'function';
		      tOrigin = !isTransformFunOrigin ? this.props.transformOrigin : this.props.transformOrigin(this.angle, p);
		      return h.setPrefixedStyle(this.el, 'transform-origin', tOrigin);
		    }
		  };

		  MotionPath.prototype.makeMotionBlur = function(x, y) {
		    var absoluteAngle, coords, dX, dY, signX, signY, tailAngle;
		    tailAngle = 0;
		    signX = 1;
		    signY = 1;
		    if ((this.prevCoords.x == null) || (this.prevCoords.y == null)) {
		      this.speedX = 0;
		      this.speedY = 0;
		    } else {
		      dX = x - this.prevCoords.x;
		      dY = y - this.prevCoords.y;
		      if (dX > 0) {
		        signX = -1;
		      }
		      if (signX < 0) {
		        signY = -1;
		      }
		      this.speedX = Math.abs(dX);
		      this.speedY = Math.abs(dY);
		      tailAngle = Math.atan(dY / dX) * (180 / Math.PI) + 90;
		    }
		    absoluteAngle = tailAngle - this.angle;
		    coords = this.angToCoords(absoluteAngle);
		    this.blurX = h.clamp((this.speedX / 16) * this.props.motionBlur, 0, 1);
		    this.blurY = h.clamp((this.speedY / 16) * this.props.motionBlur, 0, 1);
		    this.setBlur({
		      blur: {
		        x: 3 * this.blurX * this.blurAmount * Math.abs(coords.x),
		        y: 3 * this.blurY * this.blurAmount * Math.abs(coords.y)
		      },
		      offset: {
		        x: 3 * signX * this.blurX * coords.x * this.blurAmount,
		        y: 3 * signY * this.blurY * coords.y * this.blurAmount
		      }
		    });
		    this.prevCoords.x = x;
		    return this.prevCoords.y = y;
		  };

		  MotionPath.prototype.setBlur = function(o) {
		    if (!this.isMotionBlurReset) {
		      this.filter.setAttribute('stdDeviation', o.blur.x + "," + o.blur.y);
		      this.filterOffset.setAttribute('dx', o.offset.x);
		      return this.filterOffset.setAttribute('dy', o.offset.y);
		    }
		  };

		  MotionPath.prototype.extendDefaults = function(o) {
		    var key, results, value;
		    results = [];
		    for (key in o) {
		      value = o[key];
		      results.push(this[key] = value);
		    }
		    return results;
		  };

		  MotionPath.prototype.extendOptions = function(o) {
		    var key, results, value;
		    results = [];
		    for (key in o) {
		      value = o[key];
		      results.push(this.props[key] = value);
		    }
		    return results;
		  };

		  MotionPath.prototype.then = function(o) {
		    var it, key, opts, prevOptions, value;
		    prevOptions = this.history[this.history.length - 1];
		    opts = {};
		    for (key in prevOptions) {
		      value = prevOptions[key];
		      if (!h.callbacksMap[key] && !h.tweenOptionMap[key] || key === 'duration') {
		        if (o[key] == null) {
		          o[key] = value;
		        }
		      } else {
		        if (o[key] == null) {
		          o[key] = void 0;
		        }
		      }
		      if (h.tweenOptionMap[key]) {
		        opts[key] = key !== 'duration' ? o[key] : o[key] != null ? o[key] : prevOptions[key];
		      }
		    }
		    this.history.push(o);
		    it = this;
		    opts.onUpdate = (function(_this) {
		      return function(p) {
		        return _this.setProgress(p);
		      };
		    })(this);
		    opts.onStart = (function(_this) {
		      return function() {
		        var ref;
		        return (ref = _this.props.onStart) != null ? ref.apply(_this) : void 0;
		      };
		    })(this);
		    opts.onComplete = (function(_this) {
		      return function() {
		        var ref;
		        return (ref = _this.props.onComplete) != null ? ref.apply(_this) : void 0;
		      };
		    })(this);
		    opts.onFirstUpdate = function() {
		      return it.tuneOptions(it.history[this.index]);
		    };
		    opts.isChained = !o.delay;
		    this.timeline.append(new Tween(opts));
		    return this;
		  };

		  MotionPath.prototype.tuneOptions = function(o) {
		    this.extendOptions(o);
		    return this.postVars();
		  };

		  MotionPath.prototype.angToCoords = function(angle) {
		    var radAngle, x, y;
		    angle = angle % 360;
		    radAngle = ((angle - 90) * Math.PI) / 180;
		    x = Math.cos(radAngle);
		    y = Math.sin(radAngle);
		    x = x < 0 ? Math.max(x, -0.7) : Math.min(x, .7);
		    y = y < 0 ? Math.max(y, -0.7) : Math.min(y, .7);
		    return {
		      x: x * 1.428571429,
		      y: y * 1.428571429
		    };
		  };

		  return MotionPath;

		})();

		module.exports = MotionPath;


	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		var Easing, PI, PathEasing, approximate, bezier, easing, h, mix, sin;

		bezier = __webpack_require__(44);

		PathEasing = __webpack_require__(45);

		mix = __webpack_require__(46);

		h = __webpack_require__(19);

		approximate = __webpack_require__(47)["default"] || __webpack_require__(47);

		sin = Math.sin;

		PI = Math.PI;

		Easing = (function() {
		  function Easing() {}

		  Easing.prototype.bezier = bezier;

		  Easing.prototype.PathEasing = PathEasing;

		  Easing.prototype.path = (new PathEasing('creator')).create;

		  Easing.prototype.approximate = approximate;

		  Easing.prototype.inverse = function(p) {
		    return 1 - p;
		  };

		  Easing.prototype.linear = {
		    none: function(k) {
		      return k;
		    }
		  };

		  Easing.prototype.ease = {
		    "in": bezier.apply(Easing, [0.42, 0, 1, 1]),
		    out: bezier.apply(Easing, [0, 0, 0.58, 1]),
		    inout: bezier.apply(Easing, [0.42, 0, 0.58, 1])
		  };

		  Easing.prototype.sin = {
		    "in": function(k) {
		      return 1 - Math.cos(k * PI / 2);
		    },
		    out: function(k) {
		      return sin(k * PI / 2);
		    },
		    inout: function(k) {
		      return 0.5 * (1 - Math.cos(PI * k));
		    }
		  };

		  Easing.prototype.quad = {
		    "in": function(k) {
		      return k * k;
		    },
		    out: function(k) {
		      return k * (2 - k);
		    },
		    inout: function(k) {
		      if ((k *= 2) < 1) {
		        return 0.5 * k * k;
		      }
		      return -0.5 * (--k * (k - 2) - 1);
		    }
		  };

		  Easing.prototype.cubic = {
		    "in": function(k) {
		      return k * k * k;
		    },
		    out: function(k) {
		      return --k * k * k + 1;
		    },
		    inout: function(k) {
		      if ((k *= 2) < 1) {
		        return 0.5 * k * k * k;
		      }
		      return 0.5 * ((k -= 2) * k * k + 2);
		    }
		  };

		  Easing.prototype.quart = {
		    "in": function(k) {
		      return k * k * k * k;
		    },
		    out: function(k) {
		      return 1 - (--k * k * k * k);
		    },
		    inout: function(k) {
		      if ((k *= 2) < 1) {
		        return 0.5 * k * k * k * k;
		      }
		      return -0.5 * ((k -= 2) * k * k * k - 2);
		    }
		  };

		  Easing.prototype.quint = {
		    "in": function(k) {
		      return k * k * k * k * k;
		    },
		    out: function(k) {
		      return --k * k * k * k * k + 1;
		    },
		    inout: function(k) {
		      if ((k *= 2) < 1) {
		        return 0.5 * k * k * k * k * k;
		      }
		      return 0.5 * ((k -= 2) * k * k * k * k + 2);
		    }
		  };

		  Easing.prototype.expo = {
		    "in": function(k) {
		      if (k === 0) {
		        return 0;
		      } else {
		        return Math.pow(1024, k - 1);
		      }
		    },
		    out: function(k) {
		      if (k === 1) {
		        return 1;
		      } else {
		        return 1 - Math.pow(2, -10 * k);
		      }
		    },
		    inout: function(k) {
		      if (k === 0) {
		        return 0;
		      }
		      if (k === 1) {
		        return 1;
		      }
		      if ((k *= 2) < 1) {
		        return 0.5 * Math.pow(1024, k - 1);
		      }
		      return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
		    }
		  };

		  Easing.prototype.circ = {
		    "in": function(k) {
		      return 1 - Math.sqrt(1 - k * k);
		    },
		    out: function(k) {
		      return Math.sqrt(1 - (--k * k));
		    },
		    inout: function(k) {
		      if ((k *= 2) < 1) {
		        return -0.5 * (Math.sqrt(1 - k * k) - 1);
		      }
		      return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
		    }
		  };

		  Easing.prototype.back = {
		    "in": function(k) {
		      var s;
		      s = 1.70158;
		      return k * k * ((s + 1) * k - s);
		    },
		    out: function(k) {
		      var s;
		      s = 1.70158;
		      return --k * k * ((s + 1) * k + s) + 1;
		    },
		    inout: function(k) {
		      var s;
		      s = 1.70158 * 1.525;
		      if ((k *= 2) < 1) {
		        return 0.5 * (k * k * ((s + 1) * k - s));
		      }
		      return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
		    }
		  };

		  Easing.prototype.elastic = {
		    "in": function(k) {
		      var a, p, s;
		      s = void 0;
		      p = 0.4;
		      if (k === 0) {
		        return 0;
		      }
		      if (k === 1) {
		        return 1;
		      }
		      a = 1;
		      s = p / 4;
		      return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
		    },
		    out: function(k) {
		      var a, p, s;
		      s = void 0;
		      p = 0.4;
		      if (k === 0) {
		        return 0;
		      }
		      if (k === 1) {
		        return 1;
		      }
		      a = 1;
		      s = p / 4;
		      return a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1;
		    },
		    inout: function(k) {
		      var a, p, s;
		      s = void 0;
		      p = 0.4;
		      if (k === 0) {
		        return 0;
		      }
		      if (k === 1) {
		        return 1;
		      }
		      a = 1;
		      s = p / 4;
		      if ((k *= 2) < 1) {
		        return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
		      }
		      return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
		    }
		  };

		  Easing.prototype.bounce = {
		    "in": function(k) {
		      return 1 - easing.bounce.out(1 - k);
		    },
		    out: function(k) {
		      if (k < (1 / 2.75)) {
		        return 7.5625 * k * k;
		      } else if (k < (2 / 2.75)) {
		        return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
		      } else if (k < (2.5 / 2.75)) {
		        return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
		      } else {
		        return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
		      }
		    },
		    inout: function(k) {
		      if (k < 0.5) {
		        return easing.bounce["in"](k * 2) * 0.5;
		      }
		      return easing.bounce.out(k * 2 - 1) * 0.5 + 0.5;
		    }
		  };

		  Easing.prototype.parseEasing = function(easing) {
		    var easingParent, type;
		    if (easing == null) {
		      easing = 'linear.none';
		    }
		    type = typeof easing;
		    if (type === 'string') {
		      if (easing.charAt(0).toLowerCase() === 'm') {
		        return this.path(easing);
		      } else {
		        easing = this._splitEasing(easing);
		        easingParent = this[easing[0]];
		        if (!easingParent) {
		          h.error("Easing with name \"" + easing[0] + "\" was not found, fallback to \"linear.none\" instead");
		          return this['linear']['none'];
		        }
		        return easingParent[easing[1]];
		      }
		    }
		    if (h.isArray(easing)) {
		      return this.bezier.apply(this, easing);
		    }
		    if ('function') {
		      return easing;
		    }
		  };

		  Easing.prototype._splitEasing = function(string) {
		    var firstPart, secondPart, split;
		    if (typeof string === 'function') {
		      return string;
		    }
		    if (typeof string === 'string' && string.length) {
		      split = string.split('.');
		      firstPart = split[0].toLowerCase() || 'linear';
		      secondPart = split[1].toLowerCase() || 'none';
		      return [firstPart, secondPart];
		    } else {
		      return ['linear', 'none'];
		    }
		  };

		  return Easing;

		})();

		easing = new Easing;

		easing.mix = mix(easing);

		module.exports = easing;


	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		exports.__esModule = true;

		exports.default = function (instance, Constructor) {
		  if (!(instance instanceof Constructor)) {
		    throw new TypeError("Cannot call a class as a function");
		  }
		};

	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		exports.__esModule = true;

		var _typeof2 = __webpack_require__(18);

		var _typeof3 = _interopRequireDefault(_typeof2);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = function (self, call) {
		  if (!self) {
		    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		  }

		  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
		};

	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		exports.__esModule = true;

		var _setPrototypeOf = __webpack_require__(48);

		var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

		var _create = __webpack_require__(49);

		var _create2 = _interopRequireDefault(_create);

		var _typeof2 = __webpack_require__(18);

		var _typeof3 = _interopRequireDefault(_typeof2);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = function (subClass, superClass) {
		  if (typeof superClass !== "function" && superClass !== null) {
		    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
		  }

		  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
		    constructor: {
		      value: subClass,
		      enumerable: false,
		      writable: true,
		      configurable: true
		    }
		  });
		  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
		};

	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _typeof2 = __webpack_require__(18);

		var _typeof3 = _interopRequireDefault(_typeof2);

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(24);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(25);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _module = __webpack_require__(16);

		var _module2 = _interopRequireDefault(_module);

		var _h = __webpack_require__(19);

		var _h2 = _interopRequireDefault(_h);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var Bit = function (_Module) {
		  (0, _inherits3.default)(Bit, _Module);

		  function Bit() {
		    (0, _classCallCheck3.default)(this, Bit);
		    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
		  }

		  /*
		    Method to declare module's defaults.
		    @private
		  */

		  Bit.prototype._declareDefaults = function _declareDefaults() {
		    this._defaults = {
		      'ns': 'http://www.w3.org/2000/svg',
		      'tag': 'ellipse',
		      'parent': document.body,
		      'ratio': 1,
		      'radius': 50,
		      'radiusX': null,
		      'radiusY': null,
		      'stroke': 'hotpink',
		      'stroke-dasharray': '',
		      'stroke-dashoffset': '',
		      'stroke-linecap': '',
		      'stroke-width': 2,
		      'stroke-opacity': 1,
		      'fill': 'transparent',
		      'fill-opacity': 1,
		      'width': 0,
		      'height': 0
		    };
		    this._drawMap = ['stroke', 'stroke-width', 'stroke-opacity', 'stroke-dasharray', 'fill', 'stroke-dashoffset', 'stroke-linecap', 'fill-opacity', 'transform'];
		  };

		  Bit.prototype._vars = function _vars() {
		    this._state = {};
		    this._drawMapLength = this._drawMap.length;
		  };
		  /*
		    Method for initial render of the shape.
		    @private
		  */


		  Bit.prototype._render = function _render() {
		    if (this._isRendered) {
		      return;
		    }
		    // set `_isRendered` hatch
		    this._isRendered = true;
		    // create `SVG` canvas to draw in
		    this._createSVGCanvas();
		    // set canvas size
		    this._setCanvasSize();
		    // draw the initial state
		    // this._draw();
		    // append the canvas to the parent from props
		    this._props.parent.appendChild(this._canvas);
		  };
		  /*
		    Method to create `SVG` canvas to draw in.
		    @private
		  */


		  Bit.prototype._createSVGCanvas = function _createSVGCanvas() {
		    var p = this._props;
		    // create canvas - `svg` element to draw in
		    this._canvas = document.createElementNS(p.ns, 'svg');
		    // create the element shape element and add it to the canvas
		    this.el = document.createElementNS(p.ns, p.tag);
		    this._canvas.appendChild(this.el);
		  };
		  /*
		    Method to set size of the _canvas.
		    @private
		  */


		  Bit.prototype._setCanvasSize = function _setCanvasSize() {
		    var p = this._props,
		        style = this._canvas.style;

		    style.display = 'block';
		    style.width = '100%';
		    style.height = '100%';
		    style.left = '0px';
		    style.top = '0px';
		  };
		  /*
		    Method to draw the shape.
		    Called on every frame.
		    @private
		  */


		  Bit.prototype._draw = function _draw() {
		    this._props.length = this._getLength();

		    var state = this._state,
		        props = this._props;

		    var len = this._drawMapLength;
		    while (len--) {
		      var name = this._drawMap[len];
		      switch (name) {
		        case 'stroke-dasharray':
		        case 'stroke-dashoffset':
		          this.castStrokeDash(name);
		      }
		      this._setAttrIfChanged(name, this._props[name]);
		    }
		    this._state.radius = this._props.radius;
		  };

		  Bit.prototype.castStrokeDash = function castStrokeDash(name) {
		    // # if array of values
		    var p = this._props;
		    if (_h2.default.isArray(p[name])) {
		      var stroke = '';
		      for (var i = 0; i < p[name].length; i++) {
		        var dash = p[name][i],
		            cast = dash.unit === '%' ? this.castPercent(dash.value) : dash.value;
		        stroke += cast + ' ';
		      }
		      p[name] = stroke === '0 ' ? stroke = '' : stroke;
		      return p[name] = stroke;
		    }
		    // # if single value
		    if ((0, _typeof3.default)(p[name]) === 'object') {
		      stroke = p[name].unit === '%' ? this.castPercent(p[name].value) : p[name].value;
		      p[name] = stroke === 0 ? stroke = '' : stroke;
		    }
		  };

		  Bit.prototype.castPercent = function castPercent(percent) {
		    return percent * (this._props.length / 100);
		  };

		  /*
		    Method to set props to attributes and cache the values.
		    @private
		  */


		  Bit.prototype._setAttrIfChanged = function _setAttrIfChanged(name, value) {
		    if (this._state[name] !== value) {
		      // this.el.style[name] = value;
		      this.el.setAttribute(name, value);
		      this._state[name] = value;
		    }
		  };
		  /*
		    Method to length of the shape.
		    @private
		    @returns {Number} Length of the shape.
		  */


		  Bit.prototype._getLength = function _getLength() {
		    var p = this._props,
		        len = 0,
		        isGetLength = !!(this.el && this.el.getTotalLength);

		    if (isGetLength && this.el.getAttribute('d')) {
		      len = this.el.getTotalLength();
		    } else {
		      len = 2 * (p.radiusX != null ? p.radiusX : p.radius);
		    }
		    return len;
		  };
		  /*
		    Method to calculate total sum between points.
		    @private
		    @param {Array} Array of points.
		    @returns {Number} Distance bewtween all points.
		  */


		  Bit.prototype._getPointsPerimiter = function _getPointsPerimiter(points) {
		    var sum = 0;

		    for (var i = 1; i < points.length; i++) {
		      sum += this._pointsDelta(points[i - 1], points[i]);
		    }

		    sum += this._pointsDelta(points[0], _h2.default.getLastItem(points));
		    return sum;
		  };
		  /*
		    Method to get delta from two points.
		    @private
		    @param {Object} Point 1.
		    @param {Object} Point 2.
		    @returns {Number} Distance between the pooints.
		  */


		  Bit.prototype._pointsDelta = function _pointsDelta(point1, point2) {
		    var dx = Math.abs(point1.x - point2.x),
		        dy = Math.abs(point1.y - point2.y);
		    return Math.sqrt(dx * dx + dy * dy);
		  };
		  /*
		    Method to set module's size.
		    @private
		    @param {Number} Module width.
		    @param {Number} Module height.
		  */


		  Bit.prototype._setSize = function _setSize(width, height) {
		    var p = this._props;
		    p.width = width;
		    p.height = height;
		    this._draw();
		  };

		  return Bit;
		}(_module2.default);

		exports.default = Bit;

	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";

		exports.__esModule = true;

		var _assign = __webpack_require__(50);

		var _assign2 = _interopRequireDefault(_assign);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = _assign2.default || function (target) {
		  for (var i = 1; i < arguments.length; i++) {
		    var source = arguments[i];

		    for (var key in source) {
		      if (Object.prototype.hasOwnProperty.call(source, key)) {
		        target[key] = source[key];
		      }
		    }
		  }

		  return target;
		};

	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(52), __esModule: true };

	/***/ },
	/* 29 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(51), __esModule: true };

	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {

		
		/* istanbul ignore next */
		(function() {
		  'use strict';
		  var cancel, i, isOldBrowser, lastTime, vendors, vp, w;
		  vendors = ['webkit', 'moz'];
		  i = 0;
		  w = window;
		  while (i < vendors.length && !w.requestAnimationFrame) {
		    vp = vendors[i];
		    w.requestAnimationFrame = w[vp + 'RequestAnimationFrame'];
		    cancel = w[vp + 'CancelAnimationFrame'];
		    w.cancelAnimationFrame = cancel || w[vp + 'CancelRequestAnimationFrame'];
		    ++i;
		  }
		  isOldBrowser = !w.requestAnimationFrame || !w.cancelAnimationFrame;
		  if (/iP(ad|hone|od).*OS 6/.test(w.navigator.userAgent) || isOldBrowser) {
		    lastTime = 0;
		    w.requestAnimationFrame = function(callback) {
		      var nextTime, now;
		      now = Date.now();
		      nextTime = Math.max(lastTime + 16, now);
		      return setTimeout((function() {
		        callback(lastTime = nextTime);
		      }), nextTime - now);
		    };
		    w.cancelAnimationFrame = clearTimeout;
		  }
		})();


	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {

		
		/* istanbul ignore next */
		(function(root) {
		  var offset, ref, ref1;
		  if (root.performance == null) {
		    root.performance = {};
		  }
		  Date.now = Date.now || function() {
		    return (new Date).getTime();
		  };
		  if (root.performance.now == null) {
		    offset = ((ref = root.performance) != null ? (ref1 = ref.timing) != null ? ref1.navigationStart : void 0 : void 0) ? performance.timing.navigationStart : Date.now();
		    return root.performance.now = function() {
		      return Date.now() - offset;
		    };
		  }
		})(window);


	/***/ },
	/* 32 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(1), __esModule: true };

	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(54), __esModule: true };

	/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
		/*!
		  LegoMushroom @legomushroom http://legomushroom.com
		  MIT License 2014
		 */

		/* istanbul ignore next */
		(function() {
		  var Main;
		  Main = (function() {
		    function Main(o) {
		      this.o = o != null ? o : {};
		      if (window.isAnyResizeEventInited) {
		        return;
		      }
		      this.vars();
		      this.redefineProto();
		    }

		    Main.prototype.vars = function() {
		      window.isAnyResizeEventInited = true;
		      this.allowedProtos = [HTMLDivElement, HTMLFormElement, HTMLLinkElement, HTMLBodyElement, HTMLParagraphElement, HTMLFieldSetElement, HTMLLegendElement, HTMLLabelElement, HTMLButtonElement, HTMLUListElement, HTMLOListElement, HTMLLIElement, HTMLHeadingElement, HTMLQuoteElement, HTMLPreElement, HTMLBRElement, HTMLFontElement, HTMLHRElement, HTMLModElement, HTMLParamElement, HTMLMapElement, HTMLTableElement, HTMLTableCaptionElement, HTMLImageElement, HTMLTableCellElement, HTMLSelectElement, HTMLInputElement, HTMLTextAreaElement, HTMLAnchorElement, HTMLObjectElement, HTMLTableColElement, HTMLTableSectionElement, HTMLTableRowElement];
		      return this.timerElements = {
		        img: 1,
		        textarea: 1,
		        input: 1,
		        embed: 1,
		        object: 1,
		        svg: 1,
		        canvas: 1,
		        tr: 1,
		        tbody: 1,
		        thead: 1,
		        tfoot: 1,
		        a: 1,
		        select: 1,
		        option: 1,
		        optgroup: 1,
		        dl: 1,
		        dt: 1,
		        br: 1,
		        basefont: 1,
		        font: 1,
		        col: 1,
		        iframe: 1
		      };
		    };

		    Main.prototype.redefineProto = function() {
		      var i, it, proto, t;
		      it = this;
		      return t = (function() {
		        var j, len, ref, results;
		        ref = this.allowedProtos;
		        results = [];
		        for (i = j = 0, len = ref.length; j < len; i = ++j) {
		          proto = ref[i];
		          if (proto.prototype == null) {
		            continue;
		          }
		          results.push((function(proto) {
		            var listener, remover;
		            listener = proto.prototype.addEventListener || proto.prototype.attachEvent;
		            (function(listener) {
		              var wrappedListener;
		              wrappedListener = function() {
		                var option;
		                if (this !== window || this !== document) {
		                  option = arguments[0] === 'onresize' && !this.isAnyResizeEventInited;
		                  option && it.handleResize({
		                    args: arguments,
		                    that: this
		                  });
		                }
		                return listener.apply(this, arguments);
		              };
		              if (proto.prototype.addEventListener) {
		                return proto.prototype.addEventListener = wrappedListener;
		              } else if (proto.prototype.attachEvent) {
		                return proto.prototype.attachEvent = wrappedListener;
		              }
		            })(listener);
		            remover = proto.prototype.removeEventListener || proto.prototype.detachEvent;
		            return (function(remover) {
		              var wrappedRemover;
		              wrappedRemover = function() {
		                this.isAnyResizeEventInited = false;
		                this.iframe && this.removeChild(this.iframe);
		                return remover.apply(this, arguments);
		              };
		              if (proto.prototype.removeEventListener) {
		                return proto.prototype.removeEventListener = wrappedRemover;
		              } else if (proto.prototype.detachEvent) {
		                return proto.prototype.detachEvent = wrappedListener;
		              }
		            })(remover);
		          })(proto));
		        }
		        return results;
		      }).call(this);
		    };

		    Main.prototype.handleResize = function(args) {
		      var computedStyle, el, iframe, isEmpty, isNoPos, isStatic, ref;
		      el = args.that;
		      if (!this.timerElements[el.tagName.toLowerCase()]) {
		        iframe = document.createElement('iframe');
		        el.appendChild(iframe);
		        iframe.style.width = '100%';
		        iframe.style.height = '100%';
		        iframe.style.position = 'absolute';
		        iframe.style.zIndex = -999;
		        iframe.style.opacity = 0;
		        iframe.style.top = 0;
		        iframe.style.left = 0;
		        computedStyle = window.getComputedStyle ? getComputedStyle(el) : el.currentStyle;
		        isNoPos = el.style.position === '';
		        isStatic = computedStyle.position === 'static' && isNoPos;
		        isEmpty = computedStyle.position === '' && el.style.position === '';
		        if (isStatic || isEmpty) {
		          el.style.position = 'relative';
		        }
		        if ((ref = iframe.contentWindow) != null) {
		          ref.onresize = (function(_this) {
		            return function(e) {
		              return _this.dispatchEvent(el);
		            };
		          })(this);
		        }
		        el.iframe = iframe;
		      } else {
		        this.initTimer(el);
		      }
		      return el.isAnyResizeEventInited = true;
		    };

		    Main.prototype.initTimer = function(el) {
		      var height, width;
		      width = 0;
		      height = 0;
		      return this.interval = setInterval((function(_this) {
		        return function() {
		          var newHeight, newWidth;
		          newWidth = el.offsetWidth;
		          newHeight = el.offsetHeight;
		          if (newWidth !== width || newHeight !== height) {
		            _this.dispatchEvent(el);
		            width = newWidth;
		            return height = newHeight;
		          }
		        };
		      })(this), this.o.interval || 62.5);
		    };

		    Main.prototype.dispatchEvent = function(el) {
		      var e;
		      if (document.createEvent) {
		        e = document.createEvent('HTMLEvents');
		        e.initEvent('onresize', false, false);
		        return el.dispatchEvent(e);
		      } else if (document.createEventObject) {
		        e = document.createEventObject();
		        return el.fireEvent('onresize', e);
		      } else {
		        return false;
		      }
		    };

		    Main.prototype.destroy = function() {
		      var i, it, j, len, proto, ref, results;
		      clearInterval(this.interval);
		      this.interval = null;
		      window.isAnyResizeEventInited = false;
		      it = this;
		      ref = this.allowedProtos;
		      results = [];
		      for (i = j = 0, len = ref.length; j < len; i = ++j) {
		        proto = ref[i];
		        if (proto.prototype == null) {
		          continue;
		        }
		        results.push((function(proto) {
		          var listener;
		          listener = proto.prototype.addEventListener || proto.prototype.attachEvent;
		          if (proto.prototype.addEventListener) {
		            proto.prototype.addEventListener = Element.prototype.addEventListener;
		          } else if (proto.prototype.attachEvent) {
		            proto.prototype.attachEvent = Element.prototype.attachEvent;
		          }
		          if (proto.prototype.removeEventListener) {
		            return proto.prototype.removeEventListener = Element.prototype.removeEventListener;
		          } else if (proto.prototype.detachEvent) {
		            return proto.prototype.detachEvent = Element.prototype.detachEvent;
		          }
		        })(proto));
		      }
		      return results;
		    };

		    return Main;

		  })();
		  if (true) {
		    return !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		      return new Main;
		    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		  } else if ((typeof module === "object") && (typeof module.exports === "object")) {
		    return module.exports = new Main;
		  } else {
		    if (typeof window !== "undefined" && window !== null) {
		      window.AnyResizeEvent = Main;
		    }
		    return typeof window !== "undefined" && window !== null ? window.anyResizeEvent = new Main : void 0;
		  }
		})();


	/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {

		
		/* istanbul ignore next */
		var Bit, Rect,
		  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
		  hasProp = {}.hasOwnProperty;

		Bit = __webpack_require__(26)["default"] || __webpack_require__(26);

		Rect = (function(superClass) {
		  extend(Rect, superClass);

		  function Rect() {
		    return Rect.__super__.constructor.apply(this, arguments);
		  }

		  Rect.prototype._declareDefaults = function() {
		    Rect.__super__._declareDefaults.apply(this, arguments);
		    this._defaults.tag = 'rect';
		    this._defaults.rx = 0;
		    return this._defaults.ry = 0;
		  };

		  Rect.prototype._draw = function() {
		    var p, radiusX, radiusY;
		    Rect.__super__._draw.apply(this, arguments);
		    p = this._props;
		    radiusX = p.radiusX != null ? p.radiusX : p.radius;
		    radiusY = p.radiusY != null ? p.radiusY : p.radius;
		    this._setAttrIfChanged('width', 2 * radiusX);
		    this._setAttrIfChanged('height', 2 * radiusY);
		    this._setAttrIfChanged('x', (p.width / 2) - radiusX);
		    this._setAttrIfChanged('y', (p.height / 2) - radiusY);
		    this._setAttrIfChanged('rx', p.rx);
		    return this._setAttrIfChanged('ry', p.ry);
		  };

		  Rect.prototype._getLength = function() {
		    var radiusX, radiusY;
		    radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
		    radiusY = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
		    return 2 * (2 * radiusX + 2 * radiusY);
		  };

		  return Rect;

		})(Bit);

		module.exports = Rect;


	/***/ },
	/* 36 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(24);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(25);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _bit = __webpack_require__(26);

		var _bit2 = _interopRequireDefault(_bit);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var Custom = function (_Bit) {
		  (0, _inherits3.default)(Custom, _Bit);

		  function Custom() {
		    (0, _classCallCheck3.default)(this, Custom);
		    return (0, _possibleConstructorReturn3.default)(this, _Bit.apply(this, arguments));
		  }

		  /*
		    Method to declare module's defaults.
		    @private
		    @overrides @ Bit
		  */

		  Custom.prototype._declareDefaults = function _declareDefaults() {
		    _Bit.prototype._declareDefaults.call(this);

		    this._defaults.tag = 'path';
		    this._defaults.parent = null;

		    // remove `stroke-width` from `_drawMap`
		    // because we need to recal strokeWidth size regarding scale
		    for (var i = 0; i < this._drawMap.length; i++) {
		      if (this._drawMap[i] === 'stroke-width') {
		        this._drawMap.splice(i, 1);
		      }
		    }
		  };
		  /*
		    Method to get shape to set on module's path.
		    @public
		    @returns {String} Empty string.
		  */


		  Custom.prototype.getShape = function getShape() {
		    return '';
		  };
		  /*
		    Method to get shape perimeter length.
		    @public
		    @returns {Number} Default length string.
		  */


		  Custom.prototype.getLength = function getLength() {
		    return 100;
		  };
		  /*
		    Method to draw the shape.
		    Called on every frame.
		    @private
		    @overrides @ Bit
		  */


		  Custom.prototype._draw = function _draw() {
		    var p = this._props,
		        state = this._state,
		        radiusXChange = state['radiusX'] !== p.radiusX,
		        radiusYChange = state['radiusY'] !== p.radiusY,
		        radiusChange = state['radius'] !== p.radius;

		    // update transform only if one of radiuses changed
		    if (radiusXChange || radiusYChange || radiusChange) {
		      this.el.setAttribute('transform', this._getScale());
		      state['radiusX'] = p.radiusX;
		      state['radiusY'] = p.radiusY;
		      state['radius'] = p.radius;
		    }

		    this._setAttrIfChanged('stroke-width', p['stroke-width'] / p.maxScale);

		    _Bit.prototype._draw.call(this);
		  };
		  /*
		    Method for initial render of the shape.
		    @private
		    @overrides @ Bit
		  */


		  Custom.prototype._render = function _render() {
		    if (this._isRendered) {
		      return;
		    }
		    this._isRendered = true;

		    this._length = this.getLength();

		    var p = this._props;
		    p.parent.innerHTML = '<svg id="js-mojs-shape-canvas" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><g id="js-mojs-shape-el">' + this.getShape() + '</g></svg>';

		    this._canvas = p.parent.querySelector('#js-mojs-shape-canvas');
		    this.el = p.parent.querySelector('#js-mojs-shape-el');
		    this._setCanvasSize();
		  };
		  /*
		    Method to get scales for the shape.
		    @private
		    @mutates @props
		  */


		  Custom.prototype._getScale = function _getScale() {
		    var p = this._props,
		        radiusX = p.radiusX ? p.radiusX : p.radius,
		        radiusY = p.radiusY ? p.radiusY : p.radius;

		    p.scaleX = 2 * radiusX / 100;
		    p.scaleY = 2 * radiusY / 100;
		    p.maxScale = Math.max(p.scaleX, p.scaleY);

		    p.shiftX = p.width / 2 - 50 * p.scaleX;
		    p.shiftY = p.height / 2 - 50 * p.scaleY;

		    var translate = 'translate(' + p.shiftX + ', ' + p.shiftY + ')';
		    return translate + ' scale(' + p.scaleX + ', ' + p.scaleY + ')';
		  };
		  /*
		    Method to length of the shape.
		    @private
		    @returns {Number} Length of the shape.
		  */


		  Custom.prototype._getLength = function _getLength() {
		    return this._length;
		  };

		  return Custom;
		}(_bit2.default);

		exports.default = Custom;

	/***/ },
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {

		
		/* istanbul ignore next */
		var Bit, Circle,
		  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
		  hasProp = {}.hasOwnProperty;

		Bit = __webpack_require__(26)["default"] || __webpack_require__(26);

		Circle = (function(superClass) {
		  extend(Circle, superClass);

		  function Circle() {
		    return Circle.__super__.constructor.apply(this, arguments);
		  }

		  Circle.prototype._declareDefaults = function() {
		    Circle.__super__._declareDefaults.apply(this, arguments);
		    return this._defaults.shape = 'ellipse';
		  };

		  Circle.prototype._draw = function() {
		    var rx, ry;
		    rx = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
		    ry = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
		    this._setAttrIfChanged('rx', rx);
		    this._setAttrIfChanged('ry', ry);
		    this._setAttrIfChanged('cx', this._props.width / 2);
		    this._setAttrIfChanged('cy', this._props.height / 2);
		    return Circle.__super__._draw.apply(this, arguments);
		  };

		  Circle.prototype._getLength = function() {
		    var radiusX, radiusY;
		    radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
		    radiusY = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
		    return 2 * Math.PI * Math.sqrt((radiusX * radiusX + radiusY * radiusY) / 2);
		  };

		  return Circle;

		})(Bit);

		module.exports = Circle;


	/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {

		
		/* istanbul ignore next */
		var Bit, Line,
		  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
		  hasProp = {}.hasOwnProperty;

		Bit = __webpack_require__(26)["default"] || __webpack_require__(26);

		Line = (function(superClass) {
		  extend(Line, superClass);

		  function Line() {
		    return Line.__super__.constructor.apply(this, arguments);
		  }

		  Line.prototype._declareDefaults = function() {
		    Line.__super__._declareDefaults.apply(this, arguments);
		    return this._defaults.tag = 'line';
		  };

		  Line.prototype._draw = function() {
		    var radiusX, x, y;
		    radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
		    x = this._props.width / 2;
		    y = this._props.height / 2;
		    this._setAttrIfChanged('x1', x - radiusX);
		    this._setAttrIfChanged('x2', x + radiusX);
		    this._setAttrIfChanged('y1', y);
		    this._setAttrIfChanged('y2', y);
		    return Line.__super__._draw.apply(this, arguments);
		  };

		  return Line;

		})(Bit);

		module.exports = Line;


	/***/ },
	/* 39 */
	/***/ function(module, exports, __webpack_require__) {

		
		/* istanbul ignore next */
		var Bit, Zigzag,
		  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
		  hasProp = {}.hasOwnProperty;

		Bit = __webpack_require__(26)["default"] || __webpack_require__(26);

		Zigzag = (function(superClass) {
		  extend(Zigzag, superClass);

		  function Zigzag() {
		    return Zigzag.__super__.constructor.apply(this, arguments);
		  }

		  Zigzag.prototype._declareDefaults = function() {
		    Zigzag.__super__._declareDefaults.apply(this, arguments);
		    this._defaults.tag = 'path';
		    return this._defaults.points = 3;
		  };

		  Zigzag.prototype._draw = function() {
		    var currentX, currentY, delta, i, isPoints, isRadiusX, isRadiusY, j, length, p, points, radiusX, radiusY, ref, stepX, x, y, yFlip;
		    Zigzag.__super__._draw.apply(this, arguments);
		    p = this._props;
		    if (!this._props.points) {
		      return;
		    }
		    radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
		    radiusY = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
		    isRadiusX = radiusX === this._prevRadiusX;
		    isRadiusY = radiusY === this._prevRadiusY;
		    isPoints = p.points === this._prevPoints;
		    if (isRadiusX && isRadiusY && isPoints) {
		      return;
		    }
		    x = p.width / 2;
		    y = p.height / 2;
		    currentX = x - radiusX;
		    currentY = y;
		    stepX = (2 * radiusX) / (p.points - 1);
		    yFlip = -1;
		    delta = Math.sqrt(stepX * stepX + radiusY * radiusY);
		    length = -delta;
		    points = "M" + currentX + ", " + y + " ";
		    for (i = j = 0, ref = p.points; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
		      points += "L" + currentX + ", " + currentY + " ";
		      currentX += stepX;
		      length += delta;
		      currentY = yFlip === -1 ? y - radiusY : y;
		      yFlip = -yFlip;
		    }
		    this._length = length;
		    this.el.setAttribute('d', points);
		    this._prevPoints = p.points;
		    this._prevRadiusX = radiusX;
		    return this._prevRadiusY = radiusY;
		  };

		  Zigzag.prototype._getLength = function() {
		    return this._length;
		  };

		  return Zigzag;

		})(Bit);

		module.exports = Zigzag;


	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {

		
		/* istanbul ignore next */
		var Bit, Polygon, h,
		  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
		  hasProp = {}.hasOwnProperty;

		Bit = __webpack_require__(26)["default"] || __webpack_require__(26);

		h = __webpack_require__(19);

		Polygon = (function(superClass) {
		  extend(Polygon, superClass);

		  function Polygon() {
		    return Polygon.__super__.constructor.apply(this, arguments);
		  }


		  /*
		    Method to declare defaults.
		    @overrides @ Bit
		   */

		  Polygon.prototype._declareDefaults = function() {
		    Polygon.__super__._declareDefaults.apply(this, arguments);
		    this._defaults.tag = 'path';
		    return this._defaults.points = 3;
		  };


		  /*
		    Method to draw the shape.
		    @overrides @ Bit
		   */

		  Polygon.prototype._draw = function() {
		    var char, d, i, isPoints, isRadiusX, isRadiusY, j, k, len, p, point, radiusX, radiusY, ref, ref1, step;
		    p = this._props;
		    radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
		    radiusY = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
		    isRadiusX = radiusX === this._prevRadiusX;
		    isRadiusY = radiusY === this._prevRadiusY;
		    isPoints = p.points === this._prevPoints;
		    if (!(isRadiusX && isRadiusY && isPoints)) {
		      step = 360 / this._props.points;
		      if (this._radialPoints == null) {
		        this._radialPoints = [];
		      } else {
		        this._radialPoints.length = 0;
		      }
		      for (i = j = 0, ref = this._props.points; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
		        this._radialPoints.push(h.getRadialPoint({
		          radius: this._props.radius,
		          radiusX: this._props.radiusX,
		          radiusY: this._props.radiusY,
		          angle: i * step,
		          center: {
		            x: p.width / 2,
		            y: p.height / 2
		          }
		        }));
		      }
		      d = '';
		      ref1 = this._radialPoints;
		      for (i = k = 0, len = ref1.length; k < len; i = ++k) {
		        point = ref1[i];
		        char = i === 0 ? 'M' : 'L';
		        d += "" + char + (point.x.toFixed(4)) + "," + (point.y.toFixed(4)) + " ";
		      }
		      this._prevPoints = p.points;
		      this._prevRadiusX = radiusX;
		      this._prevRadiusY = radiusY;
		      this.el.setAttribute('d', (d += 'z'));
		    }
		    return Polygon.__super__._draw.apply(this, arguments);
		  };


		  /*
		    Method to get length of the shape.
		    @overrides @ Bit
		   */

		  Polygon.prototype._getLength = function() {
		    return this._getPointsPerimiter(this._radialPoints);
		  };

		  return Polygon;

		})(Bit);

		module.exports = Polygon;


	/***/ },
	/* 41 */
	/***/ function(module, exports, __webpack_require__) {

		
		/* istanbul ignore next */
		var Bit, Cross,
		  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
		  hasProp = {}.hasOwnProperty;

		Bit = __webpack_require__(26)["default"] || __webpack_require__(26);

		Cross = (function(superClass) {
		  extend(Cross, superClass);

		  function Cross() {
		    return Cross.__super__.constructor.apply(this, arguments);
		  }

		  Cross.prototype._declareDefaults = function() {
		    Cross.__super__._declareDefaults.apply(this, arguments);
		    return this._defaults.tag = 'path';
		  };

		  Cross.prototype._draw = function() {
		    var d, isRadiusX, isRadiusY, line1, line2, p, radiusX, radiusY, x, x1, x2, y, y1, y2;
		    Cross.__super__._draw.apply(this, arguments);
		    p = this._props;
		    radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
		    radiusY = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
		    isRadiusX = radiusX === this._prevRadiusX;
		    isRadiusY = radiusY === this._prevRadiusY;
		    if (isRadiusX && isRadiusY) {
		      return;
		    }
		    x = this._props.width / 2;
		    y = this._props.height / 2;
		    x1 = x - radiusX;
		    x2 = x + radiusX;
		    line1 = "M" + x1 + "," + y + " L" + x2 + "," + y;
		    y1 = y - radiusY;
		    y2 = y + radiusY;
		    line2 = "M" + x + "," + y1 + " L" + x + "," + y2;
		    d = line1 + " " + line2;
		    this.el.setAttribute('d', d);
		    this._prevRadiusX = radiusX;
		    return this._prevRadiusY = radiusY;
		  };

		  Cross.prototype._getLength = function() {
		    var radiusX, radiusY;
		    radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
		    radiusY = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
		    return 2 * (radiusX + radiusY);
		  };

		  return Cross;

		})(Bit);

		module.exports = Cross;


	/***/ },
	/* 42 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _classCallCheck2 = __webpack_require__(23);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _possibleConstructorReturn2 = __webpack_require__(24);

		var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

		var _inherits2 = __webpack_require__(25);

		var _inherits3 = _interopRequireDefault(_inherits2);

		var _bit = __webpack_require__(26);

		var _bit2 = _interopRequireDefault(_bit);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var Curve = function (_Bit) {
		  (0, _inherits3.default)(Curve, _Bit);

		  function Curve() {
		    (0, _classCallCheck3.default)(this, Curve);
		    return (0, _possibleConstructorReturn3.default)(this, _Bit.apply(this, arguments));
		  }

		  /*
		    Method to declare module's defaults.
		    @private
		    @overrides @ Bit
		  */

		  Curve.prototype._declareDefaults = function _declareDefaults() {
		    _Bit.prototype._declareDefaults.call(this);
		    this._defaults.tag = 'path';
		  };
		  /*
		    Method to draw the module.
		    @private
		    @overrides @ Bit
		  */


		  Curve.prototype._draw = function _draw() {
		    _Bit.prototype._draw.call(this);
		    var p = this._props;

		    var radiusX = p.radiusX != null ? p.radiusX : p.radius;
		    var radiusY = p.radiusY != null ? p.radiusY : p.radius;

		    var isRadiusX = radiusX === this._prevRadiusX;
		    var isRadiusY = radiusY === this._prevRadiusY;
		    var isPoints = p.points === this._prevPoints;
		    // skip if nothing changed
		    if (isRadiusX && isRadiusY && isPoints) {
		      return;
		    }

		    var x = p.width / 2;
		    var y = p.height / 2;
		    var x1 = x - radiusX;
		    var x2 = x + radiusX;

		    var d = 'M' + x1 + ' ' + y + ' Q ' + x + ' ' + (y - 2 * radiusY) + ' ' + x2 + ' ' + y;

		    // set the `d` attribute and save it to `_prevD`
		    this.el.setAttribute('d', d);
		    // save the properties
		    this._prevPoints = p.points;
		    this._prevRadiusX = radiusX;
		    this._prevRadiusY = radiusY;
		  };

		  Curve.prototype._getLength = function _getLength() {
		    var p = this._props;

		    var radiusX = p.radiusX != null ? p.radiusX : p.radius;
		    var radiusY = p.radiusY != null ? p.radiusY : p.radius;

		    var dRadius = radiusX + radiusY;
		    var sqrt = Math.sqrt((3 * radiusX + radiusY) * (radiusX + 3 * radiusY));

		    return .5 * Math.PI * (3 * dRadius - sqrt);
		  };

		  return Curve;
		}(_bit2.default); // istanbul ignore next


		exports.default = Curve;

	/***/ },
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {

		
		/* istanbul ignore next */
		var Bit, Equal,
		  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
		  hasProp = {}.hasOwnProperty;

		Bit = __webpack_require__(26)["default"] || __webpack_require__(26);

		Equal = (function(superClass) {
		  extend(Equal, superClass);

		  function Equal() {
		    return Equal.__super__.constructor.apply(this, arguments);
		  }

		  Equal.prototype._declareDefaults = function() {
		    Equal.__super__._declareDefaults.apply(this, arguments);
		    this._defaults.tag = 'path';
		    return this._defaults.points = 2;
		  };

		  Equal.prototype._draw = function() {
		    var d, i, isPoints, isRadiusX, isRadiusY, j, p, radiusX, radiusY, ref, x, x1, x2, y, yStart, yStep;
		    Equal.__super__._draw.apply(this, arguments);
		    p = this._props;
		    if (!this._props.points) {
		      return;
		    }
		    radiusX = this._props.radiusX != null ? this._props.radiusX : this._props.radius;
		    radiusY = this._props.radiusY != null ? this._props.radiusY : this._props.radius;
		    isRadiusX = radiusX === this._prevRadiusX;
		    isRadiusY = radiusY === this._prevRadiusY;
		    isPoints = p.points === this._prevPoints;
		    if (isRadiusX && isRadiusY && isPoints) {
		      return;
		    }
		    x = this._props.width / 2;
		    y = this._props.height / 2;
		    x1 = x - radiusX;
		    x2 = x + radiusX;
		    d = '';
		    yStep = 2 * radiusY / (this._props.points - 1);
		    yStart = y - radiusY;
		    for (i = j = 0, ref = this._props.points; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
		      y = "" + (i * yStep + yStart);
		      d += "M" + x1 + ", " + y + " L" + x2 + ", " + y + " ";
		    }
		    this.el.setAttribute('d', d);
		    this._prevPoints = p.points;
		    this._prevRadiusX = radiusX;
		    return this._prevRadiusY = radiusY;
		  };

		  Equal.prototype._getLength = function() {
		    return 2 * (this._props.radiusX != null ? this._props.radiusX : this._props.radius);
		  };

		  return Equal;

		})(Bit);

		module.exports = Equal;


	/***/ },
	/* 44 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global) {var BezierEasing, bezierEasing, h,
		  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

		h = __webpack_require__(19);


		/**
		 * Copyright (c) 2014 Gaëtan Renaudeau http://goo.gl/El3k7u
		 * Adopted from https://github.com/gre/bezier-easing
		 */

		BezierEasing = (function() {
		  function BezierEasing(o) {
		    this.vars();
		    return this.generate;
		  }

		  BezierEasing.prototype.vars = function() {
		    return this.generate = h.bind(this.generate, this);
		  };

		  BezierEasing.prototype.generate = function(mX1, mY1, mX2, mY2) {
		    var A, B, C, NEWTON_ITERATIONS, NEWTON_MIN_SLOPE, SUBDIVISION_MAX_ITERATIONS, SUBDIVISION_PRECISION, _precomputed, arg, binarySubdivide, calcBezier, calcSampleValues, f, float32ArraySupported, getSlope, getTForX, i, j, kSampleStepSize, kSplineTableSize, mSampleValues, newtonRaphsonIterate, precompute, str;
		    if (arguments.length < 4) {
		      return this.error('Bezier function expects 4 arguments');
		    }
		    for (i = j = 0; j < 4; i = ++j) {
		      arg = arguments[i];
		      if (typeof arg !== "number" || isNaN(arg) || !isFinite(arg)) {
		        return this.error('Bezier function expects 4 arguments');
		      }
		    }
		    if (mX1 < 0 || mX1 > 1 || mX2 < 0 || mX2 > 1) {
		      return this.error('Bezier x values should be > 0 and < 1');
		    }
		    NEWTON_ITERATIONS = 4;
		    NEWTON_MIN_SLOPE = 0.001;
		    SUBDIVISION_PRECISION = 0.0000001;
		    SUBDIVISION_MAX_ITERATIONS = 10;
		    kSplineTableSize = 11;
		    kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
		    float32ArraySupported = indexOf.call(global, 'Float32Array') >= 0;
		    A = function(aA1, aA2) {
		      return 1.0 - 3.0 * aA2 + 3.0 * aA1;
		    };
		    B = function(aA1, aA2) {
		      return 3.0 * aA2 - 6.0 * aA1;
		    };
		    C = function(aA1) {
		      return 3.0 * aA1;
		    };
		    calcBezier = function(aT, aA1, aA2) {
		      return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
		    };
		    getSlope = function(aT, aA1, aA2) {
		      return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
		    };
		    newtonRaphsonIterate = function(aX, aGuessT) {
		      var currentSlope, currentX;
		      i = 0;
		      while (i < NEWTON_ITERATIONS) {
		        currentSlope = getSlope(aGuessT, mX1, mX2);

		        /* istanbul ignore if */
		        if (currentSlope === 0.0) {
		          return aGuessT;
		        }
		        currentX = calcBezier(aGuessT, mX1, mX2) - aX;
		        aGuessT -= currentX / currentSlope;
		        ++i;
		      }
		      return aGuessT;
		    };
		    calcSampleValues = function() {
		      i = 0;
		      while (i < kSplineTableSize) {
		        mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
		        ++i;
		      }
		    };

		    /* istanbul ignore next */
		    binarySubdivide = function(aX, aA, aB) {
		      var currentT, currentX, isBig;
		      currentX = void 0;
		      currentT = void 0;
		      i = 0;
		      while (true) {
		        currentT = aA + (aB - aA) / 2.0;
		        currentX = calcBezier(currentT, mX1, mX2) - aX;
		        if (currentX > 0.0) {
		          aB = currentT;
		        } else {
		          aA = currentT;
		        }
		        isBig = Math.abs(currentX) > SUBDIVISION_PRECISION;
		        if (!(isBig && ++i < SUBDIVISION_MAX_ITERATIONS)) {
		          break;
		        }
		      }
		      return currentT;
		    };
		    getTForX = function(aX) {
		      var currentSample, delta, dist, guessForT, initialSlope, intervalStart, lastSample;
		      intervalStart = 0.0;
		      currentSample = 1;
		      lastSample = kSplineTableSize - 1;
		      while (currentSample !== lastSample && mSampleValues[currentSample] <= aX) {
		        intervalStart += kSampleStepSize;
		        ++currentSample;
		      }
		      --currentSample;
		      delta = mSampleValues[currentSample + 1] - mSampleValues[currentSample];
		      dist = (aX - mSampleValues[currentSample]) / delta;
		      guessForT = intervalStart + dist * kSampleStepSize;
		      initialSlope = getSlope(guessForT, mX1, mX2);
		      if (initialSlope >= NEWTON_MIN_SLOPE) {
		        return newtonRaphsonIterate(aX, guessForT);
		      } else {

		        /* istanbul ignore next */
		        if (initialSlope === 0.0) {
		          return guessForT;
		        } else {
		          return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
		        }
		      }
		    };
		    precompute = function() {
		      var _precomputed;
		      _precomputed = true;
		      if (mX1 !== mY1 || mX2 !== mY2) {
		        return calcSampleValues();
		      }
		    };
		    mSampleValues = !float32ArraySupported ? new Array(kSplineTableSize) : new Float32Array(kSplineTableSize);
		    _precomputed = false;
		    f = function(aX) {
		      if (!_precomputed) {
		        precompute();
		      }
		      if (mX1 === mY1 && mX2 === mY2) {
		        return aX;
		      }
		      if (aX === 0) {
		        return 0;
		      }
		      if (aX === 1) {
		        return 1;
		      }
		      return calcBezier(getTForX(aX), mY1, mY2);
		    };
		    str = "bezier(" + [mX1, mY1, mX2, mY2] + ")";
		    f.toStr = function() {
		      return str;
		    };
		    return f;
		  };

		  BezierEasing.prototype.error = function(msg) {
		    return h.error(msg);
		  };

		  return BezierEasing;

		})();

		bezierEasing = new BezierEasing;

		module.exports = bezierEasing;

		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 45 */
	/***/ function(module, exports, __webpack_require__) {

		var PathEasing, h;

		h = __webpack_require__(19);

		PathEasing = (function() {
		  PathEasing.prototype._vars = function() {
		    this._precompute = h.clamp(this.o.precompute || 1450, 100, 10000);
		    this._step = 1 / this._precompute;
		    this._rect = this.o.rect || 100;
		    this._approximateMax = this.o.approximateMax || 5;
		    this._eps = this.o.eps || 0.001;
		    return this._boundsPrevProgress = -1;
		  };

		  function PathEasing(path, o1) {
		    this.o = o1 != null ? o1 : {};
		    if (path === 'creator') {
		      return;
		    }
		    this.path = h.parsePath(path);
		    if (this.path == null) {
		      return h.error('Error while parsing the path');
		    }
		    this._vars();
		    this.path.setAttribute('d', this._normalizePath(this.path.getAttribute('d')));
		    this.pathLength = this.path.getTotalLength();
		    this.sample = h.bind(this.sample, this);
		    this._hardSample = h.bind(this._hardSample, this);
		    this._preSample();
		    this;
		  }

		  PathEasing.prototype._preSample = function() {
		    var i, j, length, point, progress, ref, results;
		    this._samples = [];
		    results = [];
		    for (i = j = 0, ref = this._precompute; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
		      progress = i * this._step;
		      length = this.pathLength * progress;
		      point = this.path.getPointAtLength(length);
		      results.push(this._samples[i] = {
		        point: point,
		        length: length,
		        progress: progress
		      });
		    }
		    return results;
		  };

		  PathEasing.prototype._findBounds = function(array, p) {
		    var buffer, direction, end, i, j, len, loopEnd, pointP, pointX, ref, ref1, start, value;
		    if (p === this._boundsPrevProgress) {
		      return this._prevBounds;
		    }
		    if (this._boundsStartIndex == null) {
		      this._boundsStartIndex = 0;
		    }
		    len = array.length;
		    if (this._boundsPrevProgress > p) {
		      loopEnd = 0;
		      direction = 'reverse';
		    } else {
		      loopEnd = len;
		      direction = 'forward';
		    }
		    if (direction === 'forward') {
		      start = array[0];
		      end = array[array.length - 1];
		    } else {
		      start = array[array.length - 1];
		      end = array[0];
		    }
		    for (i = j = ref = this._boundsStartIndex, ref1 = loopEnd; ref <= ref1 ? j < ref1 : j > ref1; i = ref <= ref1 ? ++j : --j) {
		      value = array[i];
		      pointX = value.point.x / this._rect;
		      pointP = p;
		      if (direction === 'reverse') {
		        buffer = pointX;
		        pointX = pointP;
		        pointP = buffer;
		      }
		      if (pointX < pointP) {
		        start = value;
		        this._boundsStartIndex = i;
		      } else {
		        end = value;
		        break;
		      }
		    }
		    this._boundsPrevProgress = p;
		    return this._prevBounds = {
		      start: start,
		      end: end
		    };
		  };

		  PathEasing.prototype.sample = function(p) {
		    var bounds, res;
		    p = h.clamp(p, 0, 1);
		    bounds = this._findBounds(this._samples, p);
		    res = this._checkIfBoundsCloseEnough(p, bounds);
		    if (res != null) {
		      return res;
		    }
		    return this._findApproximate(p, bounds.start, bounds.end);
		  };

		  PathEasing.prototype._checkIfBoundsCloseEnough = function(p, bounds) {
		    var point, y;
		    point = void 0;
		    y = this._checkIfPointCloseEnough(p, bounds.start.point);
		    if (y != null) {
		      return y;
		    }
		    return this._checkIfPointCloseEnough(p, bounds.end.point);
		  };

		  PathEasing.prototype._checkIfPointCloseEnough = function(p, point) {
		    if (h.closeEnough(p, point.x / this._rect, this._eps)) {
		      return this._resolveY(point);
		    }
		  };

		  PathEasing.prototype._approximate = function(start, end, p) {
		    var deltaP, percentP;
		    deltaP = end.point.x - start.point.x;
		    percentP = (p - (start.point.x / this._rect)) / (deltaP / this._rect);
		    return start.length + percentP * (end.length - start.length);
		  };

		  PathEasing.prototype._findApproximate = function(p, start, end, approximateMax) {
		    var approximation, args, newPoint, point, x;
		    if (approximateMax == null) {
		      approximateMax = this._approximateMax;
		    }
		    approximation = this._approximate(start, end, p);
		    point = this.path.getPointAtLength(approximation);
		    x = point.x / this._rect;
		    if (h.closeEnough(p, x, this._eps)) {
		      return this._resolveY(point);
		    } else {
		      if (--approximateMax < 1) {
		        return this._resolveY(point);
		      }
		      newPoint = {
		        point: point,
		        length: approximation
		      };
		      args = p < x ? [p, start, newPoint, approximateMax] : [p, newPoint, end, approximateMax];
		      return this._findApproximate.apply(this, args);
		    }
		  };

		  PathEasing.prototype._resolveY = function(point) {
		    return 1 - (point.y / this._rect);
		  };

		  PathEasing.prototype._normalizePath = function(path) {
		    var commands, endIndex, normalizedPath, points, startIndex, svgCommandsRegexp;
		    svgCommandsRegexp = /[M|L|H|V|C|S|Q|T|A]/gim;
		    points = path.split(svgCommandsRegexp);
		    points.shift();
		    commands = path.match(svgCommandsRegexp);
		    startIndex = 0;
		    points[startIndex] = this._normalizeSegment(points[startIndex]);
		    endIndex = points.length - 1;
		    points[endIndex] = this._normalizeSegment(points[endIndex], this._rect || 100);
		    return normalizedPath = this._joinNormalizedPath(commands, points);
		  };

		  PathEasing.prototype._joinNormalizedPath = function(commands, points) {
		    var command, i, j, len1, normalizedPath, space;
		    normalizedPath = '';
		    for (i = j = 0, len1 = commands.length; j < len1; i = ++j) {
		      command = commands[i];
		      space = i === 0 ? '' : ' ';
		      normalizedPath += "" + space + command + (points[i].trim());
		    }
		    return normalizedPath;
		  };

		  PathEasing.prototype._normalizeSegment = function(segment, value) {
		    var i, j, lastPoint, len1, nRgx, pairs, parsedX, point, space, x;
		    if (value == null) {
		      value = 0;
		    }
		    segment = segment.trim();
		    nRgx = /(-|\+)?((\d+(\.(\d|\e(-|\+)?)+)?)|(\.?(\d|\e|(\-|\+))+))/gim;
		    pairs = this._getSegmentPairs(segment.match(nRgx));
		    lastPoint = pairs[pairs.length - 1];
		    x = lastPoint[0];
		    parsedX = Number(x);
		    if (parsedX !== value) {
		      segment = '';
		      lastPoint[0] = value;
		      for (i = j = 0, len1 = pairs.length; j < len1; i = ++j) {
		        point = pairs[i];
		        space = i === 0 ? '' : ' ';
		        segment += "" + space + point[0] + "," + point[1];
		      }
		    }
		    return segment;
		  };

		  PathEasing.prototype._getSegmentPairs = function(array) {
		    var i, j, len1, newArray, pair, value;
		    if (array.length % 2 !== 0) {
		      h.error('Failed to parse the path - segment pairs are not even.', array);
		    }
		    newArray = [];
		    for (i = j = 0, len1 = array.length; j < len1; i = j += 2) {
		      value = array[i];
		      pair = [array[i], array[i + 1]];
		      newArray.push(pair);
		    }
		    return newArray;
		  };

		  PathEasing.prototype.create = function(path, o) {
		    var handler;
		    handler = new PathEasing(path, o);
		    handler.sample.path = handler.path;
		    return handler.sample;
		  };

		  return PathEasing;

		})();

		module.exports = PathEasing;


	/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {

		var create, easing, getNearest, mix, parseIfEasing, sort,
		  slice = [].slice;

		easing = null;

		parseIfEasing = function(item) {
		  if (typeof item.value === 'number') {
		    return item.value;
		  } else {
		    return easing.parseEasing(item.value);
		  }
		};

		sort = function(a, b) {
		  var returnValue;
		  a.value = parseIfEasing(a);
		  b.value = parseIfEasing(b);
		  returnValue = 0;
		  a.to < b.to && (returnValue = -1);
		  a.to > b.to && (returnValue = 1);
		  return returnValue;
		};

		getNearest = function(array, progress) {
		  var i, index, j, len, value;
		  index = 0;
		  for (i = j = 0, len = array.length; j < len; i = ++j) {
		    value = array[i];
		    index = i;
		    if (value.to > progress) {
		      break;
		    }
		  }
		  return index;
		};

		mix = function() {
		  var args;
		  args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
		  if (args.length > 1) {
		    args = args.sort(sort);
		  } else {
		    args[0].value = parseIfEasing(args[0]);
		  }
		  return function(progress) {
		    var index, value;
		    index = getNearest(args, progress);
		    if (index !== -1) {
		      value = args[index].value;
		      if (index === args.length - 1 && progress > args[index].to) {
		        return 1;
		      }
		      if (typeof value === 'function') {
		        return value(progress);
		      } else {
		        return value;
		      }
		    }
		  };
		};

		create = function(e) {
		  easing = e;
		  return mix;
		};

		module.exports = create;


	/***/ },
	/* 47 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		exports.__esModule = true;

		var _typeof2 = __webpack_require__(18);

		var _typeof3 = _interopRequireDefault(_typeof2);

		var _h = __webpack_require__(19);

		var _h2 = _interopRequireDefault(_h);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		/*
		  Method to bootstrap approximation function.
		  @private
		  @param   {Object} Samples Object.
		  @returns {Function} Approximate function.
		*/
		var _proximate = function _proximate(samples) {
		  var n = samples.base,
		      samplesAmount = Math.pow(10, n),
		      samplesStep = 1 / samplesAmount;

		  function RoundNumber(input, numberDecimals) {
		    numberDecimals = +numberDecimals || 0; // +var magic!

		    var multiplyer = Math.pow(10.0, numberDecimals);

		    return Math.round(input * multiplyer) / multiplyer;
		  }

		  var cached = function cached(p) {
		    var newKey = RoundNumber(p, n),
		        sample = samples[newKey.toString()];

		    if (Math.abs(p - newKey) < samplesStep) {
		      return sample;
		    }

		    if (p > newKey) {
		      var nextIndex = newKey + samplesStep;
		      var nextValue = samples[nextIndex];
		    } else {
		      var nextIndex = newKey - samplesStep;
		      var nextValue = samples[nextIndex];
		    }

		    var dLength = nextIndex - newKey;
		    var dValue = nextValue - sample;
		    if (dValue < samplesStep) {
		      return sample;
		    }

		    var progressScale = (p - newKey) / dLength;
		    var coef = nextValue > sample ? -1 : 1;
		    var scaledDifference = coef * progressScale * dValue;

		    return sample + scaledDifference;
		  };

		  cached.getSamples = function () {
		    return samples;
		  };

		  return cached;
		};
		/*
		    Method to take samples of the function and call the _proximate
		    method with the dunction and samples. Or if samples passed - pipe
		    them to the _proximate method without sampling.
		    @private
		    @param {Function} Function to sample.
		    @param {Number, Object, String} Precision or precomputed samples.
		  */
		var _sample = function _sample(fn) {
		  var n = arguments.length <= 1 || arguments[1] === undefined ? 4 : arguments[1];


		  var nType = typeof n === 'undefined' ? 'undefined' : (0, _typeof3.default)(n);

		  var samples = {};
		  if (nType === 'number') {
		    var p = 0,
		        samplesCount = Math.pow(10, n),
		        step = 1 / samplesCount;

		    samples[0] = fn(0);
		    for (var i = 0; i < samplesCount - 1; i++) {
		      p += step;

		      var index = parseFloat(p.toFixed(n));
		      samples[index] = fn(p);
		    }
		    samples[1] = fn(1);

		    samples.base = n;
		  } else if (nType === 'object') {
		    samples = n;
		  } else if (nType === 'string') {
		    samples = JSON.parse(n);
		  }

		  return Approximate._sample._proximate(samples);
		};

		var Approximate = { _sample: _sample, _proximate: _proximate };
		Approximate._sample._proximate = Approximate._proximate;

		exports.default = Approximate._sample;

	/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(55), __esModule: true };

	/***/ },
	/* 49 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(56), __esModule: true };

	/***/ },
	/* 50 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(57), __esModule: true };

	/***/ },
	/* 51 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(58);
		__webpack_require__(59);
		module.exports = __webpack_require__(60);

	/***/ },
	/* 52 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(67);
		module.exports = __webpack_require__(64).Object.keys;

	/***/ },
	/* 53 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';

		exports.__esModule = true;

		var _typeof2 = __webpack_require__(18);

		var _typeof3 = _interopRequireDefault(_typeof2);

		var _h = __webpack_require__(19);

		var _h2 = _interopRequireDefault(_h);

		var _shapesMap = __webpack_require__(20);

		var _shapesMap2 = _interopRequireDefault(_shapesMap);

		var _shape = __webpack_require__(2);

		var _shape2 = _interopRequireDefault(_shape);

		var _shapeSwirl = __webpack_require__(3);

		var _shapeSwirl2 = _interopRequireDefault(_shapeSwirl);

		var _burst = __webpack_require__(4);

		var _burst2 = _interopRequireDefault(_burst);

		var _html = __webpack_require__(5);

		var _html2 = _interopRequireDefault(_html);

		var _stagger = __webpack_require__(6);

		var _stagger2 = _interopRequireDefault(_stagger);

		var _spriter = __webpack_require__(7);

		var _spriter2 = _interopRequireDefault(_spriter);

		var _motionPath = __webpack_require__(21);

		var _motionPath2 = _interopRequireDefault(_motionPath);

		var _tween = __webpack_require__(8);

		var _tween2 = _interopRequireDefault(_tween);

		var _timeline = __webpack_require__(9);

		var _timeline2 = _interopRequireDefault(_timeline);

		var _tweener = __webpack_require__(10);

		var _tweener2 = _interopRequireDefault(_tweener);

		var _tweenable = __webpack_require__(11);

		var _tweenable2 = _interopRequireDefault(_tweenable);

		var _thenable = __webpack_require__(12);

		var _thenable2 = _interopRequireDefault(_thenable);

		var _tunable = __webpack_require__(13);

		var _tunable2 = _interopRequireDefault(_tunable);

		var _delta = __webpack_require__(14);

		var _delta2 = _interopRequireDefault(_delta);

		var _deltas = __webpack_require__(15);

		var _deltas2 = _interopRequireDefault(_deltas);

		var _module = __webpack_require__(16);

		var _module2 = _interopRequireDefault(_module);

		var _easing = __webpack_require__(22);

		var _easing2 = _interopRequireDefault(_easing);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var mojs = {
		  revision: '0.288.1', isDebug: true, helpers: _h2.default,
		  Shape: _shape2.default, ShapeSwirl: _shapeSwirl2.default, Burst: _burst2.default, Html: _html2.default, stagger: _stagger2.default, Spriter: _spriter2.default, MotionPath: _motionPath2.default,
		  Tween: _tween2.default, Timeline: _timeline2.default, Tweenable: _tweenable2.default, Thenable: _thenable2.default, Tunable: _tunable2.default, Module: _module2.default,
		  tweener: _tweener2.default, easing: _easing2.default, shapesMap: _shapesMap2.default, _pool: { Delta: _delta2.default, Deltas: _deltas2.default }
		};

		// functions alias
		mojs.h = mojs.helpers;
		mojs.delta = mojs.h.delta;
		// custom shape add function and class
		mojs.addShape = mojs.shapesMap.addShape;
		mojs.CustomShape = mojs.shapesMap.custom;
		// module alias
		mojs.Transit = mojs.Shape;
		mojs.Swirl = mojs.ShapeSwirl;

		// TODO:
		/*
		  H/V in paths

		  rand for direction
		  burst children angle after tune
		  burst pathScale after tune
		  swirl then issue
		  'rand' angle flick with `then`
		  not able to `play()` in `onComplete` callback
		  ---
		  module names
		  swirls in then chains for x/y
		  parse rand(stagger(20, 10), 20) values
		  percentage for radius

		  issue:
		    const shape = new mojs.Shape({
		      scale: { 0: 1 },
		      duration: 1000
		    })
		    .then({ scale: 0 })
		    .then({ scale: 1, onComplete () { this.pause(); } })
		    .then({ scale: 0 })
		    .then({ scale: 1 })
		    ;

		    document.addEventListener('click', () => {
		      shape
		        .tune({ fill: 'cyan' })
		        .play();
		    });
		*/

		// istanbul ignore next
		if (true) {
		  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
		    return mojs;
		  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}
		// istanbul ignore next
		if ((false ? 'undefined' : (0, _typeof3.default)(module)) === "object" && (0, _typeof3.default)(module.exports) === "object") {
		  module.exports = mojs;
		}

		exports.default = mojs;


		typeof window !== 'undefined' && (window.mojs = mojs);
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

	/***/ },
	/* 54 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(62);
		__webpack_require__(63);
		module.exports = __webpack_require__(64).Symbol;

	/***/ },
	/* 55 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(65);
		module.exports = __webpack_require__(64).Object.setPrototypeOf;

	/***/ },
	/* 56 */
	/***/ function(module, exports, __webpack_require__) {

		var $ = __webpack_require__(66);
		module.exports = function create(P, D){
		  return $.create(P, D);
		};

	/***/ },
	/* 57 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(68);
		module.exports = __webpack_require__(64).Object.assign;

	/***/ },
	/* 58 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(69);
		var Iterators = __webpack_require__(70);
		Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

	/***/ },
	/* 59 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		var $at  = __webpack_require__(71)(true);

		// 21.1.3.27 String.prototype[@@iterator]()
		__webpack_require__(72)(String, 'String', function(iterated){
		  this._t = String(iterated); // target
		  this._i = 0;                // next index
		// 21.1.5.2.1 %StringIteratorPrototype%.next()
		}, function(){
		  var O     = this._t
		    , index = this._i
		    , point;
		  if(index >= O.length)return {value: undefined, done: true};
		  point = $at(O, index);
		  this._i += point.length;
		  return {value: point, done: false};
		});

	/***/ },
	/* 60 */
	/***/ function(module, exports, __webpack_require__) {

		var anObject = __webpack_require__(73)
		  , get      = __webpack_require__(74);
		module.exports = __webpack_require__(64).getIterator = function(it){
		  var iterFn = get(it);
		  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
		  return anObject(iterFn.call(it));
		};

	/***/ },
	/* 61 */
	/***/ function(module, exports, __webpack_require__) {

		var store  = __webpack_require__(75)('wks')
		  , uid    = __webpack_require__(76)
		  , Symbol = __webpack_require__(77).Symbol;
		module.exports = function(name){
		  return store[name] || (store[name] =
		    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
		};

	/***/ },
	/* 62 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		// ECMAScript 6 symbols shim
		var $              = __webpack_require__(66)
		  , global         = __webpack_require__(77)
		  , has            = __webpack_require__(78)
		  , DESCRIPTORS    = __webpack_require__(79)
		  , $export        = __webpack_require__(80)
		  , redefine       = __webpack_require__(81)
		  , $fails         = __webpack_require__(82)
		  , shared         = __webpack_require__(75)
		  , setToStringTag = __webpack_require__(83)
		  , uid            = __webpack_require__(76)
		  , wks            = __webpack_require__(61)
		  , keyOf          = __webpack_require__(84)
		  , $names         = __webpack_require__(85)
		  , enumKeys       = __webpack_require__(86)
		  , isArray        = __webpack_require__(87)
		  , anObject       = __webpack_require__(73)
		  , toIObject      = __webpack_require__(88)
		  , createDesc     = __webpack_require__(89)
		  , getDesc        = $.getDesc
		  , setDesc        = $.setDesc
		  , _create        = $.create
		  , getNames       = $names.get
		  , $Symbol        = global.Symbol
		  , $JSON          = global.JSON
		  , _stringify     = $JSON && $JSON.stringify
		  , setter         = false
		  , HIDDEN         = wks('_hidden')
		  , isEnum         = $.isEnum
		  , SymbolRegistry = shared('symbol-registry')
		  , AllSymbols     = shared('symbols')
		  , useNative      = typeof $Symbol == 'function'
		  , ObjectProto    = Object.prototype;

		// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
		var setSymbolDesc = DESCRIPTORS && $fails(function(){
		  return _create(setDesc({}, 'a', {
		    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
		  })).a != 7;
		}) ? function(it, key, D){
		  var protoDesc = getDesc(ObjectProto, key);
		  if(protoDesc)delete ObjectProto[key];
		  setDesc(it, key, D);
		  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
		} : setDesc;

		var wrap = function(tag){
		  var sym = AllSymbols[tag] = _create($Symbol.prototype);
		  sym._k = tag;
		  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
		    configurable: true,
		    set: function(value){
		      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
		      setSymbolDesc(this, tag, createDesc(1, value));
		    }
		  });
		  return sym;
		};

		var isSymbol = function(it){
		  return typeof it == 'symbol';
		};

		var $defineProperty = function defineProperty(it, key, D){
		  if(D && has(AllSymbols, key)){
		    if(!D.enumerable){
		      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
		      it[HIDDEN][key] = true;
		    } else {
		      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
		      D = _create(D, {enumerable: createDesc(0, false)});
		    } return setSymbolDesc(it, key, D);
		  } return setDesc(it, key, D);
		};
		var $defineProperties = function defineProperties(it, P){
		  anObject(it);
		  var keys = enumKeys(P = toIObject(P))
		    , i    = 0
		    , l = keys.length
		    , key;
		  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
		  return it;
		};
		var $create = function create(it, P){
		  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
		};
		var $propertyIsEnumerable = function propertyIsEnumerable(key){
		  var E = isEnum.call(this, key);
		  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
		    ? E : true;
		};
		var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
		  var D = getDesc(it = toIObject(it), key);
		  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
		  return D;
		};
		var $getOwnPropertyNames = function getOwnPropertyNames(it){
		  var names  = getNames(toIObject(it))
		    , result = []
		    , i      = 0
		    , key;
		  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
		  return result;
		};
		var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
		  var names  = getNames(toIObject(it))
		    , result = []
		    , i      = 0
		    , key;
		  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
		  return result;
		};
		var $stringify = function stringify(it){
		  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
		  var args = [it]
		    , i    = 1
		    , $$   = arguments
		    , replacer, $replacer;
		  while($$.length > i)args.push($$[i++]);
		  replacer = args[1];
		  if(typeof replacer == 'function')$replacer = replacer;
		  if($replacer || !isArray(replacer))replacer = function(key, value){
		    if($replacer)value = $replacer.call(this, key, value);
		    if(!isSymbol(value))return value;
		  };
		  args[1] = replacer;
		  return _stringify.apply($JSON, args);
		};
		var buggyJSON = $fails(function(){
		  var S = $Symbol();
		  // MS Edge converts symbol values to JSON as {}
		  // WebKit converts symbol values to JSON as null
		  // V8 throws on boxed symbols
		  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
		});

		// 19.4.1.1 Symbol([description])
		if(!useNative){
		  $Symbol = function Symbol(){
		    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
		    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
		  };
		  redefine($Symbol.prototype, 'toString', function toString(){
		    return this._k;
		  });

		  isSymbol = function(it){
		    return it instanceof $Symbol;
		  };

		  $.create     = $create;
		  $.isEnum     = $propertyIsEnumerable;
		  $.getDesc    = $getOwnPropertyDescriptor;
		  $.setDesc    = $defineProperty;
		  $.setDescs   = $defineProperties;
		  $.getNames   = $names.get = $getOwnPropertyNames;
		  $.getSymbols = $getOwnPropertySymbols;

		  if(DESCRIPTORS && !__webpack_require__(90)){
		    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
		  }
		}

		var symbolStatics = {
		  // 19.4.2.1 Symbol.for(key)
		  'for': function(key){
		    return has(SymbolRegistry, key += '')
		      ? SymbolRegistry[key]
		      : SymbolRegistry[key] = $Symbol(key);
		  },
		  // 19.4.2.5 Symbol.keyFor(sym)
		  keyFor: function keyFor(key){
		    return keyOf(SymbolRegistry, key);
		  },
		  useSetter: function(){ setter = true; },
		  useSimple: function(){ setter = false; }
		};
		// 19.4.2.2 Symbol.hasInstance
		// 19.4.2.3 Symbol.isConcatSpreadable
		// 19.4.2.4 Symbol.iterator
		// 19.4.2.6 Symbol.match
		// 19.4.2.8 Symbol.replace
		// 19.4.2.9 Symbol.search
		// 19.4.2.10 Symbol.species
		// 19.4.2.11 Symbol.split
		// 19.4.2.12 Symbol.toPrimitive
		// 19.4.2.13 Symbol.toStringTag
		// 19.4.2.14 Symbol.unscopables
		$.each.call((
		  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
		  'species,split,toPrimitive,toStringTag,unscopables'
		).split(','), function(it){
		  var sym = wks(it);
		  symbolStatics[it] = useNative ? sym : wrap(sym);
		});

		setter = true;

		$export($export.G + $export.W, {Symbol: $Symbol});

		$export($export.S, 'Symbol', symbolStatics);

		$export($export.S + $export.F * !useNative, 'Object', {
		  // 19.1.2.2 Object.create(O [, Properties])
		  create: $create,
		  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
		  defineProperty: $defineProperty,
		  // 19.1.2.3 Object.defineProperties(O, Properties)
		  defineProperties: $defineProperties,
		  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
		  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
		  // 19.1.2.7 Object.getOwnPropertyNames(O)
		  getOwnPropertyNames: $getOwnPropertyNames,
		  // 19.1.2.8 Object.getOwnPropertySymbols(O)
		  getOwnPropertySymbols: $getOwnPropertySymbols
		});

		// 24.3.2 JSON.stringify(value [, replacer [, space]])
		$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

		// 19.4.3.5 Symbol.prototype[@@toStringTag]
		setToStringTag($Symbol, 'Symbol');
		// 20.2.1.9 Math[@@toStringTag]
		setToStringTag(Math, 'Math', true);
		// 24.3.3 JSON[@@toStringTag]
		setToStringTag(global.JSON, 'JSON', true);

	/***/ },
	/* 63 */
	/***/ function(module, exports, __webpack_require__) {

		

	/***/ },
	/* 64 */
	/***/ function(module, exports, __webpack_require__) {

		var core = module.exports = {version: '1.2.6'};
		if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

	/***/ },
	/* 65 */
	/***/ function(module, exports, __webpack_require__) {

		// 19.1.3.19 Object.setPrototypeOf(O, proto)
		var $export = __webpack_require__(80);
		$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(91).set});

	/***/ },
	/* 66 */
	/***/ function(module, exports, __webpack_require__) {

		var $Object = Object;
		module.exports = {
		  create:     $Object.create,
		  getProto:   $Object.getPrototypeOf,
		  isEnum:     {}.propertyIsEnumerable,
		  getDesc:    $Object.getOwnPropertyDescriptor,
		  setDesc:    $Object.defineProperty,
		  setDescs:   $Object.defineProperties,
		  getKeys:    $Object.keys,
		  getNames:   $Object.getOwnPropertyNames,
		  getSymbols: $Object.getOwnPropertySymbols,
		  each:       [].forEach
		};

	/***/ },
	/* 67 */
	/***/ function(module, exports, __webpack_require__) {

		// 19.1.2.14 Object.keys(O)
		var toObject = __webpack_require__(92);

		__webpack_require__(93)('keys', function($keys){
		  return function keys(it){
		    return $keys(toObject(it));
		  };
		});

	/***/ },
	/* 68 */
	/***/ function(module, exports, __webpack_require__) {

		// 19.1.3.1 Object.assign(target, source)
		var $export = __webpack_require__(80);

		$export($export.S + $export.F, 'Object', {assign: __webpack_require__(94)});

	/***/ },
	/* 69 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		var addToUnscopables = __webpack_require__(95)
		  , step             = __webpack_require__(96)
		  , Iterators        = __webpack_require__(70)
		  , toIObject        = __webpack_require__(88);

		// 22.1.3.4 Array.prototype.entries()
		// 22.1.3.13 Array.prototype.keys()
		// 22.1.3.29 Array.prototype.values()
		// 22.1.3.30 Array.prototype[@@iterator]()
		module.exports = __webpack_require__(72)(Array, 'Array', function(iterated, kind){
		  this._t = toIObject(iterated); // target
		  this._i = 0;                   // next index
		  this._k = kind;                // kind
		// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
		}, function(){
		  var O     = this._t
		    , kind  = this._k
		    , index = this._i++;
		  if(!O || index >= O.length){
		    this._t = undefined;
		    return step(1);
		  }
		  if(kind == 'keys'  )return step(0, index);
		  if(kind == 'values')return step(0, O[index]);
		  return step(0, [index, O[index]]);
		}, 'values');

		// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
		Iterators.Arguments = Iterators.Array;

		addToUnscopables('keys');
		addToUnscopables('values');
		addToUnscopables('entries');

	/***/ },
	/* 70 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = {};

	/***/ },
	/* 71 */
	/***/ function(module, exports, __webpack_require__) {

		var toInteger = __webpack_require__(97)
		  , defined   = __webpack_require__(98);
		// true  -> String#at
		// false -> String#codePointAt
		module.exports = function(TO_STRING){
		  return function(that, pos){
		    var s = String(defined(that))
		      , i = toInteger(pos)
		      , l = s.length
		      , a, b;
		    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
		    a = s.charCodeAt(i);
		    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
		      ? TO_STRING ? s.charAt(i) : a
		      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
		  };
		};

	/***/ },
	/* 72 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		var LIBRARY        = __webpack_require__(90)
		  , $export        = __webpack_require__(80)
		  , redefine       = __webpack_require__(81)
		  , hide           = __webpack_require__(99)
		  , has            = __webpack_require__(78)
		  , Iterators      = __webpack_require__(70)
		  , $iterCreate    = __webpack_require__(100)
		  , setToStringTag = __webpack_require__(83)
		  , getProto       = __webpack_require__(66).getProto
		  , ITERATOR       = __webpack_require__(61)('iterator')
		  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
		  , FF_ITERATOR    = '@@iterator'
		  , KEYS           = 'keys'
		  , VALUES         = 'values';

		var returnThis = function(){ return this; };

		module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
		  $iterCreate(Constructor, NAME, next);
		  var getMethod = function(kind){
		    if(!BUGGY && kind in proto)return proto[kind];
		    switch(kind){
		      case KEYS: return function keys(){ return new Constructor(this, kind); };
		      case VALUES: return function values(){ return new Constructor(this, kind); };
		    } return function entries(){ return new Constructor(this, kind); };
		  };
		  var TAG        = NAME + ' Iterator'
		    , DEF_VALUES = DEFAULT == VALUES
		    , VALUES_BUG = false
		    , proto      = Base.prototype
		    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
		    , $default   = $native || getMethod(DEFAULT)
		    , methods, key;
		  // Fix native
		  if($native){
		    var IteratorPrototype = getProto($default.call(new Base));
		    // Set @@toStringTag to native iterators
		    setToStringTag(IteratorPrototype, TAG, true);
		    // FF fix
		    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
		    // fix Array#{values, @@iterator}.name in V8 / FF
		    if(DEF_VALUES && $native.name !== VALUES){
		      VALUES_BUG = true;
		      $default = function values(){ return $native.call(this); };
		    }
		  }
		  // Define iterator
		  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
		    hide(proto, ITERATOR, $default);
		  }
		  // Plug for library
		  Iterators[NAME] = $default;
		  Iterators[TAG]  = returnThis;
		  if(DEFAULT){
		    methods = {
		      values:  DEF_VALUES  ? $default : getMethod(VALUES),
		      keys:    IS_SET      ? $default : getMethod(KEYS),
		      entries: !DEF_VALUES ? $default : getMethod('entries')
		    };
		    if(FORCED)for(key in methods){
		      if(!(key in proto))redefine(proto, key, methods[key]);
		    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
		  }
		  return methods;
		};

	/***/ },
	/* 73 */
	/***/ function(module, exports, __webpack_require__) {

		var isObject = __webpack_require__(101);
		module.exports = function(it){
		  if(!isObject(it))throw TypeError(it + ' is not an object!');
		  return it;
		};

	/***/ },
	/* 74 */
	/***/ function(module, exports, __webpack_require__) {

		var classof   = __webpack_require__(102)
		  , ITERATOR  = __webpack_require__(61)('iterator')
		  , Iterators = __webpack_require__(70);
		module.exports = __webpack_require__(64).getIteratorMethod = function(it){
		  if(it != undefined)return it[ITERATOR]
		    || it['@@iterator']
		    || Iterators[classof(it)];
		};

	/***/ },
	/* 75 */
	/***/ function(module, exports, __webpack_require__) {

		var global = __webpack_require__(77)
		  , SHARED = '__core-js_shared__'
		  , store  = global[SHARED] || (global[SHARED] = {});
		module.exports = function(key){
		  return store[key] || (store[key] = {});
		};

	/***/ },
	/* 76 */
	/***/ function(module, exports, __webpack_require__) {

		var id = 0
		  , px = Math.random();
		module.exports = function(key){
		  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
		};

	/***/ },
	/* 77 */
	/***/ function(module, exports, __webpack_require__) {

		// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
		var global = module.exports = typeof window != 'undefined' && window.Math == Math
		  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
		if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

	/***/ },
	/* 78 */
	/***/ function(module, exports, __webpack_require__) {

		var hasOwnProperty = {}.hasOwnProperty;
		module.exports = function(it, key){
		  return hasOwnProperty.call(it, key);
		};

	/***/ },
	/* 79 */
	/***/ function(module, exports, __webpack_require__) {

		// Thank's IE8 for his funny defineProperty
		module.exports = !__webpack_require__(82)(function(){
		  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
		});

	/***/ },
	/* 80 */
	/***/ function(module, exports, __webpack_require__) {

		var global    = __webpack_require__(77)
		  , core      = __webpack_require__(64)
		  , ctx       = __webpack_require__(103)
		  , PROTOTYPE = 'prototype';

		var $export = function(type, name, source){
		  var IS_FORCED = type & $export.F
		    , IS_GLOBAL = type & $export.G
		    , IS_STATIC = type & $export.S
		    , IS_PROTO  = type & $export.P
		    , IS_BIND   = type & $export.B
		    , IS_WRAP   = type & $export.W
		    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
		    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
		    , key, own, out;
		  if(IS_GLOBAL)source = name;
		  for(key in source){
		    // contains in native
		    own = !IS_FORCED && target && key in target;
		    if(own && key in exports)continue;
		    // export native or passed
		    out = own ? target[key] : source[key];
		    // prevent global pollution for namespaces
		    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
		    // bind timers to global for call from export context
		    : IS_BIND && own ? ctx(out, global)
		    // wrap global constructors for prevent change them in library
		    : IS_WRAP && target[key] == out ? (function(C){
		      var F = function(param){
		        return this instanceof C ? new C(param) : C(param);
		      };
		      F[PROTOTYPE] = C[PROTOTYPE];
		      return F;
		    // make static versions for prototype methods
		    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
		    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
		  }
		};
		// type bitmap
		$export.F = 1;  // forced
		$export.G = 2;  // global
		$export.S = 4;  // static
		$export.P = 8;  // proto
		$export.B = 16; // bind
		$export.W = 32; // wrap
		module.exports = $export;

	/***/ },
	/* 81 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(99);

	/***/ },
	/* 82 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = function(exec){
		  try {
		    return !!exec();
		  } catch(e){
		    return true;
		  }
		};

	/***/ },
	/* 83 */
	/***/ function(module, exports, __webpack_require__) {

		var def = __webpack_require__(66).setDesc
		  , has = __webpack_require__(78)
		  , TAG = __webpack_require__(61)('toStringTag');

		module.exports = function(it, tag, stat){
		  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
		};

	/***/ },
	/* 84 */
	/***/ function(module, exports, __webpack_require__) {

		var $         = __webpack_require__(66)
		  , toIObject = __webpack_require__(88);
		module.exports = function(object, el){
		  var O      = toIObject(object)
		    , keys   = $.getKeys(O)
		    , length = keys.length
		    , index  = 0
		    , key;
		  while(length > index)if(O[key = keys[index++]] === el)return key;
		};

	/***/ },
	/* 85 */
	/***/ function(module, exports, __webpack_require__) {

		// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
		var toIObject = __webpack_require__(88)
		  , getNames  = __webpack_require__(66).getNames
		  , toString  = {}.toString;

		var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
		  ? Object.getOwnPropertyNames(window) : [];

		var getWindowNames = function(it){
		  try {
		    return getNames(it);
		  } catch(e){
		    return windowNames.slice();
		  }
		};

		module.exports.get = function getOwnPropertyNames(it){
		  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
		  return getNames(toIObject(it));
		};

	/***/ },
	/* 86 */
	/***/ function(module, exports, __webpack_require__) {

		// all enumerable object keys, includes symbols
		var $ = __webpack_require__(66);
		module.exports = function(it){
		  var keys       = $.getKeys(it)
		    , getSymbols = $.getSymbols;
		  if(getSymbols){
		    var symbols = getSymbols(it)
		      , isEnum  = $.isEnum
		      , i       = 0
		      , key;
		    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
		  }
		  return keys;
		};

	/***/ },
	/* 87 */
	/***/ function(module, exports, __webpack_require__) {

		// 7.2.2 IsArray(argument)
		var cof = __webpack_require__(104);
		module.exports = Array.isArray || function(arg){
		  return cof(arg) == 'Array';
		};

	/***/ },
	/* 88 */
	/***/ function(module, exports, __webpack_require__) {

		// to indexed object, toObject with fallback for non-array-like ES3 strings
		var IObject = __webpack_require__(105)
		  , defined = __webpack_require__(98);
		module.exports = function(it){
		  return IObject(defined(it));
		};

	/***/ },
	/* 89 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = function(bitmap, value){
		  return {
		    enumerable  : !(bitmap & 1),
		    configurable: !(bitmap & 2),
		    writable    : !(bitmap & 4),
		    value       : value
		  };
		};

	/***/ },
	/* 90 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = true;

	/***/ },
	/* 91 */
	/***/ function(module, exports, __webpack_require__) {

		// Works with __proto__ only. Old v8 can't work with null proto objects.
		/* eslint-disable no-proto */
		var getDesc  = __webpack_require__(66).getDesc
		  , isObject = __webpack_require__(101)
		  , anObject = __webpack_require__(73);
		var check = function(O, proto){
		  anObject(O);
		  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
		};
		module.exports = {
		  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
		    function(test, buggy, set){
		      try {
		        set = __webpack_require__(103)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
		        set(test, []);
		        buggy = !(test instanceof Array);
		      } catch(e){ buggy = true; }
		      return function setPrototypeOf(O, proto){
		        check(O, proto);
		        if(buggy)O.__proto__ = proto;
		        else set(O, proto);
		        return O;
		      };
		    }({}, false) : undefined),
		  check: check
		};

	/***/ },
	/* 92 */
	/***/ function(module, exports, __webpack_require__) {

		// 7.1.13 ToObject(argument)
		var defined = __webpack_require__(98);
		module.exports = function(it){
		  return Object(defined(it));
		};

	/***/ },
	/* 93 */
	/***/ function(module, exports, __webpack_require__) {

		// most Object methods by ES6 should accept primitives
		var $export = __webpack_require__(80)
		  , core    = __webpack_require__(64)
		  , fails   = __webpack_require__(82);
		module.exports = function(KEY, exec){
		  var fn  = (core.Object || {})[KEY] || Object[KEY]
		    , exp = {};
		  exp[KEY] = exec(fn);
		  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
		};

	/***/ },
	/* 94 */
	/***/ function(module, exports, __webpack_require__) {

		// 19.1.2.1 Object.assign(target, source, ...)
		var $        = __webpack_require__(66)
		  , toObject = __webpack_require__(92)
		  , IObject  = __webpack_require__(105);

		// should work with symbols and should have deterministic property order (V8 bug)
		module.exports = __webpack_require__(82)(function(){
		  var a = Object.assign
		    , A = {}
		    , B = {}
		    , S = Symbol()
		    , K = 'abcdefghijklmnopqrst';
		  A[S] = 7;
		  K.split('').forEach(function(k){ B[k] = k; });
		  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
		}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
		  var T     = toObject(target)
		    , $$    = arguments
		    , $$len = $$.length
		    , index = 1
		    , getKeys    = $.getKeys
		    , getSymbols = $.getSymbols
		    , isEnum     = $.isEnum;
		  while($$len > index){
		    var S      = IObject($$[index++])
		      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
		      , length = keys.length
		      , j      = 0
		      , key;
		    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
		  }
		  return T;
		} : Object.assign;

	/***/ },
	/* 95 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = function(){ /* empty */ };

	/***/ },
	/* 96 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = function(done, value){
		  return {value: value, done: !!done};
		};

	/***/ },
	/* 97 */
	/***/ function(module, exports, __webpack_require__) {

		// 7.1.4 ToInteger
		var ceil  = Math.ceil
		  , floor = Math.floor;
		module.exports = function(it){
		  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
		};

	/***/ },
	/* 98 */
	/***/ function(module, exports, __webpack_require__) {

		// 7.2.1 RequireObjectCoercible(argument)
		module.exports = function(it){
		  if(it == undefined)throw TypeError("Can't call method on  " + it);
		  return it;
		};

	/***/ },
	/* 99 */
	/***/ function(module, exports, __webpack_require__) {

		var $          = __webpack_require__(66)
		  , createDesc = __webpack_require__(89);
		module.exports = __webpack_require__(79) ? function(object, key, value){
		  return $.setDesc(object, key, createDesc(1, value));
		} : function(object, key, value){
		  object[key] = value;
		  return object;
		};

	/***/ },
	/* 100 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		var $              = __webpack_require__(66)
		  , descriptor     = __webpack_require__(89)
		  , setToStringTag = __webpack_require__(83)
		  , IteratorPrototype = {};

		// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
		__webpack_require__(99)(IteratorPrototype, __webpack_require__(61)('iterator'), function(){ return this; });

		module.exports = function(Constructor, NAME, next){
		  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
		  setToStringTag(Constructor, NAME + ' Iterator');
		};

	/***/ },
	/* 101 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = function(it){
		  return typeof it === 'object' ? it !== null : typeof it === 'function';
		};

	/***/ },
	/* 102 */
	/***/ function(module, exports, __webpack_require__) {

		// getting tag from 19.1.3.6 Object.prototype.toString()
		var cof = __webpack_require__(104)
		  , TAG = __webpack_require__(61)('toStringTag')
		  // ES3 wrong here
		  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

		module.exports = function(it){
		  var O, T, B;
		  return it === undefined ? 'Undefined' : it === null ? 'Null'
		    // @@toStringTag case
		    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
		    // builtinTag case
		    : ARG ? cof(O)
		    // ES3 arguments fallback
		    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
		};

	/***/ },
	/* 103 */
	/***/ function(module, exports, __webpack_require__) {

		// optional / simple context binding
		var aFunction = __webpack_require__(106);
		module.exports = function(fn, that, length){
		  aFunction(fn);
		  if(that === undefined)return fn;
		  switch(length){
		    case 1: return function(a){
		      return fn.call(that, a);
		    };
		    case 2: return function(a, b){
		      return fn.call(that, a, b);
		    };
		    case 3: return function(a, b, c){
		      return fn.call(that, a, b, c);
		    };
		  }
		  return function(/* ...args */){
		    return fn.apply(that, arguments);
		  };
		};

	/***/ },
	/* 104 */
	/***/ function(module, exports, __webpack_require__) {

		var toString = {}.toString;

		module.exports = function(it){
		  return toString.call(it).slice(8, -1);
		};

	/***/ },
	/* 105 */
	/***/ function(module, exports, __webpack_require__) {

		// fallback for non-array-like ES3 and non-enumerable old V8 strings
		var cof = __webpack_require__(104);
		module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
		  return cof(it) == 'String' ? it.split('') : Object(it);
		};

	/***/ },
	/* 106 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = function(it){
		  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
		  return it;
		};

	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 126 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var CARD_TYPES = ['pan', 'spider', 'poison', 'vampire', 'net', 'hat', 'broom', 'hand', 'pumpkin', 'grave', 'coffin', 'bat'];

	exports.default = {
	  CARD_TYPES: CARD_TYPES,
	  NAME: 'GUARANTEE_RATE_GAME_Hjs891ksPP',
	  OPEN_DELAY: 400,
	  CARDS_AMOUNT: 24,
	  DIFFICULTY: 10 // [0-10]
	};

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(65);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(69);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(70);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(74);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(108);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _preact = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASSES = __webpack_require__(128);
	__webpack_require__(129);

	var Icon = function (_Component) {
	  (0, _inherits3.default)(Icon, _Component);

	  function Icon() {
	    (0, _classCallCheck3.default)(this, Icon);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Icon, [{
	    key: 'render',
	    value: function render() {
	      var p = this.props;
	      var shape = p.shape;

	      var markup = '<svg viewBox="0 0 32 32"><use xlink:href="#' + shape + '-shape" /></svg>';

	      var className = CLASSES.icon + ' ' + (p.className || '');
	      return (0, _preact.h)('div', { className: className,
	        'data-component': 'icon',
	        dangerouslySetInnerHTML: { __html: markup } });
	    }
	  }]);
	  return Icon;
	}(_preact.Component);

	exports.default = Icon;

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = {
		"icon": "_icon_1kwuf_5"
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(130);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(132)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./icon.postcss.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./icon.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(131)();
	// imports


	// module
	exports.push([module.id, "/*$PX:      1/16rem;*/\n._icon_1kwuf_5 {\n  position:     relative;\n  width:        32px;\n  height:       32px;\n  cursor:       pointer;\n  fill:         white;\n  display:      block\n\n}\n._icon_1kwuf_5 > svg {\n  position:     absolute;\n  left:     0;\n  top:     0;\n  width:     100%;\n  height:     100%;\n  fill:     inherit\n\n}\n._icon_1kwuf_5 > svg > use {\n  fill:     inherit\n\n}\n._icon_1kwuf_5:after {\n  content:     '';\n  position:     absolute;\n  left:     0;\n  top:     0;\n  right:     0;\n  bottom:     0;\n  z-index:     1\n\n}\n", ""]);

	// exports


/***/ },
/* 131 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(65);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(69);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(70);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(74);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(108);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _preact = __webpack_require__(6);

	var _moJs = __webpack_require__(125);

	var _moJs2 = _interopRequireDefault(_moJs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CardStagger = function (_Component) {
	  (0, _inherits3.default)(CardStagger, _Component);

	  function CardStagger() {
	    (0, _classCallCheck3.default)(this, CardStagger);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CardStagger).apply(this, arguments));
	  }

	  (0, _createClass3.default)(CardStagger, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return (0, _preact.h)('div', { ref: function ref(el) {
	          _this2._el = el;
	        } });
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate() {
	      return false;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var ShapeStagger = _moJs2.default.stagger(_moJs2.default.Shape);
	      var stagger = new ShapeStagger({
	        parent: this._el,
	        shape: 'rect',
	        quantifier: 3,
	        scale: { 1.05: 1.25 },
	        rx: 10,
	        ry: 10,
	        radiusX: 65 / 2,
	        radiusY: 90 / 2,
	        fill: 'none',
	        stroke: ['cyan', 'hotpink', 'white'],
	        // stroke:     ['#EC5351', '#F27B35', '#FFD555', 'white'],
	        strokeWidth: { 10: 0 },
	        duration: 350,
	        delay: 'stagger(200, 100)',
	        easing: 'quad.out',
	        isShowEnd: false
	      });

	      this.props.timeline.add(stagger);
	    }
	  }]);
	  return CardStagger;
	}(_preact.Component);

	exports.default = CardStagger;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _constants = __webpack_require__(126);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var timeoutID = null;
	var asyncCheck = function asyncCheck(dispatch, getState) {
	  var _getState = getState();

	  var cards = _getState.cards;

	  var count = cards.present.open.length;

	  if (count === 2 && !timeoutID) {
	    timeoutID = setTimeout(function () {
	      dispatch({ type: 'CHECK_OPEN_CARDS', isRecord: true });
	      timeoutID = null;
	    }, _constants2.default.OPEN_DELAY);
	  }
	};

	exports.default = asyncCheck;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _constants = __webpack_require__(126);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IDs = [];
	var lock = function lock(id) {
	  return function (dispatch, getState) {
	    if (IDs.length === 1) {
	      IDs.push(id);
	      dispatch({ type: 'CARDS_RESET_PLAY', data: IDs });
	      IDs.length = 0;
	    } else {
	      IDs.push(id);
	    }
	  };
	};

	exports.default = lock;

/***/ },
/* 136 */
/***/ function(module, exports) {

	module.exports = {
		"card": "_card_1xj68_4",
		"is-open": "_is-open_1xj68_25",
		"card__inner": "_card__inner_1xj68_1"
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(138);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(132)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./card.postcss.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./card.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(131)();
	// imports


	// module
	exports.push([module.id, "/*$PX:      1/16rem;*/\n\n._card_1xj68_4 {\n  position:       relative;\n  width:          65px;\n  height:         90px;\n  background:     white;\n  display:        block;\n  border-radius:  7px;\n  margin-left:    20px;\n  margin-top:     20px;\n  cursor:         pointer;\n  background:     #F27B35;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAC0CAMAAABv/gR/AAAAilBMVEUsQFowQlrXdW7sU1HvY0rvaU/va1Hvc1fwYUrwYkrwY0rwZEvwZk7wbVPwcVXwdljweVvwfF3wfl7wg2LwhGLwhGPwhGTxfl/xf2DxgGDxgGHxgWHxgmHxgmLxg2Lxg2PxhGLxhGPyezXyezbyfDbyfDfyfTfyfTjyf2Dyg2Lyg2P1mU7+1l7/1VUpwicUAAACHklEQVR4Ae3TSVJVCRhE4VP1qi8bBURsvErC4xc19789I5zcARKEgbzj4OYKvsFJ+O33nTtfsEMX7NhthI2wETbCRtgIG2Ej/OqEBV0wNuF6IhM+TGTCyUQmHE9kwvJNEHRB0AVBFwRdEHRB0AVBFwRdEHSBQHgxkQmvJzLh5UQmHE9kwvIdQdAFQRcEXRB0QdAFQRcEXRAMgUC4nsiE04lM+DiRCW8nMmG5SxB0QdAFQRcEXRB0QdAFQRcEXRAcwQEIpxOZcDaRCUcTmbD8kCDogqALgi4IuiDogqALgi4IuiA8mEAgnE9kwtFEJjyZyIQ3E5mw3EMQdEHQBUEXBF0QdEHQBUEXBF0Q7i8wCWcTmfDHVWTC48vIhOOJTFh+miDogqALgi4IuiDogqALgi4I9xMIhPOJTHg6kQn/7CMT/t5HJiyTQxAEQdAFQRcEXRB0QdAFQRcEXRB0wd2E5xOZ8O8+MuHPi8iE5erhBZ+RSlwFX9AFRRcUXVB0QdEFRRcUXVBMwe2ETwcS3E74a38Ywe2E/y4OK7hJeHZgwU3CyRxaUMwvrARXUHRB0QVFFxRdUHRBkQUr4b0kWAmvJMFK+P/SEayERxeOYCW826uCopW4EhZbUHRB0QVFFxRdUHRB0QVFFxRdUHRB0QVFFxRdUHRB0QVFFxRdUHRB0QVFFxRdUHRB0QVFFxRdUHRB0QVFFxRdUHRB0QVFF/QrGglRP6pmTuoAAAAASUVORK5CYII=);\n  background-size: 100% auto;\n  -webkit-transform:        rotateY(180deg);\n          transform:        rotateY(180deg);\n  -webkit-transition:       all 0.2s ease-out;\n  transition:       all 0.2s ease-out;\n  -webkit-transform-style:  preserve-3d;\n          transform-style:  preserve-3d;\n  box-shadow: 0 0 16px rgba(0, 0, 0, 0.8);\n  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1), inset 2px 0 10px rgba(255, 255, 255, 0.35);\n\n  /*&--pan {\n    $size: 50;\n    [data-component=\"icon\"] {\n      width:  $size*$PX;\n      height: $size*$PX;\n    }\n  }\n\n  &--coffin {\n    $size: 50;\n    [data-component=\"icon\"] {\n      width:  $size*$PX;\n      height: $size*$PX;\n    }\n  }\n  &--vampire {\n    $size: 50;\n    [data-component=\"icon\"] {\n      width:  $size*$PX;\n      height: $size*$PX;\n    }\n  }\n\n  &--bat {\n    $size: 50;\n    [data-component=\"icon\"] {\n      width:  $size*$PX;\n      height: $size*$PX;\n    }\n  }*/\n}\n\n._card_1xj68_4 [data-component=\"icon\"] {\n  fill:         #2C405A;\n  position:     absolute;\n  left:         50%;\n  top:          50%;\n  -webkit-transform:    translate(-50%, -50%);\n          transform:    translate(-50%, -50%);\n  width:        44px;\n  height:       44px;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n._card_1xj68_4:hover {\n  -webkit-transform:       rotateY(170deg);\n          transform:       rotateY(170deg);\n}\n\n._card_1xj68_4._is-open_1xj68_25 {\n  -webkit-transform:       rotateY(0deg);\n          transform:       rotateY(0deg);\n}\n\n._card__inner_1xj68_1 {\n  position:       absolute;\n  width:       100%;\n  height:       100%;\n  background:       white;\n  box-sizing:       border-box;\n  border-radius:       inherit;\n  -webkit-backface-visibility:       hidden;\n          backface-visibility:       hidden;\n  -webkit-transform-style:       preserve-3d;\n          transform-style:       preserve-3d;\n}\n\n@media all and (max-width: 535px) {\n\n  ._card_1xj68_4 {\n    margin-left:       10px;\n    margin-top:       10px;\n  }\n  }\n\n@media all and (max-width: 450px) {\n\n  ._card_1xj68_4 {\n    margin-left:       15px;\n    margin-top:       15px;\n  }\n  }\n", ""]);

	// exports


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(65);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(69);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(70);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(74);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(108);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _preact = __webpack_require__(6);

	var _tryStagger = __webpack_require__(140);

	var _tryStagger2 = _interopRequireDefault(_tryStagger);

	var _ghost = __webpack_require__(143);

	var _ghost2 = _interopRequireDefault(_ghost);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASSES = __webpack_require__(147);
	__webpack_require__(148);

	var Scores = function (_Component) {
	  (0, _inherits3.default)(Scores, _Component);

	  function Scores() {
	    (0, _classCallCheck3.default)(this, Scores);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Scores).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Scores, [{
	    key: 'render',
	    value: function render() {
	      var state = this.props.state;
	      var cards = state.cards;

	      cards = cards.present;

	      var highSore = cards.highScore != null ? (0, _preact.h)(
	        'span',
	        null,
	        ' / ',
	        (0, _preact.h)(
	          'em',
	          null,
	          cards.highScore
	        ),
	        ' best'
	      ) : null;

	      return (0, _preact.h)(
	        'div',
	        { className: CLASSES.scores, 'data-component': 'scores' },
	        (0, _preact.h)(_ghost2.default, { state: state }),
	        (0, _preact.h)(
	          'div',
	          { className: CLASSES.scores__text },
	          (0, _preact.h)(_tryStagger2.default, { state: state }),
	          (0, _preact.h)(
	            'em',
	            null,
	            ' ',
	            cards.tries,
	            ' '
	          ),
	          ' ',
	          cards.tries === 1 ? 'try' : 'tries',
	          highSore
	        )
	      );
	    }
	  }]);
	  return Scores;
	}(_preact.Component);

	exports.default = Scores;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(141);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(65);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(69);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(70);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(74);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(108);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _preact = __webpack_require__(6);

	var _moJs = __webpack_require__(125);

	var _moJs2 = _interopRequireDefault(_moJs);

	var _mojsAddThunder = __webpack_require__(142);

	var _mojsAddThunder2 = _interopRequireDefault(_mojsAddThunder);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TryStagger = function (_Component) {
	  (0, _inherits3.default)(TryStagger, _Component);

	  function TryStagger() {
	    (0, _classCallCheck3.default)(this, TryStagger);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TryStagger).apply(this, arguments));
	  }

	  (0, _createClass3.default)(TryStagger, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return (0, _preact.h)('div', { ref: function ref(el) {
	          _this2._el = el;
	        } });
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate() {
	      var store = this.context.store;

	      var _store$getState = store.getState();

	      var cards = _store$getState.cards;


	      if (cards.tries !== this._tries) {
	        this._tries = cards.tries;
	        this._stagger.timeline.replay();
	      }

	      return false;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var ShapeStagger = _moJs2.default.stagger(_moJs2.default.Shape);
	      this._stagger = new ShapeStagger({
	        parent: this._el,
	        quantifier: 4,
	        shape: 'thunder',
	        scale: { 1: .5 },
	        left: -10,
	        y: [(0, _defineProperty3.default)({}, -2, 3), -4, (0, _defineProperty3.default)({}, -7, 2)],
	        x: [(0, _defineProperty3.default)({}, -5, -10), { 0: -2 }, { 2: -3 }],
	        radius: 'rand(8, 10)',
	        // fill:       ['#FF4E84', '#f5f5f5'],
	        fill: ['#FFD555', '#f5f5f5'],
	        duration: 150,
	        delay: [150, 15, 50, 0],
	        isShowEnd: false
	      });

	      var store = this.context.store;

	      var _store$getState2 = store.getState();

	      var cards = _store$getState2.cards;


	      this._tries = cards.tries;
	    }
	  }]);
	  return TryStagger;
	}(_preact.Component);

	exports.default = TryStagger;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(71);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getPrototypeOf = __webpack_require__(65);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(69);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(70);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(74);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(108);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _moJs = __webpack_require__(125);

	var _moJs2 = _interopRequireDefault(_moJs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Thunder = function (_mojs$CustomShape) {
	  (0, _inherits3.default)(Thunder, _mojs$CustomShape);

	  function Thunder() {
	    (0, _classCallCheck3.default)(this, Thunder);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Thunder).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Thunder, [{
	    key: 'getShape',
	    value: function getShape() {
	      return '<path d="M51.8727183,41.74889 C58.2886587,41.7488903 68.5722743,41.74889 68.5722743,41.74889 L33.0518007,100 L33.0518007,58.6334484 L23,58.6334484 L23,0 L77.2673902,0 C77.2673902,0 55.1414441,36.0160828 51.8727183,41.74889 Z"></path>';
	    }
	  }]);
	  return Thunder;
	}(_moJs2.default.CustomShape);

	_moJs2.default.addShape('thunder', Thunder);

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(65);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(69);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(70);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(74);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(108);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _preact = __webpack_require__(6);

	var _icon = __webpack_require__(127);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASSES = __webpack_require__(144);
	__webpack_require__(145);

	var Scores = function (_Component) {
	  (0, _inherits3.default)(Scores, _Component);

	  function Scores() {
	    (0, _classCallCheck3.default)(this, Scores);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Scores).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Scores, [{
	    key: 'render',
	    value: function render() {
	      // const {state} = this.props;
	      // const {cards} = state;

	      return (0, _preact.h)(
	        'div',
	        { className: CLASSES.ghost, 'data-component': 'ghost' },
	        (0, _preact.h)(
	          'div',
	          { className: CLASSES.ghost__inner },
	          (0, _preact.h)(_icon2.default, { shape: 'ghost', className: CLASSES.ghost__left }),
	          (0, _preact.h)(_icon2.default, { shape: 'ghost', className: CLASSES.ghost__right }),
	          (0, _preact.h)(_icon2.default, { shape: 'ghost' })
	        ),
	        (0, _preact.h)('div', { className: CLASSES.ghost__shadow })
	      );
	    }
	  }]);
	  return Scores;
	}(_preact.Component);

	exports.default = Scores;

/***/ },
/* 144 */
/***/ function(module, exports) {

	module.exports = {
		"ghost": "_ghost_1puxy_7",
		"ghost__left": "_ghost__left_1puxy_29",
		"ghost__right": "_ghost__right_1puxy_30",
		"ghost__inner": "_ghost__inner_1puxy_1",
		"floating": "_floating_1puxy_1",
		"ghost__shadow": "_ghost__shadow_1puxy_1",
		"floatingShadow": "_floatingShadow_1puxy_1"
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(146);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(132)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./ghost.postcss.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./ghost.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(131)();
	// imports


	// module
	exports.push([module.id, "/*$PX:      1/16rem;*/\n._ghost_1puxy_7 {\n  position:   relative;\n  width:      64px;\n  height:     60px;\n}\n._ghost_1puxy_7 [data-component=\"icon\"] {\n  position: absolute;\n  width:    100%;\n  height:   100%;\n  fill:     white;\n  /*fill:     $c-yellow;*/\n  cursor:   default\n  /*opacity: .9;*/\n}\n._ghost_1puxy_7 [data-component=\"icon\"]._ghost__left_1puxy_29, ._ghost_1puxy_7 [data-component=\"icon\"]._ghost__right_1puxy_30 {\n  opacity:   .75;\n  /*display: none;*/\n}\n._ghost_1puxy_7 [data-component=\"icon\"]._ghost__left_1puxy_29 {\n  fill:   cyan;\n  display:   none;\n  -webkit-transform:   translateX(-1px);\n          transform:   translateX(-1px);\n}\n._ghost_1puxy_7 [data-component=\"icon\"]._ghost__right_1puxy_30 {\n  fill:   hotpink;\n  display:   none;\n  -webkit-transform:   translateX(1px);\n          transform:   translateX(1px);\n}\n._ghost__inner_1puxy_1 {\n  position:   relative;\n  z-index:   1;\n  width:   64px;\n  height:   60px;\n  -webkit-animation:   _floating_1puxy_1 3s ease-in-out infinite;\n          animation:   _floating_1puxy_1 3s ease-in-out infinite;\n}\n._ghost__shadow_1puxy_1 {\n  position:   absolute;\n  width:   60%;\n  left:   20%;\n  height:   7px;\n  bottom:   -10px;\n  background:   rgba(0,0,0,.15);\n  border-radius:   50%;\n  -webkit-animation:   _floatingShadow_1puxy_1 3s ease-in-out infinite;\n          animation:   _floatingShadow_1puxy_1 3s ease-in-out infinite;\n}\n\n@-webkit-keyframes _floating_1puxy_1 {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  45% {\n    -webkit-transform: translate3d(0, -10%, 0);\n            transform: translate3d(0, -10%, 0);\n  }\n  55% {\n    -webkit-transform: translate3d(0, -10%, 0);\n            transform: translate3d(0, -10%, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes _floating_1puxy_1 {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  45% {\n    -webkit-transform: translate3d(0, -10%, 0);\n            transform: translate3d(0, -10%, 0);\n  }\n  55% {\n    -webkit-transform: translate3d(0, -10%, 0);\n            transform: translate3d(0, -10%, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n\n@-webkit-keyframes _floatingShadow_1puxy_1 {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85);\n  }\n  55% {\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n@keyframes _floatingShadow_1puxy_1 {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85);\n  }\n  55% {\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n", ""]);

	// exports


/***/ },
/* 147 */
/***/ function(module, exports) {

	module.exports = {
		"scores": "_scores_1i0fh_4",
		"scores__text": "_scores__text_1i0fh_1"
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(149);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(132)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./scores.postcss.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./scores.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(131)();
	// imports


	// module
	exports.push([module.id, "/*$PX:      1/16rem;*/\n\n._scores_1i0fh_4 [data-component=\"ghost\"] {\n\n    margin:         0 auto 15px;\n}\n\n._scores__text_1i0fh_1 {\n\n    position:         relative;\n\n    display:         inline-block;\n\n    font-size:         20px;\n\n    letter-spacing:         0.5px;\n\n    margin-bottom:         25px;\n\n    color:         white;\n}\n\n._scores__text_1i0fh_1 em {\n\n    font-size:         24px;\n\n    font-style:         normal;\n\n    color:         #EC5351;\n\n    font-weight:         bold;\n}", ""]);

	// exports


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(65);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(69);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(70);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(74);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(108);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _preact = __webpack_require__(6);

	var _hammerjs = __webpack_require__(124);

	var _hammerjs2 = _interopRequireDefault(_hammerjs);

	var _reduxUndo = __webpack_require__(116);

	var _constants = __webpack_require__(126);

	var _constants2 = _interopRequireDefault(_constants);

	var _button = __webpack_require__(151);

	var _button2 = _interopRequireDefault(_button);

	var _icon = __webpack_require__(127);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLS = __webpack_require__(155);
	__webpack_require__(156);

	var ResetButton = function (_Component) {
	  (0, _inherits3.default)(ResetButton, _Component);

	  function ResetButton() {
	    (0, _classCallCheck3.default)(this, ResetButton);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ResetButton).apply(this, arguments));
	  }

	  (0, _createClass3.default)(ResetButton, [{
	    key: 'render',
	    value: function render() {
	      var p = this.props;
	      var state = this.props.state;
	      var controls = state.controls;
	      var cards = state.cards;


	      var openClass = controls.isConfirm ? CLS['is-confirm'] : '';
	      var className = CLS['reset-button'] + ' ' + openClass;
	      return (0, _preact.h)(
	        'div',
	        { className: className, 'data-component': 'reset-button' },
	        this._renderReset(state),
	        this._renderMomento(state)
	      );
	    }
	  }, {
	    key: '_renderReset',
	    value: function _renderReset(state) {
	      var _this2 = this;

	      return (0, _preact.h)(
	        'span',
	        { style: { position: 'relative', display: 'inline-block' } },
	        (0, _preact.h)(
	          'button',
	          { className: CLS['reset-button__main'],
	            role: 'reset',
	            ref: function ref(el) {
	              _this2._main = el;
	            } },
	          'reset'
	        ),
	        (0, _preact.h)(
	          'button',
	          { className: CLS['reset-button__confirm'],
	            role: 'confirm reset',
	            ref: function ref(el) {
	              _this2._confirm = el;
	            } },
	          'sure?'
	        )
	      );
	    }
	  }, {
	    key: '_renderMomento',
	    value: function _renderMomento(state) {
	      var _this3 = this;

	      var controls = state.controls;
	      var cards = state.cards;

	      var cheatClass = controls.isCheat ? CLS['is-cheat'] : '';
	      var momentoClass = CLS['reset-button__momento'] + ' ' + cheatClass;
	      var undoClass = momentoClass + ' ' + (cards.past.length ? '' : CLS['is-disable']);
	      var redoClass = momentoClass + ' ' + (cards.future.length ? '' : CLS['is-disable']);

	      return (0, _preact.h)(
	        'span',
	        null,
	        (0, _preact.h)(
	          'button',
	          { className: undoClass,
	            role: 'undo',
	            ref: function ref(el) {
	              _this3._undo = el;
	            } },
	          (0, _preact.h)(_icon2.default, { shape: 'undo' })
	        ),
	        (0, _preact.h)(
	          'button',
	          { className: redoClass,
	            role: 'redo',
	            ref: function ref(el) {
	              _this3._redo = el;
	            } },
	          (0, _preact.h)(_icon2.default, { shape: 'redo' })
	        )
	      );
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var store = this.context.store;

	      var mainMC = new _hammerjs2.default.Manager(this._main);
	      var confirmMC = new _hammerjs2.default.Manager(this._confirm);
	      var undoMC = new _hammerjs2.default.Manager(this._undo);
	      var redoMC = new _hammerjs2.default.Manager(this._redo);
	      mainMC.add(new _hammerjs2.default.Tap());
	      confirmMC.add(new _hammerjs2.default.Tap());
	      undoMC.add(new _hammerjs2.default.Tap());
	      redoMC.add(new _hammerjs2.default.Tap());

	      mainMC.on('tap', function (e) {
	        store.dispatch({ type: 'SET_CONFIRM' });
	      });
	      confirmMC.on('tap', function (e) {
	        store.dispatch({ type: 'RESET_CARDS' });
	        store.dispatch(_reduxUndo.ActionCreators.clearHistory());
	      });

	      undoMC.on('tap', function (e) {
	        store.dispatch(_reduxUndo.ActionCreators.undo());
	      });
	      redoMC.on('tap', function (e) {
	        store.dispatch(_reduxUndo.ActionCreators.redo());
	      });
	    }
	  }]);
	  return ResetButton;
	}(_preact.Component);

	exports.default = ResetButton;

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(65);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(69);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(70);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(74);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(108);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _preact = __webpack_require__(6);

	var _hammerjs = __webpack_require__(124);

	var _hammerjs2 = _interopRequireDefault(_hammerjs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASSES = __webpack_require__(152);
	__webpack_require__(153);

	var Button = function (_Component) {
	  (0, _inherits3.default)(Button, _Component);

	  function Button() {
	    (0, _classCallCheck3.default)(this, Button);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Button).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Button, [{
	    key: 'render',
	    value: function render() {
	      var p = this.props;

	      return (0, _preact.h)(
	        'div',
	        { className: CLASSES['button'] + ' ' + (p.className || ''),
	          'data-component': 'button' },
	        p.title || 'restart'
	      );
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      if (!this.props.onTap) {
	        return;
	      }

	      var mc = new _hammerjs2.default.Manager(this.base);
	      mc.add(new _hammerjs2.default.Tap());

	      mc.on('tap', function (e) {
	        _this2.props.onTap(e);
	      });
	    }
	  }]);
	  return Button;
	}(_preact.Component);

	exports.default = Button;

/***/ },
/* 152 */
/***/ function(module, exports) {

	module.exports = {
		"button": "_button_zxabv_4"
	};

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(154);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(132)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./button.postcss.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./button.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(131)();
	// imports


	// module
	exports.push([module.id, "/*$PX:      1/16rem;*/\n\n._button_zxabv_4 {\n  background:     #EC5351;\n  font-size:      14px;\n  color:          white;\n  padding:        6px 35px 8px;\n  border-radius:  4px;\n  position:       relative;\n  cursor:         pointer;\n  z-index:        1;\n  position:       relative;\n  display:        inline-block\n  \n}\n\n._button_zxabv_4:hover {\n  background:     #FF6361\n  \n}\n\n._button_zxabv_4:active {\n  background:     #EC5351\n  \n}\n", ""]);

	// exports


/***/ },
/* 155 */
/***/ function(module, exports) {

	module.exports = {
		"reset-button": "_reset-button_8gblh_4",
		"reset-button__momento": "_reset-button__momento_8gblh_1",
		"is-disable": "_is-disable_8gblh_34",
		"is-cheat": "_is-cheat_8gblh_39",
		"reset-button__main": "_reset-button__main_8gblh_1",
		"reset-button__confirm": "_reset-button__confirm_8gblh_80",
		"is-confirm": "_is-confirm_8gblh_79"
	};

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(157);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(132)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./reset-button.postcss.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./reset-button.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(131)();
	// imports


	// module
	exports.push([module.id, "/*$PX:      1/16rem;*/\n\n._reset-button_8gblh_4 {\n  position:       relative;\n  display:        inline-block;\n}\n\n._reset-button_8gblh_4 button {\n  border:       none;\n  color:        white;\n  cursor:       pointer\n}\n\n._reset-button_8gblh_4 button:focus {\n  outline:       0;\n}\n\n._reset-button__momento_8gblh_1 {\n  background:       #F27B35;\n  height:       31px;\n  position:       relative;\n  top:       8px;\n  margin-left:       5px;\n  border-radius:       4px;\n  display:       none;\n}\n\n._reset-button__momento_8gblh_1 [data-component=\"icon\"] {\n  width:       14px;\n  height:       14px;\n  cursor:       inherit;\n}\n\n._reset-button__momento_8gblh_1:hover {\n  opacity:       .85;\n}\n\n._reset-button__momento_8gblh_1:active {\n  opacity:       1;\n}\n\n._reset-button__momento_8gblh_1._is-disable_8gblh_34 {\n  cursor:       default;\n  background:       gray;\n  opacity:       .5;\n}\n\n._reset-button__momento_8gblh_1._is-cheat_8gblh_39 {\n  display:       inline-block;\n}\n\n._reset-button__main_8gblh_1 {\n  background:       #EC5351;\n  font-size:       14px;\n  color:       white;\n  padding:       6px 35px 8px;\n  border-radius:       4px;\n  position:       relative;\n  cursor:       pointer;\n  z-index:       1;\n}\n\n._reset-button__main_8gblh_1:hover {\n  background:       #FF6361;\n}\n\n._reset-button__main_8gblh_1:active {\n  background:       #EC5351;\n}\n\n._reset-button__confirm_8gblh_80 {\n  background:       #FFD555;\n  color:       #2C405A !important;\n  position:       absolute;\n  top:       100%;\n  left:       50%;\n  height:       20px;\n  padding:       2px 16px 7px;\n  font-size:       10px;\n  border-bottom-left-radius:       18px;\n  border-bottom-right-radius:       18px;\n  -webkit-transform:       translate(-50%, -100%);\n          transform:       translate(-50%, -100%);\n  -webkit-transition:       all 0.225s ease-out;\n  transition:       all 0.225s ease-out;\n}\n\n._reset-button__confirm_8gblh_80:hover {\n  opacity:       .9;\n}\n\n._reset-button_8gblh_4._is-confirm_8gblh_79 ._reset-button__confirm_8gblh_80 {\n  -webkit-transform:       translate(-50%, 0);\n          transform:       translate(-50%, 0);\n}\n", ""]);

	// exports


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(65);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(69);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(70);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(74);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(108);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _preact = __webpack_require__(6);

	var _moJs = __webpack_require__(125);

	var _moJs2 = _interopRequireDefault(_moJs);

	var _congratsCounter = __webpack_require__(159);

	var _congratsCounter2 = _interopRequireDefault(_congratsCounter);

	var _congratsButton = __webpack_require__(163);

	var _congratsButton2 = _interopRequireDefault(_congratsButton);

	var _congratsTexts = __webpack_require__(164);

	var _congratsTexts2 = _interopRequireDefault(_congratsTexts);

	var _congratsBg = __webpack_require__(165);

	var _congratsBg2 = _interopRequireDefault(_congratsBg);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(160);
	var CLS = __webpack_require__(162);

	var Congrats = function (_Component) {
	  (0, _inherits3.default)(Congrats, _Component);

	  function Congrats() {
	    (0, _classCallCheck3.default)(this, Congrats);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Congrats).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Congrats, [{
	    key: 'render',
	    value: function render() {
	      var state = this.props.state;

	      return (0, _preact.h)(
	        'div',
	        { className: CLS['congrats'] },
	        (0, _preact.h)(_congratsBg2.default, { timeline: this._timeline }),
	        (0, _preact.h)(_congratsTexts2.default, { timeline: this._timeline }),
	        (0, _preact.h)(_congratsButton2.default, { timeline: this._timeline }),
	        (0, _preact.h)(_congratsCounter2.default, { timeline: this._timeline, state: state })
	      );
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate() {
	      this._checkPlay();
	      return false;
	    }
	  }, {
	    key: '_checkPlay',
	    value: function _checkPlay() {
	      var store = this.context.store;

	      var state = store.getState();
	      var isPlay = state.cards.present.pairsLeft === 0;
	      isPlay && this._play();
	      isPlay || this._hide();
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this._timeline = new _moJs2.default.Timeline();
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      setTimeout(this._checkPlay.bind(this), 100);
	    }
	  }, {
	    key: '_play',
	    value: function _play() {
	      if (this._isPlay === true) {
	        return;
	      }
	      this.base.style.display = 'block';
	      this._timeline.play();
	      this._isPlay = true;
	    }
	  }, {
	    key: '_hide',
	    value: function _hide() {
	      if (!this._isPlay) {
	        return;
	      }
	      if (this._timeline.progress > 0) {
	        this._timeline.setProgress(0);
	      }
	      this.base.style.display = 'none';
	      this._isPlay = false;
	    }
	  }]);
	  return Congrats;
	}(_preact.Component);

	exports.default = Congrats;

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(65);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(69);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(70);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(74);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(108);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _preact = __webpack_require__(6);

	var _moJs = __webpack_require__(125);

	var _moJs2 = _interopRequireDefault(_moJs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(160);
	var CLS = __webpack_require__(162);

	var CongratsCounter = function (_Component) {
	  (0, _inherits3.default)(CongratsCounter, _Component);

	  function CongratsCounter() {
	    (0, _classCallCheck3.default)(this, CongratsCounter);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CongratsCounter).apply(this, arguments));
	  }

	  (0, _createClass3.default)(CongratsCounter, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var state = this.props.state;

	      var tries = state.cards.present.tries;

	      return (0, _preact.h)(
	        'div',
	        { className: CLS['congrats__counter'],
	          ref: function ref(el) {
	            _this2._counter = el;
	          } },
	        (0, _preact.h)('div', { className: CLS['congrats__counter-number'],
	          ref: function ref(el) {
	            _this2._number = el;
	          } }),
	        (0, _preact.h)(
	          'div',
	          { className: CLS['congrats__counter-footer'] },
	          tries === 1 ? 'try' : 'tries'
	        )
	      );
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this3 = this;

	      var state = this.props.state;

	      var tries = state.cards.present.tries;

	      var counter = new _moJs2.default.Html({
	        el: this._counter,
	        opacity: { 0: 1 },
	        duration: 1200,
	        delay: 900,
	        easing: 'cubic.out',
	        onStart: function onStart() {
	          var store = _this3.context.store;

	          var state = store.getState();
	          tries = state.cards.present.tries;
	        },
	        onUpdate: function onUpdate(ep, p) {
	          _this3._number.innerHTML = Math.round(ep * tries);
	        }
	      });

	      this.props.timeline.add(counter);
	    }
	  }]);
	  return CongratsCounter;
	}(_preact.Component);

	exports.default = CongratsCounter;

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(161);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(132)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./congrats.postcss.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./congrats.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(131)();
	// imports


	// module
	exports.push([module.id, "/*$PX:      1/16rem;*/\n\n._congrats_pcf8y_3 {\n  position:     absolute;\n  z-index:      5;\n  left:         0;\n  top:          20px;\n  right:        0;\n  bottom:       0;\n  display:      none;\n  overflow:     hidden\n}\n\n._congrats__counter_pcf8y_1 {\n  position:     absolute;\n  top:     15px;\n  right:     20px;\n  z-index:     2;\n  color:     #2C405A;\n  opacity:     0\n}\n\n._congrats__counter-footer_pcf8y_1 {\n  font-family:     'bebasregular';\n  font-size:     7px;\n  width:     30px;\n  text-align:     center\n}\n\n._congrats__counter-number_pcf8y_1 {\n  font-family:     Menlo;\n  color:     $c-green;\n  font-size:     14px;\n  text-align:     center\n  /*margin-left:  calc(-.8*$GS);*/\n  /*&:before {\n        content: '+';\n      }*/\n}\n\n._congrats__background_pcf8y_1 {\n  position:     absolute;\n  left:     0;\n  top:     0;\n  right:     0;\n  bottom:     0;\n  opacity:     .975;\n  overflow:     hidden;\n  border-radius:     6px\n}\n\n._congrats__button_pcf8y_1 {\n  position:     absolute;\n  left:     50%;\n  top:     50%;\n  cursor:     pointer;\n  margin-top:     20px;\n  margin-left:     -50px;\n  border:     none;\n  color:     white;\n  font:     inherit;\n  font-size:     12px;\n  padding:     10px 20px;\n  z-index:     1;\n  -webkit-appearance:     none;\n     -moz-appearance:     none;\n          appearance:     none;\n  border-radius:     6px;\n  background:     transparent;\n  overflow:     hidden;\n  outline:     0;\n  letter-spacing:     0.5px;\n  font-size:     12px\n  /*&:focus {\n      outline:    calc(2*$PX) solid $c-yellow;\n    }*/\n}\n\n._congrats__button_pcf8y_1:hover {\n  opacity:     .85\n}\n\n._congrats__button-text_pcf8y_1 {\n  position:     relative;\n  z-index:     2;\n  display:     inline-block;\n  /*transform-origin: '50% 100%',*/\n  opacity:     0\n}\n\n._congrats__texts_pcf8y_1 {\n  position:     absolute;\n  z-index:     2;\n  width:     270px;\n  left:     50%;\n  margin-left:     -135px;\n  top:     20%\n}\n\n._congrats__text_pcf8y_1 {\n  position:     absolute;\n  top:     0;\n  font-family:     Bebas, 'bebasregular';\n  font-size:     20px;\n  text-transform:     uppercase;\n  letter-spacing:     0.5px;\n  opacity:     0\n}\n\n._congrats__text--1_pcf8y_1 {\n  left:     0;\n  color:     #EC5351;\n  -webkit-transform:     rotate(-10deg) translateY(7px);\n          transform:     rotate(-10deg) translateY(7px)\n}\n\n._congrats__text--2_pcf8y_1 {\n  left:     50%;\n  margin-left:     -15.5px;\n  color:     #2C405A\n}\n\n._congrats__text--3_pcf8y_1 {\n  right:     0;\n  color:     #F27B35;\n  -webkit-transform:     rotate(10deg) translateY(7px);\n          transform:     rotate(10deg) translateY(7px)\n}", ""]);

	// exports


/***/ },
/* 162 */
/***/ function(module, exports) {

	module.exports = {
		"congrats": "_congrats_pcf8y_3",
		"congrats__counter": "_congrats__counter_pcf8y_1",
		"congrats__counter-footer": "_congrats__counter-footer_pcf8y_1",
		"congrats__counter-number": "_congrats__counter-number_pcf8y_1",
		"congrats__background": "_congrats__background_pcf8y_1",
		"congrats__button": "_congrats__button_pcf8y_1",
		"congrats__button-text": "_congrats__button-text_pcf8y_1",
		"congrats__texts": "_congrats__texts_pcf8y_1",
		"congrats__text": "_congrats__text_pcf8y_1",
		"congrats__text--1": "_congrats__text--1_pcf8y_1",
		"congrats__text--2": "_congrats__text--2_pcf8y_1",
		"congrats__text--3": "_congrats__text--3_pcf8y_1"
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getOwnPropertyDescriptor = __webpack_require__(23);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	var _defineProperty2 = __webpack_require__(141);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(65);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(69);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(70);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(74);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(108);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _desc, _value, _class;

	var _preact = __webpack_require__(6);

	var _reduxUndo = __webpack_require__(116);

	var _decko = __webpack_require__(121);

	var _moJs = __webpack_require__(125);

	var _moJs2 = _interopRequireDefault(_moJs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	__webpack_require__(160);
	var CLS = __webpack_require__(162);

	var CongratsButton = (_class = function (_Component) {
	  (0, _inherits3.default)(CongratsButton, _Component);

	  function CongratsButton() {
	    (0, _classCallCheck3.default)(this, CongratsButton);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CongratsButton).apply(this, arguments));
	  }

	  (0, _createClass3.default)(CongratsButton, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return (0, _preact.h)(
	        'button',
	        { className: CLS['congrats__button'],
	          onClick: this._onClick,
	          ref: function ref(el) {
	            _this2._button = el;
	          } },
	        (0, _preact.h)(
	          'span',
	          { className: CLS['congrats__button-text'],
	            ref: function ref(el) {
	              _this2._buttonText = el;
	            } },
	          'restart game'
	        )
	      );
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate() {
	      return false;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var timeline = new _moJs2.default.Timeline({ delay: 200 });
	      var ShapeStagger = _moJs2.default.stagger(_moJs2.default.Shape);

	      var DURATION = 700;
	      var text = new _moJs2.default.Html({
	        el: this._buttonText,
	        opacity: { 0: 1 },
	        x: (0, _defineProperty3.default)({}, 50, 0),
	        easing: 'cubic.inout',
	        duration: DURATION,
	        delay: 125
	      });

	      var button = new ShapeStagger({
	        parent: this._button,
	        quantifier: 3,
	        left: 0,
	        fill: ['#FF4B83', 'yellow', '#2AC1CB'],
	        scale: { 0: 1 },
	        radius: 155,
	        duration: DURATION,
	        easing: 'cubic.inout',
	        delay: 'stagger(75)'
	      });

	      timeline.add(button.timeline);
	      timeline.add(text);

	      this.props.timeline.add(timeline);
	    }
	  }, {
	    key: '_onClick',
	    value: function _onClick() {
	      var store = this.context.store;

	      store.dispatch({ type: 'RESET_CARDS_HIGH_SCORE' });
	      store.dispatch(_reduxUndo.ActionCreators.clearHistory());
	    }
	  }]);
	  return CongratsButton;
	}(_preact.Component), (_applyDecoratedDescriptor(_class.prototype, '_onClick', [_decko.bind], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, '_onClick'), _class.prototype)), _class);
	exports.default = CongratsButton;

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(65);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(69);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(70);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(74);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(108);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _preact = __webpack_require__(6);

	var _moJs = __webpack_require__(125);

	var _moJs2 = _interopRequireDefault(_moJs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(160);
	var CLS = __webpack_require__(162);

	var Congrats = function (_Component) {
	  (0, _inherits3.default)(Congrats, _Component);

	  function Congrats() {
	    (0, _classCallCheck3.default)(this, Congrats);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Congrats).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Congrats, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var textClass1 = CLS['congrats__text'] + ' ' + CLS['congrats__text--1'];
	      var textClass2 = CLS['congrats__text'] + ' ' + CLS['congrats__text--2'];
	      var textClass3 = CLS['congrats__text'] + ' ' + CLS['congrats__text--3'];
	      return (0, _preact.h)(
	        'div',
	        { className: CLS['congrats__texts'] },
	        (0, _preact.h)(
	          'div',
	          { className: textClass1,
	            ref: function ref(el) {
	              _this2._text1 = el;
	            } },
	          'great'
	        ),
	        (0, _preact.h)(
	          'div',
	          { className: textClass2,
	            ref: function ref(el) {
	              _this2._text2 = el;
	            } },
	          'job,'
	        ),
	        (0, _preact.h)(
	          'div',
	          { className: textClass3,
	            ref: function ref(el) {
	              _this2._text3 = el;
	            } },
	          'buddy!'
	        )
	      );
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate() {
	      return false;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var timeline = new _moJs2.default.Timeline({ delay: 400 });

	      timeline.add(this._createTextBurst(this._text1, 0, 0));
	      timeline.add(this._createTextBurst(this._text2, 100, 1));
	      timeline.add(this._createTextBurst(this._text3, 200, 2));

	      this.props.timeline.add(timeline);
	    }
	  }, {
	    key: '_createTextBurst',
	    value: function _createTextBurst(parent, delay) {
	      var i = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

	      var timeline = new _moJs2.default.Timeline({ delay: delay });
	      var colors = ['#FF4B83', '#2AC1CB', '#344D6D'];

	      var burst2 = new _moJs2.default.Burst({
	        parent: parent,
	        isShowStart: true,
	        count: 3,
	        radius: { 0: 50 },
	        angle: 90,
	        children: { fill: '#FFD555', radius: 30 }
	      });

	      var burst1 = new _moJs2.default.Burst({
	        parent: parent,
	        isShowStart: true,
	        count: 5,
	        radiusX: { 50: 100 },
	        children: { stroke: colors[i], shape: 'line', scaleY: 1 },
	        timeline: {
	          onStart: function onStart() {
	            parent.style.opacity = 1;
	          },
	          onRefresh: function onRefresh() {
	            parent.style.opacity = 0;
	          }
	        }
	      });

	      return timeline.add(burst1, burst2);
	    }
	  }]);
	  return Congrats;
	}(_preact.Component);

	exports.default = Congrats;

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(48);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(65);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(69);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(70);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(74);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(108);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _preact = __webpack_require__(6);

	var _moJs = __webpack_require__(125);

	var _moJs2 = _interopRequireDefault(_moJs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(160);
	var CLS = __webpack_require__(162);

	var Congrats = function (_Component) {
	  (0, _inherits3.default)(Congrats, _Component);

	  function Congrats() {
	    (0, _classCallCheck3.default)(this, Congrats);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Congrats).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Congrats, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return (0, _preact.h)('div', { className: CLS['congrats__background'],
	        ref: function ref(el) {
	          _this2._bg = el;
	        } });
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate() {
	      return false;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var ShapeStagger = _moJs2.default.stagger(_moJs2.default.Shape);
	      var OPTS = {
	        parent: this._bg,
	        quantifier: 5,
	        x: 'rand(-50, 50)',
	        y: 'rand(-50, 50)',
	        fill: 'white',
	        scale: { 0: 1 },
	        radius: 300,
	        duration: 1000,
	        delay: 'rand(0, 300)'
	      };

	      var bg1 = new ShapeStagger((0, _extends3.default)({}, OPTS, {
	        left: 'stagger(25%)',
	        top: 'stagger(25%)'
	      }));

	      var bg2 = new ShapeStagger((0, _extends3.default)({}, OPTS, {
	        left: [0, '100%'],
	        top: ['100%', 0]
	      }));

	      this.props.timeline.add(bg1, bg2);
	    }
	  }]);
	  return Congrats;
	}(_preact.Component);

	exports.default = Congrats;

/***/ },
/* 166 */
/***/ function(module, exports) {

	module.exports = {
		"game": "_game_1b2wq_5",
		"fadeIn": "_fadeIn_1b2wq_1",
		"game__inner": "_game__inner_1b2wq_70",
		"game__left": "_game__left_1b2wq_65",
		"game__right": "_game__right_1b2wq_57"
	};

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(168);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(132)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./game.postcss.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/source-map-loader/index.js!./game.postcss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(131)();
	// imports


	// module
	exports.push([module.id, "/*$PX:      1/16rem;*/\n._game_1b2wq_5 {\n  /*margin-top:       30*$PX;*/\n  font-family:      Arial, sans-serif;\n  text-align:       center;\n  -webkit-perspective:      800px;\n          perspective:      800px;\n  padding-bottom:   30px;\n  \n  position:         absolute;\n  left:             50%;\n  top:              50%;\n  /*transform:        translate(-50%, -50%);*/\n  margin-top:       -235px;\n  margin-left:      -375px;\n  -webkit-animation:        _fadeIn_1b2wq_1 0.5s ease-in;\n          animation:        _fadeIn_1b2wq_1 0.5s ease-in\n}\n._game__inner_1b2wq_70 {\n  display:      inline-block;\n  padding-right:      200px;\n  position:      relative\n}\n._game__left_1b2wq_65 {\n  /*max-width:      550*$PX;*/\n  width:      550px;\n  display:      -webkit-box;\n  display:      -ms-flexbox;\n  display:      flex;\n  -ms-flex-wrap:      wrap;\n      flex-wrap:      wrap;\n  -ms-flex-line-pack:      center;\n      align-content:      center;\n  margin-left:      -20px\n}\n._game__right_1b2wq_57 {\n  position:      absolute;\n  right:      0;\n  top:      0;\n  bottom:      0;\n  width:      200px;\n  padding-top:      140px\n  /*[data-component=\"scores\"] {\n      position:     absolute;\n      left:         50%;\n      top:          50%;\n      transform:    translate(-50%, -50%);\n    }*/\n}\n@media (max-width: 820px) {\n  ._game_1b2wq_5 {\n    width:      100%;\n    -webkit-transform:      translateY(-50%);\n            transform:      translateY(-50%);\n    margin-top:      0;\n    margin-left:      0;\n    left:      0;\n  }\n  ._game_1b2wq_5 ._game__right_1b2wq_57 {\n    position:      static;\n    float:      left;\n    width:      100%;\n    padding-top:      20px;\n    padding-bottom:      20px\n  }\n  ._game_1b2wq_5 ._game__left_1b2wq_65 {\n    clear:      both;\n    padding-left:      30px\n  }\n  ._game_1b2wq_5 ._game__inner_1b2wq_70 {\n    padding-right:      0\n  }\n  }\n@media (max-width: 535px) {\n  ._game_1b2wq_5 {\n    left:      0;\n    margin:      0 auto;\n  }\n  ._game_1b2wq_5 ._game__left_1b2wq_65 {\n    width:      450px;\n    margin-left:      -10px;\n    padding-left:      0\n    /*margin: 0 auto;*/\n  }\n  }\n@media (max-width: 450px) {\n  ._game_1b2wq_5 ._game__left_1b2wq_65 {\n    width:      320px\n  }\n  }\n@media (max-height: 460px) {\n  ._game_1b2wq_5 {\n    top:      0;\n    margin-top:      0;\n    -webkit-transform:      none;\n            transform:      none\n  }\n  }\n@media (max-width: 820px) and (max-height: 740px) {\n  ._game_1b2wq_5 {\n    position:      static;\n    -webkit-transform:      none;\n            transform:      none\n  }\n  }\n\n\n@-webkit-keyframes _fadeIn_1b2wq_1 {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n\n@keyframes _fadeIn_1b2wq_1 {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}", ""]);

	// exports


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(7);

	var _indexReducer = __webpack_require__(170);

	var _indexReducer2 = _interopRequireDefault(_indexReducer);

	var _reduxThunk = __webpack_require__(195);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var enhancer = (0, _redux.compose)(
	// persistState(),
	(0, _redux.applyMiddleware)(_reduxThunk2.default));
	// import persistState from 'redux-localstorage';


	var initStore = function initStore() {
	  return (0, _redux.createStore)(_indexReducer2.default, enhancer);
	};

	exports.default = initStore;

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(48);

	var _extends3 = _interopRequireDefault(_extends2);

	var _redux = __webpack_require__(7);

	var _reduxUndo = __webpack_require__(116);

	var _reduxUndo2 = _interopRequireDefault(_reduxUndo);

	var _reduxRecycle = __webpack_require__(171);

	var _reduxRecycle2 = _interopRequireDefault(_reduxRecycle);

	var _cardsReducer = __webpack_require__(172);

	var _cardsReducer2 = _interopRequireDefault(_cardsReducer);

	var _controlsReducer = __webpack_require__(194);

	var _controlsReducer2 = _interopRequireDefault(_controlsReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var UNDOABLE_OPTS = {
	  limit: 10,
	  filter: function filterActions(action, currState, history) {
	    return action.isRecord; // only add to history if isRecord set on action
	  }
	};

	var reducer = (0, _reduxRecycle2.default)((0, _redux.combineReducers)({
	  cards: (0, _reduxUndo2.default)(_cardsReducer2.default, (0, _extends3.default)({}, UNDOABLE_OPTS)),
	  controls: _controlsReducer2.default
	}), ['SET_APP_STATE'], function (state, action) {
	  return action.data;
	});

	exports.default = reducer;

/***/ },
/* 171 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = recycleState;
	// redux-recycle higher order reducer
	function recycleState(reducer) {
	  var actions = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	  var initialState = arguments[2];

	  var getInitialState = typeof initialState === 'function' ? initialState : function () {
	    return initialState;
	  };

	  return function (state, action) {
	    if (actions.indexOf(action.type) >= 0) {
	      return reducer(getInitialState(state, action), { type: '@@redux-recycle/INIT' });
	    }
	    return reducer(state, action);
	  };
	}
	// /redux-recycle

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(48);

	var _extends3 = _interopRequireDefault(_extends2);

	var _toConsumableArray2 = __webpack_require__(173);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _slicedToArray2 = __webpack_require__(183);

	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

	var _makeCards = __webpack_require__(190);

	var _makeCards2 = _interopRequireDefault(_makeCards);

	var _constants = __webpack_require__(126);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var INITIAL_STATE = {
	  cards: (0, _makeCards2.default)(),
	  highScore: null,
	  tries: 0,
	  pairsLeft: _constants2.default.CARDS_AMOUNT / 2,
	  prevID: null,
	  open: []
	};

	var checkEqual = function checkEqual(state, action) {
	  var cards = state.cards;
	  var open = state.open;

	  if (open.length < 2) {
	    return state;
	  }

	  var _open = (0, _slicedToArray3.default)(open, 2);

	  var id1 = _open[0];
	  var id2 = _open[1];

	  var first = cards[id1];
	  var second = cards[id2];

	  if (first.type === second.type) {
	    var newCards = [].concat((0, _toConsumableArray3.default)(cards));
	    var pairsLeft = state.pairsLeft - 1;
	    newCards[id1] = (0, _extends3.default)({}, first, { isPlay: pairsLeft > 0 ? true : false });
	    newCards[id2] = (0, _extends3.default)({}, second, { isPlay: pairsLeft > 0 ? true : false });
	    return (0, _extends3.default)({}, state, { open: [], cards: newCards, pairsLeft: pairsLeft });
	  }
	  return state;
	};

	var cardsReducer = function cardsReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'OPEN_CARD':
	      {
	        var id = action.data;
	        var cards = state.cards;
	        var open = state.open;

	        if (cards[id].isOpen || open.length >= 2) {
	          return state;
	        }

	        var newCards = [].concat((0, _toConsumableArray3.default)(cards));
	        newCards[id] = (0, _extends3.default)({}, cards[id], { isOpen: true });
	        var newState = (0, _extends3.default)({}, state, { cards: newCards, open: [].concat((0, _toConsumableArray3.default)(open), [id]) });

	        return checkEqual(newState, action);
	      }

	    case 'CHECK_OPEN_CARDS':
	      {
	        var _cards = state.cards;
	        var _open2 = state.open;

	        if (_open2.length < 2) {
	          return state;
	        }

	        var _open3 = (0, _slicedToArray3.default)(_open2, 2);

	        var id1 = _open3[0];
	        var id2 = _open3[1];

	        var first = _cards[id1];
	        var second = _cards[id2];

	        if (first.type !== second.type) {
	          var _newCards = [].concat((0, _toConsumableArray3.default)(_cards));
	          _newCards[id1] = (0, _extends3.default)({}, first, { isOpen: false });
	          _newCards[id2] = (0, _extends3.default)({}, second, { isOpen: false });
	          return (0, _extends3.default)({}, state, { cards: _newCards, open: [], tries: state.tries + 1 });
	        }

	        return (0, _extends3.default)({}, state, { open: [] });
	      }

	    // case 'CHECK_EQUAL_CARDS': {
	    //   const {cards, open} = state;
	    //   if (open.length < 2) { return state; }

	    //   const [id1, id2] = open;
	    //   const first  = cards[id1];
	    //   const second = cards[id2];

	    //   if (first.type === second.type) {
	    //     const newCards = [...cards];
	    //     const pairsLeft = state.pairsLeft-1;
	    //     newCards[id1] = { ...first, isPlay: (pairsLeft > 0) ? true : false };
	    //     newCards[id2] = { ...second, isPlay: (pairsLeft > 0) ? true : false };
	    //     return {...state, open: [], cards: newCards, pairsLeft };
	    //   }
	    //   return state;
	    // }

	    case 'CARDS_RESET_PLAY':
	      {
	        var _action$data = (0, _slicedToArray3.default)(action.data, 2);

	        var _id = _action$data[0];
	        var _id2 = _action$data[1];


	        var _newState = (0, _extends3.default)({}, state);
	        _newState.cards = [].concat((0, _toConsumableArray3.default)(_newState.cards));

	        _newState.cards[_id] = (0, _extends3.default)({}, _newState.cards[_id], {
	          isPlay: false
	        });

	        _newState.cards[_id2] = (0, _extends3.default)({}, _newState.cards[_id2], {
	          isPlay: false
	        });

	        return _newState;
	      }

	    case 'RESET_CARDS':
	      {
	        var _cards2 = (0, _makeCards2.default)(13);
	        var highScore = state.highScore;
	        var _newState2 = (0, _extends3.default)({}, INITIAL_STATE, { cards: _cards2, highScore: highScore });
	        return _newState2;
	      }

	    case 'RESET_CARDS_HIGH_SCORE':
	      {
	        var _highScore = state.highScore == null ? state.tries : Math.min(state.highScore, state.tries);

	        var _newState3 = (0, _extends3.default)({}, INITIAL_STATE, { cards: (0, _makeCards2.default)(), highScore: _highScore });
	        return _newState3;
	      }

	  }

	  return state;
	};

	exports.default = cardsReducer;

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(174);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(175), __esModule: true };

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(78);
	__webpack_require__(176);
	module.exports = __webpack_require__(4).Array.from;

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(43)
	  , $export        = __webpack_require__(42)
	  , toObject       = __webpack_require__(64)
	  , call           = __webpack_require__(177)
	  , isArrayIter    = __webpack_require__(178)
	  , toLength       = __webpack_require__(56)
	  , createProperty = __webpack_require__(179)
	  , getIterFn      = __webpack_require__(180);

	$export($export.S + $export.F * !__webpack_require__(182)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(47);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(83)
	  , ITERATOR   = __webpack_require__(89)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(46)
	  , createDesc      = __webpack_require__(32);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(181)
	  , ITERATOR  = __webpack_require__(89)('iterator')
	  , Iterators = __webpack_require__(83);
	module.exports = __webpack_require__(4).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(28)
	  , TAG = __webpack_require__(89)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(89)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _isIterable2 = __webpack_require__(184);

	var _isIterable3 = _interopRequireDefault(_isIterable2);

	var _getIterator2 = __webpack_require__(187);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;

	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);

	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }

	    return _arr;
	  }

	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(185), __esModule: true };

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(90);
	__webpack_require__(78);
	module.exports = __webpack_require__(186);

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(181)
	  , ITERATOR  = __webpack_require__(89)('iterator')
	  , Iterators = __webpack_require__(83);
	module.exports = __webpack_require__(4).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(188), __esModule: true };

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(90);
	__webpack_require__(78);
	module.exports = __webpack_require__(189);

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(47)
	  , get      = __webpack_require__(180);
	module.exports = __webpack_require__(4).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _constants = __webpack_require__(126);

	var _constants2 = _interopRequireDefault(_constants);

	var _arrayShuffle = __webpack_require__(191);

	var _arrayShuffle2 = _interopRequireDefault(_arrayShuffle);

	var _makeCard = __webpack_require__(192);

	var _makeCard2 = _interopRequireDefault(_makeCard);

	var _clamp = __webpack_require__(193);

	var _clamp2 = _interopRequireDefault(_clamp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  var difficulty = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];


	  difficulty += 2;
	  difficulty = (0, _clamp2.default)(difficulty, 2, _constants2.default.CARD_TYPES.length - 1);
	  difficulty = 2;

	  var cards = [];
	  var TYPES = _constants2.default.CARD_TYPES;
	  for (var i = 0; i < Math.floor(_constants2.default.CARDS_AMOUNT / 2); i++) {
	    var index = i % difficulty;
	    var type = TYPES[index];
	    cards.push((0, _makeCard2.default)({ type: type }), (0, _makeCard2.default)({ type: type }));
	  }
	  return (0, _arrayShuffle2.default)(cards);
	};

/***/ },
/* 191 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (a) {
	  for (var i = a.length; i; i--) {
	    var j = Math.floor(Math.random() * i);
	    var _ref = [a[j], a[i - 1]];
	    a[i - 1] = _ref[0];
	    a[j] = _ref[1];
	  }
	  return a;
	};

/***/ },
/* 192 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var o = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  return {
	    type: o.type || 'pan',
	    isOpen: o.isOpen || false,
	    isPlay: o.isPlay || false
	  };
	};

/***/ },
/* 193 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/*
	  Function to clamp a value between two.
	  @param {Number} Number to clamp.
	  @param {Number} Min bound.
	  @param {Number} Max bound.
	  @returns {Numeber} Clamped value;
	*/
	exports.default = function (value, min, max) {
	  value = Math.min(value, max);
	  value = Math.max(value, min);

	  return value;
	};

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(48);

	var _extends3 = _interopRequireDefault(_extends2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var INITIAL_STATE = {
	  isConfirm: false,
	  isCongratsPlay: false,
	  isCheat: true
	};

	var controls = function controls() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'SET_CONFIRM':
	      {
	        return (0, _extends3.default)({}, state, { isConfirm: !state.isConfirm });
	      }
	    case 'RESET_CONFIRM':
	      {
	        return (0, _extends3.default)({}, state, { isConfirm: false });
	      }
	    case 'RESET_CARDS':
	      {
	        return (0, _extends3.default)({}, state, { isConfirm: false });
	      }
	    case 'SET_CHEAT':
	      {
	        return (0, _extends3.default)({}, state, { isCheat: true });
	      }
	  }
	  return state;
	};

	exports.default = controls;

/***/ },
/* 195 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	function createThunkMiddleware(extraArgument) {
	  return function (_ref) {
	    var dispatch = _ref.dispatch;
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        if (typeof action === 'function') {
	          return action(dispatch, getState, extraArgument);
	        }

	        return next(action);
	      };
	    };
	  };
	}

	var thunk = createThunkMiddleware();
	thunk.withExtraArgument = createThunkMiddleware;

	exports['default'] = thunk;

/***/ },
/* 196 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (fn) {
	  var unloadEvent = 'onpagehide' in window ? 'pagehide' : 'beforeunload';
	  window.addEventListener(unloadEvent, fn);
	};

/***/ }
/******/ ])
});
;