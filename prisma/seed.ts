import { OrderStatus } from "@prisma/client";
import { hashSync } from "bcrypt";
import { randomUUID } from "crypto";
import { prisma } from "./prisma";


const randomDecimalNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductVariant = ({
  productId,
  pizzaType,
  size,
}: {
  productId: number;
  pizzaType?: number;
  size?: number;
}) => {
  return {
    productId,
    price: Math.floor(randomDecimalNumber(190, 600)),
    pizzaType,
    size,
  };
};

const USERS_DATA = [
  {
    fullName: "Иван Иванов",
    email: "user@test.ru",
    password: "111111",
    role: "USER" as const,
  },
  {
    fullName: "Админ Админов",
    email: "admin@test.ru",
    password: "111111",
    role: "ADMIN" as const,
  },
  {
    fullName: "Петр Петров",
    email: "petr@test.ru",
    password: "111111",
    role: "USER" as const,
  },
];

const CATEGORIES_DATA = [
  { name: "Пиццы" },
  { name: "Завтрак" },
  { name: "Закуски" },
  { name: "Коктейли" },
  { name: "Напитки" },
];

const INGREDIENTS_DATA = [
  {
    name: "Сырный бортик",
    price: 179,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png",
  },
  {
    name: "Сливочная моцарелла",
    price: 79,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png",
  },
  {
    name: "Сыры чеддер и пармезан",
    price: 79,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796",
  },
  {
    name: "Острый перец халапеньо",
    price: 59,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png",
  },
  {
    name: "Нежный цыпленок",
    price: 79,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A",
  },
  {
    name: "Шампиньоны",
    price: 59,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324",
  },
  {
    name: "Ветчина",
    price: 79,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61",
  },
  {
    name: "Пикантная пепперони",
    price: 79,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3",
  },
  {
    name: "Острая чоризо",
    price: 79,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027",
  },
  {
    name: "Маринованные огурчики",
    price: 59,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B",
  },
  {
    name: "Свежие томаты",
    price: 59,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67",
  },
  {
    name: "Красный лук",
    price: 59,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C",
  },
  {
    name: "Сочные ананасы",
    price: 59,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B",
  },
  {
    name: "Итальянские травы",
    price: 39,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png",
  },
  {
    name: "Сладкий перец",
    price: 59,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B",
  },
  {
    name: "Кубики брынзы",
    price: 79,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349",
  },
  {
    name: "Митболы",
    price: 79,
    imageUrl: "https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png",
  },
];

const PRODUCTS_DATA = [
  {
    name: "Омлет с ветчиной и грибами",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.webp",
    categoryName: "Завтрак",
  },
  {
    name: "Омлет с пепперони",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE94ECF33B0C46BA410DEC1B1DD6F8.webp",
    categoryName: "Завтрак",
  },
  {
    name: "Кофе Латте",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp",
    categoryName: "Завтрак",
  },
  {
    name: "Дэнвич ветчина и сыр",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.webp",
    categoryName: "Закуски",
  },
  {
    name: "Куриные наггетсы",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D618B5C7EC29350069AE9532C6E.webp",
    categoryName: "Закуски",
  },
  {
    name: "Картофель из печи с соусом 🌱",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EED646A9CD324C962C6BEA78124F19.webp",
    categoryName: "Закуски",
  },
  {
    name: "Додстер",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE796F96D11392A2F6DD73599921B9.webp",
    categoryName: "Закуски",
  },
  {
    name: "Острый Додстер 🌶️🌶️",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE796FD3B594068F7A752DF8161D04.webp",
    categoryName: "Закуски",
  },
  {
    name: "Банановый молочный коктейль",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EEE20B8772A72A9B60CFB20012C185.webp",
    categoryName: "Коктейли",
  },
  {
    name: "Карамельное яблоко молочный коктейль",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE79702E2A22E693D96133906FB1B8.webp",
    categoryName: "Коктейли",
  },
  {
    name: "Молочный коктейль с печеньем Орео",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.webp",
    categoryName: "Коктейли",
  },
  {
    name: "Классический молочный коктейль 👶",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE796F93FB126693F96CB1D3E403FB.webp",
    categoryName: "Коктейли",
  },
  {
    name: "Ирландский Капучино",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61999EBDA59C10E216430A6093.webp",
    categoryName: "Напитки",
  },
  {
    name: "Кофе Карамельный капучино",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61AED6B6D4BFDAD4E58D76CF56.webp",
    categoryName: "Напитки",
  },
  {
    name: "Кофе Кокосовый латте",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61B19FA07090EE88B0ED347F42.webp",
    categoryName: "Напитки",
  },
  {
    name: "Кофе Американо",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61B044583596548A59078BBD33.webp",
    categoryName: "Напитки",
  },
  {
    name: "Кофе Латте",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp",
    categoryName: "Напитки",
  },
];

