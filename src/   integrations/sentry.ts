// Sentry Error Tracking Integration

export function initSentry(dsn: string) {
  return {
    dsn,
    environment: process.env.NODE_ENV || 'development',
    tracesSampleRate: 1.0,
  };
}

export function captureException(error: Error, context?: Record<string, any>) {
  console.error('Captured exception:', error);
  if (context) {
    console.error('Context:', context);
  }
}

export function captureMessage(message: string, level: string = 'info') {
  console.log(`[${level}] ${message}`);
}

export function setUser(userId: string, email?: string, name?: string) {
  console.log('User context set:', { userId, email, name });
}

export function trackGameEvent(eventName: string, data: Record<string, any>) {
  console.log(`Game Event: ${eventName}`, data);
}

