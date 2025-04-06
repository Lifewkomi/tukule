import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, CalendarDays, Users, Filter } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import TableVisualization from "@/components/reservations/TableVisualization";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Type definitions
type TableStatus = "available" | "reserved" | "occupied";
type ReservationStatus = "pending" | "confirmed" | "cancelled";

// Demo data
const demoTables = [
  { id: "1", name: "Table 1", capacity: 2, status: "available" as TableStatus, x: -5, y: -5, width: 1, length: 1 },
  { id: "2", name: "Table 2", capacity: 2, status: "reserved" as TableStatus, x: -3, y: -5, width: 1, length: 1 },
  { id: "3", name: "Table 3", capacity: 4, status: "available" as TableStatus, x: -1, y: -5, width: 1.2, length: 1.8 },
  { id: "4", name: "Table 4", capacity: 4, status: "occupied" as TableStatus, x: 1, y: -5, width: 1.2, length: 1.8 },
  { id: "5", name: "Table 5", capacity: 4, status: "reserved" as TableStatus, x: 3, y: -5, width: 1.2, length: 1.8 },
  { id: "6", name: "Table 6", capacity: 6, status: "available" as TableStatus, x: 5, y: -5, width: 2, length: 1.8 },
  { id: "7", name: "Table 7", capacity: 2, status: "available" as TableStatus, x: -5, y: -1, width: 1, length: 1 },
  { id: "8", name: "Table 8", capacity: 2, status: "occupied" as TableStatus, x: -3, y: -1, width: 1, length: 1 },
  { id: "9", name: "Table 9", capacity: 4, status: "reserved" as TableStatus, x: -1, y: -1, width: 1.2, length: 1.8 },
  { id: "10", name: "Table 10", capacity: 4, status: "available" as TableStatus, x: 1, y: -1, width: 1.2, length: 1.8 },
  { id: "11", name: "Table 11", capacity: 6, status: "available" as TableStatus, x: 3, y: -1, width: 2, length: 1.8 },
  { id: "12", name: "Table 12", capacity: 8, status: "occupied" as TableStatus, x: -4, y: 3, width: 3, length: 1.8 },
  { id: "13", name: "Table 13", capacity: 8, status: "available" as TableStatus, x: 0, y: 3, width: 3, length: 1.8 },
  { id: "14", name: "Table 14", capacity: 2, status: "reserved" as TableStatus, x: 4, y: 3, width: 1, length: 1 },
  { id: "15", name: "Table 15", capacity: 2, status: "available" as TableStatus, x: 6, y: 3, width: 1, length: 1 },
];

const demoReservations = [
  {
    id: "1",
    customerName: "John Doe",
    customerEmail: "john.doe@example.com",
    customerPhone: "555-123-4567",
    date: "2023-08-15",
    time: "7:00 PM",
    partySize: 4,
    tableId: "5",
    tableName: "Table 5",
    status: "confirmed" as ReservationStatus,
  },
  {
    id: "2",
    customerName: "Jane Smith",
    customerEmail: "jane.smith@example.com",
    customerPhone: "555-987-6543",
    date: "2023-08-15",
    time: "8:00 PM",
    partySize: 2,
    tableId: "2",
    tableName: "Table 2",
    status: "pending" as ReservationStatus,
    specialRequests: "Anniversary celebration, would like a quiet corner if possible.",
  },
  {
    id: "3",
    customerName: "Michael Johnson",
    customerEmail: "michael.j@example.com",
    customerPhone: "555-456-7890",
    date: "2023-08-16",
    time: "6:30 PM",
    partySize: 6,
    tableId: "6",
    tableName: "Table 6",
    status: "cancelled" as ReservationStatus,
  },
  {
    id: "4",
    customerName: "Emily Brown",
    customerEmail: "emily.b@example.com",
    customerPhone: "555-567-1234",
    date: "2023-08-16",
    time: "7:30 PM",
    partySize: 3,
    tableId: "9",
    tableName: "Table 9",
    status: "confirmed" as ReservationStatus,
    specialRequests: "One person has a gluten allergy.",
  },
  {
    id: "5",
    customerName: "David Wilson",
    customerEmail: "david.w@example.com",
    customerPhone: "555-678-2345",
    date: "2023-08-17",
    time: "6:00 PM",
    partySize: 2,
    tableId: "14",
    tableName: "Table 14",
    status: "confirmed" as ReservationStatus,
  },
];

// Interface for type safety
interface Table {
  id: string;
  name: string;
  capacity: number;
  status: TableStatus;
  x: number;
  y: number;
  width: number;
  length: number;
}

interface Reservation {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  date: string;
  time: string;
  partySize: number;
  tableId: string;
  tableName: string;
  status: ReservationStatus;
  specialRequests?: string;
}

