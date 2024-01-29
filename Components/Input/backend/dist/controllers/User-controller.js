import { CustomError } from "../errors/Error.js";
function getAllUsers(req, res, next) {
    try {
        return res.send("Success");
    }
    catch (error) {
        throw new CustomError("New Error", 404);
    }
}
export { getAllUsers };
