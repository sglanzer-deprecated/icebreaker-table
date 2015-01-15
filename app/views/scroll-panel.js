import Ember from 'ember';
import StyleBindingsMixin from "../pods/components/addepar-table/mixins/style-bindings";

export default Ember.View.extend(StyleBindingsMixin, {
    classNames: ['ember-table-scroll-panel'],
    styleBindings: ['width', 'height'],
    width: Ember.computed.alias('controller._tableColumnsWidth'),
    height: Ember.computed.alias('controller._tableContentHeight')
});