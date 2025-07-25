"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useState } from "react";
import { Modal } from "@/app/shared/Modal";

const formSchema = z.object({
  fullName: z.string().min(2, "Too short"),
  gamerTag: z.string().min(3, "Gamer tag must be at least 3 characters"),
  email: z.string().email("Invalid email"),
  gameTitle: z.string().min(1, "Required"),
});

export function RegistrationForm({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (val: boolean) => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      gamerTag: "",
      email: "",
      gameTitle: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsModalOpen(false);
  }

  return (
    <section className="container py-12 px-4">
      <div className="text-center">
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-red-600 hover:bg-red-700 px-8 py-6 text-lg "
        >
          Register for Tournament
        </Button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 className="text-2xl font-bold mb-6">Tournament Registration</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gamerTag"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gamer Tag</FormLabel>
                  <FormControl>
                    <Input placeholder="ProGamer123" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gameTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Favorite Game Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Valorant, Dota 2" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700"
            >
              Submit Registration
            </Button>
          </form>
        </Form>
      </Modal>
    </section>
  );
}
