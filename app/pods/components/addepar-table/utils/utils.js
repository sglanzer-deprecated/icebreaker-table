import Ember from 'ember';
import StyleBindingsMixin from "../mixins/style-bindings";

export var MouseWheelHandlerMixin = Ember.Mixin.create({
    onMouseWheel: Ember.K,
    didInsertElement: function() {
        this._super();
        return this.$().bind('mousewheel', (function(_this) {
            return function(event, delta, deltaX, deltaY) {
                return Ember.run(_this, _this.onMouseWheel, event, delta, deltaX, deltaY);
            };
        })(this));
    },
    willDestroyElement: function() {
        var _ref;
        if ((_ref = this.$()) != null) {
            _ref.unbind('mousewheel');
        }
        return this._super();
    }
});

export var ScrollHandlerMixin = Ember.Mixin.create({
    onScroll: Ember.K,
    scrollElementSelector: '',
    didInsertElement: function() {
        this._super();
        return this.$(this.get('scrollElementSelector')).bind('scroll', (function(_this) {
            return function(event) {
                return Ember.run(_this, _this.onScroll, event);
            };
        })(this));
    },
    willDestroyElement: function() {
        var _ref;
        if ((_ref = this.$(this.get('scrollElementSelector'))) != null) {
            _ref.unbind('scroll');
        }
        return this._super();
    }
});

export var TouchMoveHandlerMixin = Ember.Mixin.create({
    onTouchMove: Ember.K,
    didInsertElement: function() {
        var startX, startY;
        this._super();
        startX = startY = 0;
        this.$().bind('touchstart', function(event) {
            startX = event.originalEvent.targetTouches[0].pageX;
            startY = event.originalEvent.targetTouches[0].pageY;
        });
        return this.$().bind('touchmove', (function(_this) {
            return function(event) {
                var deltaX, deltaY, newX, newY;
                newX = event.originalEvent.targetTouches[0].pageX;
                newY = event.originalEvent.targetTouches[0].pageY;
                deltaX = -(newX - startX);
                deltaY = -(newY - startY);
                Ember.run(_this, _this.onTouchMove, event, deltaX, deltaY);
                startX = newX;
                startY = newY;
            };
        })(this));
    },
    willDestroy: function() {
        var _ref;
        if ((_ref = this.$()) != null) {
            _ref.unbind('touchmove');
        }
        return this._super();
    }
});

export var ShowHorizontalScrollMixin = Ember.Mixin.create({
    mouseEnter: function(event) {
        var $horizontalScroll, $tablesContainer;
        $tablesContainer = $(event.target).parents('.ember-table-tables-container');
        $horizontalScroll = $tablesContainer.find('.antiscroll-scrollbar-horizontal');
        return $horizontalScroll.addClass('antiscroll-scrollbar-shown');
    },
    mouseLeave: function(event) {
        var $horizontalScroll, $tablesContainer;
        $tablesContainer = $(event.target).parents('.ember-table-tables-container');
        $horizontalScroll = $tablesContainer.find('.antiscroll-scrollbar-horizontal');
        return $horizontalScroll.removeClass('antiscroll-scrollbar-shown');
    }
});