var vg1 = "js/critical_mines_map.vg.json"
vegaEmbed('#critical_mines_map', vg1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

var vg2 = "js/exploration_expenditure_deposit_type.vg.json"
vegaEmbed('#exploration_expend_deposit_type', vg2).then(function(result){

}).catch(console.error)
