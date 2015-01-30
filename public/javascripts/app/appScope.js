
/************************** App Scope Object **************************/

function AppScope() {

    var addVisualizationTab = function (visualizations) {
        var tabAnchor = "";
        var tabContent = "";
        for (var index = 0; index < visualizations.length; ++index) {
            tabAnchor += '<li> <a data-toggle="tab" href="#' + visualizations[index].name +'">' + visualizations[index].title +'</a></li>';
            tabContent += '<div id="' + visualizations[index].name + '" class="tab-pane"></div>';
        }

        $('#visualizations').append(tabAnchor);
        $('#content').append(tabContent);
    };

    var setActiveVisualizationTab = function (){
        $('#visualizations').find('li').first().addClass("active");
        $('#content').find('div').first().addClass("active");
    };

    this.getCurrentVisualizationName = function () {
        /*if(extParams.param.length > 1)
         return $( ".selector" ).tabs( "option", "active" ).attr( 'id' );
         else
         return extParams.param;*/

        return "bubblecloud";
    };

    this.getCurrentVisualizationObject = function() {
        var visualizationName = this.getCurrentVisualizationName();
        var visualizationFactory = new VisualizationFactory();
        return visualizationFactory.createVisualizationObject(visualizationName);
    };

    this.getGlobPaused = function () {
        return $globals.glob_paused;
    };

    this.setGlobPaused = function (value) {
        $globals.glob_paused = value;
    };

    this.getExtensionParams = function() {
        return $globals.extParams;
    };

    this.setExtensionParams = function(params){
        $globals.extParams = params;
    };

    this.loadExtensionParams = function(extName){
        var file = "./../params/" + extName + ".html";
        $('#extension-params').load(file);
    };

    this.removeVisualizations = function (){
        $('#visualizations').empty();
        $('#content').empty();
    };

    this.loadExtensionVisualizations = function(extName) {
        if($globals.extParams.name !== undefined || extName !== $globals.extParams.name)
        {
            addVisualizationTab($globals.extParams.visualizations);
            setActiveVisualizationTab();
        }
    };

}