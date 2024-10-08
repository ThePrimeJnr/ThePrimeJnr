interface ServiceItemProps {
  icon: string;
  title: string;
  description: string;
}

function ServiceItem({ icon, title, description }: ServiceItemProps) {
  return (
    <li className="service-item flex flex-col items-center text-center relative bg-gradient-to-br from-[#404040] to-[#40404000] p-5 rounded-xl shadow-lg">
      <img src={icon} alt={`${title} icon`} width="40" />
      <div className="service-content-box mt-4">
        <h4 className="h4 service-item-title text-white text-lg font-bold">{title}</h4>
        <p className="service-item-text text-gray-300">{description}</p>
      </div>
    </li>
  );
}


function ServiceList() {
  const services = [
    {
      icon: "/icons/rest-api-icon.svg",
      title: "Web Design",
      description:
        "The most modern and high-quality design made at a professional level.",
    },
    {
      icon: "/assets/images/icon-dev.svg",
      title: "Web Development",
      description:
        "High-quality development of sites at the professional level.",
    },
    {
      icon: "/assets/images/icon-app.svg",
      title: "Mobile Apps",
      description:
        "Professional development of applications for iOS and Android.",
    },
    {
      icon: "/assets/images/icon-photo.svg",
      title: "Photography",
      description:
        "I make high-quality photos of any category at a professional level.",
    },
  ];

  return (
    <ul className="service-list flex flex-col my-2 gap-4">
      {services.map((service) => (
        <ServiceItem
          key={service.title}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </ul>
  );
}

export default function Service() {
  return (
    <section className="service">
      <h3 className="service-title">What I&apos;m doing</h3>
      <ServiceList />
    </section>
  );
}
