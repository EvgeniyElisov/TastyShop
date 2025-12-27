import { Container, Filters, ProductCard, ProductsGroupList, Title, TopBar } from "components/shared";

export default function Home() {
  return (
    <>
      <Container className={"mt-10"}>
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className={"mt-10 pb-14"}>
        <div className={"flex gap-[80px]"}>
          <div className={"w-[250px]"}>
            <Filters />
          </div>
          <div className={"flex-1"}>
            <div className={"flex flex-col gap-16"}>
              <ProductsGroupList
                title="Пиццы"
                categoryId={1}
                products={[
                  {
                    id: 1,
                    name: "Пицца 1",
                    imageUrl: "https://img.freepik.com/free-psd/delicious-pepperoni-pizza-culinary-delight_632498-24206.jpg?semt=ais_hybrid&w=740&q=80",
                    price: 100,
                    items: [{ price: 100 }],
                  },
                  {
                    id: 2,
                    name: "Пицца 2",
                    imageUrl: "https://img.freepik.com/free-psd/delicious-pepperoni-pizza-culinary-delight_632498-24206.jpg?semt=ais_hybrid&w=740&q=80",
                    price: 200,
                    items: [{ price: 200 }],
                  },
                  {
                    id: 3,
                    name: "Пицца 3",
                    imageUrl: "https://img.freepik.com/free-psd/delicious-pepperoni-pizza-culinary-delight_632498-24206.jpg?semt=ais_hybrid&w=740&q=80",
                    price: 300,
                    items: [{ price: 300 }],
                  },
                  {
                    id: 4,
                    name: "Пицца 4",
                    imageUrl: "https://img.freepik.com/free-psd/delicious-pepperoni-pizza-culinary-delight_632498-24206.jpg?semt=ais_hybrid&w=740&q=80",
                    price: 400,
                    items: [{ price: 400 }],
                  },
                  {
                    id: 5,
                    name: "Пицца 5",
                    imageUrl: "https://img.freepik.com/free-psd/delicious-pepperoni-pizza-culinary-delight_632498-24206.jpg?semt=ais_hybrid&w=740&q=80",
                    price: 500,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 6,
                    name: "Пицца 6",
                    imageUrl: "https://img.freepik.com/free-psd/delicious-pepperoni-pizza-culinary-delight_632498-24206.jpg?semt=ais_hybrid&w=740&q=80",
                    price: 600,
                    items: [{ price: 600 }],
                  },
                ]}
              />
              <ProductsGroupList
                title="Комбо"
                categoryId={2}
                products={[
                  {
                    id: 1,
                    name: "Пицца 1",
                    imageUrl: "https://img.freepik.com/free-psd/delicious-pepperoni-pizza-culinary-delight_632498-24206.jpg?semt=ais_hybrid&w=740&q=80",
                    price: 100,
                    items: [{ price: 100 }],
                  },
                  {
                    id: 2,
                    name: "Пицца 2",
                    imageUrl: "https://img.freepik.com/free-psd/delicious-pepperoni-pizza-culinary-delight_632498-24206.jpg?semt=ais_hybrid&w=740&q=80",
                    price: 200,
                    items: [{ price: 200 }],
                  },
                  {
                    id: 3,
                    name: "Пицца 3",
                    imageUrl: "https://img.freepik.com/free-psd/delicious-pepperoni-pizza-culinary-delight_632498-24206.jpg?semt=ais_hybrid&w=740&q=80",
                    price: 300,
                    items: [{ price: 300 }],
                  },
                  {
                    id: 4,
                    name: "Пицца 4",
                    imageUrl: "https://img.freepik.com/free-psd/delicious-pepperoni-pizza-culinary-delight_632498-24206.jpg?semt=ais_hybrid&w=740&q=80",
                    price: 400,
                    items: [{ price: 400 }],
                  },
                  {
                    id: 5,
                    name: "Пицца 5",
                    imageUrl: "https://img.freepik.com/free-psd/delicious-pepperoni-pizza-culinary-delight_632498-24206.jpg?semt=ais_hybrid&w=740&q=80",
                    price: 500,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 6,
                    name: "Пицца 6",
                    imageUrl: "https://img.freepik.com/free-psd/delicious-pepperoni-pizza-culinary-delight_632498-24206.jpg?semt=ais_hybrid&w=740&q=80",
                    price: 600,
                    items: [{ price: 600 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
