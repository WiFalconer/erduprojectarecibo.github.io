Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    },
    chart: {
        backgroundColor: '#FFF',
        events: {
            load: function () {
                this.reflow();
            }
        },
    },

    legend: {
        itemStyle: {
            color: '#000'
        },
        itemHiddenStyle: {
            color: '#777'
        },
        itemHoverStyle: {
            color: '#777'
        }
    },

    title: {
        style: {
            color: '#22292F',
            fill: '#22292F',
            fontWeight: 'bold'
        }
    },

    subtitle: {
        style: {
            color: '#8795A1',
            fill: '#8795A1',
            fontWeight: 'bold'
        }
    },

});

var categories = ['0-4', '5-9', '10-14', '15-19',
    '20-24', '25-29', '30-34', '35-39', '40-44',
    '45-49', '50-54', '55-59', '60-64', '65-69',
    '70-74', '75-79', '80-84', '85 + '
];


$(document).ready(function () {
    Highcharts.chart('chart1', {
        chart: {
            type: 'bar',
        },
        title: {
            text: 'Pirámide Poblacional de Puerto Rico 1899 - 2016',

        },
        subtitle: {
            text: 'Data Source: census.gov',

        },
        xAxis: [{
            categories: categories,
            reversed: false,
            labels: {
                style: {
                    color: '#606F7B',
                    step: 1
                }
            }
        }, { // Mirror axis in the right side
            opposite: true,
            reversed: false,
            categories: categories,
            linkedTo: 0,
            labels: {
                style: {
                    color: '#606F7B',
                    step: 1
                }
            }
        }],
        yAxis: {
            max: 200000, // This prevents the data to shift right while in motion
            min: -200000,
            title: {
                text: null
            },
            labels: {
                style: {
                    color: '#606F7B'
                },
                formatter: function () {
                    return Math.abs(this.value / 10000) + '%';
                }
            }
        },

        plotOptions: {
            // Spacing between data bars
            series: {
                stacking: 'normal',

            }
        },

        tooltip: {
            backgroundColor: '#FFF',
            // This controls the hovering box when mouse is over data
            formatter: function () {
                return '<b>' + this.series.name + ', Age ' + this.point.category + '</b><br/>' +
                    'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
            }
        },

        credits: {
            enabled: false
        },

        motion: {
            // Enables the motion aspect of the graph
            enabled: true,
            labels: [1899, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
            series: [0, 1],
            updateInterval: 30,
            loop: true,
        },

        series: [{
            name: 'Male',
            color: '#008445',
            borderColor: '#008445',

            data: [{
                sequence: [-76774, -94213, -100898, -114045, -142289, -185199, -179619, -161296, -173228, -153759, -151287, -115173, -109274, -105154, -101293, -95367, -89507, -82859]
            }, {
                sequence: [-72920, -76572, -99150, -113532, -127791, -161183, -165930, -171035, -168162, -161328, -156253, -123228, -117830, -114514, -111406, -107325, -102622, -95805]
            }, {
                sequence: [-65112, -74280, -85702, -101375, -114496, -138675, -162244, -169789, -172494, -172707, -155984, -137289, -133296, -128247, -123386, -118226, -112350, -106372]
            }, {
                sequence: [-42919, -53388, -60183, -87907, -99460, -108915, -122602, -143806, -168399, -165632, -159309, -144853, -140690, -136873, -133136, -128109, -124179, -119826]
            }, {
                sequence: [-41664, -53492, -62114, -74461, -102464, -91083, -79792, -108077, -129243, -140998, -149426, -130577, -132906, -132908, -132865, -130133, -125971, -121579]
            }, {
                sequence: [-39469, -45836, -44138, -47519, -72263, -76341, -61971, -84729, -110820, -129010, -133018, -118578, -114401, -111201, -110342, -110101, -111167, -111318]
            }, {
                sequence: [-31365, -35331, -37540, -46720, -52012, -66583, -58723, -73492, -107419, -119225, -126164, -119708, -117297, -113364, -110163, -105508, -99855, -94823]
            }, {
                sequence: [-24251, -32283, -38438, -45554, -50529, -67155, -61592, -68187, -91456, -110440, -124421, -115981, -112635, -110288, -108926, -106632, -104890, -101801]
            }, {
                sequence: [-22179, -26539, -31174, -37666, -43739, -47752, -53087, -61530, -78063, -105352, -116278, -114941, -113429, -111925, -110432, -107690, -104593, -101315]
            }, {
                sequence: [-13454, -18977, -28368, -29935, -36186, -39897, -53781, -59437, -68328, -91398, -107736, -115470, -114769, -113396, -111394, -108553, -106235, -104318]
            }, {
                sequence: [-16124, -16867, -21878, -24552, -30639, -36563, -39832, -53032, -61175, -75988, -106091, -110600, -110268, -109277, -109245, -108642, -107561, -105712]
            }, {
                sequence: [-8287, -9241, -11610, -14177, -18931, -24800, -34404, -49156, -57158, -65701, -87131, -102262, -102603, -102880, -102986, -102652, -102377, -102248]
            }, {
                sequence: [-8471, -8996, -12374, -15616, -17877, -25834, -29095, -40673, -50641, -57878, -74276, -100090, -98590, -96264, -94764, -94038, -93510, -95407]
            }, {
                sequence: [-3551, -4612, -5415, -6960, -12345, -16462, -24525, -32914, -45989, -52353, -60982, -80178, -84113, -86904, -88998, -89784, -89880, -89977]
            }, {
                sequence: [-2713, -3156, -4138, -5680, -7943, -10872, -16370, -21845, -31795, -40323, -47461, -61731, -63207, -64783, -66798, -68402, -70294, -74072]
            }, {
                sequence: [-2945, -3497, -4551, -5962, -8957, -10020, -19197, -13854, -21669, -31519, -35996, -43625, -45248, -46569, -47978, -49660, -50879, -52531]
            }, {
                sequence: [-63, -21, -154, -100, -359, 0, 0, -7784, -11138, -18376, -22697, -27582, -28640, -29296, -29942, -30879, -32160, -33887]
            }, {
                sequence: [0, 0, 0, 0, 0, 0, 0, 0, -9550, -13655, -19067, -23305, -24249, -25232, -26234, -27202, -28118, -29822]
            }, ]

        }, {
            name: 'Female',
            color: '#FFD13F',
            borderColor: '#FFD13F',
            data: [{
                sequence: [73629, 90976, 99357, 112423, 138151, 181223, 174783, 156810, 167424, 148414, 144119, 109583, 104188, 100124, 95880, 90534, 85368, 78655]
            }, {
                sequence: [70626, 74651, 95981, 110490, 123861, 156944, 161599, 167219, 162169, 155145, 148909, 116776, 111079, 107807, 104830, 101589, 97790, 92358]
            }, {
                sequence: [59241, 69471, 82352, 97962, 112601, 132052, 158963, 164771, 165797, 166866, 149816, 131282, 126549, 121522, 115798, 110918, 105397, 100232]
            }, {
                sequence: [50229, 60401, 66065, 98243, 106689, 111316, 124258, 147520, 168735, 161085, 154127, 139406, 134268, 131006, 126984, 121857, 118389, 114472]
            }, {
                sequence: [46811, 55016, 66417, 74875, 103862, 101847, 91873, 126799, 143187, 146229, 151765, 130273, 131188, 130631, 129555, 127367, 122821, 119042]
            }, {
                sequence: [44796, 48377, 51915, 52261, 75745, 81651, 74219, 97909, 125316, 141552, 138489, 125581, 119589, 115922, 113680, 112621, 113504, 114402]
            }, {
                sequence: [32952, 35091, 40465, 47989, 50584, 65154, 68006, 83160, 122343, 135062, 136661, 128465, 126267, 123689, 119630, 115121, 109102, 104011]
            }, {
                sequence: [23305, 32005, 38651, 46802, 50609, 65954, 69072, 76936, 102828, 126069, 140428, 125289, 121968, 120441, 119554, 117547, 116325, 113771]
            }, {
                sequence: [22067, 25805, 30276, 34882, 42293, 43485, 51268, 67317, 87589, 120618, 134536, 127317, 124337, 122370, 120217, 118107, 115224, 111873]
            }, {
                sequence: [12943, 18186, 21905, 26009, 32816, 35848, 51807, 62529, 76692, 102586, 125384, 132516, 131004, 128923, 125518, 121517, 118525, 115383]
            }, {
                sequence: [16747, 16484, 19746, 22667, 26352, 34674, 35376, 52539, 68611, 85886, 123825, 129221, 127952, 126840, 126767, 126454, 124980, 123199]
            }, {
                sequence: [7043, 9552, 9976, 11841, 15513, 21725, 31488, 47297, 62380, 75251, 101752, 121345, 122116, 122708, 122538, 121918, 121569, 120225]
            }, {
                sequence: [9915, 10137, 12013, 14784, 17510, 23272, 28976, 40911, 54294, 66974, 86288, 117987, 117000, 115373, 114020, 113773, 113409, 114414]
            }, {
                sequence: [3128, 5211, 5547, 7146, 12983, 16501, 23579, 33469, 48555, 60365, 73299, 95233, 100410, 104048, 106619, 108029, 109224, 109190]
            }, {
                sequence: [3533, 4250, 5018, 6042, 8634, 10752, 15134, 21564, 33685, 46356, 59209, 74520, 76739, 79358, 82143, 84654, 87289, 91529]
            }, {
                sequence: [3973, 5065, 6157, 7614, 12244, 11591, 23402, 36934, 23712, 36303, 47082, 57115, 58771, 60226, 61775, 63458, 65082, 66741]
            }, {
                sequence: [44, 33, 143, 122, 588, 5768, 0, 0, 13107, 22624, 30705, 39418, 40699, 41744, 42796, 44175, 46233, 47707]
            }, {
                sequence: [0, 0, 0, 0, 0, 0, 0, 0, 13369, 19010, 28639, 39291, 41167, 42680, 44487, 46346, 47803, 50431]
            }]

        }],
    });
});


$(document).ready(function () {
    Highcharts.chart('chart2', {
        
        title: {
            text: 'Comparación entre los Delitos Tipo 1 y la Población de Puerto Rico',

        },
        subtitle: {
            text: ' ',
        },
        xAxis: [{
            categories: [1960, 1961, 1962, 1963, 1964, 1965,
                1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973,
                1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981,
                1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989,
                1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997,
                1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
                2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
                2014, 2015, 2016, 2017, 2018
            ],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                style: {
                    color: '#606F7B',
                }
            },
            title: {
                text: 'Total Población',
                style: {
                    color: '#B8C2CC'
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Total Delitos Tipo 1',
                style: {
                    color: '#B8C2CC',
                }
            },
            labels: {
                style: {
                    color: '#606F7B',
                }
            },
            opposite: true
        }],
        tooltip: {
            backgroundColor: '#fff',
            shared: true,
        },
        plotOptions: {
            series: {
                lineWidth: 5,
                animation: {
                    duration: 8500
                }
            },

        },
        credits: {
            enabled: false
        },

        series: [{
            name: 'Delitos Tipo 1',
            type: 'spline',
            yAxis: 1,
            color: '#008445',
            data: [33272, 37982, 47514, 54159, 56746, 57117, 60013, 60735, 65616, 61480, 66470, 70438,
                70423, 72363, 82293, 88095, 86079, 81544, 79343, 80181, 92180, 96640, 96738, 92252,
                102525, 116432, 119522, 110018, 111947, 110027, 124371, 119731, 128874, 121035, 116263,
                106088, 99788, 94875, 87020, 81880, 75379, 70120, 90783, 81788, 70339, 65045, 62126, 62879,
                68738, 66429, 62238, 62257, 61720, 58171, 53990, 46559, 42766, 38939, 31216
            ],

        }, {
            name: 'Población',
            type: 'spline',
            color: '#FFD13F',
            data: [
                2349544, 2375591, 2418885, 2466721, 2514461, 2557584, 2593396, 2621805, 2645312, 2668233,
                2712033, 2727883, 2766652, 2810249, 2857465, 2906858, 2957781, 3010215, 3063302, 3115203,
                3196520, 3209101, 3249892, 3287002, 3321304, 3353802, 3384881, 3414447, 3443039, 3471935,
                3527593, 3550566, 3574772, 3600252, 3627048, 3655194, 3684739, 3715726, 3748150, 3782143,
                3808610, 3818774, 3823701, 3826095, 3826878, 3821362, 3805214, 3782995, 3760866, 3740410,
                3725793, 3678736, 3634487, 3593079, 3534888, 3474182, 3406520, 3337177, 3217065
            ],
        }]
    })
});

$(document).ready(function () {
    Highcharts.chart('chart3', {
        chart: {
            zoomType: 'x',
        },
        title: {
            text: 'Delitos Tipo 1 por cada 100,000 Habitantes',

        },
        subtitle: {
            text: ' ',
        },
        xAxis: [{
            categories: [1960, 1961, 1962, 1963, 1964, 1965,
                1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973,
                1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981,
                1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989,
                1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997,
                1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
                2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
                2014, 2015, 2016, 2017, 2018
            ],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                style: {
                    color: '#606F7B'
                }
            },
            title: {
                text: 'Delitos Tipo 1 por cada 100,000 Habitantes',
                style: {
                    color: '#B8C2CC'
                }
            }
        }],
        tooltip: {
            borderColor: '#FFD13F',
            valueDecimals: 1,
            backgroundColor: '#FFF',
            shared: true
        },
        plotOptions: {
            series: {
                lineWidth: 5,
                animation: {
                    duration: 7500
                }
            },

        },
        credits: {
            enabled: false
        },

        series: [{
            name: 'Delitos Tipo 1',
            type: 'area',
            color: '#008445',
            data: [
                1416.104572, 1598.844245, 1964.293466, 2195.586773, 2256.785848, 2233.240433,
                2314.070046, 2316.533838, 2480.463552, 2304.146602, 2450.928879, 2582.148868,
                2545.423132, 2574.967556, 2879.930288, 3030.591794, 2910.256033, 2708.909496,
                2590.113544, 2573.861158, 2883.76109, 3011.43529, 2976.652763, 2806.569634,
                3086.889969, 3471.642035, 3531.054711, 3222.13231, 3251.40087, 3169.039743,
                3525.661832, 3372.166579, 3605.097052, 3361.848004, 3205.444207, 2902.390407,
                2708.142965, 2553.36373, 2321.678695, 2149.865699, 1993.023532, 1836.191406,
                2374.401136, 2137.636415, 1840.090016, 1702.141802, 1632.654563, 1662.148641,
                1827.71734, 1775.981777, 1670.464967, 1692.347589, 1698.176386, 1618.973588,
                1527.346835, 1340.142802, 1255.416084, 1166.824535, 852.0362235
            ],
        }]
    })
});

