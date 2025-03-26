
import React, { useState } from 'react';
import { CalendarDays, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { supabase } from '@/integrations/supabase/client';

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', 
  '12:00 PM', '01:00 PM', '02:00 PM',
  '03:00 PM', '04:00 PM', '05:00 PM'
];

const AppointmentScheduler: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [topic, setTopic] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  
  const { toast } = useToast();
  
  const handleScheduleAppointment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Insert appointment into Supabase
      const { error } = await supabase
        .from('appointments')
        .insert([
          { name, email, date, time_slot: timeSlot, topic }
        ]);
        
      if (error) throw error;
      
      toast({
        title: "Appointment scheduled!",
        description: "I will contact you to confirm the details.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setDate('');
      setTimeSlot('');
      setTopic('');
      
      // Close dialog
      setOpenDialog(false);
    } catch (error) {
      console.error('Error scheduling appointment:', error);
      toast({
        title: "Failed to schedule appointment",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <button className="btn-gradient text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center justify-center transition-all duration-300 text-sm sm:text-base w-full">
          <CalendarDays className="w-4 h-4 mr-2" />
          Schedule an Appointment
        </button>
      </DialogTrigger>
      <DialogContent className="bg-dark-200 text-white border border-dark-400 max-w-md w-[90vw] rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-display">Schedule an Appointment</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleScheduleAppointment} className="mt-4 space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-1 text-sm">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 bg-dark-300/50 border border-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue/50 text-white text-sm"
              placeholder="Your Name"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-1 text-sm">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-dark-300/50 border border-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue/50 text-white text-sm"
              placeholder="Your Email"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="block text-gray-300 mb-1 text-sm">Date</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 bg-dark-300/50 border border-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue/50 text-white text-sm"
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
            
            <div>
              <label htmlFor="timeSlot" className="block text-gray-300 mb-1 text-sm">Time</label>
              <select
                id="timeSlot"
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full px-3 py-2 bg-dark-300/50 border border-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue/50 text-white text-sm"
                required
              >
                <option value="">Select Time</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="topic" className="block text-gray-300 mb-1 text-sm">Topic</label>
            <textarea
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-3 py-2 bg-dark-300/50 border border-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue/50 text-white text-sm h-24"
              placeholder="What would you like to discuss?"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn-gradient text-white px-4 py-2 rounded-lg flex items-center justify-center transition-all duration-300 text-sm w-full mt-4 ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <span>Scheduling...</span>
            ) : (
              <>
                <Clock className="w-4 h-4 mr-2" />
                <span>Confirm Appointment</span>
              </>
            )}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentScheduler;
