import { contactSchema } from "@/lib/validation/contact";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const submission = contactSchema.parse(payload);

    console.info("[zoe-mentorship-contact]", {
      ...submission,
      receivedAt: new Date().toISOString(),
    });

    return Response.json({
      ok: true,
      message: "Message received. We will follow up with you shortly.",
    });
  } catch (error) {
    console.error("[zoe-mentorship-contact-error]", error);

    return Response.json(
      {
        ok: false,
        message: "Please send complete and valid contact details.",
      },
      { status: 400 },
    );
  }
}
