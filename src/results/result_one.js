import React from "react";
import * as Survey from "survey-react";

export class ResultOneModel extends Survey.Question {
  getType() {
    return "resultone";
  }

  get text() {
    return this.getPropertyValue("text", "");
  }
  set text(newValue) {
    this.setPropertyValue("text", newValue);
  }
}

export class ResultOne extends Survey.SurveyElementBase {
  get question() {
    return this.props.question;
  }
  render() {
    if (!this.question) return null;
    var cssClasses = this.question.cssClasses;
    return (
      <div className={cssClasses.root}>
        <div>
          <span><b>¡Es importante recibir atención médica!</b></span>
          <br />
          <span><b>Marque al 911 o acude a la atención médica indicando que tienes síntomas respiratorios.</b></span>
          <br />
          <br />
          <span><li>El traslado debe realizarse usando su cubrebocas, evitando medios de transporte públicos y manteniendo una sana distancia (1.5 mts).</li></span>
          <span><li>Repórtate con tu departamento medico correspondiente.</li></span>
        </div>
      </div>
    );
  }
}

Survey.Serializer.addClass(
  "resultone",
  [
    { name: "text" }
  ],
  function () {
    return new ResultOneModel("");
  },
  "question"
);


Survey.ReactQuestionFactory.Instance.registerQuestion("resultone", props => {
  return React.createElement(ResultOne, props);
});
