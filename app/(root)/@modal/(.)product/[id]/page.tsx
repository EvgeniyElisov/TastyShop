import { prisma } from "prisma/prisma";
import { notFound } from "next/navigation";
import { ChooseProductModal } from "shared/components/shared";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductModalPage({ params }: Props) {
  const { id } = await params;
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      ingredients: true,
      variants: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return <ChooseProductModal product={product} />;
}
