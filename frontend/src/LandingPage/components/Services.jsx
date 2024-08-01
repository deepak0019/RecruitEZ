import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";

const serviceList = [
  {
    title: "AI-Powered Insights:",
    description:
      "Enhance hiring efficiency with AI-powered resume scoring on RecruitEZ Platform, ensuring precise candidate evaluation and streamlined recruitment processes.",
    icon: <ChartIcon />,
  },
  {
    title: "Recruiter Dashboard",
    description:
      "Manage job creation, updates, and candidate interactions seamlessly with RecruitEZ Platform's centralized recruiter dashboard.",
    icon: <WalletIcon />,
  },
  {
    title: "Candidate Dashboard",
    description:
      "Navigate job opportunities and applications effortlessly with RecruitEZ Platform's user-friendly candidate dashboard, designed for enhanced job-seeking experiences.",
    icon: <MagnifierIcon />,
  },
  {
    title: "Recruitment Pipeline",
    description:
      "Streamline the entire recruitment process from job creation to hiring decisions with RecruitEZ Platform's end-to-end solutions, ensuring cohesive and efficient operations.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32" id="Service">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            {/* <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Client-Centric{" "}
            </span> */}
            Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            RecuruitEZ Platform delivers comprehensive services designed for
            seamless recruitment and efficient hiring processes, featuring
            AI-powered insights and intuitive dashboards tailored to optimize
            your recruitment journey.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src="/images/hero.png"
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
