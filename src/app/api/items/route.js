import items from "../../../../server/data/items.json";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const item = items.find(i => i.id === parseInt(id));
    if (!item) {
      return new Response(JSON.stringify({ message: "Item not found" }), {
        status: 404,
      });
    }
    return Response.json(item);
  }

  return Response.json(items);
}
