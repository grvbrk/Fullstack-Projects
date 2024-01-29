import { CustomError } from "../errors/Error.js";
function handleError(err, req, res, next) {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({ msg: err.message });
    }
    return res.status(404).json({ msg: "Something went wrong" });
}
export { handleError };
