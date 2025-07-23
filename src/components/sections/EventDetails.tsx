import { Card } from "../ui/card";

const EVENT_DETAILS = [
  { label: "Date & Time", value: "August 10, 2025 at 6PM SAST" },
  { label: "Location", value: "Online - Streamed live on Twitch" },
  { label: "Prize Pool", value: "R50,000" },
  { label: "Format", value: "Round Robin, Double Elimination" },
];

export function EventDetails() {
  return (
    <section className="container py-12 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Event Details
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {EVENT_DETAILS.map((detail) => (
          <Card key={detail.label} className="p-6 bg-gray-800 border-gray-700">
            <h3 className="text-red-500 font-semibold">{detail.label}</h3>
            <p className="mt-2 text-gray-300">{detail.value}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
