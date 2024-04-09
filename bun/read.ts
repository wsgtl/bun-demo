const stream = new ReadableStream();
const json= await Bun.readableStreamToJSON(stream);