const PIZZAS_DATA = [
  {
    name: "Пепперони фреш",
    imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp",
    categoryName: "Пиццы",
    ingredientIndices: [0, 5],
    variants: [
      { pizzaType: 1, size: 20 },
      { pizzaType: 2, size: 30 },
      { pizzaType: 2, size: 40 },
    ],
  },
  {
    name: "Сырная",
    imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp",
    categoryName: "Пиццы",
    ingredientIndices: [5, 10],
    variants: [
      { pizzaType: 1, size: 20 },
      { pizzaType: 1, size: 30 },
      { pizzaType: 1, size: 40 },
      { pizzaType: 2, size: 20 },
      { pizzaType: 2, size: 30 },
      { pizzaType: 2, size: 40 },
    ],
  },
  {
    name: "Чоризо фреш",
    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp",
    categoryName: "Пиццы",
    ingredientIndices: [10, 17],
    variants: [
      { pizzaType: 1, size: 20 },
      { pizzaType: 2, size: 30 },
      { pizzaType: 2, size: 40 },
    ],
  },
  {
    name: "Маргарита",
    imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp",
    categoryName: "Пиццы",
    ingredientIndices: [0, 3],
    variants: [
      { pizzaType: 1, size: 20 },
      { pizzaType: 1, size: 30 },
      { pizzaType: 2, size: 40 },
    ],
  },
  {
    name: "Гавайская",
    imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp",
    categoryName: "Пиццы",
    ingredientIndices: [3, 8],
    variants: [
      { pizzaType: 1, size: 20 },
      { pizzaType: 2, size: 30 },
      { pizzaType: 2, size: 40 },
    ],
  },
];

const STORIES_DATA = [
  {
    previewImageUrl: "https://cdn.inappstory.ru/story/xep/xzh/zmc/cr4gcw0aselwvf628pbmj3j/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3101815496",
    items: [
      "https://cdn.inappstory.ru/file/dd/yj/sx/oqx9feuljibke3mknab7ilb35t.webp?k=IgAAAAAAAAAE",
      "https://cdn.inappstory.ru/file/jv/sb/fh/io7c5zarojdm7eus0trn7czdet.webp?k=IgAAAAAAAAAE",
      "https://cdn.inappstory.ru/file/ts/p9/vq/zktyxdxnjqbzufonxd8ffk44cb.webp?k=IgAAAAAAAAAE",
      "https://cdn.inappstory.ru/file/ur/uq/le/9ufzwtpdjeekidqq04alfnxvu2.webp?k=IgAAAAAAAAAE",
      "https://cdn.inappstory.ru/file/sy/vl/c7/uyqzmdojadcbw7o0a35ojxlcul.webp?k=IgAAAAAAAAAE",
    ],
  },
  {
    previewImageUrl: "https://cdn.inappstory.ru/story/km2/9gf/jrn/sb7ls1yj9fe5bwvuwgym73e/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3074015640",
    items: [
      "https://cdn.inappstory.ru/file/dd/yj/sx/oqx9feuljibke3mknab7ilb35t.webp?k=IgAAAAAAAAAE",
      "https://cdn.inappstory.ru/file/jv/sb/fh/io7c5zarojdm7eus0trn7czdet.webp?k=IgAAAAAAAAAE",
    ],
  },
  {
    previewImageUrl: "https://cdn.inappstory.ru/story/quw/acz/zf5/zu37vankpngyccqvgzbohj1/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=1336215020",
    items: [
      "https://cdn.inappstory.ru/file/ts/p9/vq/zktyxdxnjqbzufonxd8ffk44cb.webp?k=IgAAAAAAAAAE",
    ],
  },
  {
    previewImageUrl: "https://cdn.inappstory.ru/story/7oc/5nf/ipn/oznceu2ywv82tdlnpwriyrq/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=38903958",
    items: [],
  },
  {
    previewImageUrl: "https://cdn.inappstory.ru/story/q0t/flg/0ph/xt67uw7kgqe9bag7spwkkyw/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=2941222737",
    items: [],
  },
  {
    previewImageUrl: "https://cdn.inappstory.ru/story/lza/rsp/2gc/xrar8zdspl4saq4uajmso38/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=4207486284",
    items: [],
  },
];

const seedUsers = async (): Promise<number[]> => {
  const users = await prisma.user.createMany({
    data: USERS_DATA.map((user) => ({
      fullName: user.fullName,
      email: user.email,
      password: hashSync(user.password, 10),
      verified: new Date(),
      role: user.role,
    })),
  });

  const createdUsers = await prisma.user.findMany({
    where: {
      email: {
        in: USERS_DATA.map((u) => u.email),
      },
    },
    select: { id: true },
  });

  return createdUsers.map((u) => u.id);
};

