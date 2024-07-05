var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_Census3604_1 = new ol.format.GeoJSON();
var features_Census3604_1 = format_Census3604_1.readFeatures(json_Census3604_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3604_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3604_1.addFeatures(features_Census3604_1);
var lyr_Census3604_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3604_1, 
                style: style_Census3604_1,
                popuplayertitle: "Census 360-4",
                interactive: false,
                title: '<img src="styles/legend/Census3604_1.png" /> Census 360-4'
            });
var format_Census3603_2 = new ol.format.GeoJSON();
var features_Census3603_2 = format_Census3603_2.readFeatures(json_Census3603_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3603_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3603_2.addFeatures(features_Census3603_2);
var lyr_Census3603_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3603_2, 
                style: style_Census3603_2,
                popuplayertitle: "Census 360-3",
                interactive: false,
                title: '<img src="styles/legend/Census3603_2.png" /> Census 360-3'
            });
var format_Census3602_3 = new ol.format.GeoJSON();
var features_Census3602_3 = format_Census3602_3.readFeatures(json_Census3602_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3602_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3602_3.addFeatures(features_Census3602_3);
var lyr_Census3602_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3602_3, 
                style: style_Census3602_3,
                popuplayertitle: "Census 360-2",
                interactive: false,
                title: '<img src="styles/legend/Census3602_3.png" /> Census 360-2'
            });
var format_Census3601_4 = new ol.format.GeoJSON();
var features_Census3601_4 = format_Census3601_4.readFeatures(json_Census3601_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3601_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3601_4.addFeatures(features_Census3601_4);
var lyr_Census3601_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3601_4, 
                style: style_Census3601_4,
                popuplayertitle: "Census 360-1",
                interactive: false,
                title: '<img src="styles/legend/Census3601_4.png" /> Census 360-1'
            });
var format_Census359021_5 = new ol.format.GeoJSON();
var features_Census359021_5 = format_Census359021_5.readFeatures(json_Census359021_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census359021_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census359021_5.addFeatures(features_Census359021_5);
var lyr_Census359021_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census359021_5, 
                style: style_Census359021_5,
                popuplayertitle: "Census 35902-1",
                interactive: false,
                title: '<img src="styles/legend/Census359021_5.png" /> Census 35902-1'
            });
var format_Census359013_6 = new ol.format.GeoJSON();
var features_Census359013_6 = format_Census359013_6.readFeatures(json_Census359013_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census359013_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census359013_6.addFeatures(features_Census359013_6);
var lyr_Census359013_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census359013_6, 
                style: style_Census359013_6,
                popuplayertitle: "Census 35901-3",
                interactive: false,
                title: '<img src="styles/legend/Census359013_6.png" /> Census 35901-3'
            });
var format_Census359012_7 = new ol.format.GeoJSON();
var features_Census359012_7 = format_Census359012_7.readFeatures(json_Census359012_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census359012_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census359012_7.addFeatures(features_Census359012_7);
var lyr_Census359012_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census359012_7, 
                style: style_Census359012_7,
                popuplayertitle: "Census 35901-2",
                interactive: false,
                title: '<img src="styles/legend/Census359012_7.png" /> Census 35901-2'
            });
var format_Census359011_8 = new ol.format.GeoJSON();
var features_Census359011_8 = format_Census359011_8.readFeatures(json_Census359011_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census359011_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census359011_8.addFeatures(features_Census359011_8);
var lyr_Census359011_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census359011_8, 
                style: style_Census359011_8,
                popuplayertitle: "Census 35901-1",
                interactive: false,
                title: '<img src="styles/legend/Census359011_8.png" /> Census 35901-1'
            });
var format_Census3584_9 = new ol.format.GeoJSON();
var features_Census3584_9 = format_Census3584_9.readFeatures(json_Census3584_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3584_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3584_9.addFeatures(features_Census3584_9);
var lyr_Census3584_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3584_9, 
                style: style_Census3584_9,
                popuplayertitle: "Census 358-4",
                interactive: false,
                title: '<img src="styles/legend/Census3584_9.png" /> Census 358-4'
            });
var format_Census3583_10 = new ol.format.GeoJSON();
var features_Census3583_10 = format_Census3583_10.readFeatures(json_Census3583_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3583_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3583_10.addFeatures(features_Census3583_10);
var lyr_Census3583_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3583_10, 
                style: style_Census3583_10,
                popuplayertitle: "Census 358-3",
                interactive: false,
                title: '<img src="styles/legend/Census3583_10.png" /> Census 358-3'
            });
var format_Census3582_11 = new ol.format.GeoJSON();
var features_Census3582_11 = format_Census3582_11.readFeatures(json_Census3582_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3582_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3582_11.addFeatures(features_Census3582_11);
var lyr_Census3582_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3582_11, 
                style: style_Census3582_11,
                popuplayertitle: "Census 358-2",
                interactive: false,
                title: '<img src="styles/legend/Census3582_11.png" /> Census 358-2'
            });
var format_Census3581_12 = new ol.format.GeoJSON();
var features_Census3581_12 = format_Census3581_12.readFeatures(json_Census3581_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3581_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3581_12.addFeatures(features_Census3581_12);
var lyr_Census3581_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3581_12, 
                style: style_Census3581_12,
                popuplayertitle: "Census 358-1",
                interactive: false,
                title: '<img src="styles/legend/Census3581_12.png" /> Census 358-1'
            });
var format_Census3573_13 = new ol.format.GeoJSON();
var features_Census3573_13 = format_Census3573_13.readFeatures(json_Census3573_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3573_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3573_13.addFeatures(features_Census3573_13);
var lyr_Census3573_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3573_13, 
                style: style_Census3573_13,
                popuplayertitle: "Census 357-3",
                interactive: false,
                title: '<img src="styles/legend/Census3573_13.png" /> Census 357-3'
            });
var format_Census3572_14 = new ol.format.GeoJSON();
var features_Census3572_14 = format_Census3572_14.readFeatures(json_Census3572_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3572_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3572_14.addFeatures(features_Census3572_14);
var lyr_Census3572_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3572_14, 
                style: style_Census3572_14,
                popuplayertitle: "Census 357-2",
                interactive: false,
                title: '<img src="styles/legend/Census3572_14.png" /> Census 357-2'
            });
var format_Census3571_15 = new ol.format.GeoJSON();
var features_Census3571_15 = format_Census3571_15.readFeatures(json_Census3571_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3571_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3571_15.addFeatures(features_Census3571_15);
var lyr_Census3571_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3571_15, 
                style: style_Census3571_15,
                popuplayertitle: "Census 357-1",
                interactive: false,
                title: '<img src="styles/legend/Census3571_15.png" /> Census 357-1'
            });
var format_Census3563_16 = new ol.format.GeoJSON();
var features_Census3563_16 = format_Census3563_16.readFeatures(json_Census3563_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3563_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3563_16.addFeatures(features_Census3563_16);
var lyr_Census3563_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3563_16, 
                style: style_Census3563_16,
                popuplayertitle: "Census 356-3",
                interactive: false,
                title: '<img src="styles/legend/Census3563_16.png" /> Census 356-3'
            });
var format_Census3562_17 = new ol.format.GeoJSON();
var features_Census3562_17 = format_Census3562_17.readFeatures(json_Census3562_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3562_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3562_17.addFeatures(features_Census3562_17);
var lyr_Census3562_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3562_17, 
                style: style_Census3562_17,
                popuplayertitle: "Census 356-2",
                interactive: false,
                title: '<img src="styles/legend/Census3562_17.png" /> Census 356-2'
            });
var format_Census3561_18 = new ol.format.GeoJSON();
var features_Census3561_18 = format_Census3561_18.readFeatures(json_Census3561_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3561_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3561_18.addFeatures(features_Census3561_18);
var lyr_Census3561_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3561_18, 
                style: style_Census3561_18,
                popuplayertitle: "Census 356-1",
                interactive: false,
                title: '<img src="styles/legend/Census3561_18.png" /> Census 356-1'
            });
var format_Census3553_19 = new ol.format.GeoJSON();
var features_Census3553_19 = format_Census3553_19.readFeatures(json_Census3553_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3553_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3553_19.addFeatures(features_Census3553_19);
var lyr_Census3553_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3553_19, 
                style: style_Census3553_19,
                popuplayertitle: "Census 355-3",
                interactive: false,
                title: '<img src="styles/legend/Census3553_19.png" /> Census 355-3'
            });
var format_Census3552_20 = new ol.format.GeoJSON();
var features_Census3552_20 = format_Census3552_20.readFeatures(json_Census3552_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3552_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3552_20.addFeatures(features_Census3552_20);
var lyr_Census3552_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3552_20, 
                style: style_Census3552_20,
                popuplayertitle: "Census 355-2",
                interactive: false,
                title: '<img src="styles/legend/Census3552_20.png" /> Census 355-2'
            });
var format_Census3551_21 = new ol.format.GeoJSON();
var features_Census3551_21 = format_Census3551_21.readFeatures(json_Census3551_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3551_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3551_21.addFeatures(features_Census3551_21);
var lyr_Census3551_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3551_21, 
                style: style_Census3551_21,
                popuplayertitle: "Census 355-1",
                interactive: false,
                title: '<img src="styles/legend/Census3551_21.png" /> Census 355-1'
            });
var format_Census3543_22 = new ol.format.GeoJSON();
var features_Census3543_22 = format_Census3543_22.readFeatures(json_Census3543_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3543_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3543_22.addFeatures(features_Census3543_22);
var lyr_Census3543_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3543_22, 
                style: style_Census3543_22,
                popuplayertitle: "Census 354-3",
                interactive: false,
                title: '<img src="styles/legend/Census3543_22.png" /> Census 354-3'
            });
var format_Census3542_23 = new ol.format.GeoJSON();
var features_Census3542_23 = format_Census3542_23.readFeatures(json_Census3542_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3542_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3542_23.addFeatures(features_Census3542_23);
var lyr_Census3542_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3542_23, 
                style: style_Census3542_23,
                popuplayertitle: "Census 354-2",
                interactive: false,
                title: '<img src="styles/legend/Census3542_23.png" /> Census 354-2'
            });
