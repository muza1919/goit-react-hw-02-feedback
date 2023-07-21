import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { NotificationMessage } from './Notification/NotificationMessage';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return (good / total) * 100;
  }

  render() {
    return (
      <div>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleBtnClick}
          />
        </Section>
        <Section title='Statistics'>
        {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <NotificationMessage message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}