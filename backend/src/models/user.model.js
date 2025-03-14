import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email field is required"],
      unique: [true, "User with email already exists"],
    },
    fullName: {
      type: String,
      required: [true, "fullName field is required"],
    },
    password: {
      type: String,
      required: false,
      select: false,
    },
    source: {
      type: String,
      select: false,
    },
    interest: [{ type: mongoose.Schema.Types.ObjectId, ref: "Interests" }],
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

userSchema.index({ interests: 1 });

const User = mongoose.model("User", userSchema);

export default User;
