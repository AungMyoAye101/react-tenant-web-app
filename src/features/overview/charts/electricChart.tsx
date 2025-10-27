import React from 'react'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { type ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
    { month: "January", desktop: 86, unit: 80 },
    { month: "February", desktop: 35, unit: 150 },
    { month: "March", desktop: 100, unit: 120 },
    { month: "May", desktop: 20, unit: 100 },

]


const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#2563eb",
    },
} satisfies ChartConfig

const ElectricChart = () => {
    return (
        <div className='bg-white w-xl p-6 rounded-lg shadow space-y-4'>
            <div>

                <p>Last 4 months electricity consumption</p>
                <h5>Usage Trends</h5>
            </div>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey={"month"}
                        tickMargin={10}
                    />
                    <YAxis
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />

                </BarChart>
            </ChartContainer>
            <div className='px-4  text-sm'>
                <div className='flex justify-between gap-4'>
                    <p>
                        Jun Electric Usage
                    </p>
                    <p>
                        80 unit
                    </p>
                </div>
                <div className='flex justify-between gap-4'>
                    <p>
                        Jun Electric Usage
                    </p>
                    <p>
                        80 unit
                    </p>
                </div>
                <div className='flex justify-between gap-4'>
                    <p>
                        Jun Electric Usage
                    </p>
                    <p>
                        80 unit
                    </p>
                </div>
                <div className='flex justify-between gap-4'>
                    <p>
                        Jun Electric Usage
                    </p>
                    <p>
                        80 unit
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ElectricChart