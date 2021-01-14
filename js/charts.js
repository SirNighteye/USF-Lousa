google.charts.load('current', {
    'packages': ['bar', 'table', 'line', "corechart"]
});

google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    // Grafico do Orçamento da usf
    var budget = google.visualization.arrayToDataTable([
        ['setor', 'valor'],
        ['Manutenção das Instalações Físicas', 8900],
        ['Aquisição e Manutenção  de Equipamentos', 5200],
        ['Serviços de Limpeza e Esterilização', 3200],
        ['Salários dos Assistentes Operacionais', 50400],
        ['Salários dos médicos e Enfermeiros', 86400]
    ]);

    var opcoes = {
        'title': 'Orçamento da USF Lousã',
        colors: ['#A3A0FB', '#55D8FE', '#FF8373', '#FEC163', '#FFDA83', '#5FE3A1', '#FF6565', '#FFA177'],
    };

    var chart = new google.visualization.PieChart(document.getElementById('budgetgraph'));
    chart.draw(budget, opcoes);

    // Grafico etario colunas
    var data = google.visualization.arrayToDataTable([
        ['Idades', 'Homens', 'Mulheres'],
        ['0-4', 194, 177],
        ['5-9', 272, 241],
        ['10-14', 277, 249],
        ['15-19', 269, 224],
        ['20-24', 241, 245],
        ['25-29', 211, 233],
        ['30-34', 242, 268],
        ['35-39', 355, 408],
        ['40-44', 444, 481],
        ['45-49', 385, 391],
        ['50-54', 349, 356],
        ['55-59', 301, 295],
        ['60-64', 251, 283],
        ['65-69', 274, 280],
        ['70-74', 215, 260],
        ['75>=', 379, 608],
    ]);

    var options = {
        chart: { title: 'Inscritos USF Serra da Lousã', },
        series: { 0: { targetAxisIndex: 0 }, },
        // titulo dos y
        vAxes: { 0: { title: 'Número de Inscritos' }, },
        colors: ['#A3A0FB', '#55D8FE', '#6f42c1', '#FEC163', '#FFDA83', '#5FE3A1', '#FF6565', '#FFA177'],

    };

    // Barras

    var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
    chart.draw(data, google.charts.Bar.convertOptions(options));


    // Tabela Medicos
    var data1 = new google.visualization.DataTable();
    data1.addColumn('string', 'Nome Do Médico');
    data1.addColumn('number', 'Total De Utentes');
    data1.addColumn('number', 'Total De Unidades Ponderadas');
    data1.addRows([
        ['Ana Soares', {
            v: 1591
        }, {
            v: 2136
        }],
        ['Joana Fernandes', {
            v: 1795
        }, {
            v: 2245
        }],
        ['João Rodrigues', {
            v: 1645
        }, {
            v: 2144
        }],
        ['Jorge Pedrosa Rodrigues', {
            v: 1362
        }, {
            v: 1728
        }],
        ['Paula Braga da Cruz', {
            v: 1702
        }, {
            v: 2217
        }],
        ['Paulo Costa', {
            v: 1595
        }, {
            v: 2029
        }],
        ['Totais', {
            v: 9690
        }, {
            v: 12499
        }]
    ]);

    //Opções do grafico etario
    var options1 = {
        allowHtml: true,
        showRowNumber: false,
        width: '100%',
        height: '100%',
        cssClassNames: {
            headerRow: 'headerRow',
            tableRow: 'tableRow',
            oddTableRow: 'oddTableRow',
            selectedTableRow: 'selectedTableRow',
            hoverTableRow: 'hoverTableRow',
            headerCell: 'headerCell',
            tableCell: 'tableCell',
            rowNumberCell: 'rowNumberCell'
        },
    }

    // Tabela

    var table = new google.visualization.Table(document.getElementById('table_div'));
    table.draw(data1, options1);

    // Grafico linha indice de Vitalidade

    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Ano')
    data2.addColumn('number', 'Índice');
    data2.addRows([
        ['2001', 107.5],
        ['2009', 96.6],
        ['2010', 97.7],
        ['2011', 100.7],
        ['2012', 103.6],
        ['2013', 107.1],
        ['2014', 112.8],
        ['2015', 117.7],
        ['2016', 122.4],
        ['2017', 128.2],
        ['2018', 135],
        ['2019', 141.9]
    ]);

    // Opçoes garfico linha
    var options2 = {
        chart: {
            title: 'Vitalidade Lousã',
        },
        colors: ['#A3A0FB', '#55D8FE', '#6f42c1', '#FEC163', '#FFDA83', '#5FE3A1', '#FF6565', '#FFA177'],
    };

    // Linha

    var chart2 = new google.charts.Line(document.getElementById('linechart_material'));
    chart2.draw(data2, google.charts.Line.convertOptions(options2));

    // Consultas por utente pie    

    var data3 = google.visualization.arrayToDataTable([
        ['Idades', 'Número de Consultas'],
        ['Dos 0-4 Anos', 1484],
        ['Dos 5-19 Anos', 3064],
        ['Dos 20-34 Anos', 2880],
        ['Dos 35-49 Anos', 7392],
        ['Dos 50-64 Anos', 7340],
        ['Dos 65-74 Anos', 5145],
        ['75>= Anos', 5922]
    ]);

    // Opçoes do grafico donut

    var options3 = {
        title: 'Número De Consultas Por Utente',
        pieHole: 0.4,
        colors: ['#A3A0FB', '#55D8FE', '#6f42c1', '#FEC163', '#FFDA83', '#5FE3A1', '#FF6565', '#FFA177']
    };

    // Donut

    var chart3 = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart3.draw(data3, options3);


    // Casos de cancro registados 

    var data4 = google.visualization.arrayToDataTable([
        ['Tipo', 'Casos Registados'],
        ['Cancro do Colo do útero (25-64 anos)', 1595],
        ['Cancro da Mama (50-69 anos)', 910],
        ['Cancro do Cólon e Recto Homens (50-70 anos)', 185],
        ['Cancro do Cólon e Recto Mulheres (50-70 anos)', 216],
    ]);

    // donut cancro

    var options4 = {
        title: 'Numero de casos de cancro registados (2018)',
        subtitle: 'Ano de 2018',
        pieHole: 0.4,
        colors: ['#A3A0FB', '#55D8FE', '#6f42c1', '#FEC163', '#FFDA83', '#5FE3A1', '#FF6565', '#FFA177']
    };

    // Donut2

    var chart4 = new google.visualization.PieChart(document.getElementById('donutchart2'));
    chart4.draw(data4, options4);



    // Indice de dependencia comparaçao
    var data5 = new google.visualization.DataTable();
    data5.addColumn('string', 'Anos');
    data5.addColumn('number', 'Índice de dependência de idosos');
    data5.addColumn('number', 'Índice de dependência de jovens');
    data5.addColumn('number', 'Índice de dependência total');
    data5.addRows([
        ['2001', 25.6, 23.8, 49.5],
        ['2009', 24.9, 25.8, 50.7],
        ['2010', 25.0, 25.6, 50.7],
        ['2011', 25.4, 25.2, 50.6],
        ['2012', 25.7, 24.8, 50.5],
        ['2013', 26.2, 24.4, 50.6],
        ['2014', 27.0, 23.9, 50.9],
        ['2015', 27.6, 23.5, 51.1],
        ['2016', 28.2, 23.0, 51.2],
        ['2017', 28.9, 22.5, 51.4],
        ['2018', 29.6, 21.9, 51.6],
        ['2019', 30.2, 21.3, 51.5],
    ]);

    // indice de dependencia linhas

    var options5 = {
        title: 'Comparação Índices de Dependência',
        subtitle: 'Idosos, Jovens, Total',
        hAxis: { title: 'Ano', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 },
        colors: ['#A3A0FB', '#55D8FE', '#6f42c1', '#FEC163', '#FFDA83', '#5FE3A1', '#FF6565', '#FFA177'],

    };
    var chart = new google.visualization.AreaChart(document.getElementById('linechart_material2'));
    chart.draw(data5, options5);

}