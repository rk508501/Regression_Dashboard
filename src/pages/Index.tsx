import { ProjectCard } from "@/components/ProjectCard";
import { mockProjectData } from "@/data/testData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
              Analytics Test Automation
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive test automation results and project insights across all active development streams
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProjectData.map((project, index) => (
            <ProjectCard
              key={index}
              projectName={project.projectName}
              testData={project.testData}
              highlights={project.highlights}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-border bg-card/30">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-chart-pass"></div>
                <span>Passing Tests</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-chart-fail"></div>
                <span>Failing Tests</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-chart-skip"></div>
                <span>Skipped Tests</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;