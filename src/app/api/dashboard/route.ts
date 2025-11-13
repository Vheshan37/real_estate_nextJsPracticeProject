"use server";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay

  const cardItems = [
    { title: "Total Properties", content: "+12% from last month", value: 1200 },
    { title: "Active Tenants", content: "+8% from last month", value: 1200 },
    { title: "Monthly Revenue", content: "+5% from last month", value: 1200 },
    { title: "Occupancy Rate", content: "+10% from last month", value: 1200 },
  ];

  const recentActivities = [
    {
      name: "Sarah Fernando",
      property: "Ocean View Apt 301",
      activity: "Paid rent",
      time: "2 hours ago",
    },
    {
      name: "Rajesh Kumar",
      property: "City Plaza 12B",
      activity: "Maintenance request",
      time: "4 hours ago",
    },
    {
      name: "Amaya Silva",
      property: "Garden Heights 5A",
      activity: "Lease renewal",
      time: "5 hours ago",
    },
    {
      name: "David Perera",
      property: "Beach Villa 7",
      activity: "Paid rent",
      time: "1 day ago",
    },
  ];

  const maintenanceRequests = [
    {
      id: "MR-001",
      priority: "high",
      assigned: true,
      property: "Ocean View Apt 301",
      issue: "Air conditioning not working",
      time: "2 hours ago",
    },
    {
      id: "MR-002",
      priority: "medium",
      assigned: false,
      property: "City Plaza 12B",
      issue: "Leaking faucet",
      time: "4 hours ago",
    },
    {
      id: "MR-003",
      priority: "low",
      assigned: false,
      property: "Garden Heights 5A",
      issue: "Door lock needs replacement",
      time: "1 day ago",
    },
    {
      id: "MR-004",
      priority: "high",
      assigned: true,
      property: "Beach Villa 7",
      issue: "Plumbing issues",
      time: "2 days ago",
    },
  ];

  const upcomingLeases = [
    {
      tenant: "Nimal Wickramasinghe",
      property: "Sunset Towers 9C",
      daysLeft: 15,
    },
    {
      tenant: "Ayesha Perera",
      property: "Lakeside Residences 4B",
      daysLeft: 20,
    },
    { tenant: "Kamal Silva", property: "Hilltop Apartments 2A", daysLeft: 25 },
  ];

  return new Response(
    JSON.stringify({
      cardItems,
      recentActivities,
      maintenanceRequests,
      upcomingLeases,
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
