import {z} from "zod";

export const submitSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Имя должно содержать минимум 2 символа")
        .max(50, "Имя слишком длинное"),
    phone: z
        .string()
        .transform((val) => val.replace(/\D/g, ""))
        .refine((val) => val.length === 11 && val.startsWith("7"), {
            message: "Введите номер в формате +7 (777) 777-77-77",
        })
        .transform((val) => {
            return `+7 (${val.slice(1, 4)}) ${val.slice(4, 7)}-${val.slice(
                7,
                9
            )}-${val.slice(9, 11)}`;
        }),
    comment: z
        .string()
        .trim()
        .max(300, "Комментарий не может быть длиннее 300 символов")
        .optional(),
});

export type SubmitValues = z.infer<typeof submitSchema>;