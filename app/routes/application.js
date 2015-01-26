import Ember from 'ember';
import ColumnModel from '../pods/components/icebreaker-table/model/column';

export default Ember.Route.extend({
  model: function() {
    return {
      tableModel: {
        columnModels: [
          ColumnModel.create({
            name: 'Column 1',
            getHeaderCellTemplate: function() { return 'icebreaker-table/header/cell'; },
            getBodyCellModel: function(rowModel) { return Ember.get(rowModel, 'key1'); },
            getBodyCellTemplate: function(rowModel) { return 'icebreaker-table/body/cell'; }
          }),
          ColumnModel.create({
            name: 'Column 2',
            getHeaderCellTemplate: function() { return 'icebreaker-table/header/cell'; },
            getBodyCellModel: function(rowModel) { return Ember.get(rowModel, 'key2'); },
            getBodyCellTemplate: function(rowModel) { return 'icebreaker-table/body/cell'; }
          }),
          ColumnModel.create({
            name: 'Column 3',
            getHeaderCellTemplate: function() { return 'icebreaker-table/header/cell'; },
            getBodyCellModel: function(rowModel) { return Ember.get(rowModel, 'key3'); },
            getBodyCellTemplate: function(rowModel) { return 'icebreaker-table/body/cell'; }
          }),
          ColumnModel.create({
            name: 'Column 4',
            getHeaderCellTemplate: function() { return 'icebreaker-table/header/cell'; },
            getBodyCellModel: function(rowModel) { return Ember.get(rowModel, 'key4'); },
            getBodyCellTemplate: function(rowModel) { return 'icebreaker-table/body/cell'; }
          }),
          ColumnModel.create({
            name: 'Column 5',
            getHeaderCellTemplate: function() { return 'icebreaker-table/header/cell'; },
            getBodyCellModel: function(rowModel) { return Ember.get(rowModel, 'key5'); },
            getBodyCellTemplate: function(rowModel) { return 'icebreaker-table/body/cell'; }
          })
        ],
        rowModels: [
          {key1: 1, key2: 2, key3: 3, key4: 4, key5: 5},
          {key1: 10, key2: 20, key3: 30, key4: 40, key5: 50},
          {key1: 100, key2: 200, key3: 300, key4: 400, key5: 500},
          {key1: 1000, key2: 2000, key3: 3000, key4: 4000, key5: 5000},
          {key1: 10000, key2: 20000, key3: 30000, key4: 40000, key5: 50000}
        ]
      }
    };
  }
});
