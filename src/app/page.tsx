"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Calendar, Wrench } from "lucide-react";

export default function Home() {
  const cardItems = [
    { title: "Total Properties", content: "+12% from last month", value: 1200 },
    { title: "Active Tenants", content: "+8% from last month", value: 1200 },
    { title: "Monthly Revenue", content: "+5% from last month", value: 1200 },
    { title: "Occupancy Rate", content: "+10% from last month", value: 1200 },
  ];

  const recentActivities = [
    { name: 'Sarah Fernando', property: 'Ocean View Apt 301', activity: 'Paid rent', time: '2 hours ago' },
    { name: 'Rajesh Kumar', property: 'City Plaza 12B', activity: 'Maintenance request', time: '4 hours ago' },
    { name: 'Amaya Silva', property: 'Garden Heights 5A', activity: 'Lease renewal', time: '5 hours ago' },
    { name: 'David Perera', property: 'Beach Villa 7', activity: 'Paid rent', time: '1 day ago' },
  ];

  const maintenanceRequests = [
    { id: 'MR-001', priority: 'high', assigned: true, property: 'Ocean View Apt 301', issue: 'Air conditioning not working', time: '2 hours ago' },
    { id: 'MR-002', priority: 'medium', assigned: false, property: 'City Plaza 12B', issue: 'Leaking faucet', time: '4 hours ago' },
    { id: 'MR-003', priority: 'low', assigned: false, property: 'Garden Heights 5A', issue: 'Door lock needs replacement', time: '1 day ago' },
    { id: 'MR-004', priority: 'high', assigned: true, property: 'Beach Villa 7', issue: 'Plumbing issues', time: '2 days ago' },
  ];

  const upcomingLeases = [
    { tenant: 'Nimal Wickramasinghe', property: 'Sunset Towers 9C', daysLeft: 15 },
    { tenant: 'Ayesha Perera', property: 'Lakeside Residences 4B', daysLeft: 20 },
    { tenant: 'Kamal Silva', property: 'Hilltop Apartments 2A', daysLeft: 25 },
  ];

  return (


    <div className="flex-1 overflow-auto min-h-screen">

      {/* header section */}
      <div className="flex justify-between items-center w-full gap-2 pb-2 p-10">
        <div className="flex flex-col flex-1">
          <p className="text-2xl font-bold text-neutral-900">Agency Dashboard</p>
          <p className="text-neutral-600 text-sm">Welcome back! Here's your property overview.</p>
        </div>
        <Button>+ Add Property</Button>
      </div>

      <main className="p-10">

        {/* Card section */}
        <div className="flex w-full gap-4">
          {cardItems.map((item, index) => (
            // <div>{item.title}</div>
            <Card key={index} className="flex-1">
              <CardHeader>
                <CardDescription className="flex justify-between">{item.title}
                  <Building />
                </CardDescription>
                <CardTitle>123</CardTitle>
                {/* <CardDescription>Total Properties</CardDescription> */}
              </CardHeader>
              <CardContent>
                <p className="text-teal-600 text-sm">{item.content}</p>
              </CardContent>
              {/* <CardFooter>
            <button className="btn">Action</button>
            </CardFooter> */}
            </Card>
          ))}
        </div>



        {/* Recent activities & maintenance requests */}
        <div className="flex mt-4 gap-4">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="flex gap-1 items-center">
                <Calendar />
                <span>Recent Activities</span>
              </CardTitle>
              <CardDescription>Latest tenant and property updates</CardDescription>
            </CardHeader>

            {/* Recent Activities */}
            <CardContent>
              {recentActivities.map((activitieItem, activitieIndex) => (
                <div className={`
                    flex items-start justify-between gap-3 mb-4 pb-4
                    ${activitieIndex !== recentActivities.length - 1 ? "border-b border-border" : ""}
                  `} key={activitieIndex}>
                  <div className="flex gap-2">
                    {/* Status Dot */}
                    <span className="w-2 h-2 mt-2 rounded-full bg-orange-500" />

                    {/* Content */}
                    <div className="flex flex-col text-sm">
                      <div className="flex justify-between items-center">
                        <p className="font-medium text-foreground">{activitieItem.name}</p>
                      </div>
                      <p className="text-muted-foreground text-xs">{activitieItem.property}</p>
                      <p className="text-sm font-medium mt-1">{activitieItem.activity}</p>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{activitieItem.time}</span>
                </div>
              ))}
            </CardContent>
          </Card>
          {/* Recent Activities */}

          {/* Maintenance Requests */}
          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="flex gap-1 items-center">
                <Wrench />
                <span>Maintenance Requests</span>
              </CardTitle>
              <CardDescription>Pending maintenance issues</CardDescription>
            </CardHeader>
            <CardContent>
              {maintenanceRequests.map((requestItem, requestIndex) => (
                <div className={`
                    flex items-start justify-between gap-3 mb-4 pb-4
                    ${requestIndex !== maintenanceRequests.length - 1 ? "border-b border-border" : ""}
                  `}
                  key={requestIndex}>
                  <div className="flex gap-2">
                    {/* Status Dot */}
                    <span className="w-2 h-2 mt-2 rounded-full bg-orange-500" />

                    {/* Content */}
                    <div className="flex flex-col text-sm">
                      <div className="flex items-center gap-2 pb-2">
                        <p className="font-medium text-foreground">{requestItem.id}</p>
                        <Badge>{requestItem.priority}</Badge>
                      </div>
                      <p className="text-muted-foreground text-xs">{requestItem.property}</p>
                      <p className="text-sm font-medium mt-1">{requestItem.issue}</p>
                      <span className="text-xs text-muted-foreground">{requestItem.time}</span>
                    </div>
                  </div>
                  <Button variant={"outline"}>{requestItem.assigned ? "Assigned" : "Unassigned"}</Button>
                </div>
              ))}
            </CardContent>
          </Card>
          {/* Maintenance Requests */}
        </div>
        {/* Recent activities & maintenance requests */}

        <Card className="mt-4">
          <CardHeader>
            <CardTitle className="flex gap-1 items-center">
              <Calendar />
              <span>Upcoming Lease Expirations</span>
            </CardTitle>
            <CardDescription>Leases expiring in the next 30 days</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4">
            {upcomingLeases.map((lease, leaseIndex) => (
              <Card key={leaseIndex} className="gap-1 p-4 flex-1">
                <Badge>{lease.daysLeft} Days</Badge>
                <p className="text-lg">{lease.tenant}</p>
                <p className="text-sm text-neutral-600">{lease.property}</p>

                <Button variant={"outline"} className="hover:bg-teal-700 hover:text-white transition-all duration-300">Contact Tenant</Button>
              </Card>
            ))}
          </CardContent>
        </Card>

      </main>
    </div>
  );
}