var format_Census3541_24 = new ol.format.GeoJSON();
var features_Census3541_24 = format_Census3541_24.readFeatures(json_Census3541_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3541_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3541_24.addFeatures(features_Census3541_24);
var lyr_Census3541_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3541_24, 
                style: style_Census3541_24,
                popuplayertitle: "Census 354-1",
                interactive: false,
                title: '<img src="styles/legend/Census3541_24.png" /> Census 354-1'
            });
var format_Census3085census_3085_25 = new ol.format.GeoJSON();
var features_Census3085census_3085_25 = format_Census3085census_3085_25.readFeatures(json_Census3085census_3085_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3085census_3085_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3085census_3085_25.addFeatures(features_Census3085census_3085_25);
var lyr_Census3085census_3085_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3085census_3085_25, 
                style: style_Census3085census_3085_25,
                popuplayertitle: "Census 308-5 — census_3085",
                interactive: false,
                title: '<img src="styles/legend/Census3085census_3085_25.png" /> Census 308-5 — census_3085'
            });
var format_Census3084census_3084_26 = new ol.format.GeoJSON();
var features_Census3084census_3084_26 = format_Census3084census_3084_26.readFeatures(json_Census3084census_3084_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3084census_3084_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3084census_3084_26.addFeatures(features_Census3084census_3084_26);
var lyr_Census3084census_3084_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3084census_3084_26, 
                style: style_Census3084census_3084_26,
                popuplayertitle: "Census 308-4 — census_3084",
                interactive: false,
                title: '<img src="styles/legend/Census3084census_3084_26.png" /> Census 308-4 — census_3084'
            });
var format_Census3083census_3083_27 = new ol.format.GeoJSON();
var features_Census3083census_3083_27 = format_Census3083census_3083_27.readFeatures(json_Census3083census_3083_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3083census_3083_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3083census_3083_27.addFeatures(features_Census3083census_3083_27);
var lyr_Census3083census_3083_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3083census_3083_27, 
                style: style_Census3083census_3083_27,
                popuplayertitle: "Census 308-3 — census_3083",
                interactive: false,
                title: '<img src="styles/legend/Census3083census_3083_27.png" /> Census 308-3 — census_3083'
            });
var format_Census3082census_3082_28 = new ol.format.GeoJSON();
var features_Census3082census_3082_28 = format_Census3082census_3082_28.readFeatures(json_Census3082census_3082_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3082census_3082_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3082census_3082_28.addFeatures(features_Census3082census_3082_28);
var lyr_Census3082census_3082_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3082census_3082_28, 
                style: style_Census3082census_3082_28,
                popuplayertitle: "Census 308-2 — census_3082",
                interactive: false,
                title: '<img src="styles/legend/Census3082census_3082_28.png" /> Census 308-2 — census_3082'
            });
var format_Census3081census_3081_29 = new ol.format.GeoJSON();
var features_Census3081census_3081_29 = format_Census3081census_3081_29.readFeatures(json_Census3081census_3081_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3081census_3081_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3081census_3081_29.addFeatures(features_Census3081census_3081_29);
var lyr_Census3081census_3081_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3081census_3081_29, 
                style: style_Census3081census_3081_29,
                popuplayertitle: "Census 308-1 — census_3081",
                interactive: false,
                title: '<img src="styles/legend/Census3081census_3081_29.png" /> Census 308-1 — census_3081'
            });
var format_Census3075census_3075_30 = new ol.format.GeoJSON();
var features_Census3075census_3075_30 = format_Census3075census_3075_30.readFeatures(json_Census3075census_3075_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3075census_3075_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3075census_3075_30.addFeatures(features_Census3075census_3075_30);
var lyr_Census3075census_3075_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3075census_3075_30, 
                style: style_Census3075census_3075_30,
                popuplayertitle: "Census 307-5 — census_3075",
                interactive: false,
                title: '<img src="styles/legend/Census3075census_3075_30.png" /> Census 307-5 — census_3075'
            });
var format_Census3074census_3074_31 = new ol.format.GeoJSON();
var features_Census3074census_3074_31 = format_Census3074census_3074_31.readFeatures(json_Census3074census_3074_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3074census_3074_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3074census_3074_31.addFeatures(features_Census3074census_3074_31);
var lyr_Census3074census_3074_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3074census_3074_31, 
                style: style_Census3074census_3074_31,
                popuplayertitle: "Census 307-4 — census_3074",
                interactive: false,
                title: '<img src="styles/legend/Census3074census_3074_31.png" /> Census 307-4 — census_3074'
            });
var format_Census3073census_3073_32 = new ol.format.GeoJSON();
var features_Census3073census_3073_32 = format_Census3073census_3073_32.readFeatures(json_Census3073census_3073_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3073census_3073_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3073census_3073_32.addFeatures(features_Census3073census_3073_32);
var lyr_Census3073census_3073_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3073census_3073_32, 
                style: style_Census3073census_3073_32,
                popuplayertitle: "Census 307-3 — census_3073",
                interactive: false,
                title: '<img src="styles/legend/Census3073census_3073_32.png" /> Census 307-3 — census_3073'
            });
var format_Census3072census_3072_33 = new ol.format.GeoJSON();
var features_Census3072census_3072_33 = format_Census3072census_3072_33.readFeatures(json_Census3072census_3072_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3072census_3072_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3072census_3072_33.addFeatures(features_Census3072census_3072_33);
var lyr_Census3072census_3072_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3072census_3072_33, 
                style: style_Census3072census_3072_33,
                popuplayertitle: "Census 307-2 — census_3072",
                interactive: false,
                title: '<img src="styles/legend/Census3072census_3072_33.png" /> Census 307-2 — census_3072'
            });
var format_Census3071census_3071_34 = new ol.format.GeoJSON();
var features_Census3071census_3071_34 = format_Census3071census_3071_34.readFeatures(json_Census3071census_3071_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3071census_3071_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3071census_3071_34.addFeatures(features_Census3071census_3071_34);
var lyr_Census3071census_3071_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3071census_3071_34, 
                style: style_Census3071census_3071_34,
                popuplayertitle: "Census 307-1 — census_3071",
                interactive: false,
                title: '<img src="styles/legend/Census3071census_3071_34.png" /> Census 307-1 — census_3071'
            });
var format_Census3064census_3064_35 = new ol.format.GeoJSON();
var features_Census3064census_3064_35 = format_Census3064census_3064_35.readFeatures(json_Census3064census_3064_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3064census_3064_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3064census_3064_35.addFeatures(features_Census3064census_3064_35);
var lyr_Census3064census_3064_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3064census_3064_35, 
                style: style_Census3064census_3064_35,
                popuplayertitle: "Census 306-4 — census_3064",
                interactive: false,
                title: '<img src="styles/legend/Census3064census_3064_35.png" /> Census 306-4 — census_3064'
            });
var format_Census3063census_3063_36 = new ol.format.GeoJSON();
var features_Census3063census_3063_36 = format_Census3063census_3063_36.readFeatures(json_Census3063census_3063_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3063census_3063_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3063census_3063_36.addFeatures(features_Census3063census_3063_36);
var lyr_Census3063census_3063_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3063census_3063_36, 
                style: style_Census3063census_3063_36,
                popuplayertitle: "Census 306-3 — census_3063",
                interactive: false,
                title: '<img src="styles/legend/Census3063census_3063_36.png" /> Census 306-3 — census_3063'
            });
var format_Census3062census_3062_37 = new ol.format.GeoJSON();
var features_Census3062census_3062_37 = format_Census3062census_3062_37.readFeatures(json_Census3062census_3062_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3062census_3062_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3062census_3062_37.addFeatures(features_Census3062census_3062_37);
var lyr_Census3062census_3062_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3062census_3062_37, 
                style: style_Census3062census_3062_37,
                popuplayertitle: "Census 306-2 — census_3062",
                interactive: false,
                title: '<img src="styles/legend/Census3062census_3062_37.png" /> Census 306-2 — census_3062'
            });
var format_Census3061census_3061_38 = new ol.format.GeoJSON();
var features_Census3061census_3061_38 = format_Census3061census_3061_38.readFeatures(json_Census3061census_3061_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3061census_3061_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3061census_3061_38.addFeatures(features_Census3061census_3061_38);
var lyr_Census3061census_3061_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3061census_3061_38, 
                style: style_Census3061census_3061_38,
                popuplayertitle: "Census 306-1 — census_3061",
                interactive: false,
                title: '<img src="styles/legend/Census3061census_3061_38.png" /> Census 306-1 — census_3061'
            });
var format_Census3055census_3055_39 = new ol.format.GeoJSON();
var features_Census3055census_3055_39 = format_Census3055census_3055_39.readFeatures(json_Census3055census_3055_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3055census_3055_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3055census_3055_39.addFeatures(features_Census3055census_3055_39);
var lyr_Census3055census_3055_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3055census_3055_39, 
                style: style_Census3055census_3055_39,
                popuplayertitle: "Census 305-5 — census_3055",
                interactive: false,
                title: '<img src="styles/legend/Census3055census_3055_39.png" /> Census 305-5 — census_3055'
            });
var format_Census3054census_3054_40 = new ol.format.GeoJSON();
var features_Census3054census_3054_40 = format_Census3054census_3054_40.readFeatures(json_Census3054census_3054_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3054census_3054_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3054census_3054_40.addFeatures(features_Census3054census_3054_40);
var lyr_Census3054census_3054_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3054census_3054_40, 
                style: style_Census3054census_3054_40,
                popuplayertitle: "Census 305-4 — census_3054",
                interactive: false,
                title: '<img src="styles/legend/Census3054census_3054_40.png" /> Census 305-4 — census_3054'
            });
