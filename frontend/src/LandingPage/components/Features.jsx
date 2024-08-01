import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Responsive Design",
    description:
      "RecruitEZ Platform adapts seamlessly to any device, ensuring a flawless experience for job seekers and recruiters alike. Our responsive design guarantees accessibility, enhances user engagement, and maintains consistent performance across desktops, tablets, and smartphones. Enjoy a future-proof, user-friendly recruitment journey with RecruitEZ Platform.",
    image: "/images/f1.png",
  },
  {
    title: "Intuitive Dashboards",
    description:
      "RecruitEZ Platform's intuitive dashboards provide a streamlined and user-friendly interface for job seekers and recruiters. Easily navigate and manage your recruitment process with real-time data, customizable views, and actionable insights. Enhance your decision-making and experience a more efficient hiring journey with our intuitive dashboards.",
    image: "/images/f2.png",
  },
  {
    title: "AI-Powered insights",
    description:
      "RecruitEZ Platform utilizes AI to score candidate resumes, providing precise insights for efficient hiring decisions. Experience streamlined recruitment with our cutting-edge technology.",
    image: "/images/f3.png",
  },
];

const featureList = [
  // "Dark/Light theme",
  "Recruiter dashboard",
  "Jobs creation",
  "Jobs updation",
  "Requirement form",
  "AI powered ATS score generation of candidates applied",
  "Send mail to the selected candidates for interview",
  "Candidates management",
  "Complete recruitment pipeline from jobs creation to hiring",
];

const featureListCand = [
  // "Dark/Light theme",
  "Candidate dashboard",
  "Search jobs by fiter",
  "Apply for the job",
  "Get updates by mail",
  "Jobs management",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        <h1 className="text-2xl font-bold">For Recruiters</h1>
        {featureList.map((feature) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap mt-8 md:justify-center gap-6">
        <h1 className="text-2xl font-bold ">For Candidates</h1>
        {featureListCand.map((feature) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
