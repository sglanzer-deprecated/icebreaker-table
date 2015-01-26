import Ember from 'ember';

function getTotalWidth(columnModels) {
  return columnModels.reduce((function(total, columnModel) {
    return total + columnModel.get('width');
  }), 0);
}

export default Ember.Component.extend({
  isHeaderEnabled: true,

  width: null,

  headerHeight: 30,

  bodyHeight: 600
});
