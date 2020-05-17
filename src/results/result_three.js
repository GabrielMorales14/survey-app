import React from "react";
import * as Survey from "survey-react";

export class ResultThreeModel extends Survey.Question {
  getType() {
    return "resultthree";
  }

  get text() {
    return this.getPropertyValue("text", "");
  }
  set text(newValue) {
    this.setPropertyValue("text", newValue);
  }
}

export class ResultThree extends Survey.SurveyElementBase {
  get question() {
    return this.props.question;
  }
  render() {
    if (!this.question) return null;
    var cssClasses = this.question.cssClasses;
    return (
      <div className={cssClasses.root}>
        <div>
          <span>
            <b>Quédate en casa hasta cumplir 14 días después de iniciados los síntomas.
              <br />Sigue las recomendaciones que la empresa te proporciona por los diversos medios de comunicación y reporta a tu departamento médico.
            </b>
          </span>
        </div>
      </div>
    );
  }
}

Survey.Serializer.addClass(
  "resultthree",
  [
    { name: "text" }
  ],
  function () {
    return new ResultThreeModel("");
  },
  "question"
);


Survey.ReactQuestionFactory.Instance.registerQuestion("resultthree", props => {
  return React.createElement(ResultThree, props);
});
