"use client";

import React from "react";
import {useForm, Controller} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import InputMask from "@mona-health/react-input-mask";
import {CustomButton} from "@/ui/CustomButton";
import {submitSchema, SubmitValues} from "@/schemas/submit";

export default function SubmitForm() {
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
        console.log("data: ", data);

        await new Promise((res) => setTimeout(res, 500));

        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-[640px] flex flex-col gap-10 p-10 bg-[#FFFFFF] rounded-2xl shadow-[0_26px_40px_0_rgba(188,202,255,0.13)]"
        >
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1.5">
                    <label className="block font-medium leading-6 text-lg text-[#333F51]">Имя</label>
                    <input
                        {...register("name")}
                        placeholder="Введите ваше имя"
                        className="w-full py-2.5 px-3.5 border border-[#D5DAE1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#113CB9] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name.message}</p>
                    )}
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="block font-medium leading-6 text-lg text-[#333F51]">
                        Номер телефона
                    </label>
                    <Controller
                        name="phone"
                        control={control}
                        render={({field}) => (
                            <InputMask
                                mask="+7 (999) 999-99-99"
                                placeholder="+7 (___) ___-__-__"
                                value={field.value || ""}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => field.onChange(e.target.value)}
                                className="w-full py-2.5 px-3.5 border border-[#D5DAE1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#113CB9] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
                            />
                        )}
                    />
                    {errors.phone && (
                        <p className="text-red-500 text-sm">{errors.phone.message}</p>
                    )}
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="block font-medium leading-6 text-lg text-[#333F51]">
                        Комментарий
                    </label>
                    <textarea
                        {...register("comment")}
                        placeholder="Напишите ваше сообщение"
                        className="w-full py-2.5 px-3.5 border border-[#D5DAE1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#113CB9] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
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