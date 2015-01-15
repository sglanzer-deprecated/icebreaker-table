import Ember from 'ember';
import TableContainer from './table-container';
import { ShowHorizontalScrollMixin } from "../pods/components/addepar-table/utils/utils";

export default TableContainer.extend(ShowHorizontalScrollMixin, {
    templateName: 'header-container',
    classNames: ['ember-table-table-container', 'ember-table-fixed-table-container', 'ember-table-header-container'],
    height: Ember.computed.alias('controller._headerHeight'),
    width: Ember.computed.alias('controller._tableContainerWidth')
});