import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import logo from "./Penoles_Logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "jquery-bar-rating/dist/themes/css-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";

import * as SurveyCore from "survey-core";
import * as SurveyPDF from "survey-pdf";
import * as widgets from "surveyjs-widgets";

import "pretty-checkbox/dist/pretty-checkbox.css";
//import "icheck/skins/square/blue.css";
window["$"] = window["jQuery"] = $;
//require("icheck");
export { ResultOne } from './results/result_one'
export { ResultTwo } from './results/result_two'
export { ResultThree } from './results/result_three'
export { ResultFour } from './results/result_four'
export { ResultFive } from './results/result_five';
export { ResultSix } from './results/result_six';

var defaultThemeColors = Survey
  .StylesManager
  .ThemeColors["default"];

defaultThemeColors["$main-color"] = "#ec3c3c";
// defaultThemeColors["$main-hover-color"] = "#6fe06f";
defaultThemeColors["$text-color"] = "#4a4a4a";
// defaultThemeColors["$header-color"] = "#ec3c3c";

defaultThemeColors["$header-background-color"] = "#4a4a4a";
defaultThemeColors["$body-container-background-color"] = "#f8f8f8";

Survey.StylesManager.applyTheme("default");

//widgets.icheck(Survey, $);
widgets.prettycheckbox(Survey);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
//widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

//widgets.icheck(SurveyCore, $);
widgets.prettycheckbox(SurveyCore);
widgets.select2(SurveyCore, $);
widgets.inputmask(SurveyCore);
widgets.jquerybarrating(SurveyCore, $);
widgets.jqueryuidatepicker(SurveyCore, $);
widgets.nouislider(SurveyCore);
widgets.select2tagbox(SurveyCore, $);
//widgets.signaturepad(SurveyCore);
widgets.sortablejs(SurveyCore);
widgets.ckeditor(SurveyCore);
widgets.autocomplete(SurveyCore, $);
widgets.bootstrapslider(SurveyCore);

