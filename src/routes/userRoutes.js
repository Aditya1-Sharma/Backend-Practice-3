import { Router } from "express";
import {
  loginUser,
  logoutUser,
  refreshAcessToken,
  registerUser,
} from "../controllers/userController.js";
import { upload } from "../middlewares/multerMiddleware.js";
import { verifyJWT } from "../middlewares/authMiddleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser);

// Secured routes

router.route("/logout").post(verifyJWT, logoutUser);

router.route("/refreshToken").post(refreshAcessToken);
export default router;
