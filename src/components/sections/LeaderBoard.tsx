"use client";
import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Skeleton } from "../ui/skeleton";

async function fetchLeaderboard() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data
    .slice(0, 10)
    .map((user: any) => ({
      ...user,
      points: Math.floor(Math.random() * 1000),
    }))
    .sort((a: any, b: any) => b.points - a.points);
}

export function Leaderboard() {
  const { data, isLoading } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: fetchLeaderboard,
  });

  if (isLoading) {
    return (
      <div className="container py-12 space-y-4">
        <Skeleton className="h-10 w-full" />
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-12 w-full" />
        ))}
      </div>
    );
  }

  return (
    <section className="container py-12 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Leaderboard</h2>
      <div className="overflow-x-auto">
        <Table className="min-w-[600px] md:w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Rank</TableHead>
              <TableHead>Gamer Tag</TableHead>
              <TableHead>Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((player: any, index: number) => (
              <TableRow
                key={player.id}
                className={index < 3 ? "bg-gray-800 font-bold" : ""}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{player.username}</TableCell>
                <TableCell>{player.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
