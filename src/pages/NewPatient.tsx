import React, { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Leaf, Plus } from "lucide-react";
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

const PatientForm: React.FC<PatientFormProps> = ({
  patient,
  onSave,
  onCancel,
}) => {
  const [formData, setFormData] = useState({
    name: patient?.name || "",
    age: patient?.age?.toString() || "",
    gender: patient?.gender || "",
    weight: patient?.weight?.toString() || "",
    height: patient?.height?.toString() || "",
    contact: patient?.contact || "",
    email: patient?.email || "",
    medical_history: patient?.medical_history || "",
    dietary_habits: patient?.dietary_habits || "",
    meal_frequency: patient?.meal_frequency?.toString() || "",
    water_intake: patient?.water_intake?.toString() || "",
    bowel_movements: patient?.bowel_movements || "",
    exercise_level: patient?.exercise_level || "",
    allergies: patient?.allergies?.join(", ") || "",
    ayurvedic_constitution: patient?.ayurvedic_constitution || "",
  });

  const [prescriptions, setPrescriptions] = useState<string[]>([""]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handlePrescriptionChange = (index: number, value: string) => {
    const newPrescriptions = [...prescriptions];
    newPrescriptions[index] = value;
    setPrescriptions(newPrescriptions);
  };
  const navigate = useNavigate();
  const addPrescriptionField = () => {
    setPrescriptions((prev) => [...prev, ""]);
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
      weight: Number(formData.weight),
      height: Number(formData.height),
      contact: formData.contact.trim(),
      email: formData.email.trim() || undefined,
      medical_history: formData.medical_history.trim(),
      dietary_habits: formData.dietary_habits as Patient["dietary_habits"],
      meal_frequency: Number(formData.meal_frequency),
      water_intake: Number(formData.water_intake),
      bowel_movements: formData.bowel_movements as Patient["bowel_movements"],
      exercise_level: formData.exercise_level as Patient["exercise_level"],
      allergies: formData.allergies
        .split(",")
        .map((a) => a.trim())
        .filter(Boolean),
      current_medications: prescriptions
        .filter((p) => p.trim() !== "")
        .join(", "),
      ayurvedic_constitution:
        formData.ayurvedic_constitution as Patient["ayurvedic_constitution"],
    };

    onSave(patientData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-vibrant-teal/5 to-soft-coral/5 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating organic shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-vibrant-teal/20 to-transparent rounded-blob animate-blob"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-soft-coral/20 to-transparent animate-morph"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-lavender/20 to-transparent rounded-organic animate-float"></div>

        {/* Particle field */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-vibrant-teal rounded-full animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="relative z-20 p-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
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
                <Label>Name</Label>
                <Input
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name}</p>
                )}
              </div>
              <div>
                <Label>Age</Label>
                <Input
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleChange("age", e.target.value)}
                />
                {errors.age && (
                  <p className="text-red-500 text-xs">{errors.age}</p>
                )}
              </div>
            </div>

            {/* Gender */}
            <div>
              <Label>Gender</Label>
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
            </div>

            {/* Weight + Height */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Weight (kg)</Label>
                <Input
                  type="number"
                  value={formData.weight}
                  onChange={(e) => handleChange("weight", e.target.value)}
                />
              </div>
              <div>
                <Label>Height (cm)</Label>
                <Input
                  type="number"
                  value={formData.height}
                  onChange={(e) => handleChange("height", e.target.value)}
                />
              </div>
            </div>

            {/* Contact + Email */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Contact</Label>
                <Input
                  value={formData.contact}
                  onChange={(e) => handleChange("contact", e.target.value)}
                />
                {errors.contact && (
                  <p className="text-red-500 text-xs">{errors.contact}</p>
                )}
              </div>
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
            </div>

            {/* Medical History */}
            <div>
              <Label>Medical History</Label>
              <Input
                value={formData.medical_history}
                onChange={(e) =>
                  handleChange("medical_history", e.target.value)
                }
              />
            </div>

            {/* Dietary Habits */}
            <div>
              <Label>Dietary Habits</Label>
              <Select
                onValueChange={(val) => handleChange("dietary_habits", val)}
                value={formData.dietary_habits}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vegetarian">Vegetarian</SelectItem>
                  <SelectItem value="non-vegetarian">Non-Vegetarian</SelectItem>
                  <SelectItem value="vegan">Vegan</SelectItem>
                  <SelectItem value="jain">Jain</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Meal frequency + Water intake */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Meal Frequency</Label>
                <Input
                  type="number"
                  value={formData.meal_frequency}
                  onChange={(e) =>
                    handleChange("meal_frequency", e.target.value)
                  }
                />
              </div>
              <div>
                <Label>Water Intake (glasses)</Label>
                <Input
                  type="number"
                  value={formData.water_intake}
                  onChange={(e) => handleChange("water_intake", e.target.value)}
                />
              </div>
            </div>

            {/* Bowel movements */}
            <div>
              <Label>Bowel Movements</Label>
              <Select
                onValueChange={(val) => handleChange("bowel_movements", val)}
                value={formData.bowel_movements}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="regular">Regular</SelectItem>
                  <SelectItem value="constipated">Constipated</SelectItem>
                  <SelectItem value="loose">Loose</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Exercise level */}
            <div>
              <Label>Exercise Level</Label>
              <Select
                onValueChange={(val) => handleChange("exercise_level", val)}
                value={formData.exercise_level}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedentary">Sedentary</SelectItem>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="very-active">Very Active</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Allergies */}
            <div>
              <Label>Allergies (comma separated)</Label>
              <Input
                value={formData.allergies}
                onChange={(e) => handleChange("allergies", e.target.value)}
              />
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
                  <SelectValue placeholder="Select" />
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
            </div>

            {/* Prescriptions with add button */}
            <div>
              <Label>Medicinal Prescriptions</Label>
              {prescriptions.map((p, i) => (
                <div key={i} className="flex gap-2 mb-2">
                  <Input
                    value={p}
                    onChange={(e) =>
                      handlePrescriptionChange(i, e.target.value)
                    }
                    placeholder={`Prescription #${i + 1}`}
                  />
                  {i === prescriptions.length - 1 && (
                    <Button
                      type="button"
                      size="icon"
                      onClick={addPrescriptionField}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
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
    </div>
  );
};

export default PatientForm;
