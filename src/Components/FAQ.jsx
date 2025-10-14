"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ({ data }) {
    const { title, subtitle, faqs } = data;
    const [openItems, setOpenItems] = useState(new Set());

    const toggleItem = (id) => {
        const updated = new Set(openItems);
        if (updated.has(id)) updated.delete(id);
        else updated.add(id);
        setOpenItems(updated);
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        {title}
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleItem(item.id)}
                                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                            >
                                <div className="flex items-center space-x-4">
                                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                                        {item.id}
                                    </span>
                                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                        {item.question}
                                    </h3>
                                </div>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openItems.has(item.id) ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openItems.has(item.id)
                                    ? "max-h-96 opacity-100"
                                    : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="px-6 pb-6 ml-12">
                                    <div className="w-full h-px bg-gray-200 mb-4"></div>
                                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}






// "use client";

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";

// const faqData = [
//     {
//         id: 1,
//         question: "How much does restaurant app development cost?",
//         answer: "The cost of restaurant app development varies based on features, complexity, and platform. Basic apps typically range from $15,000-$40,000, while advanced apps with custom features, real-time tracking, and multiple integrations can cost $50,000-$150,000+. Factors affecting cost include UI/UX design complexity, backend development, third-party integrations, and ongoing maintenance requirements."
//     },
//     {
//         id: 2,
//         question: "How long does it take to develop a restaurant app?",
//         answer: "Restaurant app development typically takes 3-8 months depending on complexity. A basic app with essential features takes 3-4 months, while feature-rich apps with advanced functionality can take 6-8 months. The timeline includes planning, design, development, testing, and deployment phases. Factors like team size, feature complexity, and revision rounds can impact the overall timeline."
//     },
//     {
//         id: 3,
//         question: "What features should a restaurant app have?",
//         answer: "Essential features include: menu browsing with high-quality images, online ordering and payment processing, table reservation system, user registration and profiles, order tracking, push notifications, ratings and reviews, loyalty programs, and customer support chat. Advanced features may include AR menu visualization, voice ordering, AI-powered recommendations, and integration with POS systems."
//     },
//     {
//         id: 4,
//         question: "Do you offer custom restaurant app development?",
//         answer: "Yes, we provide fully customized restaurant app development tailored to your specific business needs. Our custom solutions include branded design, unique features, specialized workflows, custom integrations with your existing systems, and scalable architecture. We work closely with you to understand your requirements and create a solution that reflects your brand and serves your customers effectively."
//     },
//     {
//         id: 5,
//         question: "Can you develop an app for both Android and iOS?",
//         answer: "Absolutely! We offer cross-platform development using technologies like React Native or Flutter, which allows us to create apps that work seamlessly on both Android and iOS platforms. This approach reduces development time and costs while ensuring consistent user experience across devices. We also provide native development if platform-specific features are required."
//     },
//     {
//         id: 6,
//         question: "Do you provide post-launch support and maintenance?",
//         answer: "Yes, we offer comprehensive post-launch support including bug fixes, security updates, feature enhancements, performance optimization, and technical support. Our maintenance packages include regular app updates, server maintenance, analytics monitoring, and user feedback implementation. We ensure your app stays current with OS updates and industry standards."
//     },
//     {
//         id: 7,
//         question: "Can I integrate third-party services into my restaurant app?",
//         answer: "Yes, we can integrate various third-party services including payment gateways (Stripe, PayPal, Square), delivery platforms (DoorDash, Uber Eats), POS systems, inventory management tools, CRM systems, social media platforms, analytics tools, and marketing automation platforms. We ensure secure and reliable integrations that enhance your app's functionality."
//     },
//     {
//         id: 8,
//         question: "Do you develop restaurant marketplace apps like OpenTable and Yelp?",
//         answer: "Yes, we develop restaurant marketplace and discovery apps that connect multiple restaurants with customers. These platforms include features like restaurant listings, advanced search and filtering, reservation management, review systems, promotional tools for restaurants, commission-based models, and comprehensive admin panels for platform management."
//     },
//     {
//         id: 9,
//         question: "How do I hire restaurant app developers from JPLoft?",
//         answer: "To hire our restaurant app developers, start by contacting us through our website or phone. We'll schedule a consultation to discuss your project requirements, timeline, and budget. After understanding your needs, we'll provide a detailed proposal with our recommended team structure, timeline, and pricing. Once approved, we'll assign dedicated developers and begin the project with regular updates and communication."
//     },
//     {
//         id: 10,
//         question: "How do I get started with my restaurant app project?",
//         answer: "Getting started is easy! First, contact us to schedule a free consultation where we'll discuss your vision, target audience, and business goals. We'll then conduct a detailed requirement analysis, create wireframes and prototypes, and provide you with a comprehensive project roadmap and timeline. Our team will guide you through each step from concept to launch and beyond."
//     }
// ];

// export default function FAQ() {
//     const [openItems, setOpenItems] = useState(new Set());

//     const toggleItem = (id) => {
//         const newOpenItems = new Set(openItems);
//         if (newOpenItems.has(id)) {
//             newOpenItems.delete(id);
//         } else {
//             newOpenItems.add(id);
//         }
//         setOpenItems(newOpenItems);
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
//             <div className="max-w-4xl mx-auto">
//                 {/* Header */}
//                 <div className="text-center mb-12">
//                     <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                         Frequently Asked Questions
//                     </h1>
//                     <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
//                     <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//                         Find answers to common questions about restaurant app development,
//                         costs, timelines, and our services.
//                     </p>
//                 </div>

//                 {/* FAQ Items */}
//                 <div className="space-y-4">
//                     {faqData.map((item) => (
//                         <div
//                             key={item.id}
//                             className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300"
//                         >
//                             <button
//                                 onClick={() => toggleItem(item.id)}
//                                 className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
//                             >
//                                 <div className="flex items-center space-x-4">
//                                     <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
//                                         {item.id}
//                                     </span>
//                                     <h3 className="text-lg font-semibold text-gray-900 pr-4">
//                                         {item.question}
//                                     </h3>
//                                 </div>
//                                 <ChevronDown
//                                     className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${openItems.has(item.id) ? "transform rotate-180" : ""
//                                         }`}
//                                 />
//                             </button>

//                             <div
//                                 className={`transition-all duration-300 ease-in-out ${openItems.has(item.id)
//                                         ? "max-h-96 opacity-100"
//                                         : "max-h-0 opacity-0"
//                                     }`}
//                             >
//                                 <div className="px-6 pb-6 ml-12">
//                                     <div className="w-full h-px bg-gray-200 mb-4"></div>
//                                     <p className="text-gray-600 leading-relaxed">
//                                         {item.answer}
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>


//             </div>
//         </div>
//     );
// }