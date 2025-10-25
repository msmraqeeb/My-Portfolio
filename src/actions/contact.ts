'use server';

import * as z from 'zod';

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function handleContactFormSubmission(values: z.infer<typeof contactFormSchema>) {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: 'Invalid form data.' };
  }

  // In a real application, you would send an email, save to a database, etc.
  console.log('Received contact form submission:');
  console.log(parsed.data);

  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true, message: 'Message sent successfully!' };
}
