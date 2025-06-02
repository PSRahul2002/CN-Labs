import { FileText, Download, Video, BookOpen, ExternalLink, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResourcesPage() {
  const whitepapers = [
    {
      title: "IPv6 Security Best Practices",
      description: "Comprehensive guide to securing IPv6 deployments in enterprise environments",
      category: "Security",
      downloadCount: "2.3k",
      fileSize: "2.1 MB",
    },
    {
      title: "SDN Testing Methodologies",
      description: "Advanced testing approaches for Software Defined Networking implementations",
      category: "SDN/NFV",
      downloadCount: "1.8k",
      fileSize: "3.4 MB",
    },
    {
      title: "CCTV Security Compliance Guide",
      description: "Understanding BIS requirements for CCTV security testing under IS 99999:2024",
      category: "Compliance",
      downloadCount: "3.1k",
      fileSize: "1.9 MB",
    },
  ]

  const testReports = [
    {
      title: "5G Network Security Assessment",
      description: "Comprehensive security testing report for 5G infrastructure components",
      category: "5G/Mobile",
      downloadCount: "892",
      fileSize: "4.2 MB",
    },
    {
      title: "IoT Device Vulnerability Analysis",
      description: "Security vulnerability assessment of popular IoT devices and platforms",
      category: "IoT",
      downloadCount: "1.5k",
      fileSize: "2.8 MB",
    },
  ]

  const webinars = [
    {
      title: "Transforming Computer Network Operations with AI",
      description: "Latest webinar on AI integration in network operations and security",
      date: "March 19, 2025",
      duration: "45 min",
      views: "2.1k",
    },
    {
      title: "IPv6 Security in Modern Networks",
      description: "Deep dive into IPv6 security challenges and solutions",
      date: "February 15, 2025",
      duration: "60 min",
      views: "1.8k",
    },
    {
      title: "CCTV Security Testing Standards",
      description: "Understanding the new BIS requirements for CCTV security",
      date: "January 20, 2025",
      duration: "40 min",
      views: "3.2k",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">Knowledge Resources</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Access our comprehensive library of whitepapers, test reports, webinars, and technical documentation to
              stay ahead in network security and testing.
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  placeholder="Search resources..."
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="whitepapers" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
              <TabsTrigger value="whitepapers">Whitepapers</TabsTrigger>
              <TabsTrigger value="reports">Test Reports</TabsTrigger>
              <TabsTrigger value="webinars">Webinars</TabsTrigger>
              <TabsTrigger value="guides">Guides</TabsTrigger>
            </TabsList>

            {/* Whitepapers */}
            <TabsContent value="whitepapers" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">Technical Whitepapers</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  In-depth technical documents covering the latest trends and best practices in network security and
                  testing
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whitepapers.map((paper, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                          {paper.category}
                        </Badge>
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <FileText className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-xl">{paper.title}</CardTitle>
                      <CardDescription className="text-base">{paper.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between text-sm text-slate-500">
                        <span>{paper.downloadCount} downloads</span>
                        <span>{paper.fileSize}</span>
                      </div>
                      <Button className="w-full group-hover:bg-slate-900 transition-colors">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Test Reports */}
            <TabsContent value="reports" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">Test Reports & Case Studies</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Real-world testing reports and case studies demonstrating our testing methodologies and findings
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {testReports.map((report, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {report.category}
                        </Badge>
                        <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <BookOpen className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-xl">{report.title}</CardTitle>
                      <CardDescription className="text-base">{report.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between text-sm text-slate-500">
                        <span>{report.downloadCount} downloads</span>
                        <span>{report.fileSize}</span>
                      </div>
                      <Button className="w-full group-hover:bg-slate-900 transition-colors">
                        <Download className="mr-2 h-4 w-4" />
                        Download Report
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Webinars */}
            <TabsContent value="webinars" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">Webinars & Presentations</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Educational webinars and presentations from our experts on the latest industry trends and technologies
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {webinars.map((webinar, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                          Webinar
                        </Badge>
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Video className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-xl">{webinar.title}</CardTitle>
                      <CardDescription className="text-base">{webinar.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between text-sm text-slate-500">
                        <span>{webinar.date}</span>
                        <span>{webinar.duration}</span>
                      </div>
                      <div className="text-sm text-slate-500">{webinar.views} views</div>
                      <Button className="w-full group-hover:bg-slate-900 transition-colors">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Watch Recording
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Guides */}
            <TabsContent value="guides" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">Implementation Guides</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Step-by-step guides and best practices for implementing secure network solutions
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 border-0 shadow-lg">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">Quick Start Guides</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-orange-600" />
                          <span className="text-slate-700">IPv6 Deployment Guide</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-orange-600" />
                          <span className="text-slate-700">SDN Implementation Checklist</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-orange-600" />
                          <span className="text-slate-700">Security Testing Methodology</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 border-0 shadow-lg">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center">
                      <FileText className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">Technical Documentation</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <BookOpen className="h-5 w-5 text-teal-600" />
                          <span className="text-slate-700">API Documentation</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <BookOpen className="h-5 w-5 text-teal-600" />
                          <span className="text-slate-700">Testing Procedures Manual</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <BookOpen className="h-5 w-5 text-teal-600" />
                          <span className="text-slate-700">Compliance Requirements</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">Stay Updated</h2>
              <p className="text-lg text-slate-600">
                Subscribe to our newsletter to receive the latest whitepapers, test reports, and industry insights
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
