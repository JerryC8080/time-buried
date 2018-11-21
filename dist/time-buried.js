'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimeBuried = function () {
    function TimeBuried() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$logger = _ref.logger,
            logger = _ref$logger === undefined ? console : _ref$logger;

        _classCallCheck(this, TimeBuried);

        this.timers = {};
        this.logger = logger;
    }

    _createClass(TimeBuried, [{
        key: 'start',
        value: function start(name) {
            this.timers[name] = {};
            this.timers[name].startTimestamp = Date.now();
        }
    }, {
        key: 'end',
        value: function end(name) {
            var endTimestamp = Date.now();
            var startTimestamp = this.timers[name].startTimestamp;
            var diff = endTimestamp - startTimestamp;
            this.timers[name].endTimestamp = endTimestamp;
            this.timers[name].diff = diff;
        }
    }, {
        key: 'getValue',
        value: function getValue(name) {
            var value = this.timers[name];
            if (value) return value;else return undefined;
        }
    }, {
        key: 'getAllValue',
        value: function getAllValue() {
            return this.timers;
        }
    }, {
        key: 'print',
        value: function print(name) {
            if (!name) {
                this.printAll();
            } else {
                var timer = this.timers[name];
                this.logger.info('Time Recorder:', '---- ' + name + ': ' + timer.diff + 'ms');
            }
        }
    }, {
        key: 'printAll',
        value: function printAll() {
            var _this = this;

            Object.keys(this.timers).forEach(function (name) {
                return _this.print(name);
            });
        }
    }]);

    return TimeBuried;
}();

module.exports = TimeBuried;