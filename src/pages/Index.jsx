import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Application</h1>
      <p className="text-xl mb-6">This is a simple web application that you can modify and build upon.</p>
      <Button asChild>
        <Link to="/about">Get Started</Link>
      </Button>
    </div>
  );
};

export default Index;