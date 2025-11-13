export interface CardItem {
  title: string;
  content: string;
  value: number;
}

export interface RecentActivity {
  name: string;
  property: string;
  activity: string;
  time: string;
}

export interface MaintenanceRequest {
  id: string;
  priority: string;
  assigned: boolean;
  property: string;
  issue: string;
  time: string;
}

export interface UpcomingLease {
  tenant: string;
  property: string;
  daysLeft: number;
}

// export interface DashboardResponse {
//   cardItems: CardItem[];
//   recentActivities: RecentActivity[];
//   maintenanceRequests: MaintenanceRequest[];
//   upcomingLeases: UpcomingLease[];
// }