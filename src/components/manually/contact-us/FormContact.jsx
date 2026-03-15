import { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../../../assets/images/gclawfirm.jpg";
import { request } from "../../../constants/api";
const FormContact = () => {
  const [uploadedImagePath, setUploadedImagePath] = useState(null);
  const [alert, setAlert] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [focusedFields, setFocusedFields] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const watchedFields = watch();

  async function handleUploadImage(e) {
    const file = e.target.files[0];
    if (!file) return;

    // Simulated upload - replace with your actual API call

    setUploadedImagePath(file); // uploadedImagePath = file
  }

  // console.log("path ", uploadedImagePath);
  async function handleClientSubmit(data) {
    setIsSending(true);

    try {
      let uploadedFileName = null;

      if (uploadedImagePath) {
        const fd = new FormData();
        fd.append("file", uploadedImagePath);

        const uploadResponse = await request(
          "/files/upload-file",
          "POST",
          fd,
          "multipart/form-data",
        );

        uploadedFileName = uploadResponse?.payload?.fileName ?? null;
      }

      const completeFormData = {
        ...data,
        clientImage: uploadedFileName,
        status: "PENDING",
      };

      const response = await request(
        "/clients",
        "POST",
        completeFormData,
        "application/json",
      );
      console.log("response ", completeFormData);
      if (response?.success) {
        setAlert({
          type: "success",
          title: "Your message sending Successful",
          description:
            "Your message is in our observation. We will contact you as soon as possible via email.",
        });
      } else {
        setAlert({
          type: "error",
          title: "Submit failed",
          description: "Unable to send your message. Please try again.",
        });
      }

      setTimeout(() => {
        setAlert(null);
      }, 5000);
    } catch (error) {
      console.error("Submit contact form failed:", error);
      setAlert({
        type: "error",
        title: "Submit failed",
        description: "Unable to send your message. Please try again.",
      });
      setTimeout(() => {
        setAlert(null);
      }, 5000);
    } finally {
      setIsSending(false); // stop loading
    }
  }

  const handleFocus = (fieldName) => {
    setFocusedFields({ ...focusedFields, [fieldName]: true });
  };

  const handleBlur = (fieldName) => {
    setFocusedFields({ ...focusedFields, [fieldName]: false });
  };

  const isFieldActive = (fieldName) => {
    return (
      focusedFields[fieldName] ||
      (watchedFields[fieldName] && watchedFields[fieldName].length > 0)
    );
  };

  return (
    <div className="min-h-screen bg-linear-to-br mt-20 from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      {alert && (
        <div
          className={`fixed top-8 right-8 z-50 p-5 rounded-2xl shadow-2xl backdrop-blur-xl ${
            alert.type === "success"
              ? "bg-green-500/20 border border-green-400/30"
              : "bg-red-500/20 border border-red-400/30"
          }`}
        >
          <div className="flex items-start">
            <div className="shrink-0">
              {alert.type === "success" ? (
                <svg
                  className="h-6 w-6 text-green-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-red-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <div className="ml-3">
              <h3
                className={`text-sm font-semibold ${
                  alert.type === "success" ? "text-green-300" : "text-red-300"
                }`}
              >
                {alert.title}
              </h3>
              <p
                className={`mt-1 text-sm ${
                  alert.type === "success" ? "text-green-200" : "text-red-200"
                }`}
              >
                {alert.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10">
        <h2 className="text-4xl text-white font-bold text-center pt-24 mb-3">
          Get In Touch With Us
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-16 rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Logo Section */}
            <div className="flex justify-center">
              <div className="relative">
                {/* <div className="absolute inset-0 bg-gradient-to-br  from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-50"></div> */}
                <div>
                  <img src={logo} className=" " alt="my logo" />
                </div>
              </div>
            </div>

            {/* Form Section with Glass Morphism */}
            <form onSubmit={handleSubmit(handleClientSubmit)}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 border border-white/20">
                  <div className="space-y-6">
                    {/* Client Name */}
                    <div className="relative">
                      <input
                        className={`w-full bg-white/10 backdrop-blur-xl border-2 rounded-2xl px-5 pt-7 pb-3 transition-all duration-300 outline-none text-white placeholder-transparent ${
                          errors.clientName
                            ? "border-red-400/50 focus:border-red-400"
                            : "border-white/20 focus:border-black"
                        }`}
                        {...register("clientName", { required: true })}
                        onFocus={() => handleFocus("clientName")}
                        onBlur={() => handleBlur("clientName")}
                      />
                      <label
                        className={`absolute left-5 transition-all text-lg duration-300 pointer-events-none ${
                          isFieldActive("clientName")
                            ? "top-2 text-[14px] text-black font-medium"
                            : "top-5 text-base text-white/60"
                        }`}
                      >
                        Enter your name
                      </label>
                      {errors.clientName && (
                        <span className="text-red-400 text-sm mt-1 block">
                          Name is required
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <input
                        type="email"
                        className={`w-full bg-white/10 backdrop-blur-xl border-2 rounded-2xl px-5 pt-7 pb-3 transition-all duration-300 outline-none text-white placeholder-transparent ${
                          errors.email
                            ? "border-red-400/50 focus:border-red-400"
                            : "border-white/20 focus:border-black"
                        }`}
                        {...register("email", { required: true })}
                        onFocus={() => handleFocus("email")}
                        onBlur={() => handleBlur("email")}
                      />
                      <label
                        className={`absolute left-5 transition-all text-lg duration-300 pointer-events-none ${
                          isFieldActive("email")
                            ? "top-2 text-[14px] text-black font-medium"
                            : "top-5 text-base text-white/60"
                        }`}
                      >
                        Enter email
                      </label>
                      {errors.email && (
                        <span className="text-red-400 text-sm mt-1 block">
                          Email is required
                        </span>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="relative">
                      <input
                        type="tel"
                        className={`w-full bg-white/10  border-black backdrop-blur-xl border-2 rounded-2xl px-5 pt-7 pb-3 transition-all duration-300 outline-none text-white placeholder-transparent ${
                          errors.phoneNumber
                            ? "border-red-400/50 focus:border-red-400"
                            : "border-white/20 focus:border-black"
                        }`}
                        {...register("phoneNumber", { required: true })}
                        onFocus={() => handleFocus("phoneNumber")}
                        onBlur={() => handleBlur("phoneNumber")}
                      />
                      <label
                        className={`absolute left-5 transition-all  text-lg duration-300 pointer-events-none ${
                          isFieldActive("phoneNumber")
                            ? "top-2 text-[14px] text-black font-medium"
                            : "top-5 text-base text-white/60"
                        }`}
                      >
                        Enter phone number
                      </label>
                      {errors.phoneNumber && (
                        <span className="text-red-400 text-sm mt-1 block">
                          Phone is required
                        </span>
                      )}
                    </div>

                    {/* Address */}
                    <div className="relative">
                      <input
                        className="w-full bg-white/10 backdrop-blur-xl border-2 border-white/20 focus:border-black rounded-2xl px-5 pt-7 pb-3 transition-all duration-300 outline-none text-white placeholder-transparent"
                        {...register("address")}
                        onFocus={() => handleFocus("address")}
                        onBlur={() => handleBlur("address")}
                      />
                      <label
                        className={`absolute left-5 transition-all duration-300 text-lg pointer-events-none ${
                          isFieldActive("address")
                            ? "top-2  text-[14px] text-black font-medium"
                            : "top-5 text-base text-white/60"
                        }`}
                      >
                        Enter your address
                      </label>
                    </div>

                    {/* Complaint */}
                    <div className="relative">
                      <textarea
                        className={`w-full bg-white/10 backdrop-blur-xl border-2 rounded-2xl px-5 pt-7 pb-3 transition-all duration-300 outline-none resize-none text-white placeholder-transparent ${
                          errors.complaint
                            ? "border-red-400/50 focus:border-red-400"
                            : "border-white/20 focus:border-black"
                        }`}
                        {...register("complaint", { required: true })}
                        onFocus={() => handleFocus("complaint")}
                        onBlur={() => handleBlur("complaint")}
                        rows="4"
                      />
                      <label
                        className={`absolute left-5 transition-all duration-300 text-lg pointer-events-none ${
                          isFieldActive("complaint")
                            ? "top-2 text-[14px] text-black font-medium"
                            : "top-5 text-base text-white/60"
                        }`}
                      >
                        Tell us about your complaint
                      </label>
                      {errors.complaint && (
                        <span className="text-red-400 text-sm mt-1 block">
                          Complaint is required
                        </span>
                      )}
                    </div>

                    {/* Upload Image */}
                    <div>
                      <label className="block text-sm font-medium mb-3 text-white/80">
                        Upload Image
                      </label>
                      <input
                        type="file"
                        id="clientImage"
                        onChange={handleUploadImage}
                        className="w-full bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-2xl px-4 py-3 cursor-pointer text-white file:mr-4 file:py-2 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-blue-500 file:to-purple-500 file:text-white hover:file:from-blue-600 hover:file:to-purple-600 file:transition-all file:duration-300"
                        accept="image/*"
                      />
                      {uploadedImagePath && (
                        <p className="text-sm text-green-400 mt-2 flex items-center">
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {uploadedImagePath?.name}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full bg-linear-to-r cursor-pointer from-blue-500 to-purple-600 text-white py-4 px-6 rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                    >
                      {isSending ? "Sending..." : "Submit"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContact;
