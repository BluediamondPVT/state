import { PrismaClient } from '@prisma/client';
import { PROPERTIES, AGENCY_CONFIG } from '../src/data/properties';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting Taimur Real Estate Database Seed...');

  // 1. Create Default Admin User
  // Password hash for: Taimur@2026 (bcrypt hash generated with salt rounds 10)
  const defaultPasswordHash =
    '$2a$10$wK1mJbM7jKq6wL9jZ3XnU.cOe7kF1zL4zR8hC3wY2nB7vM5kP0e2W';

  const adminEmail = 'admin@taimurrealestate.com';
  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (!existingAdmin) {
    const admin = await prisma.user.create({
      data: {
        name: 'Taimur Real Estate Admin',
        email: adminEmail,
        passwordHash: defaultPasswordHash,
        role: 'superadmin',
      },
    });
    console.log(`✅ Default admin created: ${admin.email}`);
  } else {
    console.log(`ℹ️ Admin already exists: ${existingAdmin.email}`);
  }

  // 2. Seed Initial Curated Properties
  for (const prop of PROPERTIES) {
    const existing = await prisma.property.findUnique({
      where: { slug: prop.slug },
    });

    const propertyData = {
      slug: prop.slug,
      title: prop.title,
      type: prop.type,
      dealType: prop.dealType,
      price: prop.price,
      priceNumeric: prop.priceNumeric,
      priceLabel: prop.priceLabel || '',
      locality: prop.locality,
      city: prop.city || 'Bhiwandi',
      carpetArea: prop.carpetArea,
      superArea: prop.superArea || '',
      bedrooms: prop.bedrooms,
      bathrooms: prop.bathrooms,
      balconies: prop.balconies || 0,
      floor: prop.floor,
      furnishing: prop.furnishing,
      waterSupply: prop.waterSupply,
      possessionStatus: prop.possessionStatus,
      loanAvailable: prop.loanAvailable,
      featured: prop.featured,
      published: true,
      image: prop.image,
      gallery: prop.gallery,
      description: prop.description,
      highlights: prop.highlights,
      nearbyLandmarks: prop.nearbyLandmarks,
      viewsCount: 120,
      inquiriesCount: 15,
    };

    if (!existing) {
      await prisma.property.create({
        data: propertyData,
      });
      console.log(`✅ Property created: [${prop.type}] ${prop.title}`);
    } else {
      await prisma.property.update({
        where: { slug: prop.slug },
        data: propertyData,
      });
      console.log(`🔄 Property updated: [${prop.type}] ${prop.title}`);
    }
  }

  // 3. Seed Sample Inquiry Lead for Demonstration
  const existingLead = await prisma.lead.findFirst({
    where: { phone: '+91 98222 70773' },
  });

  if (!existingLead) {
    await prisma.lead.create({
      data: {
        name: 'Mohammad Farhan',
        phone: '+91 98222 70773',
        locality: 'Millat Nagar 1 & 2',
        type: '2 BHK',
        message: 'Looking for a 2 BHK flat near Millat Nagar or Dhamankar Naka with bank loan support.',
        status: 'new',
      },
    });
    console.log(`✅ Sample customer lead created for testing.`);
  }

  console.log('✨ Database seeding completed successfully for Taimur Real Estate!');
}

main()
  .catch((e) => {
    console.error('❌ Error during database seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
