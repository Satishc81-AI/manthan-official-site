"use server";

export async function submitContact(
  _prev: { success: boolean; message: string } | null,
  formData: FormData
) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, message: "Please fill in all required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  // In production: send via Resend, Postmark, or SendGrid
  // await resend.emails.send({
  //   from: "Manthan Website <noreply@manthansoft.com>",
  //   to: "hello@manthansoft.com",
  //   subject: `New inquiry from ${name} — ${service || "General"}`,
  //   text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nService: ${service}\n\n${message}`,
  // });

  console.log("Contact form submission:", { name, email, company, service, message });

  return {
    success: true,
    message: "Thank you! We'll get back to you within 24 hours.",
  };
}
