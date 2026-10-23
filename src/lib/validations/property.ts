import { z } from 'zod';

export const propertyTypeEnum = z.enum([
  '1 BHK',
  '2 BHK',
  '3 BHK',
  '1 RK',
  'Commercial Gala',
  'Shop',
  'Warehouse / Godown',
]);

export const dealTypeEnum = z.enum([
  'For Sale',
  'For Rent',
  'Heavy Deposit',
  'Low Downpayment',
]);

export const furnishingEnum = z.enum([
  'Unfurnished',
  'Semi-Furnished',
  'Fully Furnished',
]);

export const possessionStatusEnum = z.enum([
  'Ready to Move',
  'Under Construction',
]);

export const propertyInputSchema = z.object({
  title: z
    .string()
    .trim()
    .min(5, 'Title must be at least 5 characters long')
    .max(200, 'Title must not exceed 200 characters'),
  slug: z
    .string()
    .trim()
    .min(3, 'Slug must be at least 3 characters long')
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be lowercase alphanumeric with hyphens only'),
  type: propertyTypeEnum,
  dealType: dealTypeEnum,
  price: z
    .string()
    .trim()
    .min(2, 'Price format example: ₹34.50 Lakhs or ₹3.50 Lakhs Deposit'),
  priceNumeric: z
    .number()
    .positive('Price must be a positive number'),
  priceLabel: z.string().trim().optional().default(''),
  locality: z
    .string()
    .trim()
    .min(2, 'Locality is required (e.g. Millat Nagar 1 & 2)'),
  city: z.string().trim().default('Bhiwandi'),
  carpetArea: z
    .string()
    .trim()
    .min(2, 'Carpet area format: 685 Sq.Ft'),
  superArea: z.string().trim().optional().default(''),
  bedrooms: z.coerce.number().int().min(0, 'Bedrooms cannot be negative').default(0),
  bathrooms: z.coerce.number().int().min(0, 'Bathrooms cannot be negative').default(0),
  balconies: z.coerce.number().int().min(0).default(0),
  floor: z
    .string()
    .trim()
    .min(2, 'Floor example: 3rd of 7 Floors with Lift'),
  furnishing: furnishingEnum,
  waterSupply: z
    .string()
    .trim()
    .min(2, 'Water supply info is required'),
  possessionStatus: possessionStatusEnum.default('Ready to Move'),
  loanAvailable: z.boolean().default(false),
  featured: z.boolean().default(false),
  published: z.boolean().default(true),
  image: z
    .string()
    .trim()
    .min(1, 'Primary cover image is required'),
  gallery: z.array(z.string()).default([]),
  description: z
    .string()
    .trim()
    .min(15, 'Description must be at least 15 characters long'),
  highlights: z.array(z.string()).default([]),
  nearbyLandmarks: z.array(z.string()).default([]),
});

export type PropertyInput = z.infer<typeof propertyInputSchema>;

export const leadInputSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Please enter your full name'),
  phone: z
    .string()
    .trim()
    .min(10, 'Please enter a valid 10-digit mobile number')
    .max(15, 'Phone number is too long'),
  propertyId: z.string().trim().optional(),
  locality: z.string().trim().optional(),
  type: z.string().trim().optional(),
  message: z.string().trim().max(1000).optional(),
});

export type LeadInput = z.infer<typeof leadInputSchema>;
