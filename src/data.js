// All content comes from the CV. Edit here to update the site.
export const profile = {
  name: "Kyrolos Nissem Abdelsyed Youssef",
  role: "Junior Data Engineer",
  location: "Cairo, Egypt",
  summary:
    "Junior Data Engineer focused on building end-to-end data pipelines and real-time streaming systems. I combine a Mechanical Power Engineering background and hands-on industrial maintenance experience to translate complex operational processes into scalable data solutions, with experience designing ETL/ELT workflows and lakehouse architectures.",
  interests: ["Data Engineering", "AI Integration", "Mechanical Engineering", "Predictive Maintenance"],
};
export const experience = [
  { role: "Data Engineer & AI Specialist Trainee", org: "Digilians – Military Academy", place: "Cairo, Egypt", period: "Jan 2026 – Jun 2026", points: [
    "Architected and optimized 5+ ETL/ELT pipelines using Python and SQL to automate ingestion, transformation and delivery.",
    "Built distributed processing solutions with Apache Spark and the Hadoop ecosystem for batch and streaming workloads across 3+ data sources.",
    "Created LLM-based automation workflows for data analysis, reducing manual reporting and analysis time by 25%.",
    "Used Azure Data Factory for orchestration, monitoring and deployment of 4+ data engineering solutions."] },
  { role: "Property Consultant (Resale)", org: "Crest Real Estate", place: "Cairo, Egypt", period: "Jun 2025 – Jan 2026", points: [
    "Analyzed client requirements and market trends for 30+ prospective investors across 4 high-growth regions.",
    "Collaborated with 20+ stakeholders and developers through the sales lifecycle.",
    "Consistently achieved 95%+ of monthly performance KPIs in a target-driven environment."] },
  { role: "Maintenance Engineer", org: "Samcrete for Building Systems", place: "El-Sadat City, Egypt", period: "Jun 2024 – Mar 2025", points: [
    "Diagnosed complex equipment failures, reducing machine downtime by 15% across 4 production lines.",
    "Enforced preventive maintenance schedules, cutting unplanned downtime by 20% across 50+ industrial assets.",
    "Coordinated with 3 production teams, ensuring 100% safety compliance."] },
  { role: "Maintenance Engineer Trainee", org: "Fresh Electric for Home Appliances", place: "10th of Ramadan City, Egypt", period: "Jul 2023 – Sep 2023", points: [
    "Supported preventive and corrective maintenance across 3+ assembly lines producing 1,000+ appliances daily.",
    "Assisted in diagnosing and resolving 15+ mechanical equipment faults under industrial safety standards."] },
];
export const projects = [
  { title: "Smart Predictive Maintenance System", stack: "Python · Kafka · Spark Structured Streaming · FastAPI · TensorFlow · Airflow · Docker · Grafana · Power BI · Azure", points: [
    "Real-time platform ingesting industrial IoT sensor data through Kafka and processing streams with Spark Structured Streaming.",
    "Trained Random Forest and LSTM models on simulated datasets of 50K+ sensor records for failure prediction and anomaly detection.",
    "FastAPI microservices for real-time machine health scoring; Airflow for retraining and scheduling; Docker for reproducible deployment.",
    "Grafana monitoring dashboards and Power BI executive reporting."] },
  { title: "Tourism & Heritage Analytics Warehouse – Egypt", stack: "Kafka · Spark · Delta Lake · dbt · Trino · PostgreSQL · MinIO · Power BI · Docker · Python", points: [
    "Lakehouse platform following Medallion Architecture (Bronze, Silver, Gold) over multi-source tourism and heritage data.",
    "Real-time CDC pipelines with Kafka, Debezium and Spark Structured Streaming.",
    "Delta Lake on MinIO with dbt star-schema models; Trino and PostgreSQL for analytical queries; Power BI dashboards.",
    "Orchestrated with Docker Compose across 10+ containerized services."] },
];
export const skills = [
  ["Data Engineering & Processing", "Python, SQL, PySpark, Apache Spark, Hadoop, ETL/ELT, Batch Processing, Delta Lake, Data Modeling, Data Warehousing, Data Lakes"],
  ["Streaming & Orchestration", "Apache Kafka, Spark Structured Streaming, Apache Airflow, Debezium, CDC Pipelines"],
  ["Cloud & DevOps", "Microsoft Azure, Azure Data Factory, Docker, Git"],
  ["Analytics & BI", "dbt, Trino, PostgreSQL, Power BI, Grafana, Pandas, NumPy, Scikit-learn, TensorFlow"],
  ["AI & Automation", "LLM Integration, LangChain, Agentic AI, Prompt Engineering, FastAPI"],
].map(([group, items]) => ({ group, items: items.split(", ") }));
export const education = {
  degree: "Bachelor of Engineering in Mechanical Power Engineering",
  school: "Zagazig University, Egypt", year: "Graduated 2026",
  project: "Performance Study of a 3-Blade Upwind Horizontal-Axis Wind Turbine", grade: "A+",
};
export const certifications = [
  "Microsoft Certified: Azure Fundamentals (DP-900)", "Data Engineering Specialist — Digilians, Military Academy",
  "Big Data with Spark and Hadoop — IBM", "SQL Associate — DataCamp", "Python Data Associate — DataCamp",
];
export const languages = [["Arabic", "Native"], ["English", "Professional Working Proficiency"]];
