import { useState } from "react";
import { Button } from "@/components/ui/button";
import emailjs from "emailjs-com";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    gender: "",
    dob: "",
    phone: "",
    email: "",
    address: "",
    homeLanguage: "",
    curriculum: "",
    program: "",
    grade: "",
    subjects: [""],
    school: "",
    guardianName: "",
    guardianSurname: "",
    guardianPhone: "",
    guardianWork: "",
    guardianEmail: "",
    guardianAddress: "",
    guardianRelation: "",
    guardianOccupation: "",
    guardianLanguage: "",
    notes: "",
  });

  const [file, setFile] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (index: number, value: string) => {
    const updatedSubjects = [...formData.subjects];
    updatedSubjects[index] = value;
    setFormData((prev) => ({ ...prev, subjects: updatedSubjects }));
  };

  const addSubjectField = () => {
    setFormData((prev) => ({ ...prev, subjects: [...prev.subjects, ""] }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceID = "service_tqf812k";
    const templateID = "template_38i6kvh";
    const publicKey = "Xvf-gSyaxD4Drv3g_";

    const emailParams = {
      student_name: formData.name,
      student_surname: formData.surname,
      gender: formData.gender,
      dob: formData.dob,
      student_phone: formData.phone,
      student_email: formData.email,
      student_address: formData.address,
      student_language: formData.homeLanguage,
      curriculum: formData.curriculum,
      program: formData.program,
      grade: formData.grade,
      subjects: formData.subjects.join(", "),
      school_name: formData.school,
      guardian_name: formData.guardianName,
      guardian_surname: formData.guardianSurname,
      guardian_phone: formData.guardianPhone,
      guardian_work: formData.guardianWork,
      guardian_email: formData.guardianEmail,
      guardian_address: formData.guardianAddress,
      guardian_relation: formData.guardianRelation,
      guardian_occupation: formData.guardianOccupation,
      guardian_language: formData.guardianLanguage,
      notes: formData.notes,
    };

    emailjs
      .send(serviceID, templateID, emailParams, publicKey)
      .then(() => {
        alert("Registration submitted successfully!");
        console.log(formData);
      })
      .catch((err) => {
        console.error("Email error:", err);
        alert("Failed to submit registration. Please try again.");
      });
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-8">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
            Student Registration
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Student Details */}
            <h3 className="text-xl font-semibold mt-4">
              Student / Learner Details
            </h3>
            <input
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={formData.name}
              className="w-full p-2 border rounded"
              required
            />
            <input
              name="surname"
              placeholder="Surname"
              onChange={handleChange}
              value={formData.surname}
              className="w-full p-2 border rounded"
              required
            />

            <label>Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">-- Select Gender --</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <input
              name="dob"
              type="date"
              placeholder="Date of Birth"
              onChange={handleChange}
              value={formData.dob}
              className="w-full p-2 border rounded"
            />
            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              value={formData.phone}
              className="w-full p-2 border rounded"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              onChange={handleChange}
              value={formData.email}
              className="w-full p-2 border rounded"
              required
            />
            <input
              name="address"
              placeholder="Physical Address"
              onChange={handleChange}
              value={formData.address}
              className="w-full p-2 border rounded"
            />
            <input
              name="homeLanguage"
              placeholder="Home Language"
              onChange={handleChange}
              value={formData.homeLanguage}
              className="w-full p-2 border rounded"
            />

            {/* Academic Info */}
            <h3 className="text-xl font-semibold mt-4">
              Academic Information
            </h3>
            
            <select
              id="curriculum"
              name="curriculum"
              value={formData.curriculum}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">-- Select Curriculum --</option>
              <option value="CAPS">CAPS</option>
              <option value="IEB">IEB</option>
              <option value="SACAI">SACAI</option>
              <option value="CAMBRIDGE">CAMBRIDGE</option>
              <option value="UNIVERSITY/COLLEGE">UNIVERSITY/COLLEGE</option>
            </select>

            
            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">-- Select Program --</option>
              <option value="Matric Upgrade">Matric Upgrade</option>
              <option value="Saturday School">Saturday School</option>
              <option value="Extra Classes">Extra Classes</option>
              <option value="Varsity/College">Varsity/College</option>
            </select>

            <input
              name="grade"
              placeholder="Grade / Level"
              onChange={handleChange}
              value={formData.grade}
              className="w-full p-2 border rounded"
            />
            {formData.subjects.map((subject, index) => (
              <input
                key={index}
                value={subject}
                onChange={(e) => handleSubjectChange(index, e.target.value)}
                placeholder={`Subject ${index + 1}`}
                className="w-full p-2 border rounded"
              />
            ))}
            <Button
              type="button"
              onClick={addSubjectField}
              className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
            >
              + Add Subject
            </Button>
            <input
              name="school"
              placeholder="Name of School"
              onChange={handleChange}
              value={formData.school}
              className="w-full p-2 border rounded"
            />

            {/* Guardian Info */}
            <h3 className="text-xl font-semibold mt-4">
              Parent / Guardian Details
            </h3>
            <input
              name="guardianName"
              placeholder="Name"
              onChange={handleChange}
              value={formData.guardianName}
              className="w-full p-2 border rounded"
            />
            <input
              name="guardianSurname"
              placeholder="Surname"
              onChange={handleChange}
              value={formData.guardianSurname}
              className="w-full p-2 border rounded"
            />
            <input
              name="guardianPhone"
              placeholder="Personal Contact"
              onChange={handleChange}
              value={formData.guardianPhone}
              className="w-full p-2 border rounded"
            />
            <input
              name="guardianWork"
              placeholder="Work Contact"
              onChange={handleChange}
              value={formData.guardianWork}
              className="w-full p-2 border rounded"
            />
            <input
              name="guardianEmail"
              type="email"
              placeholder="Email Address"
              onChange={handleChange}
              value={formData.guardianEmail}
              className="w-full p-2 border rounded"
            />
            <input
              name="guardianAddress"
              placeholder="Physical Address"
              onChange={handleChange}
              value={formData.guardianAddress}
              className="w-full p-2 border rounded"
            />
            <input
              name="guardianRelation"
              placeholder="Relation to Student"
              onChange={handleChange}
              value={formData.guardianRelation}
              className="w-full p-2 border rounded"
            />
            <input
              name="guardianOccupation"
              placeholder="Occupation"
              onChange={handleChange}
              value={formData.guardianOccupation}
              className="w-full p-2 border rounded"
            />
            <input
              name="guardianLanguage"
              placeholder="Home Language"
              onChange={handleChange}
              value={formData.guardianLanguage}
              className="w-full p-2 border rounded"
            />

            <textarea
              name="notes"
              placeholder="Additional Notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows={4}
            />

            {/* File Upload (future support) */}
            {/* <label className="block font-medium mt-4">Upload All Documents (as one file)</label>
            <input type="file" onChange={handleFileChange} className="w-full" /> */}

            <Button
              type="submit"
              className="w-full mt-4 bg-primary text-white py-2 rounded hover:bg-blue-600"
            >
              Submit Registration
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
