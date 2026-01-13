# Testing Guide

This guide explains how to test each integration in the Munymo project.

## Testing Finnhub Integration

Test fetching stock data:

1. Ensure FINNHUB_API_KEY is set in .env
2. Run: node -e "import('./src/integrations/finnhub.ts').then(m => m.getStockQuote('AAPL')).then(console.log)"
3. Verify you get a response with price, change, and changePercent

## Testing Stripe Integration

Test subscription creation:

1. Ensure STRIPE_SECRET_KEY is set in .env
2. Use Stripe test mode keys (starting with sk_test_)
3. Create a test customer in Stripe dashboard
4. Run: node -e "import('./src/integrations/stripe.ts').then(m => m.createSubscription('cus_test', 'price_test')).then(console.log)"

## Testing Firebase Integration

Test event tracking:

1. Ensure all VITE_FIREBASE_* variables are set in .env
2. Initialize Firebase in your app
3. Call trackEvent('test_event', { test: true })
4. Check Firebase Analytics dashboard for the event

## Testing SendGrid Integration

Test email sending:

1. Ensure SENDGRID_API_KEY and SENDGRID_FROM_EMAIL are set in .env
2. Use a real email address for testing
3. Run: node -e "import('./src/integrations/sendgrid.ts').then(m => m.sendEmail('test@example.com', 'Test', '<h1>Test</h1>')).then(console.log)"
4. Check your inbox for the test email

## Testing Sentry Integration

Test error tracking:

1. Ensure SENTRY_DSN is set in .env
2. Call trackGameEvent('test_event', { data: 'test' })
3. Check Sentry dashboard for the event

## Integration Testing

To test all integrations together:

1. Set all required environment variables in .env
2. Run npm test
3. Verify all integrations respond correctly
4. Check each service's dashboard for activity logs

