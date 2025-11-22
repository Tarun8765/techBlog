import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const resourceSchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(200),
  url: z.string().trim().url("Invalid URL").max(500),
  description: z
    .string()
    .trim()
    .min(10, "Description must be at least 10 characters")
    .max(500),
  category: z.string().min(1, "Category is required"),
});

type ResourceForm = z.infer<typeof resourceSchema>;

export const ResourceDialog = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ResourceForm>({
    resolver: zodResolver(resourceSchema),
  });

  const onSubmit = (data: ResourceForm) => {
    console.log("Resource submitted:", data);
    toast({
      title: "Resource submitted!",
      description: "Thank you for your contribution. We'll review it shortly.",
    });
    reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="font-mono">
          Submit Resource
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Submit a Resource</DialogTitle>
          <DialogDescription>
            Share a valuable learning resource with the community
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="title">Resource Title</Label>
            <Input
              id="title"
              placeholder="e.g., React Official Documentation"
              {...register("title")}
            />
            {errors.title && (
              <p className="text-sm text-destructive mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="url">URL</Label>
            <Input
              id="url"
              type="url"
              placeholder="https://example.com"
              {...register("url")}
            />
            {errors.url && (
              <p className="text-sm text-destructive mt-1">
                {errors.url.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="category">Category</Label>
            <Select onValueChange={(value) => setValue("category", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="documentation">Documentation</SelectItem>
                <SelectItem value="video">Video Tutorial</SelectItem>
                <SelectItem value="book">Book/eBook</SelectItem>
                <SelectItem value="code">Code Example</SelectItem>
              </SelectContent>
            </Select>
            {errors.category && (
              <p className="text-sm text-destructive mt-1">
                {errors.category.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Brief description of what this resource covers"
              {...register("description")}
              rows={3}
            />
            {errors.description && (
              <p className="text-sm text-destructive mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full">
            Submit Resource
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