var format_Census3053census_3053_41 = new ol.format.GeoJSON();
var features_Census3053census_3053_41 = format_Census3053census_3053_41.readFeatures(json_Census3053census_3053_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3053census_3053_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3053census_3053_41.addFeatures(features_Census3053census_3053_41);
var lyr_Census3053census_3053_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3053census_3053_41, 
                style: style_Census3053census_3053_41,
                popuplayertitle: "Census 305-3 — census_3053",
                interactive: false,
                title: '<img src="styles/legend/Census3053census_3053_41.png" /> Census 305-3 — census_3053'
            });
var format_Census3052census_3052_42 = new ol.format.GeoJSON();
var features_Census3052census_3052_42 = format_Census3052census_3052_42.readFeatures(json_Census3052census_3052_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3052census_3052_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3052census_3052_42.addFeatures(features_Census3052census_3052_42);
var lyr_Census3052census_3052_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3052census_3052_42, 
                style: style_Census3052census_3052_42,
                popuplayertitle: "Census 305-2 — census_3052",
                interactive: false,
                title: '<img src="styles/legend/Census3052census_3052_42.png" /> Census 305-2 — census_3052'
            });
var format_Census3051census_3051_43 = new ol.format.GeoJSON();
var features_Census3051census_3051_43 = format_Census3051census_3051_43.readFeatures(json_Census3051census_3051_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3051census_3051_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3051census_3051_43.addFeatures(features_Census3051census_3051_43);
var lyr_Census3051census_3051_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3051census_3051_43, 
                style: style_Census3051census_3051_43,
                popuplayertitle: "Census 305-1 — census_3051",
                interactive: false,
                title: '<img src="styles/legend/Census3051census_3051_43.png" /> Census 305-1 — census_3051'
            });
var format_Census3044census_3044_44 = new ol.format.GeoJSON();
var features_Census3044census_3044_44 = format_Census3044census_3044_44.readFeatures(json_Census3044census_3044_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3044census_3044_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3044census_3044_44.addFeatures(features_Census3044census_3044_44);
var lyr_Census3044census_3044_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3044census_3044_44, 
                style: style_Census3044census_3044_44,
                popuplayertitle: "Census 304-4 — census_3044",
                interactive: false,
                title: '<img src="styles/legend/Census3044census_3044_44.png" /> Census 304-4 — census_3044'
            });
var format_Census3043census_3043_45 = new ol.format.GeoJSON();
var features_Census3043census_3043_45 = format_Census3043census_3043_45.readFeatures(json_Census3043census_3043_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3043census_3043_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3043census_3043_45.addFeatures(features_Census3043census_3043_45);
var lyr_Census3043census_3043_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3043census_3043_45, 
                style: style_Census3043census_3043_45,
                popuplayertitle: "Census 304-3 — census_3043",
                interactive: false,
                title: '<img src="styles/legend/Census3043census_3043_45.png" /> Census 304-3 — census_3043'
            });
var format_Census3042census_3042_46 = new ol.format.GeoJSON();
var features_Census3042census_3042_46 = format_Census3042census_3042_46.readFeatures(json_Census3042census_3042_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3042census_3042_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3042census_3042_46.addFeatures(features_Census3042census_3042_46);
var lyr_Census3042census_3042_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3042census_3042_46, 
                style: style_Census3042census_3042_46,
                popuplayertitle: "Census 304-2 — census_3042",
                interactive: false,
                title: '<img src="styles/legend/Census3042census_3042_46.png" /> Census 304-2 — census_3042'
            });
var format_Census3041census_3041_47 = new ol.format.GeoJSON();
var features_Census3041census_3041_47 = format_Census3041census_3041_47.readFeatures(json_Census3041census_3041_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3041census_3041_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3041census_3041_47.addFeatures(features_Census3041census_3041_47);
var lyr_Census3041census_3041_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3041census_3041_47, 
                style: style_Census3041census_3041_47,
                popuplayertitle: "Census 304-1 — census_3041",
                interactive: false,
                title: '<img src="styles/legend/Census3041census_3041_47.png" /> Census 304-1 — census_3041'
            });
var format_Census3032census_3032_48 = new ol.format.GeoJSON();
var features_Census3032census_3032_48 = format_Census3032census_3032_48.readFeatures(json_Census3032census_3032_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3032census_3032_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3032census_3032_48.addFeatures(features_Census3032census_3032_48);
var lyr_Census3032census_3032_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3032census_3032_48, 
                style: style_Census3032census_3032_48,
                popuplayertitle: "Census 303-2 — census_3032",
                interactive: false,
                title: '<img src="styles/legend/Census3032census_3032_48.png" /> Census 303-2 — census_3032'
            });
var format_Census3031census_3031_49 = new ol.format.GeoJSON();
var features_Census3031census_3031_49 = format_Census3031census_3031_49.readFeatures(json_Census3031census_3031_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3031census_3031_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3031census_3031_49.addFeatures(features_Census3031census_3031_49);
var lyr_Census3031census_3031_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3031census_3031_49, 
                style: style_Census3031census_3031_49,
                popuplayertitle: "Census 303-1 — census_3031",
                interactive: false,
                title: '<img src="styles/legend/Census3031census_3031_49.png" /> Census 303-1 — census_3031'
            });
var format_Census3025census_3025_50 = new ol.format.GeoJSON();
var features_Census3025census_3025_50 = format_Census3025census_3025_50.readFeatures(json_Census3025census_3025_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3025census_3025_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3025census_3025_50.addFeatures(features_Census3025census_3025_50);
var lyr_Census3025census_3025_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3025census_3025_50, 
                style: style_Census3025census_3025_50,
                popuplayertitle: "Census 302-5 — census_3025",
                interactive: false,
                title: '<img src="styles/legend/Census3025census_3025_50.png" /> Census 302-5 — census_3025'
            });
var format_Census3024census_3024_51 = new ol.format.GeoJSON();
var features_Census3024census_3024_51 = format_Census3024census_3024_51.readFeatures(json_Census3024census_3024_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3024census_3024_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3024census_3024_51.addFeatures(features_Census3024census_3024_51);
var lyr_Census3024census_3024_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3024census_3024_51, 
                style: style_Census3024census_3024_51,
                popuplayertitle: "Census 302-4 — census_3024",
                interactive: false,
                title: '<img src="styles/legend/Census3024census_3024_51.png" /> Census 302-4 — census_3024'
            });
var format_Census3023census_3023_52 = new ol.format.GeoJSON();
var features_Census3023census_3023_52 = format_Census3023census_3023_52.readFeatures(json_Census3023census_3023_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3023census_3023_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3023census_3023_52.addFeatures(features_Census3023census_3023_52);
var lyr_Census3023census_3023_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3023census_3023_52, 
                style: style_Census3023census_3023_52,
                popuplayertitle: "Census 302-3 — census_3023",
                interactive: false,
                title: '<img src="styles/legend/Census3023census_3023_52.png" /> Census 302-3 — census_3023'
            });
var format_Census3022census_3022_53 = new ol.format.GeoJSON();
var features_Census3022census_3022_53 = format_Census3022census_3022_53.readFeatures(json_Census3022census_3022_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3022census_3022_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3022census_3022_53.addFeatures(features_Census3022census_3022_53);
var lyr_Census3022census_3022_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3022census_3022_53, 
                style: style_Census3022census_3022_53,
                popuplayertitle: "Census 302-2 — census_3022",
                interactive: false,
                title: '<img src="styles/legend/Census3022census_3022_53.png" /> Census 302-2 — census_3022'
            });
var format_Census3021census_3021_54 = new ol.format.GeoJSON();
var features_Census3021census_3021_54 = format_Census3021census_3021_54.readFeatures(json_Census3021census_3021_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3021census_3021_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3021census_3021_54.addFeatures(features_Census3021census_3021_54);
var lyr_Census3021census_3021_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3021census_3021_54, 
                style: style_Census3021census_3021_54,
                popuplayertitle: "Census 302-1 — census_3021",
                interactive: false,
                title: '<img src="styles/legend/Census3021census_3021_54.png" /> Census 302-1 — census_3021'
            });
var format_Census3014census_3014_55 = new ol.format.GeoJSON();
var features_Census3014census_3014_55 = format_Census3014census_3014_55.readFeatures(json_Census3014census_3014_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3014census_3014_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3014census_3014_55.addFeatures(features_Census3014census_3014_55);
var lyr_Census3014census_3014_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3014census_3014_55, 
                style: style_Census3014census_3014_55,
                popuplayertitle: "Census 301-4 — census_3014",
                interactive: false,
                title: '<img src="styles/legend/Census3014census_3014_55.png" /> Census 301-4 — census_3014'
            });
var format_Census3013census_3013_56 = new ol.format.GeoJSON();
var features_Census3013census_3013_56 = format_Census3013census_3013_56.readFeatures(json_Census3013census_3013_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3013census_3013_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3013census_3013_56.addFeatures(features_Census3013census_3013_56);
var lyr_Census3013census_3013_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3013census_3013_56, 
                style: style_Census3013census_3013_56,
                popuplayertitle: "Census 301-3 — census_3013",
                interactive: false,
                title: '<img src="styles/legend/Census3013census_3013_56.png" /> Census 301-3 — census_3013'
            });
var format_Census3012census_3012_57 = new ol.format.GeoJSON();
var features_Census3012census_3012_57 = format_Census3012census_3012_57.readFeatures(json_Census3012census_3012_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3012census_3012_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3012census_3012_57.addFeatures(features_Census3012census_3012_57);
var lyr_Census3012census_3012_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3012census_3012_57, 
                style: style_Census3012census_3012_57,
                popuplayertitle: "Census 301-2 — census_3012",
                interactive: false,
                title: '<img src="styles/legend/Census3012census_3012_57.png" /> Census 301-2 — census_3012'
            });
