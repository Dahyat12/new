var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_EsriTerrain_1 = new ol.layer.Tile({
            'title': 'Esri Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.589000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SHP_Kecamatan_Aceh_3 = new ol.format.GeoJSON();
var features_SHP_Kecamatan_Aceh_3 = format_SHP_Kecamatan_Aceh_3.readFeatures(json_SHP_Kecamatan_Aceh_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHP_Kecamatan_Aceh_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHP_Kecamatan_Aceh_3.addFeatures(features_SHP_Kecamatan_Aceh_3);
var lyr_SHP_Kecamatan_Aceh_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SHP_Kecamatan_Aceh_3, 
                style: style_SHP_Kecamatan_Aceh_3,
                popuplayertitle: 'SHP_Kecamatan_Aceh',
                interactive: false,
                title: '<img src="styles/legend/SHP_Kecamatan_Aceh_3.png" /> SHP_Kecamatan_Aceh'
            });
var format_Pelabuhan_4 = new ol.format.GeoJSON();
var features_Pelabuhan_4 = format_Pelabuhan_4.readFeatures(json_Pelabuhan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pelabuhan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pelabuhan_4.addFeatures(features_Pelabuhan_4);
var lyr_Pelabuhan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pelabuhan_4, 
                style: style_Pelabuhan_4,
                popuplayertitle: 'Pelabuhan',
                interactive: false,
                title: '<img src="styles/legend/Pelabuhan_4.png" /> Pelabuhan'
            });
var format_Pelabuhan_5 = new ol.format.GeoJSON();
var features_Pelabuhan_5 = format_Pelabuhan_5.readFeatures(json_Pelabuhan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pelabuhan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pelabuhan_5.addFeatures(features_Pelabuhan_5);
var lyr_Pelabuhan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pelabuhan_5, 
                style: style_Pelabuhan_5,
                popuplayertitle: 'Pelabuhan',
                interactive: true,
    title: 'Pelabuhan<br />\
    <img src="styles/legend/Pelabuhan_5_0.png" /> PP<br />\
    <img src="styles/legend/Pelabuhan_5_1.png" /> PPI<br />\
    <img src="styles/legend/Pelabuhan_5_2.png" /> PPN<br />\
    <img src="styles/legend/Pelabuhan_5_3.png" /> PPP<br />\
    <img src="styles/legend/Pelabuhan_5_4.png" /> PPS<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_EsriTerrain_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_SHP_Kecamatan_Aceh_3.setVisible(true);lyr_Pelabuhan_4.setVisible(true);lyr_Pelabuhan_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_EsriTerrain_1,lyr_OSMStandard_2,lyr_SHP_Kecamatan_Aceh_3,lyr_Pelabuhan_4,lyr_Pelabuhan_5];
lyr_SHP_Kecamatan_Aceh_3.set('fieldAliases', {'Kab_Code': 'Kab_Code', 'Kec_Code': 'Kec_Code', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Kec_CodeBr': 'Kec_CodeBr', 'Keterangan': 'Keterangan', });
lyr_Pelabuhan_4.set('fieldAliases', {'id': 'id', });
lyr_Pelabuhan_5.set('fieldAliases', {'No': 'No', 'x': 'x', 'y': 'y', 'Keterangan': 'Keterangan', 'Nama': 'Nama', 'Jenis': 'Jenis', 'Kab/ Kota': 'Kab/ Kota', 'Kec': 'Kec', 'Lokasi': 'Lokasi', });
lyr_SHP_Kecamatan_Aceh_3.set('fieldImages', {'Kab_Code': 'TextEdit', 'Kec_Code': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kec_CodeBr': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_Pelabuhan_4.set('fieldImages', {'id': 'TextEdit', });
lyr_Pelabuhan_5.set('fieldImages', {'No': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Keterangan': 'TextEdit', 'Nama': 'TextEdit', 'Jenis': 'TextEdit', 'Kab/ Kota': 'TextEdit', 'Kec': 'TextEdit', 'Lokasi': 'TextEdit', });
lyr_SHP_Kecamatan_Aceh_3.set('fieldLabels', {'Kab_Code': 'header label - always visible', 'Kec_Code': 'header label - always visible', 'Kabupaten': 'header label - always visible', 'Kecamatan': 'header label - always visible', 'Kec_CodeBr': 'header label - always visible', 'Keterangan': 'header label - always visible', });
lyr_Pelabuhan_4.set('fieldLabels', {'id': 'header label - always visible', });
lyr_Pelabuhan_5.set('fieldLabels', {'No': 'hidden field', 'x': 'hidden field', 'y': 'hidden field', 'Keterangan': 'inline label - visible with data', 'Nama': 'header label - always visible', 'Jenis': 'inline label - visible with data', 'Kab/ Kota': 'inline label - visible with data', 'Kec': 'inline label - visible with data', 'Lokasi': 'inline label - visible with data', });
lyr_Pelabuhan_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});