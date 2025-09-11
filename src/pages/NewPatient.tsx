import React, { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// 🟢 Define Patient type
interface Patient {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  age: number;
  gender: "male" | "female" | "other";
  weight: number;
  height: number;
  contact: string;
  email?: string;
  medical_history: string;
  dietary_habits: "vegetarian" | "non-vegetarian" | "vegan" | "jain";
  meal_frequency: number;
  water_intake: number;
  bowel_movements: "regular" | "constipated" | "loose";
  exercise_level: "sedentary" | "light" | "moderate" | "active" | "very-active";
  allergies: string[];
  current_medications: string;
  ayurvedic_constitution:
    | "vata"
    | "pitta"
    | "kapha"
    | "vata-pitta"
    | "pitta-kapha"
    | "vata-kapha";
}

interface PatientFormProps {
  patient?: Patient;
  onSave: (patient: Omit<Patient, "id" | "created_at" | "updated_at">) => void;
  onCancel: () => void;
}

// 🔹 PatientForm.tsx
const PatientForm: React.FC<PatientFormProps> = ({
  patient,
  onSave,
  onCancel,
}) => {
  const [formData, setFormData] = useState({
    name: patient?.name || "",
    age: patient?.age?.toString() || "",
    gender: (patient?.gender as Patient["gender"]) || "",
    contact: patient?.contact || "",
    email: patient?.email || "",
    ayurvedic_constitution:
      (patient?.ayurvedic_constitution as Patient["ayurvedic_constitution"]) ||
      "",
    dietary_habits:
      (patient?.dietary_habits as Patient["dietary_habits"]) || "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.age || isNaN(Number(formData.age)))
      newErrors.age = "Valid age is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.contact.trim()) newErrors.contact = "Contact is required";
    if (!formData.ayurvedic_constitution)
      newErrors.ayurvedic_constitution = "Constitution is required";
    if (!formData.dietary_habits)
      newErrors.dietary_habits = "Dietary habit is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const patientData: Omit<Patient, "id" | "created_at" | "updated_at"> = {
      name: formData.name.trim(),
      age: Number(formData.age),
      gender: formData.gender as Patient["gender"],
      weight: 0,
      height: 0,
      contact: formData.contact.trim(),
      email: formData.email.trim() || undefined,
      medical_history: "",
      dietary_habits: formData.dietary_habits as Patient["dietary_habits"], // ✅ no hardcode
      meal_frequency: 3,
      water_intake: 8,
      bowel_movements: "regular",
      exercise_level: "light",
      allergies: [],
      current_medications: "",
      ayurvedic_constitution:
        formData.ayurvedic_constitution as Patient["ayurvedic_constitution"],
    };

    onSave(patientData);
  };

  return (
    <Card className="max-w-3xl mx-auto mt-10 rounded-2xl shadow-lg bg-white dark:bg-neutral-900">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          🧾 New Patient Form
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name + Age */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name}</p>
              )}
            </div>
            <div>
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                value={formData.age}
                onChange={(e) => handleChange("age", e.target.value)}
                className={errors.age ? "border-red-500" : ""}
              />
              {errors.age && (
                <p className="text-red-500 text-xs">{errors.age}</p>
              )}
            </div>
          </div>

          {/* Gender */}
          <div>
            <Label htmlFor="gender">Gender</Label>
            <Select
              onValueChange={(val) => handleChange("gender", val)}
              value={formData.gender}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.gender && (
              <p className="text-red-500 text-xs">{errors.gender}</p>
            )}
          </div>

          {/* Ayurvedic Constitution */}
          <div>
            <Label>Ayurvedic Constitution</Label>
            <Select
              onValueChange={(val) =>
                handleChange("ayurvedic_constitution", val)
              }
              value={formData.ayurvedic_constitution}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select constitution" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vata">Vata</SelectItem>
                <SelectItem value="pitta">Pitta</SelectItem>
                <SelectItem value="kapha">Kapha</SelectItem>
                <SelectItem value="vata-pitta">Vata-Pitta</SelectItem>
                <SelectItem value="pitta-kapha">Pitta-Kapha</SelectItem>
                <SelectItem value="vata-kapha">Vata-Kapha</SelectItem>
              </SelectContent>
            </Select>
            {errors.ayurvedic_constitution && (
              <p className="text-red-500 text-xs">
                {errors.ayurvedic_constitution}
              </p>
            )}
          </div>

          {/* Dietary Habits */}
          <div>
            <Label>Dietary Habits</Label>
            <Select
              onValueChange={(val) => handleChange("dietary_habits", val)}
              value={formData.dietary_habits}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select dietary habit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vegetarian">Vegetarian</SelectItem>
                <SelectItem value="non-vegetarian">Non-Vegetarian</SelectItem>
                <SelectItem value="vegan">Vegan</SelectItem>
                <SelectItem value="jain">Jain</SelectItem>
              </SelectContent>
            </Select>
            {errors.dietary_habits && (
              <p className="text-red-500 text-xs">{errors.dietary_habits}</p>
            )}
          </div>

          {/* Contact */}
          <div>
            <Label htmlFor="contact">Contact Number</Label>
            <Input
              id="contact"
              value={formData.contact}
              onChange={(e) => handleChange("contact", e.target.value)}
              className={errors.contact ? "border-red-500" : ""}
            />
            {errors.contact && (
              <p className="text-red-500 text-xs">{errors.contact}</p>
            )}
          </div>

          {/* Save & Cancel */}
          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline" type="button" onClick={onCancel}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-vibrant-teal hover:bg-vibrant-teal/90"
            >
              Save Patient
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

// 🟢 Page Wrapper
const NewPatient: React.FC = () => {
  const navigate = useNavigate();

  const handleSave = (
    patient: Omit<Patient, "id" | "created_at" | "updated_at">
  ) => {
    console.log("Saved Patient:", patient);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-vibrant-teal/5 to-soft-coral/5">
      {/* Header */}
      <div className="p-4 border-b bg-background/70 backdrop-blur-sm sticky top-0 z-30">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/dashboard")}
              className="hover:scale-105 transition-transform"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-vibrant-teal rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-space font-bold">
                  Niraah Ayurveda
                </h1>
                <p className="text-sm text-muted-foreground">
                  Your healing journey begins here
                </p>
              </div>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Patient Form */}
      <div className="p-6">
        <PatientForm
          onSave={handleSave}
          onCancel={() => navigate("/dashboard")}
        />
      </div>
    </div>
  );
};

export default NewPatient;
