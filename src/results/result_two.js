import React from "react";
import * as Survey from "survey-react";

export class ResultTwoModel extends Survey.Question {
  getType() {
    return "resulttwo";
  }

  get text() {
    return this.getPropertyValue("text", "");
  }
  set text(newValue) {
    this.setPropertyValue("text", newValue);
  }
}

export class ResultTwo extends Survey.SurveyElementBase {
  get question() {
    return this.props.question;
  }
  render() {
    if (!this.question) return null;
    var cssClasses = this.question.cssClasses;
    return (
      <div className={cssClasses.root}>
        <div>
          <span><b>Evita complicaciones, busca orientación médica en el 911 en caso de que tus síntomas empeoren y reporta a tu departamento médico. </b></span>
          <br />
          <span><b>Sigue las recomendaciones que tu empresa te proporciona a través de los diversos medios de comunicación. </b></span>
        </div>
      </div>
    );
  }
}

Survey.Serializer.addClass(
  "resulttwo",
  [
    { name: "text" }
  ],
  function () {
    return new ResultTwoModel("");
  },
  "question"
);


Survey.ReactQuestionFactory.Instance.registerQuestion("resulttwo", props => {
  return React.createElement(ResultTwo, props);
});