var format_Census3011census_3011_58 = new ol.format.GeoJSON();
var features_Census3011census_3011_58 = format_Census3011census_3011_58.readFeatures(json_Census3011census_3011_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3011census_3011_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3011census_3011_58.addFeatures(features_Census3011census_3011_58);
var lyr_Census3011census_3011_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3011census_3011_58, 
                style: style_Census3011census_3011_58,
                popuplayertitle: "Census 301-1 — census_3011",
                interactive: false,
                title: '<img src="styles/legend/Census3011census_3011_58.png" /> Census 301-1 — census_3011'
            });
var format_Census3085census_3085_59 = new ol.format.GeoJSON();
var features_Census3085census_3085_59 = format_Census3085census_3085_59.readFeatures(json_Census3085census_3085_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3085census_3085_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3085census_3085_59.addFeatures(features_Census3085census_3085_59);
var lyr_Census3085census_3085_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3085census_3085_59, 
                style: style_Census3085census_3085_59,
                popuplayertitle: "Census 308-5 — census_3085",
                interactive: false,
                title: '<img src="styles/legend/Census3085census_3085_59.png" /> Census 308-5 — census_3085'
            });
var format_Census3084census_3084_60 = new ol.format.GeoJSON();
var features_Census3084census_3084_60 = format_Census3084census_3084_60.readFeatures(json_Census3084census_3084_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3084census_3084_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3084census_3084_60.addFeatures(features_Census3084census_3084_60);
var lyr_Census3084census_3084_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3084census_3084_60, 
                style: style_Census3084census_3084_60,
                popuplayertitle: "Census 308-4 — census_3084",
                interactive: false,
                title: '<img src="styles/legend/Census3084census_3084_60.png" /> Census 308-4 — census_3084'
            });
var format_Census3083census_3083_61 = new ol.format.GeoJSON();
var features_Census3083census_3083_61 = format_Census3083census_3083_61.readFeatures(json_Census3083census_3083_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3083census_3083_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3083census_3083_61.addFeatures(features_Census3083census_3083_61);
var lyr_Census3083census_3083_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3083census_3083_61, 
                style: style_Census3083census_3083_61,
                popuplayertitle: "Census 308-3 — census_3083",
                interactive: false,
                title: '<img src="styles/legend/Census3083census_3083_61.png" /> Census 308-3 — census_3083'
            });
var format_Census3082census_3082_62 = new ol.format.GeoJSON();
var features_Census3082census_3082_62 = format_Census3082census_3082_62.readFeatures(json_Census3082census_3082_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3082census_3082_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3082census_3082_62.addFeatures(features_Census3082census_3082_62);
var lyr_Census3082census_3082_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3082census_3082_62, 
                style: style_Census3082census_3082_62,
                popuplayertitle: "Census 308-2 — census_3082",
                interactive: false,
                title: '<img src="styles/legend/Census3082census_3082_62.png" /> Census 308-2 — census_3082'
            });
var format_Census3081census_3081_63 = new ol.format.GeoJSON();
var features_Census3081census_3081_63 = format_Census3081census_3081_63.readFeatures(json_Census3081census_3081_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3081census_3081_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3081census_3081_63.addFeatures(features_Census3081census_3081_63);
var lyr_Census3081census_3081_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3081census_3081_63, 
                style: style_Census3081census_3081_63,
                popuplayertitle: "Census 308-1 — census_3081",
                interactive: false,
                title: '<img src="styles/legend/Census3081census_3081_63.png" /> Census 308-1 — census_3081'
            });
var format_Census3075census_3075_64 = new ol.format.GeoJSON();
var features_Census3075census_3075_64 = format_Census3075census_3075_64.readFeatures(json_Census3075census_3075_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3075census_3075_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3075census_3075_64.addFeatures(features_Census3075census_3075_64);
var lyr_Census3075census_3075_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3075census_3075_64, 
                style: style_Census3075census_3075_64,
                popuplayertitle: "Census 307-5 — census_3075",
                interactive: false,
                title: '<img src="styles/legend/Census3075census_3075_64.png" /> Census 307-5 — census_3075'
            });
var format_Census3074census_3074_65 = new ol.format.GeoJSON();
var features_Census3074census_3074_65 = format_Census3074census_3074_65.readFeatures(json_Census3074census_3074_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3074census_3074_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3074census_3074_65.addFeatures(features_Census3074census_3074_65);
var lyr_Census3074census_3074_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3074census_3074_65, 
                style: style_Census3074census_3074_65,
                popuplayertitle: "Census 307-4 — census_3074",
                interactive: false,
                title: '<img src="styles/legend/Census3074census_3074_65.png" /> Census 307-4 — census_3074'
            });
var format_Census3073census_3073_66 = new ol.format.GeoJSON();
var features_Census3073census_3073_66 = format_Census3073census_3073_66.readFeatures(json_Census3073census_3073_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3073census_3073_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3073census_3073_66.addFeatures(features_Census3073census_3073_66);
var lyr_Census3073census_3073_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3073census_3073_66, 
                style: style_Census3073census_3073_66,
                popuplayertitle: "Census 307-3 — census_3073",
                interactive: false,
                title: '<img src="styles/legend/Census3073census_3073_66.png" /> Census 307-3 — census_3073'
            });
var format_Census3072census_3072_67 = new ol.format.GeoJSON();
var features_Census3072census_3072_67 = format_Census3072census_3072_67.readFeatures(json_Census3072census_3072_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3072census_3072_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3072census_3072_67.addFeatures(features_Census3072census_3072_67);
var lyr_Census3072census_3072_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3072census_3072_67, 
                style: style_Census3072census_3072_67,
                popuplayertitle: "Census 307-2 — census_3072",
                interactive: false,
                title: '<img src="styles/legend/Census3072census_3072_67.png" /> Census 307-2 — census_3072'
            });
var format_Census3071census_3071_68 = new ol.format.GeoJSON();
var features_Census3071census_3071_68 = format_Census3071census_3071_68.readFeatures(json_Census3071census_3071_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3071census_3071_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3071census_3071_68.addFeatures(features_Census3071census_3071_68);
var lyr_Census3071census_3071_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3071census_3071_68, 
                style: style_Census3071census_3071_68,
                popuplayertitle: "Census 307-1 — census_3071",
                interactive: false,
                title: '<img src="styles/legend/Census3071census_3071_68.png" /> Census 307-1 — census_3071'
            });
var format_Census3064census_3064_69 = new ol.format.GeoJSON();
var features_Census3064census_3064_69 = format_Census3064census_3064_69.readFeatures(json_Census3064census_3064_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3064census_3064_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3064census_3064_69.addFeatures(features_Census3064census_3064_69);
var lyr_Census3064census_3064_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3064census_3064_69, 
                style: style_Census3064census_3064_69,
                popuplayertitle: "Census 306-4 — census_3064",
                interactive: false,
                title: '<img src="styles/legend/Census3064census_3064_69.png" /> Census 306-4 — census_3064'
            });
var format_Census3063census_3063_70 = new ol.format.GeoJSON();
var features_Census3063census_3063_70 = format_Census3063census_3063_70.readFeatures(json_Census3063census_3063_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3063census_3063_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3063census_3063_70.addFeatures(features_Census3063census_3063_70);
var lyr_Census3063census_3063_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3063census_3063_70, 
                style: style_Census3063census_3063_70,
                popuplayertitle: "Census 306-3 — census_3063",
                interactive: false,
                title: '<img src="styles/legend/Census3063census_3063_70.png" /> Census 306-3 — census_3063'
            });
var format_Census3062census_3062_71 = new ol.format.GeoJSON();
var features_Census3062census_3062_71 = format_Census3062census_3062_71.readFeatures(json_Census3062census_3062_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3062census_3062_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3062census_3062_71.addFeatures(features_Census3062census_3062_71);
var lyr_Census3062census_3062_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3062census_3062_71, 
                style: style_Census3062census_3062_71,
                popuplayertitle: "Census 306-2 — census_3062",
                interactive: false,
                title: '<img src="styles/legend/Census3062census_3062_71.png" /> Census 306-2 — census_3062'
            });
var format_Census3061census_3061_72 = new ol.format.GeoJSON();
var features_Census3061census_3061_72 = format_Census3061census_3061_72.readFeatures(json_Census3061census_3061_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3061census_3061_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3061census_3061_72.addFeatures(features_Census3061census_3061_72);
var lyr_Census3061census_3061_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3061census_3061_72, 
                style: style_Census3061census_3061_72,
                popuplayertitle: "Census 306-1 — census_3061",
                interactive: false,
                title: '<img src="styles/legend/Census3061census_3061_72.png" /> Census 306-1 — census_3061'
            });
var format_Census3055census_3055_73 = new ol.format.GeoJSON();
var features_Census3055census_3055_73 = format_Census3055census_3055_73.readFeatures(json_Census3055census_3055_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3055census_3055_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3055census_3055_73.addFeatures(features_Census3055census_3055_73);
var lyr_Census3055census_3055_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3055census_3055_73, 
                style: style_Census3055census_3055_73,
                popuplayertitle: "Census 305-5 — census_3055",
                interactive: false,
                title: '<img src="styles/legend/Census3055census_3055_73.png" /> Census 305-5 — census_3055'
            });
var format_Census3054census_3054_74 = new ol.format.GeoJSON();
var features_Census3054census_3054_74 = format_Census3054census_3054_74.readFeatures(json_Census3054census_3054_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3054census_3054_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3054census_3054_74.addFeatures(features_Census3054census_3054_74);
var lyr_Census3054census_3054_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3054census_3054_74, 
                style: style_Census3054census_3054_74,
                popuplayertitle: "Census 305-4 — census_3054",
                interactive: false,
                title: '<img src="styles/legend/Census3054census_3054_74.png" /> Census 305-4 — census_3054'
            });
var format_Census3053census_3053_75 = new ol.format.GeoJSON();
var features_Census3053census_3053_75 = format_Census3053census_3053_75.readFeatures(json_Census3053census_3053_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3053census_3053_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3053census_3053_75.addFeatures(features_Census3053census_3053_75);
var lyr_Census3053census_3053_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3053census_3053_75, 
                style: style_Census3053census_3053_75,
                popuplayertitle: "Census 305-3 — census_3053",
                interactive: false,
                title: '<img src="styles/legend/Census3053census_3053_75.png" /> Census 305-3 — census_3053'
            });
