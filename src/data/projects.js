export const projects = [
  {
    slug: 'project-one',
    title: 'Project VQC',
    description: 'Visual Quality Control system for head cylinder inspection.',
    heroImage: 'public/pictures/VQC/Hero.jpg',
    gallery: [
      'public/pictures/VQC/Hero.jpg'
    ],
    content: `
      <p>This project focuses on the design and development of a Visual Quality Control (VQC) system for inspecting engine head cylinders during manufacturing. The goal of the system is to automate the inspection process, ensuring consistent, high-quality output while reducing human error and inspection time. The head cylinder is a critical engine component that requires precise machining and assembly tolerances; even minor surface defects or dimensional deviations can significantly impact engine performance and reliability. The VQC system aims to detect defects such as surface scratches, dents, porosity, and dimensional inconsistencies using advanced image processing and machine vision techniques.</p>

      <p>The system will integrate high-resolution industrial cameras, AI-based defect detection algorithms, and automated lighting and positioning systems to capture and analyze images of the head cylinder from multiple angles. Using deep learning and computer vision models, the VQC will classify acceptable and defective parts based on predefined quality parameters. The data will be processed in real time, allowing immediate feedback to the production line for corrective action. This ensures that defective parts are identified early in the process, reducing waste and rework costs.</p>

      <p>In addition to visual inspection, the project includes developing a user-friendly interface and data logging system for tracking inspection results and performance metrics over time. The system will be designed for scalability and adaptability, allowing it to be integrated into various production lines and adjusted for different cylinder head models. Ultimately, the VQC for head cylinders will enhance quality assurance, improve production efficiency, and support the company’s move toward Industry 4.0 standards in smart manufacturing.</p>
    `,
    team: [
      { id: 'amir-hasanpor', role: 'Product Lead' },
      { id: 'liam-smith', role: 'Engineering' },
      { id: 'noah-lee', role: 'Design' }
    ]
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    description: 'A data pipeline and analytics overhaul to surface business insights faster.',
    heroImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=800&auto=format&fit=crop'
    ],
    content: `
      <p>Project Two tackled a different challenge. Replace this with real content as needed.</p>
    `,
    team: [
      { id: 'maya-patel', role: 'Data Scientist' },
      { id: 'ethan-brown', role: 'Backend Engineer' }
    ]
  },
];

export default projects;