const seedVerificationCodes = async (userIds: number[]): Promise<void> => {
  const codes = userIds.map((userId) => ({
    userId,
    code: Math.floor(100000 + Math.random() * 900000).toString(),
  }));

  await prisma.verificationCode.createMany({
    data: codes,
  });
};

const seedCategories = async (): Promise<Map<string, number>> => {
  await prisma.category.createMany({
    data: CATEGORIES_DATA,
  });

  const categories = await prisma.category.findMany({
    where: {
      name: {
        in: CATEGORIES_DATA.map((c) => c.name),
      },
    },
  });

  return new Map(categories.map((cat) => [cat.name, cat.id]));
};

const seedIngredients = async (): Promise<number[]> => {
  await prisma.ingredient.createMany({
    data: INGREDIENTS_DATA,
  });

  const ingredients = await prisma.ingredient.findMany({
    orderBy: { id: "asc" },
  });

  return ingredients.map((ing) => ing.id);
};

const seedProducts = async (categoryMap: Map<string, number>): Promise<number[]> => {
  const products = await prisma.product.createMany({
    data: PRODUCTS_DATA.map((product) => ({
      name: product.name,
      imageUrl: product.imageUrl,
      categoryId: categoryMap.get(product.categoryName)!,
    })),
  });

  const createdProducts = await prisma.product.findMany({
    where: {
      name: {
        in: PRODUCTS_DATA.map((p) => p.name),
      },
    },
    orderBy: { id: "asc" },
    select: { id: true },
  });

  return createdProducts.map((p) => p.id);
};

const seedPizzas = async (
  categoryMap: Map<string, number>,
  ingredientIds: number[]
): Promise<{ pizzaId: number; productVariantIds: number[] }[]> => {
  const pizzaResults = [];

  for (const pizza of PIZZAS_DATA) {
    const categoryId = categoryMap.get(pizza.categoryName)!;
    const ingredientSlice = ingredientIds.slice(pizza.ingredientIndices[0], pizza.ingredientIndices[1]);

    const createdPizza = await prisma.product.create({
      data: {
        name: pizza.name,
        imageUrl: pizza.imageUrl,
        categoryId,
        ingredients: {
          connect: ingredientSlice.map((id) => ({ id })),
        },
      },
    });

    const productVariants = await prisma.productVariant.createMany({
      data: pizza.variants.map((variant) =>
        generateProductVariant({
          productId: createdPizza.id,
          pizzaType: variant.pizzaType,
          size: variant.size,
        })
      ),
    });

    const createdProductVariants = await prisma.productVariant.findMany({
      where: {
        productId: createdPizza.id,
      },
      select: { id: true },
      orderBy: { id: "asc" },
    });

    pizzaResults.push({
      pizzaId: createdPizza.id,
      productVariantIds: createdProductVariants.map((item: { id: number }) => item.id),
    });
  }

  return pizzaResults;
};

const seedProductVariants = async (productIds: number[]): Promise<void> => {
  const productVariantsData = productIds.map((productId) => generateProductVariant({ productId }));

  await prisma.productVariant.createMany({
    data: productVariantsData,
  });
};

const seedCarts = async (userIds: number[]): Promise<Map<number, number>> => {
  const carts = await prisma.cart.createMany({
    data: userIds.map((userId) => ({
      userId,
      token: randomUUID(),
      totalAmount: 0,
    })),
  });

  const createdCarts = await prisma.cart.findMany({
    where: {
      userId: {
        in: userIds,
      },
    },
    select: { id: true, userId: true },
  });

  return new Map(createdCarts.map((cart) => [cart.userId!, cart.id]));
};

const seedCartItems = async (cartMap: Map<number, number>, ingredientIds: number[]): Promise<void> => {
  const firstCartId = Array.from(cartMap.values())[0];
  const firstProductVariant = await prisma.productVariant.findFirst({
    orderBy: { id: "asc" },
    select: { id: true },
  });

  if (!firstProductVariant) return;

  await prisma.cartItem.create({
    data: {
      productVariantId: firstProductVariant.id,
      cartId: firstCartId,
      quantity: 2,
      ingredients: {
        connect: ingredientIds.slice(0, 3).map((id) => ({ id })),
      },
    },
  });

  const secondCartId = Array.from(cartMap.values())[1];
  const secondProductVariant = await prisma.productVariant.findFirst({
    skip: 1,
    orderBy: { id: "asc" },
    select: { id: true },
  });

  if (secondCartId && secondProductVariant) {
    await prisma.cartItem.create({
      data: {
        productVariantId: secondProductVariant.id,
        cartId: secondCartId,
        quantity: 1,
        ingredients: {
          connect: ingredientIds.slice(3, 5).map((id) => ({ id })),
        },
      },
    });
  }
};