$(document).ready(function () {
    Highcharts.chart('chart4', {
        
        title: {
            text: 'Puntuación Promedio Prueba de Razonamiento Matemático Escuela Privada y Pública',

        },
        subtitle: {
            text: ' ',

        },
        xAxis: [{
            categories: [1983, 1984, 1985, 1986, 1987, 1988, 1989,
                1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997,
                1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
                2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
                2014, 2015, 2016, 2017
            ],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                style: {
                    color: '#606F7B'
                }
            },
            title: {
                text: 'Puntuación Promedio',
                style: {
                    color: '#B8C2CC'
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Ventaja Privada',
                style: {
                    color: '#B8C2CC',
                }
            },
            labels: {
                style: {
                    color: '#606F7B'
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true,
            backgroundColor: "#FFF",
            borderColor: '#ff0000',
        },
        plotOptions: {
            series: {
                lineWidth: 5,
                animation: {
                    duration: 7500
                }
            },

        },
        credits: {
            enabled: false
        },

        series: [{
            name: 'Escuela Pública',
            type: 'spline',

            color: '#008445',
            data: [
                469, 463, 466, 470, 469, 473, 474, 471, 479, 475, 476, 471, 475, 465,
                470, 467, 468, 466, 463, 470, 466, 460, 464, 462, 457, 459, 450, 458,
                457, 459, 457, 442, 431, 430, 430


            ],

        }, {
            name: 'Escuela Privada',
            type: 'spline',
            color: '#FFD13F',
            data: [
                593, 592, 588, 581, 574, 573, 575, 572, 567, 559, 553, 550, 558, 541,
                546, 545, 550, 552, 553, 549, 545, 543, 546, 543, 538, 540, 530, 533,
                521, 532, 526, 523, 530, 525, 490

            ],

        }, {
            name: 'Ventaja Privada',
            type: 'spline',
            yAxis: 1,
            color: '#FF0000',
            data: [
                124, 129, 122, 111, 105, 100, 101, 101, 88, 84, 77, 79, 83, 76, 76,
                78, 82, 86, 90, 79, 79, 83, 82, 81, 81, 81, 80, 75, 64, 73, 69, 81,
                99, 95, 60

            ],
        }]
    })
});


$(document).ready(function () {
    Highcharts.chart('chart5', {
        chart: {
            zoomType: 'x',
        },
        title: {
            text: 'Matrícula total en Agosto del Departamento de Educación de Puerto Rico (1965-2017)',

        },
        subtitle: {
            text: 'SOURCE: U.S. Department of Education',

        },
        xAxis: [{
            categories: [1965,
                1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973,
                1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981,
                1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989,
                1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997,
                1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
                2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
                2014, 2015, 2016, 2017

            ],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            min: '250000',
            max: '750000',
            labels: {
                style: {
                    color: '#606F7B'
                }
            },
            title: {
                text: 'Total de Estudiantes Matriculados',
                style: {
                    color: '#B8C2CC'
                }
            }
        }],
        tooltip: {
            shared: true,
            backgroundColor: '#FFF',
            borderColor: '#008445',

        },
        plotOptions: {
            series: {
                lineWidth: 5,
                animation: {
                    duration: 7500
                }
            },

        },
        credits: {
            enabled: false
        },

        series: [{
            name: 'Total de Estudiantes',
            type: 'area',
            color: '#FFD13F',
            data: [631358, 651030, 654762, 668520, 672249, 686777, 697410, 711238, 712588,
                704874, 697159, 688596, 705008, 721419, 717150, 712880, 721419, 708794, 701925,
                692923, 686914, 679489, 672837, 661693, 651225, 644734, 642392, 637034, 631460,
                621895, 627620, 618861, 617157, 613862, 613019, 612725, 604177, 596502, 584916,
                575648, 563490, 544138, 526565, 503635, 493393, 473735, 452740, 434609, 423934,
                410950, 379818, 365181, 346096,

            ],

        }]
    })
});

$(document).ready(function () {
    Highcharts.chart('chart6', {

        title: {
            text: 'Promedio Prueba de Aptitud Verbal Escuela Privada y Pública y Ventaja en Puntos de la Escuela Privada',

        },
        subtitle: {
            text: ' ',
        },
        xAxis: [{
            categories: [1983, 1984, 1985, 1986, 1987, 1988, 1989,
                1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997,
                1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
                2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
                2014, 2015, 2016, 2017
            ],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {

                style: {
                    color: '#606F7B'
                }
            },
            title: {
                text: 'Puntuación Promedio',
                style: {
                    color: '#B8C2CC'
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Ventaja Privada',
                style: {
                    color: '#B8C2CC',
                }
            },
            labels: {
                style: {
                    color: '#606F7B'
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true,
            backgroundColor: "#FFF",
            borderColor: '#ff0000',
        },
        plotOptions: {
            series: {
                lineWidth: 5,
                animation: {
                    duration: 7500
                }
            },

        },
        credits: {
            enabled: false
        },

        series: [{
            name: 'Escuela Pública',
            type: 'spline',

            color: '#008445',
            data: [
                461, 460, 454, 456, 453, 447, 455, 456, 462, 458, 456, 453, 458, 447,
                452, 448, 444, 445, 444, 444, 445, 442, 443, 441, 444, 448, 439, 453,
                452, 454, 459, 440, 444, 440, 420


            ],

        }, {
            name: 'Escuela Privada',
            type: 'spline',
            color: '#FFD13F',
            data: [
                554, 555, 550, 551, 536, 531, 544, 538, 538, 524, 525, 523, 525, 513,
                523, 522, 525, 525, 531, 526, 522, 521, 521, 523, 512, 516, 512, 512,
                507, 510, 507, 504, 509, 517, 500


            ],

        }, {
            name: 'Ventaja Privada',
            type: 'spline',
            yAxis: 1,
            color: '#FF0000',
            data: [
                93, 95, 96, 95, 83, 84, 89, 82, 76, 66, 69, 70, 67, 66, 71, 74, 81,
                80, 87, 82, 77, 79, 78, 82, 68, 68, 73, 59, 55, 56, 48, 64, 65, 77,
                80


            ],
        }]
    })
});

$(document).ready(function () {
    Highcharts.chart('chart7', {
        
        title: {
            text: 'Total Estudiantes Matriculados en Primer Grado y el Grado Doce Ecuela Pública Puerto Rico de 1986-87 a 2015-16',

        },
        subtitle: {
            text: ' ',

        },
        xAxis: [{
            categories: [1886, 1887, 1988, 1989, 1990, 1991, 1992, 1993, 1994,
                1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002,
                2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
                2011, 2012, 2013, 2014, 2015, 2016
            ],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                style: {
                    color: '#606F7B'
                }
            },
            title: {
                text: 'Total de Estdiantes',
                style: {
                    color: '#B8C2CC'
                }
            }
        }],

        tooltip: {
            shared: true,
            backgroundColor: '#FFF'
        },
        plotOptions: {
            series: {
                lineWidth: 5,
                animation: {
                    duration: 8500
                }
            },

        },
        credits: {
            enabled: false
        },

        series: [{
            name: 'Estudiantes de Primer Grado',
            type: 'spline',
            color: '#008445',
            data: [63123, 61602, 59817, 57371, 55609, 55145, 54606, 55003, 53773, 54545, 54821, 51639,
                51599, 51589, 49807, 48601, 47545, 45977, 45988, 43944, 42270, 41008, 37521, 36254, 36217,
                35333, 33453, 32865, 31579, 29295

            ],

        }, {
            name: 'Estudiantes de Duodécimo Grado',
            type: 'spline',
            color: '#FFD13F',
            data: [
                33640, 35105, 35307, 32700, 31496, 32557, 32344, 32610, 32935, 32535, 32361, 32432, 32289,
                34428, 33567, 32699, 33062, 32824, 32917, 33016, 34829, 33478, 30419, 29374, 29640, 28278,
                27169, 27465, 27080, 26699

            ],
        }]
    })
});

$(document).ready(function () {
    Highcharts.chart('chart8', {
        
        title: {
            text: 'Promedio Prueba de Aprovechamiento en Inglés Escuela Privada y Pública y Ventaja en Puntos de la Escuela Privada',

        },
        subtitle: {
            text: ' ',

        },
        xAxis: [{
            categories: [1983, 1984, 1985, 1986, 1987, 1988, 1989,
                1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997,
                1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
                2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
                2014, 2015, 2016, 2017
            ],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {

                style: {
                    color: '#606F7B'
                }
            },
            title: {
                text: 'Puntuación Promedio',
                style: {
                    color: '#B8C2CC'
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Ventaja Privada',
                style: {
                    color: '#B8C2CC',
                }
            },
            labels: {
                style: {
                    color: '#606F7B'
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true,
            backgroundColor: "#FFF",
            borderColor: '#ff0000',
        },
        plotOptions: {
            series: {
                lineWidth: 5,
                animation: {
                    duration: 7500
                }
            },

        },
        credits: {
            enabled: false
        },

        series: [{
            name: 'Escuela Pública',
            type: 'spline',

            color: '#008445',
            data: [
                418, 413, 417, 423, 424, 424, 422, 426, 424, 425, 425, 431, 419, 420,
                416, 414, 416, 412, 415, 417, 416, 419, 420, 423, 429, 424, 437, 445,
                449, 460, 450, 444, 443, 430
            ],

        }, {
            name: 'Escuela Privada',
            type: 'spline',
            color: '#FFD13F',
            data: [
                536, 537, 532, 532, 536, 537, 531, 524, 529, 525, 525, 530, 512, 515,
                516, 520, 524, 537, 536, 534, 538, 536, 546, 537, 542, 541, 537, 537,
                540, 544, 550, 558, 552, 580
            ],

        }, {
            name: 'Ventaja Privada',
            type: 'spline',
            yAxis: 1,
            color: '#FF0000',
            data: [
                118, 124, 115, 109, 112, 113, 109, 98, 105, 100, 100, 99, 93, 95, 100,
                106, 108, 125, 121, 117, 122, 117, 126, 114, 113, 117, 100, 92, 91, 84,
                100, 114, 109, 150
            ],
        }]
    })
});

$(document).ready(function () {
    Highcharts.chart('chart9', {
        
        title: {
            text: 'Producto Interno Bruto per Capita',

        },
        subtitle: {
            text: 'Source: World Bank,  ',

        },
        xAxis: [{
            categories: [1960, 1961, 1962, 1963, 1964, 1965,
                1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973,
                1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981,
                1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989,
                1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997,
                1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
                2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
                2014, 2015, 2016
            ],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '$ {value}',
                style: {
                    color: '#606F7B',
                }
            },
            title: {
                text: 'PIB per Capita (US Current)',
                style: {
                    color: '#B8C2CC'
                }
            }
        }],
        tooltip: {
            shared: true,
            backgroundColor: "#FFF",
            valueDecimals: 2,
            valuePrefix: '$',
            valueSuffix: ' USD'
        },
        plotOptions: {
            series: {
                lineWidth: 5,
                animation: {
                    duration: 7500
                }
            },

        },
        credits: {
            enabled: false
        },

        series: [{
            name: 'PIB per Capita (US Current)',
            type: 'area',
            color: '#008445',
            data: [
                717.5148431, 777.2150274, 854.744805, 931.751666, 1006.434446, 1110.832691, 1207.811824,
                1335.274112, 1480.693176, 1661.866885, 1852.354673, 2044.319906, 2246.476714, 2432.414219,
                2614.500941, 2738.243153, 2946.461953, 3208.771356, 3567.752629, 4024.50942, 4502.838428,
                4920.722937, 5115.008514, 5217.722729, 5730.117009, 6008.054486, 6455.184461, 6980.490143,
                7595.444656, 8033.089441, 8652.507492, 9064.018517, 9659.3389, 10212.27676, 10876.41882,
                11579.185, 12173.16369, 12817.64496, 14304.40499, 15220.99134, 16192.12697, 18123.1987,
                18731.45939, 19557.12025, 20988.99233, 21959.3227, 22935.94116, 23664.88235, 24898.33884,
                25768.73605, 26435.74019, 27278.87489, 27944.73389, 28513.16574, 28981.45733, 29697.12779,
                30790.10479

            ],
        }]
    })
});

$(document).ready(function () {
    Highcharts.chart('chart10', {
        
        title: {
            text: 'PIB',

        },
        subtitle: {
            text: 'Source: World Bank  ',

        },
        xAxis: [{
            categories: [1960, 1961, 1962, 1963, 1964, 1965,
                1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973,
                1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981,
                1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989,
                1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997,
                1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
                2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
                2014, 2015, 2016
            ],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '$ {value}',
                style: {
                    color: '#606F7B',
                }
            },
            title: {
                text: 'PIB (US Current)',
                style: {
                    color: '#B8C2CC'
                }
            }
        }],
        tooltip: {
            shared: true,
            backgroundColor: "#777",
            valuePrefix: '$',
            valueSuffix: ' USD'
        },
        plotOptions: {
            series: {
                lineWidth: 5,
                animation: {
                    duration: 7500
                }
            },

        },
        credits: {
            enabled: false
        },

        series: [{
            name: 'PIB (US Current)',
            type: 'area',
            color: '#008445',
            data: [
                1691900000, 1865100000, 2094400000, 2333600000, 2570500000, 2881500000,
                3170500000, 3532700000, 3941700000, 4460700000, 5034700000, 5646800000,
                6328900000, 7002400000, 7684800000, 8198300000, 8968600000, 9910900000,
                11165000000, 12750000000, 14436100000, 15955700000, 16764200000, 17276600000,
                19162600000, 20289200000, 22009300000, 24025800000, 26385800000, 28161200000,
                30603919000, 32287031000, 34630430000, 36922456000, 39690630000, 42647331000,
                45340835000, 48187039000, 54086400000, 57841000000, 61701800000, 69208400000,
                71623500000, 74827400000, 80322313000, 83914521300, 87276164400, 89524131600,
                93639316000, 96385638000, 98381268000, 100351670000, 101564800000, 102450000000,
                102445800000, 103143500000, 105034500000,
            ],
        }]
    })
});