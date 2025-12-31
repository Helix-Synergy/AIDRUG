import React, { useEffect, useState } from "react";
import { Sparkle } from "lucide-react";
import { Link } from "react-router-dom";
// Images for agri
import img1 from "../assets/tracks/img1.jpg";
import img2 from "../assets/tracks/img2.jpg"
import img3  from "../assets/tracks/img3.webp";
import img4 from "../assets/tracks/img4.webp";
import img5 from "../assets/tracks/img5.webp";
import img6 from "../assets/tracks/img6.webp"
import img7 from "../assets/tracks/img7.jpeg";
import img8 from "../assets/tracks/img8.jpeg"
import img9 from "../assets/tracks/img9.jpg";
import img10 from "../assets/tracks/img10.webp"
import img11 from "../assets/tracks/img11.avif";
import img12 from "../assets/tracks/img12.webp"
import img13 from "../assets/tracks/img13.jpg";
import img14 from "../assets/tracks/img14.webp"
import img15 from "../assets/tracks/img15.webp";
import img16 from "../assets/tracks/img16.webp"
import img17 from "../assets/tracks/img17.webp"
import img18 from "../assets/tracks/img18.avif";
import img19 from "../assets/tracks/img19.jpg"
import img20 from "../assets/tracks/img20.jpeg"

