"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent} from "@/components/ui/card";
import { Check, CircleCheck, CircleX, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NotificationsPage() {

    const summaryCards = [
        { title: "Total", value: "6" },
        { title: "Unread", value: "3" },
        { title: "High Priority", value: "2" },
    ];

    const notifications = [
        { title: "Overdue Payment", read: true, status: "payments", priority: "High", message: "Rajesh Kumar has an overdue payment of Rs 55,000 for November 2024", time: "2 hours ago" },
        { title: "New Lease Signed", read: true, status: "maintenance", priority: "Medium", message: "Sarah Fernando signed a new lease for Ocean View Apt 301", time: "1 day ago" },
        { title: "Maintenance Request", read: true, status: "leases", priority: "Low", message: "Amaya Silva submitted a maintenance request for Garden Heights 5A", time: "3 days ago" },
        { title: "Payment Received", read: false, status: "leases", priority: "Low", message: "David Perera made a payment of Rs 120,000 for Beach Villa 7", time: "5 days ago" },
        { title: "Lease Renewal", read: false, status: "maintenance", priority: "Medium", message: "Nimal Wickramasinghe renewed the lease for Sunset Towers 9C", time: "1 week ago" },
        { title: "New Payment Method", read: false, status: "payments", priority: "Low", message: "Ayesha Perera added a new payment method for Lakeside Residences 4B", time: "2 weeks ago" },
    ];

    const [status, setStatus] = useState("all");

    const filteredPayments = notifications.filter((notifications) => {
        return status === "all" || notifications.status === status || status === (!notifications.read ? "unread" : null);
    });

    const sortedNotifications = filteredPayments.sort((a, b) => {
        // unread first
        if (a.read === b.read) return 0;
        return a.read ? 1 : -1; // if a.read = true, push after b
    });

    return (
        <div className="flex-1 overflow-y-scroll min-h-screen">
            <div className="grid grid-cols-12">
                <div className="col-start-3 col-span-8 p-6">

                    {/* header section */}
                    <div className="flex justify-between items-center w-full gap-2 pb-2 p-10">
                        <div className="flex flex-col flex-1">
                            <p className="text-2xl font-bold text-neutral-900">Notification Center</p>
                            <p className="text-neutral-600 text-sm">Stay updated with important alerts</p>
                        </div>
                        <Button variant={"outline"}><Check />Mark All Read</Button>
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

                        <Tabs defaultValue="all" className="mt-6" onValueChange={(value) => { setStatus(value) }}>
                            <TabsList>
                                <TabsTrigger value="all" className="px-6">All</TabsTrigger>
                                <TabsTrigger value="unread" className="px-6">Unread</TabsTrigger>
                                <TabsTrigger value="payments" className="px-6">Payments</TabsTrigger>
                                <TabsTrigger value="maintenance" className="px-6">Maintenance</TabsTrigger>
                                <TabsTrigger value="leases" className="px-6">Leases</TabsTrigger>
                            </TabsList>
                            <TabsContent value="all" className="flex flex-col gap-4 mt-4">
                                {sortedNotifications.map((notification, notificationIndex) => (
                                    <Card key={notificationIndex}>
                                        <CardContent className="flex justify-between">
                                            <div className="flex gap-4">
                                                <DollarSign />
                                                <div className="">
                                                    <p className="text-base font-semibold flex items-center gap-2">{notification.title} {!notification.read ? <Badge>New</Badge> : null}</p>
                                                    <p className="text-sm text-neutral-600 font-medium">{notification.message}</p>
                                                    <p className="text-sm text-neutral-600">{notification.time}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex gap-2">
                                                    <CircleCheck className="text-neutral-500" />
                                                    <CircleX className="text-neutral-500" />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </TabsContent>
                            <TabsContent value="unread" className="flex flex-col gap-4 mt-4">
                                {filteredPayments.map((notification, notificationIndex) => (
                                    <Card key={notificationIndex}>
                                        <CardContent className="flex justify-between">
                                            <div className="flex gap-4">
                                                <DollarSign />
                                                <div className="">
                                                    <p className="text-base font-semibold flex items-center gap-2">{notification.title} {!notification.read ? <Badge>New</Badge> : null}</p>
                                                    <p className="text-sm text-neutral-600 font-medium">{notification.message}</p>
                                                    <p className="text-sm text-neutral-600">{notification.time}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex gap-2">
                                                    <CircleCheck className="text-neutral-500" />
                                                    <CircleX className="text-neutral-500" />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}</TabsContent>
                            <TabsContent value="payments" className="flex flex-col gap-4 mt-4">
                                {filteredPayments.map((notification, notificationIndex) => (
                                    <Card key={notificationIndex}>
                                        <CardContent className="flex justify-between">
                                            <div className="flex gap-4">
                                                <DollarSign />
                                                <div className="">
                                                    <p className="text-base font-semibold flex items-center gap-2">{notification.title} {!notification.read ? <Badge>New</Badge> : null}</p>
                                                    <p className="text-sm text-neutral-600 font-medium">{notification.message}</p>
                                                    <p className="text-sm text-neutral-600">{notification.time}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex gap-2">
                                                    <CircleCheck className="text-neutral-500" />
                                                    <CircleX className="text-neutral-500" />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}</TabsContent>
                            <TabsContent value="maintenance" className="flex flex-col gap-4 mt-4">
                                {filteredPayments.map((notification, notificationIndex) => (
                                    <Card key={notificationIndex}>
                                        <CardContent className="flex justify-between">
                                            <div className="flex gap-4">
                                                <DollarSign />
                                                <div className="">
                                                    <p className="text-base font-semibold flex items-center gap-2">{notification.title} {!notification.read ? <Badge>New</Badge> : null}</p>
                                                    <p className="text-sm text-neutral-600 font-medium">{notification.message}</p>
                                                    <p className="text-sm text-neutral-600">{notification.time}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex gap-2">
                                                    <CircleCheck className="text-neutral-500" />
                                                    <CircleX className="text-neutral-500" />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}</TabsContent>
                            <TabsContent value="leases" className="flex flex-col gap-4 mt-4">
                                {filteredPayments.map((notification, notificationIndex) => (
                                    <Card key={notificationIndex}>
                                        <CardContent className="flex justify-between">
                                            <div className="flex gap-4">
                                                <DollarSign />
                                                <div className="">
                                                    <p className="text-base font-semibold flex items-center gap-2">{notification.title} {!notification.read ? <Badge>New</Badge> : null}</p>
                                                    <p className="text-sm text-neutral-600 font-medium">{notification.message}</p>
                                                    <p className="text-sm text-neutral-600">{notification.time}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex gap-2">
                                                    <CircleCheck className="text-neutral-500" />
                                                    <CircleX className="text-neutral-500" />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}</TabsContent>
                        </Tabs>


                    </main>

                </div>
            </div>
        </div>
    );
}