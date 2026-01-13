// Google Analytics Integration
import { logEvent } from 'firebase/analytics';
import { analytics } from './firebase';

export function trackGameStarted(gameId: string) {
  logEvent(analytics, 'game_started', { game_id: gameId });
}

export function trackPredictionSubmitted(gameId: string, correct: boolean, timeTaken: number) {
  logEvent(analytics, 'prediction_submitted', {
    game_id: gameId,
    correct,
    time_taken: timeTaken,
  });
}

export function trackSubscriptionPurchased(plan: string, amount: number) {
  logEvent(analytics, 'subscription_purchased', {
    plan,
    amount,
  });
}

