var size = 0;
var placement = 'point';
function categories_Pelabuhan_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'PP':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [15, 15],
                  scale: 2.0,
                  anchor: [7.5, 15.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/PPI_purple.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PPI':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [15, 15],
                  scale: 2.0,
                  anchor: [7.5, 15.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/PPI_blue.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PPN':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [15, 15],
                  scale: 2.0,
                  anchor: [7.5, 15.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/PPI_green.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PPP':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [15, 15],
                  scale: 2.0,
                  anchor: [7.5, 15.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/PPI_yelow.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PPS':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [15, 15],
                  scale: 2.0,
                  anchor: [7.5, 15.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/PPI_orange.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Pelabuhan_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Jenis");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Pelabuhan_5(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
