"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { ChevronDown, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function PaymentPage() {

    const summaryCards = [
        { title: "Total Leases", value: "5" },
        { title: "Active", value: "3" },
        { title: "Expiring Soon", value: "1" },
        { title: "Expired", value: "1" },
    ];

    const payments = [
        { name: "Sarah Fernando", status: "Paid", property: "Ocean View Apt 301", paymentId: "PAY-001", amount: "Rs 75,000", month: "November 2024", paidDate: "2024-11-01" },
        { name: "Rajesh Kumar", status: "Pending", property: "City Plaza 12B", paymentId: "PAY-002", amount: "Rs 60,000", month: "November 2024", paidDate: "2024-11-01" },
        { name: "Amaya Silva", status: "Overdue", property: "Garden Heights 5A", paymentId: "PAY-003", amount: "Rs 85,000", month: "October 2024", paidDate: "2024-11-01" },
        { name: "David Perera", status: "Paid", property: "Beach Villa 7", paymentId: "PAY-004", amount: "Rs 120,000", month: "November 2024", paidDate: "2024-11-03" },
        { name: "Nimal Wickramasinghe", status: "Pending", property: "Sunset Towers 9C", paymentId: "PAY-005", amount: "Rs 90,000", month: "November 2024", paidDate: "2024-11-01" },
        { name: "Ayesha Perera", status: "Paid", property: "Lakeside Residences 4B", paymentId: "PAY-006", amount: "Rs 70,000", month: "November 2024", paidDate: "2024-11-02" },
        { name: "Kamal Silva", status: "Overdue", property: "Hilltop Apartments 2A", paymentId: "PAY-007", amount: "Rs 65,000", month: "October 2024", paidDate: "2024-11-01" },
        { name: "Ruwan Silva", status: "Paid", property: "Palm Grove Villa", paymentId: "PAY-008", amount: "Rs 180,000", month: "November 2024", paidDate: "2024-11-04" },
        { name: "John Doe", status: "Pending", property: "Sunset Heights Condo", paymentId: "PAY-009", amount: "Rs 110,000", month: "November 2024", paidDate: "2024-11-01" },
    ];

    const [status, setStatus] = useState("All Status");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPayments = payments.filter((payment) => {
        return (status === "All Status" || payment.status === status) && payment.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <div className="flex-1 overflow-auto min-h-screen">

            {/* header section */}
            <div className="flex justify-between items-center w-full gap-2 pb-2 p-10">
                <div className="flex flex-col flex-1">
                    <p className="text-2xl font-bold text-neutral-900">Lease & Contract Management</p>
                    <p className="text-neutral-600 text-sm">Manage all lease agreements and renewals</p>
                </div>
            </div>
            
            <main className="p-10">
                <div className="flex gap-4">
                    {summaryCards.map((summaryCard, index) => (
                        <Card key={index} className="flex-1 p-4">
                            <CardContent>
                                <p className="text-sm text-neutral-600">{summaryCard.title}</p>
                                <p className="text-2xl font-bold text-neutral-900 mt-2">{summaryCard.value}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Header search section */}
                <Card className="p-4 mt-6 flex flex-row gap-3 shadow-sm border border-neutral-200">
                    <Input
                        placeholder="Search properties..."
                        className="flex-1 py-6"
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="flex items-center py-6 gap-2 whitespace-nowrap">
                                {status}
                                <ChevronDown />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuItem onSelect={() => setStatus("All Status")}>All Status</DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => setStatus("Paid")}>Paid</DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => setStatus("Pending")}>Pending</DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => setStatus("Overdue")}>Overdue</DropdownMenuItem>
                        </DropdownMenuContent>

                    </DropdownMenu>
                </Card>
                {/* Header search section */}


                {/* Payment List */}
                <Card className="mt-6">
                    <CardHeader>
                        <CardTitle>Payment Records</CardTitle>
                    </CardHeader>

                    <CardContent>
                        {filteredPayments.map((payment, paymentIndex) => (
                            <Card className="shadow-none mb-4" key={paymentIndex}>
                                <CardContent className="flex justify-between">
                                    <div className="">
                                        <p className="text-xl font-bold flex items-center gap-4">{payment.name} <Badge>{payment.status}</Badge></p>
                                        <p className="text-sm">{payment.property}</p>
                                        <p className="text-sm">{payment.paymentId}</p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="">
                                            <p className="text-xl font-bold">{payment.amount}</p>
                                            <p className="text-sm">{payment.month}</p>
                                            <p className="text-sm">{payment.paidDate}</p>
                                        </div>
                                        <Button variant={payment.status === "Paid" ? "outline" : "default"}>
                                            {payment.status === "Paid" ? <Download /> : null}
                                            {payment.status === "Paid" ? "Receipt" : "Send Reminder"}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </CardContent>
                </Card>
                {/* Payment List */}

            </main>
        </div>
    );
}