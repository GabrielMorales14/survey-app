import React from "react";
import * as Survey from "survey-react";

export class ResultFourModel extends Survey.Question {
  getType() {
    return "resultfour";
  }

  get text() {
    return this.getPropertyValue("text", "");
  }
  set text(newValue) {
    this.setPropertyValue("text", newValue);
  }
}

export class ResultFour extends Survey.SurveyElementBase {
  get question() {
    return this.props.question;
  }
  render() {
    if (!this.question) return null;
    var cssClasses = this.question.cssClasses;
    return (
      <div className={cssClasses.root}>
        <div>
          <b>Quédate en casa hasta cumplir 14 días de la fecha de regreso. 
            <br />Sigue las recomendaciones que la empresa te proporciona por los diversos medios de comunicación y reporta a tu departamento médico. 
          </b>
        </div>
      </div>
    );
  }
}

Survey.Serializer.addClass(
  "resultfour",
  [
    { name: "text" }
  ],
  function () {
    return new ResultFourModel("");
  },
  "question"
);


Survey.ReactQuestionFactory.Instance.registerQuestion("resultfour", props => {
  return React.createElement(ResultFour, props);
});
