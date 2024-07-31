import ollama from 'ollama';

export async function POST(request: Request) {
  const { message } = await request.json();

  const response = await ollama.chat({
    model: 'llama3.1',
    messages: [{ role: 'user', content: message }],
  });

  return Response.json({ ...response });

  
}