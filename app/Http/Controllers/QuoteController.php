<?php

namespace App\Http\Controllers;

use App\Quote;
use Illuminate\Http\Request;

class QuoteController extends Controller
{
    public function getQuotes()
    {
        $response = [
          'quotes' => Quote::all()
        ];
        return response()->json($response, 200);
    }

    public function postQuote(Request $request)
    {
        $quote = new Quote(['content' => $request->input('content')]);
        $quote->save();
        $response = [
            'newQuote' => $quote
        ];
        return response()->json($response, 201);
    }

    public function putQuote(Request $request, $id)
    {
        $quote = Quote::find($id);
        if (!$quote) {
            return response()->json(['message' => 'Quote not found!'], 404);
        }
        $quote->content = $request->input('content');
        $quote->update();
        $response = [
            'updatedQuote' => $quote
        ];
        return response()->json($response, 200);
    }

    public function deleteQuote($id)
    {
        $quote = Quote::find($id);
        if (!$quote) {
            return response()->json(['message' => 'Quote not found!'], 404);
        }
        $quote->delete();
        return response()->json([], 200);
    }
}