export const tracks = [
  {
    image: img1,
    title: "AI in Drug formulation",
    description: (
      <>
AI accelerates {" "}
        <Link
          to="/"
          className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       drug formulation
        </Link> by predicting optimal compound combinations, stability, and delivery methods. Machine learning models analyze chemical properties, reducing experimental trials, enhancing efficiency, and improving safety profiles, enabling faster development of effective pharmaceuticals while minimizing costs and enhancing precision in drug design and personalized therapies.
   
      </>
    ),
  },

  {
    image: img2,
    title: "R&D Innovation",
    description: (
      <>
R&D innovation drives breakthroughs in pharmaceuticals by integrating new technologies, methodologies, and scientific insights. It enhances efficiency, reduces costs, and improves outcomes in drug discovery, clinical research, and manufacturing. Innovative approaches, such as AI,{" "}
        <Link
          to="/about-aidrug" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
    nanotechnology,
        </Link>{" "} , and molecular modeling, enable the development of novel therapies and address unmet medical needs
      </>
    ),
  },

  {
    image: img3,
    title: "Healthcare",
    description: (
      <>
{" "}
        <Link
          to="/aidrug-event-schedule"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Healthcare
        </Link> focuses on the prevention, diagnosis, treatment, and management of diseases. Advances in technology, AI, and biotechnology improve patient care, personalize treatment, and optimize health outcomes. Integration of digital health solutions, precision medicine, and innovative therapies ensures efficient, accessible, and patient-centered healthcare systems worldwide.
      </>
    ),
  },

  {
    image: img4,
    title: "Early Discovery & Design",
    description: (
      <>
 Early discovery and design involve identifying promising drug candidates and designing molecules with therapeutic potential. Computational tools, high-throughput screening, and molecular modeling streamline target identification and lead optimization, reducing time and cost while improving the likelihood of developing effective, safe, and marketable pharmaceutical compounds.   {" "}
        <Link
          to="/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        > </Link>{" "} 

      </>
    ),
  },

  {
    image: img5 ,
    title: "Core Science & Technology",
    description: (
      <>
{" "}
        <Link
          to="/contact"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   Core science and technology
        </Link>{" "} underpin pharmaceutical research, providing foundational knowledge in chemistry, biology, and physics. Advanced analytical tools, biotechnology, and computational methods enable accurate experimentation, molecular understanding, and innovative solutions, forming the backbone of drug discovery, development, and therapeutic innovation.
   
      </>
    ),
  },

  {
    image: img6,
    title: "Toxicology",
    description: (
      <>

        <Link
          to= "/aidrug-orators" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
  Toxicology
        </Link>{" "}  studies the harmful effects of chemicals, drugs, and environmental agents on biological systems. It assesses safety, dosage limits, and risk factors, ensuring compounds are safe for human use. Preclinical toxicology testing identifies potential side effects and guides regulatory compliance in pharmaceutical development.
     
      </>
    ),
  },

  {
    image: img7,
    title: "Molecular Design",
    description: (
      <>
{" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
    
        </Link>{" "}  Molecular design involves creating molecules with specific biological activities using computational modeling, structure-activity relationships, and chemical synthesis. It enables rational drug design, optimizing efficacy, selectivity, and safety. Molecular design accelerates discovery of novel therapeutics and enhances targeted treatment strategies.
      </>
    ),
  },

  {
    image:  img8,
    title: "Pharmacoeconomics",
    description: (
      <>
  {" "}
        <Link
          to="/aidrug-orators" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
  Pharmacoeconomics
        </Link>{" "}  evaluates the cost-effectiveness, value, and economic impact of drugs and therapies. It helps healthcare systems, policymakers, and pharmaceutical companies make informed decisions regarding resource allocation, pricing, and reimbursement while balancing therapeutic benefits and financial sustainability.
      
      </>
    ),
  },

  {
    image: img9,
    title: "Bio Pharma Strategy",
    description: (
      <>
{" "}
        <Link
          to="/about-aidrug" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Biopharma strategy  
        </Link>{" "} focuses on guiding pharmaceutical companies in research, development, marketing, and commercialization. It involves portfolio management, competitive analysis, regulatory planning, and innovation adoption to maximize growth, patient impact, and market presence in a dynamic healthcare landscape.

      </>
    ),
  },

  {
    image: img10,
    title: "Drug Development",
    description: (
      <>
{" "}
        <Link
          to="/event_partners"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Drug development
        </Link>{" "}  encompasses the process of discovering, testing, and bringing new medications to market. It involves preclinical research, clinical trials, regulatory approval, and manufacturing. This structured process ensures efficacy, safety, and compliance while addressing unmet medical needs.
      </>
    ),
  },

  {
    image: img11,
    title: "AI in Clinical Research",
    description: (
      <>
     {" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
AI in clinical research
        </Link>  enhances trial design, patient recruitment, data analysis, and outcome prediction. Machine learning models optimize protocols, detect trends, and reduce trial duration and costs. AI improves efficiency, accuracy, and decision-making in developing safer, more effective therapies.
      </>

    ),
  },

  {
    image: img12,
    title: "Pharmacodynamics",
    description: (
      <>
 {" "}
        <Link
          to="/event_partners" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   Pharmacodynamics 
        </Link>{" "}  studies how drugs interact with biological systems, analyzing mechanisms of action, efficacy, and therapeutic effects. Understanding drug-receptor interactions, dose-response relationships, and biological pathways is essential for optimizing therapy and minimizing adverse effects.   
      
      </>
    ),
  },

  {
    image: img13,
    title: "Clinical Trials",
    description: (
      <>
{" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       API security
        </Link> Clinical trials test new drugs or treatments in human participants to evaluate safety, efficacy, and dosage. Conducted in phases, they follow strict regulatory standards, generating evidence required for drug approval, informed patient care, and medical advancement.

        
      </>
    ),
  },

  {
    image:img14,
    title: "Polypharmacology",
    description: (
      <>
 {" "}
        <Link
          to="/about-aidrug" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
    Polypharmacology
        </Link>  studies drugs affecting multiple targets simultaneously. This approach can improve efficacy, reduce resistance, and treat complex diseases like cancer or neurodegenerative disorders. It supports rational drug design and combination therapies for better patient outcomes.
        
      </>
    ),
  },

  {
    image: img15,
    title: "Pharma Analytics",
    description: (
      <>
      {" "}
        <Link
          to= "/aidrug-orators" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
     Pharma analytics 
        </Link> involves analyzing large datasets from clinical trials, drug manufacturing, and market trends to inform decision-making. Data-driven insights optimize research, supply chains, marketing, and patient outcomes, enhancing efficiency and competitive advantage in the pharmaceutical industry.
     
      </>
    ),
  },

  {
    image: img16,
    title: "Proteomics & Phenomics",
    description: (
      <>
{" "}
        <Link
          to=  "/aidrug-orators" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
        Proteomics and phenomics
        </Link>  study proteins and observable traits in biological systems. These approaches help understand disease mechanisms, identify biomarkers, and develop targeted therapies, enabling precision medicine and improved therapeutic interventions.
</>
    ),
  },

  {
    image:img17,
    title: "Cognitive Defense",
    description: (
      <>
 {" "}
        <Link
          to="/contact"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
     Nanotechnology
        </Link>  applies nanoscale materials and devices in drug delivery, diagnostics, and therapeutics. It improves bioavailability, targeting, and controlled release, enhancing treatment efficacy and safety while opening possibilities for innovative medical solutions.
  
      </>
    ),
  },
// Ethical

  {
    image: img18,
    title: "Gene & Cell Therapy",
    description: (
      <>
   {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   Gene and cell therapies
        </Link>  modify genetic material or cellular functions to treat diseases. Techniques like CRISPR, CAR-T, and stem cell therapies aim to correct genetic defects, restore function, or regenerate tissues, offering potential cures for previously untreatable conditions.

      </>
    ),
  },
  // Microbiome Engineering
  
  {
    image: img19,
    title: "Antibiotic Discovery",
    description: (
      <>
  Antibiotic discovery focuses on finding new agents to combat bacterial infections, especially resistant strains. Research involves screening natural products, synthetic compounds, and {" "}
        <Link
          to="/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
novel mechanisms,
        </Link>  aiming to address global antimicrobial resistance and safeguard public health.
      </>
    ),
  },
  {
    image:img20,
    title: "Oncology & Rare Diseases",
    description: (
      <>
Oncology targets cancer treatment through drugs, immunotherapies, and precision medicine, while rare disease research addresses low-prevalence conditions. Both fields prioritize innovative therapies, clinical trials, and personalized approaches to improve patient outcomes and quality of life.{" "}
        <Link
          to="/about-aidrug" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
</Link>{" "} 
       
      </>
    ),
  },
];

const StaticTracks = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <style>{`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0px rgba(44, 211, 35, 0.2);
          }
          50% {
            box-shadow: 0 0 18px 6px rgb(122,179,38);
          }
        }

        .animate-pulseShadow {
          animation: pulseShadow 3s ease-in-out infinite;
        }

        .transition-custom {
          transition: all 0.8s ease-in-out;
        }
      `}</style> */}

      <div className="relative mt-14">
        {/* Fixed Top-Right Button */}
        <div className="fixed top-[22%] right-[1%] z-50 transition-custom">
          <a
            href="/abstract-submission"
            aria-label="Submit abstract"
            className="bg-one rounded-full text-white text-sm font-medium px-3 py-3 select-none transition-transform hover:scale-110 animate-pulseShadow"
          >
            Submit Abstract
          </a>
        </div>

        {/* Track Content */}
        <div className="container mx-auto px-4 py-10 space-y-20 flex flex-col items-center">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="relative w-[80%] flex flex-col md:flex-row items-stretch md:space-x-6"
            >
              <div className="flex-shrink-0 bg-white border shadow-xl rounded-2xl p-2 w-full md:w-1/3">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white border shadow-xl rounded-2xl p-6 w-full md:w-2/3 mt-12 md:mt-0 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-1 text-one flex items-center gap-2">
                  <Sparkle className="fill-one" />
                  {track.title}
                </h2>
                <h3 className="text-xl text-gray-600 font-semibold mb-3">
                  {track.subtitle}
                </h3>
                <p className="text-md text-gray-800 leading-relaxed">
                  {track.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StaticTracks;
