"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bath, Bed, ChevronDown, Eye, MapPin, SquarePen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";



export default function PropertiesPage() {

    const [status, setStatus] = useState("All Status");
    const [searchQuery, setSearchQuery] = useState("");

    const properties = [
        {
            status: "available",
            name: "Skyline Tower Penthouse",
            location: "Colombo 07",
            beds: 4,
            baths: 3,
            rent: 250000,
            tenant: null,
        },
        {
            status: "rented",
            name: "Ocean View Apartment 4B",
            location: "Colombo 03",
            beds: 3,
            baths: 2,
            rent: 75000,
            tenant: "Sarah Fernando",
        },
        {
            status: "maintenance",
            name: "Palm Grove Villa",
            location: "Negombo",
            beds: 5,
            baths: 4,
            rent: 180000,
            tenant: "Ruwan Silva",
        },
        {
            status: "rented",
            name: "Sunset Heights Condo",
            location: "Kandy",
            beds: 2,
            baths: 1,
            rent: 55000,
            tenant: "Nethmi Perera",
        },
        {
            status: "available",
            name: "Cinnamon Lakeside Apartment",
            location: "Colombo 02",
            beds: 3,
            baths: 2,
            rent: 120000,
            tenant: null,
        },
        {
            status: "rented",
            name: "Rosewood Residence 5A",
            location: "Galle",
            beds: 2,
            baths: 2,
            rent: 60000,
            tenant: "Amila Jayasinghe",
        },
        {
            status: "available",
            name: "Green Meadows Villa",
            location: "Nugegoda",
            beds: 4,
            baths: 3,
            rent: 95000,
            tenant: null,
        },
        {
            status: "rented",
            name: "Pearl Gardens Apartment 3C",
            location: "Dehiwala",
            beds: 3,
            baths: 2,
            rent: 80000,
            tenant: "Heshan Dias",
        },
        {
            status: "maintenance",
            name: "Maplewood Cottage",
            location: "Nuwara Eliya",
            beds: 3,
            baths: 2,
            rent: 70000,
            tenant: "Indika Fernando",
        },
        {
            status: "rented",
            name: "Harbor View Loft",
            location: "Colombo 01",
            beds: 1,
            baths: 1,
            rent: 45000,
            tenant: "Janani Wickramasinghe",
        },
    ];

    const filteredProperties = properties
        .filter(
            (property) =>
                (status === "All Status" || property.status.toLowerCase() === status.toLowerCase()) &&
                property.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

    return (
        <div className="flex-1 overflow-auto min-h-screen">

            {/* header section */}
            <div className="flex justify-between items-center w-full gap-2 pb-2 p-10">
                <div className="flex flex-col flex-1">
                    <p className="text-2xl font-bold text-neutral-900">Properties</p>
                    <p className="text-neutral-600 text-sm">Manage your property listings</p>
                </div>
                <Button>+ Add Property</Button>
            </div>

            {/* <hr /> */}

            <main className="p-10">

                {/* Header search section */}
                <Card className="p-4 flex flex-row gap-3 shadow-sm border border-neutral-200">
                    <Input
                        placeholder="Search properties..."
                        className="flex-1 py-4"
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="flex items-center gap-2 whitespace-nowrap">
                                {status}
                                <ChevronDown />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuItem onSelect={() => setStatus("All Status")}>All Status</DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => setStatus("Available")}>Available</DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => setStatus("Rented")}>Rented</DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => setStatus("Maintenance")}>Maintenance</DropdownMenuItem>
                        </DropdownMenuContent>

                    </DropdownMenu>
                </Card>
                {/* Header search section */}

                <br />

                {/* Main content */}
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    {filteredProperties.length > 0 ? (
                        filteredProperties.map((property, propertyIndex) => (
                            <Card className="p-0 overflow-hidden flex-1 group" key={propertyIndex}>
                                <div className="relative overflow-hidden max-h-[250px]">
                                    <img
                                        src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"
                                        alt={property.name}
                                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <Badge className="absolute top-3 right-3">{property.status}</Badge>
                                </div>
                                <CardContent className="grow">
                                    <p className="text-lg font-bold">{property.name}</p>
                                    <p className="text-neutral-600 text-sm flex gap-2 mt-2">
                                        <MapPin size={16} /> {property.location}
                                    </p>
                                    <div className="flex gap-4 mt-4 text-neutral-600">
                                        <p className="text-xs flex gap-2"><Bed size={16} /> {property.beds} Bed</p>
                                        <p className="text-xs flex gap-2"><Bath size={16} /> {property.baths} Bath</p>
                                    </div>

                                    <div className="border-t mt-4 pt-3">
                                        <p className="text-teal-600 text-lg font-bold">
                                            Rs {property.rent.toLocaleString()} <span className="text-sm font-normal text-neutral-500">/mo</span>
                                        </p>
                                        {property.tenant && (
                                            <p className="text-sm text-neutral-600 mt-1">
                                                Tenant: <span className="font-medium">{property.tenant}</span>
                                            </p>
                                        )}
                                    </div>
                                </CardContent>
                                <CardFooter className="pb-4">
                                    <div className="flex gap-4 w-full">
                                        <Button variant="outline" className="flex-1"><Eye />View</Button>
                                        <Button variant="outline" className="flex-1"><SquarePen />Edit</Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 text-neutral-500">
                            <p className="text-lg font-medium">No properties found.</p>
                            <p>Try adjusting your search or filter.</p>
                        </div>
                    )}

                </div>
                {/* Main content */}
            </main>
        </div>
    );
}