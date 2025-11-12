"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { DollarSign, Edit, FileText, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function TenantsPage() {

    const tenants = [
        {
            name: "Sarah Fernando",
            property: "Ocean View Apt 301",
            status: "active",
            email: "sarah.fernando@email.com",
            phone: "+94 77 123 4567",
            rent: 75000,
            payment: "Paid",
        },
        {
            name: "Rajesh Kumar",
            property: "City Plaza 12B",
            status: "active",
            email: "rajesh.kumar@email.com",
            phone: "+94 77 234 5678",
            rent: 60000,
            payment: "Pending",
        },
        {
            name: "Amaya Silva",
            property: "Garden Heights 5A",
            status: "inactive",
            email: "amaya.silva@email.com",
            phone: "+94 77 345 6789",
            rent: 85000,
            payment: "Overdue",
        },
        {
            name: "David Perera",
            property: "Beach Villa 7",
            status: "active",
            email: "david.perera@email.com",
            phone: "+94 77 456 7890",
            rent: 120000,
            payment: "Paid",
        },
        {
            name: "Nimal Wickramasinghe",
            property: "Sunset Towers 9C",
            status: "active",
            email: "nimal.wickramasinghe@email.com",
            phone: "+94 77 567 8901",
            rent: 90000,
            payment: "Pending",
        },
        {
            name: "Ayesha Perera",
            property: "Lakeside Residences 4B",
            status: "active",
            email: "ayesha.perera@email.com",
            phone: "+94 77 678 9012",
            rent: 70000,
            payment: "Paid",
        },
    ];

    const [searchQuery, setSearchQuery] = useState("");

    const filteredTenants = tenants.filter((tenant) => {
        return tenant.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <div className="flex-1 overflow-auto min-h-screen">

            {/* header section */}
            <div className="flex justify-between items-center w-full gap-2 pb-2 p-10">
                <div className="flex flex-col flex-1">
                    <p className="text-2xl font-bold text-neutral-900">Tenants</p>
                    <p className="text-neutral-600 text-sm">Manage your tenant relationships</p>
                </div>
                <Button>+ Add Tenant</Button>
            </div>

            <main className="p-10">
                {/* Header search section */}
                <Card className="p-4 flex flex-row gap-3 shadow-sm border border-neutral-200">
                    <Input
                        placeholder="Search tenants..."
                        className="flex-1 py-4"
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </Card>
                {/* Header search section */}


                {/* Grid items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {filteredTenants.map((tenant, tenantIndex) => (
                        <Card key={tenantIndex} className="p-6">
                            <div className="flex gap-4">
                                <div className="rounded-full bg-teal-100 flex justify-center items-center font-semibold text-lg" style={{ width: '48px', height: '48px' }}>SF</div>
                                <div className="grow">
                                    <CardHeader className="p-0 flex justify-between">
                                        <div className="">
                                            <CardTitle>{tenant.name}</CardTitle>
                                            <CardDescription>{tenant.property}</CardDescription>
                                        </div>
                                        <div className=""><Badge>{tenant.status}</Badge></div>
                                    </CardHeader>
                                    <CardContent className="p-0 pt-4">
                                        <div className="flex flex-col gap-2">
                                            <p className="flex gap-2 items-center text-neutral-600 text-sm"><Mail size={14} /> {tenant.email}</p>
                                            <p className="flex gap-2 items-center text-neutral-600 text-sm"><Phone size={14} />{tenant.phone}</p>
                                            <p className="flex gap-2 items-center text-neutral-600 text-sm"><DollarSign size={14} />Rs. {tenant.rent}/mo</p>
                                            <Badge>Payment: {tenant.payment}</Badge>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="p-0 mt-4 gap-2">
                                        <Button variant="outline" size="sm" className="flex-1"><FileText />View Details</Button>
                                        <Button variant="outline" size="sm" className="flex-1"><Edit />Edit</Button>
                                    </CardFooter>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    );
}