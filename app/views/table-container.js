import Ember from 'ember';
import StyleBindingsMixin from "../pods/components/addepar-table/mixins/style-bindings";

export default Ember.View.extend(StyleBindingsMixin, {
    classNames: ['ember-table-table-container'],
    styleBindings: ['height', 'width']
});
