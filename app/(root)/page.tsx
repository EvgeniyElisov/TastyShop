import { Suspense } from "react";
import { Container, Filters, ProductsGroupList, Stories, Title, TopBar } from "shared/components/shared";
import { findPizzas, GetSearchParams } from "shared/lib/findPizzas";

export default async function Home({searchParams}: {searchParams: Promise<GetSearchParams>}) {
  const params = await searchParams;
  const categories = await findPizzas(params);
 

  return (
    <>
      <TopBar categories={categories.filter((category) => category.products.length > 0)} />

      <Stories/>
      
      <Container className={"mt-16 pb-24"}>
        <div className={"flex gap-20"}>
          <div className={"w-[300px] sticky top-[140px] h-fit"}>
            <Suspense>
              <Filters />
            </Suspense>
          </div>
          <div className={"flex-1"}>
            <div className={"flex flex-col gap-24"}>
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList 
                      key={category.id} 
                      title={category.name} 
                      products={category.products} 
                      categoryId={category.id} 
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
