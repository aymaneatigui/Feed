import { PrismaClient, categories, items, categoryItem } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;
export type { categories, items, categoryItem };
