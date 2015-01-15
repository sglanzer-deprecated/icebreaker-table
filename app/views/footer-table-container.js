import Ember from 'ember';
import TableContainer from './table-container';
import { MouseWheelHandlerMixin, TouchMoveHandlerMixin, ShowHorizontalScrollMixin } from "../pods/components/addepar-table/utils/utils";

export default TableContainer.extend(MouseWheelHandlerMixin, TouchMoveHandlerMixin, ShowHorizontalScrollMixin, {
    templateName: 'footer-container',
    classNames: ['ember-table-table-container', 'ember-table-fixed-table-container', 'ember-table-footer-container'],
    styleBindings: 'top',
    height: Ember.computed.alias('controller.footerHeight'),
    width: Ember.computed.alias('controller._tableContainerWidth'),
    scrollLeft: Ember.computed.alias('controller._tableScrollLeft'),
    top: Ember.computed(function() {
        var bodyHeight, contentHeight, headerHeight;
        headerHeight = this.get('controller._headerHeight');
        contentHeight = this.get('controller._tableContentHeight') + headerHeight;
        bodyHeight = this.get('controller._bodyHeight') + headerHeight;
        if (contentHeight < bodyHeight) {
            return contentHeight;
        } else {
            return bodyHeight;
        }
    }).property('controller._bodyHeight', 'controller._headerHeight', 'controller._tableContentHeight'),
    onMouseWheel: function(event, delta, deltaX, deltaY) {
        var scrollLeft;
        scrollLeft = this.$('.ember-table-right-table-block').scrollLeft() + deltaX;
        this.set('scrollLeft', scrollLeft);
        return event.preventDefault();
    },
    onTouchMove: function(event, deltaX, deltaY) {
        var scrollLeft;
        scrollLeft = this.$('.ember-table-right-table-block').scrollLeft() + deltaX;
        this.set('scrollLeft', scrollLeft);
        return event.preventDefault();
    }
});