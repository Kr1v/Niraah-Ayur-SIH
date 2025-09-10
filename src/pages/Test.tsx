import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Test Page</h1>
        <p className="text-muted-foreground">If you can see this, the app is working!</p>
        <Button onClick={() => navigate("/")}>
          Go to Home
        </Button>
      </div>
    </div>
  );
};

export default Test;

