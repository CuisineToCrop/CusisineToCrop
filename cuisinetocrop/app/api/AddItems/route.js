import { NextResponse } from 'next/server';
import { Result } from 'postcss';

export async function POST(req){
    try {
        const body = await req.json();
        const { userID, items } = body;

        if (!userID || !Array.isArray (items) || items.length == 0) {
            return NextResponse.json(
                {error: 'Inavild input. userID and non-empty items array are required.'},
                { status:400}
            );
        }

        const result = await addNewItems (userID, items);
        return NextResponse.json (
            {
                message: `Succesfully added ${result.lenth} items`,
                addedItems:Result
            },
            {status:201}
        );
    }
    catch(error) {
        console.error('Error in POST request:', error);
        return NextResponse.json({error: error.message}, {status: 500});
    }
}