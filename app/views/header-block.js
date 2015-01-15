import Ember from 'ember';
import TableBlock from './table-block';

export default TableBlock.extend({
    classNames: ['ember-table-header-block'],
    itemViewClass: 'header-row',
    content: Ember.computed(function() {
        return [this.get('columns')];
    }).property('columns')
});