const seedOrders = async (userIds: number[]): Promise<void> => {
  const productVariants = await prisma.productVariant.findMany({
    take: 3,
    select: { id: true, price: true },
  });

  if (productVariants.length === 0) return;

  const orderItems = productVariants.map((pv: { id: number; price: number }) => ({
    productVariantId: pv.id,
    quantity: Math.floor(Math.random() * 3) + 1,
    price: pv.price,
  }));

  const totalAmount = orderItems.reduce((sum: number, item: { price: number; quantity: number }) => sum + item.price * item.quantity, 0);

  await prisma.order.create({
    data: {
      userId: userIds[0],
      token: randomUUID(),
      items: orderItems as any,
      status: OrderStatus.PENDING,
      totalAmount,
      fullName: "Иван Иванов",
      address: "ул. Ленина, д. 10, кв. 5",
      email: "user@test.ru",
      phone: "+7 (999) 123-45-67",
      comment: "Позвоните за 10 минут до доставки",
    },
  });

  await prisma.order.create({
    data: {
      userId: userIds[0],
      token: randomUUID(),
      items: orderItems.slice(0, 2) as any,
      status: OrderStatus.SUCCEEDED,
      totalAmount: orderItems.slice(0, 2).reduce((sum: number, item: { price: number; quantity: number }) => sum + item.price * item.quantity, 0),
      paymentId: randomUUID(),
      fullName: "Иван Иванов",
      address: "ул. Ленина, д. 10, кв. 5",
      email: "user@test.ru",
      phone: "+7 (999) 123-45-67",
    },
  });

  await prisma.order.create({
    data: {
      userId: userIds[1],
      token: randomUUID(),
      items: orderItems as any,
      status: OrderStatus.CANCELLED,
      totalAmount,
      fullName: "Админ Админов",
      address: "пр. Мира, д. 25, офис 100",
      email: "admin@test.ru",
      phone: "+7 (999) 765-43-21",
      comment: "Отменен по просьбе клиента",
    },
  });
};

const seedStories = async (): Promise<void> => {
  for (const story of STORIES_DATA) {
    const createdStory = await prisma.story.create({
      data: {
        previewImageUrl: story.previewImageUrl,
      },
    });

    if (story.items.length > 0) {
      await prisma.storyItem.createMany({
        data: story.items.map((sourceUrl) => ({
          storyId: createdStory.id,
          sourceUrl,
        })),
      });
    }
  }
};

const seedDatabase = async (): Promise<void> => {
  console.log("🌱 Начало заполнения базы данных...");

  const userIds = await seedUsers();
  console.log("✅ Пользователи созданы");

  await seedVerificationCodes(userIds);
  console.log("✅ Коды верификации созданы");

  const categoryMap = await seedCategories();
  console.log("✅ Категории созданы");

  const ingredientIds = await seedIngredients();
  console.log("✅ Ингредиенты созданы");

  const productIds = await seedProducts(categoryMap);
  console.log("✅ Продукты созданы");

  await seedProductVariants(productIds);
  console.log("✅ Варианты продуктов созданы");

  await seedPizzas(categoryMap, ingredientIds);
  console.log("✅ Пиццы созданы");

  const cartMap = await seedCarts(userIds);
  console.log("✅ Корзины созданы");

  await seedCartItems(cartMap, ingredientIds);
  console.log("✅ Элементы корзин созданы");

  await seedOrders(userIds);
  console.log("✅ Заказы созданы");

  await seedStories();
  console.log("✅ Истории созданы");

  console.log("🎉 База данных успешно заполнена!");
};

const clearDatabase = async (): Promise<void> => {
  console.log("🗑️  Очистка базы данных...");

  const tables = [
    "StoryItem",
    "Story",
    "CartItem",
    "Cart",
    "Order",
    "VerificationCode",
    "ProductVariant",
    "Product",
    "Ingredient",
    "Category",
    "User",
  ];

  for (const table of tables) {
    await prisma.$executeRawUnsafe(`TRUNCATE TABLE "${table}" RESTART IDENTITY CASCADE;`);
  }

  console.log("✅ База данных очищена");
};

const main = async (): Promise<void> => {
  try {
    await clearDatabase();
    await seedDatabase();
  } catch (error) {
    console.error("❌ Ошибка при заполнении базы данных:", error);
    throw error;
  }
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
