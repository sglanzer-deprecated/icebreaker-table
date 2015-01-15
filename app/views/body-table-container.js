import Ember from 'ember';
import TableContainer from './table-container';
import { MouseWheelHandlerMixin, TouchMoveHandlerMixin, ScrollHandlerMixin, ShowHorizontalScrollMixin } from "../pods/components/addepar-table/utils/utils";

export default TableContainer.extend(MouseWheelHandlerMixin, TouchMoveHandlerMixin, ScrollHandlerMixin, ShowHorizontalScrollMixin, {
    templateName: 'body-container',
    classNames: ['ember-table-table-container', 'ember-table-body-container', 'antiscroll-wrap'],
    height: Ember.computed.alias('controller._bodyHeight'),
    width: Ember.computed.alias('controller._width'),
    scrollTop: Ember.computed.alias('controller._tableScrollTop'),
    scrollLeft: Ember.computed.alias('controller._tableScrollLeft'),
    scrollElementSelector: '.antiscroll-inner',
    onScroll: function(event) {
        this.set('scrollTop', event.target.scrollTop);
        return event.preventDefault();
    },
    onMouseWheel: function(event, delta, deltaX, deltaY) {
        var scrollLeft;
        if (!(Math.abs(deltaX) > Math.abs(deltaY))) {
            return;
        }
        scrollLeft = this.$('.ember-table-right-table-block').scrollLeft() + deltaX;
        this.set('scrollLeft', scrollLeft);
        return event.preventDefault();
    },
    onTouchMove: function(event, deltaX, deltaY) {
        var scrollLeft;
        if (!(Math.abs(deltaX) > Math.abs(deltaY))) {
            return;
        }
        scrollLeft = this.$('.ember-table-right-table-block').scrollLeft() + deltaX;
        this.set('scrollLeft', scrollLeft);
        return event.preventDefault();
    }
});