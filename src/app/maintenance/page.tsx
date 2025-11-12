"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { ChevronDown, CircleAlert} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function PaymentPage() {

    const summaryCards = [
        { title: "Total Requests", value: "4" },
        { title: "Pending", value: "2" },
        { title: "In Progress", value: "1" },
        { title: "Completed", value: "1" },
    ];

    const maintenanceRequests = [
        { id: "MR-001", title: "Air conditioning not working", property: "Ocean View Apt 301", tenant: "Sarah Fernando", submitted: "2 hours ago", assignedTo: "AC Tech Solutions", status: "in-progress" },
        { id: "MR-002", title: "Leaking faucet in kitchen", property: "City Plaza 12B", tenant: "Rajesh Kumar", submitted: "1 day ago", assignedTo: "PlumbRight Services", status: "pending" },
        { id: "MR-003", title: "Broken window in living room", property: "Garden Heights 5A", tenant: "Amaya Silva", submitted: "3 days ago", assignedTo: "GlassFix Co.", status: "completed" },
        { id: "MR-004", title: "Heating system not working", property: "Beach Villa 7", tenant: "David Perera", submitted: "5 hours ago", assignedTo: "HeatWave Solutions", status: "pending" },
    ];

    const [status, setStatus] = useState("All Status");

    const filteredMaintenanceRequests = maintenanceRequests.filter((request) => {
        return (status === "All Status" || request.status === status);
    });

    return (
        <div className="flex-1 overflow-auto min-h-screen">

            {/* header section */}
            <div className="flex justify-between items-center w-full gap-2 pb-2 p-10">
                <div className="flex flex-col flex-1">
                    <p className="text-2xl font-bold text-neutral-900">Maintenance Requests</p>
                    <p className="text-neutral-600 text-sm">Track and manage property maintenance</p>
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
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="flex items-center py-6 gap-2 whitespace-nowrap">
                                {status}
                                <ChevronDown />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuItem onSelect={() => setStatus("All Status")}>All Status</DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => setStatus("in-progress")}>In-Progress</DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => setStatus("pending")}>Pending</DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => setStatus("completed")}>Completed</DropdownMenuItem>
                        </DropdownMenuContent>

                    </DropdownMenu>
                </Card>
                {/* Header search section */}

                {/* Payment List */}
                <Card className="mt-6">
                    <CardHeader>
                        <CardTitle>Payment Records</CardTitle>
                    </CardHeader>

                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredMaintenanceRequests.map((request, requestIndex) => (
                            <Card className="shadow-none mb-4" key={requestIndex}>
                                <CardHeader>
                                    <div className="flex justify-between">
                                        <div className="flex items-center gap-4">
                                            <CircleAlert />
                                            <div className="">
                                                <div className="text-lg font-semibold">{request.title}</div>
                                                <div className="text-sm text-neutral-600">{request.id}</div>
                                            </div>
                                        </div>
                                        <Badge className="py-1 px-2 m-0 h-fit">{request.status}</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="">
                                    <div className="flex flex-col gap-4">
                                        <p className="text-base font-semibold flex flex-col text-neutral-900"><span className="text-sm font-normal text-neutral-600">Property</span> {request.property}</p>
                                        <p className="text-base font-semibold flex flex-col text-neutral-900"><span className="text-sm font-normal text-neutral-600">Tenant</span> {request.tenant}</p>
                                        <p className="text-base font-semibold flex flex-col text-neutral-900"><span className="text-sm font-normal text-neutral-600">Submitted</span> {request.submitted}</p>
                                        <p className="text-base font-semibold flex flex-col text-neutral-900"><span className="text-sm font-normal text-neutral-600">Assigned To</span> {request.assignedTo}</p>
                                    </div>
                                    {request.status != "completed" ? (
                                        <Button className="mt-4 w-full">{request.status === "pending" ? "Assign Vendor" : "Mark Completed"}</Button>
                                    ): null}
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