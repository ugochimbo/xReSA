
/********************************** Visualizations  *********************************/

/* :::::::: Lodsafe Facet :::::::: */

function LodsafeFacet() {

    if ( arguments.callee._singletonInstance )
        return arguments.callee._singletonInstance;

    arguments.callee._singletonInstance = this;

    Visualizations.call(this);

    var data = [];
    var _this = this;

    /**
     * Initialize Visualization
     */
    this.initVisualization = function(){
        var facetDiv = $('#lodsafe-facet');
        if (!$("#lodsafe-facets-content").length) {
            facetDiv.append("<div id='lodsafe-facets-content'></div><div id='lodsafe-results'></div>");
        }
        attachDescriptionHandler();
    };

    /**
     * Update Visualization
     * @param newData
     * @param params
     */
    this.updateVisualization = function(newData, params){

        for (var key in newData.countries) {
            data.push(newData.countries[key]);
        }

        $.facetelize(_this.settings);
    };

    this.item_template =
                '<div class="item left">' +
                    '<p class="tags">' +
                        '<% if (obj.country) {  %> <%= obj.continent %><% } %>' +
                        '<% if (obj.city) {  %><%= obj.category %><% } %>' +
                    '</p>' +
                    '<p class="desc"><%= obj.tweet %></p>' +
                '</div>';

    this.settings = {
        items           : data,
        facets          : {
            'country'    : 'Country',
            'city'     : 'City'
        },
        resultSelector  : '#lodsafe-results',
        facetSelector   : '#lodsafe-facets-content',
        orderByOptions  : {'country': 'Country', 'city': 'City'},
        resultTemplate  : this.item_template
    };

}

var lodsafe_facet = new LodsafeFacet();