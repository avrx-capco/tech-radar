const ClientProjects = [
  {
    project: "GLOBAL DevOpS Acceleration",
    clientName: "Global Tier 1 Private Bank",
    clientImage: "CL1",
    description:
      "Capco delivered a DevOps acceleration program focused on improving delivery quality and speed.  This included integrating existing tools to improve developer experience, simplifying consumption of existing internal Kubernetes services, cloud migration, uplifting the platforms observability and monitoring maturity, re-engineering for containerization, building a single pane of glass portal, and training global teams e.g., India, China.",
    technologies: ["Go", "Docker", "AWS", "Kubernetes", "Datadog"],
  },
  {
    project: "Agency Bank Payment APIs",
    clientName: "UK Tier 1 Corporate Bank",
    clientImage: "CL2",
    description:
      "Capco were engaged by a Tier 1 Private Bank to significantly improve the experience & functionality of their client digital channels.  Capco provided technology delivery, software engineering and test automation expertise.  The project included building APIs into the backend systems for new features, improving the nascent Angular web app, migrating it to React, breaking the monolith app into micro frontends, and creating component library for reuse in other applications.",
    technologies: ["Angular", "React", "Spring Boot", "Kubernetes", "Datadog"],
  },
  {
    project: "Digital Small Business Bank",
    clientName: "UK Tier 1 Bank",
    clientImage: "CL3",
    description:
      "Driven by market disruption and a shift in customer expectations, Capco helped NatWest to design and launch a new SME bank in just six months. We worked with FinTech partners to build a greenfield, cloud-based tech stack and set up customer operations ready to launch and scale. The solution is built fully cloud-native on AWS, using Kafka for event-driven architecture, Spring Boot microservices, and a React Native mobile app. Capco also uses Grafana as the visualisation tool to monitor metrics and provide a dashboard for the overall performance using various metrics like Kafka metrics, API metrics, Kubernetes pod metrics, System metrics, 3rd party service metrics, etc.",
    technologies: [
      "React",
      "Spring Boot",
      "Docker",
      "Kubernetes",
      "AWS",
      "Kafka",
      "Grafana",
    ],
  },
  {
    project: "Global Payments Platform",
    clientName: "Global Tier 1 Bank",
    clientImage: "CL4",
    description:
      "Capco are engaged in a multi-year program to design, build and migrate a Tier 1 payment infrastructure to a hybrid cloud-native platform, using GCP and Anthos.  In terms of criticality & scale, when completed in 2022 the payment flows through the platform will be c.$3tn p.a.  The entire stack is being built cloud-native – below is a small subset of the technologies.  In addition Capco are moving support teams towards an SRE model.",
    technologies: ["Terraform", "Vault", "Consul", "GCP", "Anthos"],
  },
  {
    project: "Customer Online Banking",
    clientName: "Global Tier 1 Private Bank",
    clientImage: "CL5",
    description:
      "Capco were engaged by a Tier 1 Private Bank to significantly improve the experience & functionality of their client digital channels.  Capco provided technology delivery, software engineering and test automation expertise.  The project included building APIs into the backend systems for new features, improving the nascent Angular web app, migrating it to React, breaking the monolith app into micro frontends, and creating component library for reuse in other applications.",
    technologies: ["Angular", "React", "Spring Boot", "Docker", "Jest"],
  },
  {
    project: "Client Perimeter Microservices",
    clientName: "Global Tier 1 Bank",
    clientImage: "CL6",
    description:
      "Capco were engaged to upgrade KYC and onboarding processes & technology for Corporate, Wealth and Investment Bank clients of a global Tier 1 bank, specifically to meet regulatory requirements.  Technically, Capco built a standard set of APIs and microservices using Spring Boot to wrap existing backend systems, this were deployed on to the banks PaaS solution provided by OpenShift.",
    technologies: [
      "Spring Boot",
      "Open API",
      "Cucumber",
      "Splunk",
      "OpenShift",
    ],
  },
  {
    project: "Wealth Client Portal",
    clientName: "Swiss Wealth Manager",
    clientImage: "CL7",
    description:
      "Capco delivered a wealth management client portal to enable internal staff to manage and service their end clients.  The solution was cloud-native and built on Microsoft Azure, and integrated into existing client backend systems and Office 365 for tight integration to existing and new collaboration tools (e.g., document management, back-office workflow, emails).",
    technologies: ["React", "Spring Boot", "Docker", "Office 365", "Azure"],
  },
  {
    project: "Business Loan Application APIs",
    clientName: "UK Tier 1 Bank",
    clientImage: "CL8",
    description:
      "Capco defined the future state architecture of the client’s loan integration with marketplaces. Capco worked closely with the client teams to build a best practice API layer using Azure functions and Typescript available through Apigee. In addition Capco engineers upskilled client engineers by running a hackathon day for the APIs.  The project was successfully completed with a 3.5 months timeline.",
    technologies: ["TypeScript", "Node", "Postman", "Azure", "Jest"],
  },
  {
    project: "Mobile Banking Remediation",
    clientName: "Global Tier 1 Bank",
    clientImage: "CL9",
    description:
      "Capco performed a holistic assessment of the client’s current mobile applications, architectures, development standards and implementation.  Our team set new standards, implemented coding design principles, deployed a new DevOps pipeline, implemented automation testing and restructured and refactored the current applications, reducing development time/cost which significantly increased customer app ratings.",
    technologies: ["Swift", "Kotlin", "HockeyApp", "Jenkins", "Fastlane"],
  },
  {
    project: "Transaction Banking",
    clientName: "Global Tier 1 Bank",
    clientImage: "CL10",
    description:
      "Capco uses Apache Hadoop echosystem as part of Cloudera distribution to run their processes in their on premises environment mainly focussed on ETL, ELT batch scenarios. They also use Apache Spark and Apache Hive as two main components of their framework but also use particulary other Apache Hadoop components like Oozie, HBase, all integrated with Kerberos security.",
    technologies: ["Apache Hadoop", "Apache Spark", "Apache Hive"],
  },
  {
    project: "Mobile Transaction App",
    clientName: "French Neobank",
    clientImage: "CL2",
    description:
      "Capco worked with a challenger bank on developing a robust and scalable mobile banking app, utilizing our expertise in Gradle. We took advantage of Gradle's powerful features such as multi-module builds, custom plugins, and advanced dependency management to streamline their development process and deliver a high-quality app quickly. We helped the client to make use of dynamic feature modules and instant apps, which allowed us to deliver a smaller, more focused app to users, which is great for those who have limited storage on their devices. With Gradle's ability to automate testing and deployment, we helped them to thoroughly test the app and deploy it smoothly.",
    technologies: ["Gradle Mobile", "Firebase"],
  },
];

export default ClientProjects;
