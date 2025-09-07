import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { X } from "lucide-react";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Finance", "Research", "Leadership", "Tech"];

  const filteredProjects =
    filter === "All"
      ? portfolioData
      : portfolioData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-8 sm:py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects & Case Studies
        </motion.h2>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === cat
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-slate-200 text-slate-700 hover:bg-slate-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          layout
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={`${project.title}-${idx}`}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden border border-slate-200"
              onClick={() => setSelectedProject(project)}
            >
              {project.images && project.images.length > 0 && (
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover"
                  loading="lazy"
                />
              )}
              <div className="p-4">
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 mb-3 line-clamp-2 sm:line-clamp-3">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.techStack && project.techStack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack && project.techStack.length > 3 && (
                    <span className="text-xs text-slate-500 px-2 py-1">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="bg-white rounded-2xl w-full max-w-6xl max-h-[95vh] overflow-hidden shadow-2xl border border-slate-200 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Close Button */}
              <div className="flex justify-between items-center p-4 sm:p-6 border-b border-slate-200">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 text-transparent bg-clip-text pr-8">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-500 hover:text-slate-900 transition-colors p-2 hover:bg-slate-100 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-full">
                  {/* Left: Description */}
                  <div className="p-4 sm:p-6 lg:p-8 flex flex-col">
                    <div className="space-y-4 text-sm sm:text-base text-slate-600 flex-1">
                      {selectedProject.challenge && (
                        <div>
                          <h4 className="font-bold text-slate-800 mb-2">The Challenge</h4>
                          <p className="leading-relaxed">{selectedProject.challenge}</p>
                        </div>
                      )}
                      {selectedProject.myRole && (
                        <div>
                          <h4 className="font-bold text-slate-800 mb-2">My Role</h4>
                          <p className="leading-relaxed">{selectedProject.myRole}</p>
                        </div>
                      )}
                      {selectedProject.solution && (
                        <div>
                          <h4 className="font-bold text-slate-800 mb-2">The Solution</h4>
                          <p className="leading-relaxed">{selectedProject.solution}</p>
                        </div>
                      )}
                      {selectedProject.impact && (
                        <div>
                          <h4 className="font-bold text-slate-800 mb-2">The Impact</h4>
                          <p className="leading-relaxed">{selectedProject.impact}</p>
                        </div>
                      )}
                    </div>
                    
                    {selectedProject.techStack && selectedProject.techStack.length > 0 && (
                      <div className="mt-6 pt-4 border-t border-slate-200">
                        <h4 className="font-bold text-slate-800 mb-3">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.techStack.map((tech, i) => (
                            <span
                              key={i}
                              className="text-xs sm:text-sm font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right: Gallery */}
                  {selectedProject.images && selectedProject.images.length > 0 && (
                    <div className="bg-slate-50 p-4 sm:p-6">
                      <h4 className="font-bold text-slate-800 mb-4 lg:hidden">Project Images</h4>
                      <div className="space-y-4">
                        {selectedProject.images.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt={`${selectedProject.title} - Image ${i + 1}`}
                            className="rounded-lg w-full h-auto object-cover shadow-sm"
                            loading="lazy"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;