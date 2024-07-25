import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <Input type="text" placeholder="Name" required />
        <Input type="email" placeholder="Email" required />
        <Textarea placeholder="Message" required />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Contact;