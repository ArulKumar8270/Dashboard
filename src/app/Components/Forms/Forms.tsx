import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "@nextui-org/react";

interface FormInputs {
  productname: string;
}

export default function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>();
  const onSubmit = (data: FormInputs) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        size="sm"
        isRequired
        labelPlacement="inside"
        className="w-1/2 pb-3"
        type="text"
        label="Product Name"
        name="productname"
        color="primary"
        variant="bordered"
        classNames={{
          label: "text-black",
          input: [
            "bg-transparent",
            "text-black",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "backdrop-blur-xl",
            "hover:bg-white-100/50",
          ],
        }}
        {...register("productname", {
          required: "This field is required",
        })}
      />
      {errors.productname && (
        <p className="text-red-500">{errors.productname.message}</p>
      )}

      <Button type="submit" color="primary">
        Submit
      </Button>
    </form>
  );
}
