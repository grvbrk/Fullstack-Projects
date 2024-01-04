import {zod} from "zod"

const todoSchema = zod.object({
    title : zod.string().max(20).trim(),
    description : zod.string().max(30),
    completed : zod.boolean()
});

export {todoSchema}
