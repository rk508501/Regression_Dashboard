import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

interface TestData {
  name: string;
  value: number;
  color: string;
}

interface ProjectCardProps {
  projectName: string;
  testData: TestData[];
  highlights: string[];
}

const CustomLegend = ({ payload, testData }: { payload?: any[]; testData: TestData[] }) => {
  const total = testData.reduce((sum, item) => sum + item.value, 0);
  
  return (
    <div className="flex flex-col space-y-2 mt-4">
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">All:</span>
          <span className="font-medium">{total}</span>
        </div>
        {testData.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-muted-foreground">{item.name}:</span>
            </div>
            <span className="font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  if (percent < 0.02) return null; // Don't show label if slice is too small (< 2%)
  
  const RADIAN = Math.PI / 180;
  const isThickSlice = percent >= 0.08; // 8% threshold for thick vs thin slices
  
  // For thick slices, position inside; for thin slices, position outside
  const radius = isThickSlice 
    ? innerRadius + (outerRadius - innerRadius) * 0.5 
    : outerRadius + 25;
    
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill={isThickSlice ? "white" : "hsl(var(--foreground))"} 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      className="text-xs font-medium"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const ProjectCard = ({ projectName, testData, highlights }: ProjectCardProps) => {
  return (
    <Card className="h-full shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow duration-300">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-foreground">{projectName}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={testData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                strokeWidth={2}
                stroke="hsl(var(--background))"
              >
                {testData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <CustomLegend testData={testData} />
        
        <div className="space-y-3">
          <h4 className="font-medium text-foreground">Project Highlights</h4>
          <div className="space-y-2">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground leading-relaxed">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};