"use client";
import { authClient } from "@/lib/auth-client";
import { getImgBbURL } from "@/lib/dataFetch";
import { Envelope } from "@gravity-ui/icons";
import {
  Avatar,
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";
import { useForm } from "react-hook-form";
import { FaEdit, FaUber, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const ProfileModal = ({ user }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const photoUrl = watch("photo");
  const photo =
    photoUrl && photoUrl.length > 0 ? URL.createObjectURL(photoUrl[0]) : null;
  console.log(photoUrl);

  const onSubmit = async (info) => {
    const { name, photo } = info;
    // console.log(name, photo);
    const loadingToast = toast.loading("Updating profile...", {
      position: "top-center",
      autoClose: 1500,
    });
    try {
      let photoURL = user?.image;
      if (photo && photo.length > 0) {
        photoURL = await getImgBbURL(photo);
      }
      // console.log(photoURL);
      const { data, error } = await authClient.updateUser({
        name: name,
        image: photoURL,
      });

      if (error) {
        toast.update(loadingToast, {
          render: error.message,
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      } else {
        toast.update(loadingToast, {
          render: "Profile updated successfully!",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
        window.location.reload();
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Modal>
        <Button
          variant="secondary"
          className={"bg-gradient-to-r from-blue-500 to-purple-500 text-white"}
        >
          <FaEdit />
          Edit Profile
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md ">
              <Modal.Header className="flex flex-col items-center justify-center">
                <Modal.Icon className="  bg-accent-soft text-accent-soft-foreground">
                  <div className="relative">
                    <Avatar>
                      <Avatar.Image
                        alt="Online User"
                        src={!photo ? user?.image : photo}
                      />
                      <Avatar.Fallback>
                        {user?.name.charAt(0).toUpperCase()}
                      </Avatar.Fallback>
                    </Avatar>
                  </div>
                </Modal.Icon>
                <Modal.Heading className="text-center">
                  Customize Your Profile
                </Modal.Heading>
                <p className="mt-1.5 text-sm leading-5 text-muted text-center">
                  Your profile details are used across MangoBooks to personalize
                  your experience. Keep them updated to stay connected!
                </p>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form
                    id="profile-form"
                    className="md:space-y-4 lg:space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <fieldset>
                      <legend>Name</legend>
                      <input
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        placeholder="Type your new name"
                        className=" w-full bg-white/5 border  rounded-lg px-4 py-3 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                      />
                      {errors.name && (
                        <p className="text-red-500">{errors.name.message}</p>
                      )}
                    </fieldset>
                    <fieldset>
                      <legend>Choose your photo</legend>
                      <input
                        type="file"
                        accept="image/*"
                        {...register("photo", {
                          required: "Photo is required",
                        })}
                        // placeholder="Click Hear"
                        className=" w-full bg-white/5 border  rounded-lg px-4 py-3 placeholder:text-white/30 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                      />
                      {errors.photo && (
                        <p className="text-red-500">{errors.photo.message}</p>
                      )}
                    </fieldset>
                  </form>
                </Surface>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  slot="close"
                  variant="outline"
                  className=" font-semibold  rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-transform  cursor-pointer  duration-500 "
                >
                  Cancel
                </Button>
                <Button
                  form="profile-form"
                  slot="close"
                  className="bg-gradient-to-br from-[#4f46e5] to-[#7c03d3] shadow-[0_0_30px_-5px_rgba(79,70,229,0.4)] text-white font-semibold  rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-transform  cursor-pointer  duration-500 "
                  type="submit"
                >
                  Save
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default ProfileModal;
