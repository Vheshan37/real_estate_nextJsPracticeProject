"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react";
import { EllipsisVertical, Mail, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function PaymentPage() {

    const summaryCards = [
        { title: "Total Users", value: "5" },
        { title: "Admins", value: "3" },
        { title: "Active", value: "1" },
        { title: "Inactive", value: "1" },
    ];

    const users = [
        { name: "Sarah Fernando", role: "Admin", email: "sarah.fernando@propertyflow.lk", phone: "+94 77 123 4567", joinedDate: "15/05/2023", status: "active" },
        { name: "Rajesh Kumar", role: "Agent", email: "rajesh.kumar@propertyflow.lk", phone: "+94 71 234 5678", joinedDate: "22/07/2023", status: "inactive" },
        { name: "Amaya Silva", role: "Agent", email: "amaya.silva@propertyflow.lk", phone: "+94 76 345 6789", joinedDate: "03/03/2024", status: "active" },
        { name: "David Perera", role: "Staff", email: "david.perera@propertyflow.lk", phone: "+94 72 456 7890", joinedDate: "11/01/2024", status: "active" },
        { name: "Nimal Wickramasinghe", role: "Admin", email: "nimal.wickramasinghe@propertyflow.lk", phone: "+94 75 567 8901", joinedDate: "29/08/2023", status: "active" },
        { name: "Ayesha Perera", role: "Agent", email: "ayesha.perera@propertyflow.lk", phone: "+94 70 678 9012", joinedDate: "14/09/2023", status: "inactive" },
        { name: "Kamal Fernando", role: "Staff", email: "kamal.fernando@propertyflow.lk", phone: "+94 77 789 0123", joinedDate: "21/10/2023", status: "active" },
        { name: "Priya Jayasinghe", role: "Agent", email: "priya.jayasinghe@propertyflow.lk", phone: "+94 78 890 1234", joinedDate: "05/12/2023", status: "active" },
        { name: "Rohan Dias", role: "Staff", email: "rohan.dias@propertyflow.lk", phone: "+94 71 901 2345", joinedDate: "19/11/2023", status: "inactive" },
        { name: "Shanika Perera", role: "Admin", email: "shanika.perera@propertyflow.lk", phone: "+94 76 012 3456", joinedDate: "02/01/2024", status: "active" },
        { name: "Chamara Silva", role: "Manager", email: "chamara.silva@propertyflow.lk", phone: "+94 71 111 2233", joinedDate: "12/02/2024", status: "active" },
        { name: "Nirosha Jayawardena", role: "Staff", email: "nirosha.jayawardena@propertyflow.lk", phone: "+94 72 222 3344", joinedDate: "03/03/2024", status: "active" },
        { name: "Lasith Fernando", role: "Agent", email: "lasith.fernando@propertyflow.lk", phone: "+94 73 333 4455", joinedDate: "18/03/2024", status: "inactive" },
        { name: "Dilani Perera", role: "Staff", email: "dilani.perera@propertyflow.lk", phone: "+94 74 444 5566", joinedDate: "25/03/2024", status: "active" },
        { name: "Tharindu Senanayake", role: "Manager", email: "tharindu.senanayake@propertyflow.lk", phone: "+94 75 555 6677", joinedDate: "30/03/2024", status: "inactive" },
        { name: "Shanuka Wijesinghe", role: "Staff", email: "shanuka.wijesinghe@propertyflow.lk", phone: "+94 76 666 7788", joinedDate: "07/04/2024", status: "active" },
        { name: "Madhawa Dias", role: "Agent", email: "madhawa.dias@propertyflow.lk", phone: "+94 77 777 8899", joinedDate: "14/04/2024", status: "active" },
        { name: "Pavithra Amarasinghe", role: "Staff", email: "pavithra.amarasinghe@propertyflow.lk", phone: "+94 78 888 9900", joinedDate: "22/04/2024", status: "inactive" },
        { name: "Ravindra Perera", role: "Manager", email: "ravindra.perera@propertyflow.lk", phone: "+94 79 999 0011", joinedDate: "01/05/2024", status: "active" },
        { name: "Iresha Fernando", role: "Staff", email: "iresha.fernando@propertyflow.lk", phone: "+94 70 101 1122", joinedDate: "08/05/2024", status: "inactive" },
    ];

    const [userRole, setUserRole] = useState("All Roles");

    const filteredPayments = users.filter((users) => {
        return (users.role === userRole || userRole === "All Roles");
    });

    return (
        <div className="flex-1 overflow-auto min-h-screen">

            {/* header section */}
            <div className="flex justify-between items-center w-full gap-2 pb-2 p-10">
                <div className="flex flex-col flex-1">
                    <p className="text-2xl font-bold text-neutral-900">User & Role Management</p>
                    <p className="text-neutral-600 text-sm">Manage team members and permissions</p>
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

                    <Select value={userRole}
                        onValueChange={(value) => setUserRole(value)}>
                        <SelectTrigger className="w-[200px]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="All Roles">All Roles</SelectItem>
                            <SelectItem value="Admin">Admin</SelectItem>
                            <SelectItem value="Manager">Manager</SelectItem>
                            <SelectItem value="Agent">Agent</SelectItem>
                            <SelectItem value="Staff">Staff</SelectItem>
                        </SelectContent>
                    </Select>
                </Card>
                {/* Header search section */}

                <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-6">
                    {/* Payment List */}
                    {filteredPayments.map((payment, paymentIndex) => (
                        <Card className="shadow-none gap-2 p-2 py-4" key={paymentIndex}>
                            <CardContent className="p-0">
                                <CardHeader className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-teal-100 rounded-full text-teal-700 text-lg font-bold flex justify-center items-center" style={{ width: "56px", height: "56px" }}>VH</div>
                                        <div className="">
                                            <p className="text-base font-semibold">{payment.name}</p>
                                            <Badge>{payment.role}</Badge>
                                        </div>
                                    </div>
                                    <EllipsisVertical className="text-neutral-500" />
                                </CardHeader>
                                <CardContent className="mt-4 text-neutral-500 text-sm flex flex-col gap-2">
                                    <div className="flex items-center gap-3">
                                        <Mail size={16} />
                                        <span>{payment.email}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone size={16} />
                                        <span>{payment.phone}</span>
                                    </div>
                                </CardContent>
                                <Separator className="my-3" />
                                <CardFooter className="flex justify-between">
                                    <p className="text-sm text-neutral-500">Joined Date: {payment.joinedDate}</p>
                                    <Badge>{payment.status}</Badge>
                                </CardFooter>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                {/* Payment List */}

            </main>
        </div>
    );
}