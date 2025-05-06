import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { FormProvider } from "react-hook-form";
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
  const methods = useForm<ReservationFormData>({
    defaultValues: {
      customerName: "",
      customerEmail: "",
      customerPhone: "",
      date: "",
      time: "",
      partySize: 1,
      specialRequests: "",
      allergies: "",
    },
  });

  const onSubmit: SubmitHandler<ReservationFormData> = (data) => {
    onConfirm(data);
    methods.reset();
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-white p-4 md:p-6 rounded-lg shadow-lg">
        <DialogHeader className="mb-4 md:mb-6">
          <DialogTitle className="text-xl font-semibold text-center text-gray-800">
            Book {tableName}
          </DialogTitle>
        </DialogHeader>

        {/* Wrap form fields with FormProvider */}
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="space-y-4 md:space-y-5"
            noValidate
          >
            {/* Full Name Field */}
            <div className="mb-2">
              <label className="block font-medium mb-1 text-gray-700 text-sm">
                Full Name
              </label>
              <Input
                placeholder="John Doe"
                {...methods.register("customerName", { required: true })}
                required
                className="px-3 py-2 rounded-md w-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Email & Phone Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div>
                <label className="block font-medium mb-1 text-gray-700 text-sm">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  {...methods.register("customerEmail", { required: true })}
                  required
                  className="px-3 py-2 rounded-md w-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-1 text-gray-700 text-sm">
                  Phone
                </label>
                <Input
                  placeholder="555-123-4567"
                  {...methods.register("customerPhone", { required: true })}
                  required
                  className="px-3 py-2 rounded-md w-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Date & Time Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div>
                <label className="block font-medium mb-1 text-gray-700 text-sm">
                  Date
                </label>
                <Input
                  type="date"
                  {...methods.register("date", { required: true })}
                  required
                  className="px-3 py-2 rounded-md w-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-1 text-gray-700 text-sm">
                  Time
                </label>
                <Input
                  type="time"
                  {...methods.register("time", { required: true })}
                  required
                  className="px-3 py-2 rounded-md w-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Party Size Field */}
            <div>
              <label className="block font-medium mb-1 text-gray-700 text-sm">
                Party Size
              </label>
              <Input
                type="number"
                min={1}
                max={tableId || 10}
                {...methods.register("partySize", { required: true })}
                required
                className="px-3 py-2 rounded-md w-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Special Requests Field */}
            <div>
              <label className="block font-medium mb-1 text-gray-700 text-sm">
                Special Requests
              </label>
              <Textarea
                placeholder="Any special requests..."
                {...methods.register("specialRequests")}
                className="px-3 py-2 rounded-md w-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-20"
              />
            </div>

            {/* Allergies Field */}
            <div>
              <label className="block font-medium mb-1 text-gray-700 text-sm">
                Allergies
              </label>
              <Textarea
                placeholder="Any food allergies or dietary restrictions..."
                {...methods.register("allergies")}
                className="px-3 py-2 rounded-md w-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-20"
              />
            </div>

            <DialogFooter className="flex flex-col sm:flex-row sm:justify-end gap-3 pt-4 mt-4 border-t border-gray-100">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="w-full sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              >
                Book Now
              </Button>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationForm;
