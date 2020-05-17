import React from "react";
import * as Survey from "survey-react";

export class ResultSixModel extends Survey.Question {
  getType() {
    return "resultsix";
  }

  get text() {
    return this.getPropertyValue("text", "");
  }
  set text(newValue) {
    this.setPropertyValue("text", newValue);
  }
}

export class ResultSix extends Survey.SurveyElementBase {
  get question() {
    return this.props.question;
  }
  render() {
    if (!this.question) return null;
    var cssClasses = this.question.cssClasses;
    return (
      <div className={cssClasses.root}>
        <div>
          <b>Todo está en orden.
            <br />Tu salud se encuentra bien, solo no dejes de cuidarte y tomas todas las medidas de prevención que tu empresa te proporciona por los diversos medios de comunicación. 
          </b>
        </div>
      </div>
    );
  }
}

Survey.Serializer.addClass(
  "resultsix",
  [
    { name: "text" }
  ],
  function () {
    return new ResultSixModel("");
  },
  "question"
);


Survey.ReactQuestionFactory.Instance.registerQuestion("resultsix", props => {
  return React.createElement(ResultSix, props);
});
