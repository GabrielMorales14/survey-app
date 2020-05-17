import React from "react";
import * as Survey from "survey-react";

export class ResultFiveModel extends Survey.Question {
  getType() {
    return "resultfive";
  }

  get text() {
    return this.getPropertyValue("text", "");
  }
  set text(newValue) {
    this.setPropertyValue("text", newValue);
  }
}

export class ResultFive extends Survey.SurveyElementBase {
  get question() {
    return this.props.question;
  }
  render() {
    if (!this.question) return null;
    var cssClasses = this.question.cssClasses;
    return (
      <div className={cssClasses.root}>
        <div>
          <b>Quédate en casa hasta cumplir 14 días desde tu último contacto con tu amigo o familiar.
            <br />Sigue las recomendaciones que la empresa te proporciona por los diversos medios de comunicación y reporta a tu departamento médico. 
          </b>
        </div>
      </div>
    );
  }
}

Survey.Serializer.addClass(
  "resultfive",
  [
    { name: "text" }
  ],
  function () {
    return new ResultFiveModel("");
  },
  "question"
);


Survey.ReactQuestionFactory.Instance.registerQuestion("resultfive", props => {
  return React.createElement(ResultFive, props);
});