var format_Census3052census_3052_76 = new ol.format.GeoJSON();
var features_Census3052census_3052_76 = format_Census3052census_3052_76.readFeatures(json_Census3052census_3052_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3052census_3052_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3052census_3052_76.addFeatures(features_Census3052census_3052_76);
var lyr_Census3052census_3052_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3052census_3052_76, 
                style: style_Census3052census_3052_76,
                popuplayertitle: "Census 305-2 — census_3052",
                interactive: false,
                title: '<img src="styles/legend/Census3052census_3052_76.png" /> Census 305-2 — census_3052'
            });
var format_Census3051census_3051_77 = new ol.format.GeoJSON();
var features_Census3051census_3051_77 = format_Census3051census_3051_77.readFeatures(json_Census3051census_3051_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3051census_3051_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3051census_3051_77.addFeatures(features_Census3051census_3051_77);
var lyr_Census3051census_3051_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3051census_3051_77, 
                style: style_Census3051census_3051_77,
                popuplayertitle: "Census 305-1 — census_3051",
                interactive: false,
                title: '<img src="styles/legend/Census3051census_3051_77.png" /> Census 305-1 — census_3051'
            });
var format_Census3044census_3044_78 = new ol.format.GeoJSON();
var features_Census3044census_3044_78 = format_Census3044census_3044_78.readFeatures(json_Census3044census_3044_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3044census_3044_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3044census_3044_78.addFeatures(features_Census3044census_3044_78);
var lyr_Census3044census_3044_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3044census_3044_78, 
                style: style_Census3044census_3044_78,
                popuplayertitle: "Census 304-4 — census_3044",
                interactive: false,
                title: '<img src="styles/legend/Census3044census_3044_78.png" /> Census 304-4 — census_3044'
            });
var format_Census3043census_3043_79 = new ol.format.GeoJSON();
var features_Census3043census_3043_79 = format_Census3043census_3043_79.readFeatures(json_Census3043census_3043_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3043census_3043_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3043census_3043_79.addFeatures(features_Census3043census_3043_79);
var lyr_Census3043census_3043_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3043census_3043_79, 
                style: style_Census3043census_3043_79,
                popuplayertitle: "Census 304-3 — census_3043",
                interactive: false,
                title: '<img src="styles/legend/Census3043census_3043_79.png" /> Census 304-3 — census_3043'
            });
var format_Census3042census_3042_80 = new ol.format.GeoJSON();
var features_Census3042census_3042_80 = format_Census3042census_3042_80.readFeatures(json_Census3042census_3042_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3042census_3042_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3042census_3042_80.addFeatures(features_Census3042census_3042_80);
var lyr_Census3042census_3042_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3042census_3042_80, 
                style: style_Census3042census_3042_80,
                popuplayertitle: "Census 304-2 — census_3042",
                interactive: false,
                title: '<img src="styles/legend/Census3042census_3042_80.png" /> Census 304-2 — census_3042'
            });
var format_Census3041census_3041_81 = new ol.format.GeoJSON();
var features_Census3041census_3041_81 = format_Census3041census_3041_81.readFeatures(json_Census3041census_3041_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3041census_3041_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3041census_3041_81.addFeatures(features_Census3041census_3041_81);
var lyr_Census3041census_3041_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3041census_3041_81, 
                style: style_Census3041census_3041_81,
                popuplayertitle: "Census 304-1 — census_3041",
                interactive: false,
                title: '<img src="styles/legend/Census3041census_3041_81.png" /> Census 304-1 — census_3041'
            });
var format_Census3032census_3032_82 = new ol.format.GeoJSON();
var features_Census3032census_3032_82 = format_Census3032census_3032_82.readFeatures(json_Census3032census_3032_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3032census_3032_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3032census_3032_82.addFeatures(features_Census3032census_3032_82);
var lyr_Census3032census_3032_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3032census_3032_82, 
                style: style_Census3032census_3032_82,
                popuplayertitle: "Census 303-2 — census_3032",
                interactive: false,
                title: '<img src="styles/legend/Census3032census_3032_82.png" /> Census 303-2 — census_3032'
            });
var format_Census3031census_3031_83 = new ol.format.GeoJSON();
var features_Census3031census_3031_83 = format_Census3031census_3031_83.readFeatures(json_Census3031census_3031_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3031census_3031_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3031census_3031_83.addFeatures(features_Census3031census_3031_83);
var lyr_Census3031census_3031_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3031census_3031_83, 
                style: style_Census3031census_3031_83,
                popuplayertitle: "Census 303-1 — census_3031",
                interactive: false,
                title: '<img src="styles/legend/Census3031census_3031_83.png" /> Census 303-1 — census_3031'
            });
var format_Census3025census_3025_84 = new ol.format.GeoJSON();
var features_Census3025census_3025_84 = format_Census3025census_3025_84.readFeatures(json_Census3025census_3025_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3025census_3025_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3025census_3025_84.addFeatures(features_Census3025census_3025_84);
var lyr_Census3025census_3025_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3025census_3025_84, 
                style: style_Census3025census_3025_84,
                popuplayertitle: "Census 302-5 — census_3025",
                interactive: false,
                title: '<img src="styles/legend/Census3025census_3025_84.png" /> Census 302-5 — census_3025'
            });
var format_Census3024census_3024_85 = new ol.format.GeoJSON();
var features_Census3024census_3024_85 = format_Census3024census_3024_85.readFeatures(json_Census3024census_3024_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3024census_3024_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3024census_3024_85.addFeatures(features_Census3024census_3024_85);
var lyr_Census3024census_3024_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3024census_3024_85, 
                style: style_Census3024census_3024_85,
                popuplayertitle: "Census 302-4 — census_3024",
                interactive: false,
                title: '<img src="styles/legend/Census3024census_3024_85.png" /> Census 302-4 — census_3024'
            });
var format_Census3023census_3023_86 = new ol.format.GeoJSON();
var features_Census3023census_3023_86 = format_Census3023census_3023_86.readFeatures(json_Census3023census_3023_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3023census_3023_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3023census_3023_86.addFeatures(features_Census3023census_3023_86);
var lyr_Census3023census_3023_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3023census_3023_86, 
                style: style_Census3023census_3023_86,
                popuplayertitle: "Census 302-3 — census_3023",
                interactive: false,
                title: '<img src="styles/legend/Census3023census_3023_86.png" /> Census 302-3 — census_3023'
            });
var format_Census3022census_3022_87 = new ol.format.GeoJSON();
var features_Census3022census_3022_87 = format_Census3022census_3022_87.readFeatures(json_Census3022census_3022_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3022census_3022_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3022census_3022_87.addFeatures(features_Census3022census_3022_87);
var lyr_Census3022census_3022_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3022census_3022_87, 
                style: style_Census3022census_3022_87,
                popuplayertitle: "Census 302-2 — census_3022",
                interactive: false,
                title: '<img src="styles/legend/Census3022census_3022_87.png" /> Census 302-2 — census_3022'
            });
var format_Census3021census_3021_88 = new ol.format.GeoJSON();
var features_Census3021census_3021_88 = format_Census3021census_3021_88.readFeatures(json_Census3021census_3021_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3021census_3021_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3021census_3021_88.addFeatures(features_Census3021census_3021_88);
var lyr_Census3021census_3021_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3021census_3021_88, 
                style: style_Census3021census_3021_88,
                popuplayertitle: "Census 302-1 — census_3021",
                interactive: false,
                title: '<img src="styles/legend/Census3021census_3021_88.png" /> Census 302-1 — census_3021'
            });
var format_Census3014census_3014_89 = new ol.format.GeoJSON();
var features_Census3014census_3014_89 = format_Census3014census_3014_89.readFeatures(json_Census3014census_3014_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3014census_3014_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3014census_3014_89.addFeatures(features_Census3014census_3014_89);
var lyr_Census3014census_3014_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3014census_3014_89, 
                style: style_Census3014census_3014_89,
                popuplayertitle: "Census 301-4 — census_3014",
                interactive: false,
                title: '<img src="styles/legend/Census3014census_3014_89.png" /> Census 301-4 — census_3014'
            });
var format_Census3013census_3013_90 = new ol.format.GeoJSON();
var features_Census3013census_3013_90 = format_Census3013census_3013_90.readFeatures(json_Census3013census_3013_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3013census_3013_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3013census_3013_90.addFeatures(features_Census3013census_3013_90);
var lyr_Census3013census_3013_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3013census_3013_90, 
                style: style_Census3013census_3013_90,
                popuplayertitle: "Census 301-3 — census_3013",
                interactive: false,
                title: '<img src="styles/legend/Census3013census_3013_90.png" /> Census 301-3 — census_3013'
            });
var format_Census3012census_3012_91 = new ol.format.GeoJSON();
var features_Census3012census_3012_91 = format_Census3012census_3012_91.readFeatures(json_Census3012census_3012_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3012census_3012_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3012census_3012_91.addFeatures(features_Census3012census_3012_91);
var lyr_Census3012census_3012_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3012census_3012_91, 
                style: style_Census3012census_3012_91,
                popuplayertitle: "Census 301-2 — census_3012",
                interactive: false,
                title: '<img src="styles/legend/Census3012census_3012_91.png" /> Census 301-2 — census_3012'
            });
var format_Census3011census_3011_92 = new ol.format.GeoJSON();
var features_Census3011census_3011_92 = format_Census3011census_3011_92.readFeatures(json_Census3011census_3011_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Census3011census_3011_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Census3011census_3011_92.addFeatures(features_Census3011census_3011_92);
var lyr_Census3011census_3011_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Census3011census_3011_92, 
                style: style_Census3011census_3011_92,
                popuplayertitle: "Census 301-1 — census_3011",
                interactive: false,
                title: '<img src="styles/legend/Census3011census_3011_92.png" /> Census 301-1 — census_3011'
            });
