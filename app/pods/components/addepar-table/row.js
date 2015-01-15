import Ember from 'ember';

export default Ember.ObjectProxy.extend({
    content: null,
    isSelected: Ember.computed(function(key, val) {
        if (arguments.length > 1) {
            this.get('parentController').setSelected(this, val);
        }
        return this.get('parentController').isSelected(this);
    }).property('parentController._selection.[]'),
    isShowing: true,
    isHovered: false
});