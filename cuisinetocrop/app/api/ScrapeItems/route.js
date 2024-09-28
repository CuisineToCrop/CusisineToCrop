import { ScrapeMenuItems } from '@/app/_lib/Playwrite/scrapemenuitems';
import { NextResponse } from 'next/server'
 
export async function GET(req) {
  const { searchParams } = new URL(req.url);
    const url = searchParams.get('url');
  try {
    const menu_items = await ScrapeMenuItems(url);
    console.log(menu_items)
    return NextResponse.json(menu_items);
} catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}