import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log({ method: request.method });
  return NextResponse.json({
    method: "GET",
    count: 1,
  });
}

// export async function GET() {
//   return Response.json({ count: 1 });
// }
