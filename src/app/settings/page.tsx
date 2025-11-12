"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Building2, CreditCard, Save, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"


export default function SettingsPage() {

    const [paymentOption, setPaymentOption] = useState("payhere");

    return (
        <div className="flex-1 overflow-auto min-h-screen">
            <div className="grid grid-cols-12">
                <div className="col-start-3 col-span-8 p-6">



                    {/* header section */}
                    <div className="flex justify-between items-center w-full gap-2 pb-2 p-10">
                        <div className="flex flex-col flex-1">
                            <p className="text-2xl font-bold text-neutral-900">Settings</p>
                            <p className="text-neutral-600 text-sm">Manage your agency preferences and configurations</p>
                        </div>
                    </div>

                    {/* <hr /> */}

                    <main className="p-10">

                        <Tabs defaultValue="agency" className="">
                            <TabsList className="w-full">
                                <TabsTrigger value="agency">Agency</TabsTrigger>
                                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                                <TabsTrigger value="payments">Payments</TabsTrigger>
                                <TabsTrigger value="subscription">Subscription</TabsTrigger>
                            </TabsList>
                            <TabsContent value="agency">
                                <Card>
                                    <CardHeader className="gap-1">
                                        <div className="flex gap-2 items-center">
                                            <Building2 className="text-teal-500" />
                                            <CardTitle>Agency Profile</CardTitle>
                                        </div>
                                        <CardDescription>Update your agency information</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex gap-6 flex-col">
                                        <div className="flex gap-6">
                                            <div className="flex flex-col gap-2 flex-1">
                                                <Label htmlFor="agency">Agency Name</Label>
                                                <Input id="agency" />
                                            </div>
                                            <div className="flex flex-col gap-2 flex-1">
                                                <Label htmlFor="registration">Registration Number</Label>
                                                <Input id="registration" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2 flex-1">
                                            <Label htmlFor="address">Address</Label>
                                            <Input id="address" />
                                        </div>
                                        <div className="flex gap-6">
                                            <div className="flex flex-col gap-2 flex-1">
                                                <Label htmlFor="phone">Phone Number</Label>
                                                <Input id="phone" />
                                            </div>
                                            <div className="flex flex-col gap-2 flex-1">
                                                <Label htmlFor="email">Email</Label>
                                                <Input id="email" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2 flex-1">
                                            <Label htmlFor="website">Website</Label>
                                            <Input id="website" />
                                        </div>
                                        <Button><Save /> Save Changes</Button>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            {/* Separator */}
                            <TabsContent value="notifications">
                                <Card>
                                    <CardHeader className="gap-1">
                                        <div className="flex gap-2 items-center">
                                            <Bell className="text-teal-500" />
                                            <CardTitle>Notification Preferences</CardTitle>
                                        </div>
                                        <CardDescription>Manage how you receive notifications</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex gap-6 flex-col">
                                        <div className="w-full flex justify-between border-b pb-4 items-center">
                                            <div className="">
                                                <div className="text-base">Email Notifications</div>
                                                <div className="text-sm text-neutral-500">Receive updates via email</div>
                                            </div>
                                            <Switch />
                                        </div>
                                        <div className="w-full flex justify-between border-b pb-4 items-center">
                                            <div className="">
                                                <div className="text-base">SMS Notifications</div>
                                                <div className="text-sm text-neutral-500">Receive updates via SMS</div>
                                            </div>
                                            <Switch />
                                        </div>
                                        <div className="w-full flex justify-between border-b pb-4 items-center">
                                            <div className="">
                                                <div className="text-base">Payment Reminders</div>
                                                <div className="text-sm text-neutral-500">Automatic rent payment reminders</div>
                                            </div>
                                            <Switch />
                                        </div>
                                        <div className="w-full flex justify-between border-b pb-4 items-center">
                                            <div className="">
                                                <div className="text-base">Maintenance Alerts</div>
                                                <div className="text-sm text-neutral-500">Get notified of new maintenance requests</div>
                                            </div>
                                            <Switch />
                                        </div>
                                        <Button><Save /> Save Preferences</Button>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="payments">
                                <Card>
                                    <CardHeader className="gap-1">
                                        <div className="flex gap-2 items-center">
                                            <CreditCard className="text-teal-500" />
                                            <CardTitle>Payment Gateway Integration</CardTitle>
                                        </div>
                                        <CardDescription>Configure payment methods for tenants</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex gap-6 flex-col">
                                        <div className="flex flex-col gap-2">
                                            <Label>Default Payment Gateway</Label>
                                            <Select value={paymentOption}
                                                onValueChange={(value) => setPaymentOption(value)}>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="payhere">PayHere (Sri Lanka)</SelectItem>
                                                    <SelectItem value="stripe">Stripe</SelectItem>
                                                    <SelectItem value="bank">Bank Transfer</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <Separator />

                                        <p className="text-lg font-semibold">PayHere Configuration</p>
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="merchantId">Merchant ID</Label>
                                            <Input id="merchantId" placeholder="Enter Payhere Merchant ID" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="secretId">Merchant Secret</Label>
                                            <Input id="secretId" placeholder="********" type="password" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <Label htmlFor="bank">Bank Account Details</Label>
                                            <Input id="bank" placeholder="Bank Name, Account Number, Branch" />
                                        </div>
                                        <Button><Save /> Save Payment Settings</Button>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="subscription">
                                <Card>
                                    <CardHeader className="gap-1">
                                        <div className="flex gap-2 items-center">
                                            <Shield className="text-teal-500" />
                                            <CardTitle>Subscription Plan</CardTitle>
                                        </div>
                                        <CardDescription>Manage your PropertyFlow subscription</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex gap-4 flex-col">
                                        <Card className="shadow-none gap-2 bg-teal-50 border border-teal-400">
                                            <CardHeader className="flex justify-between">
                                                <CardTitle>Professional Plan</CardTitle>
                                                <Badge className="bg-teal-400">Active</Badge>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-2xl text-teal-500 font-black">Rs 25,000/month</p>
                                                <p className="text-sm text-neutral-500">Billed monthly • Next billing: Dec 15, 2024</p>
                                            </CardContent>
                                        </Card>
                                        <div className="flex flex-col gap-2">
                                            <div className="text-lg font-semibold">Plan Features:</div>
                                            <ul className="flex flex-col gap-1 text-neutral-500">
                                                {[
                                                    "Unlimited Properties",
                                                    "Up to 10 Team Members",
                                                    "Advanced Analytics & Reports",
                                                    "Payment Gateway Integration",
                                                    "Priority Support",
                                                ].map((feature) => (
                                                    <li key={feature} className="flex items-center gap-2">
                                                        {/* Bullet */}
                                                        <span className="inline-block w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                                                        {/* Text */}
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <Separator />

                                        <div className="flex gap-4">
                                            <Button variant={"outline"} className="flex-1">Change Plan</Button>
                                            <Button variant={"outline"} className="flex-1">View Invoices</Button>

                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>

                    </main>

                </div>
            </div>
        </div>
    );
}