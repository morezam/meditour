import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign } from "lucide-react";

interface PriceComparisonProps {
  procedures?: Array<{
    name: string;
    priceIran: number;
    priceUS: number;
    priceUK: number;
    priceUAE: number;
  }>;
  onLearnMore?: () => void;
}

const PriceComparison = ({
  procedures = [
    {
      name: "Dental Implants",
      priceIran: 800,
      priceUS: 3500,
      priceUK: 2800,
      priceUAE: 2000,
    },
    {
      name: "Knee Replacement",
      priceIran: 4500,
      priceUS: 35000,
      priceUK: 28000,
      priceUAE: 18000,
    },
    {
      name: "Hair Transplant",
      priceIran: 2000,
      priceUS: 15000,
      priceUK: 12000,
      priceUAE: 8000,
    },
  ],
  onLearnMore = () => console.log("Learn more clicked"),
}: PriceComparisonProps) => {
  const { t } = useLanguage();

  return (
    <section className="w-full py-24 bg-gradient-to-br from-accent to-accent/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-right mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-l from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
            {t("priceComparison.title")}
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed max-w-3xl mr-auto">
            {t("priceComparison.subtitle")}
          </p>
        </div>

        <Card className="w-full bg-card/50 backdrop-blur-sm border-border shadow-xl rounded-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-l from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white p-8">
            <CardTitle className="text-right text-2xl font-bold">
              {t("priceComparison.tableTitle")}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-accent/50">
                    <TableHead className="text-right font-bold text-foreground">
                      {t("priceComparison.procedure")}
                    </TableHead>
                    <TableHead className="text-center font-bold text-foreground">
                      {t("priceComparison.iran")}
                    </TableHead>
                    <TableHead className="text-center font-bold text-foreground">
                      {t("priceComparison.usa")}
                    </TableHead>
                    <TableHead className="text-center font-bold text-foreground">
                      {t("priceComparison.uk")}
                    </TableHead>
                    <TableHead className="text-center font-bold text-foreground">
                      {t("priceComparison.uae")}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {procedures.map((procedure, index) => (
                    <TableRow key={index} className="hover:bg-accent/50">
                      <TableCell className="text-right font-medium text-foreground">
                        {procedure.name}
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center gap-1 text-green-600 dark:text-green-400 font-semibold">
                          <DollarSign className="h-4 w-4" />
                          {procedure.priceIran.toLocaleString()}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center gap-1 text-muted-foreground">
                          <DollarSign className="h-4 w-4" />
                          {procedure.priceUS.toLocaleString()}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center gap-1 text-muted-foreground">
                          <DollarSign className="h-4 w-4" />
                          {procedure.priceUK.toLocaleString()}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center gap-1 text-muted-foreground">
                          <DollarSign className="h-4 w-4" />
                          {procedure.priceUAE.toLocaleString()}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="mt-8 flex justify-end">
              <Button
                onClick={onLearnMore}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 px-8 flex items-center gap-2 text-lg"
              >
                {t("priceComparison.learnMore")}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PriceComparison;
