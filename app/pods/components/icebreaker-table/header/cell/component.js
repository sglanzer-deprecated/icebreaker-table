import Ember from 'ember';
import StyleBindingsMixin from '../../mixins/style-bindings';

export default Ember.Component.extend(StyleBindingsMixin, {
  classNames: ['icebreaker-table-header__cell'],
  styleBindings: ['width'],
  width: Ember.computed.alias('columnModel.width'),

  dataModel: Ember.computed.alias('columnModel')
});
