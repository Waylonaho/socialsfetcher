import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { videoUrl } = await request.json();

    if (!videoUrl) {
      return NextResponse.json({ error: 'Video URL is required' }, { status: 400 });
    }

    const rapidApiKey = process.env.RAPIDAPI_KEY;
    const rapidApiHost = process.env.RAPIDAPI_HOST;

    if (!rapidApiKey || !rapidApiHost) {
      return NextResponse.json({ success: false, error: 'API credentials missing' }, { status: 500 });
    }

    // Call the RapidAPI social video extraction endpoint
    const response = await fetch(`https://${rapidApiHost}/smvd/get/all?url=${encodeURIComponent(videoUrl)}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': rapidApiKey,
        'x-rapidapi-host': rapidApiHost,
      },
    });

    const data = await response.json();

    // Check if the provider returned a valid media stream URL
    const downloadUrl = data.download_url || data.url || (data.links && data.links[0]?.link);

    if (downloadUrl) {
      return NextResponse.json({ success: true, downloadUrl });
    }

    return NextResponse.json({ success: false, error: 'Stream not found' });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Fetch failed' }, { status: 500 });
  }
}
