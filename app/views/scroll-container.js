import Ember from 'ember';
import StyleBindingsMixin from "../pods/components/addepar-table/mixins/style-bindings";
import { ScrollHandlerMixin } from "../pods/components/addepar-table/utils/utils";

export default Ember.View.extend(StyleBindingsMixin, ScrollHandlerMixin, {
    templateName: 'scroll-container',
    classNames: ['ember-table-scroll-container'],
    styleBindings: ['left', 'width', 'height'],
    scrollElementSelector: '.antiscroll-inner',
    width: Ember.computed.alias('controller._scrollContainerWidth'),
    height: 10,
    left: Ember.computed.alias('controller._fixedColumnsWidth'),
    scrollTop: Ember.computed.alias('controller._tableScrollTop'),
    scrollLeft: Ember.computed.alias('controller._tableScrollLeft'),
    didInsertElement: function() {
        this._super();
        return this.onScrollLeftDidChange();
    },
    onScroll: function(event) {
        this.set('scrollLeft', event.target.scrollLeft);
        return event.preventDefault();
    },
    onScrollLeftDidChange: Ember.observer(function() {
        var selector;
        selector = this.get('scrollElementSelector');
        return this.$(selector).scrollLeft(this.get('scrollLeft'));
    }, 'scrollLeft', 'scrollElementSelector')
});