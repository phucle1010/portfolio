import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  const fileName = "Le_The_Phuc_Software_Engineer.pdf";
  const filePath = path.join(process.cwd(), "public", "pdf", fileName);

  try {
    const fileBuffer = await fs.readFile(filePath);
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${fileName}"`,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "CV file not found" }, { status: 404 });
  }
}
