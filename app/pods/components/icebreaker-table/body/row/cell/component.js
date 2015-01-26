import Ember from 'ember';
import StyleBindingsMixin from '../../../mixins/style-bindings';

export default Ember.Component.extend(StyleBindingsMixin, {
  classNames: ['icebreaker-table-body-row__cell'],
  styleBindings: ['width'],
  width: Ember.computed.alias('columnModel.width'),

  dataModel: function() {
    return this.get('columnModel').getBodyCellModel(this.get('rowModel'));
  }.property('columnModel', 'rowModel')
});
