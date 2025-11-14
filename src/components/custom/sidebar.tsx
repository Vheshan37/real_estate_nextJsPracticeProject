"use client";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
} from "@/components/ui/sidebar";

import { Building2, Bell, FileText, Settings, Home, Users, DollarSign, BarChart3, Wrench, IdCard, TestTubeDiagonal } from "lucide-react";
import Link from "next/link";

const navItems = [
    { title: "Dashboard", url: "/", icon: Home },
    { title: "Properties", url: "/properties", icon: Building2 },
    { title: "Tenants", url: "/tenants", icon: Users },
    { title: "Payments", url: "/payments", icon: DollarSign },
    { title: "Maintenance", url: "/maintenance", icon: Wrench },
    { title: "Leases", url: "/leases", icon: FileText },
    { title: "Reports", url: "/reports", icon: BarChart3 },
    { title: "Users", url: "/users", icon: Users },
    { title: "Notification", url: "/notification", icon: Bell },
    { title: "Settings", url: "/settings", icon: Settings },
    { title: "Authentication", url: "/authentication", icon: IdCard },
    { title: "Test", url: "/test", icon: TestTubeDiagonal },
];

export default function CustomSideBar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <div className="flex items-center gap-2 border-b px-4 py-2">
                    <div className="bg-neutral-800 p-2 rounded">
                        <Building2 className="text-neutral-100" />
                    </div>
                    <div>
                        <p className="text-base font-semibold">PropertyFlow</p>
                        <p className="text-sm text-neutral-600">Agency Panel</p>
                    </div>
                </div>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {navItems.map((item) => {
                            const Icon = item.icon
                            return (
                                <SidebarMenuItem key={item.url}>
                                    <SidebarMenuButton asChild className="data-[active=true]:bg-neutral-300 text-neutral-700 hover:text-teal-700 font-medium">
                                        <Link href={item.url}>
                                            <Icon className="h-4 w-4" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )
                        })}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t p-4 text-sm text-neutral-600">
                Footer content
            </SidebarFooter>
        </Sidebar>
    );
}