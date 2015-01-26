import Ember from 'ember';
import StyleBindingsMixin from "../mixins/style-bindings";

export default Ember.Component.extend(StyleBindingsMixin, {
  classNames: ['icebreaker-table__body'],
  styleBindings: ['width', 'height']
});
