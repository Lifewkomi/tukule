// src/components/reservations/ReservationForm.tsx

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";

export interface ReservationFormData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  date: string;
  time: string;
  partySize: number;
  specialRequests?: string;
  allergies?: string;
}

interface ReservationFormProps {
  tableId: string;
  tableName: string;
  onClose: () => void;
  onConfirm: (data: ReservationFormData) => void;
}

const ReservationForm: React.FC<ReservationFormProps> = ({
  tableId,
  tableName,
  onClose,
  onConfirm,
}) => {
  // Configure react-hook-form with default values.
  const {
    control,
    handleSubmit,
    reset,
  } = useForm<ReservationFormData>({
    defaultValues: {
      customerName: "",
      customerEmail: "",
      customerPhone: "",
      date: "", // Optionally, pre-fill with a default date string (e.g. "2023-08-15")
      time: "",
      partySize: 1,
      specialRequests: "",
      allergies: "",
    },
  });

  // Wrap the form submission handler for our form.
  const onSubmit: SubmitHandler<ReservationFormData> = (data) => {
    // Call the parent's onConfirm function with the form data.
    onConfirm(data);
    // Optionally reset the form fields after submission.
    reset();
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-white p-8 rounded-lg">
        <DialogHeader className="mb-6">
          <DialogTitle className="text-xl font-semibold text-center">
            Book {tableName}
          </DialogTitle>
        </DialogHeader>

        {/* Wrap our HTML form inside our Form component */}
        <Form>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            noValidate
          >
            {/* Full Name Field */}
            <FormField
              control={control}
              name="customerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium mb-1 block">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      {...field}
                      required
                      className="p-3 rounded-md w-full border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email & Phone Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={control}
                name="customerEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium mb-1 block">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        {...field}
                        required
                        className="p-3 rounded-md w-full border-gray-300 focus:ring-2 focus:ring-blue-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="customerPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium mb-1 block">
                      Phone
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="555-123-4567"
                        {...field}
                        required
                        className="p-3 rounded-md w-full border-gray-300 focus:ring-2 focus:ring-blue-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Date & Time Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium mb-1 block">
                      Date
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        {...field}
                        required
                        className="p-3 rounded-md w-full border-gray-300 focus:ring-2 focus:ring-blue-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium mb-1 block">
                      Time
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="time"
                        {...field}
                        required
                        className="p-3 rounded-md w-full border-gray-300 focus:ring-2 focus:ring-blue-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Party Size Field */}
            <FormField
              control={control}
              name="partySize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium mb-1 block">
                    Party Size
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={1}
                      {...field}
                      required
                      className="p-3 rounded-md w-full border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Special Requests Field */}
            <FormField
              control={control}
              name="specialRequests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium mb-1 block">
                    Special Requests
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any special requests for your reservation..."
                      {...field}
                      className="p-3 rounded-md w-full min-h-24 border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Allergies Field */}
            <FormField
              control={control}
              name="allergies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium mb-1 block">
                    Allergies
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any food allergies or dietary restrictions..."
                      {...field}
                      className="p-3 rounded-md w-full min-h-24 border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Dialog Footer with Cancel and Confirm Buttons */}
            <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-between gap-3 pt-4 mt-6">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="w-full sm:w-auto py-2.5"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="w-full sm:w-auto py-2.5 bg-blue-600 hover:bg-blue-700"
              >
                Book Now
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationForm;
