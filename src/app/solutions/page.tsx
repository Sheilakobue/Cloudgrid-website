import React from "react";
import SolutionItem from "../../components/SolutionItem"; // Importing SolutionItem component from the correct path
import solutions from '../util/solution'

// SolutionList functional component definition
export default function SolutionList() {
  return (
    // Main section container with padding and background styling
    <section className="p-4 bg-white dark:bg-gray-800">
      {/* Section title */}
      <p className="text-center text-4xl font-bold mb-8 text-amber-500">
        Our Solutions
      </p>

      {/* Grid container for SolutionItems, adjusting layout based on screen size */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {/* SolutionItem components with different props */}
        {
          solutions?.map((item, i) => (
            <SolutionItem
              key={i}
              href={item.href}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              title={item.title}
              description={item.description}
            />
          ))
        }
      </div>
    </section>
  );
}
