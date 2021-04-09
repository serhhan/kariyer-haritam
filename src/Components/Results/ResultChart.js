import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import "./Results.scss";
/*
sozelPercentange, sayisalPercentage, uzayPercentage, gozElPercentage,
                    fenPercentage, sosyalPercentage, iknaPercentage, dilPercentage, ticaretPercentage,
                    ziraatPercantage, mekanikPercantage, isAyrintiPercentage, edebiyatPercentage, sanatPercentage,
                    muzikPercentage, sosyalYardimPercentage
*/

function ResultChart(props) {

                      useEffect(() => {
                        console.log(props.sayisalPercentage)
                        am4core.useTheme(am4themes_animated);
                        // Themes end
                        
                        // Create chart instance
                        let chart = am4core.create("chartdiv", am4charts.XYChart3D);
                        chart.paddingBottom = 30;
                        chart.angle = 35;
                        
                        // Add data
                        chart.data = [{
                          "yetenek": "Sözel Yetenek",
                          "yuzdelik": parseFloat(props.sozelPercentange)
                        }, {
                          "yetenek": "Sayısal Yetenek",
                          "yuzdelik": parseFloat(props.sayisalPercentage)
                        }, {
                          "yetenek": "Şekil-Uzay Yeteneği",
                          "yuzdelik": parseFloat(props.uzayPercentage)
                        }, {
                          "yetenek": "Göz-El Koordinasyonu",
                          "yuzdelik": parseFloat(props.gozElPercentage)
                        }, {
                          "yetenek": "Fen Bilimleri İlgisi ",
                          "yuzdelik": parseFloat(props.fenPercentage)
                        }, {
                          "yetenek": "Sosyal Bilimler İlgisi",
                          "yuzdelik": parseFloat(props.sosyalPercentage)
                        }, {
                          "yetenek": "İkna İlgisi",
                          "yuzdelik": parseFloat(props.iknaPercentage)
                        }, {
                          "yetenek": "Yabancı Dil İlgisi",
                          "yuzdelik": parseFloat(props.dilPercentage)
                        }, {
                          "yetenek": "Ticaret İlgisi",
                          "yuzdelik": parseFloat(props.ticaretPercentage)
                        }, {
                          "yetenek": "Ziraat İlgisi",
                          "yuzdelik": parseFloat(props.ziraatPercantage)
                        }, {
                          "yetenek": "Mekanik İlgisi",
                          "yuzdelik": parseFloat(props.mekanikPercantage)
                        }, {
                          "yetenek": "İş Ayrıntı İlgisi",
                          "yuzdelik": parseFloat(props.isAyrintiPercentage)
                        }, {
                          "yetenek": "Edebiyat İlgisi ",
                          "yuzdelik": parseFloat(props.edebiyatPercentage)
                        }, {
                          "yetenek": "Güzel Sanatlar İlgisi ",
                          "yuzdelik": parseFloat(props.sanatPercentage)
                        }, {
                            "yetenek": "Müzik",
                            "yuzdelik": parseFloat(props.muzikPercentage)
                          },{
                          "yetenek": "Sosyal Yardım İlgisi",
                          "yuzdelik": parseFloat(props.sosyalYardimPercentage)
                        }];
                        
                        // Create axes
                        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
                        categoryAxis.dataFields.category = "yetenek";
                        categoryAxis.renderer.grid.template.location = 0;
                        categoryAxis.renderer.minGridDistance = 20;
                        categoryAxis.renderer.inside = true;
                        categoryAxis.renderer.grid.template.disabled = true;
                        
                        let labelTemplate = categoryAxis.renderer.labels.template;
                        labelTemplate.rotation = -90;
                        labelTemplate.horizontalCenter = "left";
                        labelTemplate.verticalCenter = "middle";
                        labelTemplate.dy = 10; // moves it a bit down;
                        labelTemplate.inside = false; // this is done to avoid settings which are not suitable when label is rotated
                        
                        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
                        valueAxis.renderer.grid.template.disabled = true;
                        
                        // Create series
                        let series = chart.series.push(new am4charts.ConeSeries());
                        series.dataFields.valueY = "yuzdelik";
                        series.dataFields.categoryX = "yetenek";
                        series.columns.template.tooltipText = "{categoryX}\n{valueY}";

                        
              
                        
                        
                        let columnTemplate = series.columns.template;
                        columnTemplate.adapter.add("fill", function(fill, target) {
                          return chart.colors.getIndex(target.dataItem.index);
                        })
                        
                        columnTemplate.adapter.add("stroke", function(stroke, target) {
                          return chart.colors.getIndex(target.dataItem.index);
                        })
                          chart.exporting.menu = new am4core.ExportMenu();
                          chart.exporting.menu.items = [{
                            "label": "Yazdır",
                            "menu": [
                              { "type": "png", "label": "PNG" },
                              // { "type": "json", "label": "JSON" },
                              { "label": "Print", "type": "print" }
                            ]
                          }];
                      }, [])
                      

                  return(<div id="chartdiv" style={{ width: "800px", height: "300px" }}></div>);

}

export default ResultChart;