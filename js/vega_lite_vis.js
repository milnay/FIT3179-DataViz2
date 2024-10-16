
var opt = {
  actions: false
}
//Critical mines map
var vg1 = "https://raw.githubusercontent.com/milnay/FIT3179-DataViz2/refs/heads/main/js/critical_mines_map.vg.json"
vegaEmbed('#critical_mines_map', vg1, {actions:false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

//Mineral production also by state
var vg2 = "https://raw.githubusercontent.com/milnay/FIT3179-DataViz2/refs/heads/main/js/mineral_production_state.vg.json"
vegaEmbed('#mineral_production', vg2, {actions:false}).then(function(result){

}).catch(console.error)

//Exploration Expenditure by deposit type
var vg3 = "https://raw.githubusercontent.com/milnay/FIT3179-DataViz2/refs/heads/main/js/exploration_expenditure_deposit_type.vg.json"
vegaEmbed('#exploration_expend_deposit_type', vg3, {actions:false}).then(function(result){

}).catch(console.error)

//Exploartion Expenditure
var vg6 = "https://raw.githubusercontent.com/milnay/FIT3179-DataViz2/refs/heads/main/js/exploration_expenditure.vg.json"
vegaEmbed('#exploration_expenditure', vg6, {actions:false}).then(function(result){

}).catch(console.error)
//Exports Flowmap
var vg5 = "https://raw.githubusercontent.com/milnay/FIT3179-DataViz2/refs/heads/main/js/exports_flowmap.vg.json"
vegaEmbed('#exports_flowmap', vg5, {actions:false}).then(function(result){

}).catch(console.error)

