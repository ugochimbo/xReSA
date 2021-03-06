/**
 * Created by Ugochimbo on 5/1/2015.
 */

function Map() {

    Visualizations.call(this);

    this.map = null;
    this.data = [];

    var _this = this;

    /**
     * Initialize Google Map
     */
    this.initMap = function() {

        var mapOptions = {
            center: { lat: 50.7323, lng: 7.1847},
            zoom: 2
        };

        this.map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
    };

    /**
     * Initialize Visualization
     */
    this.initVisualization = function(){
        var mapDiv = $('#map');
        if (!$("#map-canvas").length) {
            mapDiv.append("<div id='map-canvas' style='width: 1020px; height: 900px; margin-top: 10px'></div>");
            google.maps.event.addDomListener(window, 'load', this.initMap());
        }
        attachDescriptionHandler();
    };

    /**
     * Update Visualization
     * @param newData
     * @param params
     */
    this.updateVisualization = function(newData, params){
        for (var data in newData.mapdata) {
            plotToMap(newData.mapdata[data]);
        }
    };

    /**
     * Plot Data to Map
     * @param data
     */
    var plotToMap = function(data){
        var latLng = new google.maps.LatLng(data.coordinate[0], data.coordinate[1]);

        var marker = new google.maps.Marker({
            map: _this.map,
            position: latLng
        });

        addInfoWindow(marker, data.text);
    };

    /**
     * Google Maps Info Window
     * @param marker
     * @param info
     */
    var addInfoWindow = function(marker, info){
        var infowindow = new google.maps.InfoWindow({
            content: info
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(_this.map,marker);
        });
    }

}

var map = new Map();