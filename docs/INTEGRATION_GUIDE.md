# Integration Guide

This guide explains how to set up and use each third-party integration in the Munymo project.

## Finnhub Integration

Finnhub provides real-time stock market data.

Setup:
1. Sign up at https://finnhub.io
2. Get your API key from the dashboard
3. Add to .env: FINNHUB_API_KEY=your_key_here

Usage:
import { getStockQuote } from './src/integrations/finnhub';
const quote = await getStockQuote('AAPL' );

## Stripe Integration

Stripe handles payment processing for subscriptions.

Setup:
1. Sign up at https://stripe.com
2. Get your secret key from the dashboard
3. Add to .env: STRIPE_SECRET_KEY=your_key_here

Usage:
import { createSubscription, cancelSubscription } from './src/integrations/stripe';
const sub = await createSubscription(customerId, priceId );

## Firebase Integration

Firebase provides push notifications and analytics.

Setup:
1. Create a project at https://firebase.google.com
2. Get your config from Project Settings
3. Add all VITE_FIREBASE_* variables to .env

Usage:
import { trackEvent } from './src/integrations/firebase';
trackEvent('user_signup', { userId: '123' } );

## SendGrid Integration

SendGrid handles email delivery.

Setup:
1. Sign up at https://sendgrid.com
2. Get your API key from Settings
3. Add to .env: SENDGRID_API_KEY=your_key_here

Usage:
import { sendEmail } from './src/integrations/sendgrid';
await sendEmail('user@example.com', 'Welcome', '<h1>Welcome!</h1>' );

## Sentry Integration

Sentry tracks errors and exceptions.

Setup:
1. Sign up at https://sentry.io
2. Create a project
3. Get your DSN from project settings
4. Add to .env: SENTRY_DSN=your_dsn_here

Usage:
import { captureException, trackGameEvent } from './src/integrations/sentry';
trackGameEvent('prediction_made', { correct: true } );

## Google Analytics

Analytics is handled through Firebase Analytics.

See Firebase Integration section above.

