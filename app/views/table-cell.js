import Ember from 'ember';
import StyleBindingsMixin from "../pods/components/addepar-table/mixins/style-bindings";

export default Ember.View.extend(StyleBindingsMixin, {
    templateName: 'table-cell',
    classNames: ['ember-table-cell'],
    classNameBindings: 'column.textAlign',
    styleBindings: 'width',
    init: function() {
        this._super();
        this.contentPathDidChange();
        return this.contentDidChange();
    },
    row: Ember.computed.alias('parentView.row'),
    column: Ember.computed.alias('content'),
    width: Ember.computed.alias('column.width'),
    contentDidChange: function() {
        return this.notifyPropertyChange('cellContent');
    },
    contentPathWillChange: Ember.beforeObserver('column.contentPath', function() {
        var contentPath;
        contentPath = this.get('column.contentPath');
        if (contentPath) {
            return this.removeObserver("row." + contentPath, this, this.contentDidChange);
        }
    }),
    contentPathDidChange: Ember.beforeObserver('column.contentPath', function() {
        var contentPath;
        contentPath = this.get('column.contentPath');
        if (contentPath) {
            return this.addObserver("row." + contentPath, this, this.contentDidChange);
        }
    }),
    cellContent: Ember.computed(function(key, value) {
        var column, row;
        row = this.get('row');
        column = this.get('column');
        if (!(row && column)) {
            return;
        }
        if (arguments.length === 1) {
            value = column.getCellContent(row);
        } else {
            column.setCellContent(row, value);
        }
        return value;
    }).property('row.isLoaded', 'column')
});