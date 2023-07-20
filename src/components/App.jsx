import { Component } from "react";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { NotificationMessage } from "./Notification/NotificationMessage";


export class App extends Component {
    state = {
        good: 0,
        neutural: 0,
        bad: 0,
    }

    handleBtnClick = evt => {
      this.setState(prevState => {
        let newState = { ...prevState };
        for (const key in newState) {
          if (key === evt.target.textContent.toLowerCase()) {
            newState[key]++;
          }
        }
        return newState;
      });
    };

    countTotalFeedback() {
      let total = 0;
      Object.values(this.state).forEach(feedback => {
        total += feedback;
      });
      return total;
    }

    countPositiveFeedbackPercentage() {
      let total = 0;
      Object.values(this.state).forEach(feedback => {
        total += feedback;
      });
      let percentage = Math.round((this.state.good / total) * 100);
      if (!percentage){
        return 0;
      }
      return percentage;
    }

    render() {
        return(
            <div>
                <Section title={'Please leave feedback'}>
                    <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleBtnClick} /> 
                </Section>
                <Section title = {'Statistics'}>
                  {!this.countTotalFeedback() ? (
                    <NotificationMessage message={'There is no feedback'} />)
                  : (
                    <Statistics good={this.state.good} neutural={this.state.neutural} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
                  )}
                </Section>
            </div>
        )
    }

}