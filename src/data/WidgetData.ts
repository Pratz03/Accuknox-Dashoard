export const categoryData = [
  {
    categoryName: "CSPM Executive Dashboard",
    widgets: [
      {
        name: "Cloud Accounts",
        description:
          "Displays all connected cloud accounts along with their compliance posture, configuration issues, and activity logs for better visibility.",
      },
      {
        name: "Cloud Account Risk Assessment",
        description:
          "Analyzes misconfigurations, policy violations, and compliance risks in cloud accounts based on security best practices and frameworks.",
      },
    ],
  },
  {
    categoryName: "CWPP Dashboard",
    widgets: [
      {
        name: "Top 5 Namespace Specific Alerts",
        description:
          "Highlights the most critical security alerts detected in Kubernetes namespaces, helping prioritize urgent workload vulnerabilities.",
      },
      {
        name: "Workload Alerts",
        description:
          "Provides a real-time view of security issues and suspicious behavior found in containerized or virtualized workloads across environments.",
      },
    ],
  },
  {
    categoryName: "Registry Scan",
    widgets: [
      {
        name: "Image Risk Assessment",
        description:
          "Performs in-depth analysis of container images to detect vulnerabilities, outdated packages, and policy violations before deployment.",
      },
      {
        name: "Image Security Issues",
        description:
          "Identifies high-risk security flaws, misconfigurations, and malware in scanned images stored within private and public registries.",
      },
    ],
  },
];
