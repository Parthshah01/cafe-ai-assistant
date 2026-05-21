import { cafeInfo } from "@/data/menu";
import { Clock, MapPin, Phone, Wifi } from "lucide-react";

const Row = ({ icon: Icon, label, value }: any) => (
  <div className="flex items-start gap-3">
    <Icon className="mt-0.5 h-5 w-5 text-accent" />
    <div>
      <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  </div>
);

export const Visit = () => (
  <section id="visit" className="bg-primary py-20 text-primary-foreground">
    <div className="container grid gap-10 md:grid-cols-2">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-accent">Visit</p>
        <h2 className="mt-2 font-display text-4xl font-semibold md:text-5xl">Come sit a while.</h2>
        <p className="mt-4 max-w-md text-primary-foreground/70">
          {cafeInfo.seating}. We don't take reservations — just walk in.
        </p>
      </div>
      <div className="grid gap-5 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur">
        <Row icon={MapPin} label="Address" value={cafeInfo.address} />
        <Row icon={Clock} label="Mon–Fri" value={cafeInfo.hours.weekdays} />
        <Row icon={Clock} label="Sat" value={cafeInfo.hours.saturday} />
        <Row icon={Clock} label="Sun" value={cafeInfo.hours.sunday} />
        <Row icon={Phone} label="Phone" value={cafeInfo.phone} />
        <Row icon={Wifi} label="Amenities" value={cafeInfo.wifi} />
      </div>
    </div>
  </section>
);
