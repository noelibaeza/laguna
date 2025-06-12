var wms_layers = [];


        var lyr_Argenmap_0 = new ol.layer.Tile({
            'title': 'Argenmap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG:3857@png/{z}/{x}/{-y}.png'
            })
        });
var lyr_Laguna_de_Chalacatepec_ESAWorldCover2021_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Laguna_de_Chalacatepec_ESA-WorldCover-2021<br />\
    <img src="styles/legend/Laguna_de_Chalacatepec_ESAWorldCover2021_1_0.png" /> 10<br />\
    <img src="styles/legend/Laguna_de_Chalacatepec_ESAWorldCover2021_1_1.png" /> 95<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Laguna_de_Chalacatepec_ESAWorldCover2021_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11716793.854083, 2230028.564195, -11709381.831358, 2236008.115275]
        })
    });
var format_Laguna_de_Chalacatepec_2 = new ol.format.GeoJSON();
var features_Laguna_de_Chalacatepec_2 = format_Laguna_de_Chalacatepec_2.readFeatures(json_Laguna_de_Chalacatepec_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Laguna_de_Chalacatepec_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Laguna_de_Chalacatepec_2.addFeatures(features_Laguna_de_Chalacatepec_2);
var lyr_Laguna_de_Chalacatepec_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Laguna_de_Chalacatepec_2, 
                style: style_Laguna_de_Chalacatepec_2,
                popuplayertitle: 'Laguna_de_Chalacatepec',
                interactive: true,
                title: '<img src="styles/legend/Laguna_de_Chalacatepec_2.png" /> Laguna_de_Chalacatepec'
            });

lyr_Argenmap_0.setVisible(true);lyr_Laguna_de_Chalacatepec_ESAWorldCover2021_1.setVisible(true);lyr_Laguna_de_Chalacatepec_2.setVisible(true);
var layersList = [lyr_Argenmap_0,lyr_Laguna_de_Chalacatepec_ESAWorldCover2021_1,lyr_Laguna_de_Chalacatepec_2];
lyr_Laguna_de_Chalacatepec_2.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Numero': 'Numero', 'Hectareas': 'Hectareas', 'Nombre_Pol': 'Nombre_Pol', });
lyr_Laguna_de_Chalacatepec_2.set('fieldImages', {'Id': 'Range', 'Nombre': 'TextEdit', 'Numero': 'TextEdit', 'Hectareas': 'TextEdit', 'Nombre_Pol': 'TextEdit', });
lyr_Laguna_de_Chalacatepec_2.set('fieldLabels', {'Id': 'hidden field', 'Nombre': 'header label - visible with data', 'Numero': 'header label - visible with data', 'Hectareas': 'header label - visible with data', 'Nombre_Pol': 'header label - visible with data', });
lyr_Laguna_de_Chalacatepec_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});