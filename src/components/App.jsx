import React, { useState } from 'react';
import { Statistics  } from "components/statistics/Statistics";
import { FeedbackOptions  } from "components/feedback/Feedback";
import { Section } from "components/section/Section";
import { Notification } from "components/notification/Notification";
  

export const App = () => {
  const [state, setState] = useState ({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const countTotalFeedback = () => state.good + state.neutral + state.bad;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((state.good / total) * 100);
  };

  const handleLeaveFeedback = option => {
    setState(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));
  };

  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};
