import { useState } from "react";
import { Button } from "@/components/ui/button";
import emailjs from "emailjs-com";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (index: number, value: string) => {
    const updatedSubjects = [...formData.subjects];
    updatedSubjects[index] = value;
    setFormData(prev => ({ ...prev, subjects: updatedSubjects }));
  };

  const addSubjectField = () => {
    setFormData(prev => ({ ...prev, subjects: [...prev.subjects, ""] }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const reader = new FileReader();
    reader.onloadend = () => {
      const fileBase64 = reader.result?.toString().split(",")[1];

      const emailParams = {
        student_name: formData.name,
        student_surname: formData.surname,
        gender: formData.gender,
        dob: formData.dob,
        student_phone: formData.phone,
        student_email: formData.email,
        student_address: formData.address,
        student_language: formData.homeLanguage,
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
        file: fileBase64,
        fileName: file?.name,
      };

      emailjs.send(serviceID, templateID, emailParams, publicKey)
        .then(() => {
          alert("Registration submitted successfully!");
          console.log(formData);
        })
        .catch((err) => {
          console.error("Email error:", err);
          alert("Failed to submit registration. Please try again.");
        });
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      // Handle case where no file is selected
      const emailParams = {
        student_name: formData.name,
        student_surname: formData.surname,
        gender: formData.gender,
        dob: formData.dob,
        student_phone: formData.phone,
        student_email: formData.email,
        student_address: formData.address,
        student_language: formData.homeLanguage,
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

      emailjs.send(serviceID, templateID, emailParams, publicKey)
        .then(() => {
          alert("Registration submitted successfully!");
          console.log(formData);
        })
        .catch((err) => {
          console.error("Email error:", err);
          alert("Failed to submit registration. Please try again.");
        });
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-8">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Student Registration</h2>

          <p className="bg-yellow-100 text-yellow-800 p-3 rounded mb-6 text-sm">
            <strong>NB:</strong> Please upload the following documents at the end of the form:
            <br />– ID Copy of Parent
            <br />– ID/Birth Certificate of the Student
            <br />– Latest Report/Results
            <br />– Proof of Payment
            <br /><strong>All documents must be scanned into one file.</strong>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Student Details */}
            <h3 className="text-xl font-semibold mt-4">Student / Learner Details</h3>
            <input name="name" placeholder="Name" onChange={handleChange} value={formData.name} className="w-full p-2 border rounded" required />
            <input name="surname" placeholder="Surname" onChange={handleChange} value={formData.surname} className="w-full p-2 border rounded" required />
            <input name="gender" placeholder="Gender" onChange={handleChange} value={formData.gender} className="w-full p-2 border rounded" />
            <input name="dob" type="date" onChange={handleChange} value={formData.dob} className="w-full p-2 border rounded" />
            <input name="phone" placeholder="Phone Number" onChange={handleChange} value={formData.phone} className="w-full p-2 border rounded" required />
            <input name="email" type="email" placeholder="Email Address" onChange={handleChange} value={formData.email} className="w-full p-2 border rounded" required />
            <input name="address" placeholder="Physical Address" onChange={handleChange} value={formData.address} className="w-full p-2 border rounded" />
            <input name="homeLanguage" placeholder="Home Language" onChange={handleChange} value={formData.homeLanguage} className="w-full p-2 border rounded" />

            {/* Academic Info */}
            <h3 className="text-xl font-semibold mt-4">Academic Information</h3>
            <select name="program" onChange={handleChange} value={formData.program} className="w-full p-2 border rounded" required>
              <option value="" disabled>Select a Program</option>
              <option value="Matric Upgrade">Matric Upgrade</option>
              <option value="Saturday School">Saturday School</option>
              <option value="Extra Classes">Extra Classes</option>
              <option value="Varsity/College">Varsity/College</option>
            </select>
            <input name="grade" placeholder="Grade / Level" onChange={handleChange} value={formData.grade} className="w-full p-2 border rounded" />
            {formData.subjects.map((subject, index) => (
              <input
                key={index}
                value={subject}
                onChange={(e) => handleSubjectChange(index, e.target.value)}
                placeholder={`Subject ${index + 1}`}
                className="w-full p-2 border rounded"
              />
            ))}
            <Button type="button" onClick={addSubjectField} className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">
              + Add Subject
            </Button>
            <input name="school" placeholder="Name of School" onChange={handleChange} value={formData.school} className="w-full p-2 border rounded" />

            {/* Guardian Info */}
            <h3 className="text-xl font-semibold mt-4">Parent / Guardian Details</h3>
            <input name="guardianName" placeholder="Name" onChange={handleChange} value={formData.guardianName} className="w-full p-2 border rounded" />
            <input name="guardianSurname" placeholder="Surname" onChange={handleChange} value={formData.guardianSurname} className="w-full p-2 border rounded" />
            <input name="guardianPhone" placeholder="Personal Contact" onChange={handleChange} value={formData.guardianPhone} className="w-full p-2 border rounded" />
            <input name="guardianWork" placeholder="Work Contact" onChange={handleChange} value={formData.guardianWork} className="w-full p-2 border rounded" />
            <input name="guardianEmail" type="email" placeholder="Email Address" onChange={handleChange} value={formData.guardianEmail} className="w-full p-2 border rounded" />
            <input name="guardianAddress" placeholder="Physical Address" onChange={handleChange} value={formData.guardianAddress} className="w-full p-2 border rounded" />
            <input name="guardianRelation" placeholder="Relation to Student" onChange={handleChange} value={formData.guardianRelation} className="w-full p-2 border rounded" />
            <input name="guardianOccupation" placeholder="Occupation" onChange={handleChange} value={formData.guardianOccupation} className="w-full p-2 border rounded" />
            <input name="guardianLanguage" placeholder="Home Language" onChange={handleChange} value={formData.guardianLanguage} className="w-full p-2 border rounded" />

            <textarea name="notes" placeholder="Additional Notes" value={formData.notes} onChange={handleChange} className="w-full p-2 border rounded" rows={4} />

            {/* File Upload */}
            <label className="block font-medium mt-4">Upload All Documents (as one file)</label>
            <input type="file" onChange={handleFileChange} className="w-full" />

            <Button type="submit" className="w-full mt-4 bg-primary text-white py-2 rounded hover:bg-blue-600">
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
