angular.module('gridshore.c3js.chart')
    .directive('chartSubchart', ChartSubchart);

/**
 * @ngdoc directive
 * @name chartSubchart
 * @description
 *  `chart-subchart` is used to customize the properties of the subchart, and the chart's initial extent.
 *
 * Restrict To:
 *   Element
 * 
 * Parent element:
 *   c3chart
 *
 * @param {Boolean} show-x Configure to show the values of the x-axis or not (default).
 * 
 *   {@link http://c3js.org/reference.html#subchart-show| c3js doc}
 * 
 * @param {Number} height Height of the subchart (or width if the axis is rotated).
 * 
 * @param {Array} extent Provide the inital viewport of the chart and subchart.
 * 
 *   Array consisting of two Numbers, corresponding to the start and end x values.
 *   {@link http://c3js.org/reference.html#axis-x-extent| c3js doc}
 * 
 * @param {Number} rotatedPaddingRight In a rotated chart, the subchart's right padding.
 * 
 * @param {Number} rotatedPaddingLeft In a rotated chart, the subchart's left padding.
 *
 * @example
 * Usage:
 *   <chart-subchart show-x="false" height="30" rotated-padding-right="230" extent="[0,18]"/>
 */

function ChartSubchart () {
    var subchartLinker = function (scope, element, attrs, chartCtrl) {
        var subchart = {
            show: true,
            axis: { x: { show: false } },
            size: {},
            rotated: { padding: {} }
        };

        if (attrs.showX === 'true') {
            subchart.axis.x.show = true;
        }

        var height = attrs.height;
        if (height) {
            subchart.size.height = height;
        }

        var rotatedPaddingRight = attrs.rotatedPaddingRight;
        if (rotatedPaddingRight) {
            subchart.rotated.padding.right = rotatedPaddingRight;
        }

        var rotatedPaddingLeft = attrs.rotatedPaddingLeft;
        if (rotatedPaddingLeft) {
            subchart.rotated.padding.left = rotatedPaddingLeft;
        }

        chartCtrl.addSubchart(subchart);

        var extent = attrs.extent;
        if (extent) {
            chartCtrl.addExtent(extent);
        }

    };

    return {
        "require": "^c3chart",
        "restrict": "E",
        "scope": {},
        "replace": true,
        "link": subchartLinker
    };
};
