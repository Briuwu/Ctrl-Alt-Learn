"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { QuestionData } from "@/types";

const formSchema = z.object({
  answer: z.string().min(2),
});

type Props = {
  onHandleCorrect: () => void;
  onHandleWrong: () => void;
  question: QuestionData | undefined;
};

export function GameQuestionForm({
  onHandleCorrect,
  question,
  onHandleWrong,
}: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      answer: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.answer === question?.answer) {
      onHandleCorrect();
      form.reset();
      toast.success("Correct answer!");
    } else {
      toast.error("Wrong answer, try again!");
      onHandleWrong();
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="text-xs space-y-1 bg-white p-4 rounded text-center"
      >
        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">{question?.question}</FormLabel>
              <FormControl>
                <Input
                  placeholder="place your answer"
                  {...field}
                  className="text-xs max-w-40 p-2 mx-auto text-center"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button variant={"ghost"} type="submit" className="text-xs">
          Submit
        </Button>
      </form>
    </Form>
  );
}
