import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PricingCards from "@/components/pricing-cards";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Pricing Section */}
        <section id="pricing" className="bg-muted/50 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing
              </h2>
              <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Choose the plan that works for you
              </p>
            </div>
            <Tabs defaultValue="monthly" className="w-full max-w-full mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly (Save 65%)</TabsTrigger>
              </TabsList>
              <TabsContent value="monthly">
                <PricingCards interval="monthly" />
              </TabsContent>
              <TabsContent value="yearly">
                <PricingCards interval="yearly" />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  );
}
