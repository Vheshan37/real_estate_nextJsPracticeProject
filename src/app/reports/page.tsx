"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Download } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export default function ReportsPage() {
    const [status, setStatus] = useState("Last month");

    const chartData = [
        { month: "January", desktop: 186, mobile: 80 },
        { month: "February", desktop: 305, mobile: 200 },
        { month: "March", desktop: 237, mobile: 120 },
        { month: "April", desktop: 73, mobile: 190 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "June", desktop: 214, mobile: 140 },
        { month: "July", desktop: 280, mobile: 150 },
        { month: "August", desktop: 240, mobile: 120 },
        { month: "September", desktop: 200, mobile: 160 },
        { month: "October", desktop: 278, mobile: 190 },
        { month: "November", desktop: 189, mobile: 100 },
        { month: "December", desktop: 239, mobile: 150 },
    ]
    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "#2563eb",
        },
        mobile: {
            label: "Mobile",
            color: "#60a5fa",
        },
    } satisfies ChartConfig

    return (
        <div className="flex-1 overflow-auto min-h-screen">

            {/* header section */}
            <div className="flex justify-between items-center w-full gap-2 pb-2 p-10">
                <div className="flex flex-col flex-1">
                    <p className="text-2xl font-bold text-neutral-900">Reports & Analytics</p>
                    <p className="text-neutral-600 text-sm">Track your business performance</p>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="flex items-center gap-2 whitespace-nowrap">
                            {status}
                            <ChevronDown />
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem onSelect={() => setStatus("Last month")}>Last month</DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => setStatus("Last 3 month")}>Last 3 month</DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => setStatus("Last 6 month")}>Last 6 month</DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => setStatus("Last year")}>Last year</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Button><Download /> Export PDF</Button>
            </div>

            {/* <hr /> */}

            <main className="p-10">
                <Card>
                    <ChartContainer config={chartConfig} className="min-h-[200px] w-full max-h-[400px]">
                        <BarChart accessibilityLayer data={chartData}>
                            <CartesianGrid vertical={false} />
                            <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(value) => value.slice(0, 3)} />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <ChartLegend content={<ChartLegendContent />} />
                            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                        </BarChart>
                    </ChartContainer>
                </Card>
            </main>
        </div>
    );
}