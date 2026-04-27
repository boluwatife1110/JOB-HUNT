"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState("");
  const [companyName, setCompanyName] = useState("");

  const [imageFile, setImageFile] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);

  // ================= FETCH PROFILE =================
  useEffect(() => {
    const fetchProfile = async () => {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("access_token")
          : null;

      if (!token) {
        router.push("/signin");
        return;
      }

      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/users/profile/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = res.data;

        setProfile(data);
        setBio(data.bio || "");
        setSkills(data.skills || "");
        setCompanyName(data.company_name || "");
      } catch (err) {
        console.log("PROFILE ERROR:", err.response?.data);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  // ================= IMAGE CHANGE =================
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImageFile(file);
  };

  // ================= UPDATE PROFILE =================
  const handleUpdate = async () => {
    try {
      setSaving(true);

      const token = localStorage.getItem("access_token");

      const formData = new FormData();
      formData.append("bio", bio);
      formData.append("skills", skills);

      if (profile.user_type === "recruiter") {
        formData.append("company_name", companyName);
      }

      if (imageFile) {
        formData.append("profile_image", imageFile);
      }

      const res = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/profile/update/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setProfile(res.data);
      alert("Profile updated successfully");
    } catch (err) {
      console.log(err.response?.data);
      alert("Update failed");
    } finally {
      setSaving(false);
    }
  };

  // ================= LOGOUT =================
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    router.push("/signin");
  };

  // ================= LOADING =================
  if (loading) return <p className="p-6">Loading profile...</p>;
  if (!profile) return <p className="p-6">No profile found</p>;

  const isRecruiter = profile.user_type === "recruiter";

  return (
    <div className="max-w-xl mx-auto   p-6 border-2 my-8 rounded-2xl shadow">
        <div className="pb-8">
  <button
    onClick={() => router.back()}
    className="flex items-center gap-2 rounded-md hover:bg-gray-200 transition px-4 py-2"
  >
    <ArrowLeft className="h-4 w-4" />
    Back
  </button>
</div>

      {/* ================= PROFILE IMAGE ================= */}
      <div className="relative h-32 w-32 mx-auto rounded-full overflow-hidden bg-gray-200 mb-4 group">

        <img
          src={
            imageFile
              ? URL.createObjectURL(imageFile)
              : profile.profile_image
              ? `${process.env.NEXT_PUBLIC_API_URL}${profile.profile_image}`
              : "/heroImage.png"
          }
          className="h-full w-full object-cover"
          alt="profile"
        />

        {/* HOVER OVERLAY */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">

          {/* VIEW BUTTON */}
          <button
            onClick={() => setPreviewOpen(true)}
            className="text-white text-sm bg-black/50 px-2 py-1 rounded"
          >
            View
          </button>

          {/* EDIT BUTTON */}
          <label className="text-white text-sm bg-black/50 px-2 py-1 rounded cursor-pointer">
            Edit
            <input
              type="file"
              hidden
              onChange={handleImageChange}
            />
          </label>
        </div>
      </div>

      {/* ================= MODAL PREVIEW ================= */}
      {previewOpen && (
        <div
          onClick={() => setPreviewOpen(false)}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        >
          <div
            className="h-80 w-80 bg-white overflow-hidden rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={
                imageFile
                  ? URL.createObjectURL(imageFile)
                  : profile.profile_image
                  ? `${process.env.NEXT_PUBLIC_API_URL}${profile.profile_image}`
                  : "/heroImage.png"
              }
              className="h-full w-full object-cover"
              alt="preview"
            />
          </div>
        </div>
      )}

      {/* ================= USER INFO ================= */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold">
          {profile.first_name} {profile.last_name}
        </h2>
        <p className="text-gray-500">{profile.email}</p>
        <p className="text-sm text-gray-400 capitalize">
          {profile.user_type}
        </p>
      </div>

      {/* ================= FORM ================= */}
      <div className="border p-5 rounded-lg shadow space-y-4">

        {/* BIO */}
        <div>
          <label className="font-semibold">Bio</label>
          <textarea
            className="w-full border p-2 rounded"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>

        {/* SKILLS */}
        <div>
          <label className="font-semibold">Skills</label>
          <input
            className="w-full border p-2 rounded"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </div>

        {/* COMPANY (ONLY RECRUITER) */}
        {isRecruiter && (
          <div>
            <label className="font-semibold">Company Name</label>
            <input
              className="w-full border p-2 rounded"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
        )}

        {/* BUTTONS */}
        <div className="flex gap-3">
          <button
            onClick={handleUpdate}
            disabled={saving}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}