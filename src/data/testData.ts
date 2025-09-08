export interface ProjectData {
  projectName: string;
  testData: {
    name: string;
    value: number;
    color: string;
  }[];
  highlights: string[];
}

export const mockProjectData: ProjectData[] = [
  {
    projectName: "User Authentication System",
    testData: [
      { name: "Pass", value: 142, color: "hsl(var(--chart-pass))" },
      { name: "Fail", value: 8, color: "hsl(var(--chart-fail))" },
      { name: "Skip", value: 5, color: "hsl(var(--chart-skip))" }
    ],
    highlights: [
      "✅ Completed OAuth integration with Google and GitHub",
      "🔄 Working on password reset flow enhancements", 
      "📱 Mobile authentication UI improvements in progress",
      "🔐 Two-factor authentication setup completed"
    ]
  },
  {
    projectName: "E-commerce Platform",
    testData: [
      { name: "Pass", value: 234, color: "hsl(var(--chart-pass))" },
      { name: "Fail", value: 15, color: "hsl(var(--chart-fail))" },
      { name: "Skip", value: 12, color: "hsl(var(--chart-skip))" }
    ],
    highlights: [
      "🛒 Shopping cart functionality fully tested and deployed",
      "💳 Payment gateway integration with Stripe completed",
      "🔄 Working on inventory management API tests",
      "📊 Product recommendation engine testing in progress"
    ]
  },
  {
    projectName: "Real-time Chat Application", 
    testData: [
      { name: "Pass", value: 89, color: "hsl(var(--chart-pass))" },
      { name: "Fail", value: 23, color: "hsl(var(--chart-fail))" },
      { name: "Skip", value: 7, color: "hsl(var(--chart-skip))" }
    ],
    highlights: [
      "💬 WebSocket connection stability tests completed",
      "🔄 Working on message encryption and security features",
      "📱 Mobile app real-time sync testing ongoing",
      "🎥 Video call functionality integration started"
    ]
  },
  {
    projectName: "Data Analytics Dashboard",
    testData: [
      { name: "Pass", value: 167, color: "hsl(var(--chart-pass))" },
      { name: "Fail", value: 4, color: "hsl(var(--chart-fail))" },
      { name: "Skip", value: 9, color: "hsl(var(--chart-skip))" }
    ],
    highlights: [
      "📈 Chart rendering and data visualization tests passing",
      "🔄 Working on real-time data streaming optimizations",
      "🔍 Advanced filtering and search functionality completed",
      "💾 Database query performance optimization in progress"
    ]
  },
  {
    projectName: "Content Management System",
    testData: [
      { name: "Pass", value: 198, color: "hsl(var(--chart-pass))" },
      { name: "Fail", value: 12, color: "hsl(var(--chart-fail))" },
      { name: "Skip", value: 15, color: "hsl(var(--chart-skip))" }
    ],
    highlights: [
      "📝 Rich text editor functionality fully tested",
      "🖼️ Media upload and processing pipeline completed",
      "🔄 Working on content versioning and revision history",
      "🔐 User permissions and role management testing ongoing"
    ]
  },
  {
    projectName: "Mobile Banking App",
    testData: [
      { name: "Pass", value: 156, color: "hsl(var(--chart-pass))" },
      { name: "Fail", value: 18, color: "hsl(var(--chart-fail))" },
      { name: "Skip", value: 6, color: "hsl(var(--chart-skip))" }
    ],
    highlights: [
      "🏦 Account balance and transaction history tests completed",
      "💸 Money transfer functionality security testing done",
      "🔄 Working on biometric authentication integration",
      "📱 Cross-platform compatibility testing in progress"
    ]
  }
];