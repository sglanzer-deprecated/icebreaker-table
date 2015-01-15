import Ember from 'ember';
import StyleBindingsMixin from "../pods/components/addepar-table/mixins/style-bindings";

export default Ember.View.extend(StyleBindingsMixin, {
    itemIndex: null,
    prepareContent: Ember.K,
    teardownContent: Ember.K,
    rowHeightBinding: 'parentView.rowHeight',
    styleBindings: ['width', 'top', 'display'],
    top: Ember.computed(function() {
        return this.get('itemIndex') * this.get('rowHeight');
    }).property('itemIndex', 'rowHeight'),
    display: Ember.computed(function() {
        if (!this.get('content')) {
            return 'none';
        }
    }).property('content')
});