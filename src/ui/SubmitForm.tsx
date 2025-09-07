"use client";

import React from "react";
import {useForm, Controller} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import InputMask from "@mona-health/react-input-mask";
import {CustomButton} from "@/ui/CustomButton";
import {submitSchema, SubmitValues} from "@/schemas/submit";

export default function SubmitForm () {
    const {
        register,
        control,
        handleSubmit,
        formState: {errors, isSubmitting, isValid},
        reset,
    } = useForm<SubmitValues>({
        resolver: zodResolver(submitSchema),
        mode: "onChange",
        defaultValues: {
            name: "",
            phone: "",
            comment: "",
        },
    });

    const onSubmit = async (data: SubmitValues) => {
        console.log("📩 Отправка:", data);

        await new Promise((res) => setTimeout(res, 500));

        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-[640px] flex flex-col gap-10 p-10 bg-[#FFFFFF] rounded-2xl shadow-[0_26px_40px_0_rgba(188,202,255,0.13)]"
        >
            <div className="flex flex-col gap-6">
                <div>
                    <label className="block mb-1 font-medium">Имя</label>
                    <input
                        {...register("name")}
                        placeholder="Введите ваше имя"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name.message}</p>
                    )}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Номер телефона</label>
                    <Controller
                        name="phone"
                        control={control}
                        render={({field}) => (
                            <InputMask
                                mask="+7 (999) 999-99-99"
                                placeholder="+7 (___) ___-__-__"
                                value={field.value || ""}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => field.onChange(e.target.value)}
                                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        )}
                    />
                    {errors.phone && (
                        <p className="text-red-500 text-sm">{errors.phone.message}</p>
                    )}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Комментарий</label>
                    <textarea
                        {...register("comment")}
                        placeholder="Напишите ваше сообщение"
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                    />
                    {errors.comment && (
                        <p className="text-red-500 text-sm">{errors.comment.message}</p>
                    )}
                </div>
            </div>

            <CustomButton
                type="submit"
                variant="submit"
                disabled={isSubmitting || !isValid}
            >
                {isSubmitting ? "Отправка..." : "Оставить заявку"}
            </CustomButton>
        </form>
    );
}