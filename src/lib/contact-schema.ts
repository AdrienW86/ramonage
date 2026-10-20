import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Indiquez votre nom.').max(100),
  email: z.email('Indiquez un email valide.').max(254),
  phone: z.string().trim().max(25).refine(v => !v || /^(?:\+33|0)[1-9](?:[ .-]?\d{2}){4}$/.test(v), 'Numéro français invalide.'),
  subject: z.enum(['question', 'ramonage', 'debistrage', 'entretien', 'autre'], { error: 'Choisissez un sujet.' }),
  commune: z.string().trim().max(100),
  message: z.string().trim().min(15, 'Décrivez votre besoin en quelques mots (15 caractères minimum).').max(3000),
  consent: z.boolean().refine(Boolean, 'Votre accord est nécessaire.'),
  website: z.string().max(200),
  startedAt: z.number(),
  requestId: z.uuid(),
});
export type ContactInput = z.infer<typeof contactSchema>;
