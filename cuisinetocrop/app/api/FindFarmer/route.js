import fetchHtmlFromLocalHarvest from '@/app/_lib/Playwright/localharvest.js';

export async function GET() {
  try {
    // Fetch the name of the first good instead of the HTML content
    const firstGoodName = await fetchHtmlFromLocalHarvest();

    // Log the first good name
    console.log('First Good Name:', firstGoodName);

    return new Response(JSON.stringify({ goodName: firstGoodName }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching the first good name:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch good name' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