class App extends Component {
  json = {
    title: "Evaluación de salud",
    description: "Response las siguientes preguntas",
    showProgressBar: "top",
    showQuestionNumbers: "off",
    locale: 'es',
    pages: [
      {
        elements: [
          {
            type: "radiogroup",
            name: "workfrom",
            isRequired: true,
            title: "Elige una de las dos opciones de trabajo",
            renderAs: "prettycheckbox",
            choices: [
              "1|Trabajo desde casa",
              "2|Trabajo en oficina",
            ]
          },
        ],
      },
      {
        questions: [
          {
            type: "boolean",
            name: "initialquestion",
            labelFalse: "No",
            labelTrue: "Sí",
            isRequired: true,
            title: "¿Tienes algún síntoma como: tos, dolor de garganta, dolor de cabeza y/o fiebre igual o mayor a 38ºC?",
          },
          {
            type: "boolean",
            name: "symptomslast7days",
            labelFalse: "No",
            labelTrue: "Sí",
            isRequired: true,
            visibleIf: "{initialquestion} == false",
            title: "¿Llegaste a tener alguno de los síntomas antes mencionados en los últimos 7 días, aunque hayan desaparecido?",
          },
          {
            type: "boolean",
            name: "traveledlast15days",
            labelFalse: "No",
            labelTrue: "Sí",
            isRequired: true,
            visibleIf: "{symptomslast7days} == false",
            title: "¿Ha viajado a algún lugar catalogado como de alto riesgo de contagio por COVID-19 en los últimos 15 días?",
          },
          {
            type: "boolean",
            name: "coexistlast15days",
            labelFalse: "No",
            labelTrue: "Sí",
            isRequired: true,
            visibleIf: "{traveledlast15days} == false",
            title: "¿En los últimos 15 días ha convivido con un amigo o familiar proveniente de un país o ciudad con casos o riesgo alto de contagio de COVID-19; diagnosticado como caso positivo de COVID-19 o que labore en alguna institución de salud?",
          },
          {
            type: "radiogroup",
            name: "traveldestiny",
            isRequired: true,
            title: "Inidicar: ",
            visibleIf: "{traveledlast15days} == true",
            renderAs: "prettycheckbox",
            choices: [
              "1|Nacional",
              "2|Extranjero",
            ]
          },
          {
            type: "dropdown",
            renderAs: "select2",
            choicesByUrl: {
              url: "https://restcountries.eu/rest/v1/all"
            },
            isRequired: true,
            visibleIf: "{traveledlast15days}",
            name: "countries",
            title: "Indicar ciudad:"
          },
          {
            name: "dateout",
            type: "datepicker",
            inputType: "date",
            visibleIf: "{traveledlast15days}",
            title: "Indicar fecha de salida:",
            dateFormat: "mm/dd/yy",
            isRequired: true
          },
          {
            name: "datein",
            type: "datepicker",
            inputType: "date",
            visibleIf: "{traveledlast15days}",
            title: "Indicar fecha de llegada:",
            dateFormat: "mm/dd/yy",
            isRequired: true
          },
          {
            type: "comment",
            name: "scales",
            visibleIf: "{traveledlast15days}",
            isRequired: true,
            title: "Indicar escalas:"
          },
          {
            type: "boolean",
            name: "diabetes",
            labelFalse: "No",
            labelTrue: "Sí",
            isRequired: true,
            visibleIf: "{initialquestion}",
            title: "¿Tienes diabetes?",
          },
          {
            type: "boolean",
            name: "hypertension",
            labelFalse: "No",
            labelTrue: "Sí",
            isRequired: true,
            visibleIf: "{initialquestion}",
            title: "¿Tienes hipertensión?",
          },
          {
            type: "boolean",
            name: "obesity",
            labelFalse: "No",
            labelTrue: "Sí",
            isRequired: true,
            visibleIf: "{initialquestion}",
            title: "¿Tienes obesidad?",
          },
          {
            type: "boolean",
            name: "disease",
            labelFalse: "No",
            labelTrue: "Sí",
            isRequired: true,
            visibleIf: "{initialquestion}",
            title: "¿Padeces una enfermedad o tomas un medicamento que baje tus defensas?",
          },
          {
            type: "boolean",
            name: "pregnant",
            labelFalse: "No",
            labelTrue: "Sí",
            isRequired: true,
            visibleIf: "{initialquestion}",
            title: "¿Estás embarazada?",
          },
          {
            type: "boolean",
            name: "symptoms",
            labelFalse: "No",
            labelTrue: "Sí",
            isRequired: true,
            visibleIf: "{initialquestion} == true",
            title: "¿Presentas alguno de los siguientes síntomas: ¿falta de aire, respiración rápida, dificultad para respirar o desorientación?",
          },
        ],
      },
      {
        elements: [
          {
            type: "resultone",            
            title: "Resultado: ",
            name: "resultone",
            visibleIf: "{symptoms}",            
          },
          {
            type: "resulttwo",            
            title: "Resultado: ",
            name: "resulttwo",       
            visibleIf: "{symptoms} == false",
          },
          {
            type: "resultthree",            
            title: "Resultado: ",
            name: "resultthree",       
            visibleIf: "{symptomslast7days}",
          },
          {
            type: "resultfour",            
            title: "Resultado: ",
            name: "resultfour",       
            visibleIf: "{traveledlast15days}",
          },
          {
            type: "resultfive",            
            title: "Resultado: ",
            name: "resultfive",       
            visibleIf: "{coexistlast15days}",
          },
          {
            type: "resultsix",            
            title: "Resultado: ",
            name: "resultsix",       
            visibleIf: "{coexistlast15days} == false",
          },
        ]
      },      
    ]
  };

  onValueChanged(result) {
    console.log("value changed!", result);
  }

  onComplete(result) {
    console.log("Complete! ", result);
  }

  savePDF = model => {
    var surveyPDF = new SurveyPDF.SurveyPDF(this.json);
    surveyPDF.data = model.data;
    surveyPDF.save();
  };

  render() {
    var model = new Survey.Model(this.json);
    var myloc = Survey.surveyLocalization.locales["es"];
    myloc.completingSurvey = "¡Gracias por contestar ésta evaluación de salud!"
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">Peñoles</h2>
        </div>
        <div className="surveyjs">
          {/*If you do not want to show survey, comment the lines below*/}
          {/* <h1>SurveyJS library in action:</h1> */}
          <Survey.Survey
            model={model}
            onComplete={this.onComplete}
            onValueChanged={this.onValueChanged}
          />
          {/*If you do not want to show save PDF button, comment the lines below*/}
          {/* <h3>SurveyPDF export:</h3> */}
          {/* <button onClick={() => this.savePDF(model)}>Save PDF</button> */}
          {/*If you do not want to show Survey Creator, comment the lines below*/}
          {/* <h1>SurveyJS Creator in action:</h1> */}
          {/* <SurveyCreator /> */}
        </div>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