const getStatusColor = (status: TableStatus) => {
  switch (status) {
    case "available":
      return "bg-green-100 text-green-800 border-green-300";
    case "reserved":
      return "bg-blue-100 text-blue-800 border-blue-300";
    case "occupied":
      return "bg-red-100 text-red-800 border-red-300";
    default:
      return "bg-gray-100 text-gray-800 border-gray-300";
  }
};

const Reservations: React.FC = () => {
  const [tables, setTables] = useState<Table[]>(demoTables);
  const [reservations, setReservations] = useState<Reservation[]>(demoReservations);
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null);
  const [isReservationDetailsOpen, setIsReservationDetailsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>("2023-08-15");
  const [filterCapacity, setFilterCapacity] = useState<number | null>(null);

  const handleTableClick = (tableId: string) => {
    setSelectedTable(tableId);
    const tableReservations = reservations.filter(
      (res) => res.tableId === tableId && res.status !== "cancelled"
    );
    
    if (tableReservations.length > 0) {
      setSelectedReservation(tableReservations[0]);
      setIsReservationDetailsOpen(true);
    } else {
      toast.info(`Table ${tables.find(t => t.id === tableId)?.name} has no active reservations.`);
    }
  };

  const handleUpdateReservationStatus = (reservationId: string, status: ReservationStatus) => {
    try {
      // Update reservation status
      const updatedReservations = reservations.map((res) =>
        res.id === reservationId ? { ...res, status } : res
      );
      setReservations(updatedReservations);
      
      // If cancelled, update table status if it was reserved for this reservation
      if (status === "cancelled") {
        const reservation = reservations.find((res) => res.id === reservationId);
        if (reservation) {
          const tableId = reservation.tableId;
          setTables(tables.map((table) =>
            table.id === tableId && table.status === "reserved"
              ? { ...table, status: "available" as TableStatus }
              : table
          ));
        }
      }
      
      // If confirmed, update table status to reserved
      if (status === "confirmed") {
        const reservation = reservations.find((res) => res.id === reservationId);
        if (reservation) {
          const tableId = reservation.tableId;
          setTables(tables.map((table) =>
            table.id === tableId && table.status === "available"
              ? { ...table, status: "reserved" as TableStatus }
              : table
          ));
        }
      }
      
      toast.success(
        status === "confirmed"
          ? "Reservation confirmed successfully"
          : "Reservation cancelled successfully"
      );
    } catch (error) {
      console.error("Error updating reservation status:", error);
      toast.error("Failed to update reservation status");
    }
  };
  const handleBookTable = (tableId: string) => {
    // In a real app, you would open a reservation form here
    toast.info(`Started booking for Table ${tables.find(t => t.id === tableId)?.name}`);
    // For demo purposes, we'll just show an info message
  };

  // Filter tables based on capacity
  const filteredTables = filterCapacity 
    ? tables.filter(table => table.capacity >= filterCapacity)
    : tables;

  return (
    <div className="page-transition h-screen bg-[#a6a999]">
      <div className="flex sm:justify-center ">
        <h2 className="section-heading mb-0 text-4xl">Reserve a Table</h2>
      </div>

      {/* Main content with left-right split */}
      <div className="flex flex-col lg:flex-row gap-6 justify-center">

        {/* Left column - Table selection and booking */}
        <div className="w-full lg:w-1/5 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CalendarDays className="h-5 w-5 mr-2" />
                Available Tables
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Filter options */}
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="h-4 w-4" />
                  <span className="text-sm font-medium">Filter by capacity:</span>
                  <div className="flex gap-2">
                    {[null, 2, 4, 6, 8].map((cap) => (
                      <Button 
                        key={cap || 'all'}
                        variant={filterCapacity === cap ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFilterCapacity(cap)}
                      >
                        {cap ? `${cap}+` : 'All'}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* List of tables */}
                <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                  {filteredTables.map(table => (
                    <div 
                      key={table.id}
                      className={`p-8 border rounded-md cursor-pointer transition-all ${
                        selectedTable === table.id ? 'ring-2 ring-offset-1 ring-primary' : ''
                      }`}
                      onClick={() => setSelectedTable(table.id)}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{table.name}</span>
                        <Badge 
                          variant="outline" 
                          className={`${getStatusColor(table.status)}`}
                        >
                          {table.status}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-3 w-3 mr-1" />
                        Capacity: {table.capacity} people
                      </div>
                      <div className="mt-3 flex justify-between">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTableClick(table.id);
                          }}
                        >
                          Details
                        </Button>
                        <Button
                          variant="default"
                          size="sm"
                          disabled={table.status !== "available"}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleBookTable(table.id);
                          }}
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right column - 3D Visualization */}
        <div className="w-full lg:w-2/3">
            <CardContent className="h-full">
              <TableVisualization 
                tables={tables} 
                onTableClick={handleTableClick}
                selectedTableId={selectedTable}
              />
            </CardContent>

        </div>
      </div>
    </div>
  );
};

export default Reservations;