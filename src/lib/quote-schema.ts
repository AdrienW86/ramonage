import { z } from 'zod';
export const quoteSchema = z.object({
  name: z.string().trim().min(2, 'Indiquez votre nom (2 caractères minimum).').max(100),
  phone: z
    .string()
    .trim()
    .regex(/^(?:\+33|0)[1-9](?:[ .-]?\d{2}){4}$/, 'Indiquez un numéro français valide.'),
  email: z.email('Indiquez une adresse email valide.').max(254),
  commune: z.string().trim().min(2, 'Indiquez votre commune.').max(100),
  postalCode: z.string().regex(/^\d{5}$/, 'Indiquez un code postal à 5 chiffres.'),
  installation: z.enum(
    ['cheminee', 'poele-bois', 'poele-granules', 'insert', 'chaudiere', 'autre'],
    { error: 'Choisissez votre type d’installation.' },
  ),
  service: z.string().min(1, 'Choisissez une prestation.').max(100),
  message: z.string().trim().max(4000, 'Votre message est limité à 4 000 caractères.'),
  consent: z.boolean().refine((v) => v, 'Votre accord est nécessaire pour traiter la demande.'),
  website: z.string().max(200),
  startedAt: z.number(),
  requestId: z.uuid(),
});
export type QuoteInput = z.infer<typeof quoteSchema>;
