// Finnhub Stock Data Integration
import axios from 'axios';

const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;
const FINNHUB_BASE_URL = 'https://finnhub.io/api/v1';

export interface StockQuote {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  timestamp: number;
}

export async function getStockQuote(symbol: string ): Promise<StockQuote> {
  try {
    const response = await axios.get(`${FINNHUB_BASE_URL}/quote`, {
      params: {
        symbol: symbol.toUpperCase(),
        token: FINNHUB_API_KEY,
      },
    });

    return {
      symbol: symbol.toUpperCase(),
      price: response.data.c,
      change: response.data.d,
      changePercent: response.data.dp,
      timestamp: response.data.t * 1000,
    };
  } catch (error) {
    console.error(`Error fetching quote for ${symbol}:`, error);
    throw error;
  }
}

