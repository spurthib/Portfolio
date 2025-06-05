// app/experience/page.js
export default function Experience() {
  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '1300px', 
      margin: '0 auto', 
      color: '#000', 
      lineHeight: '1.6',
      '@media (max-width: 768px)': { // Responsive padding for mobile
        padding: '10px', 
      },
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Experience</h1>

      {/* FDA Section */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>U.S. Food & Drug Administration (FDA)</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px', fontStyle: 'italic' }}>Jan 2024 – Present</p>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
          <li>Built a Retrieval-Augmented Generation (RAG) pipeline using LangChain to enable accurate, context-aware question answering from internal document repositories.</li>
          <li>Leveraged Nomic Embed models to generate high-quality vector embeddings for semantic search and similarity comparisons.</li>
          <li>Used MongoDB to store raw documents and metadata, and ChromaDB to persist and query vector embeddings for real-time retrieval.</li>
          <li>Designed robust chunking strategies to split documents contextually before embedding, improving retrieval precision and LLM performance.</li>
          <li>Automated the end-to-end RAG pipeline in Python, from document ingestion and chunking to embedding generation and similarity-based retrieval.</li>
          <li>Benchmarked LLMs (LLaMA 3.x, MistralAI) across three datasets, improving QA response accuracy by 15% and reducing latency by 25% through custom prompt strategies.</li>
          <li>Explored and identified biomedical datasets for LLM-based question-answering tasks, aligning data sources with model capabilities.</li>
          <li>Led data cleaning and preprocessing efforts for biomedical datasets, ensuring high-quality, structured input to improve model training and inference.</li>
          <li>Automated LLM data pipelines using Python and AWS CLI, reducing preprocessing time by 40% and accelerating model evaluation cycles.</li>
          <li>Deployed pre-trained foundation models using AWS Bedrock, reducing deployment time by 20% and enabling scalable, low-latency AI applications.</li>
          <li>Packaged and containerized applications using Docker, optimized image sizes, and managed dependencies with virtual environments and requirements.txt.</li>
          <li>Deployed containerized apps on AWS EC2 and validated performance in high-compute environments with GPU acceleration.</li>
          <li>Engineered production-ready systemd services to ensure 99.9% uptime and automatic recovery after system reboots.</li>
          <li>Automated key operational tasks including system updates, log capture, and monitoring to streamline system management and reduce manual effort.</li>
          <li>Established a new pre-production environment to bridge development and production workflows, improving deployment stability.</li>
          <li>Designed and implemented a benchmarking system using SQLite3 to track and analyze LLM outputs, supporting data-driven prompt tuning.</li>
          <li>Led QA benchmarking initiatives, improving reference accuracy by 20% and delivering monthly evaluation reports to guide LLM enhancements.</li>
          <li>Utilized Amazon S3 for storing and accessing data, enabling efficient uploads, downloads, and integration with cloud-based pipelines.</li>
          <li>Configured and managed AWS CLI to automate resource provisioning, deployments, and system monitoring.</li>
          <li>Used GitLab for source control and CI/CD pipelines, ensuring efficient code collaboration, change tracking, and release management.</li>
          <li>Leveraged aider-chat, an AI-powered coding assistant, to accelerate development, improve code quality, and reduce debugging time.</li>
          <li>Collaborated with cross-functional teams to secure GPU access and optimize AI model performance across distributed infrastructure.</li>
          <li>Provided ongoing documentation, support, and system enhancements to maintain reliability and ensure operational efficiency.</li>
        </ul>
        <p style={{ fontSize: '1.2rem', marginTop: '10px', fontStyle: 'italic' }}>
          <strong>Environment:</strong> <strong>AWS</strong>, <strong>RAG</strong>, <strong>LLM</strong>, <strong>Bash</strong>, <strong>Python</strong>, <strong>GitLab</strong>, <strong>Docker</strong>, <strong>AWS Bedrock</strong>
        </p>
      </div>

      {/* LearnBeyond Consulting Section */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>LearnBeyond Consulting</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px', fontStyle: 'italic' }}>Dec 2021 – Jan 2024</p>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
            <li>Experience in distributed messaging systems like Apache Pulsar (similar to Apache Kafka) for building scalable, real-time data streaming applications.</li>
            <li>Automated CI/CD pipelines using Jenkins and Python, slashing deployment time by 35% and increasing release frequency by 2x.</li>
            <li>Developing tooling and automation for environment, containers, and build & deployment pipelines.</li>
            <li>Deep understanding of different messaging paradigms (pub/sub, queuing), as well as delivery models, quality-of-service, and fault-tolerance architectures.</li>
            <li>Deep understanding of the Pulsar architecture along with interplay of architecture components: brokers, Zookeeper, producers/consumers, Bookkeeper, Streams.</li>
            <li>Designed AWS security group policies, enhancing VPC protection and reducing incident alerts by 30%.</li>
            <li>Implemented and maintained the monitoring and alerting of production and corporate servers/storage using AWS CloudWatch.</li>
            <li>Developed and maintained automated build and deployment scripts using Jenkins, CloudFormation, and Bash, reducing deployment time by 35% and enhancing release frequency.</li>
            <li>Created and developed deployments, namespaces, Pods, Services, health checks, and persistent volumes for Kubernetes.</li>
            <li>Responsible for Continuous Integration (CI) and Continuous Delivery (CD) process implementation using Jenkins Pipelines along with Python and Shell scripts to automate routine jobs.</li>
            <li>Configured ServiceNow to receive instant notifications of any configuration changes in cloud environment.</li>
            <li>Created and optimized real-time monitoring dashboards in Datadog, improving system monitoring efficiency and reducing MTTR by 40%, resulting in faster incident resolution.</li>
            <li>Experience on Elasticsearch, Logstash, Prometheus, Kibana for centralized logging and storing logs with S3 Bucket using Lambda Function.</li>
            <li>Troubleshot and fixed production and pre-production issues as required, and documented/communicated resolution notes to team members.</li>
            <li>Participated in 24x7 On-call rotation.</li>
        </ul>
        <p style={{ fontSize: '1.2rem', marginTop: '10px', fontStyle: 'italic' }}>
          <strong>Environment:</strong> <strong>Jenkins</strong>, <strong>Pulsar</strong>, <strong>Kafka</strong>, <strong>AWS</strong>, <strong>Grafana</strong>, <strong>ULM</strong>, <strong>Bash</strong>, <strong>Python</strong>, <strong>GitLab</strong>
        </p>
      </div>

      {/* Accenture Section */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Accenture</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px', fontStyle: 'italic' }}>Jan 2014 – July 2018</p>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
          <li>Handled SAP SD (Sales & Distribution) and SAP MM (Material Management) modules.</li>
          <li>Automated customizations using the LSMW tool.</li>
          <li>Expert in Shipping Point Determination, Route Determination, Transport and Delivery Scheduling, Backward Delivery Scheduling, Partial and Complete Delivery processes.</li>
          <li>Worked on MTS (Make-to-Stock), MTO (Make-to-Order), Make-to-Order for Configurable Material, Stock Requirement/MRP Lists, Variant Configuration, Super BOMs, and Phantom Items.</li>
          <li>Improved productivity by resolving change requests within the defined turnaround time.</li>
          <li>Developed and executed test plans and test cases to ensure system functionality.</li>
          <li>Identified bugs, utilized defect tracking systems, and monitored non-testable software issues.</li>
        </ul>
      </div>

      {/* Soniks Consulting Section */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Soniks Consulting</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px', fontStyle: 'italic' }}>June 2013 – Dec 2013</p>
          <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
            <li>Performed day-to-day tasks such as monitoring log files and writing/running scripts to automatically track resource usage including CPU and memory.</li>
            <li>Created users and groups for specific departments and configured DHCP for dynamic IP assignment.</li>
            <li>Wrote shell scripts to automate jobs, system monitoring, and error reporting.</li>
            <li>Managed SVN repositories, handling code branching and merging operations.</li>
            <li>Used PuTTY for reading, writing, and executing PERL and Shell scripts.</li>
            <li>Performed User Acceptance Testing (UAT) across test scenarios before finalizing for business review.</li>
            <li>Worked with ServiceNow to manage change requests and respond to reported incidents.</li>
            <li>Monitored servers and escalated emergency technical issues to maintain system uptime.</li>
            <li>Demonstrated strong scripting skills (Python, Bash) to design and implement infrastructure automation.</li>
            <li>Provided after-hours technical support as part of an on-call rotation schedule.</li>
            <li>Prepared various statistical and financial reports using Microsoft Excel.</li>
            <li>Exhibited strong communication skills and the ability to collaborate with project teams, stakeholders, and cross-functional departments.</li>
          </ul>
        <p style={{ fontSize: '1.2rem', marginTop: '10px', fontStyle: 'italic' }}>
          <strong>Environment:</strong> <strong>Linux</strong>, <strong>Bash script</strong>, <strong>MS Office</strong>, <strong>SVN</strong>
        </p>
      </div>
    </div>
  );
}