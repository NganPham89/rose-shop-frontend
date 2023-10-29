import getBillboard from "@/action/get-billboard";
import getProducts from "@/action/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {

    const billboard = await getBillboard("5a2dc261-e0a9-4d99-8853-fec669c4bb81");
    const products = await getProducts({ isFeatured: true });
    // console.log(billboard)
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    )
}

export default HomePage;