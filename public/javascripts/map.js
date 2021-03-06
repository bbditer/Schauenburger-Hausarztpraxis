//<![CDATA[

var map;
var layer_mapnik;
var layer_tah;
var layer_markers;

function drawmap() {
    // Popup und Popuptext mit evtl. Grafik
    var popuptext="<font color=\"black\"><b>Schauenburger Hausarztpraxis<br>Gro&szlig;enritter Str. 4-6<br>34270 Schauenburg–Elgershausen</b><p></p></font>";
    // <img src=\"test.jpg\" width=\"180\" height=\"113\">

    OpenLayers.Lang.setCode('de');
    
    // Position und Zoomstufe der Karte
    var lon = 9.3773608;
    var lat = 51.2719282;
    var zoom = 15;

    map = new OpenLayers.Map('map', {
        projection: new OpenLayers.Projection("EPSG:900913"),
        displayProjection: new OpenLayers.Projection("EPSG:4326"),
        controls: [
            new OpenLayers.Control.Navigation(),
            new OpenLayers.Control.LayerSwitcher(),
            new OpenLayers.Control.PanZoomBar()],
        maxExtent:
            new OpenLayers.Bounds(-20037508.34,-20037508.34,
                                    20037508.34, 20037508.34),
        numZoomLevels: 18,
        maxResolution: 156543,
        units: 'meters'
    });

    layer_mapnik = new OpenLayers.Layer.OSM.Mapnik("Mapnik");
    layer_markers = new OpenLayers.Layer.Markers("Address", { projection: new OpenLayers.Projection("EPSG:4326"), 
                                                    visibility: true, displayInLayerSwitcher: false });

    map.addLayers([layer_mapnik, layer_markers]);
    jumpTo(lon, lat, zoom);
    
    // Position des Markers
    addMarker(layer_markers, 9.3773608, 51.2719282, popuptext);

}

//]]>