var format_EMS01Jan202430June2024_93 = new ol.format.GeoJSON();
var features_EMS01Jan202430June2024_93 = format_EMS01Jan202430June2024_93.readFeatures(json_EMS01Jan202430June2024_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EMS01Jan202430June2024_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EMS01Jan202430June2024_93.addFeatures(features_EMS01Jan202430June2024_93);
var lyr_EMS01Jan202430June2024_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EMS01Jan202430June2024_93, 
                style: style_EMS01Jan202430June2024_93,
                popuplayertitle: "EMS 01 Jan 2024 - 30 June 2024",
                interactive: true,
                title: '<img src="styles/legend/EMS01Jan202430June2024_93.png" /> EMS 01 Jan 2024 - 30 June 2024'
            });
var format_ODdrugintoxcallsmultipletosamelocation_94 = new ol.format.GeoJSON();
var features_ODdrugintoxcallsmultipletosamelocation_94 = format_ODdrugintoxcallsmultipletosamelocation_94.readFeatures(json_ODdrugintoxcallsmultipletosamelocation_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ODdrugintoxcallsmultipletosamelocation_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ODdrugintoxcallsmultipletosamelocation_94.addFeatures(features_ODdrugintoxcallsmultipletosamelocation_94);
var lyr_ODdrugintoxcallsmultipletosamelocation_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ODdrugintoxcallsmultipletosamelocation_94, 
                style: style_ODdrugintoxcallsmultipletosamelocation_94,
                popuplayertitle: "OD, drug, intox calls - multiple to same location",
                interactive: true,
                title: '<img src="styles/legend/ODdrugintoxcallsmultipletosamelocation_94.png" /> OD, drug, intox calls - multiple to same location'
            });
var format_ODdrugintoxcalls_95 = new ol.format.GeoJSON();
var features_ODdrugintoxcalls_95 = format_ODdrugintoxcalls_95.readFeatures(json_ODdrugintoxcalls_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ODdrugintoxcalls_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ODdrugintoxcalls_95.addFeatures(features_ODdrugintoxcalls_95);
var lyr_ODdrugintoxcalls_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ODdrugintoxcalls_95, 
                style: style_ODdrugintoxcalls_95,
                popuplayertitle: "OD, drug, intox calls",
                interactive: true,
                title: '<img src="styles/legend/ODdrugintoxcalls_95.png" /> OD, drug, intox calls'
            });
var group_301423poverty = new ol.layer.Group({
                                layers: [lyr_Census3014census_3014_89,lyr_Census3013census_3013_90,lyr_Census3012census_3012_91,lyr_Census3011census_3011_92,],
                                fold: "open",
                                title: "301 - 42.3% poverty"});
var group_302367poverty = new ol.layer.Group({
                                layers: [lyr_Census3025census_3025_84,lyr_Census3024census_3024_85,lyr_Census3023census_3023_86,lyr_Census3022census_3022_87,lyr_Census3021census_3021_88,],
                                fold: "open",
                                title: "302 - 36.7% poverty"});
var group_303335poverty = new ol.layer.Group({
                                layers: [lyr_Census3032census_3032_82,lyr_Census3031census_3031_83,],
                                fold: "open",
                                title: "303 - 33.5% poverty"});
var group_30454poverty = new ol.layer.Group({
                                layers: [lyr_Census3044census_3044_78,lyr_Census3043census_3043_79,lyr_Census3042census_3042_80,lyr_Census3041census_3041_81,],
                                fold: "open",
                                title: "304 - 5.4% poverty"});
var group_305454poverty = new ol.layer.Group({
                                layers: [lyr_Census3055census_3055_73,lyr_Census3054census_3054_74,lyr_Census3053census_3053_75,lyr_Census3052census_3052_76,lyr_Census3051census_3051_77,],
                                fold: "open",
                                title: "305 - 45.4% poverty"});
var group_306326poverty = new ol.layer.Group({
                                layers: [lyr_Census3064census_3064_69,lyr_Census3063census_3063_70,lyr_Census3062census_3062_71,lyr_Census3061census_3061_72,],
                                fold: "open",
                                title: "306 - 32.6% poverty"});
var group_307195poverty = new ol.layer.Group({
                                layers: [lyr_Census3075census_3075_64,lyr_Census3074census_3074_65,lyr_Census3073census_3073_66,lyr_Census3072census_3072_67,lyr_Census3071census_3071_68,],
                                fold: "open",
                                title: "307 - 19.5% poverty"});
var group_308205poverty = new ol.layer.Group({
                                layers: [lyr_Census3085census_3085_59,lyr_Census3084census_3084_60,lyr_Census3083census_3083_61,lyr_Census3082census_3082_62,lyr_Census3081census_3081_63,],
                                fold: "open",
                                title: "308 - 20.5% poverty"});
var group_301 = new ol.layer.Group({
                                layers: [lyr_Census3014census_3014_55,lyr_Census3013census_3013_56,lyr_Census3012census_3012_57,lyr_Census3011census_3011_58,],
                                fold: "open",
                                title: "301"});
var group_302 = new ol.layer.Group({
                                layers: [lyr_Census3025census_3025_50,lyr_Census3024census_3024_51,lyr_Census3023census_3023_52,lyr_Census3022census_3022_53,lyr_Census3021census_3021_54,],
                                fold: "open",
                                title: "302"});
var group_303 = new ol.layer.Group({
                                layers: [lyr_Census3032census_3032_48,lyr_Census3031census_3031_49,],
                                fold: "open",
                                title: "303"});
var group_304 = new ol.layer.Group({
                                layers: [lyr_Census3044census_3044_44,lyr_Census3043census_3043_45,lyr_Census3042census_3042_46,lyr_Census3041census_3041_47,],
                                fold: "open",
                                title: "304"});
var group_305 = new ol.layer.Group({
                                layers: [lyr_Census3055census_3055_39,lyr_Census3054census_3054_40,lyr_Census3053census_3053_41,lyr_Census3052census_3052_42,lyr_Census3051census_3051_43,],
                                fold: "open",
                                title: "305"});
var group_306 = new ol.layer.Group({
                                layers: [lyr_Census3064census_3064_35,lyr_Census3063census_3063_36,lyr_Census3062census_3062_37,lyr_Census3061census_3061_38,],
                                fold: "open",
                                title: "306"});
var group_307 = new ol.layer.Group({
                                layers: [lyr_Census3075census_3075_30,lyr_Census3074census_3074_31,lyr_Census3073census_3073_32,lyr_Census3072census_3072_33,lyr_Census3071census_3071_34,],
                                fold: "open",
                                title: "307"});
var group_308 = new ol.layer.Group({
                                layers: [lyr_Census3085census_3085_25,lyr_Census3084census_3084_26,lyr_Census3083census_3083_27,lyr_Census3082census_3082_28,lyr_Census3081census_3081_29,],
                                fold: "open",
                                title: "308"});
var group_DunkirkFredoniacensusdivisionsPOVERTY = new ol.layer.Group({
                                layers: [lyr_Census3604_1,lyr_Census3603_2,lyr_Census3602_3,lyr_Census3601_4,lyr_Census359021_5,lyr_Census359013_6,lyr_Census359012_7,lyr_Census359011_8,lyr_Census3584_9,lyr_Census3583_10,lyr_Census3582_11,lyr_Census3581_12,lyr_Census3573_13,lyr_Census3572_14,lyr_Census3571_15,lyr_Census3563_16,lyr_Census3562_17,lyr_Census3561_18,lyr_Census3553_19,lyr_Census3552_20,lyr_Census3551_21,lyr_Census3543_22,lyr_Census3542_23,lyr_Census3541_24,],
                                fold: "open",
                                title: "Dunkirk-Fredonia census divisions: POVERTY"});

