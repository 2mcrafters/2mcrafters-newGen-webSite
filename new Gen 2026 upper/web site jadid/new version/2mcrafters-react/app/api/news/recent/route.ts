import { NextResponse } from 'next/server';
import { getRecentNews } from '@/lib/news';

export const dynamic = 'force-static';

export async function GET() {
  const news = await getRecentNews();
  const response = NextResponse.json({ news });
  response.headers.set(
    'Cache-Control',
    'public, max-age=0, s-maxage=2592000, stale-while-revalidate=86400'
  );
  return response;
}