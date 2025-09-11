import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Calendar,
  Plus,
  Search,
  Filter,
  Bell,
  MoreVertical,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import React from "react";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (path: string): void => {
    navigate(path);
  };

  const recentPatients = [
    {
      name: "Ajay Kumar Singh",
      age: 24,
      dosha: "Pitta",
      lastVisit: "2 days ago",
      status: "Active",
    },
    {
      name: "Vishaka",
      age: 62,
      dosha: "Vata",
      lastVisit: "1 week ago",
      status: "Follow-up",
    },
    {
      name: "Priyanka Rathore",
      age: 37,
      dosha: "Kapha",
      lastVisit: "3 days ago",
      status: "New Plan",
    },
  ];

  const todayAppointments = [
    { time: "10:00 AM", patient: "Sita Raman", type: "Initial Consultation" },
    { time: "2:00 PM", patient: "Vikram Singh", type: "Follow-up" },
    { time: "4:00 PM", patient: "Maya Patel", type: "Diet Review" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Practice Dashboard
            </h2>
            <p className="text-muted-foreground">
              Manage your Ayurvedic practice with intelligent insights
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="hero" onClick={() => handleClick("/NewPatient")}>
              <Plus className="w-4 h-4" />
              New Patient
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-healing-green/5 to-healing-green/10 border-healing-green/20">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Patients
                </CardTitle>
                <Users className="w-4 h-4 text-healing-green" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-healing-green">247</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-healing-green">+12%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-warm-orange/5 to-warm-orange/10 border-warm-orange/20">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  This Week
                </CardTitle>
                <Calendar className="w-4 h-4 text-warm-orange" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warm-orange">18</div>
              <p className="text-xs text-muted-foreground">
                Appointments scheduled
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Patients */}
          <div className="lg:col-span-2">
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Patients</CardTitle>
                    <CardDescription>
                      Latest patient interactions and status updates
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                      <Search className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Filter className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  {recentPatients.map((patient, index) => (
                    <div
                      key={index}
                      className="p-6 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-healing-green to-warm-orange rounded-full flex items-center justify-center text-white font-medium">
                            {patient.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <div className="font-medium text-foreground">
                              {patient.name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Age {patient.age} • {patient.dosha} Dosha •{" "}
                              {patient.lastVisit}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge
                            variant="secondary"
                            className={
                              patient.status === "Active"
                                ? "bg-healing-green/10 text-healing-green"
                                : patient.status === "Follow-up"
                                ? "bg-warm-orange/10 text-warm-orange"
                                : "bg-golden-wisdom/10 text-earth-brown"
                            }
                          >
                            {patient.status}
                          </Badge>
                          <Button variant="outline" size="icon">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Today's Schedule */}
          <div>
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Today's Schedule</CardTitle>
                <CardDescription>
                  Upcoming appointments and consultations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {todayAppointments.map((appointment, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/30"
                  >
                    <div className="w-2 h-12 bg-gradient-to-b from-healing-green to-warm-orange rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium text-foreground">
                        {appointment.time}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {appointment.patient}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {appointment.type}
                      </div>
                    </div>
                  </div>
                ))}

                <Button variant="outline" className="w-full mt-4">
                  View Full Calendar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
