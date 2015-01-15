import Ember from 'ember';
import StyleBindingsMixin from "../pods/components/addepar-table/mixins/style-bindings";

export default Ember.View.extend(StyleBindingsMixin, {
    classNames: 'ember-table-column-sortable-indicator',
    classNameBindings: 'controller._isShowingSortableIndicator:active',
    styleBindings: ['left', 'height'],
    left: Ember.computed.alias('controller._sortableIndicatorLeft'),
    height: Ember.computed.alias('controller._height')
});