lyr_Positronretina_0.setVisible(true);lyr_Census3604_1.setVisible(true);lyr_Census3603_2.setVisible(true);lyr_Census3602_3.setVisible(true);lyr_Census3601_4.setVisible(true);lyr_Census359021_5.setVisible(true);lyr_Census359013_6.setVisible(true);lyr_Census359012_7.setVisible(true);lyr_Census359011_8.setVisible(true);lyr_Census3584_9.setVisible(true);lyr_Census3583_10.setVisible(true);lyr_Census3582_11.setVisible(true);lyr_Census3581_12.setVisible(true);lyr_Census3573_13.setVisible(true);lyr_Census3572_14.setVisible(true);lyr_Census3571_15.setVisible(true);lyr_Census3563_16.setVisible(true);lyr_Census3562_17.setVisible(true);lyr_Census3561_18.setVisible(true);lyr_Census3553_19.setVisible(true);lyr_Census3552_20.setVisible(true);lyr_Census3551_21.setVisible(true);lyr_Census3543_22.setVisible(true);lyr_Census3542_23.setVisible(true);lyr_Census3541_24.setVisible(true);lyr_Census3085census_3085_25.setVisible(true);lyr_Census3084census_3084_26.setVisible(true);lyr_Census3083census_3083_27.setVisible(true);lyr_Census3082census_3082_28.setVisible(true);lyr_Census3081census_3081_29.setVisible(true);lyr_Census3075census_3075_30.setVisible(true);lyr_Census3074census_3074_31.setVisible(true);lyr_Census3073census_3073_32.setVisible(true);lyr_Census3072census_3072_33.setVisible(true);lyr_Census3071census_3071_34.setVisible(true);lyr_Census3064census_3064_35.setVisible(true);lyr_Census3063census_3063_36.setVisible(true);lyr_Census3062census_3062_37.setVisible(true);lyr_Census3061census_3061_38.setVisible(true);lyr_Census3055census_3055_39.setVisible(true);lyr_Census3054census_3054_40.setVisible(true);lyr_Census3053census_3053_41.setVisible(true);lyr_Census3052census_3052_42.setVisible(true);lyr_Census3051census_3051_43.setVisible(true);lyr_Census3044census_3044_44.setVisible(true);lyr_Census3043census_3043_45.setVisible(true);lyr_Census3042census_3042_46.setVisible(true);lyr_Census3041census_3041_47.setVisible(true);lyr_Census3032census_3032_48.setVisible(true);lyr_Census3031census_3031_49.setVisible(true);lyr_Census3025census_3025_50.setVisible(true);lyr_Census3024census_3024_51.setVisible(true);lyr_Census3023census_3023_52.setVisible(true);lyr_Census3022census_3022_53.setVisible(true);lyr_Census3021census_3021_54.setVisible(true);lyr_Census3014census_3014_55.setVisible(true);lyr_Census3013census_3013_56.setVisible(true);lyr_Census3012census_3012_57.setVisible(true);lyr_Census3011census_3011_58.setVisible(true);lyr_Census3085census_3085_59.setVisible(true);lyr_Census3084census_3084_60.setVisible(true);lyr_Census3083census_3083_61.setVisible(true);lyr_Census3082census_3082_62.setVisible(true);lyr_Census3081census_3081_63.setVisible(true);lyr_Census3075census_3075_64.setVisible(true);lyr_Census3074census_3074_65.setVisible(true);lyr_Census3073census_3073_66.setVisible(true);lyr_Census3072census_3072_67.setVisible(true);lyr_Census3071census_3071_68.setVisible(true);lyr_Census3064census_3064_69.setVisible(true);lyr_Census3063census_3063_70.setVisible(true);lyr_Census3062census_3062_71.setVisible(true);lyr_Census3061census_3061_72.setVisible(true);lyr_Census3055census_3055_73.setVisible(true);lyr_Census3054census_3054_74.setVisible(true);lyr_Census3053census_3053_75.setVisible(true);lyr_Census3052census_3052_76.setVisible(true);lyr_Census3051census_3051_77.setVisible(true);lyr_Census3044census_3044_78.setVisible(true);lyr_Census3043census_3043_79.setVisible(true);lyr_Census3042census_3042_80.setVisible(true);lyr_Census3041census_3041_81.setVisible(true);lyr_Census3032census_3032_82.setVisible(true);lyr_Census3031census_3031_83.setVisible(true);lyr_Census3025census_3025_84.setVisible(true);lyr_Census3024census_3024_85.setVisible(true);lyr_Census3023census_3023_86.setVisible(true);lyr_Census3022census_3022_87.setVisible(true);lyr_Census3021census_3021_88.setVisible(true);lyr_Census3014census_3014_89.setVisible(true);lyr_Census3013census_3013_90.setVisible(true);lyr_Census3012census_3012_91.setVisible(true);lyr_Census3011census_3011_92.setVisible(true);lyr_EMS01Jan202430June2024_93.setVisible(true);lyr_ODdrugintoxcallsmultipletosamelocation_94.setVisible(true);lyr_ODdrugintoxcalls_95.setVisible(true);
var layersList = [lyr_Positronretina_0,group_DunkirkFredoniacensusdivisionsPOVERTY,group_308,group_307,group_306,group_305,group_304,group_303,group_302,group_301,group_308205poverty,group_307195poverty,group_306326poverty,group_305454poverty,group_30454poverty,group_303335poverty,group_302367poverty,group_301423poverty,lyr_EMS01Jan202430June2024_93,lyr_ODdrugintoxcallsmultipletosamelocation_94,lyr_ODdrugintoxcalls_95];
lyr_Census3604_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOIDFQ': 'GEOIDFQ', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_Census3603_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOIDFQ': 'GEOIDFQ', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_Census3602_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOIDFQ': 'GEOIDFQ', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_Census3601_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOIDFQ': 'GEOIDFQ', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_Census359021_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOIDFQ': 'GEOIDFQ', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_Census359013_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOIDFQ': 'GEOIDFQ', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_Census359012_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOIDFQ': 'GEOIDFQ', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_Census359011_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOIDFQ': 'GEOIDFQ', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_Census3584_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOIDFQ': 'GEOIDFQ', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_Census3583_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOIDFQ': 'GEOIDFQ', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_Census3582_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOIDFQ': 'GEOIDFQ', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_Census3581_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOIDFQ': 'GEOIDFQ', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_Census3573_13.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOIDFQ': 'GEOIDFQ', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_Census3572_14.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOIDFQ': 'GEOIDFQ', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_Census3571_15.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOIDFQ': 'GEOIDFQ', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_Census3563_16.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOIDFQ': 'GEOIDFQ', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_Census3562_17.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOIDFQ': 'GEOIDFQ', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_Census3561_18.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOIDFQ': 'GEOIDFQ', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_Census3553_19.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOIDFQ': 'GEOIDFQ', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_Census3552_20.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOIDFQ': 'GEOIDFQ', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_Census3551_21.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOIDFQ': 'GEOIDFQ', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_Census3543_22.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOIDFQ': 'GEOIDFQ', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_Census3542_23.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOIDFQ': 'GEOIDFQ', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_Census3541_24.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOIDFQ': 'GEOIDFQ', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_Census3085census_3085_25.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3084census_3084_26.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3083census_3083_27.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3082census_3082_28.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3081census_3081_29.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3075census_3075_30.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3074census_3074_31.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3073census_3073_32.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3072census_3072_33.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3071census_3071_34.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3064census_3064_35.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3063census_3063_36.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3062census_3062_37.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3061census_3061_38.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3055census_3055_39.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3054census_3054_40.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3053census_3053_41.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3052census_3052_42.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3051census_3051_43.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3044census_3044_44.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3043census_3043_45.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3042census_3042_46.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3041census_3041_47.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3032census_3032_48.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3031census_3031_49.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3025census_3025_50.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3024census_3024_51.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3023census_3023_52.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3022census_3022_53.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3021census_3021_54.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3014census_3014_55.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3013census_3013_56.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3012census_3012_57.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3011census_3011_58.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'BlkGp Name': 'BlkGp Name', });
lyr_Census3085census_3085_59.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3084census_3084_60.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3083census_3083_61.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3082census_3082_62.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3081census_3081_63.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3075census_3075_64.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3074census_3074_65.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3073census_3073_66.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3072census_3072_67.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3071census_3071_68.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3064census_3064_69.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3063census_3063_70.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3062census_3062_71.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3061census_3061_72.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3055census_3055_73.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3054census_3054_74.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3053census_3053_75.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3052census_3052_76.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3051census_3051_77.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3044census_3044_78.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3043census_3043_79.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3042census_3042_80.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3041census_3041_81.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3032census_3032_82.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3031census_3031_83.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3025census_3025_84.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3024census_3024_85.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3023census_3023_86.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3022census_3022_87.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3021census_3021_88.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3014census_3014_89.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3013census_3013_90.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3012census_3012_91.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'Blk Gp Name': 'Blk Gp Name', });
lyr_Census3011census_3011_92.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'BlkGp Name': 'BlkGp Name', });
lyr_EMS01Jan202430June2024_93.set('fieldAliases', {'Address': 'Address', 'Town': 'Town', 'State': 'State', 'ZIP': 'ZIP', 'Description': 'Description', 'Date and time': 'Date and time', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Companies': 'Companies', });
lyr_ODdrugintoxcallsmultipletosamelocation_94.set('fieldAliases', {'Address': 'Address', 'Town': 'Town', 'State': 'State', 'ZIP': 'ZIP', 'Description': 'Description', 'Date and time': 'Date and time', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Companies': 'Companies', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', });
lyr_ODdrugintoxcalls_95.set('fieldAliases', {'Address': 'Address', 'Town': 'Town', 'State': 'State', 'ZIP': 'ZIP', 'Description': 'Description', 'Date and time': 'Date and time', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Companies': 'Companies', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', });
lyr_Census3604_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOIDFQ': '', 'GEOID': '', 'NAMELSAD': '', 'LSAD': '', 'ALAND': '', 'AWATER': '', });
lyr_Census3603_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOIDFQ': '', 'GEOID': '', 'NAMELSAD': '', 'LSAD': '', 'ALAND': '', 'AWATER': '', });
lyr_Census3602_3.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOIDFQ': '', 'GEOID': '', 'NAMELSAD': '', 'LSAD': '', 'ALAND': '', 'AWATER': '', });
lyr_Census3601_4.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOIDFQ': '', 'GEOID': '', 'NAMELSAD': '', 'LSAD': '', 'ALAND': '', 'AWATER': '', });
lyr_Census359021_5.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOIDFQ': '', 'GEOID': '', 'NAMELSAD': '', 'LSAD': '', 'ALAND': '', 'AWATER': '', });
lyr_Census359013_6.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOIDFQ': '', 'GEOID': '', 'NAMELSAD': '', 'LSAD': '', 'ALAND': '', 'AWATER': '', });
lyr_Census359012_7.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOIDFQ': '', 'GEOID': '', 'NAMELSAD': '', 'LSAD': '', 'ALAND': '', 'AWATER': '', });
lyr_Census359011_8.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOIDFQ': '', 'GEOID': '', 'NAMELSAD': '', 'LSAD': '', 'ALAND': '', 'AWATER': '', });
lyr_Census3584_9.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOIDFQ': '', 'GEOID': '', 'NAMELSAD': '', 'LSAD': '', 'ALAND': '', 'AWATER': '', });
lyr_Census3583_10.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOIDFQ': '', 'GEOID': '', 'NAMELSAD': '', 'LSAD': '', 'ALAND': '', 'AWATER': '', });
lyr_Census3582_11.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOIDFQ': '', 'GEOID': '', 'NAMELSAD': '', 'LSAD': '', 'ALAND': '', 'AWATER': '', });
lyr_Census3581_12.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOIDFQ': '', 'GEOID': '', 'NAMELSAD': '', 'LSAD': '', 'ALAND': '', 'AWATER': '', });
lyr_Census3573_13.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOIDFQ': '', 'GEOID': '', 'NAMELSAD': '', 'LSAD': '', 'ALAND': '', 'AWATER': '', });
lyr_Census3572_14.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOIDFQ': '', 'GEOID': '', 'NAMELSAD': '', 'LSAD': '', 'ALAND': '', 'AWATER': '', });
lyr_Census3571_15.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOIDFQ': '', 'GEOID': '', 'NAMELSAD': '', 'LSAD': '', 'ALAND': '', 'AWATER': '', });
lyr_Census3563_16.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOIDFQ': '', 'GEOID': '', 'NAMELSAD': '', 'LSAD': '', 'ALAND': '', 'AWATER': '', });
lyr_Census3562_17.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOIDFQ': '', 'GEOID': '', 'NAMELSAD': '', 'LSAD': '', 'ALAND': '', 'AWATER': '', });
lyr_Census3561_18.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOIDFQ': '', 'GEOID': '', 'NAMELSAD': '', 'LSAD': '', 'ALAND': '', 'AWATER': '', });
lyr_Census3553_19.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOIDFQ': '', 'GEOID': '', 'NAMELSAD': '', 'LSAD': '', 'ALAND': '', 'AWATER': '', });
lyr_Census3552_20.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOIDFQ': '', 'GEOID': '', 'NAMELSAD': '', 'LSAD': '', 'ALAND': '', 'AWATER': '', });
lyr_Census3551_21.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOIDFQ': '', 'GEOID': '', 'NAMELSAD': '', 'LSAD': '', 'ALAND': '', 'AWATER': '', });
lyr_Census3543_22.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOIDFQ': '', 'GEOID': '', 'NAMELSAD': '', 'LSAD': '', 'ALAND': '', 'AWATER': '', });
lyr_Census3542_23.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOIDFQ': '', 'GEOID': '', 'NAMELSAD': '', 'LSAD': '', 'ALAND': '', 'AWATER': '', });
lyr_Census3541_24.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'BLKGRPCE': '', 'GEOIDFQ': '', 'GEOID': '', 'NAMELSAD': '', 'LSAD': '', 'ALAND': '', 'AWATER': '', });
lyr_Census3085census_3085_25.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3084census_3084_26.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3083census_3083_27.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3082census_3082_28.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3081census_3081_29.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3075census_3075_30.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3074census_3074_31.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3073census_3073_32.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3072census_3072_33.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3071census_3071_34.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3064census_3064_35.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3063census_3063_36.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3062census_3062_37.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3061census_3061_38.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3055census_3055_39.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3054census_3054_40.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3053census_3053_41.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3052census_3052_42.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3051census_3051_43.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3044census_3044_44.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3043census_3043_45.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3042census_3042_46.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3041census_3041_47.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3032census_3032_48.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3031census_3031_49.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3025census_3025_50.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3024census_3024_51.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3023census_3023_52.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3022census_3022_53.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3021census_3021_54.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3014census_3014_55.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3013census_3013_56.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3012census_3012_57.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'Blk Gp Name': '', });
lyr_Census3011census_3011_58.set('fieldImages', {'fid': '', 'begin': '', 'end': '', 'BlkGp Name': '', });
lyr_Census3085census_3085_59.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3084census_3084_60.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3083census_3083_61.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3082census_3082_62.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3081census_3081_63.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3075census_3075_64.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3074census_3074_65.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3073census_3073_66.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3072census_3072_67.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3071census_3071_68.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3064census_3064_69.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3063census_3063_70.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3062census_3062_71.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3061census_3061_72.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3055census_3055_73.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3054census_3054_74.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3053census_3053_75.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3052census_3052_76.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3051census_3051_77.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3044census_3044_78.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3043census_3043_79.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3042census_3042_80.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3041census_3041_81.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3032census_3032_82.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3031census_3031_83.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3025census_3025_84.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3024census_3024_85.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3023census_3023_86.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3022census_3022_87.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3021census_3021_88.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3014census_3014_89.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3013census_3013_90.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3012census_3012_91.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Blk Gp Name': 'TextEdit', });
lyr_Census3011census_3011_92.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'BlkGp Name': 'TextEdit', });
lyr_EMS01Jan202430June2024_93.set('fieldImages', {'Address': 'TextEdit', 'Town': 'TextEdit', 'State': 'TextEdit', 'ZIP': 'Range', 'Description': 'TextEdit', 'Date and time': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Companies': 'TextEdit', });
lyr_ODdrugintoxcallsmultipletosamelocation_94.set('fieldImages', {'Address': 'TextEdit', 'Town': 'TextEdit', 'State': 'TextEdit', 'ZIP': 'Range', 'Description': 'TextEdit', 'Date and time': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Companies': 'TextEdit', 'field_10': '', 'field_11': '', 'field_12': '', 'field_13': '', 'field_14': '', });
lyr_ODdrugintoxcalls_95.set('fieldImages', {'Address': 'TextEdit', 'Town': 'TextEdit', 'State': 'TextEdit', 'ZIP': 'Range', 'Description': 'TextEdit', 'Date and time': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Companies': 'TextEdit', 'field_10': '', 'field_11': '', 'field_12': '', 'field_13': '', 'field_14': '', });
lyr_Census3604_1.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOIDFQ': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', });
lyr_Census3603_2.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOIDFQ': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', });
lyr_Census3602_3.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOIDFQ': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', });
lyr_Census3601_4.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOIDFQ': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', });
lyr_Census359021_5.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOIDFQ': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', });
lyr_Census359013_6.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOIDFQ': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', });
lyr_Census359012_7.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOIDFQ': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', });
lyr_Census359011_8.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOIDFQ': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', });
lyr_Census3584_9.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOIDFQ': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', });
lyr_Census3583_10.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOIDFQ': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', });
lyr_Census3582_11.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOIDFQ': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', });
lyr_Census3581_12.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOIDFQ': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', });
lyr_Census3573_13.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOIDFQ': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', });
lyr_Census3572_14.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOIDFQ': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', });
lyr_Census3571_15.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOIDFQ': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', });
lyr_Census3563_16.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOIDFQ': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', });
lyr_Census3562_17.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOIDFQ': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', });
lyr_Census3561_18.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOIDFQ': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', });
lyr_Census3553_19.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOIDFQ': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', });
lyr_Census3552_20.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOIDFQ': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', });
lyr_Census3551_21.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOIDFQ': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', });
lyr_Census3543_22.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOIDFQ': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', });
lyr_Census3542_23.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOIDFQ': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', });
lyr_Census3541_24.set('fieldLabels', {'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'GEOIDFQ': 'hidden field', 'GEOID': 'hidden field', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', });
lyr_Census3085census_3085_25.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3084census_3084_26.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3083census_3083_27.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3082census_3082_28.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3081census_3081_29.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3075census_3075_30.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3074census_3074_31.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3073census_3073_32.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3072census_3072_33.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3071census_3071_34.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3064census_3064_35.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3063census_3063_36.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3062census_3062_37.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3061census_3061_38.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3055census_3055_39.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3054census_3054_40.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3053census_3053_41.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3052census_3052_42.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3051census_3051_43.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3044census_3044_44.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3043census_3043_45.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3042census_3042_46.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3041census_3041_47.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3032census_3032_48.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3031census_3031_49.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3025census_3025_50.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3024census_3024_51.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3023census_3023_52.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3022census_3022_53.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3021census_3021_54.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3014census_3014_55.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3013census_3013_56.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3012census_3012_57.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3011census_3011_58.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'BlkGp Name': 'hidden field', });
lyr_Census3085census_3085_59.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3084census_3084_60.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3083census_3083_61.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3082census_3082_62.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3081census_3081_63.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3075census_3075_64.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3074census_3074_65.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3073census_3073_66.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3072census_3072_67.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3071census_3071_68.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3064census_3064_69.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3063census_3063_70.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3062census_3062_71.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3061census_3061_72.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3055census_3055_73.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3054census_3054_74.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3053census_3053_75.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3052census_3052_76.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3051census_3051_77.set('fieldLabels', {'fid': 'hidden field', 'begin': 'header label - visible with data', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3044census_3044_78.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3043census_3043_79.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3042census_3042_80.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3041census_3041_81.set('fieldLabels', {'fid': 'header label - visible with data', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3032census_3032_82.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3031census_3031_83.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3025census_3025_84.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3024census_3024_85.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3023census_3023_86.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3022census_3022_87.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3021census_3021_88.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3014census_3014_89.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3013census_3013_90.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3012census_3012_91.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'Blk Gp Name': 'hidden field', });
lyr_Census3011census_3011_92.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'BlkGp Name': 'hidden field', });
lyr_EMS01Jan202430June2024_93.set('fieldLabels', {'Address': 'header label - visible with data', 'Town': 'header label - visible with data', 'State': 'hidden field', 'ZIP': 'hidden field', 'Description': 'header label - visible with data', 'Date and time': 'header label - visible with data', 'Longitude': 'hidden field', 'Latitude': 'hidden field', 'Companies': 'hidden field', });
lyr_ODdrugintoxcallsmultipletosamelocation_94.set('fieldLabels', {'Address': 'header label - visible with data', 'Town': 'header label - visible with data', 'State': 'hidden field', 'ZIP': 'hidden field', 'Description': 'header label - visible with data', 'Date and time': 'header label - visible with data', 'Longitude': 'hidden field', 'Latitude': 'hidden field', 'Companies': 'hidden field', 'field_10': 'hidden field', 'field_11': 'hidden field', 'field_12': 'hidden field', 'field_13': 'hidden field', 'field_14': 'hidden field', });
lyr_ODdrugintoxcalls_95.set('fieldLabels', {'Address': 'header label - visible with data', 'Town': 'header label - visible with data', 'State': 'hidden field', 'ZIP': 'hidden field', 'Description': 'header label - visible with data', 'Date and time': 'header label - visible with data', 'Longitude': 'hidden field', 'Latitude': 'hidden field', 'Companies': 'hidden field', 'field_10': 'hidden field', 'field_11': 'hidden field', 'field_12': 'hidden field', 'field_13': 'hidden field', 'field_14': 'hidden field', });
lyr_ODdrugintoxcalls_95.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});